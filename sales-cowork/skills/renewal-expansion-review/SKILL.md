---
name: renewal-expansion-review
description: >-
  依 Microsoft 365 中的已確認成果、採用證據、支持問題、未完成承諾、利害關係人變化與續約資料，檢視企業客戶的 Renewal risk 與 Expansion hypotheses。
  適用於續約準備、Adoption checkpoint、Health review 與 Expansion discovery；不適用於自動預測 churn、推定產品使用或修改 Renewal forecast。
metadata:
  author: lwokeray
  version: "3.0.0"
---

# 續約與擴展檢視

## 概述

把 Post-sale evidence 轉成可驗證的 Renewal／Expansion view。Customer outcome、Adoption evidence、Support issue、Commitment、Risk signal 與 Expansion hypothesis 分開；沒有可取得的 usage evidence 時不得推定採用程度。

## 適用情境

- 準備 Renewal review 或 Customer Success checkpoint。
- 盤點已實現 Outcome、未完成承諾及 Stakeholder change。
- 找出 Renewal risk、Adoption gap 與可驗證 Expansion hypothesis。
- 建立下一個客戶確認問題與內部行動。

## 不適用情境

- 根據付款失敗或 Cancel flow 做 SaaS churn automation。
- 自動判定 Churn、Expansion intent 或 Renewal probability。
- 修改 Forecast、Contract、Pricing 或 Renewal register。

## 快速開始

1. 確認 Account、Renewal period、review as-of date 與核准 sources。
2. 用 `ask` 彙整 outcome、adoption、meetings、messages、files、Planner、issues 與 stakeholders。
3. 用 `search_paths`、`get_schema`、`fetch` 驗證重大 evidence、version 與 timestamp。
4. 分開 Customer fact、Internal record、Inference 與 Unknown。
5. 產出 Health evidence、Risk、Expansion hypotheses、Validation questions 與最多三項 action；不直接寫入。

## 核心流程

### 階段一：Review Basis

- 確認 Renewal date／period、contract／proposal evidence、Owner 及 as-of date。
- 沒有 Renewal source 時不創造日期或 contract value。
- 不把 Support ticket 數量單獨當成 churn risk，也不把 Meeting frequency 當成 adoption。

### 階段二：Outcome 與 Adoption Evidence

整理 Customer-confirmed outcome、Delivered milestone、Training／Workshop、可驗證 usage artifact、Open issue、Unresolved commitment 與 stakeholder change。來源是 internal record 時需明確標示，不冒充 customer confirmation。

### 階段三：Risk 與 Expansion

- Renewal risk 必須連結具體 evidence、timing 與 impact。
- Expansion 只能先列為 hypothesis，直到客戶明確確認 outcome、scope 與 interest。
- Product gap 或未購買產品不能直接視為 expansion opportunity。
- 每項 hypothesis 都要附一個 validation question。

### 階段四：輸出

| 領域 | 已確認證據 | 來源類型 | Risk／Opportunity hypothesis | 驗證問題 | Owner | Due |
|---|---|---|---|---|---|---|
| Outcome |  | Customer／Internal |  |  |  |  |
| Adoption |  | Customer／Internal |  |  |  |  |
| Commitments |  | Customer／Internal |  |  |  |  |
| Stakeholders |  | Customer／Internal |  |  |  |  |

最後列出 `Renewal readiness`、`Top risks`、`Expansion hypotheses`、`Unknowns` 與 `Next checkpoint`。

### 階段五：建立 Outcome realization view

對成交或最近一次共同計畫中的 Outcome，逐項比較原始承諾、Delivery evidence、客戶確認、目前 Measure 與未實現 Gap。區分：

- Delivered：交付物已完成。
- Adopted：目標使用者實際使用，有可靠證據。
- Outcome realized：客戶結果或行為已改善。
- Unknown：沒有可驗證資料。

交付完成不等於採用，採用不等於 Business outcome。沒有 Baseline／Measure 時，不推算 Value realization。

### 階段六：建立 Renewal risk model

不建立黑箱分數。依證據描述下列面向：

