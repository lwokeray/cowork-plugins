---
name: cash-liquidity-forecast
description: 依 Bank／Cash balances、AR collections、AP due dates、Payroll、Tax、Debt、Capex 與核准 Funding assumptions 建立 13-week 或其他短期 Cash and Liquidity forecast。 適用於 Cash visibility、Liquidity headroom、Funding need、Downside scenario、Bank concentration 與 Cash-risk actions；不適用於實際 Transfer、Payment release、Debt draw、Hedge execution、Bank-detail change 或未經授權的 Treasury action。
metadata:
  author: lwokeray
  version: 1.0.1
license: MIT
---

## Overview

建立可追蹤到具體 Cash source／use 的 Direct cash forecast，區分 Book cash、Bank cash、Available cash、Restricted cash、Minimum cash 與 Trapped cash。每筆重大流入／流出連結 AR aging、AP due、Payroll、Tax calendar、Debt schedule、Capex plan、Contract 或明確 Assumption；Forecast 不可只由 P&L 加減百分比推得。

本 Skill 只做 Treasury analysis、Scenario 與 Action recommendation。任何 Transfer、Payment、Borrowing、Repayment、Investment、FX／Hedge 或 Bank master change 都必須由具權限人員透過核准系統執行。

## When to Use

- 13-week、Daily／Weekly、Monthly cash forecast。
- Cash position、Available liquidity、Minimum-cash／Restricted-cash analysis。
- AR collection、AP payment、Payroll、Tax、Debt service、Capex cash timing。
- Base／Downside／Action scenario 與 Liquidity runway。
- Bank、Entity、Currency、Customer 或 Maturity concentration。
- Forecast vs Actual cash accuracy、Miss／delay root cause。
- 準備 Treasury／CFO liquidity update。

## When NOT to Use

- 長期 Integrated Budget／Forecast → `budget-forecast-planning`
- DSO／DIO／DPO 與 Cash conversion cycle 分析 → `working-capital-review`
- Bank reconciliation → `account-reconciliation`
- 實際移轉資金、Payment release、Debt draw／repayment、Investment purchase、Hedge trade。
- 根據 Bank credential、Account number 或敏感資料執行未授權動作。

## Quick Start

```text
User：「做未來 13 週 Cash forecast，找出可能低於最低現金的週。」
1. 確認 Entity、Bank accounts、Currencies、Week ending、Opening cash、Minimum cash 與 Forecast as-of。
2. 驗證 Bank／Book cash、Restricted cash、AR collections、AP due、Payroll、Tax、Debt、Capex 與 Funding sources。
3. 以週為單位建立 Direct cash roll-forward，分 Committed、Scheduled、Forecast、Discretionary。
4. 產生 Base／Downside／Action cases，計算 Headroom 與 First breach week。
5. 驗證 Beginning＋Inflows－Outflows＝Ending，並比較 Prior forecast／Actual。
6. 交付 Liquidity table、Drivers、Risks、Actions 與 Evidence；不執行 Treasury transactions。
```

## Core Instructions

### 1. Establish Treasury Scope

確認：

- Entity、Bank、Account、Currency、Functional／Reporting currency。
- Forecast start、Week-ending convention、Horizon、As-of、Time zone。
- Opening bank／book／available cash、Restricted／trapped cash、Minimum cash。
- Facilities、Debt maturities、Covenants、Interest／FX assumptions。
- Materiality、Scenario、Audience、Version、Owner、Review status。

Bank account number 在輸出中 Mask，只保留可識別 Alias／末四碼。不同 Entity／Currency 不直接 Net，除非有 Legal／Operational ability、Approved policy 與 FX bridge。

### 2. Validate Opening Cash

- Bank statement／portal extract 與 GL cash As-of 對齊。
- 未完成 Bank reconciliation 的差異分 Bank timing、Book adjustment、Unexplained。
- Available cash 扣除 Restricted、Blocked、Minimum、Sweep／Collateral constraints。
- In-transit transfer 不在兩個 Account 重複計入。
- Foreign-currency cash 依核准 Rate source／date 轉 Reporting currency，保留原 Currency。

Opening cash 不可靠時 Forecast status `Opening cash unverified`，仍可建立 Scenario，但不能宣稱 Liquidity precise。

