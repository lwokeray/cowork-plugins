# 產品與專案管理 Copilot Cowork Prompt Cards

此檔案由 `prompt-cards.yaml` 自動產生，請勿直接修改。

## PM 營運系統

- Skill：`pm-operating-system`
- 顯示文字：幫我進行PM 營運系統
- Department：產品管理
- Task type：Prepare
- Locale：zh-TW

產出可審查的PM operating contract、物件關係圖、source-of-truth 規則、決策與變更控制清單，保留證據、未知、責任與核准邊界。

**Prompt**

請為我們的產品團隊建立 PM operating system，統一 intake、PRD、cycle、roadmap、風險與週報的責任邊界。 範圍是 {{物件或團隊，例如：目前產品團隊}}，期間是 {{時間範圍，例如：本季}}。請依核准來源產出可直接審查的結果，標示來源與日期、未知與衝突、owner、風險、依賴、待決策事項及下一步；任何建立、更新、寄送或發布先提供完整預覽。

## 需求與問題分流

- Skill：`issue-triage`
- 顯示文字：幫我進行需求與問題分流
- Department：產品管理
- Task type：Prepare
- Locale：zh-TW

產出可審查的triage decision、證據卡、重複候選、路由建議與下一步，保留證據、未知、責任與核准邊界。

**Prompt**

請整理本週收到的產品請求，標示重複項、需要補件的項目，以及建議由哪個 team 接手。 範圍是 {{物件或團隊，例如：目前產品團隊}}，期間是 {{時間範圍，例如：本季}}。請依核准來源產出可直接審查的結果，標示來源與日期、未知與衝突、owner、風險、依賴、待決策事項及下一步；任何建立、更新、寄送或發布先提供完整預覽。

## Issue 成形

- Skill：`issue-shaping`
- 顯示文字：幫我進行Issue 成形
- Department：產品管理
- Task type：Prepare
- Locale：zh-TW

產出可審查的delivery-ready issue、acceptance criteria、dependency map、readiness verdict，保留證據、未知、責任與核准邊界。

**Prompt**

把已核准的匯出失敗問題整理成可交付 issue，補上邊界情境、驗收條件與依賴。 範圍是 {{物件或團隊，例如：目前產品團隊}}，期間是 {{時間範圍，例如：本季}}。請依核准來源產出可直接審查的結果，標示來源與日期、未知與衝突、owner、風險、依賴、待決策事項及下一步；任何建立、更新、寄送或發布先提供完整預覽。

## 產品規格撰寫

- Skill：`product-spec-writer`
- 顯示文字：幫我進行產品規格撰寫
- Department：產品管理
- Task type：Design
- Locale：zh-TW

產出可審查的controlled PRD、需求追溯矩陣、release slices、open-decision register，保留證據、未知、責任與核准邊界。

**Prompt**

根據客戶研究與現有流程，建立新版權限管理 PRD，包含需求 ID、非功能需求、成功指標與 rollout。 範圍是 {{物件或團隊，例如：目前產品團隊}}，期間是 {{時間範圍，例如：本季}}。請依核准來源產出可直接審查的結果，標示來源與日期、未知與衝突、owner、風險、依賴、待決策事項及下一步；任何建立、更新、寄送或發布先提供完整預覽。

## 使用者故事地圖

- Skill：`story-map-builder`
- 顯示文字：幫我進行使用者故事地圖
- Department：產品管理
- Task type：Design
- Locale：zh-TW

產出可審查的story map、backbone、release slices、learning goals、coverage gaps，保留證據、未知、責任與核准邊界。

**Prompt**

把已核准的 onboarding PRD 轉成 story map，提出 MVP、第二階段與各 slice 的 learning goal。 範圍是 {{物件或團隊，例如：目前產品團隊}}，期間是 {{時間範圍，例如：本季}}。請依核准來源產出可直接審查的結果，標示來源與日期、未知與衝突、owner、風險、依賴、待決策事項及下一步；任何建立、更新、寄送或發布先提供完整預覽。

## 專案規模估算

- Skill：`project-sizing-guide`
- 顯示文字：幫我進行專案規模估算
- Department：產品管理
- Task type：Prepare
- Locale：zh-TW

