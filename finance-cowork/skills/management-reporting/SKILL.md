---
name: management-reporting
description: >-
  將核准 Financial statements、Forecast、Variance、Cash、Working capital、KPIs、Risks 與 Actions 整合為 CFO、Leadership、Board 或 Monthly Business Review 可直接使用的 Finance decision pack。
  適用於 Executive summary、KPI scorecard、Outlook、Decision／Action register、Word／PowerPoint／Excel management package；不適用於重新計算未驗證數字、Statutory filing、External disclosure、Investor communication 或自動寄送未核准內容。
metadata:
  author: lwokeray
  version: "1.0.0"
---

## Overview

把各 Finance Skills 產生且已通過來源與Tie-out的Artifacts，整合成以Decision為中心的Management pack。報告先回答「結果、原因、Outlook、風險、需要什麼Decision／Action」，再提供必要Detail與Appendix。每個數字保留Source／Version／As-of；Draft、Reviewed、Approved、Issued狀態不得混用。

## When to Use

- CFO／Finance leadership monthly／quarterly review。
- Board／Executive finance pack、Monthly Business Review、Operating review。
- KPI scorecard、P&L／Cash／Balance-sheet highlights、Forecast outlook。
- Variance／Waterfall、Working-capital、Liquidity、Scenario、Risk／Opportunity summary。
- 建立Word memo、PowerPoint deck、Excel dashboard或Combined pack。
- 更新既有Pack並產生Change summary、Decision／Action follow-up。

## When NOT to Use

- 從TB產製Financial statements → `financial-statement-preparation`
- 做Driver decomposition → `variance-analysis`
- 建Budget／Forecast → `budget-forecast-planning`
- 重新計算未Tie／未Review的Source numbers。
- External earnings release、Regulatory／Statutory filing、Investor communication或Public disclosure。
- 未經核准自動寄送、發佈、分享或覆寫Issued pack。

## Quick Start

```text
User：「做八月CFO月報，包含Actual、Forecast、Cash與需決策事項。」
1. 確認Audience、Period、Entity、Pack template、Version、Meeting date與Decision purpose。
2. 取得Reviewed statements、Variance bridge、Forecast、Cash／Working-capital、Prior pack與Action status。
3. 驗證所有數字的Version／As-of／Tie-out／Status，未Review資料明確標示。
4. 建Executive result、KPI scorecard、Drivers、Outlook、Risks、Decisions、Actions與Appendix。
5. 對照Prior pack列出Changes，檢查Chart／Table與Source一致。
6. 儲存／寄送前Preview exact artifact、recipients、permissions與diff；核准後才執行。
```

## Core Instructions

### 1. Establish the Reporting Contract

確認：Audience、Decision／Meeting、Entity／Scope、Period、Currency／Unit、Reporting basis、Actual／Budget／Forecast versions、Materiality、Template／Brand、Length／Format、Distribution／Sensitivity、Owner、Reviewer、Approval status。

不同Audience使用不同Depth：

- CFO／Finance：完整Tie-out、Drivers、Forecast、Cash、Controls與Actions。
- Executive team：Business outcomes、2–4主要Drivers、Outlook、Trade-offs、Decisions。
- Board：Performance、Strategy／Risk、Capital／Liquidity、Outlook、Decisions；避免Operating detail淹沒重點。

### 2. Artifact Intake and Source of Truth

每個輸入Artifact記錄：Title、Owner、Version、Period／As-of、Status、Location、Source skill／Process、Approval。優先使用Reviewed／Approved版本；Draft只在必要時使用並顯示Status。

衝突時不自行混合：列出Value、Source、Version、Scope與Impact，由Owner確認。Prior pack不是本期數字的Source，只用於Format、Decision history與Change comparison。

### 3. Required Report Flow

