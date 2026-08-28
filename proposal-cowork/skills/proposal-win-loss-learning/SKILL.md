---
name: proposal-win-loss-learning
description: |
  Converts a completed proposal outcome and reviewer feedback into a traceable win-loss learning backlog.
  Use when the user asks for a win/loss review, post-submission retrospective, proposal lessons learned, evaluator feedback analysis, or content library improvement backlog. Skip when the proposal is still being drafted, when there is no outcome or feedback, or when the task is to edit a live response.
license: Proprietary
metadata:
  author: CloudRiches Service
  version: "1.0"
---

# Proposal Win/Loss Learning

## Single responsibility

Capture learning after an outcome. Do not rewrite the active proposal, assign blame, change approved content, or infer causality without evidence.

## Required inputs

Require one `pursuit_id`, outcome (`won`, `lost`, `no-decision`, or `withdrawn`), final artifact version, reviewer/evaluator feedback, and available decision context. If feedback is unavailable, record that limitation.

## Steps

1. Preserve the outcome and evidence source. Separate evaluator-stated feedback, internal observations, hypotheses, and unknowns.
2. Group learning into customer understanding, requirement coverage, win themes, evidence quality, solution, delivery, commercial, legal/security, process, and review-gate effectiveness.
3. Identify repeatable practices, failure modes, reusable evidence candidates, stale content, and skills/process changes. Do not treat one anecdote as a universal rule.
4. State what should be validated in future pursuits and assign an owner. Content changes require the normal approval process.
5. Produce a learning backlog with priority, evidence, owner, due date, and validation method.

## Output contract

Return a `Win/Loss Learning Backlog` with `outcome`, `feedback_source`, `observed_fact`, `hypothesis`, `learning_category`, `impact`, `evidence`, `recommended_experiment`, `owner`, `priority`, `due_date`, and `status`. Include `What to preserve`, `What to validate`, and `Content requiring re-approval`.

## Stop conditions

Stop with `Learning evidence insufficient` when no outcome or feedback is supplied. Never convert hypotheses into approved content or update a live proposal from this skill.
