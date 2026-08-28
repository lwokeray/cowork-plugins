---
name: proposal-claim-citation-check
description: |
  Verifies that each material claim in one proposal draft is supported by an applicable source citation.
  Use when the user asks to fact-check citations, verify grounding, trace claims, check source coverage, or audit one draft answer against its evidence. Skip when the task is to find evidence, write new prose, review the whole proposal, or conduct a color-team gate.
license: Proprietary
metadata:
  author: CloudRiches Service
  version: "1.0"
---

# Proposal Claim and Citation Check

## Single responsibility

Check claim-to-source support for one draft. Do not rewrite the draft, add sources from memory, decide whether a risk is acceptable, or approve the proposal.

## Required inputs

Require one `pursuit_id`, one draft answer, its claim list, and the cited Evidence Set. Each source must be identifiable by title/version/location and be approved or explicitly marked as pending validation.

## Steps

1. Split the draft into material claims: capabilities, numbers, dates, outcomes, certifications, customer examples, staffing, scope, SLA, price, legal terms, security controls, and commitments.
2. Match each claim to the smallest supporting evidence excerpt. Check that the source actually supports the wording, not merely the topic.
3. Check customer, product, region, version, language, and date applicability. Flag claims that rely on expired, conflicting, or unrelated content.
4. Mark each claim `Supported`, `Partially supported`, `Unsupported`, or `Not applicable—requires human decision`.
5. Return remediation instructions. Do not silently make the claim weaker or stronger.

## Output contract

Return a `Claim Check` table with `claim_id`, `claim_text`, `source_id`, `source_location`, `support_status`, `gap`, and `required_reviewer`. Include `citation_coverage`, `unsupported_claims`, `stale_sources`, `high_risk_claims`, and `next_action`.

## Stop conditions

Stop with `Evidence package missing` if the draft has no claim list or source set. Escalate any price, legal, security, SLA, warranty, data-residency, or final-submission claim to its accountable human reviewer.
