import test from "node:test";
import assert from "node:assert/strict";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { InMemoryTransport } from "@modelcontextprotocol/sdk/inMemory.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { loadConfig } from "../src/config.js";
import { createLogger } from "../src/logging.js";
import { registerAgentFlowTools } from "../src/tools/agent-flow.js";
import { MockPlatform } from "./helpers/mock-platform.js";

async function setup() {
  const config = loadConfig({
    MCP_TRANSPORT: "stdio",
    STORE_ENABLED: "false",
    LOG_LEVEL: "silent",
  });
  const platform = new MockPlatform();
  const server = new McpServer({ name: "agent-flow-test", version: "0.0.0" });
  registerAgentFlowTools(server, {
    config,
    logger: createLogger(config),
    platform,
  });
  const [clientTransport, serverTransport] =
    InMemoryTransport.createLinkedPair();
  const client = new Client({ name: "agent-flow-client", version: "0.0.0" });
  await server.connect(serverTransport);
  await client.connect(clientTransport);
  return { client, server, platform };
}

function parse(result: unknown): Record<string, unknown> {
  const content =
    result && typeof result === "object" && "content" in result
      ? (result as { content: unknown }).content
      : [];
  return JSON.parse(
    String((content as Array<{ text?: string }>)[0]?.text ?? "{}"),
  ) as Record<string, unknown>;
}

test("Copilot Studio discover orchestration is bounded and read-only", async () => {
  const { client, server, platform } = await setup();
  const result = parse(
    await client.callTool({
      name: "run_copilot_agent_flow",
      arguments: { workflow: "discover", environmentId: "env-1" },
    }),
  );
  assert.equal(result.status, "completed");
  assert.equal(result.correlationId !== undefined, true);
  assert.equal(
    platform.calls.some((call) => call.method === "listEnvironments"),
    true,
  );
  assert.equal(
    platform.calls.some((call) => call.method === "listFlows"),
    true,
  );
  await client.close();
  await server.close();
});

test("Copilot Studio diagnose returns run summary without claiming root cause", async () => {
  const { client, server, platform } = await setup();
  const result = parse(
    await client.callTool({
      name: "run_copilot_agent_flow",
      arguments: {
        workflow: "diagnose",
        environmentId: "env-1",
        flowId: "flow-1",
        runId: "run-1",
      },
    }),
  );
  assert.equal(result.status, "completed");
  assert.equal(result.actionLevelRuntimeDetailsAvailable, false);
  assert.equal(
    platform.calls.some((call) => call.method === "listFlowActions"),
    true,
  );
  await client.close();
  await server.close();
});

test("unsupported write workflow is rejected by the tool schema", async () => {
  const { client, server } = await setup();
  const result = await client.callTool({
    name: "run_copilot_agent_flow",
    arguments: {
      workflow: "prepare_update",
    },
  });
  assert.equal(result.isError, true);
  await client.close();
  await server.close();
});
