---
name: proposal-compliance-matrix
description: |
  Converts an existing requirement register into a traceable compliance matrix with response status and evidence gaps.
  Use when the user asks to build, update, or audit a proposal compliance matrix, requirement tracker, response matrix, or coverage dashboard. Skip when the source requirements have not been extracted or when the task is to draft answers, perform red-team review, or decide bid/no-bid.
license: Proprietary
metadata:
  author: CloudRiches Service
  version: "1.0"
---

# Proposal Compliance Matrix

## Single responsibility

Translate requirement records into a tracking matrix. Do not rewrite the original requirement, invent compliance, or draft the answer.

## Required inputs

Require one `pursuit_id` and a `Requirement Register`. Use only its IDs, source locations, categories, mandatory status, response format, and extraction notes.

## Steps

1. Confirm that each requirement has a stable ID and source location. Create a data-quality finding for any missing field.
2. Add tracking fields: response owner, SME, planned response section, evidence needed, evidence status, response status, review gate, and due date.
3. Keep `Not assigned`, `Not started`, and `Not verified` distinct. Do not translate them to `Compliant`.
4. Mark coverage as `Covered`, `Partially covered`, `Not covered`, `Not applicable—human decision`, or `Unknown—needs source` only when the evidence supports the status.
5. Calculate no score unless the source provides scoring rules. If evaluation weights are absent, state that they are not available.

## Output contract

Return a `Compliance Matrix` with `requirement_id`, `requirement_summary`, `mandatory_status`, `source_location`, `response_owner`, `planned_section`, `evidence_status`, `response_status`, `review_gate`, `due_date`, and `open_question`. Add a coverage summary by category, but never present the summary as bid/no-bid advice.

## Stop conditions

Stop with `Missing Requirement Register` if no extracted register is provided. Stop with `Unverified coverage` when a response status would require a technical, legal, security, commercial, or delivery judgment.
