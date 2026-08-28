---
name: proposal-blue-review
description: |
  Prepares a Blue Team proposal review focused on customer understanding, opportunity context, win themes, and bid/no-bid assumptions.
  Use when the user explicitly asks for a Blue review, Blue Team review, opportunity review, capture checkpoint, customer hot buttons, or early pursuit gate. Skip for Pink, Red, Green, Gold, final submission, answer drafting, or general proposal review.
license: Proprietary
metadata:
  author: CloudRiches Service
  version: "1.2"
---

# Proposal Blue Review

## Single responsibility

Prepare the early pursuit checkpoint. Do not design the detailed solution, review near-final prose, evaluate price, authorize submission, or decide bid/no-bid.

## Required inputs

Require a Pursuit Brief, customer context, known evaluation logic, and any existing Win Strategy Brief. Record the artifact version and named attendees.

## Steps

1. Confirm customer, opportunity, stakeholders, desired outcomes, procurement route, decision timeline, and known competitors only when evidenced.
2. Test whether the team can explain the customer's problem, why the opportunity matters, how it may be evaluated, and what assumptions remain.
3. Review win-theme hypotheses for customer relevance and proof needed. Do not treat hypotheses as differentiators until evidence is found.
4. List bid/no-bid inputs that need management decision, but do not vote or recommend an outcome.
5. Produce questions for the next gate and assign an accountable human role for each question.

## Output contract

Return a `Blue Review Brief` with `pursuit_id`, `artifact_version`, `decision_context`, `customer_understanding`, `evaluation_hypotheses`, `win_themes`, `assumptions`, `unknowns`, `bid_no_bid_inputs`, `questions`, `owners`, and `gate_state`.

## Stop conditions

Stop with `Blue review blocked` when the pursuit context or customer outcome is missing. Never output `Bid`, `No-bid`, `Approved`, or any solution commitment as an AI decision.