1. **Executive result**：本期整體結果、Forecast change、Cash／Liquidity與最重要Decision。
2. **KPI scorecard**：Actual、Plan／Forecast、Prior、Variance、Trend、Status。
3. **P&L highlights**：Revenue、Margin、Opex、Operating／Net result。
4. **Cash and Balance Sheet**：Cash flow、Liquidity、Working capital、Debt／Covenant（適用時）。
5. **Driver bridges**：只有Reconciled、Material的5–8項Drivers。
6. **Outlook／Scenarios**：Latest forecast、Upside／Downside、Key assumptions。
7. **Risks／Opportunities**：Financial impact、Trigger、Owner、Mitigation。
8. **Decisions**：Decision、Options、Financial effect、Deadline、Decision owner。
9. **Actions**：Owner、Due、Completion criteria、Status、Dependency。
10. **Appendix／Sources／Checks**。

### 4. Executive Writing Rules

- 第一段直接寫Outcome，不寫「本報告將」。
- 每個Finding包含Amount、Comparison、Driver、Persistence、Outlook／Action。
- 使用Business language；必要Technical terms保留English。
- 不用模糊詞：significant、various、timing、one-time若沒有Amount／definition。
- 不推測Management intent，不把Hypothesis寫成Fact。
- Negative／Positive同時呈現Offset與Trade-off，避免只挑選支持某Narrative的數字。

### 5. KPI Scorecard

| KPI | Actual | Budget / Forecast | Prior | Var $ / % / bps | Trend | Status | Owner |
|---|---:|---:|---:|---:|---|---|---|

KPI需有Definition、Source、As-of、Target、Favorable convention。Red／Amber／Green只使用Approved threshold；沒有Threshold時改用Trend／Variance，不自行定色。

### 6. Variance and Chart Rules

- Waterfall：Baseline＋Drivers＝Actual；只使用`variance-analysis`已Reconcile Driver。
- Trend chart：Time axis、Actual／Forecast boundary、Units、Source清楚。
- Bar：比較同Definition、同Period；不要3D。
- Tables：Totals、Subtotals、Negative／Zero、Percentage formats一致。
- Dashboard／Chart必須能Tie回Detail，不用裝飾性指標。
- 每張Chart回答一個Management question，Title包含Metric／Period／Unit。

### 7. Outlook and Scenarios

顯示Latest forecast vs Prior forecast bridge、Full-year／Next-period outlook、Base／Downside／Upside Drivers、Cash／Liquidity implications。Scenario不是Prediction或Commitment；Assumptions、Owner、As-of與Triggers可見。沒有Approved probability不計Probability-weighted result。

### 8. Risks, Decisions, and Actions

Risk：Event、Financial exposure、Likelihood source、Trigger、Timing、Mitigation、Residual risk、Owner。

Decision：

| Decision | Why now | Options | Financial impact | Risks / trade-offs | Decision owner | Deadline |
|---|---|---|---:|---|---|---|

Action：

| Action | Outcome | Owner | Due | Dependency | Completion criteria | Evidence | Status |
|---|---|---|---|---|---|---|---|

Owner／Due無Evidence時用`Unassigned／TBD`。報告可提出Options與Recommendation，但Pricing、Capital allocation、Hiring、Payment、Forecast commitment、Accounting／Legal／Tax／Audit conclusion由具名人員決策。

### 9. Change and Version Control

更新既有Pack時先產生Change summary：New actuals、Forecast vintage、Restatement、Scope、Definitions、Drivers、Risks、Decisions、Actions、Pages／sections modified。保留Prior issued pack，不覆寫；新版本含Version、Date、Owner、Status與Source cut-off。

### 10. Review and Circulation

發布前檢查：

- 所有Headline numbers tie to source artifacts。
- Period／Currency／Unit／Version／Status一致。
- Draft／Unreviewed／Estimated清楚標示。
- Chart data與Labels／Narrative一致。
- No stale page、broken link、hidden comment、track change、placeholder、confidential data leakage。
- Recipients／permissions／sensitivity／sharing policy正確。
- Decision／Action owners與deadlines有來源。

寄送／Share／Publish前顯示Artifact、Version、Recipients、Message、Permission、Sensitivity、Attachments、External sharing與Exact action。平台核准後執行，重新驗證Result；Partial failure逐項報告。

### 11. Stop Conditions

