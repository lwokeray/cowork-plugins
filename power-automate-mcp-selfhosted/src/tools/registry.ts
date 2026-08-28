import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { AppConfig } from "../config.js";
import { publicError } from "../errors.js";
import type { Logger } from "../logging.js";
import type {
  ConnectionRecord,
  ConnectorRecord,
  EnvironmentRecord,
  FlowActionDetail,
  FlowRun,
  FlowSummary,
} from "../power-platform/models.js";
import { limitedJson } from "../power-platform/redaction.js";
import type { StoreRepository } from "../store/repository.js";

export interface PlatformOperations {
  listEnvironments(): Promise<EnvironmentRecord[]>;
  listConnections(environmentId: string): Promise<ConnectionRecord[]>;
  listConnectors(environmentId: string): Promise<ConnectorRecord[]>;
  getConnector(
    environmentId: string,
    connectorName: string,
  ): Promise<ConnectorRecord>;
  listFlows(
    environmentId: string,
    options?: {
      top?: number;
      continuationUrl?: string;
      search?: string;
    },
  ): Promise<{ flows: FlowSummary[]; nextLink?: string }>;
  listFlowActions(
    environmentId: string,
    query?: Record<string, string | boolean | undefined>,
  ): Promise<FlowActionDetail[]>;
  listRuns(
    environmentId: string,
    flowId: string,
    options?: { top?: number; continuationUrl?: string },
  ): Promise<{ runs: FlowRun[]; nextLink?: string }>;
}

export interface ToolContext {
  config: AppConfig;
  logger: Logger;
  platform: PlatformOperations;
  store?: StoreRepository;
}

export function jsonResult(value: unknown, maxBytes = 5 * 1024 * 1024) {
  return {
    content: [
      {
        type: "text" as const,
        text: JSON.stringify(limitedJson(value, maxBytes)),
      },
    ],
  };
}

export function errorResult(error: unknown) {
  const safe = publicError(error);
  return {
    isError: true,
    content: [{ type: "text" as const, text: JSON.stringify({ error: safe }) }],
  };
}

export function registerTool(
  server: McpServer,
  name: string,
  description: string,
  inputSchema: Record<string, unknown>,
  handler: (args: Record<string, unknown>) => Promise<unknown>,
  annotations: Record<string, unknown> = {},
): void {
  const api = server as unknown as {
    registerTool: (
      toolName: string,
      config: Record<string, unknown>,
      callback: (args: Record<string, unknown>) => Promise<unknown>,
    ) => unknown;
  };
  api.registerTool(
    name,
    { description, inputSchema, annotations },
    async (args) => {
      try {
        return jsonResult(await handler(args));
      } catch (error) {
        return errorResult(error);
      }
    },
  );
}

export function registerMetaTools(
  server: McpServer,
  context: ToolContext,
): void {
  registerTool(
    server,
    "server_info",
    "Return capabilities, safety mode, and upstream API configuration without secrets.",
    {},
    async () => ({
      name: "self-hosted-power-automate-mcp",
      version: "0.1.0",
      transport: context.config.transport,
      readOnly: true,
      writesSupported: false,
      storeEnabled: Boolean(context.store),
      platformApiVersion: context.config.platformApiVersion,
      capabilities: [
        "environment-discovery",
        "connection-discovery",
        "flow-discovery",
        "connector-actions",
        "run-summary",
        "monitoring-overlay",
        "copilot-agent-flow",
      ],
    }),
    { readOnlyHint: true, destructiveHint: false },
  );
}

export function getString(args: Record<string, unknown>, key: string): string {
  const value = args[key];
  if (typeof value !== "string" || !value.trim())
    throw new Error(`${key} is required`);
  return value.trim();
}

export function getOptionalString(
  args: Record<string, unknown>,
  key: string,
): string | undefined {
  const value = args[key];
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

export function getNumber(
  args: Record<string, unknown>,
  key: string,
): number | undefined {
  const value = args[key];
  return typeof value === "number" && Number.isFinite(value)
    ? value
    : undefined;
}
