---
name: working-capital-review
description: >-
  分析 Accounts Receivable、Inventory、Accounts Payable 與其他 Operating working capital 的 Aging、Turnover、DSO、DIO、DPO、Cash Conversion Cycle、Concentration 與可執行改善事項。
  適用於 Working-capital review、Collections／Payables／Inventory priority、Allowance／Obsolescence signals 與 Cash release opportunity；不適用於 Invoice approval、Bank reconciliation、實際 Collection／Payment、Credit limit change、Write-off 或 Vendor／Customer master action。
metadata:
  author: lwokeray
  version: "1.0.0"
---

## Overview

將 AR、Inventory、AP 與 Operating balances 連結到 Revenue、COGS／Purchases、Due dates、Disputes、Customer／Vendor／SKU concentration 與 Cash impact。所有 ratio 都要使用一致 Scope、Period、Currency 與適當 Average balance；Aging 以 Policy 定義的 Due date／Receipt date 計算，不用報表產生日期任意替代。

異常只視為 Investigation signal。AR 增長快於 Revenue、Inventory 堆積或 AP 延長可能有 Seasonality、Business model、Acquisition、Supply constraint、Dispute、Data issue 等合理解釋，不直接推定操縱或財務危機。

## When to Use

- AR aging、Overdue、Disputed、Unapplied cash、Customer concentration。
- AP aging、Due／Past due、Vendor concentration、Early-payment discount、Payment timing。
- Inventory aging、Slow-moving、Excess、Obsolete、Stockout／Service-level trade-off。
- DSO、DIO、DPO、Cash conversion cycle、Net working capital trend。
- Working-capital Forecast／Target variance 與 Cash release opportunities。
- Allowance for credit loss、Obsolescence reserve 或 Vendor risk 的初步 Signal review。
- 建立 Collections、Dispute、Inventory、Payables Action register。

## When NOT to Use

- 單張 Invoice／Employee expense 合規審查 → `invoice-expense-review`
- Bank／GL／Subledger reconciliation → `account-reconciliation`
- 13-week Cash forecast → `cash-liquidity-forecast`
- 直接聯絡 Customer／Vendor、改 Credit limit、Issue credit note、Write off、Release payment、改 Payment terms。
- 用通用 Ratio threshold 取代 Industry／Policy context 或正式 Accounting reserve assessment。

## Quick Start

```text
User：「分析六月 Working capital，找出最能改善現金的項目。」
1. 確認 Entity、Period、Currency、AR／Inventory／AP scope、Policy、Targets 與 Comparison。
2. Tie AR／AP aging、Inventory detail 到 GL control accounts 與 Financial statements。
3. 驗證 Due dates、Disputes、Unapplied cash、SKU status、Purchases／COGS definitions。
4. 計算 DSO／DIO／DPO／CCC、Aging migration、Concentration 與 YoY／Forecast variance。
5. 將 Opportunity 分解為 Collection、Dispute、Inventory、Terms／Timing，量化 Cash impact 與限制。
6. 交付 Priority queue、Owner、Due、Evidence、Risk 與 Action；不直接執行外部動作。
```

## Core Instructions

### 1. Establish Scope and Definitions

確認：

- Entity、Business unit、Customer／Vendor／SKU scope、Currency、Period end。
- Gross／Net AR、Allowance、Factored／Securitized receivables、Intercompany exclusion。
- Inventory categories、Ownership、Consignment、In-transit、Reserve policy。
- AP／Purchases／COGS denominator、Intercompany exclusion、Payment-term basis。
- Due-date／Aging policy、Materiality、Targets、Comparison、Owner、Status。

不要混用 Credit revenue、Total revenue、Purchases 與 COGS。若 Purchases 不可得而使用 COGS 計算 DPO，必須明示 Limitation。

### 2. Source and Tie-out

- AR aging total tie to AR GL control account；Allowance 與 Gross AR 分開。
- Inventory subledger／valuation report tie to Inventory GL by category／location。
- AP aging tie to AP GL control account；Debit balances、Unapplied payment、GRNI 分開。
- Revenue、COGS／Purchases 與 Balance amounts 使用相同 Entity／Period／Currency。
- Validate report filters、As-of、Open／Closed status、Duplicate、Missing rows、FX rate。
- Prior-period ending／aging migration 需用 stable Customer／Invoice／SKU／Vendor／Document IDs。

