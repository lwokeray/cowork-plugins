import type { AppConfig } from "../config.js";
import { AppError } from "../errors.js";
import type { Logger } from "../logging.js";
import { endpoint } from "./endpoints.js";
import { collectPages } from "./pagination.js";
import type {
  ConnectionRecord,
  ConnectorRecord,
  EnvironmentRecord,
  FlowActionDetail,
  FlowRun,
  FlowSummary,
  JsonObject,
} from "./models.js";
import type { TokenProvider } from "../auth/token-provider.js";

export interface ListOptions {
  top?: number;
  continuationUrl?: string;
  search?: string;
}

function asObject(value: unknown): JsonObject {
  return value && typeof value === "object" && !Array.isArray(value)
    ? (value as JsonObject)
    : {};
}

function stringField(...values: unknown[]): string | undefined {
  return values.find(
    (value): value is string => typeof value === "string" && value.length > 0,
  );
}

function normalizeEnvironment(value: unknown): EnvironmentRecord | undefined {
  const item = asObject(value);
  const properties = asObject(item.properties);
  const id = stringField(item.id, item.name, properties.id);
  if (!id) return undefined;
  return {
    ...item,
    id,
    displayName: stringField(item.displayName, properties.displayName),
    location: stringField(
      item.location,
      properties.azureRegion,
      properties.geo,
    ),
    state: stringField(item.state, properties.state),
    sku: stringField(item.sku, properties.environmentSku, properties.type),
    ...(typeof properties.isDefault === "boolean"
      ? { isDefault: properties.isDefault }
      : {}),
  };
}

function normalizeConnection(value: unknown): ConnectionRecord | undefined {
  const item = asObject(value);
  const properties = asObject(item.properties);
  const id = stringField(item.id, item.name);
  if (!id) return undefined;
  return {
    ...item,
    id,
    displayName: stringField(item.displayName, properties.displayName),
    connectorName: stringField(
      item.connectorName,
      properties.apiId,
      properties.connectorName,
    ),
    overallStatus: stringField(item.overallStatus, properties.overallStatus),
  };
}

function normalizeConnector(value: unknown): ConnectorRecord | undefined {
  const item = asObject(value);
  const properties = asObject(item.properties);
  const id = stringField(item.id, item.name);
  if (!id) return undefined;
  return {
    ...item,
    id,
    name: stringField(item.name, id),
    displayName: stringField(item.displayName, properties.displayName),
    tier: stringField(item.tier, properties.tier),
    ...(typeof properties.isCustomApi === "boolean"
      ? { isCustomApi: properties.isCustomApi }
      : {}),
  };
}

function normalizeFlow(value: unknown): FlowSummary | undefined {
  const item = asObject(value);
  const properties = asObject(item.properties);
  const id = stringField(item.id, item.name, item.workflowId);
  if (!id) return undefined;
  return {
    ...item,
    id,
    displayName: stringField(item.displayName, properties.displayName),
    state: stringField(item.state, properties.state),
    createdTime: stringField(item.createdTime, properties.createdTime),
    lastModifiedTime: stringField(
      item.lastModifiedTime,
      properties.lastModifiedTime,
    ),
  };
}

function normalizeRun(value: unknown): FlowRun | undefined {
  const item = asObject(value);
  const properties = asObject(item.properties);
  const name = stringField(item.name, item.id, properties.name);
  if (!name) return undefined;
  return {
    ...item,
    name,
    status: stringField(item.status, properties.status),
    startTime: stringField(item.startTime, properties.startTime),
    endTime: stringField(item.endTime, properties.endTime),
    triggerName: stringField(item.triggerName, properties.triggerName),
    ...(item.error !== undefined
      ? { error: item.error }
      : properties.error !== undefined
        ? { error: properties.error }
        : {}),
  };
}

function normalizeAction(value: unknown): FlowActionDetail | undefined {
  const item = asObject(value);
  const properties = asObject(item.properties);
  const actionName = stringField(
    item.actionName,
    item.name,
    properties.actionName,
  );
  if (!actionName) return undefined;
  return {
    ...item,
    actionName,
    status: stringField(item.status, properties.status),
    code: stringField(item.code, properties.code),
  };
}

function parseErrorMessage(payload: unknown, fallback: string): string {
  const object = asObject(payload);
  const nested = asObject(object.error);
  const message = nested.message ?? object.message;
  return typeof message === "string" && message.trim()
    ? message.trim().slice(0, 800)
    : fallback;
}

