import test from "node:test";
import assert from "node:assert/strict";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { loadConfig } from "../src/config.js";
import { createLogger } from "../src/logging.js";
import { registerDiscoveryTools } from "../src/tools/discovery.js";
import { registerRunTools } from "../src/tools/runs.js";
import { MockPlatform } from "./helpers/mock-platform.js";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { InMemoryTransport } from "@modelcontextprotocol/sdk/inMemory.js";

async function clientFor() {
  const platform = new MockPlatform();
  const config = loadConfig({
    MCP_TRANSPORT: "stdio",
    STORE_ENABLED: "false",
    LOG_LEVEL: "silent",
  });
  const server = new McpServer({ name: "read-test", version: "0.0.0" });
  const context = {
    config,
    logger: createLogger(config),
    platform,
  };
  registerDiscoveryTools(server, context);
  registerRunTools(server, context);
  const [clientTransport, serverTransport] =
    InMemoryTransport.createLinkedPair();
  const client = new Client({ name: "read-test-client", version: "0.0.0" });
  await server.connect(serverTransport);
  await client.connect(clientTransport);
  return { client, server, platform };
}

function text(result: unknown): string {
  const content =
    result && typeof result === "object" && "content" in result
      ? (result as { content: unknown }).content
      : [];
  return String((content as Array<{ text?: string }>)[0]?.text ?? "");
}

test("discovery and debugging tools return normalized data", async () => {
  const { client, server, platform } = await clientFor();
  const flows = await client.callTool({
    name: "list_live_flows",
    arguments: { environmentId: "env-1" },
  });
  assert.match(text(flows), /Incident flow/);
  const summary = await client.callTool({
    name: "get_live_flow_run_summary",
    arguments: { environmentId: "env-1", flowId: "flow-1", runId: "run-1" },
  });
  assert.match(text(summary), /run-1/);
  assert.match(text(summary), /actionLevelRuntimeDetailsAvailable/);
  assert.ok(platform.calls.some((call) => call.method === "listRuns"));
  await client.close();
  await server.close();
});
