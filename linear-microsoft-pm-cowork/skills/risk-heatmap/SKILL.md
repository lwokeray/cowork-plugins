---
name: risk-heatmap
description: |
  Create and maintain a PM risk register with explicit risk events, probability and impact basis,
  exposure, owner, response strategy, actions, triggers, review dates, and residual risk; optionally
  generate a self-contained HTML probability-impact matrix. Use for project, release, initiative,
  vendor, or dependency risk reviews. Do not use for active issues or unsupported risk scoring.
license: MIT
---

# Risk Register and Heatmap

## Overview

This skill helps a team recognize uncertain events before they become active problems, decide how to
respond, and keep ownership visible. The register is the working management record; the heatmap is only
a visual view of the same information.

## When to Use

- A project, initiative, release, dependency, vendor, or product decision requires a risk register.
- Risks need consistent probability/impact scoring, ownership, treatment, and review cadence.
- The user requests a risk matrix or self-contained HTML heatmap.

## When NOT to Use

- The event has already happened and requires active issue/blocker management.
- The user needs incident root-cause analysis rather than prospective risk management.
- Probability and impact cannot be estimated even qualitatively; capture an uncertainty/open question first.

## Required Inputs

`object`, `risk_scope`, `assessment_date`, `risk_event`, `cause`, `consequence`, `category`, probability basis, impact basis, owner, existing controls, response strategy, response actions, trigger/early warning, review date, status, and source evidence.

## Risk Statement

Write risks as:

> Because of **cause**, **uncertain event** may occur, resulting in **consequence**.

Do not write current defects, vague concerns, missing tasks, or solutions as risk events.

## Workflow

1. **Define scope and scale**: Confirm the assessed object, time horizon, categories, probability/impact definitions, and risk appetite/escalation threshold.
2. **Identify risks**: Use approved project, dependency, technical, customer, security/compliance, vendor, operational, schedule, cost, and external evidence.
3. **Normalize statements**: Separate cause, uncertain event, and consequence; merge only true duplicates.
4. **Score inherent risk**: Assign probability and impact from evidence or named owner judgment. Record the basis, not just the number.
5. **Review controls**: Record existing preventive/detective controls and their evidence.
6. **Plan response**: Select `avoid`, `mitigate`, `transfer`, or `accept`; assign response owner, actions, due dates, trigger, and contingency.
7. **Score residual risk**: Reassess probability/impact expected after controls/actions; do not assume mitigation reduces both.
8. **Set cadence**: Assign next review date and escalation rule based on exposure and change rate.
9. **Generate artifact**: Use `scripts/generate_risk_heatmap.py` only after schema validation. The HTML is a view; the register remains the source of truth.
10. **Route mutation**: Risk acceptance, owner assignment, escalation, project-health changes, and publication require `governance`.

## Detailed Risk Review

### 1. Set the boundary

Confirm the project or decision being assessed, time horizon, rating definitions, review owner, and
threshold for escalation. Use the organization's scale when one exists. Do not compare scores created
with different definitions as if they were equivalent.

### 2. Gather risks from evidence

Review scope, plan, dependencies, assumptions, decisions, incidents, vendor information, security and
compliance input, customer commitments, operational readiness, staffing, and external conditions. Ask
what uncertain event could prevent the intended outcome—not merely what tasks remain.

### 3. Write precise risk statements

Each statement must identify cause, uncertain event, and consequence. Convert items that have already
happened into issues or blockers and manage them through `project-ops`.

Weak: “API integration risk.”

Useful: “Because the partner has not confirmed rate limits, production traffic may be throttled during
launch, causing failed imports for high-volume customers.”

### 4. Rate from an explicit basis

Record why probability and impact were chosen: historical occurrence, test result, vendor statement,
owner judgment, or comparable work. Consider user, business, schedule, cost, security, compliance, and
reputation impact as appropriate. Do not let dramatic wording substitute for evidence.

### 5. Review current controls

Name controls already operating and the evidence that they work. Distinguish preventive controls from
detection and recovery. Score inherent exposure before controls and residual exposure expected after
effective controls or planned action.

### 6. Choose a response

- **Avoid:** change the plan so the risk no longer exists.
- **Mitigate:** reduce probability or impact.
- **Transfer:** place defined responsibility or financial exposure with another party while retaining
  oversight.
- **Accept:** consciously take the residual exposure with an authorized owner and review condition.

For every material risk, record an owner, action, due date, warning trigger, contingency, and next
review. A vague action such as “monitor closely” is insufficient without what to monitor and when to
act.

### 7. Review movement over time

At each review, note new risks, changed ratings, overdue actions, triggered events, closed risks, and
accepted residual exposure. Close a risk only when the event can no longer occur in the defined period
or has become an issue handled elsewhere.

## User-Facing Result

Lead with the highest exposure and actions requiring attention. Then show the full register in readable
columns: risk statement, basis, current controls, rating, response, owner, action, due date, trigger,
residual rating, and next review. Generate a heatmap when it improves the discussion, never as a
replacement for this context.

## Heatmap Tool

```bash
python3 scripts/generate_risk_heatmap.py --file risks.json --output risk_report.html
```

Read [references/risk-contract.md](references/risk-contract.md) for the five-level scale, register schema, review rules, and risk-versus-issue distinction.

## Examples

### Active blocker disguised as risk

If the vendor has already missed the required delivery, record the missed delivery as an issue. A
remaining uncertain consequence, such as launch delay, may still be recorded as a risk.

### Accepted residual risk

State who accepts it, why further mitigation is disproportionate, what warning trigger applies, and
when acceptance must be reviewed. Do not mark it accepted because no action owner volunteered.

## Common Issues

| Problem | Correct response |
|---|---|
| Register is a list of concerns | Rewrite cause, uncertain event, and consequence |
| High risks have no action owner | Escalate; a color alone does not manage risk |
| Mitigation automatically lowers both ratings | Reassess each dimension based on the actual action |
| Heatmap exposes sensitive detail | Use restricted distribution or a sanitized view |

## Quality Gate

- Each item is an uncertain event, not an active issue or task.
- Probability and impact have defined scales and recorded bases.
- High/critical risk has an owner, strategy, action, due date, trigger, and review date.
- Inherent and residual risk are separate.
- Accepted risk names the accepting authority and review condition.
- Heatmap cells match the register scores.

## Guardrails

- Do not score from emotional language or seniority.
- Do not hide active blockers inside a future-risk register.
- Do not expose confidential project, customer, security, or personnel details in a broadly shared heatmap.
- Do not accept, transfer, close, or escalate risk on behalf of the authorized owner.
