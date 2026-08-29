# Sales Cowork

Sales Cowork 是專為 Enterprise Sales、B2B Solution Sales、Presales 與 Sales Management 設計的 Microsoft 365 Copilot Cowork Plugin。套件僅包含 Agent Skills，由 Skills 直接協調 Cowork 內建 Unified Work IQ MCP，不另外封裝 MCP Server、OAuth 或 workload-specific connectors。

## Skills

| Sales lifecycle | Skill | 核心用途 |
|---|---|---|
| 每日執行 | `daily-sales-rhythm` | 從今日會議、承諾與工作整理最多三項重點。 |
| Lead | `lead-intake-qualification` | 評估新線索、重複項目、資訊缺口與安全下一步。 |
| Account | `account-research` | 建立具來源的內部 Account Evidence Brief。 |
| Account | `market-competitive-research` | 回答明確市場或競爭問題並建立可驗證假設。 |
| Account | `account-plan` | 建立客戶成果、關係覆蓋、Whitespace 與行動計畫。 |
| Meeting | `customer-meeting-brief` | 準備單一即將發生的客戶會議。 |
| Meeting | `meeting-follow-up` | 建立會議紀要、客戶 Email 草稿與 Planner 建議。 |
| Opportunity | `opportunity-strategy` | 建立 Deal Map、Decision path 與推進策略。 |
| Opportunity | `deal-inspection` | 檢查 Buyer evidence、阻礙、缺口與安全下一步。 |
| Engagement | `sales-outreach-engagement` | 準備並執行核准的 Outlook、Teams 與 Calendar 互動。 |
| Execution | `sales-task-planning` | 檢視、建立或更新 Planner 銷售工作。 |
| Pipeline | `pipeline-workspace-hygiene` | 清理核准的 Excel、SharePoint 或 OneDrive register。 |
| Forecast | `forecast-decision-pack` | 比較核准快照並建立 Manager decision pack。 |
| Proposal | `proposal-preparation` | 建立 Requirements、Scope、Assumptions 與 Proposal 草案。 |
| Commercial | `commercial-review-handoff` | 整理 Pricing、Legal、Security、Privacy 與核准事項。 |
| Close | `close-delivery-handoff` | 準備從 Signed evidence 到 Delivery 的交接。 |
| Renewal | `renewal-expansion-review` | 檢視 Outcome、Adoption、Renewal risk 與 Expansion hypothesis。 |

## 設計原則

- 頂層 Skill 依業務意圖、證據範圍、輸出及 Approval boundary 劃分，不依應用程式劃分。
- Email composition、Meeting extraction、Research、Scoring、XLSX 與 Slides 是 Skill 內部方法，不另註冊成 Agent Skill。
- `ask` 用於跨工作負載 reasoning；精確事實以 `search_paths`、`get_schema`、`fetch` 驗證。
- `create_entity`、`update_entity`、`do_action` 或 `delete_entity` 必須符合目前 Work IQ contract、逐項 preview 與使用者核准。
- 權限不足標示 `無法存取`，證據不存在標示 `未知`，operation 未提供標示 `不支援`。
- Tenant policy denial 是治理結果，不得改用其他工具或 Agent 重試。

詳細規則見 [Skill 設計標準](docs/skill-design-standard.md)。

## Prompt Cards

- [Prompt Card 欄位目錄](prompts/prompt-cards.md)
- [Prompt Card CSV](prompts/prompt-cards.csv)

每個 Skill 對應一張繁體中文 Prompt Card。CSV 完全遵循 Microsoft 365 Admin Center 的 Organizational Prompts 匯入欄位與 UTF-8 BOM 編碼：`Products` 使用官方識別值 `Copilot work`、`Task Type` 使用英文匯入枚舉、`Locale` 為 `zh-TW`、部門為 `銷售`。Prompt 採用 `Goal＋Context＋Source＋Expectations` 結構，並以 `{{欄位，例如：範例}}` 標示使用者可直接替換的內容；Work IQ 與治理規則保留在 Skill 內。

## 建置與驗證

```bash
mkdir -p dist
(cd sales-cowork && zip -X -qr -FS ../dist/sales-cowork.zip manifest.json color.png outline.png skills)
python3 sales-cowork/tests/validate_package.py sales-cowork dist/sales-cowork.zip
```

部署 ZIP 根目錄只包含 `manifest.json`、`color.png`、`outline.png` 與 `skills/`。README、docs、prompts 與 tests 是 Repository materials，不放入部署 ZIP。

## Tenant 測試

在非 Production tenant 使用合成 Outlook、Teams、Calendar、Planner、SharePoint、OneDrive、Word、Excel、PowerPoint 與 meeting content 進行測試。確認 Skill routing、Work IQ runtime discovery、permission trimming、evidence citation、approval checkpoint、policy denial、Planner duplicate check 及 Prompt Card routing。

## 官方參考

- [Build plugins for Copilot Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-plugin-development)
- [Work IQ MCP overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/work-iq/mcp/overview)
- [Work IQ MCP tool reference](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/work-iq/mcp/tool-reference)
- [Organizational prompts for Microsoft Copilot](https://learn.microsoft.com/en-us/microsoft-365/copilot/organizational-prompts)

## Privacy

套件不含 Remote connector、Credential 或 Telemetry。所有存取沿用登入使用者的 Copilot、Microsoft 365 權限與 Tenant policy；Tenant 管理員負責 Retention、Audit、Purview、Sharing control 與核准的 Sales workspace。

## Terms

此 Sample 僅供受 Tenant 管理的評估與測試。Production deployment 前必須驗證 Licensing、Permission、Data handling 與可用的 Work IQ operations。
