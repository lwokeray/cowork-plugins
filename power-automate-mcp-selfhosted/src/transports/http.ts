import { randomUUID } from "node:crypto";
import {
  createServer,
  type IncomingMessage,
  type Server,
  type ServerResponse,
} from "node:http";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { isInitializeRequest } from "@modelcontextprotocol/sdk/types.js";
import type { AppConfig } from "../config.js";
import { AppError, asAppError } from "../errors.js";
import type { Logger } from "../logging.js";
import { authenticateHttp, validateOrigin } from "../security/request-auth.js";

async function readBody(
  request: IncomingMessage,
  maxBytes: number,
): Promise<unknown> {
  const chunks: Buffer[] = [];
  let size = 0;
  for await (const chunk of request) {
    const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
    size += buffer.byteLength;
    if (size > maxBytes)
      throw new AppError(
        "PAYLOAD_TOO_LARGE",
        "HTTP request body exceeds configured limit",
        { status: 413 },
      );
    chunks.push(buffer);
  }
  const text = Buffer.concat(chunks).toString("utf8").trim();
  if (!text) return undefined;
  try {
    return JSON.parse(text) as unknown;
  } catch {
    throw new AppError(
      "VALIDATION_ERROR",
      "HTTP request body must be valid JSON",
      { status: 400 },
    );
  }
}

function sendError(response: ServerResponse, error: unknown): void {
  const safe = asAppError(error);
  response.statusCode = safe.status;
  response.setHeader("content-type", "application/json");
  response.end(
    JSON.stringify({
      jsonrpc: "2.0",
      id: null,
      error: { code: -32600, message: safe.message, data: { code: safe.code } },
    }),
  );
}

export async function startHttpTransport(
  createMcpServer: () => McpServer,
  config: AppConfig,
  logger: Logger,
): Promise<Server> {
  const sessions = new Map<
    string,
    { transport: StreamableHTTPServerTransport; server: McpServer }
  >();
  const httpServer = createServer(async (request, response) => {
    try {
      if (request.url === "/healthz" && request.method === "GET") {
        response.statusCode = 200;
        response.setHeader("content-type", "application/json");
        response.end(
          JSON.stringify({
            ok: true,
            service: "self-hosted-power-automate-mcp",
          }),
        );
        return;
      }
      if (
        request.url === "/mcp" &&
        (request.method === "GET" || request.method === "DELETE")
      ) {
        response.statusCode = 405;
        response.setHeader("allow", "POST");
        response.end("Method not allowed");
        return;
      }
      if (request.url !== "/mcp" || request.method !== "POST") {
        response.statusCode = 404;
        response.end("Not found");
        return;
      }
      authenticateHttp(request.headers, config);
      validateOrigin(request.headers, config.allowedOrigins);
      const body = await readBody(request, config.maxRequestBytes);
      const sessionHeader = request.headers["mcp-session-id"];
      const sessionId = Array.isArray(sessionHeader)
        ? sessionHeader[0]
        : sessionHeader;
      let session = sessionId ? sessions.get(sessionId) : undefined;
      if (!session) {
        if (sessionId || !isInitializeRequest(body)) {
          throw new AppError(
            "VALIDATION_ERROR",
            sessionId ? "Unknown MCP session" : "Initialize request required",
            { status: sessionId ? 404 : 400 },
          );
        }
        const server = createMcpServer();
        const transport = new StreamableHTTPServerTransport({
          sessionIdGenerator: randomUUID,
          onsessioninitialized: (id) => {
            sessions.set(id, { transport, server });
          },
          onsessionclosed: (id) => {
            sessions.delete(id);
          },
        });
        transport.onclose = () => {
          if (transport.sessionId) sessions.delete(transport.sessionId);
        };
        await server.connect(transport);
        session = { transport, server };
      }
      await session.transport.handleRequest(request, response, body);
    } catch (error) {
      logger.warn("HTTP MCP request rejected", {
        path: request.url,
        method: request.method,
        error: error instanceof Error ? error.message : "unknown",
      });
      if (!response.headersSent) sendError(response, error);
      else response.end();
    }
  });
  httpServer.on("close", () => {
    for (const { transport } of sessions.values()) void transport.close();
    sessions.clear();
  });
  await new Promise<void>((resolve, reject) => {
    httpServer.once("error", reject);
    httpServer.listen(config.httpPort, config.httpHost, () => {
      httpServer.off("error", reject);
      resolve();
    });
  });
  logger.info("MCP Streamable HTTP server listening", {
    host: config.httpHost,
    port: config.httpPort,
    path: "/mcp",
  });
  return httpServer;
}
