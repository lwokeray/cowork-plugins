---
name: account-plan
description: >-
  依 Microsoft 365 證據建立或更新一個企業客戶的長期經營計畫，包括客戶成果、關係覆蓋、Whitespace、風險與行動。
  適用於 Account Planning、Stakeholder Coverage 與 Executive Engagement；不適用於單一商機策略、Meeting Brief、Forecast 或 Proposal authoring。
metadata:
  author: lwokeray
  version: "3.0.0"
---

# 客戶經營計畫

## 概述

將 `account-research` 的可驗證證據轉成可持續維護的 Account Plan。計畫必須區分客戶確認事實、內部假設與未知，且不得把活動量、職稱或組織位置直接視為關係品質或決策權。

## 適用情境

- 建立或更新年度／季度 Account Plan。
- 盤點 Stakeholder Coverage、Executive Sponsorship 與關係缺口。
- 分析 Whitespace、Cross-sell 或合作機會假設。
- 建立具 Owner、期限與驗證方式的 Account actions。

## 不適用情境

- 單一 Opportunity 的推進策略 → `opportunity-strategy`
- 完整客戶研究 → `account-research`
- 單一 Meeting Brief → `customer-meeting-brief`
- Proposal 或 Forecast 決策。

## 快速開始

1. 確認唯一 Account、計畫期間、受眾及核准的現有 Account artifact。
2. 使用 `ask` 彙整客戶成果、組織關係、互動、承諾、風險及現有計畫。
3. 使用 `search_paths`、`get_schema`、`fetch` 驗證重大事實與 artifact 版本。
4. 建立 Outcome、Stakeholder、Whitespace、Risk 與 Action 五個區塊。
5. 如需儲存，顯示位置、版本與逐段差異；核准後才使用 `create_entity` 或 `update_entity`。

## 核心流程

### 階段一：確認規劃基準

- 指定 Account、期間及讀者，例如 Account Team 或 Sales Leadership。
- 找到現有核准版本時，以該版本為基準，不另建重複文件。
- 無核准版本時，建立 `草案`，不可宣稱為正式 Account Plan。

### 階段二：建立 Evidence Map

整理客戶業務成果、策略優先事項、現有解決方案、已知問題、互動歷程、利害關係人及待辦事項。每個項目必須有來源、日期及狀態：`已確認／推論／未知`。

### 階段三：關係與 Whitespace

- Stakeholder 只記錄已知角色與關係證據。
- Champion、Decision Maker、Blocker、Sponsor 等標籤需要明確證據；否則只寫待驗證假設。
- Whitespace 必須連結客戶成果或已確認問題，不得只因公司尚未購買某產品就判定為機會。

### 階段四：行動計畫

最多提出三項優先行動，每項包含 Outcome、Owner、Due、依賴、證據及完成標準。Planner 執行交給 `sales-task-planning`。

### 階段五：建立客戶成果架構

每個客戶成果需以客戶語言描述，包含目前狀態、期望改變、衡量方式、時間事件、重要限制及支持證據。若只有內部推測，放在「待驗證成果假設」，不可當作客戶已同意的目標。

將我方產品或服務連結至客戶成果時，先寫出因果關係及必要前提。不得因產品功能存在，就推定能達成客戶結果。

### 階段六：建立 Stakeholder coverage plan

對每個重大客戶成果或決策，檢查是否有：

- 實際使用者或營運 Owner。
- 技術、Security、Privacy、Legal 或 Procurement 參與者。
- Business sponsor 與預算／採購決策角色。
- 可能受影響但尚未參與的群組。
- 我方對應的關係 Owner。

只記錄有證據的實際角色。Decision Maker、Economic Buyer、Champion、Coach、Blocker 或 Executive Sponsor 均須附行為證據與觀察日期；否則寫為待驗證角色。

### 階段七：評估 Whitespace

Whitespace 不是未購買產品清單。每個假設必須包含：

1. 客戶已知成果、問題或限制。
2. 尚未滿足的能力或服務缺口。
3. 我方可能提供的價值及必要前提。
4. 已知替代方案與客戶目前做法。
5. 需要向客戶驗證的問題。
6. 若假設成立，最小可行的 Discovery 或 Value validation。

沒有客戶問題證據時，最多列為探索主題，不列入 Pipeline 或 Forecast。

### 階段八：建立年度／季度行動路徑

