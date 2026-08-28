---
name: proposal-answer-draft
description: |
  Drafts one customer-facing answer for one identified proposal requirement using a supplied evidence set.
  Use when the user asks to draft or rewrite one RFP answer, response paragraph, requirement response, case-study paragraph, or executive-summary sentence and has supplied the requirement plus source evidence. Skip when evidence is missing, the task is to find sources, review risk, route SMEs, or approve the proposal.
license: Proprietary
metadata:
  author: CloudRiches Service
  version: "1.0"
---

# Proposal Answer Draft

## Single responsibility

Write one draft response for one requirement. Do not search for evidence, judge whether the opportunity should be bid, scan the whole proposal, route reviewers, or declare the answer approved.

## Required inputs

Require exactly one `pursuit_id`, one requirement record, a response format or length, target language, customer context, and an Evidence Set. If the Evidence Set is absent or marked `not usable`, stop and request evidence.

## Steps

1. Restate the requirement in working notes and preserve its ID and source location.
2. Use only the supplied evidence. Keep source title, version, location, and excerpt attached to every material statement.
3. Draft in the requested voice and format. Do not add facts, numbers, certifications, timelines, prices, SLA, warranty, legal language, or delivery promises beyond the evidence.
4. Use bounded wording when evidence is partial. Mark unsupported portions as `Needs SME confirmation` instead of smoothing them over.
5. Return the draft with a short claim list for the separate citation-check skill.

## Output contract

Return one `Draft Answer` containing `requirement_id`, `draft_text`, `claim_list`, `citations`, `unsupported_items`, `assumptions`, `required_reviewer`, and `status`. Valid statuses are `Draft—needs citation check` or `Blocked—evidence missing`.

## Stop conditions

Stop if more than one requirement is requested, if the source belongs to another pursuit without explicit approval, or if the requested wording would make a high-risk commercial, legal, security, SLA, warranty, or submission commitment.
