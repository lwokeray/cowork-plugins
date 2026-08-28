import type { Logger } from "../logging.js";
import { PowerPlatformClient } from "../power-platform/client.js";
import type { FlowRun } from "../power-platform/models.js";
import { StoreRepository } from "./repository.js";

export class InventoryScanner {
  constructor(
    private readonly client: PowerPlatformClient,
    private readonly repository: StoreRepository,
    private readonly logger: Logger,
  ) {}

  async scan(
    options: {
      environmentId?: string;
      includeRuns?: boolean;
      runTop?: number;
    } = {},
  ): Promise<{
    environments: number;
    flows: number;
    runs: number;
    scannedAt: string;
  }> {
    const environments = await this.client.listEnvironments();
    const selected = options.environmentId
      ? environments.filter((item) => item.id === options.environmentId)
      : environments;
    const flows = [] as Awaited<
      ReturnType<PowerPlatformClient["listFlows"]>
    >["flows"];
    const runs: FlowRun[] = [];
    for (const environment of selected) {
      const result = await this.client.listFlows(environment.id, { top: 100 });
      for (const flow of result.flows) {
        flow.environmentId = environment.id;
        flows.push(flow);
        if (options.includeRuns) {
          const runResult = await this.client.listRuns(
            environment.id,
            flow.id,
            { top: options.runTop ?? 30 },
          );
          for (const run of runResult.runs) runs.push(run);
        }
      }
    }
    await this.repository.upsertInventory(environments, flows, runs);
    const scannedAt = new Date().toISOString();
    this.logger.info("Inventory scan completed", {
      environments: selected.length,
      flows: flows.length,
      runs: runs.length,
      scannedAt,
    });
    return {
      environments: selected.length,
      flows: flows.length,
      runs: runs.length,
      scannedAt,
    };
  }
}
