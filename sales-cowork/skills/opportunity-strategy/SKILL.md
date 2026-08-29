---
name: opportunity-strategy
description: >-
  為一個明確的企業商機、Renewal 或 Negotiation 建立證據導向的買方成果、利害關係人、決策路徑、競爭態勢與推進策略。
  適用於 Opportunity Plan、Deal Map、Mutual Action Plan 與 Next-step sequencing；不適用於 Account-wide planning、Forecast change 或無證據的商業判斷。
metadata:
  author: lwokeray
  version: "3.0.0"
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

### 階段五：建立 Buyer outcome 與 Value path

將商機存在的理由寫成買方結果，而不是我方產品清單。每個 Outcome 包含目前狀態、期望改變、影響、衡量方式、需要在何時發生及來源。若客戶尚未確認，只能標示 Outcome hypothesis。

Value path 必須說明方案如何透過可驗證改變支持 Outcome、需要哪些前提、誰會採用、如何衡量及有哪些 Guardrail。沒有 Baseline 或 Measure 時，不捏造 ROI。

### 階段六：建立 Decision 與 Paper process

分開處理：

- **Decision criteria**：客戶用哪些條件比較選項。
- **Decision process**：誰在何種順序提供意見、核准或否決。
- **Technical／Security validation**：需要完成哪些測試、文件或審查。
- **Commercial process**：預算、報價、折扣、採購及財務核准。
- **Paper process**：Legal、Privacy、合約、供應商建檔與簽署。

只有有來源的步驟才能列為已確認。目標 Close Date 不得替代買方流程。

### 階段七：建立 Stakeholder map

逐人記錄其已知角色、對 Outcome 的影響、立場證據、參與過的決策、未完成承諾、我方關係 Owner 及下一個驗證動作。避免只做組織圖；重點是每個人如何影響買方決策。

### 階段八：分析 Competition 與替代方案

Competition 包含其他供應商、內部自建、延後、維持現況及預算轉移。只記錄客戶實際考量或可信證據。為每個替代方案說明其對客戶吸引力、限制、我們需要驗證的比較條件及不應做出的宣稱。

### 階段九：設計 Mutual Action Plan

MAP 只在客戶願意共同規劃時使用。每個 Milestone 連結買方決策或部署準備，包含雙方 Owner、完成條件、Target date 的來源、依賴與證據。未經買方確認的日期標示 Proposed，不以 Seller Close Date 倒排後當成共同承諾。

## 完整 Strategy 結構

1. Opportunity identity、範圍、Offer、目標事件、Plan Owner 與版本。
2. Buyer outcomes、Impact、Measures 與證據。
3. 現況、方案 Value path、假設與必要前提。
4. Stakeholder map、立場、決策影響與 Coverage gaps。
5. Decision criteria、Decision process、Validation、Commercial 與 Paper process。
6. Competition、替代方案及差異化驗證。
7. 已確認承諾、下一個 Buyer commitment 與 Momentum evidence。
8. 重大風險、Evidence gaps、Trigger 與恢復路徑。
9. Mutual Action Plan 草案。
10. 最多三項優先行動及 Manager／Specialist 支援。

## Negotiation 準備規則

先確認客戶真正優先事項、我方已核准範圍、可交換項目、不可讓步條件、授權 Owner、替代方案及每項交換的對價。不得自行設定 Discount、價格底線、Payment terms、服務承諾或 Legal position。所有條件保持 Draft，交由 Commercial owner 核准。

## 停止條件

- 沒有唯一 Opportunity 或 Buyer problem 時停止建立 Strategy。
- 關鍵內容全是 Seller assumption 時，改產出 Discovery plan。
- Pricing、Legal、Security 或 Delivery owner 尚未決定的條件不可寫成 Offer。
- 要求直接修改 Forecast／Commercial field 時只提供證據與變更預覽。

## 使用者溝通與完成檢查

- 交付完整 Opportunity Strategy 與前三項行動，不以 Framework 欄位摘要代替內容。
- 使用 Sales／Buyer 語言；不顯示內部工具、path、schema、payload 或思考過程。
- Buyer outcome、Stakeholder、Decision、Validation、Commercial、Paper、Competition 與 Momentum 已檢查。
- 已確認、Proposed、Assumption 與 Unknown 清楚分隔。
- Strategy 沒有暗示 Forecast、Price、Terms 或客戶日期已獲核准。

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
