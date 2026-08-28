import { z } from "zod";
import { AppError } from "../errors.js";
import {
  registerTool,
  getOptionalString,
  getString,
  type ToolContext,
} from "./registry.js";

function findOperation(value: unknown, operationId: string): unknown {
  if (!value || typeof value !== "object") return undefined;
  if (Array.isArray(value)) {
    for (const item of value) {
      const result = findOperation(item, operationId);
      if (result !== undefined) return result;
    }
    return undefined;
  }
  const object = value as Record<string, unknown>;
  if (
    object.operationId === operationId ||
    object.name === operationId ||
    object.id === operationId
  )
    return object;
  for (const item of Object.values(object)) {
    const result = findOperation(item, operationId);
    if (result !== undefined) return result;
  }
  return undefined;
}

export function registerConnectorTools(
  server: Parameters<typeof registerTool>[0],
  context: ToolContext,
): void {
  registerTool(
    server,
    "list_live_connectors",
    "List connector APIs available in an environment, including custom connectors when the upstream identity can access them.",
    { environmentId: z.string().min(1).max(200) },
    async (args) =>
      context.platform.listConnectors(getString(args, "environmentId")),
    { readOnlyHint: true, destructiveHint: false, openWorldHint: true },
  );

  registerTool(
    server,
    "describe_live_connector",
    "Describe one connector or search its operation metadata. Use this instead of guessing WDL action names. If the upstream response contains operation schemas, operationId selects one operation.",
    {
      environmentId: z.string().min(1).max(200),
      connectorName: z.string().max(300).optional(),
      operationId: z.string().max(300).optional(),
      search: z.string().max(300).optional(),
    },
    async (args) => {
      const environmentId = getString(args, "environmentId");
      const connectorName = getOptionalString(args, "connectorName");
      const operationId = getOptionalString(args, "operationId");
      const search = getOptionalString(args, "search")?.toLowerCase();
      if (!connectorName && !search)
        throw new AppError(
          "VALIDATION_ERROR",
          "Provide connectorName or search",
          { status: 400 },
        );
      const connectors = connectorName
        ? [await context.platform.getConnector(environmentId, connectorName)]
        : await context.platform.listConnectors(environmentId);
      const filtered = search
        ? connectors.filter((item) =>
            JSON.stringify(item).toLowerCase().includes(search),
          )
        : connectors;
      if (operationId)
        return {
          connectors: filtered.map((item) => ({
            connector: item,
            operation: findOperation(item, operationId) ?? null,
          })),
        };
      return { connectors: filtered };
    },
    { readOnlyHint: true, destructiveHint: false, openWorldHint: true },
  );

  registerTool(
    server,
    "get_live_dynamic_options",
    "Resolve a connector dynamic-list parameter using a configured upstream metadata path. Set POWER_AUTOMATE_DYNAMIC_OPTIONS_PATH to a trusted same-origin template when the tenant API exposes this surface.",
    {
      environmentId: z.string().min(1).max(200),
      connectorName: z.string().min(1).max(300),
      dynamicMetadata: z.record(z.string(), z.unknown()),
      parameters: z.record(z.string(), z.unknown()).optional(),
    },
    async () => {
      throw new AppError(
        "UNSUPPORTED",
        "Dynamic connector options are connector-specific. Configure POWER_AUTOMATE_DYNAMIC_OPTIONS_PATH and implement the upstream adapter before enabling this tool.",
        { status: 501 },
      );
    },
    { readOnlyHint: true, destructiveHint: false, openWorldHint: true },
  );

  registerTool(
    server,
    "get_live_dynamic_properties",
    "Resolve connector dynamic field properties using a configured upstream metadata adapter. This safe default refuses to guess dynamic schemas.",
    {
      environmentId: z.string().min(1).max(300),
      connectorName: z.string().min(1).max(300),
      dynamicMetadata: z.record(z.string(), z.unknown()),
      parameters: z.record(z.string(), z.unknown()).optional(),
      propertyName: z.string().max(300).optional(),
    },
    async () => {
      throw new AppError(
        "UNSUPPORTED",
        "Dynamic connector properties are connector-specific and are not guessed by this server",
        { status: 501 },
      );
    },
    { readOnlyHint: true, destructiveHint: false, openWorldHint: true },
  );
}
