---
name: financial-model-building
description: >-
  建立或更新可稽核的 Operating model、Three-statement model、Debt、Capex、Working capital、Scenario 與 Sensitivity schedules，並維持 Formula consistency、Source traceability 與 Model checks。
  適用於 Integrated financial modeling、延伸 Forecast periods、更新 Actuals／Drivers、建立 Cash／Debt／Equity roll-forwards；不適用於單純 Budget collection、只做 DCF、硬編輸出、破壞既有 Workbook 或未驗證來源的精確模型。
metadata:
  author: lwokeray
  version: "1.0.0"
---

## Overview

建立從 Sources／Assumptions → Operating drivers → Income Statement → Balance Sheet → Cash Flow → Debt／Cash／Equity → Scenarios／Checks 的 Formula-driven model。模型必須可以由另一位 Analyst 追蹤、更新與審查；Inputs、Imported data、Formulas、Outputs、Checks、Sources 清楚分離，不用 Cash／Equity／Other plug 偽造 Balance。

編輯既有 Workbook 時先讀取 Formula、Named ranges、Tables、Queries、External links、Formatting、Hidden structures、Period semantics 與 Checks。只做最小必要變更；無法安全延伸時，在新 Sheet／Version 建立模型，不破壞原檔。

## When to Use

- Three-statement historical＋forecast model。
- Operating model：Revenue、COGS、Margins、Headcount、Opex。
- Balance-sheet、Working-capital、Capex／Depreciation、Debt／Interest、Cash、Equity schedules。
- 更新 Actuals、Guidance／Assumptions、延伸 Timeline、加入 Scenario／Sensitivity。
- 建立 Formula checks、Sources／Audit、Version log、Executive outputs。
- Audit 既有模型的 Formula、Tie-out、Hardcodes、Source、Sign、Unit 與 Step changes。

## When NOT to Use

- Annual budget／Rolling forecast 流程與 Department collection → `budget-forecast-planning`
- 只做 DCF valuation → `dcf-valuation`
- 只做 Ratio／Trend analysis → `financial-analysis`
- 在沒有 Historical／Driver／Policy 資料時假裝完整 Bottom-up model。
- 只改格式卻重構公式、Sheet、Named ranges 或 External links。
- 直接用 Model output 作 Investment recommendation、Credit approval 或 Management commitment。

## Quick Start

```text
User：「把這份 Historical statements 做成五年 Three-statement model。」
1. 確認 Company／Entity、Fiscal periods、Currency、Units、Historical source、Forecast horizon、Scenario 與用途。
2. Tie Historical statements，建立 Source／Mapping／Assumption architecture。
3. 由 Revenue／Cost／Headcount／Working-capital／Capex／Debt drivers 建 Forecast schedules。
4. 連結 P&L、Balance Sheet、Cash Flow、Retained earnings、Cash、Debt、Shares。
5. 建立 Base／Downside、Sensitivity、Checks、Sources、Version log。
6. 驗證 A=L+E、CFS cash、Roll-forwards、Formula consistency、No hidden plug／errors。
```

## Core Instructions

### 1. Model Intake

確認：Purpose、Audience、Entity／Company、Consolidated scope、Fiscal calendar、Historical periods、Forecast horizon、Currency／Unit、Accounting basis、Scenario、Valuation／Financing needs、Existing reference／template、Version／Owner。

若有 Reference model，保留其 Analytical depth 與 Company-specific driver，而非只複製版面。任何省略／簡化的 Material schedule 必須說明原因與影響。

### 2. Inspect Existing Workbook

修改前：

- Render／Inspect 全部重要 Sheets 與 Key ranges。
- 讀取 Values、Formulas、Named ranges、Tables、Data validation、Conditional formatting。
- 找 External links、Queries、Hidden rows／columns／sheets、Macros（如有）、Circular references。
- 確認 Actual／Estimate boundary、Date values、Number formats、Color convention、Sign／Unit。
- Trace representative outputs 到 Source／Assumption。

不得 Sheet-wide Autofit／Restyle、Delete hidden structure、Break link 或重建整本 Workbook，除非使用者明確要求且已有備份／Version。

### 3. Model Architecture

依需求使用：

- `Cover / Summary`：Purpose、Version、As-of、Scenario、Currency、Units、Key outputs、Model status。
- `Sources / Historical`：Reported data、Operational KPIs、Source IDs、Comments。
- `Assumptions`：Business／Policy／FX／Tax／Timing／Scenario inputs。
- `Revenue / Operating Drivers`。
- `Income Statement`。
- `Balance Sheet`。
- `Cash Flow`。
- `Working Capital`。
- `Capex & Depreciation`。
- `Debt & Interest`。
- `Cash & Equity / Shares`。
- `Scenarios / Sensitivities`。
- `Checks`。
- `Sources_Audit / Version Log`。

