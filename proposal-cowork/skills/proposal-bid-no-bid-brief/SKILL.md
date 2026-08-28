---
name: proposal-bid-no-bid-brief
description: |
  Prepares an evidence-based bid/no-bid decision brief without making the decision.
  Use when the user asks to prepare a bid/no-bid meeting, capture decision criteria, compare pursuit fit, identify blockers, or summarize bid assumptions. Skip when the task is document extraction, answer writing, color-team review, or final submission readiness.
license: Proprietary
metadata:
  author: CloudRiches Service
  version: "1.2"
---

# Proposal Bid/No-bid Brief

## Single responsibility

Prepare the evidence and unresolved questions needed for a human bid/no-bid decision. Do not vote, recommend a decision solely from missing data, or write customer-facing content.

## Required inputs

Require a Pursuit Brief plus the Compliance Matrix or equivalent evidence. Use stated qualification criteria, customer fit, solution fit, delivery capacity, timeline, commercial constraints, contractual exposure, competitive context, and executive sponsor information when available.

## Steps

1. Confirm the pursuit boundary, decision date, and decision-makers.
2. Map each known fact to a decision criterion. Separate evidence, assumption, risk, and unknown.
3. Identify hard blockers such as insufficient time, mandatory capability gaps, missing sponsor, unacceptable contract condition, unavailable delivery capacity, or unresolved pricing authority.
4. Identify questions whose answers could change the decision. Assign each question to a human owner.
5. Produce neutral options: `Bid`, `No-bid`, or `Defer pending evidence`, with the evidence needed for each. Do not choose among them.

## Output contract

Return a `Bid/No-bid Brief` with `pursuit_id`, `artifact_version`, `decision_date`, `decision_makers`, `criteria`, `evidence`, `assumptions`, `blockers`, `questions`, `options`, `required_approvals`, and `decision_record`. Label every missing data item explicitly.

## Stop conditions

Stop with `Decision context incomplete` when there is no pursuit brief or decision owner. Escalate, rather than infer, when a legal, pricing, security, delivery, or executive judgment is required.