無法 Tie 的資料標示 `Source incomplete`，Ratio 與 Opportunity 只能作 Limited analysis。

### 3. Accounts Receivable Review

分類：Current、Past due、Disputed、Promise-to-pay、Unapplied cash、Credit balance、Related party、Factored、Legal／Collection、Potential write-off。Age 應由 Contractual due date 計算；Invoice age 可另列，不混為 Overdue age。

分析：

- Aging bucket、Migration、Roll rate、Collection trend。
- Top customer／invoice concentration。
- AR growth vs Revenue growth。
- DSO by Segment／Customer／Region，若 definitions 可比。
- Payment behavior、Broken promise、Recurring dispute、Billing／Delivery／Tax issue。
- Allowance signal：Age、Dispute、Customer condition、Historical loss、Subsequent collection；只整理 Evidence，不自行定 Reserve。

Collections priority 同時考慮 Amount、Age、Dispute status、Customer risk、Promise evidence、Commercial sensitivity、Owner；不是只按最大 Amount 排序。

### 4. Inventory Review

分類 Raw material、WIP、Finished goods、Spare、In-transit、Consignment、Reserved／Blocked、Excess／Obsolete。分析：

- Aging、Last movement、Demand／Forecast coverage、Turns、Days on hand。
- Inventory growth vs Revenue／COGS。
- Slow-moving、No-demand、Expired／End-of-life、Quality hold。
- Excess vs Safety stock、Service-level／Stockout risk。
- Purchase commitment、Lead time、MOQ、Supplier／Location concentration。
- Reserve／Write-down signal與 Subsequent sale／usage evidence。

Cash release 不可假設 Inventory 可立即變現；顯示 Demand、Cancellation、Return、Discount、Disposal、Lead time 與 Service-risk constraints。

### 5. Accounts Payable Review

分類 Current、Due、Past due、Disputed、Payment scheduled、Debit balance、Duplicate risk、Critical vendor、Tax／statutory、Intercompany。分析：

- Payment term、Actual days paid、DPO、Past-due trend。
- Vendor／Category concentration、Supply／Service criticality。
- Early-payment discount vs Liquidity cost。
- Duplicate／Credit memo／Unapplied payment opportunities。
- Term leakage、Premature payment、Late fee、Supplier hold risk。

延後付款只能列 Scenario／Recommendation，需考慮 Contract、Supplier relationship、Criticality、Discount、Late fee、Legal／Ethical constraints；不得直接改 Due date 或 Payment run。

### 6. Core Metrics

使用 Average balance（若 Opening／Closing available）及正確 Days：

```text
DSO = Average accounts receivable / Credit revenue × Days in period
DIO = Average inventory / Cost of goods sold × Days in period
DPO = Average accounts payable / Purchases or disclosed cost base × Days in period
Cash conversion cycle = DSO + DIO - DPO
Net operating working capital = Operating current assets - Operating current liabilities
AR turnover = Credit revenue / Average AR
Inventory turnover = COGS / Average inventory
AP turnover = Purchases / Average AP
```

Seasonal business優先使用 Monthly average 或同季比較。Denominator＝0／負數或 Scope 不一致時顯示 `NM`。Ratio improvement 必須同時檢查 Revenue／Margin／Service／Vendor risk，避免單純追求較低 Working capital。

### 7. Driver and Cash Impact

將 Actual vs Target／Prior 變化拆為：

- Revenue／COGS／Purchases scale。
- Mix、Seasonality、FX、Acquisition／Disposal。
- Collection／Billing／Dispute／Credit policy。
- Demand／Procurement／Production／Logistics／Reserve。
- Payment terms／Timing／Vendor mix。
- Accounting reclass、Cut-off、Data quality。

量化 Cash opportunity 需要明確 Baseline、Target／Action、Timing、Feasibility、One-time／Recurring、Risk 與依賴。不可將全部 AR／Inventory／AP balance 當可釋放 Cash。

### 8. Action Register

| Priority | Area | Item / Cohort | Cash impact | Evidence | Constraint / Risk | Owner | Due | Completion criteria | Status |
|---|---|---|---:|---|---|---|---|---|---|

Action 必須具體：例如「Finance Ops 於 8/15 前解決 12 筆已交付但缺 PO reference 的 Billing disputes，完成標準為 Customer accepted invoice 或正式 dispute disposition」，而非「加強催收」。

### 9. Stop Conditions