export class PowerPlatformClient {
  private readonly baseUrl: URL;
  private readonly config: AppConfig;
  private readonly tokenProvider: TokenProvider;
  private readonly logger: Logger;

  constructor(config: AppConfig, tokenProvider: TokenProvider, logger: Logger) {
    this.config = config;
    this.baseUrl = new URL(
      config.platformApiUrl.endsWith("/")
        ? config.platformApiUrl
        : `${config.platformApiUrl}/`,
    );
    this.tokenProvider = tokenProvider;
    this.logger = logger;
  }

  private resolve(pathOrUrl: string): URL {
    const url = new URL(pathOrUrl, this.baseUrl);
    if (url.origin !== this.baseUrl.origin || url.protocol !== "https:") {
      throw new AppError(
        "VALIDATION_ERROR",
        "Power Platform URL is outside the configured HTTPS API origin",
        { status: 400 },
      );
    }
    return url;
  }

  async request<T = unknown>(
    method: string,
    pathOrUrl: string,
    body?: unknown,
    attempt = 0,
  ): Promise<T> {
    const url = this.resolve(pathOrUrl);
    const token = await this.tokenProvider.getAccessToken();
    const headers: Record<string, string> = {
      accept: "application/json",
      authorization: `Bearer ${token}`,
      "user-agent": "self-hosted-power-automate-mcp/0.1",
    };
    if (body !== undefined) {
      headers["content-type"] = "application/json";
    }
    const controller = new AbortController();
    const timeout = setTimeout(
      () => controller.abort(),
      this.config.requestTimeoutMs,
    );
    const requestInit: RequestInit = {
      method,
      headers,
      signal: controller.signal,
      redirect: "error",
    };
    if (body !== undefined) requestInit.body = JSON.stringify(body);
    try {
      const response = await fetch(url, requestInit);
      const bytes = new Uint8Array(await response.arrayBuffer());
      if (bytes.byteLength > this.config.maxResponseBytes) {
        throw new AppError(
          "PAYLOAD_TOO_LARGE",
          `Power Platform response exceeds ${this.config.maxResponseBytes} bytes`,
          { status: 502 },
        );
      }
      const text = new TextDecoder().decode(bytes);
      const payload: unknown = text.trim() ? this.parseJson(text) : undefined;
      if (!response.ok) {
        const retryable =
          method === "GET" &&
          (response.status === 429 || response.status >= 500);
        if (retryable && attempt < 2) {
          const retryAfter = Math.min(
            Number(response.headers.get("retry-after") ?? "1") || 1,
            5,
          );
          this.logger.warn("Retrying safe Power Platform request", {
            method,
            path: url.pathname,
            status: response.status,
            retryAfter,
          });
          await new Promise((resolve) =>
            setTimeout(resolve, retryAfter * 1000),
          );
          return this.request<T>(method, pathOrUrl, body, attempt + 1);
        }
        const code =
          response.status === 401 || response.status === 403
            ? "AUTH_FAILED"
            : response.status === 404
              ? "NOT_FOUND"
              : response.status === 429
                ? "RATE_LIMITED"
                : "UPSTREAM_ERROR";
        throw new AppError(
          code,
          `Power Platform API ${response.status}: ${parseErrorMessage(payload, response.statusText)}`,
          {
            status: response.status,
            retryable,
            details: { upstreamStatus: response.status, path: url.pathname },
          },
        );
      }
      return payload as T;
    } catch (error) {
      if (error instanceof AppError) throw error;
      if (error instanceof DOMException && error.name === "AbortError") {
        throw new AppError(
          "UPSTREAM_ERROR",
          `Power Platform request timed out after ${this.config.requestTimeoutMs} ms`,
          { status: 504, retryable: method === "GET" },
        );
      }
      throw new AppError(
        "UPSTREAM_ERROR",
        error instanceof Error
          ? error.message.slice(0, 800)
          : "Power Platform request failed",
        { status: 502 },
      );
    } finally {
      clearTimeout(timeout);
    }
  }

  private parseJson(text: string): unknown {
    try {
      return JSON.parse(text);
    } catch {
      return { raw: text.slice(0, 2_000) };
    }
  }

  async listEnvironments(): Promise<EnvironmentRecord[]> {
    const payload = await this.request<unknown>(
      "GET",
      endpoint.environments(this.config.platformApiVersion),
    );
    return this.arrayFromPayload(payload)
      .map(normalizeEnvironment)
      .filter((item): item is EnvironmentRecord => Boolean(item));
  }

