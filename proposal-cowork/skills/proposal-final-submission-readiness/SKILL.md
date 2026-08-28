---
name: proposal-final-submission-readiness
description: |
  Checks whether a human-approved proposal package is ready for submission based on documented rules.
  Use when the user asks for a final readiness check, submission checklist, attachment check, filename/format check, portal preparation, or pre-submission QA. Skip when the proposal is still being drafted, when approval is missing, or when the user asks the skill to submit the proposal.
license: Proprietary
metadata:
  author: CloudRiches Service
  version: "1.2"
---

# Proposal Final Submission Readiness

## Single responsibility

Check readiness only. Do not submit, email, upload, sign, change the final artifact, or represent a pending decision as approval.

## Required inputs

Require the final artifact and version, submission rules, attachment register, Gold Decision Record, named submission owner, and deadline/time zone. If Gold decision is not explicitly recorded as approved by the named human, readiness cannot be `Ready to submit`.

## Steps

1. Check that the final artifact version matches the version reviewed at Gold and that no post-approval change is untracked.
2. Check mandatory sections, page/word limits, file format, filename rules, language, signatures, certifications, attachments, references, and required redactions against the source rules.
3. Check that all high-risk findings have a recorded human disposition and that pricing, legal, security, SLA, warranty, data-residency, and delivery commitments match the approved record.
4. Check deadline, time zone, submission channel, account owner, and contingency contact. Do not log in or submit.
5. Return `Ready to submit`, `Needs changes`, or `Blocked`, with every condition visible to the submission owner.

## Output contract

Return a `Submission Readiness Checklist` with `pursuit_id`, `artifact_version`, `gold_decision_record_version`, `rule`, `evidence`, `status`, `owner`, `deadline`, `blocker`, and `next_action`. Include `approval_verification`, `attachment_check`, `format_check`, `risk_disposition`, `submission_owner`, and `readiness_state`.

## Stop conditions

Stop with `Blocked` when approval is absent, final version is ambiguous, a mandatory attachment is missing, or a high-risk disposition is unrecorded. Never perform the submission action.
