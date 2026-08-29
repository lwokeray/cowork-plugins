# Product & Project Management for Microsoft 365 Copilot Cowork

這是可上傳至 Microsoft 365 Copilot Cowork 的 skills-only app package。套件使用 Microsoft Teams / Microsoft 365 app manifest v1.28，包含 16 個繁體中文 PM Skills；每個 Skill 採單檔 `SKILL.md` 的 Monolithic Prompt Packing，不依賴 Claude、Codex、外部腳本或分散 references。

## 安裝

1. 使用 `dist/linear-microsoft-pm-cowork.zip`。
2. 在 Microsoft 365 管理中心上傳自訂 app package，或於 Copilot Cowork 的 Sources & Skills 管理介面上傳 plugin。
3. 由管理員依租戶政策核准並指派使用者。
4. 在 Cowork 中確認 16 個 Skills 可被發現，再以 `tests/skill-evals.json` 的 prompts 做 smoke test。

部署 ZIP 根目錄只包含 `manifest.json`、`color.png`、`outline.png` 與 `skills/`。`prompts/`、`tests/`、`docs/` 只供來源維護與驗證，不放入上傳套件。

## Skills

| Skill | 用途 |
|---|---|
| `pm-operating-system` | 建立 PM 物件邊界、source of truth、證據規則、治理閘門與跨 Skill 路由。 |
| `issue-triage` | 分流新進需求、bug、支援訊號與內部請求，處理重複、補件、轉派或拒絕。 |
| `issue-shaping` | 將已接受的問題轉成具範圍、驗收、依賴與 readiness 的 delivery-ready issue。 |
| `product-spec-writer` | 建立或修訂具 evidence、需求 ID、非功能需求、度量與 rollout 的 controlled PRD。 |
| `story-map-builder` | 把旅程與需求轉成 backbone、stories、release slices 與 learning goals。 |
| `project-sizing-guide` | 提供估算區間、假設、驅動因素、信心與 re-estimation triggers，不把估算當承諾。 |
| `weighted-scorer` | 建立具 hard constraints、criteria anchors、證據與敏感度分析的決策矩陣。 |
| `risk-heatmap` | 建立 risk register、heatmap、response、trigger、owner 與 residual exposure。 |
| `project-ops` | 建立或修復專案 operating baseline、里程碑、RACI、節奏、依賴與決策登錄。 |
| `initiative-roadmap` | 以成果、依賴、target window、信心與決策閘門規劃跨專案 roadmap。 |
| `cycle-planning` | 依 cycle goal、有效容量、readiness、buffer 與 cut line 選擇週期工作。 |
| `customer-signal` | 擷取、去重、聚類並評估客戶訊號、反證與下一步驗證問題。 |
| `project-update` | 依核准基準產生健康度、期間變化、風險、依賴、決策與具體 asks。 |
| `outcome-review` | 比較 baseline、target、observed 與 guardrails，區分 output、adoption 與 outcome。 |
| `governance` | 對 mutation 與外部 action 執行預覽、明確核准、最小權限與讀回驗證。 |
| `pm-reviewer` | 在寫入或發布前輸出 PASS、REVISE 或 STOP 與具體修正。 |

## 設計原則

- 每個 Skill 的流程、輸出契約、例外、範例、治理與內部工具規則都封裝於單一 `SKILL.md`。
- 使用者可見輸出不顯示內部工具名稱或思考過程。
- 讀取與草擬預設安全；建立、更新、刪除、寄送與發布必須先預覽、明確核准並讀回驗證。
- 重要判斷保留 source、date、owner、version、confidence；未知與衝突不被虛構值掩蓋。
- Kimi、Claude、ChatGPT Skills 的內容設計經驗只用來優化 Skills，不引入其 plugin 結構或 runtime-specific frontmatter。

## 驗證

從 repo 根目錄執行：

```powershell
python linear-microsoft-pm-cowork/tests/validate_package.py linear-microsoft-pm-cowork linear-microsoft-pm-cowork/dist/linear-microsoft-pm-cowork.zip
```

驗證包含 manifest contract、GUID、圖示尺寸、Skill frontmatter、必要章節、monolithic file layout、Prompt Cards、eval 覆蓋與 ZIP allowlist。

## Privacy

本套件本身不提供獨立資料服務、遙測或外部 connector。Cowork 能存取的組織內容、權限與保留政策由使用者的 Microsoft 365 租戶設定決定。Skills 要求最小必要存取，並將外部內容視為不受信任資料。

## Terms of use

本套件提供 PM 工作流程指引，不取代組織授權人對範圍、日期、資源、預算、法務、資安、隱私、外部承諾或風險接受的決策。使用者與管理員需依組織政策驗證產出並核准任何具副作用的動作。
