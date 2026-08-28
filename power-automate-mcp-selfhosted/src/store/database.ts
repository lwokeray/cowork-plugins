import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { AppError } from "../errors.js";
import type { StoreSnapshot } from "../power-platform/models.js";

export function emptySnapshot(): StoreSnapshot {
  return {
    version: 1,
    updatedAt: new Date(0).toISOString(),
    environments: [],
    flows: [],
    runs: [],
    governance: [],
  };
}

export class JsonStore {
  private snapshot?: StoreSnapshot;
  private writeQueue: Promise<void> = Promise.resolve();

  constructor(readonly path: string) {}

  async read(): Promise<StoreSnapshot> {
    if (this.snapshot) return structuredClone(this.snapshot);
    try {
      const text = await readFile(this.path, "utf8");
      const parsed: unknown = JSON.parse(text);
      if (
        !parsed ||
        typeof parsed !== "object" ||
        (parsed as StoreSnapshot).version !== 1
      )
        throw new Error("unsupported snapshot");
      this.snapshot = parsed as StoreSnapshot;
    } catch (error) {
      const code =
        error && typeof error === "object" && "code" in error
          ? String((error as { code: unknown }).code)
          : "";
      if (code !== "ENOENT")
        throw new AppError(
          "UPSTREAM_ERROR",
          `Store read failed: ${error instanceof Error ? error.message : "invalid snapshot"}`,
          { status: 500 },
        );
      this.snapshot = emptySnapshot();
    }
    return structuredClone(this.snapshot);
  }

  async update(
    mutator: (snapshot: StoreSnapshot) => void,
  ): Promise<StoreSnapshot> {
    let result: StoreSnapshot | undefined;
    this.writeQueue = this.writeQueue.then(async () => {
      const current = await this.read();
      mutator(current);
      current.updatedAt = new Date().toISOString();
      await mkdir(dirname(this.path), { recursive: true });
      const temp = `${this.path}.${process.pid}.tmp`;
      await writeFile(temp, `${JSON.stringify(current, null, 2)}\n`, {
        encoding: "utf8",
        mode: 0o600,
      });
      await rename(temp, this.path);
      this.snapshot = current;
      result = structuredClone(current);
    });
    await this.writeQueue;
    return result ?? this.read();
  }
}
