import "dotenv/config";

export type McpTransport = "stdio" | "http";

export interface AppConfig {
  transport: McpTransport;
  httpHost: string;
  httpPort: number;
  httpApiKey?: string;
  allowedOrigins: string[];
  platformApiUrl: string;
  platformApiVersion: string;
  accessToken?: string;
  accessTokenFile?: string;
  tenantId?: string;
  requestTimeoutMs: number;
  maxRequestBytes: number;
  maxResponseBytes: number;
  maxPageSize: number;
  storeEnabled: boolean;
  storePath: string;
  logLevel: "silent" | "error" | "warn" | "info" | "debug";
}

function stringValue(
  env: NodeJS.ProcessEnv,
  key: string,
  fallback?: string,
): string | undefined {
  const value = env[key];
  return value === undefined || value.trim() === "" ? fallback : value.trim();
}

function boolValue(
  env: NodeJS.ProcessEnv,
  key: string,
  fallback: boolean,
): boolean {
  const value = stringValue(env, key);
  if (value === undefined) return fallback;
  if (
    value.toLowerCase() === "true" ||
    value === "1" ||
    value.toLowerCase() === "yes"
  )
    return true;
  if (
    value.toLowerCase() === "false" ||
    value === "0" ||
    value.toLowerCase() === "no"
  )
    return false;
  throw new Error(`${key} must be true or false`);
}

function intValue(
  env: NodeJS.ProcessEnv,
  key: string,
  fallback: number,
  min: number,
  max: number,
): number {
  const value = stringValue(env, key);
  if (value === undefined) return fallback;
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed < min || parsed > max) {
    throw new Error(`${key} must be an integer between ${min} and ${max}`);
  }
  return parsed;
}

function isLoopback(host: string): boolean {
  return host === "127.0.0.1" || host === "localhost" || host === "::1";
}

export function loadConfig(env: NodeJS.ProcessEnv = process.env): AppConfig {
  const transport = (stringValue(env, "MCP_TRANSPORT", "stdio") ??
    "stdio") as McpTransport;
  if (transport !== "stdio" && transport !== "http") {
    throw new Error("MCP_TRANSPORT must be stdio or http");
  }

  const httpHost =
    stringValue(env, "MCP_HTTP_HOST", "127.0.0.1") ?? "127.0.0.1";
  const httpPort = intValue(env, "MCP_HTTP_PORT", 8787, 1, 65535);
  const httpApiKey = stringValue(env, "MCP_HTTP_API_KEY");
  const allowedOrigins = (stringValue(env, "MCP_ALLOWED_ORIGINS", "") ?? "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
  if (transport === "http" && !httpApiKey) {
    throw new Error("MCP_HTTP_API_KEY is required when MCP_TRANSPORT=http");
  }
  if (transport === "http" && !isLoopback(httpHost) && !httpApiKey) {
    throw new Error("A non-loopback HTTP host requires MCP_HTTP_API_KEY");
  }

  const accessToken = stringValue(env, "POWER_PLATFORM_ACCESS_TOKEN");
  const accessTokenFile = stringValue(env, "POWER_PLATFORM_ACCESS_TOKEN_FILE");
  if (accessToken && accessTokenFile) {
    throw new Error(
      "Set only one of POWER_PLATFORM_ACCESS_TOKEN or POWER_PLATFORM_ACCESS_TOKEN_FILE",
    );
  }

  const platformApiUrl =
    stringValue(
      env,
      "POWER_PLATFORM_API_URL",
      "https://api.powerplatform.com",
    ) ?? "https://api.powerplatform.com";
  const parsedPlatformUrl = new URL(platformApiUrl);
  if (parsedPlatformUrl.protocol !== "https:") {
    throw new Error("POWER_PLATFORM_API_URL must use HTTPS");
  }
  const maxRequestBytes = intValue(
    env,
    "MAX_REQUEST_BYTES",
    1024 * 1024,
    1024,
    10 * 1024 * 1024,
  );
  const maxResponseBytes = intValue(
    env,
    "MAX_RESPONSE_BYTES",
    5 * 1024 * 1024,
    1024,
    50 * 1024 * 1024,
  );
  const logLevel = stringValue(env, "LOG_LEVEL", "info") ?? "info";
  if (!["silent", "error", "warn", "info", "debug"].includes(logLevel)) {
    throw new Error("LOG_LEVEL must be silent, error, warn, info, or debug");
  }

  return {
    transport,
    httpHost,
    httpPort,
    ...(httpApiKey ? { httpApiKey } : {}),
    allowedOrigins,
    platformApiUrl,
    platformApiVersion:
      stringValue(env, "POWER_PLATFORM_API_VERSION", "2024-10-01") ??
      "2024-10-01",
    ...(accessToken ? { accessToken } : {}),
    ...(accessTokenFile ? { accessTokenFile } : {}),
    ...(stringValue(env, "POWER_PLATFORM_TENANT_ID")
      ? { tenantId: stringValue(env, "POWER_PLATFORM_TENANT_ID") }
      : {}),
    requestTimeoutMs: intValue(
      env,
      "REQUEST_TIMEOUT_MS",
      30_000,
      1000,
      300_000,
    ),
    maxRequestBytes,
    maxResponseBytes,
    maxPageSize: intValue(env, "MAX_PAGE_SIZE", 100, 1, 1000),
    storeEnabled: boolValue(env, "STORE_ENABLED", true),
    storePath:
      stringValue(env, "STORE_PATH", "./data/store.json") ??
      "./data/store.json",
    logLevel: logLevel as AppConfig["logLevel"],
  };
}
