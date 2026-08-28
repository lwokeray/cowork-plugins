import {
  registerTool,
  getNumber,
  getOptionalString,
  getString,
  type ToolContext,
} from "./registry.js";
import { z } from "zod";
import { boundedTop } from "../security/limits.js";
import { listRunsSchema } from "./schemas.js";

export function registerRunTools(
  server: Parameters<typeof registerTool>[0],
  context: ToolContext,
): void {
  registerTool(
    server,
    "get_live_flow_runs",
    "List recent flow runs. Runtime action inputs and outputs are not exposed by the documented public API used by this server.",
    listRunsSchema,
    async (args) =>
      context.platform.listRuns(
        getString(args, "environmentId"),
        getString(args, "flowId"),
        {
          top: boundedTop(getNumber(args, "top"), context.config.maxPageSize),
          continuationUrl: getOptionalString(args, "continuationUrl"),
        },
      ),
    { readOnlyHint: true, destructiveHint: false, openWorldHint: true },
  );

  registerTool(
    server,
    "get_live_flow_run_summary",
    "Return the documented run-level status and error summary for one run. This does not infer an action-level root cause.",
    {
      environmentId: z.string().min(1).max(200),
      flowId: z.string().min(1).max(200),
      runId: z.string().min(1).max(300),
    },
    async (args) => {
      const runId = getString(args, "runId");
      const result = await context.platform.listRuns(
        getString(args, "environmentId"),
        getString(args, "flowId"),
        { top: context.config.maxPageSize },
      );
      const run = result.runs.find((item) => item.name === runId);
      return {
        runId,
        found: Boolean(run),
        run: run ?? null,
        actionLevelRuntimeDetailsAvailable: false,
      };
    },
    { readOnlyHint: true, destructiveHint: false, openWorldHint: true },
  );
}
