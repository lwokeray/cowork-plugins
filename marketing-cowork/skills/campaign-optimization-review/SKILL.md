---
name: campaign-optimization-review
description: >-
  診斷已執行 Campaign 的 Audience、Delivery、Creative、Message、Offer、Landing、Journey、Conversion、Lead quality、Budget、Attribution 與 Guardrail，建立 evidence-based Hypotheses、Prioritized tests 與 Scale／Iterate／Pause／Stop 建議。
  適用於 Campaign control、underperformance、budget pacing 與 next-round planning；不適用於未經核准直接變更 Live campaign、用相關性宣稱根因或在資料不成熟時追逐 Winner。
metadata:
  author: lwokeray
  version: "1.0.0"
---

# Campaign Optimization Review

## Overview

從 Campaign objective 與 Funnel evidence 找出「真正卡在哪裡、哪個解釋最可信、下一個最小可驗證動作是什麼」。Skill 不會用一張 KPI 表就叫團隊換文案，也不會把 Channel、Audience、Creative、Offer、Landing與 Tracking同時改掉；先定位 failure mode，再建立 controlled action。

## When to Use

- Campaign／Channel／Creative／Landing／Email／Event 表現偏離 target。
- Budget pacing、frequency、lead quality、conversion、unsubscribe／complaint等 guardrail需要決策。
- 找出 Scale／Iterate／Pause／Stop、resource reallocation或 next test。
- 比較 Creative／Audience／Channel／Segment／Region／period performance與 data maturity。
- 準備 Weekly optimization review或 Campaign control-room decision pack。

## When NOT to Use

- 尚未建立 Campaign objective、Audience、KPI或 measurement baseline → `campaign-strategy-plan`
- 只需要正式績效報告 → `marketing-performance-report`
- 需要嚴謹 A/B inference → `marketing-experiment-design`
- 直接操作 Live Ad／Email／Website／Budget／Audience。
- 低 sample、tracking failure或 incomplete conversion lag卻要求確定 Winner。

## Quick Start

1. 確認 Campaign、objective、primary KPI、guardrails、window、maturity、targets、budget、Audience與可調整範圍。
2. 用 `ask` 尋找 Campaign brief、performance、creative、landing、Audience、budget、lead feedback、meeting decisions與 incidents；以 `fetch`／`fetch_blob`驗證。
3. 先做 data quality／measurement gate，再畫 Funnel與 segment／channel／creative差異。
4. 建立 candidate causes，依 Evidence／Impact／Testability排序，不將 correlation當 cause。
5. 交付 Scale／Iterate／Pause／Stop recommendation、controlled actions、owners、approval與 review date；不執行變更。

## Core Instructions

### 1. Re-anchor to the campaign contract

先取得 original Objective、Audience、Offer、Message、Channel role、Primary KPI、guardrails、Budget、timeline、Attribution、optimization cadence與 pre-agreed thresholds。若 Brief不存在或版本不明，建立 current observed contract並標 `Baseline reconstruction`，不要假裝團隊原本這樣規劃。

### 2. Pass the measurement gate

優化前檢查：

- Data cutoff、conversion／sales lag、partial period。
- Tracking／event／UTM／naming、duplicate、bot／test、internal traffic。
- Currency／spend、refund、late events、status reversal。
- Audience／placement／creative delivery是否可比較。
- Platform learning phase、frequency、inventory／bid／budget constraint。
- Privacy／tracking change、site／form／release change。
- Experiment randomization／SRM（若宣稱測試）。

若 data quality `Blocked`，第一優先是修復 measurement；不可用更多 Creative變體補救。

### 3. Locate the funnel failure

建立 Stage map：Eligible Audience → Delivered／Reach → Engaged／Click → Landing／Content consumption → Qualified action → MQL／accepted lead → Pipeline／Customer（依 scope）。每階段列 count、rate、target、prior comparable、segment／channel、lag與 quality。

典型 signal與候選問題：

| Signal | Candidate areas—not automatic cause |
|---|---|
| Low delivery／reach | Audience size、policy／approval、budget／bid、inventory、deliverability |
| Low CTR／engagement | Audience-message fit、Hook、format、placement、frequency |
| Click high、landing action low | Message match、page speed／UX、proof、form／offer、tracking |
| Leads high、quality low | Eligibility、offer incentive、qualification、source／fraud、sales criteria |
| Cost rising | Competition、mix、frequency、quality threshold、conversion lag |
| Unsubscribe／complaint high | Consent、frequency、expectation、message／personalization |

每個 Candidate cause 都需要 supporting／contradicting evidence與最小 validation。

### 4. Compare like with like

比較需對齊 Platform／placement、Audience、region、time、budget／bid、offer、landing、creative age、conversion window與 sample。Mix shift可能讓 aggregate KPI變化，即使每個 segment未變；必要時拆解 composition。

不要跨 Channel直接比較 CTR／CPC就宣告預算應移動；應比較各 Channel對 Journey role與 qualified outcome的貢獻。

