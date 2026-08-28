export type JsonObject = Record<string, unknown>;

export interface EnvironmentRecord {
  id: string;
  displayName?: string;
  location?: string;
  state?: string;
  sku?: string;
  isDefault?: boolean;
  [key: string]: unknown;
}

export interface ConnectionRecord {
  id: string;
  displayName?: string;
  connectorName?: string;
  environment?: string;
  overallStatus?: string;
  authenticatedUser?: string;
  [key: string]: unknown;
}

export interface FlowSummary {
  id: string;
  displayName?: string;
  state?: string;
  triggerType?: string;
  triggerKind?: string;
  createdTime?: string;
  lastModifiedTime?: string;
  definitionAvailable?: boolean;
  environmentId?: string;
  [key: string]: unknown;
}

export interface FlowDefinition {
  name?: string;
  properties?: JsonObject;
  [key: string]: unknown;
}

export interface FlowRun {
  name: string;
  status?: string;
  startTime?: string;
  endTime?: string;
  triggerName?: string;
  error?: unknown;
  [key: string]: unknown;
}

export interface FlowActionDetail {
  actionName?: string;
  status?: string;
  startTime?: string;
  endTime?: string;
  code?: string;
  error?: unknown;
  inputs?: unknown;
  outputs?: unknown;
  iterationIndex?: number;
  [key: string]: unknown;
}

export interface ConnectorRecord {
  name?: string;
  id?: string;
  displayName?: string;
  tier?: string;
  isCustomApi?: boolean;
  [key: string]: unknown;
}

export interface GovernanceMetadata {
  key: string;
  environmentId: string;
  flowId: string;
  description?: string;
  ownerTeam?: string;
  supportEmail?: string;
  businessImpact?: "low" | "medium" | "high" | "critical";
  critical?: boolean;
  monitor?: boolean;
  tags: string[];
  notificationRules: string[];
  updatedAt: string;
  source: "local-store";
}

export interface StoreSnapshot {
  version: 1;
  updatedAt: string;
  environments: EnvironmentRecord[];
  flows: FlowSummary[];
  runs: FlowRun[];
  governance: GovernanceMetadata[];
}
