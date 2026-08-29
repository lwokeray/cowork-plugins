# Risk Contract

## Risk vs. Issue

| Type | Definition | Handling |
|---|---|---|
| Risk | An uncertain event that may affect objectives | Score probability/impact and manage response/trigger |
| Issue | An event or condition already occurring | Track impact, owner, resolution, and recovery |
| Assumption | A planning statement treated as true | Validate and convert to risk if uncertainty threatens objectives |
| Dependency | Required contribution from another object/party | Track owner and need-by; add risk only for uncertainty around it |

## Five-Level Probability Scale

| Score | Label | Default interpretation |
|---|---|---|
| 1 | Rare | Less than 5% |
| 2 | Unlikely | 5% to less than 20% |
| 3 | Possible | 20% to less than 50% |
| 4 | Likely | 50% to less than 80% |
| 5 | Almost certain | 80% or greater |

Use an organization-supplied scale when available. If qualitative judgment is used, name the assessor and evidence.

## Five-Level Impact Scale

Define impact for the assessed object before scoring. Cover relevant dimensions such as outcome, schedule, cost, quality, security/privacy/compliance, customer, and operations. Use the highest credible material impact or the organization's aggregation rule; document the rule.

Default labels: `1 negligible`, `2 minor`, `3 moderate`, `4 major`, `5 severe`.

## Exposure Bands

For `probability × impact` on a 5×5 matrix:

- 1–4: Low
- 5–9: Medium
- 10–15: High
- 16–25: Critical

If the organization uses a non-linear matrix, use that matrix instead and record its version.

## Risk Record

```yaml
risk:
  id: "RISK-001"
  object: ""
  category: ""
  cause: ""
  event: ""
  consequence: ""
  source_evidence: []
  inherent_probability: 0
  inherent_probability_basis: ""
  inherent_impact: 0
  inherent_impact_basis: ""
  inherent_exposure: 0
  existing_controls: []
  response_strategy: "avoid|mitigate|transfer|accept"
  response_owner: ""
  actions: []
  trigger_or_early_warning: ""
  contingency: ""
  residual_probability: 0
  residual_impact: 0
  residual_exposure: 0
  status: "identified|active|monitoring|accepted|closed|realized"
  next_review: ""
  accepting_authority: ""
```

## Review Rules

- Critical: review at every operating checkpoint and escalate immediately.
- High: review at least weekly or at the project's normal weekly review.
- Medium: review at least every two weeks or when a trigger changes.
- Low: review monthly or at milestone boundaries.

Use a faster cadence when the environment changes rapidly. Closing a risk requires evidence that it is no longer applicable, has passed its exposure window, or has been realized and moved to issue management.
