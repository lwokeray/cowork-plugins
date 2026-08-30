---
name: product-launch-marketing
description: 建立 Product、Feature、Service 或 Market launch 的 Launch tier、Audience、Positioning、Messaging、Proof、Availability、Asset、Channel、Readiness、Embargo、Enablement、Timeline、Risk、Measurement 與 Decision gates。 適用於新產品、重大功能、區域上市與版本發佈；不適用於自行宣告上線、捏造 Roadmap、執行 Product deployment 或直接發布。
metadata:
  author: lwokeray
  version: 1.0.1
license: MIT
---

# Product Launch Marketing

## Overview

將 Product readiness 與 Go-to-market communication 連成可驗證 Launch plan。Marketing Launch 不能早於 Product、Support、Security、Privacy、Legal、Pricing、Availability、Sales／Partner enablement 與 measurement readiness；任何一項未知都要進 Gate／Risk，而不是以強勢文案掩蓋。

## When to Use

- 新 Product、Feature、Service、Pricing／Packaging、Region 或 Partner launch。
- 建立 Launch tier、Positioning、Announcement、Asset、Channel 與 Enablement plan。
- 準備 Launch readiness review、Go／Conditional Go／No-Go decision pack。
- 規劃 Embargo、Early access、Beta、GA、phased rollout 或 deprecation communication。
- 整理 Launch performance、adoption、feedback 與 post-launch learning。

## When NOT to Use

- Product deployment、release engineering、feature flag 或 production change。
- 在 Product／availability／legal evidence 未確認時對外宣布。
- 普通 always-on Campaign → `campaign-strategy-plan`
- 單一 Event launch activity → `event-webinar-marketing`
- 直接發布 Press release、Social、Email、Website 或 Partner message。

## Quick Start

1. 確認 Launch object、tier、Audience、region、language、release stage、target date、availability、pricing、embargo、owners 與 required gates。
2. 用 `ask` 尋找 Product spec、decision records、Roadmap、release notes、security／privacy／legal／support guidance、pricing、Brand、Customer evidence 與 prior launch learning。
3. 用 `fetch`／`fetch_blob` 驗證版本、source owner、approval、date、availability、claim、known limitation 與 readiness status。
4. 建立 Positioning、message／proof、launch moments、asset／channel、enablement、readiness matrix、timeline、risk、measurement 與 fallback。
5. 交付 Decision-ready Launch plan 與完整 copy requirements；保持 Draft／Preview，不執行 Launch。

## Core Instructions

### 1. Assign a launch tier

Launch tier 依 Audience impact、strategic importance、behavior change、market／region breadth、commercial change、risk、support load、number of channels 與 executive visibility決定。不要只依 Product team 的興奮程度。

每個 tier 說明 required assets、approvers、lead time、measurement、enablement 與 decision cadence。若組織已有 tier framework，必須使用 canonical version，不另創平行標準。

### 2. Establish release truth

Launch control 必須列：

- Product／Feature official name、version、release stage。
- Availability date、region、language、tenant／plan／device／role eligibility。
- Pricing／packaging／license、trial／preview terms。
- Capabilities、known limitations、dependencies、migration／support path。
- Security、Privacy、Compliance、Legal、Accessibility status。
- Product／Engineering／Support／Marketing／Sales／Partner owners。
- Embargo、public／private status、source-of-truth URL／version。

Roadmap intent、target date、preview availability、GA 與 public documentation 是不同狀態。不得把未核准 target date 寫成承諾。

### 3. Define launch audiences and jobs

分開 User、Buyer、Admin、Developer、Partner、Analyst／Media、Internal field、Support 與 existing customer。對每個 Audience 記錄：Need、current workflow、what changes、benefit、risk／barrier、proof、required action、communication timing、support path。

Audience 不需要知道所有 feature；他們需要知道對自己會改變什麼、何時、是否需要行動、有哪些限制、去哪裡取得協助。

### 4. Create positioning and message hierarchy

建立：Category／problem frame、Launch promise、three supporting messages、proof／mechanism、qualification／limitation、Audience-specific value、competitive implication、CTA。每項 claim 回到 Product／Customer／Research source。

Press／Analyst 需要 factual newsworthiness；Existing customer 需要 impact／migration；Buyer 需要 outcome／proof／terms；Admin／technical Audience 需要 prerequisites／controls／known limits；Field／Partner 需要 qualification、what not to say 與 escalation path。

### 5. Design launch moments

依實際 release model設計：Internal readiness、Private preview、Public preview、Announcement、GA、Regional wave、Partner moment、Post-launch education。每個 moment 有 Audience、message、availability truth、asset、channel、owner、embargo、CTA、support、measurement 與 stop／delay condition。

不要在同一天塞入所有 asset。依 Audience Journey安排 teaser（若真實且有價值）、announcement、deep-dive、proof、how-to、FAQ、customer story 與 adoption content。

### 6. Build asset and channel plan

