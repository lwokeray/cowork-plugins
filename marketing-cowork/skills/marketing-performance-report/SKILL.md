---
name: marketing-performance-report
description: >-
  整合 Excel、SharePoint、Campaign files、approved exports 與 Microsoft 365 context，建立具 KPI 定義、Data quality、Period／Target comparison、Funnel／Channel、Budget、Attribution、Trend、Insight、Decision 與來源的 Marketing performance report。
  適用於 Weekly／Monthly／Quarterly／Campaign／Channel review；不適用於用 vanity metric 宣稱成功、捏造 benchmark、在沒有 baseline 時宣稱 movement 或自動變更 Campaign。
metadata:
  author: lwokeray
  version: "1.0.0"
---

# Marketing Performance Report

## Overview

將不一致的 Campaign、Channel、Content、Event、Email、Lead 與 Budget 資料整理成可供決策的 Performance Report。先確認 metric dictionary、data grain、period、filters、target、comparison、Attribution 與 quality，再產生 Trend、Insight 與 recommendation。報告必須清楚分隔 actual、target、benchmark、estimate、inference 與 unknown。

## When to Use

- Weekly／Monthly／Quarterly Marketing review、Campaign wrap-up 或 Executive QBR。
- Channel、Content、Email、Event、Paid、Organic、Lead 或 Budget performance。
- 比較 prior period、year-over-year、plan／target、cohort、segment、region 或 Campaign。
- 建立 KPI dashboard table、Trend、Funnel、Budget pacing、Attribution limitation 與 decision pack。
- 整理多個 Excel／CSV／report／meeting source，建立一個 verified snapshot。

## When NOT to Use

- 即時操作 Paid Campaign、Budget、Audience 或 channel setting。
- 只有少量 Activity count 卻宣稱 ROI、Revenue 或 causal impact。
- 沒有 prior snapshot／compatible period 卻宣稱上升下降。
- 以不同 formula、timezone、currency、attribution window 的數字直接比較。
- 只需要統計實驗推論 → `marketing-experiment-design`

## Quick Start

1. 確認 Report type、decision audience、scope、period、timezone、currency、comparison、targets、segments 與 source files。
2. 用 `ask` 建立 report／workbook／Campaign／meeting／target source map；以 `fetch`／`fetch_blob` 驗證 canonical version 與精確資料。
3. 建 metric dictionary、data lineage、quality checks、dedupe／reconciliation；衝突無法解決時並列而不平均。
4. 計算 KPI、Trend、Funnel、Budget、Attribution／cohort view 與 confidence；Insight 與 cause hypothesis 分開。
5. 交付 Executive summary、scorecard、analysis、decisions、actions、unknowns 與 source notes；不修改 Live systems。

## Core Instructions

### 1. Establish report control

記錄：Report type、Business question、Audience、Scope、Campaign／Channel／Region／Segment、Period、Timezone、Currency／FX source、Data cutoff、Comparison period、Targets／plan version、Attribution model／window、Data owners、Source versions 與 Generated date。

若使用者說「上月」，依使用者 locale／timezone解析完整 calendar month，不用任意 30 天。Partial period 必須與 compatible partial period比較，或清楚標 incomplete。

### 2. Build the metric dictionary

每個 KPI 要有：Business meaning、formula、numerator、denominator、grain、event／entity、filters、dedupe、window、source、owner、lag、target、direction 與 known limitations。

常見關係：

- Delivery rate = delivered / sent。
- CTR 需明示 denominator 是 impressions、delivered 或 opens；不同 Channel 不共用縮寫。
- Conversion rate = qualified conversions / defined eligible base。
- CPL／CPA = eligible spend / qualified leads／acquisitions。
- ROAS = attributed revenue / media spend；需清楚 attribution／refund／tax／margin。
- CAC = defined acquisition cost / new customers；Marketing-only spend 不可隨意稱 full CAC。
- MQL／SQL／Pipeline 需使用 approved lifecycle definition與 currency。

不要把 Reach、Impressions、Clicks、Sessions、Leads、MQL、SQL、Opportunities、Customers 混為同一 base。

### 3. Validate data quality and lineage

檢查：Source completeness、version、schema、date／timezone、currency、missing、duplicate、bot／internal／test traffic、late events、tracking change、naming／UTM taxonomy、campaign mapping、lead／opportunity join、status reversal、refund／cancellation、privacy loss、row totals 與 reconciliation。

建立 quality status：`Pass／Usable with limitation／Blocked`。重大不平衡不可用漂亮圖表掩蓋。若 source totals 不一致，列差異、可能原因、採用哪一版本及誰需決定。

### 4. Build the scorecard

Scorecard 先呈現少數與 objective 對應的 KPI：

| KPI | Actual | Target | Variance | Prior comparable | Change | Data quality | Status |
|---|---|---|---|---|---|---|---|

Status threshold 必須來自 approved target／tolerance；沒有 target 時用 `No target`，不自行設 Green／Red。Change 顯示 absolute 與相對值時避免小 baseline 造成誇張百分比。

### 5. Analyze funnel and cohorts

