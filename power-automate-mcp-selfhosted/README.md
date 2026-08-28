# Self-hosted Power Automate MCP

以 Microsoft 公開的 Power Platform REST API 包裝成 MCP tools 的 self-hosted reference implementation。本專案不是 Microsoft 官方產品；目前版本刻意限定為**唯讀**，只暴露已文件化的 `2024-10-01` API，避免把 Power Automate Management connector 的 operations 誤當成可直接呼叫的 REST endpoints。

## Supported tools

| 類別             | Tools                                                                       | 說明                                                        |
| ---------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------- |
| Server           | `server_info`                                                               | 回報唯讀能力與設定，不回傳 secrets                          |
| Discovery        | `list_live_environments`, `list_live_connections`, `list_live_flows`        | 讀取 environment、connection 與 cloud-flow metadata         |
| Connector/action | `list_live_connectors`, `describe_live_connector`, `list_live_flow_actions` | 讀取 connector 與 static flow-action inventory              |
| Runs             | `get_live_flow_runs`, `get_live_flow_run_summary`                           | 回傳 run-level status/error；不宣稱 action-level root cause |
| Local Store      | `scan_inventory` 與 `*_store_*` tools                                       | 本機 metadata overlay，不修改 Power Automate                |
| Copilot Studio   | `describe_copilot_agent_flow`, `run_copilot_agent_flow`                     | bounded `discover` / `diagnose` / `inventory` workflow      |

不支援 flow definition get/create/update、start/stop、trigger、resubmit、cancel 或 runtime action inputs/outputs。若要這些能力，應使用 Microsoft 支援的 Power Automate Management connector 或 solution ALM，並另外設計 least privilege 與 human approval。

## Requirements and install

- Node.js 22+
- 可存取目標 tenant 的 Microsoft Entra identity
- `https://api.powerplatform.com/.default` access token，或已設定的 device-code public client

```bash
pnpm install --frozen-lockfile
cp .env.example .env
pnpm build
```

不要提交 `.env`、tokens、API keys 或 `data/store.json`。

## Authentication

短期 PoC 可設定 `POWER_PLATFORM_ACCESS_TOKEN`，較安全的 process injection 可用 `POWER_PLATFORM_ACCESS_TOKEN_FILE`。本機互動使用可設定 `ENTRA_CLIENT_ID` 與 `ENTRA_TENANT_ID` 走 device-code flow。server 不接受 MCP caller 任意傳入 downstream bearer token。

## stdio

```json
{
  "mcpServers": {
    "power-automate-selfhosted": {
      "command": "node",
      "args": ["/absolute/path/dist/index.js"],
      "env": {
        "POWER_PLATFORM_ACCESS_TOKEN_FILE": "/run/secrets/power-platform-token",
        "STORE_ENABLED": "true"
      }
    }
  }
}
```

## Streamable HTTP

```bash
export MCP_TRANSPORT=http
export MCP_HTTP_HOST=127.0.0.1
export MCP_HTTP_PORT=8787
export MCP_HTTP_API_KEY='generate-a-long-random-value'
export POWER_PLATFORM_ACCESS_TOKEN_FILE=/run/secrets/power-platform-token
pnpm start:http
```

- Health: `GET /healthz`
- MCP: `POST /mcp`
- 每個 initialize 會建立獨立 stateful MCP session；後續 request 必須帶 `Mcp-Session-Id`。
- Production 請放在 TLS reverse proxy 後，並加 IP allowlist、rate limit、secret manager 與 egress policy。

## Copilot Studio

在 `Tools > Add a tool > New tool > Model Context Protocol` 加入 HTTPS endpoint。關閉 **Allow all tools**，只明確啟用需要的唯讀 tools。Native agent flow 必須與 agent 位於相同 environment/solution，使用 `When an agent calls the flow` 與 `Respond to the agent`，將 `Asynchronous response` 設為 Off，並在 100 秒內回應。詳見 `docs/copilot-studio-setup.md`。

## Verification

```bash
pnpm lint
pnpm test
pnpm build
pnpm format:check
pnpm audit
```

測試涵蓋 MCP initialize/session、tools/list、官方 endpoint path、nested `properties` normalization、pagination origin 防護、retry、auth 與 local store；不會連到真實 tenant。tenant RBAC、DLP、consent、quota 與 production compatibility 仍須在 sandbox environment 驗證。

## Documents

- `docs/api-contract.md`: supported REST contract and gaps
- `docs/architecture.md`: trust boundaries and transport lifecycle
- `docs/copilot-studio-setup.md`: Copilot Studio configuration
- `SECURITY.md`: threat model and hardening