- Audience、Period、Scope、Versions、Template或Decision purpose不明。
- Headline numbers無法Tie、Sources衝突未解、Statement／Forecast checks fail。
- Required artifact仍Draft／Blocked，但使用者要求Final／Issued。
- External／Board／Investor audience涉及未核准Disclosure。
- 寄送／分享目標、Recipients、Permissions或Sensitivity不清楚。

### 12. Output Contract

```text
FINANCE MANAGEMENT PACK — <Period / Scope>
Status：Draft / Reviewed / Approved / Issued
Actual version：<...>  Forecast version：<...>  As-of：<...>
Currency / Unit：<...>  Audience：<...>
```

依Report Flow交付，並附Source／Version register、Checks、Open items、Change summary與Distribution status。

### 13. User Communication and Completion Check

- 直接交付Report正文／檔案，不輸出製作摘要當結果。
- Executive result、KPIs、Drivers、Outlook、Risks、Decisions、Actions彼此一致。
- 所有Headline numbers可Tie到Reviewed／Approved sources。
- Draft、Estimate、Hypothesis、Unreviewed與Unknown明確。
- Artifact已Visual QA、無Clipped／Broken／Stale／Placeholder／Sensitive leak。
- 發送／分享只有在Exact Preview與核准後執行並驗證。

### Available MCP Tools

| Tool | Purpose |
|---|---|
| `ask` | 跨Statements、Forecasts、Excel、Word、PowerPoint、Email、Teams、Meetings整理Pack與Decision context。 |
| `search_paths` | 查詢Files、Presentations、Documents、Lists、Tasks、Messages等支援Path／operation。 |
| `get_schema` | 取得精確artifact、message、task create／update schema。 |
| `fetch` | 驗證Versions、Values、Slides／sections、Recipients、Permissions、Actions與Approvals。 |
| `call_function` | 只用支援搜尋／計算；Headline numbers仍需Tie到Finance artifact。 |
| `create_entity` / `update_entity` | Preview、Version check、Approval後建立／更新Pack或Action tracker。 |
| `do_action` | 僅在支援完整URL、Recipients／payload明確且平台核准時寄送／分享；不得猜測operation。 |
| `delete_entity` | 不刪除Issued pack、Decision／Action history或source evidence。 |

## Examples

### CFO monthly pack

```text
User：「整合八月實績、Q4 Forecast和13-week cash，做CFO月報。」
1. 取得Reviewed statements、Reconciled variance、Approved forecast、Cash forecast與Prior pack。
2. 驗證Version／As-of／Scope／Currency與checks。
3. 建Executive result、KPI、P&L、Cash／BS、Drivers、Outlook、Risks、Decisions、Actions。
4. 對Prior pack做Change summary與Visual／source QA。
5. 保持Draft直到Reviewer approval；未經核准不寄送。
```

## Guardrails

- 不用未Tie／未Review資料作Headline或Final pack。
- 不把Draft／Saved／Shared說成Approved／Issued。
- 不自行做External disclosure、Investor communication或Statutory filing。
- 不為了Narrative省略Offset、Risk、Residual或Uncertainty。
- 不自行指定Decision owner、Approve Forecast、Capital／Hiring／Pricing／Payment decision。
- 不寄送／分享給未確認Recipients，不更改Permissions規避Policy。

## Common Issues

| Issue | Cause | Fix |
|---|---|---|
| Headline與Appendix不同 | Version／source混用 | 鎖定Source register並Re-tie。 |
| Chart與Narrative相反 | Sign／Favorable convention錯 | 對照Underlying table與labels。 |
| Pack太像資料堆疊 | 未以Decision為中心 | 重排Result→Driver→Outlook→Decision→Action。 |
| Prior slide殘留 | Update未做Version QA | 比對Periods／as-of／sources並清除Stale content。 |
| Recipient不明 | Distribution scope缺失 | 停止發送，確認Recipients／permissions／sensitivity。 |
| Policy阻擋分享 | Tenant governance | 報告`Policy denied`，不改權限／工具重試。 |
