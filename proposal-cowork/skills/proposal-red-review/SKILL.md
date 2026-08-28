---
name: proposal-red-review
description: |
  Prepares a Red Team proposal review of a near-final response from the evaluator's perspective.
  Use when the user explicitly asks for a Red review, Red Team review, evaluator challenge, near-final compliance check, or scoreability review. Skip for Blue, Pink, Green, Gold, bid/no-bid, source search, or final submission execution.
license: Proprietary
metadata:
  author: CloudRiches Service
  version: "1.2"
---

# Proposal Red Review

## Single responsibility

Challenge whether an evaluator can understand, score, and trust the near-final response. Do not validate price, accept contract risk, perform executive authorization, or submit the package.

## Required inputs

Require a near-final response artifact, its version, the Compliance Matrix, Claim Check, and known evaluation criteria. If any are missing, return a blocker rather than scoring by intuition.

## Steps

1. Read as an evaluator who has the source requirements and limited time. Check requirement coverage, answer location, directness, evidence, differentiators, and response format.
2. Check for contradictions across sections, unsupported numbers, vague ownership, missing attachments, unexplained assumptions, and language that cannot be scored.
3. Identify high-risk commitments, but do not decide whether they are acceptable. Send them to the accountable role.
4. Score only when the source defines scoring criteria. Otherwise use `Strength`, `Gap`, and `Evidence needed`, not invented points.
5. Produce prioritized fixes and a neutral gate state: `Ready for Green`, `Needs changes`, or `Blocked`.

## Output contract

Return a `Red Review Scorecard` with `pursuit_id`, `artifact_version`, `reviewed_artifact_version`, `requirement_id`, `evaluator_question`, `response_location`, `strength`, `gap`, `evidence`, `severity`, `owner`, `fix`, and `gate_state`. Include `scoreability_summary`, `unresolved_high_risks`, `missing_attachments`, and `next_review`.

## Stop conditions

Stop with `Near-final artifact missing` or `Scoring basis missing`. Never output `Approved` or `Ready to submit` from this skill.