既有模型依其 Architecture 擴充，不強制改 Sheet names。

### 4. Historical Data and Normalization

- 歷史數字來自 Filed／Issued／Approved sources；每個 Material input 有 Source comment／ID。
- 保留 Reported values，Normalized／Adjusted data 在獨立 Schedule 並 Reconcile。
- 對 Restatement、Acquisition、Disposal、Accounting change、Discontinued operations 建 Bridge。
- Historical P&L、BS、CFS 彼此 Tie；不將 Missing data填 0。
- Imported data／External links 集中，不散落 Live link。

### 5. Revenue and Operating Forecast

使用 Company-specific drivers：Units／Price／Mix、Customers／ARPU／Churn、ARR bridge、Backlog／Bookings、Capacity／Utilization／Rate、Locations／Same-store、Market／Share 等。Forecast assumptions 錨定 Historical、Guidance、Contract、Operational plan 或明確 Ramp。

成本拆 Variable、Fixed、Headcount、Mix、Capacity、Inflation、FX。Margin 由 Revenue／Cost schedules 推導，不直接 Hardcode EBITDA／Net income。

### 6. Income Statement

- Revenue、COGS、Gross profit、Opex、D&A、EBIT／Operating income、Interest、Tax、Net income。
- Function／Nature classification 一致。
- Tax、SBC、One-time、Non-GAAP adjustments有明確 Schedule／Reconciliation。
- Period formulas copy-across；Subtotals `SUM` contiguous ranges，不用跳行相加遺漏項目。

### 7. Working Capital and Balance Sheet

- AR、Inventory、AP 由 DSO／DIO／DPO 或底層 Drivers 計算。
- Other assets／liabilities、Prepaids、Accruals、Deferred revenue、Tax、Lease 使用 Roll-forward。
- PPE：Beginning gross＋Capex－Disposal＝Ending gross；Accumulated depreciation roll-forward。
- Retained earnings：Beginning＋Net income－Dividend±supported movements＝Ending。
- Goodwill／Intangible、NCI、AOCI、Treasury stock 有 Source／Schedule。
- 不讓 Cash／Equity／Other 成為未標示 Plug。

### 8. Cash Flow Statement

由 Income Statement 與 Balance-sheet movements建立；Operating／Investing／Financing classification依 Policy。Ending cash tie to Balance Sheet。Non-cash acquisitions、Lease、Debt conversions另列，不進 Cash movement。

### 9. Debt, Interest, and Cash

- 每筆 Debt／Facility：Beginning、Draw、Repayment、PIK／Cash interest、Fees、Maturity、Rate、Currency、Ending。
- Interest 基於 Beginning／Average／Daily balance 與 Rate convention，清楚說明。
- Cash sweep／Revolver若需要 Circularity，優先以 Iterative schedule／Helper logic避免；若保留 Circularity，記錄 Iteration setting與 Check。
- Covenant只有 Contract definition 與 inputs完整時建模。

### 10. Equity and Per-share

- Share issuance、Repurchase、SBC、Options／RSUs、Convertible／Dilution、Dividend。
- Basic／Diluted shares與 EPS定義一致。
- Valuation／Per-share only在 Share data與 Date支持時使用。

### 11. Formula and Formatting Rules

- Editable assumptions 使用模型既有 Input color；沒有 House style 時可採 Blue input、Black formula、Green internal link、Red external link，但需 Legend。
- Historical source values不因可編輯而塗 Blue。
- Numbers／Dates為 Typed values；Format：Currency、Percentage、Multiple、Count、Date一致。
- Actual／Forecast boundary可見；Date headers用真正 Date values。
- 避免 Magic numbers、Volatile functions、Opaque nested formulas、Unintended circularity。
- Complex logic使用 Helper rows，重要 Assumptions加 Comment。
- Sensitivity cells重新計算底層模型，不 Paste values。

### 12. Required Checks

| Check | Requirement |
|---|---|
| Historical statements | IS／BS／CFS tie to sources |
| Balance Sheet | Assets = Liabilities + Equity |
| Cash Flow | Beginning + net change = Ending BS cash |
| Retained earnings | Roll-forward ties |
| Debt | Beginning + draws - repayments ± other = Ending |
| Capex / PPE | Asset and accumulated depreciation roll-forwards tie |
| Working capital | Drivers and balances tie |
| Shares | Beginning + issuance - repurchase ± dilution = Ending |
| Scenario | Selector valid; assumptions visible |
| Formula | No #REF/#DIV0/#VALUE/#NAME/#NUM, off-by-one, inconsistent copy-across |
| Source | Material hardcodes sourced／labeled assumptions |
| Plug | No unexplained Cash／Equity／Other plug |

