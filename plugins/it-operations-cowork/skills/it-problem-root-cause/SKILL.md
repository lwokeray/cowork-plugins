---
name: it-problem-root-cause
description: |
  Performs evidence-based IT problem management and root-cause analysis for recurring incidents,
  major incidents, chronic degradation, unknown errors, and systemic operational failures. Builds
  timelines, distinguishes trigger, contributing factors and root control failures, tests causal
  claims, creates known-error and workaround records, and assigns preventive actions. Use for RCA,
  5 Whys, blameless postmortems, recurring tickets, trend analysis, permanent fixes, or “why did
  this keep happening?”.
license: MIT
metadata:
  author: lwokeray
  version: "1.0.2"
---

## 執行前提與交付方式

本 Plugin 提供工作方法，不會自行授予資料存取或系統操作能力。下文列出的 Work IQ、MCP 或應用操作，僅在本次工作環境實際提供對應工具、連線與使用者權限時適用；不得依工具名稱猜測路徑、欄位或成功結果。

沒有即時工具時，可用使用者提供或已授權匯出的資料完成本 Skill 的分析與草稿，保留資料日期、版本與無法即時驗證的範圍。政策拒絕或權限不足時停止該操作，不透過其他帳號、工具或瀏覽器繞過；仍交付可完成的部分。

使用者要求可下載的草稿文件時，完成該文件屬於所請交付物；「草稿」或「不要發布」不等於禁止產生供本人審閱的新檔。明確要求只讀或不建立檔案時遵守其限制。修改共用原檔、寫入正式系統、寄送、排程與發布，仍依後文的目標、差異、核准及執行後驗證規則處理；產生草稿不代表完成這些動作。

## Overview

Produce a blameless, evidence-backed explanation and prevention plan. Do not convert temporal correlation, a recent change, or an individual mistake into an unsupported root cause.

## Inputs

- Incident records and timelines
- Logs, metrics, traces, alerts, audit events, configuration, and deployment history
- Architecture and dependency evidence
- Workarounds, recovery actions, and their measured effects
- User/business impact and missed detection opportunities
- Interviews clearly labeled as reported evidence

## Workflow

1. Define the problem statement with affected service, undesirable behavior, scope, and time window.
2. Build a normalized timeline using absolute timestamps and source references.
3. Separate detection, impact, escalation, intervention, recovery, and recurrence.
4. Identify the direct technical failure, trigger, enabling conditions, control gaps, and organizational contributors.
5. Build a causal chain. For each link, record supporting evidence, counterevidence, and unresolved fact.
6. Use 5 Whys only as a questioning aid; stop where evidence stops.
7. Test alternate explanations against the timeline and system behavior.
8. Identify why monitoring, redundancy, change control, testing, documentation, or ownership did not prevent or shorten impact.
9. Record the known error and safe workaround when the permanent correction is not ready.
10. Create corrective and preventive actions with owners and measurable completion evidence.
11. Validate that proposed actions break a causal link rather than merely add documentation.
12. Schedule effectiveness review after implementation.

## Causal Vocabulary

- `Trigger`: Event that initiated this occurrence
- `Direct cause`: Immediate technical condition producing the failure
- `Contributing factor`: Increased probability, duration, or impact
- `Control failure`: Expected prevention, detection, containment, or recovery control did not work
- `Root cause`: Deepest actionable system condition supported by evidence
- `Unknown`: Material causal fact not established

Avoid “human error” as a root cause. Identify the design, process, interface, staffing, training, or control condition that allowed an ordinary action to cause disproportionate failure.

## Action Quality

Strong actions change the system:

- Remove a hazardous dependency
- Add enforced validation or policy
- Improve isolation, redundancy, failover, backup, or rollback
- Add actionable monitoring tied to ownership
- Automate a safe control
- Reduce privilege or blast radius
- Test the failure mode in pre-production

Weak actions such as “be careful,” “monitor closely,” or “retrain staff” require a measurable control or verification step.

## Output Contract

Return:

1. `Problem statement`
2. `Impact`
3. `Timeline`
4. `Causal analysis` — trigger, direct cause, contributing factors, control failures, root cause or unknown
5. `Evidence and counterevidence`
6. `Known error and workaround`
7. `Corrective actions` — owner, priority, due date/condition, verification
8. `Effectiveness review`

Do not include hidden reasoning, blame language, invented evidence, or unsupported certainty.

## Guardrails

- Do not modify production while performing RCA unless separately requested and approved.
- Do not rewrite the incident timeline to fit a preferred explanation.
- Do not close proof gaps with assumptions.
- Do not expose sensitive security details beyond the intended audience.
- Keep incident restoration metrics separate from permanent-fix completion.
- An action is not complete until the control exists and is verified.

## Common Issues

| Issue | Correction |
|---|---|
| “The deployment caused it” | Prove the causal mechanism and affected path |
| 5 Whys becomes speculation | Stop and mark the next fact unknown |
| Many possible causes | Use discriminating evidence and rank confidence |
| Action only says “document” | Add enforced prevention, detection, or recovery control |
| Recurrence after closure | Reopen the problem and evaluate action effectiveness |
| Sensitive security cause | Produce restricted technical detail and a safe stakeholder version |