- 客戶成果是否實現或仍具價值。
- 採用範圍、活躍角色與關鍵流程；僅使用可取得證據。
- 未完成承諾、Support／Quality issue 及其實際影響。
- Stakeholder、Sponsor、Owner 或組織變化。
- Contract、Budget、Procurement 與 Renewal timing。
- Competitive／替代方案或策略改變的客戶訊號。
- 共同下一步與客戶參與程度。

每個 Risk 都包含來源、觀察日期、可能影響、Trigger、Owner、最小驗證問題及緩解行動。單一負面訊號不等於 Churn 結論。

### 階段七：形成 Expansion hypothesis

Expansion 必須源於已確認的下一個客戶 Outcome、使用範圍增加、未解決流程、組織需求或新事件。每項包含：

1. 客戶問題／成果證據。
2. 目前服務與已實現 Value。
3. 新範圍或能力假設。
4. 受影響使用者與 Stakeholder。
5. 客戶可能的替代方案。
6. 驗證問題與最小 Discovery action。
7. 若被確認，應建立的獨立 Opportunity 邊界。

未購買某產品、Account 規模大或 Renewal approaching 都不是 Expansion evidence。

### 階段八：準備 Renewal conversation

建議議程依序為：共同回顧原始 Outcomes、呈現已確認 Value、正面處理未完成承諾、確認下一期優先事項、了解決策與 Procurement path、驗證 Expansion hypothesis、確認 Owner 與下一步。不要把 Review 變成未經同意的 Upsell pitch。

## 完整 Review 產出

1. Account、Contract／Renewal period、Owner、as-of 與資料覆蓋。
2. Renewal readiness headline 與信心。
3. Outcome realization：Delivered、Adopted、Realized、Unknown。
4. Adoption、Support、Commitment、Stakeholder 與 Contract evidence。
5. Top risks：Evidence、Impact、Trigger、Owner、Mitigation。
6. Expansion hypotheses：Outcome、Evidence、Validation、Boundary。
7. Unknowns、Conflicts 與需要取得的資料。
8. Renewal conversation agenda 與客戶確認問題。
9. 最多三項內部行動與下一個 Checkpoint。

## 停止條件

- Renewal period／contract source 不唯一時停止 readiness conclusion。
- 無 usage evidence 時採用保持 Unknown，不以 meeting／ticket volume 代替。
- 客戶 Outcome 未被確認時不宣稱 Value realized。
- Expansion 未被客戶驗證時不建立 Forecast commitment。
- Pricing、Contract、Renewal register、Planner 或 Outreach 變更需轉交相應 Skill 並重新核准。

## 使用者溝通與完成檢查

- 交付完整 Renewal／Expansion Review，不以活動與 Support 數量摘要取代判斷。
- 使用 Customer Success／Sales leadership 語言；不顯示工具、schema、payload 或隱藏思考。
- Delivered、Adopted、Outcome realized 與 Unknown 已分開。
- 每個 Renewal risk 與 Expansion hypothesis 有證據、驗證問題、Owner 與下一步。
- 未確認的 Expansion 沒有被寫成 Opportunity、Forecast 或客戶承諾。

## Work IQ 工具規則

- `ask` 用於 cross-workload review；`fetch` 驗證精確 evidence。
- 精確 entity 先經 `search_paths`、`get_schema`。
- 此 Skill 預設唯讀；register／Planner／communication 變更轉交相應 Skill 並重新取得核准。

## 範例

**輸入：**「幫我準備 Contoso 下季續約檢視，看看有沒有擴展機會。」

**正確行為：**先確認 Renewal period 與來源，將 usage、commitment、risk 與 expansion hypothesis 分開，每個機會都附驗證問題。

## Guardrails

- 不自動判定 Churn、Health score 或 Expansion intent。
- 不把 Support volume、Meeting frequency 或 product gap 單獨當結論。
- 不修改 Renewal forecast、Contract 或 Pricing。
- 不寄送客戶訊息或建立工作。

## 常見問題

| 問題 | 處理方式 |
|---|---|
| 無 usage evidence | 標示 `未知`，不推定 Adoption。 |
| Renewal date 衝突 | 並列來源與版本，要求確認 source of truth。 |
| Risk 只有內部感受 | 標示 inference，提出客戶 validation question。 |
| 使用者要求直接更新 register | 先建立 field-level preview 並轉交適當核准流程。 |