### 5. Diagnose creative and message

對每個 Creative記錄 Angle、Hook、Message、Claim／Proof、Format、CTA、Audience、Placement、Frequency、Age、Landing match與 metrics。找 pattern時區分 delivery selection與 causal effect；algorithm給某 variant更多曝光不證明它更好。

使用 `voice-of-customer-synthesis` 類 evidence檢查 Customer language與 objection；使用 approved Brand／Claim基準。不要因 CTR低就加入更誇大、恐懼或 fake urgency的 copy。

### 6. Diagnose audience, offer, and journey

- Audience：Eligibility、need state、stage、suppression、overlap、frequency、consent與 size。
- Offer：Value、terms、friction、capacity、price／discount approval、Audience fit。
- Landing／journey：Message match、proof、CTA expectation、form、mobile、accessibility、follow-up／handoff。
- Lead：Definition、dedupe、consent、routing、acceptance、lag與 feedback。

Optimization不可只集中在 Ad／Email top-of-funnel而忽略後段 quality與capacity。

### 7. Build evidence-ranked hypotheses

每項使用：

`Observation → Candidate cause → Supporting evidence → Contradicting evidence → Confidence → Smallest test/change → Primary metric → Guardrail → Decision date`

Confidence只使用 High／Medium／Low。沒有 supporting evidence的想法列 `Idea`，不列根因。一次優先處理最多三個高影響 hypotheses。

### 8. Choose Scale, Iterate, Pause, or Stop

- `Scale`：Outcome／quality成熟且 guardrails穩定；需 incremental budget／capacity／frequency／diminishing-return plan。
- `Iterate`：有明確可測 hypothesis，保留其餘因素，設定 sample／window。
- `Pause`：measurement／approval／landing／capacity／policy blocker可修復，暫停避免浪費或傷害。
- `Stop`：offer／Audience／channel fit弱、guardrail harm、policy／brand risk或 opportunity cost高。
- `Monitor`：data尚未 mature、lag未完成或 sample不足。

Recommendation需列 Evidence、Expected impact range（只有有依據）、Effort、Risk、Owner、Approval、Done when與Rollback。

### 9. Reallocate resources cautiously

Budget／resource shift先看 marginal qualified outcome，不只 average CPA／ROAS。保留 testing／learning需要、capacity、frequency、channel role與 attribution uncertainty。提供 Scenario，不直接修改：

| Scenario | Change | Evidence / assumption | Expected outcome range | Guardrail | Decision owner |

### 10. Verify after change

每個 action有 implementation check、measurement window、data cutoff、success／harm threshold與 next review。若同時改多項，承認無法辨識單一 cause；高價值 decision應改用 controlled experiment。

## Output Format

```markdown
# Campaign Optimization Review
## Campaign contract and data maturity
## Executive decision
## Funnel and budget diagnosis
## Creative / audience / offer / journey findings
## Evidence-ranked hypotheses
| Priority | Observation | Hypothesis | Evidence for / against | Confidence | Test / action | Metric / guardrail |

## Scale / Iterate / Pause / Stop recommendations
## Budget / resource scenarios
## Owners, approvals, rollback, and review dates
## Unknowns and measurement repairs
```

## Work IQ Tool Rules

- `ask`：尋找 Campaign brief、performance、workbooks、creative、lead feedback、meetings、incidents與 decisions。
- `search_paths`、`get_schema`、`fetch`、`fetch_blob`：驗證 exact data、source、version、owner與 status。
- Read-only；不使用 mutation/action調整 live Campaign、Budget、Audience、Email、Ad或 Website。

## Examples

**User:**「這週 CPA 上升 30%，要不要停？」

**Correct behavior:** 檢查 partial period、lag、spend／conversion definition、mix、tracking、frequency與 lead quality，給 Pause／Monitor／Iterate的 evidence-based gate；不因單週 aggregate變化就自動停。

## Guardrails

- 不捏造 data、target、benchmark、cause、Attribution、expected impact或 approval。
- 不用 correlation、aggregate mix或 algorithm delivery宣稱 Creative causal winner。
- 不為追 KPI使用誇大 Claim、dark pattern、不當 Audience或過度 frequency。
- 不自動 scale、pause、stop、reallocate Budget、upload Audience或改 Website。
- Guardrail harm、policy／privacy／brand blocker優先於 performance improvement。

## Common Issues

| Issue | Cause | Fix |
|---|---|---|
| 每次都換文案 | 未定位 Funnel failure | 先做 measurement與stage diagnosis。 |
| Aggregate好但 lead差 | 只看 top-funnel | 加 quality／acceptance／lag。 |
| Winner拿到更多曝光 | Algorithm selection | 用 controlled test或相符比較。 |
| 一次改五件事 | 急於改善 | 優先三個 hypotheses，controlled change。 |
| 預算移到低 CPA Channel | 忽略 Channel role／quality | 看 marginal qualified outcome與 attribution。 |
