import { JsonStore } from "./database.js";
import type {
  EnvironmentRecord,
  FlowRun,
  FlowSummary,
  GovernanceMetadata,
  StoreSnapshot,
} from "../power-platform/models.js";

export class StoreRepository {
  constructor(private readonly store: JsonStore) {}

  async snapshot(): Promise<StoreSnapshot> {
    return this.store.read();
  }

  async upsertInventory(
    environments: EnvironmentRecord[],
    flows: FlowSummary[],
    runs: FlowRun[] = [],
  ): Promise<StoreSnapshot> {
    return this.store.update((snapshot) => {
      const environmentMap = new Map(
        snapshot.environments.map((item) => [item.id, item]),
      );
      for (const item of environments) environmentMap.set(item.id, item);
      snapshot.environments = [...environmentMap.values()];
      const flowMap = new Map(
        snapshot.flows.map((item) => [this.flowKey(item), item]),
      );
      for (const item of flows) flowMap.set(this.flowKey(item), item);
      snapshot.flows = [...flowMap.values()];
      const runMap = new Map(snapshot.runs.map((item) => [item.name, item]));
      for (const item of runs) runMap.set(item.name, item);
      snapshot.runs = [...runMap.values()].slice(-10_000);
    });
  }

  async upsertGovernance(
    metadata: GovernanceMetadata,
  ): Promise<GovernanceMetadata> {
    let result: GovernanceMetadata | undefined;
    await this.store.update((snapshot) => {
      const index = snapshot.governance.findIndex(
        (item) => item.key === metadata.key,
      );
      if (index >= 0) snapshot.governance[index] = metadata;
      else snapshot.governance.push(metadata);
      result = metadata;
    });
    return result ?? metadata;
  }

  private flowKey(flow: FlowSummary): string {
    return `${flow.environmentId ?? ""}.${flow.id}`;
  }
}
