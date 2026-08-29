---
name: project-update
description: |
  Produce a recurring evidence-based project or initiative health update from approved Microsoft 365
  sources, preserving baseline, period changes, risks, dependencies, decisions, asks, audience, and
  publish state. Use for weekly updates, steering reviews, initiative roll-ups, and stale-update checks.
  Do not use for a post-delivery outcome review or general work-summary prose.
---

# Project and Initiative Update

## Overview

A project update tells the audience what changed, whether the intended outcome and plan remain
credible, what needs attention, and which decisions are required. It is not a generic activity recap.
Every important statement should be current, evidence-based, and appropriate for the audience.

## When to Use

- A project or initiative needs its scheduled health update.
- Leadership, engineering, or cross-functional audiences need a period-specific operating view.
- Existing updates are stale, inconsistent, or unsupported by current evidence.

## When NOT to Use

- The user asks whether delivery achieved the intended outcome → `outcome-review`.
- The project itself needs setup or repair → `project-ops`.
- The user only wants meeting minutes or a personal work recap.

## Required Inputs

Resolve object ID/type, update period, owner, audience, cadence, last approved update, health rubric, baseline target/scope/milestones, source locations, known decisions, and publish target.

## Workflow

1. **Recover baseline**: Read the last approved update and current object properties, target, milestones, dependencies, and prior decisions.
2. **Collect deltas**: Find approved evidence created or changed during the period. Mark each item `changed`, `unchanged`, `stale`, or `unknown`.
3. **Validate measures**: Preserve metric definition, baseline, target, observed date, segment, and source.
4. **Calculate health**: Apply the stated rubric to milestone evidence, target variance, dependency slips, scope/quality changes, and update freshness.
5. **Write update content**: Health headline, progress since last update, material changes, risks/challenges, dependencies, next steps, decisions, and asks.
6. **Tailor audience**: Executives receive outcomes/health/risks/decisions; delivery teams receive work/blockers/priority changes; external audiences receive only approved customer-safe statements.
7. **Roll up initiatives**: Preserve individual project health and stale/missing updates; do not hide them in an average.
8. **Review publish gate**: Show recipients/target, exact content, sensitivity, and approval owner before publishing or sending.

## Detailed Update Instructions

### 1. Establish the comparison point

Confirm the reporting period, prior approved update, current scope, target, milestones, health rubric,
and intended audience. Without a baseline, describe current state but do not claim that something
improved or deteriorated.

### 2. Collect only material changes

Review source evidence created or changed during the period. Include milestone movement, completed
user or delivery outcomes, scope and target changes, quality, risks, dependencies, decisions, and
outcome signals. Exclude routine task noise unless it changes health or supports an important claim.

### 3. Determine health before writing the headline

Apply the agreed rubric to current evidence. Explain the strongest reason for the state and what
changed since the last update. If evidence is stale, say no current update. Do not use optimistic prose
to override an at-risk or off-track conclusion.

### 4. Write for the audience

Executives need outcome, health, material change, risk, trade-off, and decision. Delivery teams need
milestones, blockers, dependency actions, and near-term changes. Customer-safe updates must omit
internal debate, confidential details, and unapproved dates.

### 5. Make asks actionable

Every decision or ask should identify the owner, required date or condition, options, recommendation,
and consequence of delay. “Leadership support needed” is not actionable.

### 6. Review before publication

Verify the audience, distribution target, sensitive content, links, health, dates, and approval. Drafting
does not authorize sending. After publication, report the confirmed destination and result.

## User-Facing Update Format

1. Health and one-sentence headline
2. Progress toward the outcome during this period
3. Material changes to scope, target, milestone, quality, or ownership
4. Risks and dependencies with actions
5. Next-period priorities
6. Decisions and help needed
7. Stale or unknown information that affects confidence

Use concise prose, but include enough evidence to make the conclusion trustworthy.

## Health and Staleness Rules

- Missing or stale information yields `no_current_update`, not `on_track`.
- Completed issue count alone cannot establish project health.
- A changed target, lead, milestone, scope, or dependency must be named explicitly.
- Every decision ask must state decision owner, need-by date, options, and no-action consequence.

## Examples

### Work completed but target threatened

Report the completed work, but set health from the missed dependency and target impact. Explain the
recovery action and decision needed instead of using activity to claim on track.

### No current project evidence

Use no current update, list the last reliable observation date, and request the specific milestone or
dependency evidence needed to reassess health.

## Common Issues

| Problem | Correct response |
|---|---|
| Update repeats every completed task | Keep only evidence that changes the operating picture |
| Health differs from project facts | Apply the rubric and explain the evidence |
| Ask has no owner or deadline | Rewrite it as a decision request |
| Draft is assumed to be sent | Require publication approval and confirmation |

## Quality Gate

- The update covers a defined period and baseline.
- Health follows the named rubric and current evidence.
- Material changes and missing information are visible.
- Audience language does not exceed the approved disclosure boundary.
- Publishing is separated from drafting.

## Guardrails

- Do not use prose to conceal target, scope, quality, or dependency deterioration.
- Do not turn proposed dates or decisions into commitments.
- Do not publish, send, or change object health without explicit approval and confirmed execution.
