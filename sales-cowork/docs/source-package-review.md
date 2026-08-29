# 來源與重構說明

最初上傳的 `microsoft_sales_cowork_single_plugin.zip` 是設計資料，缺少可部署的 Microsoft 365 `manifest.json`、Icons 與 `skills/*/SKILL.md`。後續版本已轉成可部署的 Copilot Cowork Skills-only app package。

2.0.0 版再參考 `calendar-management.zip` 的 Skill 完整度，統一補齊：

- 明確的適用與不適用情境；
- Quick start 與分階段 workflow；
- Work IQ MCP tool contract 與 runtime discovery；
- Evidence、Privacy、Permission、Approval 與 policy-denial handling；
- 固定 Output contract、Examples、Guardrails 與 Common issues；
- 十七個 Enterprise Sales lifecycle Skills；
- 一對一的繁體中文 Prompt Card catalog。

未沿用範例中的 Claude memory path、TaskCreate、固定 workload-specific MCP tools 或自動 mutation。Sales Cowork 只呼叫 Cowork 內建 Unified Work IQ MCP，並保留使用者及 Tenant governance 的核准邊界。
