# Sales Cowork

Sales Cowork 是專為 Enterprise Sales、B2B Solution Sales、Presales 與 Sales Management 設計的 Microsoft 365 Copilot Cowork Plugin。每個 Skill 都是一份可供 Agent 完整閱讀的工作手冊，包含啟用界線、證據要求、逐步流程、判斷規則、交付格式與例外處理。

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

- 每個 Skill 依實際銷售目的、所需證據、判斷方式與交付成果劃分，不依應用程式劃分。
- 分析、研究、寫作、會議整理與文件處理是完成工作的內部方法，不要求使用者理解。
- 對使用者只呈現業務結果、來源、日期、未知、風險與下一步，不顯示內部技術細節。
- 沒有來源的資訊不補猜；不同版本或證據衝突時並列差異並指出需確認的人。
- 任何寄送、建立、更新或排程，都先提供完整預覽並取得明確確認。
- 權限不足時說明對結果的影響，不嘗試繞過。

詳細規則見 [Skill 設計標準](docs/skill-design-standard.md)。

## Prompt Cards

- [Prompt Card 欄位目錄](prompts/prompt-cards.md)
- [Prompt Card CSV](prompts/prompt-cards.csv)

每個 Skill 對應一張繁體中文 Prompt Card。CSV 完全遵循 Microsoft 365 Admin Center 的 Organizational Prompts 匯入欄位與 UTF-8 BOM 編碼：分析、摘要、研究、草稿及預覽型提示同時支援 `Copilot work` 與 `Copilot web`；需要 Planner 工作資料的提示只支援 `Copilot work`。Web 模式不會自行存取 M365 內部資料，使用者需貼上或附加必要內容。`Task Type` 使用英文匯入枚舉、`Locale` 為 `zh-TW`、部門為 `銷售`。Prompt 採用 `Goal＋Context＋Source＋Expectations` 結構，並以 `{{欄位，例如：範例}}` 標示使用者可直接替換的內容；Work IQ 與治理規則保留在 Skill 內。

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
