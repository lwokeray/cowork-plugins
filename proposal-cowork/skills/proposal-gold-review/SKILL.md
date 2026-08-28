---
name: proposal-gold-review
description: |
  Prepares the Gold Team executive authorization packet for one proposal pursuit.
  Use when the user explicitly asks for a Gold review, executive final review, residual-risk acceptance packet, final authorization brief, or leadership decision record. Skip for Blue, Pink, Red, Green, bid/no-bid, drafting, or submission execution.
license: Proprietary
metadata:
  author: CloudRiches Service
  version: "1.2"
---

# Proposal Gold Review

## Single responsibility

Prepare the evidence packet for executive authorization. Do not approve on behalf of an executive, sign a contract, send the proposal, or interact with a submission portal.

## Required inputs

Require the final artifact/version, Red Review output, Green Review output, unresolved high-risk items, required attachments, submission deadline/rules, named executive decision-maker, and explicit decision options.

## Steps

1. Confirm the exact pursuit, final artifact version, response deadline, and decision-maker.
2. Summarize the customer ask, win themes, mandatory coverage, material evidence, residual risk, commercial assumptions, delivery commitments, legal/security status, and open conditions.
3. Distinguish `Ready for human sign-off`, `Blocked`, and `Approved by named executive`. Only the last state may be recorded after the human decision is supplied.
4. Present decision options with conditions: authorize, authorize with conditions, hold for changes, or no-go. Do not choose the option.
5. Record what the executive must explicitly confirm, including pricing, scope, SLA, legal terms, security claims, delivery capacity, and final artifact version.

## Output contract

Return a `Gold Decision Record` with `pursuit_id`, `artifact_version`, `final_artifact_version`, `decision_maker`, `decision_options`, `evidence_summary`, `residual_risks`, `required_confirmations`, `conditions`, `decision`, `decision_timestamp`, and `next_action`. Before a human response, `decision` must be `Pending human decision`.

## Stop conditions

Stop with `Gold review blocked` when a final artifact, accountable executive, Red/Green evidence, or required confirmation is missing. Never change `Pending human decision` to `Approved` based on confidence, consensus language, or an AI-generated summary.
