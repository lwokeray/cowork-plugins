---
name: financial-analysis
description: 依 Income Statement、Balance Sheet、Cash Flow 與營運資料計算 Profitability、Liquidity、Leverage、Efficiency、Growth、Cash conversion、DuPont、YoY／QoQ 趨勢與跨報表異常訊號。 適用於 Management financial review、Earnings quality、Ratio analysis、Trend／Anomaly investigation；不適用於證券推薦、個人投資建議、正式 Credit decision、Audit opinion、只產製報表或在資料定義不一致時做排名。
metadata:
  author: lwokeray
  version: 1.0.1
license: MIT
---

## Overview

從三表與營運資料建立可重算的 Ratio／Trend analysis，並用 Cross-statement linkage 檢查 Revenue、AR、Inventory、AP、Cash flow、Debt、Equity、Capex 與 Earnings quality。每個異常都只是 Investigation signal；必須測試 Seasonality、Industry model、Acquisition、FX、Policy、One-time 與 Data-quality 等替代解釋。

## When to Use

- YoY、QoQ、MoM、YTD financial trend。
- Gross／Operating／Net margin、ROA、ROE、ROIC（有定義時）。
- Current／Quick／Cash ratio、Debt／Equity、Net leverage、Interest coverage。
- Asset／AR／Inventory turnover、DSO／DIO／DPO、Cash conversion。
- Operating cash flow vs Net income、Free cash flow、Accrual intensity。
- DuPont decomposition、Earnings quality、Three-statement linkage。
- AR surge、Inventory buildup、Cash-flow divergence、Margin shift、Leverage／Liquidity signal。

## When NOT to Use

- 從 TB 產製三大報表 → `financial-statement-preparation`
- 深入 Budget／Forecast variance bridge → `variance-analysis`
- 建立完整三表 Forecast model → `financial-model-building`
- DCF valuation → `dcf-valuation`
- 證券買賣、Price target、Portfolio allocation 或個人投資建議。
- 用通用 Ratio threshold 作正式 Credit、Covenant、Reserve、Fraud 或 Going-concern conclusion。

## Quick Start

```text
User：「分析這兩年的三大報表，找出財務風險。」
1. 驗證 Entity、Periods、Currency、Units、Consolidated scope、Accounting basis 與三表 Tie-outs。
2. 對齊 Line definitions，使用 Average balance 計算 Return／Turnover ratios。
3. 計算 YoY／QoQ、Margins、Liquidity、Leverage、Efficiency、Cash conversion、DuPont。
4. 檢查 AR vs Revenue、Inventory vs COGS、OCF vs Net income、AP vs Purchases、Debt vs Coverage。
5. 對每個 Signal 測試 Seasonality、Industry、FX、Scope、One-time、Policy、Data quality。
6. 交付 KPI table、Trend、Signal、Evidence、Alternative explanations 與 Next tests。
```

## Core Instructions

### 1. Establish Analytical Basis

確認：Company／Entity、Consolidated／Standalone、Periods、Fiscal calendar、Currency、Unit、Reported／Adjusted／Management basis、Continuing operations、Comparison／Peer／Target、Audience 與 Decision。

跨公司／Period 比較前對齊 Revenue recognition、Lease、Debt、EBITDA、Cash／Debt、Share count、Segment、Acquisition／Disposal 與 Restatement definitions。無法對齊時使用 Range／Limited comparison，不做精確排名。

### 2. Validate Financial Statements

- Income Statement、Balance Sheet、Cash Flow 使用相同 Scope／Period／Currency。
- A＝L＋E、CFS ending cash＝BS cash、Net income／RE roll-forward 可 Tie。
- Line totals、Signs、Units、Restatement、Discontinued operations、NCI、Non-cash items。
- Missing fields 不以零補入；標示 `Not available`。
- Average balance 使用 Opening／Closing；只有 Ending balance 時標示 Limitation。

### 3. Growth and Margin Metrics

```text
YoY growth = (Current - Same period prior year) / ABS(Prior year)
QoQ growth = (Current quarter - Prior quarter) / ABS(Prior quarter)
CAGR = (Ending / Beginning)^(1 / Years) - 1
Gross margin = Gross profit / Revenue
Operating margin = Operating income / Revenue
EBITDA margin = EBITDA / Revenue
Net margin = Net income / Revenue
```

Beginning／Prior＝0 或負數時 Growth／CAGR 可能無意義，顯示 `NM`。CAGR 只在正值且完整 Years 時使用。Margin 需確認 Revenue denominator 與 Gross／Net presentation。

