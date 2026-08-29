---
name: weighted-scorer
description: |
  Build an auditable weighted decision matrix for product prioritization, technology or vendor
  selection, build-vs-buy, roadmap alternatives, and other multi-criteria PM decisions. Use when
  options must be compared against explicit constraints, criteria, weights, evidence, scores, and
  sensitivity. Do not use when a hard constraint already determines the answer or evidence is too weak.
license: MIT
---

# Weighted Scorer

## Overview

A weighted comparison makes a difficult choice inspectable. It forces the decision group to agree on
the question, viable options, evidence, and trade-offs before looking at a total score. The score is a
conversation aid, not a machine-made decision.

## When to Use

- Two or more feasible options require a documented multi-criteria comparison.
- Product opportunities, vendors, technologies, or roadmap alternatives need prioritization.
- Stakeholders need to understand why a recommendation changes under different weights or assumptions.

## When NOT to Use

- A mandatory legal, security, budget, compatibility, or policy constraint eliminates all but one option.
- The decision is primarily qualitative and scoring would create false precision.
- Evidence for most criteria is missing; produce an evidence plan first.
- The user asks for customer-signal capture rather than an actual option decision.

## Required Inputs

`decision`, `decision_owner`, `stakeholders`, `need_by`, `options`, `hard_constraints`, `criteria`, criterion definitions, scoring anchors, weights or ranking, evidence per score, uncertainty, and decision consequences.

## Workflow

1. **Define the decision**: State the decision to be made, owner, deadline, scope, affected stakeholders, and what happens if no decision is made.
2. **Screen hard constraints**: Test compliance, security, compatibility, budget, timeline, contractual, and other dealbreakers. Remove infeasible options before scoring and preserve the reason.
3. **Define options**: Use comparable alternatives, including `do_nothing`, `defer`, or a hybrid when they are legitimate choices.
4. **Define criteria**: Keep criteria decision-relevant, non-overlapping, measurable, and few enough to discriminate. Distinguish benefit, cost, risk, and strategic constraints.
5. **Define anchors**: Before scoring, specify what each score means for each criterion. Use a consistent scale.
6. **Assign weights**: Use direct allocation, rank-order centroid, or stakeholder-specific scenarios. Weights must normalize to 100%.
7. **Collect evidence**: Attach source, observation date, owner, and confidence to each score. Unknown evidence remains unknown; it is not a neutral midpoint automatically.
8. **Calculate**: Use `scripts/decision_matrix.py` for totals, ranking, ROC weights, and sensitivity checks.
9. **Test robustness**: Vary material weights/scores, examine rank changes, and identify dominant assumptions or low-discrimination criteria.
10. **Prepare decision**: Present feasible options, score ranges, trade-offs, uncertainty, recommendation, dissent, and evidence that would change the recommendation.
11. **Record decision**: Route changes to priorities, vendors, roadmap, scope, budget, or systems of record through `governance`.

## Detailed Decision Instructions

### 1. Frame one decision

Write the choice in one sentence, name the decision owner, explain why the decision is needed now, and
state the consequence of delay. Keep separate decisions separate; do not use one matrix to choose a
vendor, architecture, and rollout date simultaneously.

### 2. Apply dealbreakers first

Check mandatory security, privacy, legal, compatibility, budget, time, and policy conditions. Remove
an option only with supporting evidence and record the reason. A hard constraint is not a heavily
weighted preference.

### 3. Make options comparable

Describe each option at a similar level of detail, including do nothing, defer, or hybrid options when
they are realistic. Do not give the preferred option a complete proposal and competitors vague labels.

### 4. Define useful criteria

Choose a small set that can change the decision. Define what good and poor performance mean. Watch for
double counting: “customer value,” “adoption,” and “user benefit” may represent the same underlying
consideration unless deliberately distinguished.

### 5. Agree on weights and scoring anchors

Weights express the priorities of a named owner or stakeholder scenario. Scoring anchors explain what
each point means for each criterion. Establish both before scoring options to reduce outcome-driven
adjustment.

### 6. Score from evidence

Attach a source, date, and confidence to each important score. Leave missing evidence visibly unknown;
do not automatically assign a middle score. When judgment is necessary, name the responsible judge
and reasoning at the conclusion level, without exposing private chain-of-thought.

### 7. Calculate and test sensitivity

Run the script after validating the inputs. Then vary uncertain scores and contested weights. Report
whether the winner stays the same, where options are effectively tied, and which assumptions dominate
the result. A narrow lead with unstable inputs is not a strong recommendation.

### 8. Prepare the decision discussion

Lead with feasible options and the recommendation. Explain decisive trade-offs, uncertainties,
dissenting views, and evidence that would change the choice. Ask the decision owner to approve, revise,
defer, or request more evidence.

## User-Facing Result

Present the decision, screened-out options and reasons, criteria and plain definitions, agreed weights,
evidence-backed comparison, sensitivity findings, recommendation, trade-offs, confidence, and next
decision. Show a readable table when useful; do not output an internal schema.

## Calculation Tool

```bash
python3 scripts/decision_matrix.py --json '{
  "dimensions":["Outcome fit","Risk","Cost"],
  "weights":[45,30,25],
  "options":["Option A","Option B"],
  "scores":{"Option A":[4,3,2],"Option B":[3,4,4]}
}'

python3 scripts/decision_matrix.py --roc \
  '["Outcome fit","Risk","Cost","Time to value"]'
```

Read [references/decision-contract.md](references/decision-contract.md) when defining anchors, handling unknowns, combining stakeholder views, or interpreting sensitivity.

## Examples

### Vendor selection

Screen mandatory data-residency and identity requirements before comparing workflow fit, reliability,
support, migration effort, and total cost. If a vendor fails a true mandatory condition, do not hide
that fact inside a low score.

### Roadmap choice with weak evidence

If the top options depend on uncertain customer reach, show the current comparison as provisional and
recommend the smallest research step that could change the ranking.

## Common Issues

| Problem | Correct response |
|---|---|
| Criteria were chosen after seeing scores | Re-establish definitions and weights before recalculating |
| Unknown is scored as average | Leave it unknown and test plausible ranges |
| Tiny score difference is declared decisive | Show sensitivity and treat unstable results as a tie |
| One stakeholder's weights are presented as universal | Name the scenario and compare other material views |

## Quality Gate

- Hard constraints are resolved before scoring.
- Criteria definitions and anchors are explicit.
- Weights total 100% and reflect an identified owner/scenario.
- Every score has evidence or is visibly unknown.
- Sensitivity and close margins are disclosed.
- The matrix supports but does not impersonate the decision owner.

## Guardrails

- Do not fabricate scores or normalize unknowns into false certainty.
- Do not double-count the same concern across multiple criteria.
- Do not treat a small numerical difference as materially decisive without sensitivity evidence.
- Do not execute procurement, roadmap, priority, or architecture decisions without approval.
