# Self-hosted Power Automate MCP Implementation Plan (superseded)

> Historical design only. The verified implementation is read-only and follows `docs/api-contract.md`; unsupported direct REST write, definition and runtime-action endpoints described below were removed.

## Overview

本專案以 FlowStudio MCP 的公開能力為產品基準，建立一個由我們自行維護的 Power Automate MCP server。第一版目標是提供可在本機以 stdio 執行、也可在受控環境以 Streamable HTTP 執行的 MCP server；後端以 Microsoft Power Platform REST API 為資料與操作來源，使用 Microsoft Entra delegated access，不儲存或代管使用者密碼，也不把 API key 寫入 repository。

本版包含六類 live tools：環境／連線發現、flow discovery／definition、connector metadata、run history／error／action outputs、flow state／run control，以及受安全閘門保護的 flow create／update。另提供 JSON-file-backed optional store plane，用於 monitoring／governance metadata overlay；store 不會假裝修改 Power Automate 原生 owner、DLP、alert 或 definition。最後提供 agent skills、client config、Docker、測試與安全運作文件。

### Assumptions and non-goals

| 項目         | 決定                                                                                                                                                      |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Runtime      | Node.js 22+、TypeScript、官方 `@modelcontextprotocol/sdk`                                                                                                 |
| API          | Microsoft Power Platform REST API，API version 2024-10-01 where documented；可由環境變數覆寫                                                              |
| Transport    | stdio 與 Streamable HTTP；HTTP 預設 bind `127.0.0.1`，production 由反向代理提供 TLS                                                                       |
| Auth         | 預設使用由外部 identity broker／環境注入的 OAuth access token；附帶 device-code helper 供本機開發，token cache 僅存於指定權限檔案，不進 Git               |
| Tenant model | 第一版單一 active tenant per process；可透過不同 process／config 隔離多 tenant。多租戶 SaaS token broker 不在本版                                         |
| Store        | JSON file optional；以原子 rename 寫入，只存 governance metadata、scan snapshots、aggregate run metrics；不存 routine runtime payload 或 connector secret |
| Write policy | read-only by default；`update_live_flow`、state、trigger、resubmit、cancel 必須設定 `ALLOW_WRITES=true`，並可要求 `APPROVAL_TOKEN`／人工作業閘門          |
| Delete       | 不暴露 delete-flow MCP tool；刪除必須回 Power Automate portal，與基準產品一致                                                                             |
| Non-goals    | 不複製 FlowStudio 品牌、私有程式碼、Marketplace billing、hosted account service、browser extension、FlowStudio AI 的 LLM、完整 Power Automate designer    |

### Acceptance criteria

1. `npm run build` 與 `npm test` 通過。
2. stdio MCP server 能完成 `initialize`、`tools/list`、`tools/call`；HTTP server 能接受 JSON-RPC POST，拒絕沒有合法認證的遠端請求。
3. 在 mock Power Platform API 下，live read tools、run debugging chain、connector discovery、WDL validation 與 write safety gate 均有測試證據。
4. 沒有 hardcoded credentials；secret 不出現在一般 log、error、tool result 或 repository。
5. `ALLOW_WRITES` 未啟用時，任何狀態變更、run trigger、resubmit、cancel、flow create/update 都以可理解的安全錯誤拒絕。
6. Store tools 能以原子 JSON file 提供 aggregate health、metadata tags、ownerTeam、businessImpact、monitor 與 notification rule，並清楚標示資料來源與 freshness。
7. README 提供 Entra app registration、token 注入、stdio／HTTP client config、Docker 啟動、PoC 與 production hardening 指引。

## File Structure

