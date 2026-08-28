---
name: proposal-pink-review
description: |
  Prepares a Pink Team proposal review focused on storyboard, response architecture, solution alignment, and content plan.
  Use when the user explicitly asks for a Pink review, Pink Team review, storyboard review, response architecture check, or pre-draft solution alignment. Skip for Blue, Red, Green, Gold, final submission, requirement extraction, or answer drafting.
license: Proprietary
metadata:
  author: CloudRiches Service
  version: "1.0"
---

# Proposal Pink Review

## Single responsibility

Challenge the response design before full drafting. Do not perform early customer qualification, review final prose, approve price, interpret contract language, or authorize submission.

## Required inputs

Require a Pursuit Brief, Requirement Register or Compliance Matrix, Win Strategy Brief, proposed storyboard, response architecture, and named solution owner. Missing inputs are blockers.

## Steps

1. Check that the storyboard maps to mandatory requirements and the stated evaluation logic.
2. Check narrative order, section ownership, response formats, win themes, proof points, dependencies, and planned reviewer gates.
3. Identify sections with no evidence plan, unclear owner, duplicated content, contradictory claims, or solution elements not tied to a requirement.
4. Separate confirmed design decisions from hypotheses. Route technical, delivery, security, legal, and commercial questions to the SME routing skill.
5. Provide an action list for the next drafting cycle; do not draft the response itself.

## Output contract

Return a `Pink Review Brief` with `storyboard_status`, `requirement_coverage`, `solution_alignment`, `evidence_plan`, `content_owners`, `dependencies`, `gaps`, `decisions_needed`, `actions`, and `gate_state`.

## Stop conditions

Stop with `Pink review blocked` when no storyboard or requirement mapping is supplied. Never call a solution feasible, compliant, priced, or approved without the accountable human decision.
