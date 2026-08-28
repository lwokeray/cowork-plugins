import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { AppConfig } from "../config.js";
import type { Logger } from "../logging.js";

export async function startStdioTransport(
  server: McpServer,
  config: AppConfig,
  logger: Logger,
): Promise<void> {
  const transport = new StdioServerTransport(process.stdin, process.stdout, {
    maxBufferSize: config.maxResponseBytes,
  });
  transport.onerror = (error) =>
    logger.error("MCP stdio transport error", { error: error.message });
  await server.connect(transport);
  logger.info("MCP stdio server started", { readOnly: true });
}
