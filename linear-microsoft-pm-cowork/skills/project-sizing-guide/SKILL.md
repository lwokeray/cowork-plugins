---
name: project-sizing-guide
description: |
  Produce transparent software effort estimates using scoped work packages, historical evidence,
  uncertainty, assumptions, exclusions, and an appropriate method: three-point PERT, team-calibrated
  T-shirt sizing, or Function Point Analysis. Use for feature/project sizing, planning ranges, or quote
  inputs. Do not use to invent estimates without estimator evidence or to make delivery commitments.
license: MIT
---

# Project Sizing Guide

## Overview

This skill produces an estimate that another person can understand, challenge, and update. It explains
what is included, where the numbers came from, what uncertainty remains, and which changes require a
new estimate. An estimate supports planning; it is not a promise or a substitute for team judgment.

## When to Use

- A defined feature, release, migration, integration, or project requires an effort range.
- A team needs PERT, T-shirt sizing, FPA, uncertainty, or confidence intervals.
- Existing estimates need assumptions, exclusions, calibration, or risk review.

## When NOT to Use

- Requirements are not bounded enough to estimate → `product-spec-writer` or `issue-shaping`.
- The user is selecting cycle scope from existing estimates → `cycle-planning`.
- The user asks for a promised date without capacity/calendar inputs.
- The estimate would be generated solely from generic industry multipliers when team evidence is required.

## Required Inputs

Resolve:

- scope baseline, work packages, acceptance boundary, non-goals, dependencies, and constraints;
- estimate unit (`person_hours`, `person_days`, story points, or function points);
- estimator/source, team composition, historical calibration, environment, and observation period;
- development, review, testing, integration, security/compliance, deployment, documentation, support, and project-management work;
- uncertainty drivers, assumptions, exclusions, contingency policy, and intended use of the estimate.

If a material input is absent, return an estimation plan or range of unknowns rather than fabricated precision.

## Method Selection

| Method | Use when | Do not use when |
|---|---|---|
| T-shirt sizing | Early scope comparison; team has calibrated size anchors | The user needs a contract-grade numeric estimate without conversion evidence |
| Three-point PERT | Work packages have credible optimistic/most-likely/pessimistic inputs | O/M/P values are model guesses rather than estimator judgments/evidence |
| FPA | Functional boundary and ILF/EIF/EI/EO/EQ counts can be defined | UI/technical work dominates and functional components cannot be counted reliably |

Historical team data takes precedence over generic tables.

## Workflow

1. **Freeze estimate baseline**: Record scope/version, date, estimator, purpose, unit, included/excluded work, and change policy.
2. **Build WBS**: Decompose by deliverable or independently estimable work package; keep integration and cross-cutting work explicit.
3. **Select method**: Choose the least complex method that meets the decision need and available evidence.
4. **Collect inputs**: Obtain team/historical inputs. Label each value `observed`, `team_estimate`, `benchmark`, `assumption`, or `unknown`.
5. **Calculate**: Use `scripts/estimate_calculator.py` for deterministic PERT, T-shirt conversion, or FPA arithmetic.
6. **Calibrate**: Compare against relevant completed work and explain any adjustment. Do not mix units silently.
7. **Add explicit uncertainty**: Identify dependency, requirement, technical, environment, review, and operational uncertainty. Do not hide contingency inside task values.
8. **Aggregate**: Produce expected value/range and confidence interval only when method assumptions support it.
9. **Capacity/date separation**: Convert effort to elapsed duration only with usable capacity, parallelism limits, dependency calendars, and working assumptions.
10. **Review commitment boundary**: State what decision the estimate supports and what it does not authorize.
11. **Route downstream changes**: Use `cycle-planning` for cycle selection and `governance` before changing approved scope, estimate baselines, quotes, or external commitments.

## Detailed Estimation Instructions

### 1. Confirm the decision the estimate supports

Clarify whether the user needs early comparison, release planning, staffing discussion, budget input,
or a reviewed baseline. Match the precision to that purpose. Early comparison may need broad size
ranges; a planning baseline requires better decomposition and team evidence.

### 2. Freeze the scope being estimated

