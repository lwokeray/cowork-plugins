# Marketing Cowork

Marketing Cowork 是提供企業 Marketing 團隊使用的 Microsoft 365 Copilot Cowork Skills Plugin。套件只包含 Agent Skills，透過 Cowork 內建 Unified Work IQ MCP，在登入使用者既有權限與 Tenant policy 下協調 Outlook、Teams、Calendar、SharePoint、OneDrive、Word、Excel、PowerPoint、Forms 與 Planner；不另附外部 MCP Server、Credential 或 Marketing platform connector。

版本 1.0 採單檔平鋪 Monolithic Prompt Packing。每個 `SKILL.md` 都自含啟用邊界、證據層級、完整工作流程、輸出契約、核准關卡、停止條件、錯誤處理與完成檢查。Agent 能在未讀取外部 references 的情況下完成核心工作，使用者取得的是可直接審閱或使用的 Marketing artifact，不會看到製作摘要、隱藏思考或內部 tool payload。

## Skills

| Marketing lifecycle | Skill | 核心用途 |
|---|---|---|
| Daily operations | `marketing-operating-rhythm` | 從行事曆、承諾、工作與 KPI 整理今日或本週最重要行動。 |
| Research | `market-audience-research` | 建立市場、受眾、需求與 journey 的 Evidence Brief。 |
| Research | `voice-of-customer-synthesis` | 從可追溯的客戶語言整理主題、引言、痛點與機會。 |
| Positioning | `competitive-positioning-brief` | 建立公平、可追溯的競爭定位與 Messaging brief。 |
| Brand | `brand-strategy-governance` | 建立或更新 Brand voice、Messaging pillars、Terminology 與 Claim library。 |
| Campaign | `campaign-strategy-plan` | 定義 Objective、Audience、Message、Channel、Budget、KPI 與風險。 |
| Content | `content-strategy-calendar` | 規劃主題、Journey coverage、內容組合、重用與 Editorial calendar。 |
| Content | `marketing-content-creation` | 產出完整 Blog、Landing page、Case study、Press release、Newsletter 或 Video script。 |
| Content | `channel-content-adaptation` | 將核准的核心內容轉成各渠道與地區版本並維持 Message fidelity。 |
| Governance | `brand-content-review` | 依 Brand、Claims、Legal、Accessibility 與 Channel 規則審稿。 |
| Lifecycle | `email-nurture-campaign` | 設計具完整文案、節奏、分支、退出及 Consent 規則的 Email sequence。 |
| Event | `event-webinar-marketing` | 規劃活動、邀請、提醒、現場內容與會後 Follow-up。 |
| Launch | `product-launch-marketing` | 建立 Launch tier、受眾、訊息、資產、Readiness 與跨部門計畫。 |
| Paid | `paid-media-creative-plan` | 規劃 Paid media、Audience、Creative angles、Variants、Budget 與 QA。 |
| Organic | `seo-content-optimization` | 進行 Search intent、On-page、Content gap 與 SEO content 優化。 |
| Experiment | `marketing-experiment-design` | 設計與分析 A/B test、MDE、Sample、Power、Decision rule 與 Rollout。 |
| Measurement | `marketing-performance-report` | 正規化 KPI、比較目標與期間、整理 Attribution 限制及決策。 |
| Optimization | `campaign-optimization-review` | 診斷 Funnel 問題、建立 Hypothesis 並提出 Scale／Iterate／Pause 建議。 |
| Lead | `lead-lifecycle-handoff` | 管理 Consent、去重、Qualification、Attribution 與 Sales-ready handoff。 |
| Execution | `marketing-work-management` | 建立或更新核准的 Marketing register、Planner 工作、Approval 與 Archive。 |

## 設計原則

- Skill 依 Marketing intent、證據範圍、輸出及 Approval boundary 劃分，不依 M365 application 劃分。
- 內部事實、外部公開證據、分析推論與未知必須分開；客戶引言保持逐字且附來源。
- `ask` 用於跨 Microsoft 365 工作負載推理；重大事實以 `search_paths`、`get_schema`、`fetch` 或 `fetch_blob` 驗證。
- `create_entity`、`update_entity`、`delete_entity` 與 `do_action` 只能使用 runtime 已公開的 path/schema，顯示完整 Preview 並通過使用者與平台核准。
- Public research 只在使用者要求或任務明確需要 current public facts 時使用；快速變動資訊須保留發布日期與直接來源。
- 對外發布、Paid campaign 上線、Audience upload、Budget commitment、Lead routing、Legal approval 與 Claim approval 不可由 Skill 自行推定完成。
- 權限不足標示 `無法存取`，證據不存在標示 `未知`，runtime 未提供 operation 標示 `不支援`；Tenant policy denial 視為治理結果，不改用其他工具規避。

## 建置與驗證

```bash
mkdir -p dist
(cd marketing-cowork && zip -X -qr -FS ../dist/marketing-cowork.zip manifest.json color.png outline.png skills)
python3 marketing-cowork/tests/validate_package.py marketing-cowork dist/marketing-cowork.zip
```

部署 ZIP 根目錄只包含 `manifest.json`、`color.png`、`outline.png` 與 `skills/`。README 與 tests 為 Repository materials，不放入部署套件。

## Tenant 測試

在非 Production tenant 使用合成 Outlook、Teams、Calendar、SharePoint、OneDrive、Word、Excel、PowerPoint、Forms 與 Planner 資料測試 Skill routing、permission trimming、evidence citation、品牌與 Claim gate、Audience／Consent boundary、mutation approval、policy denial、duplicate detection 及結果驗證。

## 官方參考

- [Build plugins for Copilot Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-plugin-development)
- [Work IQ MCP overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/work-iq/mcp/overview)
- [Work IQ MCP tool reference](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/work-iq/mcp/tool-reference)
- [Anthropic Marketing knowledge-work plugin](https://github.com/anthropics/knowledge-work-plugins/tree/main/marketing)
- [OpenAI role-specific plugins](https://github.com/openai/role-specific-plugins)
- [Kimi Agents skills collection](https://github.com/lwokeray/personal-shared-skills/tree/main/skills/kimi-agents)

## Privacy

套件不含 Remote connector、Credential 或 Telemetry。所有 Microsoft 365 存取沿用登入使用者的既有權限、Retention、DLP、Purview 與 Tenant policy。Marketing 名單、Consent、客戶引言、個人資料、Campaign performance 及未公開 Launch 資訊必須依組織政策處理。

## Terms

此 Sample 供受 Tenant 管理的評估與測試。Production deployment 前須由組織確認 Licensing、Permission、Brand、Legal、Privacy、Consent、Advertising policy、Data handling 及可用的 Work IQ operations。