產出可審查的estimate range、assumption log、driver breakdown、confidence 與 re-estimation triggers，保留證據、未知、責任與核准邊界。

**Prompt**

請估算這個專案的工程規模，列出樂觀、最可能、保守區間及需要重新估算的觸發條件。 範圍是 {{物件或團隊，例如：目前產品團隊}}，期間是 {{時間範圍，例如：本季}}。請依核准來源產出可直接審查的結果，標示來源與日期、未知與衝突、owner、風險、依賴、待決策事項及下一步；任何建立、更新、寄送或發布先提供完整預覽。

## 加權決策評分

- Skill：`weighted-scorer`
- 顯示文字：幫我進行加權決策評分
- Department：產品管理
- Task type：Analyze
- Locale：zh-TW

產出可審查的decision matrix、criteria anchors、evidence ledger、sensitivity analysis、recommendation，保留證據、未知、責任與核准邊界。

**Prompt**

比較三個分析平台，依成本、整合、安全、可營運性評分，並測試權重改變是否會翻轉結論。 範圍是 {{物件或團隊，例如：目前產品團隊}}，期間是 {{時間範圍，例如：本季}}。請依核准來源產出可直接審查的結果，標示來源與日期、未知與衝突、owner、風險、依賴、待決策事項及下一步；任何建立、更新、寄送或發布先提供完整預覽。

## 風險熱圖

- Skill：`risk-heatmap`
- 顯示文字：幫我進行風險熱圖
- Department：產品管理
- Task type：Analyze
- Locale：zh-TW

產出可審查的risk register、heatmap、response plan、trigger 與 escalation list，保留證據、未知、責任與核准邊界。

**Prompt**

請為下一季 release 建立 5×5 風險熱圖，列出前三大風險、緩解行動、owner 與 residual exposure。 範圍是 {{物件或團隊，例如：目前產品團隊}}，期間是 {{時間範圍，例如：本季}}。請依核准來源產出可直接審查的結果，標示來源與日期、未知與衝突、owner、風險、依賴、待決策事項及下一步；任何建立、更新、寄送或發布先提供完整預覽。

## 專案營運

- Skill：`project-ops`
- 顯示文字：幫我進行專案營運
- Department：產品管理
- Task type：Design
- Locale：zh-TW

產出可審查的project operating baseline、milestones、RACI、cadence、dependency/risk/decision registers，保留證據、未知、責任與核准邊界。

**Prompt**

幫我建立新專案的 operating baseline，包含里程碑、角色、決策節奏、依賴與每週健康檢查。 範圍是 {{物件或團隊，例如：目前產品團隊}}，期間是 {{時間範圍，例如：本季}}。請依核准來源產出可直接審查的結果，標示來源與日期、未知與衝突、owner、風險、依賴、待決策事項及下一步；任何建立、更新、寄送或發布先提供完整預覽。

## 倡議路線圖

- Skill：`initiative-roadmap`
- 顯示文字：幫我進行倡議路線圖
- Department：產品管理
- Task type：Design
- Locale：zh-TW

產出可審查的initiative roadmap、outcome lanes、dependency map、confidence windows、decision gates，保留證據、未知、責任與核准邊界。

**Prompt**

請建立未來兩季的產品 roadmap，依策略成果排列 initiatives，標出依賴、信心與需要主管決策的地方。 範圍是 {{物件或團隊，例如：目前產品團隊}}，期間是 {{時間範圍，例如：本季}}。請依核准來源產出可直接審查的結果，標示來源與日期、未知與衝突、owner、風險、依賴、待決策事項及下一步；任何建立、更新、寄送或發布先提供完整預覽。

## 週期規劃

- Skill：`cycle-planning`
- 顯示文字：幫我進行週期規劃
- Department：產品管理
- Task type：Prepare
- Locale：zh-TW

產出可審查的cycle goal、selected/cut list、capacity view、dependency checks、commitment caveats，保留證據、未知、責任與核准邊界。

**Prompt**

