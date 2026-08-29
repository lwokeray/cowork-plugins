---
name: project-ops
description: |
  Create, inspect, and operate a bounded product or delivery project with outcome, scope,
  lead, teams, milestones, dependencies, health, target window, and operating cadence.
  Use for project setup, milestone management, multi-team coordination, project views, and
  weekly operations. Do not use for portfolio strategy, cycle commitment, or a single issue.
---

# Project Operations

## Overview

Project operations creates and maintains the practical structure needed to deliver one bounded
outcome. It keeps ownership, milestones, dependencies, current health, decisions, and next actions
clear throughout the project. It should help the team act, not merely restate project metadata.

## When to Use

- A bounded outcome requires multiple issues, milestones, or teams.
- A project needs setup, readiness review, dependency coordination, or health assessment.
- The user asks for current project state, milestone status, or operating actions.

## When NOT to Use

- One trackable work item is sufficient → `issue-shaping`.
- The object is a repeating iteration → `cycle-planning`.
- The request is a strategic roll-up of projects → `initiative-roadmap`.
- The request is only a recurring communication artifact → `project-update`.

## Required Inputs

`project_id`, `project_name`, `outcome`, `lead`, `members`, `teams`, `scope`, `non_goals`, `milestones`, `issues`, `dependencies`, `target_timeframe`, `health_rubric`, `update_cadence`, `source_of_truth`, `audience`, `decision_owner`.

Use `unknown` for unsupported fields. A project without a bounded outcome, lead, or exit condition is `not_ready`.

## Workflow

1. **Inspect** approved project sources and record version, last-updated date, lead, target, and scope.
2. **Validate shape**: Confirm outcome, scope/non-goals, lead, participating teams, milestones, dependencies, target window, and cadence.
3. **Operate milestones**: Each milestone needs an observable exit criterion, owner, contributing issues, dependency state, and target/need-by condition.
4. **Coordinate dependencies**: Record provider, receiver, owner, need-by date, impact, status, evidence, and contingency.
5. **Maintain views**: Build lenses for active, blocked, stale, current-cycle, owner, milestone, dependency, or customer-impact work without mutating underlying objects.
6. **Assess health**: Apply the stated rubric to milestone evidence, target variance, dependency slips, scope changes, quality, and update freshness.
7. **Identify decisions**: State the decision, options, owner, deadline, no-action consequence, and required evidence.
8. **Prepare operations**: Return next actions, checkpoints, update inputs, and proposed mutations.
9. **Preview writes**: Route project, milestone, owner, target, health, or scope changes through `governance`.

## Detailed Operating Instructions

### 1. Establish or repair the project definition

Confirm the intended outcome, why the project exists, what is in and out of scope, accountable lead,
participating teams, target window, and observable completion condition. If the project is an endless
collection of related work, define a bounded outcome or use a team view instead.

### 2. Design meaningful milestones

Create milestones around observable stages of progress, not arbitrary percentages. Each milestone
needs a purpose, exit condition, owner, supporting work, dependencies, target or need-by condition,
and evidence used to confirm completion.

### 3. Coordinate cross-team dependencies

For every material dependency state what is needed, providing and receiving teams, responsible owner,
need-by date or condition, current status, evidence, impact, warning trigger, and fallback. Do not call
a related task a dependency unless it can prevent progress or completion.

### 4. Run the operating cadence

At each review, update milestone evidence, dependencies, decisions, scope changes, quality, risks, and
next actions. Assign actions to the people doing them while keeping the project lead accountable for
the whole outcome. Close stale actions or explain why they remain open.

### 5. Assess health honestly

Apply the documented rubric. Explain what changed since the prior review and what evidence supports
the current state. Missing current evidence means no current update—not on track. If recovery requires
an unapproved replan, use off track.

### 6. Prepare decisions and recovery

For each decision state the choice, options, recommended path, owner, deadline, evidence, and effect of
inaction. For at-risk work, name recovery actions, owners, checkpoints, and the condition that would
move the project back on track or confirm it is off track.

## User-Facing Result

Present the outcome and current health first, followed by milestone status, material changes,
dependencies, risks, decisions, and next actions with owners. Include a setup section only when
creating or repairing the project. Do not output an internal field schema.

## Health Rules

| State | Required evidence |
|---|---|
| `on_track` | Current evidence supports milestones and target with no unresolved material threat. |
| `at_risk` | A material threat exists but recovery remains credible and owned. |
| `off_track` | Current outcome, milestone, or target is not credible without an approved replan. |
| `no_current_update` | Evidence is stale or missing; never substitute `on_track`. |

State what changed and which evidence caused the health judgment.

## Examples

### Project has activity but no outcome

Pause setup and define the user or business result and exit condition. Do not treat a populated issue
list as proof that a project exists.

### Milestone slipped

Show the original condition, current evidence, dependency or scope change, downstream effect, recovery
options, and decision owner. Keep the target as proposed until it is approved.

## Quality Gate

- Outcome and exit condition are bounded.
- Every milestone has observable exit criteria.
- Every material dependency has an owner and need-by condition.
- Health is evidence-based and freshness is explicit.
- Team-local work and cross-team coordination remain separate.

## Common Issues

| Issue | Required handling |
|---|---|
| Project is an ongoing bucket | Define an exit condition or use a team view instead. |
| Lead is assigned every action | Keep project accountability separate from task ownership. |
| Progress percentage lacks basis | Use milestone/issue evidence and state the calculation method. |
| Target changed in a meeting | Record as proposed until the decision owner approves. |
| Status is based on many completed tasks | Reassess against outcome, milestones, target, quality, and dependencies. |
| Cross-team action has no accountable owner | Escalate ownership instead of hiding it in meeting notes. |

## Guardrails

- Do not create a project solely to group unrelated work.
- Do not infer project health from activity volume.
- Do not publish or change lead, scope, target, milestone, or health without approval and confirmed execution.
