import { AppError } from "../errors.js";
import { z } from "zod";
import {
  registerTool,
  getNumber,
  getOptionalString,
  getString,
  type ToolContext,
} from "./registry.js";
import { governanceUpdateSchema, storeFlowSchema } from "./schemas.js";
import type {
  GovernanceMetadata,
  FlowRun,
  FlowSummary,
} from "../power-platform/models.js";

function requireStore(context: ToolContext) {
  if (!context.store)
    throw new AppError(
      "UNSUPPORTED",
      "Store plane is disabled; set STORE_ENABLED=true",
      { status: 404 },
    );
  return context.store;
}

function flowKey(environmentId: string, flowId: string): string {
  return `${environmentId}.${flowId}`;
}

function withGovernance(
  flow: FlowSummary,
  governance: GovernanceMetadata | undefined,
): Record<string, unknown> {
  return { ...flow, ...(governance ? { governance } : {}) };
}

export function registerStoreTools(
  server: Parameters<typeof registerTool>[0],
  context: ToolContext,
): void {
  registerTool(
    server,
    "list_store_environments",
    "List environments from the local metadata snapshot and include store freshness.",
    {},
    async () => {
      const snapshot = await requireStore(context).snapshot();
      return {
        source: "local-store",
        scannedAt: snapshot.updatedAt,
        environments: snapshot.environments,
      };
    },
    { readOnlyHint: true, destructiveHint: false },
  );

  registerTool(
    server,
    "list_store_flows",
    "List cached flow metadata and attached governance overlay. Cached data may be stale; always inspect scannedAt.",
    { search: z.string().max(200).optional() },
    async (args) => {
      const snapshot = await requireStore(context).snapshot();
      const search = getOptionalString(args, "search")?.toLowerCase();
      const governanceMap = new Map(
        snapshot.governance.map((item) => [item.key, item]),
      );
      const flows = snapshot.flows
        .filter(
          (flow) =>
            !search ||
            String(flow.displayName ?? "")
              .toLowerCase()
              .includes(search),
        )
        .map((flow) =>
          withGovernance(
            flow,
            governanceMap.get(flowKey(flow.environmentId ?? "", flow.id)),
          ),
        );
      return {
        source: "local-store",
        scannedAt: snapshot.updatedAt,
        count: flows.length,
        flows,
      };
    },
    { readOnlyHint: true, destructiveHint: false },
  );

  registerTool(
    server,
    "get_store_flow",
    "Get one cached flow and governance record without making a live Power Automate call.",
    storeFlowSchema,
    async (args) => {
      const environmentId = getString(args, "environmentId");
      const flowId = getString(args, "flowId");
      const snapshot = await requireStore(context).snapshot();
      const flow = snapshot.flows.find(
        (item) => item.environmentId === environmentId && item.id === flowId,
      );
      if (!flow)
        throw new AppError(
          "NOT_FOUND",
          "Flow was not found in the local store; run scan_inventory or use get_live_flow",
          { status: 404 },
        );
      const governance = snapshot.governance.find(
        (item) => item.key === flowKey(environmentId, flowId),
      );
      return {
        source: "local-store",
        scannedAt: snapshot.updatedAt,
        flow: withGovernance(flow, governance),
      };
    },
    { readOnlyHint: true, destructiveHint: false },
  );

  registerTool(
    server,
    "get_store_flow_summary",
    "Calculate cached success/failure and duration summary for one flow. This is an aggregate snapshot, not a lossless audit log.",
    storeFlowSchema,
    async (args) => {
      const environmentId = getString(args, "environmentId");
      const flowId = getString(args, "flowId");
      const snapshot = await requireStore(context).snapshot();
      const runs = snapshot.runs.filter(
        (item) =>
          item.environmentId === environmentId && item.flowId === flowId,
      );
      const failed = runs.filter(
        (item) => String(item.status ?? "").toLowerCase() === "failed",
      ).length;
      const durations = runs
        .map((item) =>
          item.startTime && item.endTime
            ? Date.parse(item.endTime) - Date.parse(item.startTime)
            : NaN,
        )
        .filter(Number.isFinite);
      return {
        source: "local-store",
        scannedAt: snapshot.updatedAt,
        totalRuns: runs.length,
        failRuns: failed,
        failRate: runs.length ? failed / runs.length : 0,
        averageDurationSeconds: durations.length
          ? durations.reduce((sum, value) => sum + value, 0) /
            durations.length /
            1000
          : null,
        maxDurationSeconds: durations.length
          ? Math.max(...durations) / 1000
          : null,
      };
    },
    { readOnlyHint: true, destructiveHint: false },
  );

  registerTool(
    server,
    "get_store_flow_runs",
    "Return cached run metadata for one flow; action inputs and outputs are never stored by the scanner.",
    { ...storeFlowSchema, top: z.number().int().min(1).max(1000).optional() },
    async (args) => {
      const snapshot = await requireStore(context).snapshot();
      const top = Math.min(
        Math.max(Math.trunc(getNumber(args, "top") ?? 30), 1),
        1000,
      );
      const runs = snapshot.runs
        .filter(
          (item) =>
            item.environmentId === getString(args, "environmentId") &&
            item.flowId === getString(args, "flowId"),
        )
        .slice(-top)
        .reverse();
      return { source: "local-store", scannedAt: snapshot.updatedAt, runs };
    },
    { readOnlyHint: true, destructiveHint: false },
  );

  registerTool(
    server,
    "update_store_flow",
    "Update only local governance metadata. This never calls the Power Automate live update endpoint.",
    governanceUpdateSchema,
    async (args) => {
      const environmentId = getString(args, "environmentId");
      const flowId = getString(args, "flowId");
      const repository = requireStore(context);
      const snapshot = await repository.snapshot();
      const existing = snapshot.governance.find(
        (item) => item.key === flowKey(environmentId, flowId),
      );
      const metadata: GovernanceMetadata = {
        key: flowKey(environmentId, flowId),
        environmentId,
        flowId,
        description:
          getOptionalString(args, "description") ?? existing?.description,
        ownerTeam: getOptionalString(args, "ownerTeam") ?? existing?.ownerTeam,
        supportEmail:
          getOptionalString(args, "supportEmail") ?? existing?.supportEmail,
        businessImpact:
          (getOptionalString(
            args,
            "businessImpact",
          ) as GovernanceMetadata["businessImpact"]) ??
          existing?.businessImpact,
        critical:
          typeof args.critical === "boolean"
            ? args.critical
            : existing?.critical,
        monitor:
          typeof args.monitor === "boolean" ? args.monitor : existing?.monitor,
        tags: Array.isArray(args.tags)
          ? args.tags.filter((item): item is string => typeof item === "string")
          : (existing?.tags ?? []),
        notificationRules: Array.isArray(args.notificationRules)
          ? args.notificationRules.filter(
              (item): item is string => typeof item === "string",
            )
          : (existing?.notificationRules ?? []),
        updatedAt: new Date().toISOString(),
        source: "local-store",
      };
      const updated = await repository.upsertGovernance(metadata);
      return {
        source: "local-store",
        updated,
        warning:
          "This is a governance overlay only. Power Automate owner, DLP, alerts and flow definition were not changed.",
      };
    },
    { readOnlyHint: false, destructiveHint: false },
  );

  registerTool(
    server,
    "scan_inventory",
    "Synchronize environment and flow metadata into the local store. Runtime action payloads are not persisted; includeRuns stores only run status/timestamps.",
    {
      environmentId: z.string().max(200).optional(),
      includeRuns: z.boolean().optional(),
      runTop: z.number().int().min(1).max(100).optional(),
    },
    async (args) => {
      const repository = requireStore(context);
      const environmentId = getOptionalString(args, "environmentId");
      const includeRuns = args.includeRuns === true;
      const runTop = getNumber(args, "runTop");
      const environments = await context.platform.listEnvironments();
      const selected = environmentId
        ? environments.filter((item) => item.id === environmentId)
        : environments;
      const flows: FlowSummary[] = [];
      const runs: FlowRun[] = [];
      for (const environment of selected) {
        const result = await context.platform.listFlows(environment.id, {
          top: 100,
        });
        for (const flow of result.flows) {
          flow.environmentId = environment.id;
          flows.push(flow);
          if (includeRuns) {
            const flowRuns = await context.platform.listRuns(
              environment.id,
              flow.id,
              { top: runTop ?? 30 },
            );
            for (const run of flowRuns.runs)
              runs.push({
                ...run,
                environmentId: environment.id,
                flowId: flow.id,
              });
          }
        }
      }
      await repository.upsertInventory(environments, flows, runs);
      return {
        source: "power-platform-api",
        storedIn: "local-store",
        scannedAt: new Date().toISOString(),
        environments: selected.length,
        flows: flows.length,
        runs: runs.length,
      };
    },
    { readOnlyHint: false, destructiveHint: false, openWorldHint: true },
  );
}
