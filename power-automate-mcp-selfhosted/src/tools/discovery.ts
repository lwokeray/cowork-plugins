import {
  registerTool,
  getNumber,
  getOptionalString,
  getString,
  type ToolContext,
} from "./registry.js";
import { z } from "zod";
import { boundedTop } from "../security/limits.js";
import { listActionsSchema, listFlowsSchema } from "./schemas.js";

export function registerDiscoveryTools(
  server: Parameters<typeof registerTool>[0],
  context: ToolContext,
): void {
  registerTool(
    server,
    "list_live_environments",
    "List Power Platform environments available to the authenticated identity.",
    {},
    async () => context.platform.listEnvironments(),
    { readOnlyHint: true, destructiveHint: false, openWorldHint: true },
  );

  registerTool(
    server,
    "list_live_connections",
    "List Power Platform connections in one environment. Use this before building a flow so connector and connection references are current.",
    {
      environmentId: z.string().min(1).max(200),
    },
    async (args) =>
      context.platform.listConnections(getString(args, "environmentId")),
    { readOnlyHint: true, destructiveHint: false, openWorldHint: true },
  );

  registerTool(
    server,
    "list_live_flows",
    "List cloud flows in an environment. Results are normalized to stable flow IDs and can be filtered by display name.",
    listFlowsSchema,
    async (args) => {
      const result = await context.platform.listFlows(
        getString(args, "environmentId"),
        {
          top: boundedTop(getNumber(args, "top"), context.config.maxPageSize),
          search: getOptionalString(args, "search"),
          continuationUrl: getOptionalString(args, "continuationUrl"),
        },
      );
      return result;
    },
    { readOnlyHint: true, destructiveHint: false, openWorldHint: true },
  );

  registerTool(
    server,
    "list_live_flow_actions",
    "List flow actions from the Power Platform API with optional connector, trigger and parameter filters.",
    listActionsSchema,
    async (args) => {
      const environmentId = getString(args, "environmentId");
      return context.platform.listFlowActions(environmentId, {
        workflowId: getOptionalString(args, "workflowId"),
        connector: getOptionalString(args, "connector"),
        isTrigger:
          typeof args.isTrigger === "boolean" ? args.isTrigger : undefined,
        parameterName: getOptionalString(args, "parameterName"),
        parameterValue: getOptionalString(args, "parameterValue"),
      });
    },
    { readOnlyHint: true, destructiveHint: false, openWorldHint: true },
  );
}
