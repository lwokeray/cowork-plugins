---
name: opportunity-strategy
description: >-
  為一個明確的企業商機、Renewal 或 Negotiation 建立證據導向的買方成果、利害關係人、決策路徑、競爭態勢與推進策略。
  適用於 Opportunity Plan、Deal Map、Mutual Action Plan 與 Next-step sequencing；不適用於 Account-wide planning、Forecast change 或無證據的商業判斷。
metadata:
  author: lwokeray
  version: "2.0.0"
---

# 商機推進策略

## 概述

針對一個命名商機建立 Practical Deal Map。以客戶證據為主，區分 Account-level 背景與 Opportunity-specific 證據，產出可驗證的決策路徑、風險、Sequencing 及最多三項優先行動。

## 適用情境

- 建立 Opportunity Plan 或 Deal Strategy。
- 盤點 Stakeholder、Decision Process、Competition 與 Commercial path。
- 準備 Negotiation posture 或 Mutual Action Plan 草案。
- 為 Renewal 或 Expansion 建立單一商機推進路徑。

## 不適用情境

- 整體 Account Plan → `account-plan`
- 只診斷商機目前健康度 → `deal-inspection`
- 變更 Stage、Probability、Close Date 或 Forecast。
- Proposal 內容製作 → `proposal-preparation`

## 快速開始

1. 確認唯一 Account、Opportunity、Offer、目標日期及 Strategy audience。
2. 用 `ask` 取得買方成果、利害關係人、互動、objection、競爭、商務與工作脈絡。
3. 用 `search_paths`、`get_schema`、`fetch` 驗證重大 evidence。
4. 建立 Outcome、Stakeholder、Decision、Competition、Commercial、Risk 與 Action map。
5. 任何 artifact 儲存先顯示位置與差異；Planner execution 轉交 `sales-task-planning`。

## 核心流程

### 階段一：Opportunity Identity

- 不混合相同 Account 下的不同商機、產品或 Renewal period。
- 找不到唯一商機 artifact 時，先列候選供使用者確認。
- 使用者提供的 Deal label 不代表內容已被客戶確認。

### 階段二：Evidence Map

驗證：買方業務成果、問題、衡量方式、利害關係人、決策與採購流程、競爭或替代方案、商務與技術依賴、下一個明確承諾。

Champion、Budget、Authority、Decision Criteria、Decision Process、Paper Process、Pain、Competition 等欄位沒有直接證據時標示 `未知`，不得為了填滿 framework 而推測。

### 階段三：Strategy

- 先處理最可能阻塞買方決策的 Evidence gap。
- 每個行動必須對應一個 Outcome 或 Gap。
- Negotiation posture 只描述準備方向，不代表 Pricing、Discount 或 Terms 已獲核准。
- Mutual Action Plan 的 Owner 與日期必須可追溯；未確認者標示 Proposed。

### 階段四：輸出

| 區域 | 已確認證據 | 推論 | 未知／風險 | 驗證方式 |
|---|---|---|---|---|
| Buyer outcome |  |  |  |  |
| Stakeholders |  |  |  |  |
| Decision path |  |  |  |  |
| Competition |  |  |  |  |
| Commercial path |  |  |  |  |

| 優先行動 | 目的 | Owner | Due | 依賴 | 成功標準 |
|---|---|---|---|---|---|
|  |  |  |  |  |  |

結尾：`Strategy draft ready—未變更任何 Forecast 或 Commercial field。`

## Work IQ 工具規則

- `ask` 用於 Opportunity cross-workload reasoning。
- `fetch` 驗證精確 evidence；先執行 `search_paths`、`get_schema`。
- 儲存 artifact 時才可在核准後使用 `create_entity`、`update_entity`。
- 不使用 `do_action` 對外承諾或談判。

## 範例

**輸入：**「幫我規劃 Contoso Security 專案怎麼推進。」

**正確行為：**先解析唯一商機，以 buyer evidence 建立 decision map，未知欄位保留空缺，提出最多三項可驗證行動。

## Guardrails

- 不把 Seller activity 當作 Buyer momentum。
- 不自行變更 Stage、Probability、Amount、Close Date 或 Forecast。
- 不代表 Pricing、Legal、Security 或 Procurement Owner 接受條件。
- 不因 framework 欄位存在就捏造答案。

## 常見問題

| 問題 | 處理方式 |
|---|---|
| 同 Account 有多個商機 | 先選定 Opportunity。 |
| 缺少決策流程證據 | 標示 `未知`，建立 discovery question。 |
| 商務條件尚未核准 | 標示 Human decision，不納入已確認策略。 |
| 要求直接更新 Pipeline | 產生變更預覽，轉交適當核准流程。 |