### 3. Build Cash Inflows

優先使用：

- AR invoice／aging、Due date、Customer payment pattern、Promise-to-pay、Dispute status。
- Contractual milestone、Subscription collection、Cash sales、Refund／rebate timing。
- Interest、Tax refund、Asset sale、Grant、Intercompany settlement。
- Committed financing only when Facility、Availability、Conditions、Approval 支持。

每筆或每類 Inflow 標示 `Committed / Scheduled / Forecast / Contingent`。不要以 Invoice due date 當成 Guaranteed collection；依 Customer evidence、Historical behavior 與 Dispute 調整 Timing，並保留 Assumption。

### 4. Build Cash Outflows

- AP due、Approved payment run、Vendor criticality、Dispute、Payment term。
- Payroll、Bonus、Benefit、Tax／Statutory payment calendar。
- Rent、Software、Insurance、Interest、Debt principal、Lease payment。
- Capex project schedule、Deposit、Milestone、Retention。
- Refund、Legal settlement、Dividend、Intercompany funding、Other approved commitments。

區分 Legally committed、Operationally committed、Scheduled、Discretionary。Payment deferral／Acceleration 僅作 Scenario 或 Recommendation，不改 Due date 或實際付款狀態。

### 5. Direct Cash Roll-forward

```text
Beginning available cash
+ Customer collections
+ Other operating inflows
+ Financing / intercompany inflows (supported)
- Payroll and benefits
- Vendor payments
- Tax and statutory payments
- Rent, debt service, capex and other outflows
= Ending available cash
- Minimum / required cash
= Liquidity headroom
```

每週 `Beginning = Prior-week ending`。所有 Categories 加總到 Net cash movement；跨 Entity／Currency movement 顯示 Both sides、Timing、FX 與 Transfer feasibility。

### 6. Facilities, Debt, and Covenants

- Facility limit、Drawn、Available、Maturity、Currency、Rate、Collateral、Conditions precedent。
- Debt schedule：Beginning、Draw、Repayment、PIK／Cash interest、Fees、Ending。
- Covenant：Definition、Test date、Threshold、Forecast value、Headroom、Source。
- 未核准／未滿足條件的 Facility 不列 Available liquidity，只列 Contingent。
- Covenant calculation 若缺 Definition，不使用通用公式替代。

### 7. Scenarios

Base、Downside、Action cases 改變具體 Drivers：

- Collection delay／Default、Revenue miss。
- Vendor／Payroll／Tax timing。
- Cost／FX／Interest shock。
- Capex delay、Spend reduction、Inventory action。
- Facility draw、Intercompany funding、Equity／asset sale only as supported options。

顯示 First minimum-cash breach week、Peak funding need、Minimum headroom、Ending liquidity。Action case 不等於 Approved action；保留 Owner、Decision deadline、Lead time 與 Prerequisites。

### 8. Forecast Accuracy

按週比較 Forecast vs Actual：

- Collections timing／amount。
- AP timing／amount。
- Payroll／Tax／Capex／Debt。
- New／missed items、Classification、FX。

計算 Absolute error、Bias、Timing shift 與 Category-level accuracy。Actual＝0 時不顯示誤導 %。將 Recurring miss 轉成 Assumption improvement，不靜默改歷史 Forecast。

### 9. Liquidity Risk Prioritization

優先標示：

- Minimum cash breach、Negative available cash。
- Facility／Covenant headroom 接近 Threshold。
- Single customer collection、Bank、Currency、Maturity concentration。
- Material Contingent inflow 被當作 Base。
- Stale Bank balance、Unreconciled cash、Duplicate transfer。
- Payment／Tax／Payroll／Debt dates集中。
- Restricted／trapped cash 不能支援需求 Entity。

每個 Risk 包含 Amount、Week、Trigger、Probability source（若有）、Owner、Decision deadline、Mitigation、Residual risk。

### 10. Stop Conditions

- Entity、Currency、Opening cash、As-of、Horizon 或 Minimum cash 無法確認。
- Opening cash 差異 Material 且無法 Bridge。
- 主要 AR／AP／Payroll／Tax／Debt sources 缺失，造成 Liquidity conclusion 不可靠。
- Facility／Covenant definition 或 Draw availability 未確認。
- 不同 Entity／Currency 被要求 Net 但缺 Legal／Operational evidence。
- 使用者要求實際 Transfer、Payment、Draw、Repay、Invest、Hedge 或 Bank change。

