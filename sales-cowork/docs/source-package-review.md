# 來源與重構說明

最初上傳的 `microsoft_sales_cowork_single_plugin.zip` 是設計資料，缺少可部署的 Microsoft 365 `manifest.json`、Icons 與 `skills/*/SKILL.md`。後續版本已轉成可部署的 Copilot Cowork Skills-only app package。

3.0.0 版採用單檔平鋪 Monolithic Prompt Packing，並依 `calendar-management.zip` 的完整 Skill 結構補齊：

- 明確的適用與不適用情境；
- Quick start 與分階段 workflow；
- Work IQ MCP tool contract 與 runtime discovery；
- Evidence、Privacy、Permission、Approval 與 policy-denial handling；
- 完整 Sales artifact、Examples、Guardrails、Common issues、停止條件與完成檢查；
- 十七個 Enterprise Sales lifecycle Skills；
- 一對一的繁體中文 Prompt Card catalog。

內容設計同時參考：

- Kimi Agents 中的 Market research、Business email、Meeting、Pricing 與 Research writing patterns；
- Anthropic 官方 Agent Skills 的 YAML frontmatter、清楚觸發條件、Self-contained instructions 與 examples／guidelines 結構；
- OpenAI Skills 的精確 routing、Focused workflow、證據與操作邊界；
- Microsoft Copilot Cowork 與 Work IQ MCP 官方規格。

這些來源只用於改善 Skill 的觸發、工作流程、證據品質與執行安全，未將來源摘要或製作過程寫入部署用 `SKILL.md`。

未沿用範例中的 Claude memory path、TaskCreate、固定 workload-specific MCP tools 或自動 mutation。Sales Cowork 只呼叫 Cowork 內建 Unified Work IQ MCP，並保留使用者及 Tenant governance 的核准邊界。