行動必須直接改善成果理解、關係覆蓋、Opportunity 品質、風險處理或共同執行。每項包含 Owner、需要合作的人、期限依據、前置條件、完成標準、證據更新位置及失敗時的替代動作。

避免「持續互動」「加強關係」「安排高層會議」等沒有目的的活動。應改寫成可驗證結果，例如「在 Q1 Business Review 前，由 Account Owner 與客戶 Operations Lead 確認目前 Incident handling baseline，完成標準為取得流程、Owner 與兩項量測方式」。

## 完整 Account Plan 結構

1. 文件狀態、Account、期間、Owner、讀者、基準版本及最後更新日期。
2. Account executive view：客戶成果、目前關係、主要機會假設、重大風險與本期決策。
3. 客戶成果地圖：證據、衡量方式、目前狀態、限制與未知。
4. Account 時間線：會改變計畫的重要事件與承諾。
5. Stakeholder map：角色證據、立場、覆蓋缺口及我方 Owner。
6. 現有 Opportunity 與服務：各自的客戶成果、狀態與關係，不重複計算。
7. Whitespace hypotheses：證據、替代方案、驗證問題與最小下一步。
8. 風險與依賴：觸發條件、Owner、緩解行動及升級點。
9. 本期三項優先行動：具體結果、Owner、Due、依賴及完成標準。
10. 需要 Sales Leadership 或跨部門決策的事項。

## 更新與版本規則

- 更新既有 Plan 時先產出 Change summary：新增證據、被推翻假設、關係變化、Opportunity 變更、風險及行動差異。
- 保留仍有效的來源連結，不因改寫而移除決策歷史。
- 被新證據推翻的假設標示「已否定」與日期，不靜默刪除。
- 正式核准前保持草案狀態；儲存成功不等於內容已核准。
- 同時找到多個版本時，依位置、Owner、版本與日期列出，不自行合併。

## 停止條件

- Account 無法唯一辨識時停止寫 Plan。
- 沒有任何客戶成果或問題證據時，先回到 Account research／Discovery，不建立產品導向計畫。
- 行動沒有具名 Owner 或授權時保持建議，不寫入 Planner。
- Commercial、Pricing、Legal、Security 或客戶承諾未核准時，不列為確定事項。

## 輸出格式

| 客戶成果 | 證據 | 目前狀態 | 缺口／風險 |
|---|---|---|---|
|  |  |  |  |

| 人員／群組 | 已知角色 | 關係證據 | 覆蓋缺口 | 下一步 |
|---|---|---|---|---|
|  |  |  |  |  |

| 優先行動 | Owner | Due | 依賴 | 完成標準 |
|---|---|---|---|---|
|  |  |  |  |  |

結尾：`計畫草案已完成`、`等待儲存核准` 或 `已核准並儲存`。

## 使用者溝通與完成檢查

- 交付可審閱的 Account Plan 正文，不把分析過程或欄位清單當成結果。
- 使用 Sales leadership 能直接理解的語言；內部工具、path、schema 與 payload 不外露。
- 不輸出隱藏思考；呈現證據、假設、取捨、風險與需要的決策。
- 客戶成果、Stakeholder coverage、Whitespace、風險及三項行動都有證據或明確未知。
- 更新版包含差異與版本狀態；儲存狀態不等於核准狀態。

## Work IQ 工具規則

- `ask` 用於跨工作負載 Account reasoning。
- `fetch` 驗證精確證據與版本；先執行 path/schema discovery。
- `create_entity`、`update_entity` 只在位置、schema、差異與使用者核准成立後執行。
- 不使用 `do_action` 建立外部溝通。

## 範例

**輸入：**「幫我更新 Contoso 的年度 Account Plan。」

**正確行為：**先找核准基準版，列出新證據與逐段差異；沒有證據時不新增 Champion 或 Whitespace 結論。

## Guardrails

- 不覆寫核准版本而不顯示差異。
- 不從職稱推斷 Authority。
- 不把產品缺口直接等同銷售機會。
- 不自行建立 Planner 工作或寄送 Executive outreach。

## 常見問題

| 問題 | 處理方式 |
|---|---|
| 找到多個 Account Plan | 顯示位置、Owner、版本及日期，要求選擇基準。 |
| 無客戶成果證據 | 保留 `未知`，提出 discovery 問題。 |
| Whitespace 只有內部假設 | 明確標示 hypothesis，不列為 confirmed opportunity。 |
| 儲存被 policy 阻擋 | 報告 blocked operation，不重試。 |