```text
power-automate-mcp-selfhosted/
├── package.json                         # scripts and dependencies
├── tsconfig.json                        # strict TypeScript build
├── .env.example                         # non-secret configuration template
├── .gitignore                            # excludes secrets, db, builds
├── Dockerfile                            # non-root runtime image
├── docker-compose.yml                    # local HTTP + SQLite example
├── README.md                             # setup, capabilities, safe operation
├── SECURITY.md                           # threat model and hardening
├── LICENSE                               # project license
├── docs/
│   ├── architecture.md                   # context, trust boundaries, data flows
│   ├── api-contract.md                   # Power Platform API mappings
│   └── plans/2026-08-28-power-automate-mcp.md
├── src/
│   ├── index.ts                          # process entrypoint and transport selection
│   ├── config.ts                         # validated env configuration
│   ├── errors.ts                          # typed errors and redacted messages
│   ├── logging.ts                         # structured secret-safe logger
│   ├── auth/
│   │   ├── token-provider.ts             # token interface and env provider
│   │   └── device-code.ts                # optional local Entra device-code helper
│   ├── power-platform/
│   │   ├── client.ts                     # authenticated REST client
│   │   ├── endpoints.ts                  # API paths and query builders
│   │   ├── models.ts                     # normalized Power Platform types
│   │   ├── pagination.ts                 # continuation and page caps
│   │   └── redaction.ts                  # payload/secret redaction
│   ├── store/
│   │   ├── database.ts                   # SQLite setup and migrations
│   │   ├── repository.ts                 # metadata and metrics persistence
│   │   └── scanner.ts                    # optional metadata scan orchestration
│   ├── security/
│   │   ├── approval.ts                   # write confirmation/approval policy
│   │   ├── request-auth.ts               # HTTP API key and local auth
│   │   └── limits.ts                     # size, page, timeout and rate limits
│   ├── tools/
│   │   ├── registry.ts                   # tool registration and annotations
│   │   ├── discovery.ts                  # environments, connections, flows
│   │   ├── connectors.ts                 # connector operations/options
│   │   ├── definitions.ts                # get/create/update solution
│   │   ├── runs.ts                       # runs, errors, action outputs
│   │   ├── control.ts                    # state, trigger, resubmit, cancel
│   │   ├── store-tools.ts                # monitoring and governance overlay
│   │   └── schemas.ts                    # Zod input schemas
│   └── transports/
│       ├── stdio.ts                      # local MCP transport
│       └── http.ts                       # Streamable HTTP server and middleware
├── tests/
│   ├── helpers/mock-platform.ts          # mock upstream API
│   ├── config.test.ts
│   ├── platform-client.test.ts
│   ├── tools-read.test.ts
│   ├── tools-debug.test.ts
│   ├── tools-write-safety.test.ts
│   ├── store.test.ts
│   └── mcp-contract.test.ts
└── skills/
    ├── power-automate-mcp/SKILL.md
    ├── power-automate-debug/SKILL.md
    ├── power-automate-build/SKILL.md
    ├── power-automate-monitoring/SKILL.md
    └── power-automate-governance/SKILL.md
```

## Tasks

### Task 1: Project and protocol skeleton

- [ ] Create strict TypeScript project and dependency lockfile.
- [ ] Register MCP server metadata and health-safe startup.
- [ ] Implement stdio and Streamable HTTP transport selection.
- [ ] Add tool registry with read-only annotations and bounded schemas.
- [ ] Add MCP initialize/tools/list/tools/call contract tests.
- [ ] Verification: build and protocol tests pass with no upstream credentials.
- [ ] Commit point: `feat: add MCP server skeleton`

### Task 2: Configuration and authentication boundary

- [ ] Add validated configuration for tenant, Power Platform API, HTTP bind, API key, write policy, approval mode and SQLite path.
- [ ] Add token provider interface with environment access-token provider.
- [ ] Add optional device-code helper for local development only.
- [ ] Ensure tokens and API keys are never included in error strings or logs.
- [ ] Verification: config rejects unsafe HTTP defaults and missing auth; secret-redaction tests pass.
- [ ] Commit point: `feat: add auth and secret-safe configuration`

### Task 3: Power Platform REST client