- AR／AP／Inventory 無法 Tie to GL 或 Scope／As-of 不一致。
- Due date、Revenue／COGS／Purchases definitions、Currency 或 Average balance 不可用。
- Material disputes／Concentration／Reserve signals 缺少 Evidence。
- Cash opportunity 只能由不具可行性的 Gross balance 推估。
- 使用者要求 Customer／Vendor contact、Credit change、Write-off、Payment／Purchase action，沒有精確核准與支援 operation。

### 10. Output Contract

1. Scope、Definitions、As-of、Currency、Sources、Tie-out status。
2. KPI：NWC、DSO、DIO、DPO、CCC 與 Comparison。
3. AR／Inventory／AP Aging／Concentration／Trend。
4. Driver bridge 與 Cash impact range。
5. Priority Action register。
6. Risks、Trade-offs、Reserve／Control signals。
7. Source／Assumption register、Checks、Open questions。

### 11. User Communication and Completion Check

- 交付 Working-capital decision artifact，不以 Ratio 清單或製作摘要代替分析。
- Definitions、Denominators、Average balance、Days、Scope 與 Seasonality 清楚。
- AR／AP／Inventory tie to GL 或明確標示 Limited／Incomplete。
- Opportunity 有可行 Baseline、Cash impact、Timing、Constraint、Owner、Completion criteria。
- Signal 與正式 Reserve／Write-off／Credit／Payment decision 清楚分離。
- Sensitive Customer／Vendor／Bank／Employee details 依最小必要原則呈現。

### Available MCP Tools

| Tool | Purpose |
|---|---|
| `ask` | 跨 Excel、SharePoint、OneDrive、Email、Teams、Meetings 找 Aging、Inventory、Dispute、Promise、Terms 與 Owner context。 |
| `search_paths` | 查詢 Files、Workbook tables、Lists、Tasks 或支援 resources。 |
| `get_schema` | 取得精確資料與 Action artifact schema。 |
| `fetch` | 驗證 Customer／Vendor／SKU／Document IDs、Amounts、Dates、Versions、Evidence。 |
| `call_function` | 只用已支援搜尋／計算；Ratio／Aging／Opportunity formulas 必須可重現。 |
| `create_entity` / `update_entity` | 經 Preview 與核准後建立／更新 Action tracker，不改來源交易。 |
| `do_action` / `delete_entity` | 不用於 Collection contact、Credit、Write-off、Payment、PO 或 Master-data action。 |

## Examples

### AR cash opportunity

```text
User：「找出本月最需要追的應收帳款。」
1. Tie AR aging to GL，驗證 Due date、Dispute、Unapplied cash、Promise-to-pay。
2. 依 Amount、Age、Customer risk、Dispute、Commercial sensitivity 排序。
3. 區分可直接 Collection、需解 Billing dispute、需 Apply cash、需 Credit／Legal review。
4. 量化合理 Collection window 與 Cash impact，不把全部 Overdue 當本月可收。
5. 交付 Queue 與 Owner／Action；不直接聯絡客戶。
```

## Guardrails

- 不用通用 Ratio threshold 直接判斷危機、舞弊、Reserve 或 Write-off。
- 不將 Gross balance 當可立即釋放 Cash。
- 不用延後合法／必要 Payment 作為無風險改善。
- 不自行聯絡 Customer／Vendor、改 Terms／Credit、Write off、Release payment。
- 不混用 Revenue、Purchases、COGS 或不同 Period／Currency／Scope。
- 不暴露不必要 Customer／Vendor 個資與商業敏感資訊。

## Common Issues

| Issue | Cause | Fix |
|---|---|---|
| DSO 與 Management report 不同 | Gross／net、Credit revenue、Average balance 定義不同 | 對齊 Definitions 並建立 Bridge。 |
| AP aging 與 GL 不 Tie | Manual JE、Unposted batch、Debit balance | 先 Reconcile，再做 DPO／Opportunity。 |
| Inventory days 異常 | Seasonality、Unit／Currency、Average balance 不一致 | 使用同季與 Monthly average。 |
| Overdue 全被列可收 | 忽略 Dispute／Credit／Legal status | 分群並估可行 Timing。 |
| Cash impact 重複計算 | 同 Item 同時算入 DSO 與 Dispute action | 用 stable IDs 去重並建立 Action ownership。 |
| 更新被 Policy 阻擋 | Tenant governance | 保留分析／Preview，標示 `Policy denied`。 |
