# Prompt Card Standard

`prompts/prompt-cards.yaml` 是唯一來源；`prompt-cards.md` 與 `prompt-cards.csv` 由 `scripts/prompt_cards.py` 產生，不直接修改。

- 每個 manifest Skill 恰好一張 Prompt Card，Card `id` 與 `skill` 等於 Skill folder。
- Prompt 使用自然、完整的使用者語言，包含任務、範圍、必要變數與預期產物。
- 不揭露工具名稱、schema、payload、Agent 指令或內部實作。
- 不暗示已寄送、已批准、已寫入、已提交或可繞過授權。
- Cards 之間必須有清楚任務差異，不能只替換名詞。
- 每張 Card 同時作為 routing eval 的正向測試來源。
- CSV 欄位固定為 `Title`、`Description`、`Display Prompt`、`Prompt Text`、`Products`、`Department`、`Task Type`、`Locale`。
- `Title` ≤ 35、`Display Prompt` ≤ 132、`Prompt Text` ≤ 8,000、`Department` ≤ 120、`Description` ≤ 200 characters。
- `Products` 只使用目前支援的 `Copilot work`／`Copilot web`；`Locale` 使用 `ll-CC`。
- `Task Type` 必須採 Microsoft 365 admin center 匯入 flyout 當下列出的支援值；平台清單可能變更，tenant acceptance 必須實際匯入驗證。
- 產生的 CSV 使用 UTF-8 with BOM，便於 Excel 與 Microsoft 365 admin center 正確辨識繁體中文。

更新後執行：

```bash
python scripts/prompt_cards.py plugins/<plugin> --write
```