Funnel 每階段保留 eligibility、count、conversion、drop-off、time lag、source與 definition。跨 systems join 不完整時，使用 coverage rate並標示。分析 by Segment／Channel／Region／Cohort 時確保 sample 足夠且 taxonomy 一致。

Cohort 適合看 activation、retention、lead progression 與 lag；不要把不同成熟度 cohort 直接比較。MQL to SQL、Pipeline 或 Revenue需考慮 sales cycle，recent Campaign 可能尚未 mature。

### 6. Analyze budget and efficiency

分開 Planned、Committed、Actual、Accrued、Forecast、Variance。Budget pacing 使用完整 campaign window與 scheduled spend；不是只把目前 spend除以 budget。Efficiency metric 必須連結 quality outcome，避免為低 CPL 犧牲 lead quality。

跨 currency需保存 FX date／rate／source。Agency／production／technology 是否納入 ROI／CAC 必須與 metric definition一致。

### 7. Handle attribution honestly

報告說明 First-touch、Last-touch、Linear、Position-based、Time-decay、Data-driven、Experiment／holdout 或 Self-reported 的 model與 limitation。Marketing-sourced、Marketing-influenced 與 Incremental impact 是不同概念。

不得將 influenced pipeline 加總成 caused revenue；同一 Opportunity 被多 Campaign touch 時不可重複當 unique pipeline。沒有 experiment／credible causal design 時，使用「associated with／influenced under model」而非「driven／caused」。

### 8. Analyze trends and anomalies

使用足夠 data points、compatible periods與 event overlay。區分 Direction、Inflection、Seasonality、Anomaly、Mix shift、Tracking change與 lag。單一 spike不可稱 Trend；Campaign launch與 KPI change同時發生不能證明因果。

Forecast 用 range與 assumptions，並提供 expected／upside／downside；少於足夠歷史、重大 strategy change或 measurement break時降低 confidence。

### 9. Convert findings to decisions

每項 insight 使用：

`Observed evidence → Why it matters → Hypothesis (not cause unless proven) → Decision / action → Owner → Review date → Success / guardrail`

建議依 Impact、Confidence、Effort、Reversibility與Risk排序。最多突出三至五項真正的 Decision，不把所有數字都變 Action。

### 10. Adapt report depth

- Executive：Outcome、variance、budget exposure、risk、decision、confidence。
- Marketing lead：Channel／funnel、resource、test、next-period allocation scenario。
- Analyst：Metric dictionary、lineage、quality、method、segment／cohort與 appendix。
- Campaign team：specific creative／content／audience／journey finding與 ownership。

### 11. Preserve report state

預設在對話交付完整報告。若使用者要求儲存，先顯示 destination、format、baseline、version與 overwrite／new-file behavior；僅使用 runtime 支援 operation、核准後執行並以 `fetch`驗證。不能自動更新 Live dashboard、Budget或 Campaign。

## Output Format

```markdown
# Marketing Performance Report
## Report control and data confidence
## Executive summary
## KPI scorecard
## Funnel / cohort / channel analysis
## Budget and efficiency
## Attribution and contribution
## Trends, anomalies, and hypotheses
## Decisions and prioritized actions
## Next-period focus and measurement
## Metric dictionary, reconciliation, and sources
```

## Work IQ Tool Rules

- `ask`：發現 performance reports、workbooks、targets、Campaign files、meetings與 decisions。
- `search_paths`、`get_schema`、`fetch`、`fetch_blob`：驗證 data source、rows／items、files、versions與 metadata。
- `create_entity`／`update_entity`：只有使用者要求儲存 report且 Preview核准、runtime支援時使用。
- 不修改 live Campaign、Budget、Audience、dashboard source或 performance data。

## Examples

**User:**「做上月 Marketing 月報。」

**Correct behavior:** 解析完整 calendar month／timezone，驗證 KPI definitions、target、prior comparable、quality與 attribution；Executive summary直接回答 Outcome／risk／decision，不把所有 Channel metrics堆成摘要。

## Guardrails

- 不捏造 KPI、target、benchmark、data source、Attribution、forecast、cause或 approval。
- 不把 vanity metric、influenced pipeline或 simple correlation表示為 Business／causal impact。
- 不比較 incompatible periods、definitions、currencies或 cohorts。
- 不隱藏 data gap、tracking change、small sample、late conversion或 reconciliation conflict。
- 不自動調整 Budget、pause／scale Campaign、更新 lifecycle status或發送報告。

## Common Issues

| Issue | Cause | Fix |
|---|---|---|
| 同名 KPI 數字不同 | Formula／source／window不同 | 建 metric dictionary與 reconciliation。 |
| 本月看似下降 | Partial month比 full month | 使用 comparable partial或標 incomplete。 |
| Pipeline被重複加總 | Multi-touch重複 credit | 去重 Opportunity並說明 model。 |
| Insight變成因果 | 只有同時變化 | 標 Hypothesis並設 experiment／validation。 |
| 報告很長但無決策 | 每個 metric都寫結論 | 只突出影響 Outcome的三至五項。 |
