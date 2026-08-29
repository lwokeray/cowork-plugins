---
name: campaign-strategy-plan
description: 將明確 Marketing objective 轉為完整 Campaign brief，涵蓋 Audience、Journey、Message、Offer、Channel、Content、Budget、KPI、Measurement、Timeline、Risk、Approval 與執行條件。 適用於 Awareness、Demand generation、Retention、Advocacy 與整合 Campaign；不適用於單篇內容、單一 Event、已上線 Campaign 診斷或自動投放。
metadata:
  author: lwokeray
  version: 1.0.1
license: MIT
---

# Campaign Strategy Plan

## Overview

建立可以直接進入審查與執行規劃的 Campaign Brief，不只列 Channel 與 Content idea。計畫必須把 Business outcome、Audience behavior、Message proof、Offer、Channel role、Budget assumption、KPI definition、Measurement limitation、Dependency 與 Approval 串成一條可驗證邏輯。

## When to Use

- 規劃 Brand awareness、Demand generation、Lead nurture、Retention 或 Advocacy campaign。
- 將 Product、Market、Event 或 Content objective 轉成 integrated campaign。
- 重建缺少 Audience、KPI、Budget 或 Decision gate 的既有 Campaign brief。
- 建立 multi-channel calendar、asset map、owner handoff 與 measurement plan。
- 準備 Campaign review、Budget request 或 cross-functional kickoff。

## When NOT to Use

- 單一 Product launch operating plan → `product-launch-marketing`
- 單一 Event／Webinar → `event-webinar-marketing`
- 產出完整內容 → `marketing-content-creation`
- 已執行 Campaign 的績效診斷 → `campaign-optimization-review`
- 建立 Planner 工作與 register → `marketing-work-management`

## Quick Start

1. 確認 Campaign goal、Audience、region、time window、offer、budget boundary 與 decision owner；資訊不完整時採可逆假設建立草案並標示。
2. 用 `ask` 尋找 approved Brand、prior Campaign、Audience research、Customer evidence、available assets、Budget／KPI snapshot。
3. 以 `fetch`／`fetch_blob` 驗證重大 claim、benchmark、owner、date、approval 與版本。
4. 依 `Objective → Audience → Message → Offer → Channel → Content → Measure` 建立完整 brief。
5. 交付 Strategy、calendar、asset/dependency map、measurement、risk、approval gates 與 first 30-day execution view；預設不寫入或啟動 Campaign。

## Core Instructions

### 1. Establish campaign control fields

先建立：Campaign name、Status、Owner、Decision owner、Region／language、Start／End、Launch date、Budget status、Audience data status、Brand／Legal／Privacy approvers、source baseline 與 version。

若多份 Brief 存在，先找 approved baseline；沒有時標 `Draft`。Chat message、會議邀請或檔名含 Final 都不等同正式 approval。

### 2. Define the outcome and objective

Campaign objective 必須包含：

- Business／Marketing outcome。
- Target behavior：Audience 要做什麼改變。
- Primary KPI 與 definition。
- Baseline、target、deadline 與 measurement source。
- In-scope／out-of-scope。

依目的選擇 primary measurement：

| Objective | Primary behavior | Candidate primary KPI |
|---|---|---|
| Awareness | 看見、記住、搜尋 | Qualified reach、brand lift、share of search；不可只用 impressions |
| Consideration | 深入了解、互動 | Engaged visit、content completion、event attendance、qualified response |
| Demand | 提交有意義 next step | Qualified conversion、MQL under approved definition、cost per qualified action |
| Retention | 持續使用或回訪 | Re-engagement、adoption、renewal-supporting behavior |
| Advocacy | 願意推薦或共創 | Approved referral、review、testimonial、community contribution |

沒有 baseline 時不要硬設精確 uplift；改用 range、pilot threshold 或先完成 measurement baseline。

### 3. Resolve audience and journey

Audience 需有 evidence-based definition、need、trigger、barrier、proof requirement、journey stage、consent／eligibility 與 exclusion。若只有 Demographics／job title，補上 behavioral／need-state 假設並標示待驗證。

建立 Audience-message matrix：

| Audience / stage | Need / question | Barrier | Core message | Proof | Desired action |
|---|---|---|---|---|---|

不可因受眾「應該」在某平台就直接選 Channel；要用內部 evidence、過往 performance 或 current research 支持。

### 4. Design message and offer

Message hierarchy：

1. Why care now：Audience problem／opportunity。
2. What changes：可理解的 desired outcome。
3. Why believe：Approved proof、specific example 或 credible mechanism。
4. Why us：有 evidence 的 difference。
5. What next：一個與 Journey stage 相符的 CTA。

Offer 需列：Audience value、eligibility、friction、expiry、capacity、terms、fulfillment owner、landing destination 與 measurement event。Discount、guarantee、limited availability 或 incentive 未獲核准時只能列 Candidate。

### 5. Assign channel roles

對每個 Owned／Earned／Paid／Partner channel 說明：Audience fit、Journey role、format、message variant、CTA、frequency、handoff、KPI、cost assumption、owner 與 stop condition。不要用「全渠道曝光」代替策略。

