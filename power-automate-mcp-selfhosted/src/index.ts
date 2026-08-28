import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { loadConfig } from "./config.js";
import { createLogger } from "./logging.js";
import { createTokenProvider } from "./auth/token-provider.js";
import { PowerPlatformClient } from "./power-platform/client.js";
import { JsonStore } from "./store/database.js";
import { StoreRepository } from "./store/repository.js";
import { registerMetaTools, type ToolContext } from "./tools/registry.js";
import { registerDiscoveryTools } from "./tools/discovery.js";
import { registerConnectorTools } from "./tools/connectors.js";
import { registerRunTools } from "./tools/runs.js";
import { registerStoreTools } from "./tools/store-tools.js";
import { registerAgentFlowTools } from "./tools/agent-flow.js";
import { startStdioTransport } from "./transports/stdio.js";
import { startHttpTransport } from "./transports/http.js";

export function createServerContext() {
  const config = loadConfig();
  const logger = createLogger(config);
  const tokenProvider = createTokenProvider(config);
  const platform = new PowerPlatformClient(config, tokenProvider, logger);
  const store = config.storeEnabled
    ? new StoreRepository(new JsonStore(config.storePath))
    : undefined;
  const context: ToolContext = {
    config,
    logger,
    platform,
    ...(store ? { store } : {}),
  };
  return { config, logger, context };
}

export function createMcpServer(context: ToolContext): McpServer {
  const server = new McpServer({
    name: "self-hosted-power-automate-mcp",
    version: "0.1.0",
  });
  registerMetaTools(server, context);
  registerDiscoveryTools(server, context);
  registerConnectorTools(server, context);
  registerRunTools(server, context);
  registerStoreTools(server, context);
  registerAgentFlowTools(server, context);
  return server;
}

async function main(): Promise<void> {
  const { config, logger, context } = createServerContext();
  if (config.transport === "http") {
    await startHttpTransport(() => createMcpServer(context), config, logger);
  } else {
    await startStdioTransport(createMcpServer(context), config, logger);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    console.error(
      JSON.stringify({
        level: "error",
        message:
          error instanceof Error ? error.message : "server startup failed",
      }),
    );
    process.exitCode = 1;
  });
}