  async listConnections(environmentId: string): Promise<ConnectionRecord[]> {
    const payload = await this.request<unknown>(
      "GET",
      endpoint.connections(environmentId, this.config.platformApiVersion),
    );
    return this.arrayFromPayload(payload)
      .map(normalizeConnection)
      .filter((item): item is ConnectionRecord => Boolean(item));
  }

  async listConnectors(environmentId: string): Promise<ConnectorRecord[]> {
    const payload = await this.request<unknown>(
      "GET",
      endpoint.connectors(environmentId, this.config.platformApiVersion),
    );
    return this.arrayFromPayload(payload)
      .map(normalizeConnector)
      .filter((item): item is ConnectorRecord => Boolean(item));
  }

  async getConnector(
    environmentId: string,
    connectorName: string,
  ): Promise<ConnectorRecord> {
    const payload = await this.request<unknown>(
      "GET",
      endpoint.connector(
        environmentId,
        connectorName,
        this.config.platformApiVersion,
      ),
    );
    const connector = normalizeConnector(
      this.arrayFromPayload(payload)[0] ?? payload,
    );
    if (!connector)
      throw new AppError(
        "UPSTREAM_ERROR",
        "Power Platform returned an invalid connector response",
        { status: 502 },
      );
    return connector;
  }

  async listFlows(
    environmentId: string,
    options: ListOptions = {},
  ): Promise<{ flows: FlowSummary[]; nextLink?: string }> {
    const continuationUrl = options.continuationUrl;
    const first = continuationUrl
      ? () =>
          this.request<unknown>("GET", this.safeContinuation(continuationUrl))
      : () =>
          this.request<unknown>(
            "GET",
            endpoint.cloudFlows(environmentId, this.config.platformApiVersion),
          );
    const result = await collectPages<FlowSummary>(
      first,
      (url) => this.request<unknown>("GET", this.safeContinuation(url)),
      Math.min(options.top ?? this.config.maxPageSize, this.config.maxPageSize),
    );
    const search = options.search?.toLowerCase();
    const normalized = result.items
      .map(normalizeFlow)
      .filter((item): item is FlowSummary => Boolean(item));
    const flows = search
      ? normalized.filter((flow) =>
          String(flow.displayName ?? "")
            .toLowerCase()
            .includes(search),
        )
      : normalized;
    return {
      flows,
      ...(result.nextLink ? { nextLink: result.nextLink } : {}),
    };
  }

  async listRuns(
    environmentId: string,
    flowId: string,
    options: { top?: number; continuationUrl?: string } = {},
  ): Promise<{ runs: FlowRun[]; nextLink?: string }> {
    const continuationUrl = options.continuationUrl;
    const first = continuationUrl
      ? () =>
          this.request<unknown>("GET", this.safeContinuation(continuationUrl))
      : () =>
          this.request<unknown>(
            "GET",
            endpoint.flowRuns(
              environmentId,
              flowId,
              this.config.platformApiVersion,
            ),
          );
    const result = await collectPages<FlowRun>(
      first,
      (url) => this.request<unknown>("GET", this.safeContinuation(url)),
      Math.min(options.top ?? this.config.maxPageSize, this.config.maxPageSize),
    );
    return {
      runs: result.items
        .map(normalizeRun)
        .filter((item): item is FlowRun => Boolean(item)),
      ...(result.nextLink ? { nextLink: result.nextLink } : {}),
    };
  }

  async listFlowActions(
    environmentId: string,
    query: Record<string, string | boolean | undefined> = {},
  ): Promise<FlowActionDetail[]> {
    const payload = await this.request<unknown>(
      "GET",
      endpoint.flowActions(
        environmentId,
        this.config.platformApiVersion,
        query,
      ),
    );
    return this.arrayFromPayload(payload)
      .map(normalizeAction)
      .filter((item): item is FlowActionDetail => Boolean(item));
  }

  private safeContinuation(url: string): string {
    const parsed = new URL(url, this.baseUrl);
    if (parsed.origin !== this.baseUrl.origin || parsed.protocol !== "https:")
      throw new AppError(
        "VALIDATION_ERROR",
        "Continuation URL is outside the configured Power Platform API origin",
        { status: 400 },
      );
    return parsed.toString();
  }

  private arrayFromPayload(payload: unknown): unknown[] {
    if (Array.isArray(payload)) return payload;
    if (payload && typeof payload === "object") {
      const object = payload as Record<string, unknown>;
      if (Array.isArray(object.value)) return object.value;
      if (Array.isArray(object.items)) return object.items;
      if (Array.isArray(object.connections)) return object.connections;
      if (Array.isArray(object.flows)) return object.flows;
    }
    return [];
  }
}