### 4. Profitability and DuPont

```text
ROA = Net income / Average total assets
ROE = Net income attributable to common equity / Average common equity
Asset turnover = Revenue / Average total assets
Equity multiplier = Average total assets / Average common equity
ROE = Net margin × Asset turnover × Equity multiplier
```

ROE change 分 Profitability、Efficiency、Leverage；Higher leverage 不自動是 Favorable。Average equity 接近零／負數時 ROE `NM`。ROIC 只有在 NOPAT、Invested capital 與 Operating／Financing classification 定義清楚時才計算。

### 5. Liquidity and Leverage

```text
Current ratio = Current assets / Current liabilities
Quick ratio = (Cash + Short-term investments + Receivables) / Current liabilities
Cash ratio = Cash and permitted liquid equivalents / Current liabilities
Debt to equity = Interest-bearing debt / Equity
Net debt = Interest-bearing debt - permitted cash and equivalents
Net leverage = Net debt / EBITDA
Interest coverage = EBIT or EBITDA / Interest expense
```

明示 Debt 是否含 Lease、Factoring、Pension／Debt-like items；Coverage 使用 EBIT 或 EBITDA；Cash 是否 Restricted。Covenant metric 必須依 Contract definition，不能用通用公式替代。

### 6. Efficiency and Working Capital

```text
Receivables turnover = Credit revenue / Average AR
Inventory turnover = COGS / Average inventory
Payables turnover = Purchases / Average AP
DSO = Average AR / Credit revenue × Days
DIO = Average inventory / COGS × Days
DPO = Average AP / Purchases or disclosed cost base × Days
CCC = DSO + DIO - DPO
```

Seasonal business使用同季／Monthly average。Purchases 不可得而用 COGS 必須 Disclosure。更深 Action review 交給 `working-capital-review`。

### 7. Cash Flow and Earnings Quality

```text
Operating cash conversion = Operating cash flow / Net income
Reported free cash flow = Operating cash flow - Capital expenditures
Cash margin = Operating cash flow / Revenue
Accrual proxy = (Net income - Operating cash flow) / Average assets
```

說明 FCF definition；Reported FCF 與 Unlevered FCF 不混用。檢查 OCF vs Net income 的原因：AR、Inventory、AP、Deferred revenue、Tax、Interest、Non-cash items、One-time、Acquisition、Classification。單一 Quarter divergence 不足以判定 Earnings quality 低落。

### 8. Cross-statement Linkage

- Revenue growth 是否轉為 Cash，或 AR／Contract asset 增加。
- Gross／Operating margin change 是否與 Inventory、Payables、Capex、Headcount 一致。
- Net income、Dividend、Repurchase、OCI、NCI 是否解釋 Equity movement。
- Capex／Acquisition 是否解釋 PPE／Goodwill／Intangible 與 Investing cash flow。
- Debt growth是否與 Cash need、Interest expense、Maturity／Financing cash flow一致。
- Deferred revenue／Working capital 是否與 Business model／Growth stage 一致。

### 9. Anomaly Signals

| Signal | Test | Possible explanations to examine |
|---|---|---|
| AR growth > Revenue growth | Growth gap、DSO、Aging、Subsequent cash | Seasonality、terms、billing、dispute、recognition、data issue |
| Inventory growth > COGS／sales | DIO、SKU aging、Demand | Build ahead、supply risk、launch、obsolescence |
| OCF persistently < Net income | Cash conversion、accruals | Growth working capital、one-time、quality concern |
| Margin shift | bps、Price／Mix／Cost | FX、capacity、pricing、reclass、one-time |
| AP diverges from Purchases | DPO、Past due | Terms、cash pressure、supply mix、cut-off |
| Negative OCF | Duration、Funding | Growth investment、seasonality、structural issue |
| Goodwill concentration | Goodwill／assets、performance | Acquisition strategy、impairment signal |
| Leverage up / coverage down | Net debt、EBITDA、interest | Acquisition、buyback、earnings decline、rates |

對每個 Signal 指定 Severity、Evidence、Period、Alternative explanations、Missing tests、Owner；不使用「Fraud」「Manipulation」「Insolvent」等正式結論，除非具權限調查已提供證據與結論。

### 10. Comparison and Context

- 時間序列優先於單點 Ratio。
- Peer／Industry comparison 使用一致 Definitions、Fiscal periods、Currency 與 Business model。
- Management target／Covenant／Policy 比通用 Benchmark 更具決策性。
- 一次性 Acquisition、Restructuring、FX、Accounting change 建立 Bridge。
- Outlier 必須同時呈現 Denominator、Absolute amount 與 Data quality。

