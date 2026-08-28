import { randomUUID } from "node:crypto";
import { z } from "zod";
import {
  registerTool,
  getNumber,
  getOptionalString,
  getString,
  type ToolContext,
} from "./registry.js";
import { boundedTop } from "../security/limits.js";
import type { FlowSummary } from "../power-platform/models.js";

const schema = {
  workflow: z.enum(["discover", "diagnose", "inventory"]),
  environmentId: z.string().max(200).optional(),
  flowId: z.string().max(200).optional(),
  runId: z.string().max(300).optional(),
  search: z.string().max(200).optional(),
  top: z.number().int().min(1).max(100).optional(),
};
function step(name: string, result: unknown) {
  return { name, status: "completed", result };
}

export function registerAgentFlowTools(
  server: Parameters<typeof registerTool>[0],
  context: ToolContext,
): void {
  registerTool(
    server,
    "describe_copilot_agent_flow",
    "Describe the supported read-only Copilot Studio integration and native agent-flow constraints.",
    {},
    async () => ({
      serverTransport: "Streamable HTTP at POST /mcp",
      safety:
        "Read-only; only documented Power Platform REST operations are exposed.",
      copilotStudioSetup: [
        "Deploy behind HTTPS and configure API key or OAuth 2.0",
        "Turn off Allow all tools and explicitly enable only the required tools",
        "Keep native agent flows in the same solution and environment as the agent",
        "Use When an agent calls the flow and Respond to the agent",
        "Set Asynchronous response to Off and complete within 100 seconds",
      ],
      workflows: ["discover", "diagnose", "inventory"],
    }),
    { readOnlyHint: true, destructiveHint: false },
  );

  registerTool(
    server,
    "run_copilot_agent_flow",
    "Run a bounded read-only discovery, diagnosis, or inventory workflow.",
    schema,
    async (args) => {
      const correlationId = randomUUID();
      const workflow = getString(args, "workflow") as
        "discover" | "diagnose" | "inventory";
      const environmentId = getOptionalString(args, "environmentId");
      const flowId = getOptionalString(args, "flowId");
      const runId = getOptionalString(args, "runId");
      const top = boundedTop(
        getNumber(args, "top"),
        context.config.maxPageSize,
      );
      const steps: Array<Record<string, unknown>> = [];
      if (workflow === "discover") {
        steps.push(
          step("list_environments", await context.platform.listEnvironments()),
        );
        if (environmentId) {
          steps.push(
            step(
              "list_connections",
              await context.platform.listConnections(environmentId),
            ),
          );
          steps.push(
            step(
              "list_flows",
              await context.platform.listFlows(environmentId, {
                top,
                search: getOptionalString(args, "search"),
              }),
            ),
          );
        }
        return {
          workflow,
          correlationId,
          status: "completed",
          steps,
          nextTool: "list_live_flow_actions",
        };
      }
      if (workflow === "diagnose") {
        if (!environmentId || !flowId)
          return {
            workflow,
            correlationId,
            status: "needs_input",
            requiredInputs: ["environmentId", "flowId"],
            steps,
          };
        const runs = await context.platform.listRuns(environmentId, flowId, {
          top,
        });
        steps.push(step("list_runs", runs));
        if (!runId)
          return {
            workflow,
            correlationId,
            status: "needs_input",
            requiredInputs: ["runId"],
            steps,
            nextTool: "get_live_flow_run_summary",
          };
        const run = runs.runs.find((item) => item.name === runId) ?? null;
        steps.push(step("run_summary", run));
        steps.push(
          step(
            "static_action_inventory",
            await context.platform.listFlowActions(environmentId, {
              workflowId: flowId,
            }),
          ),
        );
        return {
          workflow,
          correlationId,
          status: run ? "completed" : "not_found",
          steps,
          actionLevelRuntimeDetailsAvailable: false,
          message:
            "The public API provides a run-level error summary and static action inventory; no action-level root cause is inferred.",
        };
      }
      const environments = await context.platform.listEnvironments();
      const selected = environmentId
        ? environments.filter((item) => item.id === environmentId)
        : environments;
      const flows: FlowSummary[] = [];
      for (const environment of selected) {
        const result = await context.platform.listFlows(environment.id, {
          top: Math.min(top, 100),
        });
        flows.push(
          ...result.flows.map((flow) => ({
            ...flow,
            environmentId: environment.id,
          })),
        );
      }
      if (context.store)
        await context.store.upsertInventory(selected, flows, []);
      steps.push(
        step("scan_inventory_metadata", {
          environments: selected.length,
          flows: flows.length,
          stored: Boolean(context.store),
        }),
      );
      return {
        workflow,
        correlationId,
        status: "completed",
        steps,
        source: "power-platform-api",
      };
    },
    { readOnlyHint: true, destructiveHint: false, openWorldHint: true },
  );
}
