const API_VERSION = "api-version";

function withVersion(
  path: string,
  version: string,
  query: Record<string, string | number | boolean | undefined> = {},
): string {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(query)) {
    if (value !== undefined && value !== "") params.set(key, String(value));
  }
  params.set(API_VERSION, version);
  return `${path}?${params.toString()}`;
}

function segment(value: string, label: string): string {
  if (
    !value ||
    value.includes("/") ||
    value.includes("\\") ||
    value.includes("..")
  ) {
    throw new Error(`Invalid ${label}`);
  }
  return encodeURIComponent(value);
}

function connectorFilter(environmentId: string): string {
  const escaped = environmentId.replaceAll("'", "''");
  return `properties/apiEnvironment eq '${escaped}'`;
}

/**
 * Only endpoints documented in the Power Platform API 2024-10-01 reference
 * belong here. Flow definition and lifecycle operations are intentionally not
 * mapped because that public REST surface currently exposes list operations
 * only.
 */
export const endpoint = {
  environments: (version: string) =>
    withVersion("/environmentmanagement/environments", version),
  connections: (environmentId: string, version: string) =>
    withVersion(
      `/connectivity/environments/${segment(environmentId, "environmentId")}/connections`,
      version,
    ),
  connectors: (environmentId: string, version: string) =>
    withVersion(
      `/connectivity/environments/${segment(environmentId, "environmentId")}/connectors`,
      version,
      { $filter: connectorFilter(environmentId) },
    ),
  connector: (environmentId: string, connectorId: string, version: string) =>
    withVersion(
      `/connectivity/environments/${segment(environmentId, "environmentId")}/connectors/${segment(connectorId, "connectorId")}`,
      version,
      { $filter: connectorFilter(environmentId) },
    ),
  cloudFlows: (
    environmentId: string,
    version: string,
    query: Record<string, string | number | boolean | undefined> = {},
  ) =>
    withVersion(
      `/powerautomate/environments/${segment(environmentId, "environmentId")}/cloudFlows`,
      version,
      query,
    ),
  flowRuns: (environmentId: string, flowId: string, version: string) =>
    withVersion(
      `/powerautomate/environments/${segment(environmentId, "environmentId")}/flowRuns`,
      version,
      { workflowId: flowId },
    ),
  flowActions: (
    environmentId: string,
    version: string,
    query: Record<string, string | number | boolean | undefined> = {},
  ) =>
    withVersion(
      `/powerautomate/environments/${segment(environmentId, "environmentId")}/flowActions`,
      version,
      query,
    ),
};
