---
name: outcome-review
description: |
  Evaluate outcomes after a project, milestone, release, experiment, or cycle by comparing intended
  outcome, baseline, target, observed results, counter-evidence, uncertainty, and next options.
  Use for post-launch review, benefit realization, experiment decisions, or lessons after delivery.
  Do not use for routine status updates or incident root-cause analysis.
---

# Outcome Review

## Overview

An outcome review determines whether delivered work created the intended change and what should happen
next. It separates shipping from adoption, behavior, business results, and quality. It reports mixed or
negative evidence as carefully as positive evidence and avoids blaming individuals.

## When to Use

- Delivery is complete or sufficiently observed and the user asks whether it worked.
- A launch, release, project, milestone, experiment, or cycle needs an evidence-based next decision.
- Activity, output, adoption, behavior, business outcome, and quality signals must be separated.

## When NOT to Use

- The work is still in routine execution → `project-update` or `project-ops`.
- The user needs a blameless incident postmortem.
- Baseline, target, observation window, and intended outcome are all absent and cannot be recovered.

## Required Inputs

`object`, `intended_outcome`, `baseline`, `target`, `measurement_definition`, `measurement_window`, `owner`, `affected_segment`, delivery evidence, adoption/behavior/business/quality evidence, counter-signals, constraints, and decision owner.

## Workflow

1. **Recover intent**: Read the approved brief, PRD, project/initiative/cycle record, decision, and previous update.
2. **Validate measurement**: Confirm baseline, target, definition, source, segment, observation date/window, and data freshness.
3. **Separate levels**: Distinguish activity completed, output delivered, adoption, behavior change, user/business outcome, and quality/reliability.
4. **Compare evidence**: Calculate variance only when units and definitions match. Label evidence `confirmed`, `reported`, `inferred`, or `unknown`.
5. **Test the conclusion**: Identify counter-evidence, confounders, segment differences, missing data, survivorship/selection effects, and attribution limits.
6. **Generate options**: Evaluate `continue`, `iterate`, `expand`, `pause`, `rollback`, or `run_next_experiment` for impact, cost, risk, reversibility, and evidence value.
7. **Assign decision**: State recommendation, confidence, owner, need-by date, and the new evidence that would change the decision.
8. **Preview follow-through**: Route approved roadmap/project/cycle/customer communication changes through `governance`.

## Detailed Review Instructions

### 1. Recover the original intent

Read the approved problem statement, intended outcome, success measures, baseline, target, guardrails,
scope, and decision history. Do not redefine success after seeing results. If the original measure was
unclear, say so and distinguish a reconstructed evaluation from the approved plan.

### 2. Validate the evidence

Confirm measure definition, population, segment, source, observation date, window, and data quality.
Check whether instrumentation, eligibility, seasonality, rollout coverage, or sample selection changed.
Compare only compatible measures.

### 3. Build the result chain

Describe separately:

- activities completed;
- product or operational outputs delivered;
- user adoption and reach;
- changes in user behavior;
- user or business outcomes;
- quality, reliability, and guardrail results.

This prevents “we shipped it” from becoming “it worked.”

### 4. Examine segments and counter-evidence

Look for differences by role, customer type, region, platform, cohort, or use case when relevant. Include
negative results, non-adopters, support signals, and guardrail deterioration. State attribution limits
and plausible confounders without using them to dismiss the evidence.

### 5. Reach a calibrated conclusion

Use achieved, partially achieved, not achieved, inconclusive, or insufficient observation. Explain the
comparison and confidence. If the window is too short, say when meaningful evidence can be reviewed.

### 6. Recommend the next decision

Compare continuing, iterating, expanding, pausing, rolling back, or running another experiment. Discuss
expected impact, cost, risk, reversibility, and learning value. Name the decision owner and evidence
that would change the recommendation.

### 7. Preserve learning

Capture which assumptions held, which failed, what the team learned about the user or system, and how
future specifications, estimates, or plans should change. Keep this blameless and evidence-based.

## User-Facing Result

Lead with the conclusion and confidence. Then show intended outcome, validated measures, observed
result, segment differences, guardrails, counter-evidence, attribution limits, lessons, options, and
recommended next decision. Do not output an internal schema.

## Evidence Rules

- Completion and shipment are outputs, not outcomes.
- Correlation is not causation; state attribution limits.
- Do not compare metrics with changed definitions or populations without adjustment.
- Negative or mixed results must remain visible.
- If the observation window is too short, return `insufficient_observation`.

## Examples

### Adoption rose but outcome did not

Report that users adopted the feature but the intended time saving or conversion improvement was not
observed. Investigate workflow friction or measurement before expanding solely on adoption.

### Overall success hides segment harm

Show the overall result and the affected segment separately. A positive average does not justify
ignoring a serious accessibility, reliability, or customer impact problem.

## Common Issues

| Problem | Correct response |
|---|---|
| Success criteria are chosen after launch | Recover the approved criteria and label any new analysis exploratory |
| Metric definition changed | Do not calculate a simple variance without adjustment |
| Observation window is short | Use insufficient observation and schedule the next review condition |
| Result is used to blame a team | Focus on evidence, assumptions, system conditions, and decisions |

## Quality Gate

- Intended outcome and measurement definition are traceable to approved sources.
- Metric comparisons use compatible definitions, populations, and periods.
- Counter-evidence and uncertainty are included.
- The next recommendation follows the evidence and states reversibility.
- No person is blamed for an outcome result.

## Guardrails

- Do not selectively report only successful metrics or segments.
- Do not infer causation beyond the design and evidence.
- Do not automatically change roadmap, project, cycle, or customer communication based on the review.
