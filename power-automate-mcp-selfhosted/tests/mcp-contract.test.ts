import test from "node:test";
import assert from "node:assert/strict";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { InMemoryTransport } from "@modelcontextprotocol/sdk/inMemory.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { loadConfig } from "../src/config.js";
import { createLogger } from "../src/logging.js";
import { registerMetaTools } from "../src/tools/registry.js";
import { registerDiscoveryTools } from "../src/tools/discovery.js";
import { MockPlatform } from "./helpers/mock-platform.js";

function context() {
  const config = loadConfig({
    MCP_TRANSPORT: "stdio",
    STORE_ENABLED: "false",
    LOG_LEVEL: "silent",
  });
  return {
    config,
    logger: createLogger(config),
    platform: new MockPlatform(),
  };
}

test("server completes MCP initialize, listTools and server_info call", async () => {
  const ctx = context();
  const server = new McpServer({ name: "test-pa-mcp", version: "0.0.0" });
  registerMetaTools(server, ctx);
  registerDiscoveryTools(server, ctx);
  const [clientTransport, serverTransport] =
    InMemoryTransport.createLinkedPair();
  const client = new Client({ name: "test-client", version: "0.0.0" });
  await server.connect(serverTransport);
  await client.connect(clientTransport);
  const tools = await client.listTools();
  assert.ok(tools.tools.some((tool) => tool.name === "server_info"));
  assert.ok(tools.tools.some((tool) => tool.name === "list_live_flows"));
  const result = await client.callTool({ name: "server_info", arguments: {} });
  assert.equal(result.isError, undefined);
  const content = "content" in result ? result.content : [];
  assert.match(
    String((content as Array<{ text?: string }>)[0]?.text),
    /self-hosted-power-automate-mcp/,
  );
  await client.close();
  await server.close();
});
