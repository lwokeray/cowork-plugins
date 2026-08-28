---
name: proposal-sme-routing
description: |
  Routes one or more proposal open items to the smallest accountable SME or business role.
  Use when the user asks to assign proposal questions, create an SME queue, route technical/security/legal/pricing items, or identify who must respond. Skip when the task is to extract requirements, draft prose, review the full response, run a color gate, or make the final decision.
license: Proprietary
metadata:
  author: CloudRiches Service
  version: "1.0"
---

# Proposal SME Routing

## Single responsibility

Create a routing queue. Do not answer the open item, approve the answer, or broadcast every question to every stakeholder.

## Required inputs

Require one `pursuit_id` and a list of open items with requirement ID or finding ID, question text, source location, risk, due date, and known context. If the role cannot be determined from evidence, assign `Role not determined` and request a human owner.

## Steps

1. Preserve the original question and source location. Do not paraphrase away a qualification or commitment.
2. Classify each item by primary accountability: Proposal Manager, Sales/Capture, Technical/Solution, Delivery/Operations, Security/Privacy, Legal/Contracts, Finance/Pricing, References/Marketing, or Executive.
3. Assign one accountable owner and optional contributors. The smallest responsible group is preferred.
4. Set urgency from the evidenced due date and mark blockers. Do not invent a due date.
5. Distinguish `Awaiting SME`, `SME responded—needs citation check`, `Needs cross-functional review`, and `Closed by human decision`.

## Output contract

Return a `Routing Queue` with `item_id`, `requirement_or_finding_id`, `question`, `category`, `risk`, `source_location`, `accountable_role`, `owner`, `contributors`, `due_date`, `status`, and `handoff_note`.

## Stop conditions

Stop with `Insufficient routing context` when the item has no source or no recognizable subject. Never mark an item closed because a draft was generated.
