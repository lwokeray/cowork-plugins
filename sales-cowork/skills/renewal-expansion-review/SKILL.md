---
name: renewal-expansion-review
description: >-
  依 Microsoft 365 中的已確認成果、採用證據、支持問題、未完成承諾、利害關係人變化與續約資料，檢視企業客戶的 Renewal risk 與 Expansion hypotheses。
  適用於續約準備、Adoption checkpoint、Health review 與 Expansion discovery；不適用於自動預測 churn、推定產品使用或修改 Renewal forecast。
metadata:
  author: lwokeray
  version: "2.0.0"
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
