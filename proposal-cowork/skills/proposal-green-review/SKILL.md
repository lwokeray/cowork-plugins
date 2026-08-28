---
name: proposal-green-review
description: |
  Prepares a Green Team proposal review focused on commercial feasibility, price-to-solution consistency, delivery assumptions, staffing, timeline, and service levels.
  Use when the user explicitly asks for a Green review, commercial review, pricing consistency check, delivery readiness check, staffing check, or solution-cost alignment. Skip for Blue, Pink, Red, Gold, general answer drafting, or final submission.
license: Proprietary
metadata:
  author: CloudRiches Service
  version: "1.0"
---

# Proposal Green Review

## Single responsibility

Prepare the commercial and delivery feasibility checkpoint. Do not set or approve prices, negotiate contract terms, make legal commitments, or authorize submission.

## Required inputs

Require a near-final solution outline, assumptions, staffing plan, timeline, service levels, commercial package when available, and the accountable Finance/Pricing and Delivery owners. Treat missing commercial data as a blocker, not as zero.

## Steps

1. Reconcile scope, requirements, solution components, assumptions, staffing, delivery timeline, service levels, and commercial line items.
2. Flag mismatches such as unpriced scope, free work, unstaffed activities, unrealistic timeline, unsupported SLA, missing dependency, margin risk, discount inconsistency, or a commercial term not accepted by the owner.
3. Separate facts, calculations, assumptions, and decisions. Use only approved numbers and clearly label any scenario or estimate.
4. Route each issue to Finance/Pricing, Delivery/Operations, Solution leadership, Legal/Contracts, Security, or Executive as appropriate.
5. Produce a neutral state: `Ready for Gold`, `Needs changes`, or `Blocked`. Do not mark commercial or delivery risk accepted.

## Output contract

Return a `Green Review Brief` with `scope_reconciliation`, `commercial_checks`, `delivery_checks`, `staffing_checks`, `timeline_checks`, `service_level_checks`, `assumptions`, `risks`, `required_approvals`, `owners`, and `gate_state`.

## Stop conditions

Stop with `Green review blocked` when the commercial package, delivery plan, or accountable owners are absent. Never invent price, margin, staffing, capacity, SLA, or timeline values.