依目前 team capacity 規劃下一個兩週 cycle，列出選入、候補、移除項目與關鍵依賴。 範圍是 {{物件或團隊，例如：目前產品團隊}}，期間是 {{時間範圍，例如：本季}}。請依核准來源產出可直接審查的結果，標示來源與日期、未知與衝突、owner、風險、依賴、待決策事項及下一步；任何建立、更新、寄送或發布先提供完整預覽。

## 客戶訊號綜整

- Skill：`customer-signal`
- 顯示文字：幫我進行客戶訊號綜整
- Department：產品管理
- Task type：Prepare
- Locale：zh-TW

產出可審查的signal ledger、theme clusters、evidence strength、counter-signals、validation questions，保留證據、未知、責任與核准邊界。

**Prompt**

整理最近 90 天企業客戶對權限管理的回饋，找出主題、反證、證據強度與下一步驗證問題。 範圍是 {{物件或團隊，例如：目前產品團隊}}，期間是 {{時間範圍，例如：本季}}。請依核准來源產出可直接審查的結果，標示來源與日期、未知與衝突、owner、風險、依賴、待決策事項及下一步；任何建立、更新、寄送或發布先提供完整預覽。

## 專案狀態更新

- Skill：`project-update`
- 顯示文字：幫我進行專案狀態更新
- Department：產品管理
- Task type：Prepare
- Locale：zh-TW

產出可審查的audience-ready project update、health rationale、period deltas、risks、decisions and asks，保留證據、未知、責任與核准邊界。

**Prompt**

準備本週給主管的專案更新，聚焦成果、健康度變化、風險、依賴與需要決策的事項。 範圍是 {{物件或團隊，例如：目前產品團隊}}，期間是 {{時間範圍，例如：本季}}。請依核准來源產出可直接審查的結果，標示來源與日期、未知與衝突、owner、風險、依賴、待決策事項及下一步；任何建立、更新、寄送或發布先提供完整預覽。

## 成果檢視

- Skill：`outcome-review`
- 顯示文字：幫我進行成果檢視
- Department：產品管理
- Task type：Analyze
- Locale：zh-TW

產出可審查的outcome scorecard、metric comparison、evidence confidence、learning、continue/change/stop recommendation，保留證據、未知、責任與核准邊界。

**Prompt**

檢視新版 onboarding 上線後 30 天的成果，比較 baseline、target、observed 與 guardrail，提出下一步。 範圍是 {{物件或團隊，例如：目前產品團隊}}，期間是 {{時間範圍，例如：本季}}。請依核准來源產出可直接審查的結果，標示來源與日期、未知與衝突、owner、風險、依賴、待決策事項及下一步；任何建立、更新、寄送或發布先提供完整預覽。

## PM 治理與核准

- Skill：`governance`
- 顯示文字：幫我進行PM 治理與核准
- Department：產品管理
- Task type：Execute
- Locale：zh-TW

產出可審查的mutation preview、approval record、execution result、read-back verification、audit trail，保留證據、未知、責任與核准邊界。

**Prompt**

請更新專案狀態並發布主管週報；先列出所有變更與收件對象，等我確認後再執行。 範圍是 {{物件或團隊，例如：目前產品團隊}}，期間是 {{時間範圍，例如：本季}}。請依核准來源產出可直接審查的結果，標示來源與日期、未知與衝突、owner、風險、依賴、待決策事項及下一步；任何建立、更新、寄送或發布先提供完整預覽。

## PM 品質審查

- Skill：`pm-reviewer`
- 顯示文字：幫我進行PM 品質審查
- Department：產品管理
- Task type：Analyze
- Locale：zh-TW

產出可審查的review verdict、severity-ranked findings、missing evidence、approval gates、exact fixes，保留證據、未知、責任與核准邊界。

**Prompt**

請審查這份 PRD 與預計建立的 issues，在寫入前指出證據、驗收、依賴與核准缺口。 範圍是 {{物件或團隊，例如：目前產品團隊}}，期間是 {{時間範圍，例如：本季}}。請依核准來源產出可直接審查的結果，標示來源與日期、未知與衝突、owner、風險、依賴、待決策事項及下一步；任何建立、更新、寄送或發布先提供完整預覽。