Record the source version, included outcomes, acceptance boundary, exclusions, dependencies, and
constraints. If material requirements are missing, list the decisions required before estimating.
Never conceal scope uncertainty by producing a precise number.

### 3. Break the work into estimable packages

Decompose by deliverable or observable outcome. Include discovery or design work still required,
implementation, review, testing, integration, security and privacy review, migration, deployment,
monitoring, documentation, enablement, and stabilization when applicable.

Avoid one giant “development” item. Also avoid hundreds of tiny tasks that create precision without
better evidence.

### 4. Select the method

- Use calibrated T-shirt sizes for early comparison among similar work.
- Use three-point estimates when knowledgeable estimators can describe a favorable, likely, and
  difficult case for each package.
- Use function points only when the functional boundary and team conversion evidence are credible.

Explain why the chosen method fits. Do not run calculations merely because a script is available.

### 5. Gather human and historical evidence

Prefer estimates from the responsible team and comparable completed work. Record who provided each
input, when, and under what assumptions. When evidence differs, show the range and discuss the cause
instead of averaging disagreement away.

### 6. Calculate and interpret

Use the supplied script for arithmetic after inputs have been validated. Keep units consistent. Show
the work-package results, total expected effort or size, uncertainty range, and the largest drivers.
Round results to a precision supported by the inputs.

### 7. Treat uncertainty explicitly

Name requirement, dependency, technical, environment, review, operational, and staffing uncertainty.
Do not repeatedly add buffers for the same cause. State any contingency separately and explain who
owns it and when it may be used.

### 8. Separate effort from elapsed time

Convert effort to a date or duration only when usable capacity, parallel work limits, calendars,
handoffs, and dependencies are known. Explain the assumptions. A ten-person-day estimate does not
automatically mean two people finish in five days.

### 9. Define re-estimation triggers

Typical triggers include approved scope changes, changed interfaces, failed technical assumptions,
new compliance requirements, loss of a dependency, or evidence that actual work differs materially
from the baseline.

## User-Facing Estimate

Lead with the estimate range and confidence, then show scope, method, work packages, assumptions,
exclusions, dependencies, uncertainty drivers, comparable work, and re-estimation triggers. State
clearly what the estimate may be used for and that it is not a delivery commitment.

## Calculation Tool

```bash
python3 scripts/estimate_calculator.py --method pert \
  --tasks '[{"name":"Integration test","O":2,"M":4,"P":9}]' --output json

python3 scripts/estimate_calculator.py --method tshirt \
  --tasks '[{"name":"Migration validation","size":"L"}]' --output json

python3 scripts/estimate_calculator.py --method fpa \
  --components '[{"type":"ILF","complexity":"medium","count":2}]' \
  --hours-per-fp 10 --output json
```

Read [references/estimation-methods.md](references/estimation-methods.md) for formulas, input validation, confidence interpretation, and adjustment rules.

## Examples

### Requirements are not stable

Produce an estimation plan: identify missing decisions, likely work packages, evidence needed, and who
should estimate them. Do not create optimistic, likely, and pessimistic numbers yourself.

### Converting effort to calendar duration

If 60 person-days of effort includes work that cannot run in parallel, combine it with actual team
availability, holidays, support load, review queues, and dependency timing before discussing duration.

## Common Issues

| Problem | Correct response |
|---|---|
| Estimate is a single unexplained number | Add scope, method, source, range, and assumptions |
| Testing and rollout are missing | Add applicable end-to-end work packages |
| Generic benchmarks replace team evidence | Label them weak inputs and request calibration |
| Stakeholders ask for a guaranteed date | Explain the capacity and commitment decisions still required |

## Quality Gate

- Scope version, unit, intended use, estimator source, assumptions, and exclusions are explicit.
- Calculation inputs are traceable and the script result is preserved.
- Testing, integration, security/compliance, deployment, documentation, and operational work are considered.
- Effort, capacity, elapsed duration, contingency, and commitment remain separate.
- Precision does not exceed input quality.

## Guardrails

- Never invent O/M/P values, team velocity, productivity, hours-per-FP, or capacity as facts.
- Do not add independent percentage buffers repeatedly to the same uncertainty.
- Do not present confidence intervals as guarantees.
- Do not publish a quote or delivery date without authorized review and approval.
