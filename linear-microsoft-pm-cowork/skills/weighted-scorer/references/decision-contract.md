# Decision Matrix Contract

## Hard Constraints

Evaluate dealbreakers before weights:

```yaml
constraint:
  id: "HC-001"
  statement: ""
  threshold: ""
  evidence_required: ""
  owner: ""
  option_results: []
```

An option that fails a mandatory constraint is screened out unless the authorized owner explicitly changes or waives the constraint.

## Criterion Record

```yaml
criterion:
  id: "CR-001"
  name: ""
  definition: ""
  direction: "higher_is_better|lower_is_better"
  weight: 0
  scale: "1-5"
  anchors:
    1: ""
    3: ""
    5: ""
  evidence_source: ""
  evidence_date: ""
```

Define anchors before scoring. Criteria should not mix several independent concerns in one score.

## Score Record

```yaml
score:
  option: ""
  criterion_id: ""
  value: null
  evidence: []
  scorer_or_owner: ""
  confidence: "low|medium|high"
  assumptions: []
```

Use `null` for unknown evidence. If the decision requires a temporary assumption, state it and run sensitivity across plausible values.

## Weighting Methods

- **Direct allocation**: Decision owner distributes 100 points.
- **Rank-order centroid (ROC)**: Use when ordering is known but precise weights are not.
- **Scenario weights**: Maintain separate views for materially different stakeholder priorities rather than averaging away disagreement.

Do not silently average stakeholder weights. Record the decision rule for resolving conflict.

## Sensitivity

Test at least:

- plausible weight changes for the most important or disputed criteria;
- plausible score ranges for low-confidence evidence;
- removal of low-discrimination criteria;
- stakeholder-specific weight scenarios;
- close-ranking alternatives.

Describe whether the top-ranked option is stable, conditionally stable, or unstable. An unstable ranking requires more evidence or an explicit risk-bearing decision.

## Decision Record

```yaml
decision_record:
  decision: ""
  selected_option: ""
  rationale: ""
  tradeoffs_accepted: []
  assumptions: []
  dissent: []
  owner: ""
  approved_at: ""
  review_trigger: ""
```
