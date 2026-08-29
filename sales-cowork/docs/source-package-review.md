# 來源與重構說明

最初上傳的 `microsoft_sales_cowork_single_plugin.zip` 是設計資料，缺少可部署的 Microsoft 365 `manifest.json`、Icons 與 `skills/*/SKILL.md`。後續版本已轉成可部署的 Copilot Cowork Skills-only app package。

2.1.0 版再參考 `calendar-management.zip` 的 Skill 完整度，將十七個 Skill 逐份重寫並補齊：

- 明確的角色、啟用界線與完成定義；
- 依各銷售任務設計的分階段執行流程與判斷規則；
- 證據、日期、版本、衝突、未知、權限與核准處理；
- 固定輸出契約、互動規則、情境範例與例外處理；
- 使用者可見內容與內部執行規則的明確分界；
- 十七個 Enterprise Sales lifecycle Skills；
- 一對一的繁體中文 Prompt Card catalog。

未沿用範例中的 Claude memory path、TaskCreate 或自動寫入做法。每個 Skill 都先完成查證與預覽，再依使用者確認處理可執行動作。
