import type {
  ConnectionRecord,
  ConnectorRecord,
  EnvironmentRecord,
  FlowActionDetail,
  FlowRun,
  FlowSummary,
} from "../../src/power-platform/models.js";

export class MockPlatform {
  calls: Array<{ method: string; args: unknown[] }> = [];
  readonly environments: EnvironmentRecord[] = [
    { id: "env-1", displayName: "Test", state: "Enabled" },
  ];
  readonly connections: ConnectionRecord[] = [
    { id: "conn-1", connectorName: "shared_test", overallStatus: "Connected" },
  ];
  readonly flows: FlowSummary[] = [
    {
      id: "flow-1",
      environmentId: "env-1",
      displayName: "Incident flow",
      state: "Started",
      definitionAvailable: true,
    },
  ];
  readonly runs: FlowRun[] = [
    {
      name: "run-1",
      status: "Failed",
      startTime: "2026-08-27T00:00:00Z",
      endTime: "2026-08-27T00:00:01Z",
      environmentId: "env-1",
      flowId: "flow-1",
    },
  ];
  readonly actions: FlowActionDetail[] = [
    {
      actionName: "Compose",
      status: "Failed",
      error: { code: "BadRequest", message: "bad input" },
      inputs: { value: null },
      outputs: { statusCode: 400 },
    },
  ];

  async listEnvironments(): Promise<EnvironmentRecord[]> {
    this.calls.push({ method: "listEnvironments", args: [] });
    return this.environments;
  }
  async listConnections(environmentId: string): Promise<ConnectionRecord[]> {
    this.calls.push({ method: "listConnections", args: [environmentId] });
    return this.connections;
  }
  async listConnectors(environmentId: string): Promise<ConnectorRecord[]> {
    this.calls.push({ method: "listConnectors", args: [environmentId] });
    return [
      {
        name: "shared_test",
        displayName: "Test connector",
        operations: [{ operationId: "Send" }],
      },
    ];
  }
  async getConnector(
    environmentId: string,
    connectorName: string,
  ): Promise<ConnectorRecord> {
    this.calls.push({
      method: "getConnector",
      args: [environmentId, connectorName],
    });
    return {
      name: connectorName,
      displayName: "Test connector",
      operations: [{ operationId: "Send" }],
    };
  }
  async listFlows(environmentId: string): Promise<{ flows: FlowSummary[] }> {
    this.calls.push({ method: "listFlows", args: [environmentId] });
    return {
      flows: this.flows.filter((item) => item.environmentId === environmentId),
    };
  }
  async listFlowActions(): Promise<FlowActionDetail[]> {
    this.calls.push({ method: "listFlowActions", args: [] });
    return this.actions;
  }
  async listRuns(
    environmentId: string,
    flowId: string,
  ): Promise<{ runs: FlowRun[] }> {
    this.calls.push({ method: "listRuns", args: [environmentId, flowId] });
    return { runs: this.runs };
  }
}
