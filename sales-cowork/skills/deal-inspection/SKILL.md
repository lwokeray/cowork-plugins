---
name: deal-inspection
description: >-
  檢查一個明確企業商機或最多五筆指定商機的買方證據、阻礙、資訊缺口、管理支援與下一個安全行動。
  適用於 Deal Health、Stalled Deal、Deal Rescue 與 Manager Inspection；不適用於建立完整 Strategy、修改商業欄位或產生 Forecast commitment。
metadata:
  author: lwokeray
  version: "2.0.0"
---

# 商機健康度檢查

## 概述

以可追溯的 Buyer Evidence 診斷商機，而不是用 Seller activity 代替進展。每筆商機只指出一個最主要阻礙、一個最重要 Evidence gap，以及一個最安全下一步。

## 適用情境

- 商機停滯、需要 Rescue 或 Manager support。
- 檢查 Buyer momentum、Commitment 與 Decision evidence。
- 對最多五筆已選定商機做 bounded inspection。

## 不適用情境

- 建立完整 Opportunity Strategy → `opportunity-strategy`
- 變更 Stage、Probability、Amount、Close Date 或 Forecast。
- 整體 Pipeline／Forecast Review → `forecast-decision-pack`

## 快速開始

1. 解析唯一商機或使用者確認的最多五筆清單。
2. 使用 `ask` 找到核准 register、近期互動、會議、文件與 Planner 工作。
3. 使用 `search_paths`、`get_schema`、`fetch` 驗證 Buyer need、Stakeholder、Decision path、Commercial path 及 Next commitment。
4. 分離 `事實／推論／未知`，找出主要阻礙與缺少證據。
5. 每筆提出一個安全下一步及 Manager handoff；不執行任何欄位變更。

## 核心流程

### 階段一：Identity Gate

- 不混合相同 Account 下不同 Offer、Region 或 Renewal period。
- 沒有核准 register 時，register 欄位標示 `無法取得`，仍可檢查其他證據。
- 批次上限五筆，超過時要求使用者指定優先清單。

### 階段二：Buyer Evidence

逐筆驗證：客戶成果或問題、具證據的 Stakeholder role、Decision process、Commercial／Procurement path、競爭或替代方案、下一個客戶承諾與時間。

郵件數量、會議數量、Internal task completion 與正面語氣都不是 Buyer momentum 的充分證據。

### 階段三：健康度與阻礙

- `證據充分`：主要決策要素有近期且一致的來源。
- `需關注`：有客戶需求，但 Decision／Commercial／Next commitment 有重大缺口。
- `高風險`：接近目標日期卻沒有近期 Buyer commitment，或來源互相矛盾。
- `未知`：無法取得足夠證據，不能合理判斷。

健康度是分析輸出，不得自動寫入 Pipeline。

### 階段四：輸出

| 區域 | 證據導向發現 | 信心 | 來源與日期 |
|---|---|---|---|
| Buyer outcome |  |  |  |
| Stakeholder |  |  |  |
| Decision／Commercial path |  |  |  |
| Next commitment |  |  |  |
| 主要阻礙 |  |  |  |
| Evidence gap |  |  |  |
| 下一步 |  |  |  |
| Manager handoff |  |  |  |

結尾：`檢查完成；未變更任何 Commercial 或 Forecast field。`

## Work IQ 工具規則

- `ask` 用於限定商機的跨工作負載關聯。
- `fetch` 驗證精確資料；先執行 `search_paths`、`get_schema`。
- 此 Skill 不使用 mutation tools。

## 範例

**輸入：**「Contoso 這筆 Deal 為什麼卡住？」

**正確行為：**驗證唯一商機與最近 Buyer evidence；若沒有 Decision Process 證據，就把它列為 gap，不捏造阻礙原因。

## Guardrails

- 不把活動量、語氣或 Seller effort 當 Buyer momentum。
- 不自行修改 Stage、Probability、Amount、Close Date 或 Forecast。
- 不虛構 Champion、Decision maker、Budget 或 Timeline。
- 不把無法存取解讀為沒有風險。

## 常見問題

| 問題 | 處理方式 |
|---|---|
| 找不到核准 register | 繼續唯讀檢查，register 欄位標示 `無法取得`。 |
| 證據互相矛盾 | 並列來源與日期，降低信心。 |
| 批次超過五筆 | 要求縮小清單。 |
| 使用者要求直接改 Stage | 拒絕在此 Skill 執行，提供證據與 Human decision。 |
