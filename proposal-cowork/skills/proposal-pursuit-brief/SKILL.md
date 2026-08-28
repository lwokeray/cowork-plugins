---
name: proposal-pursuit-brief
description: |
  Establishes the context and scope for one proposal pursuit without analyzing the RFP or making a bid decision.
  Use when the user asks to create a pursuit brief, opportunity brief, capture context, customer context, proposal scope, or kickoff summary. Skip when the task is only document extraction, answer drafting, review, submission readiness, or post-award learning.
license: Proprietary
metadata:
  author: CloudRiches Service
  version: "1.0"
---

# Proposal Pursuit Brief

## Single responsibility

Create only the context record for one pursuit. Do not read deeply into the RFP, extract requirements, decide bid/no-bid, write answers, or review a response.

## Required inputs

Use only the current conversation and user-provided context. Capture customer, opportunity, region, industry, solution scope, procurement route, expected deliverable, known deadline, response language, stakeholders, and document identifiers. If a value is absent, record `Not provided`.

## Steps

1. Confirm or assign a unique `pursuit_id` supplied by the user. If there are multiple opportunities, stop and ask which one is in scope.
2. Separate stated facts from assumptions. Label each assumption and name the person who must confirm it.
3. Record the in-scope and explicitly out-of-scope work. Do not infer scope from a similar pursuit.
4. Identify the next required artifact, such as document inventory or bid/no-bid evidence. Do not create that artifact in this skill.

## Output contract

Return a `Pursuit Brief` with these fields: `pursuit_id`, `customer`, `opportunity`, `region`, `industry`, `solution_scope`, `procurement_route`, `deliverable`, `deadline`, `language`, `stakeholders`, `in_scope`, `out_of_scope`, `assumptions`, `unknowns`, and `next_artifact`.

## Stop conditions

Stop with `Needs clarification` if the pursuit is ambiguous, two customers are mixed, or the requested action would require requirement extraction, bid/no-bid judgment, pricing, legal interpretation, or final approval.
