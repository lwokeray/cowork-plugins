---
name: cycle-planning
description: |
  Plan and review a repeating team cycle using capacity, historical throughput, issue readiness,
  dependencies, carryover, buffer, and a clear cycle goal. Use for sprint or iteration scope,
  commitment, rollover, cooldown, and review. Do not use for project estimation methodology,
  release roadmaps, or target-date promises.
---

# Cycle Planning

## Overview

Cycle planning creates a realistic short-term team commitment around one useful goal. It balances
ready work with actual capacity, operational responsibilities, dependencies, uncertainty, and learning.
It is not an exercise in filling every available hour.

## When to Use

- The team is selecting ready issues for an upcoming sprint or iteration.
- Capacity, historical throughput, dependencies, carryover, or cut scope must be reviewed.
- A completed cycle needs commitment-versus-result analysis.

## When NOT to Use

- Requirements need effort estimates before planning → `project-sizing-guide`.
- Work needs issue readiness first → `issue-shaping`.
- The user is planning releases around user journeys → `story-map-builder`.
- The object is a one-time multi-milestone project → `project-ops`.

## Required Inputs

Resolve team, cycle window, goal, candidate issues, readiness, estimates, historical throughput/velocity, usable capacity, PTO, support/on-call load, meetings, technical-health allocation, dependencies, carryover, buffer policy, and commitment owner.

Use ranges when inputs are incomplete. Nominal headcount is not usable capacity.

## Workflow

1. **Read context**: Current/upcoming cycle, prior completed cycles, candidate and carryover issues, estimates, dependencies, PTO, and non-feature load.
2. **Check issue readiness**: Require owner/team, acceptance criteria, estimate status, dependency state, and validation path.
3. **Calculate usable capacity**: Start from documented team capacity or historical throughput, then deduct known unavailable time and required buffer.
4. **Define one cycle goal**: Express the outcome the team intends to advance, not a list of tasks.
5. **Select commitment**: Build `committed`, `stretch`, and `cut_or_deferred` sets. Do not consume buffer with stretch work.
6. **Validate dependencies**: Critical dependencies need owners, need-by conditions, and a fallback or explicit risk decision.
7. **Handle carryover**: Record cause, remaining work, re-estimate need, and whether to roll, split, descoped, or return to backlog.
8. **Run commitment check**: Confirm goal coverage, capacity fit, work mix, risk concentration, and decision owner.
9. **Review completed cycle**: Compare goal, committed/completed work, carryover, unplanned work, blocked time, quality, and outcome signals.
10. **Preview mutations**: Route cycle assignment, scope, estimate, or status changes through `governance`.

## Detailed Planning Instructions

### 1. Review the starting position

Read the previous cycle result, current carryover, unplanned work, incidents, support load, upcoming
leave, known meetings, and candidate backlog. Look for recurring causes of missed commitments rather
than treating the next cycle as a clean slate.

### 2. Establish usable capacity

Prefer recent throughput from comparable cycles or a team-maintained capacity view. Adjust for actual
availability, on-call and support duties, holidays, onboarding, required maintenance, and expected
interrupts. State the unit and calculation plainly. Keep a buffer based on observed variability.

### 3. Set the cycle goal

Write one outcome the team can evaluate at the end. The goal should explain why the selected work
belongs together. If candidates support unrelated goals, make the trade-off visible rather than hiding
it in a long task list.

### 4. Check candidate readiness

For every potential commitment confirm the problem, acceptance boundary, responsible team, estimate
status, dependency state, and validation path. Return unclear work to `issue-shaping`. A high priority
does not make an issue ready.

### 5. Select commitment and stretch work

Choose the smallest set that advances the goal within the usable capacity range. Reserve stretch work
for optional pull-in after committed work and risk conditions are healthy. Identify what is deliberately
cut and why.

### 6. Resolve dependencies and carryover

For each critical dependency name the owner, needed condition, timing, warning trigger, and fallback.
For carryover, identify remaining work and the cause: scope growth, underestimated complexity, blocked
time, interruptions, quality work, or changing priorities. Re-estimate or split when the remaining work
no longer matches the original estimate.

### 7. Confirm the commitment

Review the goal, work mix, capacity, buffer, concentrated risks, and unresolved decisions with the
commitment owner. Distinguish team commitment from external delivery promises.

### 8. Review the completed cycle

Compare the goal and committed work with what actually happened. Record completed value, carryover,
unplanned work, blocked time, defects or quality signals, and outcome evidence. Identify one or two
changes to improve future planning; do not judge success by issue count alone.

## User-Facing Plan

Present the cycle goal, capacity basis and buffer, committed work with goal contribution, stretch work,
deferred work, carryover treatment, dependencies, risks, decisions required, and confidence. For a
review, add planned versus observed results and concrete improvements for the next cycle.

## Capacity Rules

- Use one consistent unit within a calculation.
- Historical throughput is descriptive, not a guarantee.
- Carryover consumes capacity and must not be counted as free.
- Include support, maintenance, interrupts, and technical health explicitly.
- Preserve a buffer appropriate to observed uncertainty; state the value and basis.
- Do not convert uncertain estimates into a fixed delivery commitment.

## Examples

### Too many candidates

Rank work by contribution to the cycle goal, readiness, dependency timing, and capacity fit. Move the
remainder to deferred or stretch; do not make the committed list equal the entire backlog.

### Repeated carryover

Investigate whether the item is too large, frequently interrupted, dependent on another team, or
poorly shaped. Split or re-estimate it and address the cause instead of rolling it unchanged again.

## Common Issues

| Problem | Correct response |
|---|---|
| Nominal headcount is used as capacity | Use real availability and historical throughput |
| Buffer is filled with stretch work | Preserve buffer for uncertainty and interrupts |
| Cycle goal is a list of issues | Express the user or delivery outcome connecting them |
| Membership is communicated as a release promise | Separate internal commitment from external dates |

## Quality Gate

- Every committed issue is ready or explicitly accepted as a risk.
- Capacity source, deductions, buffer, and unit are visible.
- Stretch work is distinguishable from commitment.
- Carryover and unplanned work are represented honestly.
- The cycle goal can be evaluated independently of issue count.

## Guardrails

- Do not maximize utilization at the expense of buffer or operational work.
- Do not place every candidate item in the cycle.
- Do not treat cycle membership as a customer or external date commitment.
- Do not mutate cycle scope or assignments without approval and tool confirmation.
