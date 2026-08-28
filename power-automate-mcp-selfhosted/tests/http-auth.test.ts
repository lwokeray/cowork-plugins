import test from "node:test";
import assert from "node:assert/strict";
import { loadConfig } from "../src/config.js";
import {
  authenticateHttp,
  validateOrigin,
} from "../src/security/request-auth.js";

test("HTTP auth accepts exact API key and rejects wrong key", () => {
  const config = loadConfig({
    MCP_TRANSPORT: "http",
    MCP_HTTP_API_KEY: "correct-key",
  });
  authenticateHttp({ "x-api-key": "correct-key" }, config);
  assert.throws(
    () => authenticateHttp({ "x-api-key": "wrong-key" }, config),
    /Invalid MCP API key/,
  );
});

test("Origin allowlist rejects unexpected browser origins", () => {
  validateOrigin({ origin: "https://trusted.example" }, [
    "https://trusted.example",
  ]);
  assert.throws(
    () =>
      validateOrigin({ origin: "https://evil.example" }, [
        "https://trusted.example",
      ]),
    /Origin is not allowed/,
  );
});
