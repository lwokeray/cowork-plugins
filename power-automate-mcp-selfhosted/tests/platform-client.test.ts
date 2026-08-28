import test from "node:test";
import assert from "node:assert/strict";
import { loadConfig } from "../src/config.js";
import { createLogger } from "../src/logging.js";
import { PowerPlatformClient } from "../src/power-platform/client.js";
import { StaticTokenProvider } from "../src/auth/token-provider.js";

test("Power Platform client sends bearer token and normalizes flow list", async () => {
  const originalFetch = globalThis.fetch;
  const requests: Array<{ url: string; init?: RequestInit }> = [];
  globalThis.fetch = async (input, init) => {
    requests.push({ url: String(input), init });
    return new Response(
      JSON.stringify({
        value: [
          {
            name: "flow-1",
            properties: { displayName: "A flow", state: "Started" },
          },
        ],
      }),
      { status: 200, headers: { "content-type": "application/json" } },
    );
  };
  try {
    const config = loadConfig({
      POWER_PLATFORM_ACCESS_TOKEN: "token-value",
      LOG_LEVEL: "silent",
      MAX_PAGE_SIZE: "20",
    });
    const client = new PowerPlatformClient(
      config,
      new StaticTokenProvider(config),
      createLogger(config),
    );
    const result = await client.listFlows("env-1", { top: 10 });
    assert.equal(result.flows[0]?.id, "flow-1");
    assert.equal(result.flows[0]?.displayName, "A flow");
    assert.match(
      requests[0]?.url ?? "",
      /\/powerautomate\/environments\/env-1\/cloudFlows\?api-version=2024-10-01$/,
    );
    assert.equal(
      (requests[0]?.init?.headers as Record<string, string>).authorization,
      "Bearer token-value",
    );
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("continuation URL must stay on configured Power Platform origin", async () => {
  const config = loadConfig({
    POWER_PLATFORM_ACCESS_TOKEN: "token-value",
    LOG_LEVEL: "silent",
  });
  const client = new PowerPlatformClient(
    config,
    new StaticTokenProvider(config),
    createLogger(config),
  );
  await assert.rejects(
    () =>
      client.listFlows("env-1", {
        continuationUrl: "https://attacker.example/steal",
      }),
    /outside the configured/,
  );
});

test("GET retries transient 429 twice", async () => {
  const originalFetch = globalThis.fetch;
  let calls = 0;
  globalThis.fetch = async () => {
    calls += 1;
    return new Response(JSON.stringify({ value: [] }), {
      status: 429,
      headers: { "retry-after": "0" },
    });
  };
  try {
    const config = loadConfig({
      POWER_PLATFORM_ACCESS_TOKEN: "token-value",
      LOG_LEVEL: "silent",
      REQUEST_TIMEOUT_MS: "1000",
    });
    const client = new PowerPlatformClient(
      config,
      new StaticTokenProvider(config),
      createLogger(config),
    );
    await assert.rejects(
      () => client.listEnvironments(),
      /Power Platform API 429/,
    );
    assert.equal(calls, 3);
  } finally {
    globalThis.fetch = originalFetch;
  }
});
