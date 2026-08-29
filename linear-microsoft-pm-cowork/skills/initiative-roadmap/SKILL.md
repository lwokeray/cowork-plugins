---
name: initiative-roadmap
description: |
  Define strategic initiatives and maintain roadmap roll-ups across contributing projects,
  objectives, priorities, target windows, dependencies, and health evidence. Use for portfolio
  alignment, Now/Next/Later views, initiative reviews, and executive decisions. Do not use for
  individual issues, detailed delivery plans, or an OKR-writing exercise without project relations.
---

# Initiative and Roadmap

## Overview

This skill connects strategic objectives to the projects intended to achieve them. It creates a
roadmap that explains choices, sequencing, capacity trade-offs, evidence, and uncertainty. The roadmap
is a decision view over real work, not a wish list or a collection of attractive dates.

## When to Use

- Multiple projects contribute to one strategic objective.
- The user needs initiative health, roadmap ordering, cross-team alignment, or an executive review.
- Projects must be added, removed, reordered, paused, or challenged against strategy and capacity.

## When NOT to Use

- One bounded project is being operated → `project-ops`.
- The request is cycle scope → `cycle-planning`.
- The user only needs a release-oriented story map → `story-map-builder`.
- The user needs a recurring written update only → `project-update`.

## Required Inputs

`initiative_id`, `objective`, `why_now`, `owner`, `lead_team`, `priority`, `strategy_theme`, `success_signals`, `target_timeframe`, contributing projects, project health/update freshness, capacity constraints, dependencies, audience, and decision owner.

## Workflow

1. **Define objective**: State the intended strategic change, why now, success signals, owner, target window, and decision boundary.
2. **Map projects**: List contributing projects, leads, teams, outcomes, milestones, targets, health, latest updates, dependencies, and visibility restrictions.
3. **Validate contribution**: Explain how each project contributes to the objective. A shared label or executive sponsor is not sufficient.
4. **Roll up health**: Separate active project health, stale updates, missing evidence, dependency exposure, and objective-level signal.
5. **Review priority**: For proposed ordering or membership changes, show evidence, trade-offs, capacity impact, displaced work, and reversibility.
6. **Build roadmap lens**: Use Now/Next/Later, quarter, theme, or objective view as a lens over real projects. Preserve precise execution details within projects/cycles.
7. **Prepare decision**: State options, recommendation, assumptions, no-action consequence, owner, and need-by date.
8. **Preview mutation**: Route initiative status, health, priority, target, and project-membership changes through `governance`.

## Detailed Roadmap Instructions

### 1. Define the strategic change

Write the objective as a change in user, market, business, or operational results. Explain why now,
the owner, success signals, target window, and which decisions belong at initiative level. Avoid
generic labels such as “growth” without a defined result.

### 2. Test project contribution

For every candidate project explain which part of the objective it advances, what evidence supports
that connection, and whether the project is necessary, enabling, experimental, or optional. Remove or
challenge projects that share only a theme or sponsor.

### 3. Build the portfolio evidence

Collect project outcomes, leads, teams, milestones, target windows, current health, update freshness,
dependencies, capacity needs, and expected outcome signals. Preserve restricted information and mark
missing or stale evidence explicitly.

### 4. Choose the roadmap lens

Use Now/Next/Later for directional sequencing, quarters for reviewed planning windows, or themes for
strategy communication. Explain the meaning of each lane. Do not translate a broad window into a
precise commitment.

### 5. Examine trade-offs

When adding or moving work, identify capacity required, dependencies, displaced projects, delayed
outcomes, sunk cost, reversibility, and the evidence behind the change. A roadmap decision is
incomplete if it adds priority without saying what gives way.

### 6. Roll up health

Assess whether critical contributions and dependencies still support the objective. Keep individual
project states visible and explain criticality. Do not average red and green projects into a vague
portfolio color or treat stale updates as healthy.

### 7. Prepare the executive decision

Lead with objective progress, recommended sequencing, material changes, risks, trade-offs, and the
few decisions leaders must make. Each ask needs an owner, need-by date, options, and consequence of no
decision.

## User-Facing Result

Provide the objective, success signals, roadmap view, project contributions, current evidence,
dependencies, capacity trade-offs, changes since the last review, and decisions required. Use target
windows unless project-level evidence supports greater precision. Do not show an internal data block.

## Roll-up Rules

- `no_current_update` is not `on_track`.
- One off-track project does not automatically make the initiative off track; explain contribution criticality and recovery path.
- Objective progress cannot be calculated only from completed project count.
- Precise dates require project-level evidence; high-level roadmap views may use target windows.
- Project inclusion must be justified by contribution to the objective.

## Examples

### Adding a leadership request

Show which objective it serves, supporting evidence, required capacity, displaced work, and the
decision owner. Do not insert it into Now solely because the requester is senior.

### Initiative has one off-track project

Assess whether that project is critical to the objective and whether a credible recovery or alternate
path exists. Explain the result instead of automatically copying the project's health.

## Common Issues

| Problem | Correct response |
|---|---|
| Roadmap contains unrelated projects | Require an explicit contribution to the objective |
| Everything is Now | Apply capacity and trade-off review; move or stop work |
| Exact dates lack project evidence | Use honest windows and expose the missing decision |
| Completed-project count is called progress | Measure objective signals and contribution, not only activity |

## Quality Gate

- Objective, owner, and success signals are explicit.
- Each project has a documented contribution to the initiative.
- Freshness and missing evidence are visible in health roll-up.
- Roadmap movement identifies what is displaced or delayed.
- Decision and mutation ownership are explicit.

## Guardrails

- Do not use initiative labels as a substitute for strategy.
- Do not fabricate exact delivery dates at portfolio level.
- Do not alter project membership, priority, health, or target without owner approval and confirmed execution.
