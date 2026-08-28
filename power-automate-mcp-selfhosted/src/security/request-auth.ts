import { timingSafeEqual } from "node:crypto";
import type { IncomingHttpHeaders } from "node:http";
import type { AppConfig } from "../config.js";
import { AppError } from "../errors.js";

function equalSecret(
  actual: string | undefined,
  expected: string | undefined,
): boolean {
  if (!actual || !expected) return false;
  const left = Buffer.from(actual);
  const right = Buffer.from(expected);
  return left.length === right.length && timingSafeEqual(left, right);
}

export function authenticateHttp(
  headers: IncomingHttpHeaders,
  config: AppConfig,
): void {
  if (!config.httpApiKey)
    throw new AppError("AUTH_REQUIRED", "HTTP API key is not configured", {
      status: 401,
    });
  const supplied =
    typeof headers["x-api-key"] === "string" ? headers["x-api-key"] : undefined;
  if (!equalSecret(supplied, config.httpApiKey)) {
    throw new AppError("AUTH_FAILED", "Invalid MCP API key", { status: 401 });
  }
}

export function validateOrigin(
  headers: IncomingHttpHeaders,
  allowedOrigins: string[],
): void {
  const origin = headers.origin;
  if (!origin) return;
  if (!allowedOrigins.includes(origin)) {
    throw new AppError("AUTH_FAILED", "Origin is not allowed", { status: 403 });
  }
}