Channel mix 必須形成互補路徑，例如：Paid／Partner 創造 discovery，Landing page 提供 proof，Email nurture 回答後續問題，Event 提供深度互動。若 Journey 無法連接，標出斷點與需要建立的 asset／tracking。

### 6. Build asset and content architecture

列出 Hero asset、supporting content、conversion asset、nurture asset、sales enablement 與 measurement asset。每項包含：Brief、Audience、Message、Proof、Format、Channel、Owner、Due、Dependency、Reviewers、Localization、Accessibility、Status、Definition of done。

內容細節交由 `content-strategy-calendar` 與 `marketing-content-creation`，但 Campaign plan 必須說明每項內容為何存在及在 Journey 中的角色。

### 7. Plan budget and capacity

Budget 分開：Media、Production、Agency／Partner、Event、Technology、Localization、Measurement、Contingency。沒有實際 Budget 時使用比例或 low／base／high scenario，不把通用 industry benchmark 當公司核准數字。

每個 scenario 包含：Spend、Expected reach／actions range、key assumptions、capacity constraint、break-even／stop threshold。ROAS 或 revenue forecast 只有在 Attribution、margin、conversion 與 lag 資料足夠時才計算。

### 8. Design measurement before execution

Measurement plan 至少包含：

- KPI formula、numerator、denominator、time window、source、owner。
- Tracking／taxonomy／UTM or equivalent naming requirements。
- Baseline、target、comparison method 與 reporting cadence。
- Attribution model 與已知盲點。
- Quality gate：duplicate、bot、internal traffic、test data、late conversion。
- Optimization checkpoint 與 pre-agreed Scale／Iterate／Pause criteria。

不要混用 opens、clicks、sessions、leads、MQL、SQL、pipeline 等不同 funnel entity。Privacy 或 platform change 造成 data gap 時明示。

### 9. Build timeline, gates, and risk plan

從固定日期倒排：Research freeze、Brief approval、Asset ready、Legal／Brand review、Localization、QA、Audience／tracking readiness、Launch、Optimization review、Wrap-up。每個 gate 必須有 Owner、Input、Decision、Exit criteria 與 fallback。

風險至少檢查：Audience mismatch、unsupported claim、consent／privacy、asset delay、channel dependency、budget pacing、measurement failure、capacity、brand safety、event／launch change。每項有 Trigger、Impact、Mitigation、Owner、Decision deadline。

### 10. Keep execution gated

本 Skill 預設產出計畫，不建立工作、不寄送、不發布、不上傳 Audience、不提交廣告、不承諾 Budget。若使用者要求儲存 Campaign brief，顯示 destination、baseline、diff、version 與 approval 後，僅在 runtime 支援時使用 `create_entity`／`update_entity`，並以 `fetch` 驗證。

## Output Format

```markdown
# Campaign Brief: [Name]
## Document control and assumptions
## Objective and success definition
## Audience and journey
## Message, proof, offer, and CTA
## Channel strategy
## Asset and content architecture
## Budget and capacity scenarios
## Measurement and attribution plan
## Timeline and decision gates
## Risk register
## First 30-day execution view
## Approvals, unknowns, and out-of-scope
```

## Work IQ Tool Rules

- `ask`：彙整 Brand、Audience、Campaign、meeting、file、budget、KPI 與 learning context。
- `search_paths`、`get_schema`、`fetch`、`fetch_blob`：驗證 source-of-truth 與精確內容。
- `create_entity`／`update_entity`：只用於使用者明確要求儲存的 Campaign brief 草稿，需 Preview、核准與結果驗證。
- 不使用 `do_action` 啟動 Campaign、寄送、發布或提交任何外部平台。

## Examples

**User:**「規劃 Q4 AI governance demand-gen Campaign。」

**Correct behavior:** 建立可驗證 Objective、Audience-message matrix、Channel role、asset map、Budget scenarios、MQL definition、Attribution limitation、gates 與 risks；不直接產生一串社群貼文當成完整計畫。

## Guardrails

- 不捏造 Audience insight、Market number、Customer proof、Budget、Benchmark、conversion 或 approval。
- 不用 dark pattern、fake urgency、未同意名單或敏感屬性 targeting。
- 不以 impressions、open rate 或 raw leads 單獨宣稱 Business success。
- 不自動啟動 Campaign、上傳 Audience、承諾 Spend、寄信或發布內容。
- 不把 Plan status 誤稱 Live，也不把 Draft claim 誤稱 Approved。

## Common Issues

| Issue | Cause | Fix |
|---|---|---|
| 計畫只有 Channel list | 未建立 Outcome 與 Journey | 先完成 Objective／Audience／Message chain。 |
| KPI 很多但不能決策 | 無 primary KPI 與 threshold | 設一個 primary KPI、公式與 gate。 |
| Budget 看似精準 | 沒有歷史或 attribution | 改用 scenario 與 assumption range。 |
| Content calendar 無依賴 | 未從固定日期倒排 | 加入 asset、review、tracking、localization gates。 |
| Lead volume 高卻無品質 | MQL 定義缺失 | 建立 approved qualification 與 handoff criteria。 |
