---
name: proposal-win-strategy-brief
description: |
  Structures customer priorities, win themes, differentiators, and proof hypotheses for one proposal pursuit.
  Use when the user asks for a win strategy, capture strategy, evaluator priorities, win themes, differentiators, customer hot buttons, or proposal positioning. Skip when the task is only requirement extraction, evidence retrieval, answer drafting, red-flag review, or final approval.
license: Proprietary
metadata:
  author: CloudRiches Service
  version: "1.0"
---

# Proposal Win Strategy Brief

## Single responsibility

Organize the strategic hypotheses that should guide a response. Do not turn hypotheses into facts, write the final answer, approve claims, or decide bid/no-bid.

## Required inputs

Require a Pursuit Brief and at least one source of customer context, such as stated outcomes, evaluation criteria, stakeholder notes, public customer priorities, or an approved capture brief.

## Steps

1. List customer outcomes, evaluation factors, stakeholder concerns, incumbent context, constraints, and decision dynamics with a source for each.
2. Form a small set of win themes. For each theme, state the customer problem, proposed value, proof needed, evaluator relevance, and risk if unsupported.
3. Separate confirmed differentiators from hypotheses. A differentiator is not valid until evidence shows why it matters to this customer and can be delivered.
4. Map each theme to relevant requirement IDs and the evidence skill's future search scope. Do not retrieve evidence in this skill.
5. Identify messages that need technical, delivery, legal, security, finance, or executive validation.

## Output contract

Return a `Win Strategy Brief` with `customer_outcomes`, `evaluation_factors`, `stakeholder_needs`, `win_themes`, `differentiator_hypotheses`, `proof_needed`, `requirement_mapping`, `risks`, and `validation_questions`.

## Stop conditions

Stop with `Strategy evidence insufficient` when only internal assumptions are supplied. Never state that the team will win, that a competitor is weak, or that an outcome is guaranteed.