### 11. Output Contract

| Week ending | Beginning cash | Inflows | Outflows | Net movement | Ending cash | Minimum cash | Headroom | Status |
|---|---:|---:|---:|---:|---:|---:|---:|---|

| Driver / Risk | Week | Amount | Evidence / Assumption | Scenario | Owner | Decision deadline | Action |
|---|---|---:|---|---|---|---|---|

另附：Bank／Entity／Currency breakdown、Base／Downside／Action scenarios、Facilities／Covenants、Forecast accuracy、Source／Assumption register、Checks。

### 12. User Communication and Completion Check

- 直接交付 Cash forecast 與 Liquidity decision view，不輸出內部資料蒐集摘要。
- Opening cash、Restricted／Minimum definitions、As-of、Currency、Version 清楚。
- 每筆重大 Flow 有 Source／Assumption、Timing、Status；Contingent 不混入 Committed。
- Roll-forward、Currency bridge、Facility、Covenant 與 Scenario checks 通過或顯示 Fail。
- Risk 有 Week、Amount、Trigger、Owner、Decision deadline；未核准 Action 清楚標示。
- Output Mask Bank／Sensitive identifiers，且沒有執行 Treasury action。

### Available MCP Tools

| Tool | Purpose |
|---|---|
| `ask` | 跨 Excel、SharePoint、OneDrive、Email、Teams、Calendar 找 Cash files、Collection／Payment commitments、Payroll／Tax／Debt schedules。 |
| `search_paths` | 查詢 Files、Workbook tables、Lists、Tasks、Calendar 或支援 Treasury resource 的 Path。 |
| `get_schema` | 取得精確資料與 Artifact write schema。 |
| `fetch` | 驗證 Bank／Cash extracts、AR／AP rows、Contracts、Due dates、Versions、Approvals。 |
| `call_function` | 只用目前支援的搜尋／計算；不得假設 Bank／Payment function。 |
| `create_entity` / `update_entity` | 僅在 Preview 與核准後儲存 Forecast artifact／Action tracker。 |
| `do_action` / `delete_entity` | 不用於 Transfer、Payment、Debt、Investment、Hedge、Bank master 或刪除 Treasury evidence。 |

## Examples

### Thirteen-week forecast

```text
User：「如果前五大客戶延後兩週付款，哪一週會缺現金？」
1. 驗證五大客戶 AR、Due／Promise dates、Opening cash、Minimum cash 與 Forecast base。
2. 在 Downside case 將指定 Collections 延後兩週，不改其他 Drivers。
3. 重算每週 Ending cash、Headroom、Facility need 與 First breach week。
4. 顯示 Peak funding need、Decision deadline 與可行但未核准 Actions。
5. 不執行 Collection、Transfer 或 Draw。
```

## Guardrails

- 不從 Forecast 執行 Transfer、Payment、Borrowing、Repayment、Investment 或 Hedge。
- 不將 Restricted／Trapped／Contingent cash 當 Available。
- 不重複計入 In-transit transfer 或跨 Entity cash。
- 不自行更改 Payment terms、Due dates、Minimum cash、Covenant definition。
- 不暴露完整 Bank account、Payroll／Tax 或個人敏感資料。
- 不把模型 Output 說成 Treasury approval 或 Funding commitment。

## Common Issues

| Issue | Cause | Fix |
|---|---|---|
| Opening cash 與 GL 不同 | Bank timing、Book adjustment、Stale extract | 先 Reconcile／Bridge，標示 unverified。 |
| Collections 過度樂觀 | 把 Due date 當 Payment date | 使用 Customer behavior／Promise／Dispute evidence。 |
| Facility 被算進 Base | Availability／conditions 未確認 | 移到 Contingent，列 Prerequisites。 |
| Currency total 錯誤 | Rate date／double conversion | 保留原 Currency，統一 Rate convention。 |
| Headroom 突然跳變 | Duplicate flow／missed rollover | 檢查 Weekly beginning＝Prior ending 與 IDs。 |
| 更新被 Policy 阻擋 | Tenant governance | 保留 Forecast／Preview，標示 `Policy denied`。 |
