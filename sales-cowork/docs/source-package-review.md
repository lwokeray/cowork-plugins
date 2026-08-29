# 來源與重構說明

最初上傳的 `microsoft_sales_cowork_single_plugin.zip` 是設計資料，缺少可部署的 Microsoft 365 `manifest.json`、Icons 與 `skills/*/SKILL.md`。後續版本已轉成可部署的 Copilot Cowork Skills-only app package。

2.2.0 版依單檔平鋪的 Monolithic Prompt Packing，參考 `calendar-management.zip`、Kimi Skills、Claude Skills 與 ChatGPT／Codex Skills 的工作流寫法，將十七個 Skill 逐份補強：

- 明確的角色、啟用界線與完成定義；
- 依各銷售任務設計的分階段執行流程與判斷規則；
- 證據、日期、版本、衝突、未知、權限與核准處理；
- 固定輸出契約、互動規則、情境範例與例外處理；
- 使用者可見內容與內部執行規則的明確分界；
- 每個 Skill 專屬的作業模式、必要輸入、合理假設、證據優先序、停止／交接條件與交付前檢查；
- 核心流程完全收錄在 `SKILL.md`，不依賴額外 reference 或 script；
- 十七個 Enterprise Sales lifecycle Skills；
- 一對一的繁體中文 Prompt Card catalog。

未沿用範例中的 Claude memory path、TaskCreate 或自動寫入做法。每個 Skill 都先完成查證與預覽，再依使用者確認處理可執行動作。
