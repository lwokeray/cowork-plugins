---
name: deal-inspection
description: >-
  檢查一個明確企業商機或最多五筆指定商機的買方證據、阻礙、資訊缺口、管理支援與下一個安全行動。
  適用於 Deal Health、Stalled Deal、Deal Rescue 與 Manager Inspection；不適用於建立完整 Strategy、修改商業欄位或產生 Forecast commitment。
license: MIT
metadata:
  author: lwokeray
  version: "3.1.0"
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

### 階段五：檢查 Momentum 的真實性

Buyer momentum 至少需要一項近期、可驗證的買方行動，例如：提供所需資料、引薦必要 Stakeholder、確認評估標準、接受共同下一步、啟動 Security／Procurement 流程或完成具體決議。Seller 發信、內部會議、Demo 準備或 Proposal 完成不能單獨證明 Momentum。

對每項 Momentum evidence 記錄：買方行為、日期、與 Decision path 的關係、下一個已確認承諾及若未發生的影響。

### 階段六：辨識最主要阻礙

從下列類型中選一個對目前決策最有影響者，且必須有證據：

- Buyer outcome／Impact 尚未被確認。
- 關鍵 Stakeholder 缺席或角色未知。
- Decision criteria／process 不明。
- Technical、Security 或 Compliance validation 未開始或受阻。
- Budget、Commercial、Procurement 或 Paper process 缺乏證據。
- Competition／Status quo 對買方更有吸引力。
- 雙方沒有下一個具名 Commitment。
- Target date 與買方流程不一致。

若無法判斷，主要阻礙就是「證據不足」，並指出最重要的缺口，不可從沉默推斷客戶拒絕。

### 階段七：提出最安全的下一步

下一步只解決主要阻礙或取得關鍵證據。包含對象、目的、具體內容、Owner、建議期限依據及成功標準。避免「追蹤客戶」「安排會議」等沒有驗證目的的活動。

Manager handoff 只有在需要權限、資源、跨部門升級、Executive alignment 或商務決策時提出，並說明 Manager 要做的具體事情。

## Deal Inspection 完整產出

1. Deal identity、最後可靠更新、目標事件及證據可用性。
2. 一句健康判斷與信心。
3. Buyer outcome、Impact 與 Measure 的證據。
4. Stakeholder、Decision、Validation、Commercial／Paper path。
5. Buyer momentum 與下一個 Commitment。
6. Competition／Status quo 訊號。
7. 最主要阻礙及為何現在重要。
8. 最重要 Evidence gap。
9. 一個最安全下一步。
10. Manager support 與會改變健康判斷的證據。

批次檢查時先列每筆一句判斷，再逐筆提供完整內容；不得使用沒有定義的總分或將不同商機平均。

## Closed deal 與 Win／Loss learning

只有存在正式 Won、Lost、No decision 或 Withdrawn evidence 時，才進行結果學習。尚未正式結案的商機仍使用一般 Deal Inspection，不能從沉默或 Stage 推定結果。

Win／Loss Learning Pack 必須分開記錄：

1. 正式 Outcome、日期、來源及 Decision owner。
2. 客戶明確回饋與可驗證的決策證據。
3. 我方推論、反證及信心，不把推論寫成客戶理由。
4. Product、Solution、Commercial、Relationship、Process、Timing 與 Competition 的影響。
5. Proposal、Demo、Security review、Procurement 與 Delivery assumption 的具體差異。
6. 可重複做法、應停止做法及需要實驗驗證的假設。
7. 具 Owner、Due、Success evidence 與適用範圍的 Learning backlog。

不得用單一個案建立普遍市場結論，也不得修改進行中的 Proposal 或將個人歸責寫成學習。涉及產品、行銷、交付或財務的項目只建立具證據的 Handoff，由對應職能決定是否採納。

## 停止條件

- 超過五筆時先要求限定清單，不做表面掃描。
- 沒有近期 Buyer evidence 時使用未知或高風險所需條件，不宣稱 Lost。
- Target date、Stage 或 Probability 與證據不符時提出差異，不自行改欄位。
- 發現商機需要完整重建策略時轉交 `opportunity-strategy`。

## 使用者溝通與完成檢查

- 直接回答 Deal 卡在哪裡、證據缺口與最安全下一步，不先做活動摘要。
- 使用 Manager 可直接判斷的語言；不顯示 tool、path、schema、payload 或隱藏思考。
- 健康判斷只基於近期 Buyer evidence，且信心與最後可靠日期清楚。
- 每筆只有一個主要阻礙、一個核心 Gap 與一個具體下一步。
- 不把 Inspection 結論寫成已修改的 Stage、Probability 或 Forecast。

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
