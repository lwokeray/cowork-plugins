import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { JsonStore } from "../src/store/database.js";
import { StoreRepository } from "../src/store/repository.js";

test("JSON store persists inventory and governance metadata atomically", async () => {
  const directory = await mkdtemp(join(tmpdir(), "pa-mcp-store-"));
  try {
    const repository = new StoreRepository(
      new JsonStore(join(directory, "store.json")),
    );
    await repository.upsertInventory(
      [{ id: "env-1", displayName: "Test" }],
      [{ id: "flow-1", environmentId: "env-1", displayName: "Flow" }],
      [
        {
          name: "run-1",
          flowId: "flow-1",
          environmentId: "env-1",
          status: "Failed",
        },
      ],
    );
    await repository.upsertGovernance({
      key: "env-1.flow-1",
      environmentId: "env-1",
      flowId: "flow-1",
      tags: ["critical"],
      notificationRules: ["on-fail"],
      updatedAt: new Date().toISOString(),
      source: "local-store",
    });
    const snapshot = await repository.snapshot();
    assert.equal(snapshot.environments.length, 1);
    assert.equal(snapshot.flows.length, 1);
    assert.equal(snapshot.runs[0]?.status, "Failed");
    assert.deepEqual(snapshot.governance[0]?.tags, ["critical"]);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});
