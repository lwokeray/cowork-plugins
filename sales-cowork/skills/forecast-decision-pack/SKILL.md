---
name: forecast-decision-pack
description: >-
  依核准且可比較的目前與先前 Excel、SharePoint 或 OneDrive 快照，準備限定團隊與期間的 Forecast／Pipeline 決策包。
  適用於 Forecast call、Material movement、Deal risk 與 Manager decision questions；不適用於沒有核准快照、推算未提供數值或直接修改 Forecast。
metadata:
  author: lwokeray
  version: "3.0.0"
---

# Forecast 決策包

## 概述

為 Sales Manager 或 RevOps 準備具 as-of date、來源及 Evidence gap 的 Forecast decision pack。報告值、Buyer evidence、風險與 Human decision 必須分開；活動報告不能替代 Forecast。

## 適用情境

- 準備指定 Team／Period 的 Forecast call。
- 比較目前與先前核准 snapshot 的重大變化。
- 找出高風險 Deal、Evidence gap 與 Manager questions。

## 不適用情境

- 沒有核准 current snapshot 的 Forecast review。
- 沒有 prior snapshot 卻宣稱 movement。
- 自動改變 Forecast category、Amount、Probability、Stage 或 Close Date。

## 快速開始

1. 確認 Team scope、Forecast period、as-of date、current snapshot 與 prior snapshot。
2. 用 `ask` 找核准來源，再以 `search_paths`、`get_schema`、`fetch` 讀取精確 entities。
3. 驗證 approval status、Owner、schema、currency、period 與 snapshot comparability。
4. 比較 material movement，對關鍵項目檢查 Buyer evidence。
5. 產生 Rollup、Risk、Evidence gaps 與具名 Manager decision questions；不執行任何變更。

## 核心流程

### 階段一：Snapshot Gate

- Current snapshot 必須存在、屬於指定 scope／period 且可確認為核准來源。
- Prior snapshot 不存在時，只輸出 current posture，不宣稱 movement。
- 欄位、currency、period 或 aggregation 不一致時停止直接比較，列出差異。

### 階段二：Movement Analysis

只比較來源中已存在的數值及 category，記錄 old／new／delta／source。不得補算缺少的 Probability、Amount 或 Forecast value，除非使用者提供明確公式及授權分析。

### 階段三：Evidence Inspection

對 material items 驗證最近 Buyer outcome、Stakeholder、Decision／Commercial path、Next commitment。Seller activity 與內部 optimism 只能列為 context，不得視為 Buyer evidence。

### 階段四：Decision Pack

| Scope | Period | As-of | Current snapshot | Prior snapshot | Comparability |
|---|---|---|---|---|---|
|  |  |  |  |  |  |

| Deal／Segment | Reported movement | Buyer evidence | Evidence gap | Risk posture | Manager decision question |
|---|---|---|---|---|---|
|  |  |  |  |  |  |

每個 Decision question 包含 Decision owner、需要的 Evidence 與 Due。結尾：`決策包已完成；未變更任何 Forecast 或 Commercial field。`

### 階段五：建立 Rollup

只使用 Snapshot 已存在且定義清楚的欄位計算 Rollup。逐一確認 Currency、Exchange rate、Period、Owner、Category 與 Aggregation 規則。不同 Currency 不可直接相加；若 Snapshot 已提供核准換算值，保留其匯率、日期及來源。

Rollup 至少分開：

- Snapshot reported total／category。
- 與前一核准 Snapshot 的變化。
- 新增、移出、上調、下調、日期移動及金額變更。
- 無法比較、缺少來源或 schema 改變的金額。
- Manager 尚未核准的建議調整。

不得用自行估算值補齊 Gap 後宣稱為正式 Forecast。

### 階段六：Material movement review

依組織既有 materiality 規則挑選 Deal；沒有規則時，顯示影響最大的變化並說明選擇方式，不自行建立正式 threshold。每筆 Movement 要回答：

1. Snapshot 中哪個值從什麼變成什麼。
2. 改變的日期、來源與 Owner。
3. 是否有近期 Buyer evidence 支持。
4. 最大 Evidence gap 或風險。
5. Manager 需要作成什麼決策。

### 階段七：設計 Forecast call

Decision Pack 不是逐筆朗讀 Pipeline。建議順序：

1. Scope、Period、as-of、Snapshot 與 comparability。
2. Rollup 與最大 Movement。
3. 會影響 Commit／Best case／Pipeline 判斷的 Deals。
4. Close date 或 Amount 與 Buyer process 不一致者。
5. 需要 Manager／Specialist／Commercial 支援的決策。
6. 會後 Owner、Due 與下一個核准 Snapshot。

## 完整 Decision Pack

- Executive headline：目前 posture、變化與信心限制。
- Snapshot control：位置、版本、核准狀態、schema、Currency、Period、as-of。
- Rollup：原始報告值及可比較變化。
- Movement table：Old、New、Delta、原因來源及 Buyer evidence。
- Deal evidence：Outcome、Stakeholder、Decision／Commercial path、Next commitment。
- Risks and gaps：高影響、低信心、Stale、無權限或矛盾項目。
- Manager questions：Decision、Options、Recommendation、Owner、Due、No-action impact。
- Follow-up actions：只做建議，不寫回 Forecast。

## 停止條件

- Current Snapshot 不存在或無法確認範圍時，不產出正式 Forecast Pack。
- Prior Snapshot 不可比較時不計算 movement。
- Currency／schema／Period 不一致且無核准轉換規則時停止彙總。
- Buyer evidence 不足時降低信心，不用 Seller commentary 補足。
- 使用者要求更新 Forecast field 時，先列證據與精確變更，由具名 Owner 核准並使用其他流程執行。

## 使用者溝通與完成檢查

- 交付可直接用於 Forecast call 的 Decision Pack，不呈現檢索或計算過程摘要。
- 使用 Sales Manager／RevOps 語言；不顯示內部工具、path、schema、payload 或隱藏思考。
- Snapshot、Currency、Period、as-of 與 comparability 已確認。
- Reported value、movement、Buyer evidence、risk 與 Human decision 清楚分開。
- 無 Prior／不可比較資料時沒有虛構 movement，且未寫回 Forecast。

## Work IQ 工具規則

- `ask` 找到核准 snapshots 與相關背景。
- `fetch` 驗證 snapshots 與 deal evidence；先使用 `search_paths`、`get_schema`。
- 此 Skill 不使用 mutation tools。

## 範例

**輸入：**「準備本季 Forecast Review。」

**正確行為：**先要求 Team、as-of 與核准 current snapshot；沒有 prior snapshot 時明確停止 movement comparison。

## Guardrails

- 不把活動報告當 Forecast。
- 不推算或修改缺少的 Forecast values。
- 不以內部 optimistic note 取代 Buyer evidence。
- 不將分析結果寫回 register。

## 常見問題

| 問題 | 處理方式 |
|---|---|
| 無 prior snapshot | 只輸出 current posture。 |
| Snapshot schema 不同 | 顯示差異，不直接比較。 |
| Approval status 無法確認 | 標示 `未知`，不宣稱正式 Forecast。 |
| Deal evidence 無權限 | 標示 `無法存取`，降低風險判斷信心。 |
