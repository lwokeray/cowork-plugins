import test from "node:test";
import assert from "node:assert/strict";
import type { AddressInfo } from "node:net";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { loadConfig } from "../src/config.js";
import { createLogger } from "../src/logging.js";
import { startHttpTransport } from "../src/transports/http.js";
import { registerMetaTools } from "../src/tools/registry.js";
import { MockPlatform } from "./helpers/mock-platform.js";

test("HTTP transport preserves MCP session across initialize and tools/list", async () => {
  const apiKey = "test-key-012345678901234567890123456789";
  const loaded = loadConfig({
    MCP_TRANSPORT: "http",
    MCP_HTTP_API_KEY: apiKey,
    STORE_ENABLED: "false",
    LOG_LEVEL: "silent",
  });
  const config = { ...loaded, httpPort: 0 };
  const logger = createLogger(config);
  const context = { config, logger, platform: new MockPlatform() };
  const httpServer = await startHttpTransport(
    () => {
      const server = new McpServer({ name: "http-test", version: "0.0.0" });
      registerMetaTools(server, context);
      return server;
    },
    config,
    logger,
  );
  const port = (httpServer.address() as AddressInfo).port;
  const transport = new StreamableHTTPClientTransport(
    new URL(`http://127.0.0.1:${port}/mcp`),
    {
      requestInit: { headers: { "x-api-key": apiKey } },
    },
  );
  const client = new Client({ name: "http-client", version: "0.0.0" });
  try {
    await client.connect(transport);
    assert.ok(transport.sessionId);
    const tools = await client.listTools();
    assert.ok(tools.tools.some((tool) => tool.name === "server_info"));
  } finally {
    await client.close();
    await new Promise<void>((resolve) => httpServer.close(() => resolve()));
  }
});
