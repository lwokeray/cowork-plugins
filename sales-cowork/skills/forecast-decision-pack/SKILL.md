---
name: forecast-decision-pack
description: >-
  Prepares a bounded forecast or pipeline review decision pack from approved current and previous snapshots.
  Use when a sales manager or RevOps user asks for a forecast review, material movement, high-risk deals,
  or decision questions for a defined period. Do not use to calculate or change forecast values without approved snapshots.
metadata:
  author: lwokeray
  version: "1.1.0"
---

# Forecast Decision Pack

## Purpose

Prepare a manager-facing decision pack for a defined team scope, forecast period, and as-of date. Use approved snapshots from permission-accessible SharePoint, OneDrive, Excel, or Dynamics 365 Sales context when available. The skill doesn't fabricate movement or alter forecast values.

## Guardrails

- Require team scope, period, as-of date, and an approved current snapshot. Require an approved prior snapshot before claiming movement.
- Do not turn an activity report into a forecast. Separate reported values, evidence gaps, and decision questions.
- Do not change forecast category, amount, probability, deal stage, close date, or manager commitment.
- Keep the review bounded to selected scope. If source ownership or approval status is unavailable, label it `unknown`.

## Workflow

1. Confirm scope, period, as-of date, and approved source snapshots. Use Work IQ, Excel, Enterprise Search, and available Dynamics 365 Sales context to retrieve them; if the previous snapshot is absent, stop only the movement comparison.
2. Validate whether each snapshot is approved and comparable; stop movement analysis if either condition is not met.
3. Compare material changes and inspect the buyer evidence behind each relevant item.
4. Flag high-risk items and evidence gaps without assigning a new forecast value.
5. Produce manager questions that identify a human decision, owner, and needed evidence.

## Output format

### Review basis

| Scope | Period | As-of | Current snapshot | Previous snapshot | Status |
|---|---|---|---|---|---|
|  |  |  |  |  |  |

### Material items

| Deal / segment | Reported movement | Buyer evidence | Evidence gap | Manager decision question |
|---|---|---|---|---|
|  |  |  |  |  |

End with `Decision pack complete — no forecast value or commercial field changed`.