Checks sheet 顯示 Actual、Expected、Difference、Tolerance、Status、Where to fix、Notes；Summary 顯示 `MODEL STATUS: PASS/FAIL`。

### 13. Audit and Visual QA

- Trace representative Revenue、Margin、Working capital、Cash、Debt、Equity outputs。
- 檢查 Historical-to-Forecast step changes，需由 Driver／Event／Assumption支援。
- Scan Formula errors、Hardcodes in calculation areas、External links、Circularity。
- Render all user-facing sheets，修正 Clipped labels／numbers、Broken charts、Unreadable sources。
- 確認 Formula color、Number formats、Period headers 與 Totals一致。

### 14. Stop Conditions

- Historical statements／Sources不完整或無法 Tie。
- Forecast drivers、Accounting definitions、Currency／Unit／Period無法確認。
- Existing workbook有無法理解的 Macro／Circular／External-link dependency，修改可能破壞模型。
- 模型只能靠 Hidden hardcode／Plug平衡。
- User要求Investment／Credit／Management decision而非模型artifact。

### 15. Output Contract

交付：Model workbook／structured artifact、Assumption register、Source map、Scenario／Sensitivity、Checks、Model status、Version／Change log、Known limitations。若修改既有模型，另附 Change summary：Sheets／Ranges、Formulas、Assumptions、Sources、Outputs與Checks變更。

### 16. User Communication and Completion Check

- 交付可更新模型，不以公式摘要取代Workbook。
- Outputs可追溯到 Drivers／Sources；Material hardcodes已標示。
- 三表、Cash、Debt、Equity、Working-capital、Scenario、Sources checks通過或清楚Fail。
- Existing workbook未被無關Restyle／Restructure，Version history保留。
- 所有User-facing sheets已Visual QA，重要內容不Clipped。
- 模型狀態與Limitations清楚，不把Model output說成Approved decision。

### Available MCP Tools

| Tool | Purpose |
|---|---|
| `ask` | 定位Financial／Operational sources、Guidance、Assumptions、Existing model與Owner context。 |
| `search_paths` | 查詢Files、Workbook tables、Lists等可用Path。 |
| `get_schema` | 取得資料／Artifact的即時schema。 |
| `fetch` | 驗證Workbook、Tables、Rows、Versions、Sources、Approvals。 |
| `call_function` | 只用支援搜尋／計算；核心模型邏輯仍保留在Workbook formulas。 |
| `create_entity` / `update_entity` | Version diff、Preview、Approval後建立／更新Model artifact。 |
| `do_action` / `delete_entity` | 不用於交易、Posting、Approval、External link execution或刪除Model history。 |

## Examples

### Extend an existing model

```text
User：「把現有模型延伸到 2030 並加入 Downside case。」
1. 先Inspect／render現有Sheets、formulas、links、actual／forecast boundary與checks。
2. 延伸Date headers與copy-across formulas，保持Relative／absolute references。
3. 在Visible assumption table加入Downside drivers，不改Final outputs。
4. 更新Debt／Cash／Working-capital／Statements／Sensitivities與Checks。
5. Visual QA、Formula scan、Model status與Change summary後另存新Version。
```

## Guardrails

- 不硬編Derived outputs、不以Plug／IFERROR(0)隱藏錯誤。
- 不破壞Named ranges、Tables、Queries、Links、Hidden structures或Macros。
- 不把Reference model簡化成Flat growth而不說明。
- 不用Model output作Investment recommendation、Credit approval或Management commitment。
- 不修改／刪除Source history或Original workbook，除非明確核准。
- 不外露不必要Confidential data或External credentials。

## Common Issues

| Issue | Cause | Fix |
|---|---|---|
| BS通過但Cash為Plug | Three-statement logic缺失 | 修正Schedules，Plug標Fail。 |
| Forecast formula不一致 | Copy range／absolute references錯誤 | 比較相鄰period formulas並修正。 |
| #NUM! in IRR／CAGR | Cash-flow sign／data invalid | Guard inputs或使用適合指標。 |
| Historical step change | Unit／Restatement／Scope／mapping | Bridge並修正source。 |
| Sensitivity是Static values | 未連Model drivers | 重建為recalculating table。 |
| Existing workbook被破壞 | 過度Restyle／insert/delete | 回到Version，採Targeted edit／new sheet。 |