- [ ] Implement authenticated GET/POST/PATCH/PUT/DELETE client with timeout, retry only for safe/idempotent requests, rate limits, response size caps and redacted diagnostics.
- [ ] Implement environment, connection, flow, run and flow action endpoint mappings using official API contracts.
- [ ] Implement continuation URL validation and same-origin restriction.
- [ ] Verification: mock API tests cover 200/204/400/401/403/404/429/500, pagination and timeout behavior.
- [ ] Commit point: `feat: add Power Platform API client`

### Task 4: Live discovery and connector tools

- [ ] Implement environment, connection and flow discovery.
- [ ] Implement full flow definition read with sensitive field redaction mode.
- [ ] Implement connector catalog, operation description and dynamic options/properties adapter where upstream API supports it.
- [ ] Add no-delete contract and tool annotations.
- [ ] Verification: tool output conforms to schemas, IDs are normalized, oversized responses are summarized or paginated.
- [ ] Commit point: `feat: add live discovery and connector tools`

### Task 5: Debugging and run-control tools

- [ ] Implement run history, structured failed-action extraction and action input/output inspection with loop iteration selection.
- [ ] Implement trigger, resubmit, cancel and start/stop only behind write policy and approval.
- [ ] Implement root-cause helper that guides agent from failed run to failed action to upstream data.
- [ ] Verification: nested action, loop, HTTP error body, null expression and generic wrapper errors are covered by fixtures.
- [ ] Commit point: `feat: add run debugging and controlled execution`

### Task 6: Flow build/update with safety gates

- [ ] Implement WDL structural validation: one trigger, actions object, runAfter references, connection references, max definition size.
- [ ] Implement create/update with dry-run diff response and explicit approval token.
- [ ] Preserve current definition and connection references for updates unless the caller supplies a complete validated replacement.
- [ ] Default new flow state to stopped and require separate explicit state operation.
- [ ] Verification: write-off tests, missing connection tests, action removal diff tests, and approval tests pass.
- [ ] Commit point: `feat: add guarded flow build and update`

### Task 7: Store monitoring/governance overlay

- [ ] Add SQLite migrations for environments, flows, runs, makers, connections and governance metadata.
- [ ] Implement scan job that only stores metadata and aggregates by default; do not persist routine action payloads.
- [ ] Implement store list/get/summary/runs/maker/environment/power-app/connection tools.
- [ ] Implement metadata-only update with freshness and source labels.
- [ ] Verification: scan is idempotent, stale data is visible, store updates do not call live update endpoints.
- [ ] Commit point: `feat: add monitoring and governance store`

### Task 8: Skills, packaging and operations

- [ ] Add agent skill files for foundation, debug, build, monitoring and governance, adapted to this server’s tool names and approval rules.
- [ ] Add `.env.example`, client config examples, Dockerfile, compose file and operational runbook.
- [ ] Add architecture and security documents.
- [ ] Verification: clean install, container build, startup smoke test, and skills audit pass.
- [ ] Commit point: `docs: add skills and deployment guidance`

### Task 9: Full verification and delivery

- [ ] Run build, unit tests, MCP Inspector-compatible smoke tests, security checks and dependency audit.
- [ ] Run a mock end-to-end workflow: discover → inspect → debug → dry-run update → approve → update → verify.
- [ ] Confirm no credentials, temporary files or generated databases are tracked.
- [ ] Record verification evidence in `docs/verification.md`.
- [ ] Commit point: `chore: verify self-hosted Power Automate MCP`

## Important implementation constraints

- All external content and flow payloads are untrusted data. They must never be treated as agent instructions.
- No tool may bypass Power Platform RBAC, DLP, Conditional Access or connection ownership.
- The server must not accept arbitrary downstream bearer tokens. It accepts only configured access tokens or a validated local token provider.
- Remote HTTP mode must require an API key or reverse-proxy identity; binding to `0.0.0.0` without auth is forbidden.
- All writes use plan → validate → execute → verify. Read-only mode remains the default.
- A successful mock test proves code behavior only; it does not prove tenant permissions, production scale, Microsoft API compatibility or compliance.