可能資產：Messaging guide、FAQ、Web／Landing page、Blog、Release notes、Press release、Email、Social、Demo／video、Event、Sales／Partner enablement、Support article、Admin／migration guide、Executive brief、Analyst pack、Customer story、Measurement dashboard。

每項含 Audience、purpose、owner、source inputs、claim／proof、draft due、reviews、localization、accessibility、publish owner、dependencies、expiry／update trigger。Marketing copy 不得取代必要 technical／support documentation。

### 7. Build readiness gates

| Gate | Required evidence | Owner | Decision | Exit criteria |
|---|---|---|---|---|
| Product | Scope／quality／known limits／date | Product／Engineering | Go／Conditional／No-Go | Signed release truth |
| Commercial | Pricing／packaging／terms | Finance／Commercial | Approved | Public terms ready |
| Security／Privacy／Legal | Claims、data、region、terms | Relevant owners | Approved／conditions | Conditions embedded |
| Support／Operations | Docs、training、incident／escalation | Support／Ops | Ready | Coverage and owner |
| Marketing | Message、assets、Brand、localization | Marketing | Ready | Critical assets approved |
| Measurement | Events、baseline、dashboard owner | Analytics | Ready | Success signals testable |

Chat approval、meeting attendance 或 file status 不代表 gate passed。Gate evidence 必須可追溯。

### 8. Plan embargo and external coordination

列出 Embargo scope、who can access、approved language、media／partner briefing date、asset watermark／sharing、time zone、leak／early-post response、change／delay protocol。不得將 embargoed information 放入廣泛 Teams channel、公開 link 或非必要 calendar body。

### 9. Prepare contingency communications

對 Delay、scope reduction、regional limitation、known issue、pricing change、asset／partner delay、support overload、negative feedback 與 rollback 準備 Trigger、decision owner、Audience、message principle、channel、time、next update。語氣必須 transparent、specific、accountable，不轉成 promotional copy。

### 10. Define measurement and learning

區分：Announcement reach、qualified engagement、trial／activation、feature adoption、support burden、customer sentiment、partner enablement、commercial impact。保留 baseline、cohort、eligibility denominator、lag、Attribution limitation 與 quality guardrails。

Post-launch review 需比較 planned vs actual、segment／region、known issue、content performance、support signals、adoption blockers、what to scale／fix／retire。Correlation 不等於 Launch caused revenue。

### 11. Keep launch execution gated

本 Skill 不發布、不發送、不更改 Roadmap、不宣布 GA、不移除 Embargo、不啟用 Product。要求儲存 plan 時，需 destination、baseline、version、diff 與核准；只使用 runtime 支援的 `create_entity`／`update_entity`，並以 `fetch` 驗證為 Draft／current state。

## Output Format

```markdown
# Product Launch Marketing Plan
## Launch control and tier
## Release truth and availability
## Audience and jobs
## Positioning, messages, proof, and limitations
## Launch moments
## Asset and channel plan
## Readiness gate matrix
## Enablement and support
## Embargo and external coordination
## Timeline, dependencies, and contingency
## Measurement and post-launch learning
## Decision: Go / Conditional Go / No-Go recommendation
```

## Work IQ Tool Rules

- `ask`：彙整 Product、Roadmap、meetings、files、approval、support、pricing、Campaign 與 learning。
- `search_paths`、`get_schema`、`fetch`、`fetch_blob`：驗證 exact release truth、version、date、owner 與 content。
- `create_entity`／`update_entity`：僅保存核准的 Launch plan 草稿；不變更 Product state 或發布。
- 不使用 `do_action` 發布 Announcement、Email、Calendar blast 或 external post。

## Examples

**User:**「規劃新 AI Agent 功能 GA Launch。」

**Correct behavior:** 先驗證 GA／eligibility／pricing／security／known limitations，建立 Audience-specific messages、assets、gates、support、measurement 與 delay fallback；若 Product gate 未通過，給 Conditional／No-Go 而非照常宣傳。

## Guardrails

- 不捏造 Product capability、GA date、Region、Price、Roadmap、Customer proof、Certification 或 gate approval。
- 不洩露 embargoed／confidential content，不把 preview 寫成 GA。
- 不自行執行 launch、發布、寄送、更新 roadmap 或啟用功能。
- 不隱藏 known limitation、eligibility 或 required action。
- 不讓 Marketing deadline 覆蓋 Security、Privacy、Legal、Support 或 Product gate。

## Common Issues

| Issue | Cause | Fix |
|---|---|---|
| Launch date 有了但 eligibility 不明 | 只看 Roadmap | 建 release truth matrix。 |
| 訊息對所有人一樣 | 未拆 Audience job | 建 role-specific impact／CTA。 |
| 所有 gate 都顯示 Green | 以口頭狀態代替證據 | 要求可追溯 exit criteria。 |
| 宣傳先於 Support docs | 未倒排 dependencies | 將 support／FAQ 納入 critical gate。 |
| Reach 高但 adoption 低 | 只量 announcement | 加 eligibility cohort、activation、support signal。 |