### 11. Stop Conditions

- 三表無法 Tie、Scope／Period／Currency／Unit 不一致。
- 關鍵 Metric numerator／denominator definitions 缺失或不可比。
- Average balance／Days／Credit revenue／Purchases 缺失，且會使 Ratio 誤導。
- User 要求 Investment／Credit／Audit／Fraud final conclusion 超出此 Skill。
- Peer／Target data source 不明或 Stale，無法支持結論。

### 12. Output Contract

| Metric | Current | Prior | Change | Definition | Source | Interpretation |
|---|---:|---:|---:|---|---|---|

| Signal | Severity | Evidence | Alternative explanations | Missing test | Owner / Next action |
|---|---|---|---|---|---|

另附：Cross-statement conclusions、DuPont／Cash conversion、Trend charts（必要時）、Data-quality／Definition notes、Source register。

### 13. User Communication and Completion Check

- 先交付最重要 Findings，再給 Evidence、Metrics、Alternative explanations、Actions。
- 所有 Ratios 有 Definition、Period、Scope、Denominator、Source 與 Limitation。
- `NM`、Missing、Restatement、One-time、FX、Scope change 不被隱藏。
- Signal 與正式 Accounting／Audit／Credit／Investment conclusion 明確區分。
- 結果可由來源數字重算，無硬編 Threshold 或虛構 Benchmark。
- 不輸出製作摘要、隱藏思考或工具內部格式。

### Available MCP Tools

| Tool | Purpose |
|---|---|
| `ask` | 跨 Statements、Excel、Reports、Email、Teams、Meetings 找 Financial／Operational context。 |
| `search_paths` | 查詢 Files、Workbook tables、Lists 或可用資料 Path。 |
| `get_schema` | 取得精確資料／artifact schema。 |
| `fetch` | 驗證 Values、Rows、Definitions、Versions、Sources、timestamps。 |
| `call_function` | 只用已支援搜尋／計算；Ratios 必須在輸出／底稿中可重現。 |
| `create_entity` / `update_entity` | 經 Preview／Approval 儲存 Analysis artifact，不修改 Posted financials。 |
| `do_action` / `delete_entity` | 不用於 Trading、Credit、Accounting adjustment、Audit conclusion 或刪除 evidence。 |

## Examples

### Earnings quality review

```text
User：「Revenue 和 Profit 都成長，為何 Cash 變差？」
1. 驗證三表 Tie-out、Period、Scope、Currency 與 OCF definition。
2. Bridge Net income 到 OCF，量化 AR、Inventory、AP、Deferred revenue、Tax、Non-cash。
3. 計算 Cash conversion、DSO／DIO／DPO 趨勢。
4. 測試 Growth／Seasonality／Acquisition／Cut-off／data issue 等解釋。
5. 交付 Signal、Evidence、Alternative explanations 與 Next tests，不直接判定操縱。
```

## Guardrails

- 不提供證券推薦、個人投資、Trading 或 Portfolio decision。
- 不以單一 Ratio／Threshold 宣告 Fraud、Distress、Credit／Going concern 結論。
- 不混用 Reported／Adjusted、Consolidated／Standalone、EBIT／EBITDA definitions。
- 不把 Missing data 當 0，不產生 Infinity／Misleading growth。
- 不從分析結果直接 Posting、Write-off、Credit change 或管理層承諾。
- 不暴露不必要 Customer、Vendor、Employee 或 Bank 敏感資料。

## Common Issues

| Issue | Cause | Fix |
|---|---|---|
| ROE 異常高 | Equity 接近零／負數 | 顯示 `NM`，用 Absolute returns／capital structure 解釋。 |
| OCF／NI ratio 失真 | NI 接近零／負數 | 使用 Cash bridge 與 Absolute amounts。 |
| DSO 與報告不同 | Credit revenue／Gross AR／Average balance 定義不同 | 對齊 Definition 並 Bridge。 |
| Peer comparison 誤導 | Fiscal period／business model／accounting不同 | Normalize 或標示 Limited comparison。 |
| AR surge 被視為操縱 | 未測 Seasonality／terms／cash | 列 Alternative explanations 與 Subsequent-cash test。 |
| 更新被 Policy 阻擋 | Tenant governance | 保留 Analysis artifact／Preview，標示 `Policy denied`。 |
