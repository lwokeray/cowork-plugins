import test from "node:test";
import assert from "node:assert/strict";
import { loadConfig } from "../src/config.js";

test("config defaults to stdio and enabled store", () => {
  const config = loadConfig({});
  assert.equal(config.transport, "stdio");
  assert.equal(config.maxRequestBytes, 1024 * 1024);
  assert.equal(config.storeEnabled, true);
});

test("HTTP transport requires API key", () => {
  assert.throws(
    () => loadConfig({ MCP_TRANSPORT: "http" }),
    /MCP_HTTP_API_KEY/,
  );
});

test("invalid numeric settings are rejected", () => {
  assert.throws(() => loadConfig({ MAX_PAGE_SIZE: "0" }), /MAX_PAGE_SIZE/);
});

test("Power Platform API URL must use HTTPS", () => {
  assert.throws(
    () => loadConfig({ POWER_PLATFORM_API_URL: "http://example.test" }),
    /HTTPS/,
  );
});
