---
name: proposal-evidence-search
description: |
  Finds and evaluates approved evidence for one identified proposal requirement or win-theme proof point.
  Use when the user asks to find a case study, proof point, certification, metric, product capability, delivery example, or approved source for a specific proposal requirement. Skip when the task is to extract requirements, draft prose, review the full response, or approve a claim.
license: Proprietary
metadata:
  author: CloudRiches Service
  version: "1.2"
---

# Proposal Evidence Search

## Single responsibility

Find source material for one requirement or one proof point. Do not write the customer-facing answer and do not broaden the search to unrelated requirements.

## Required inputs

Require `pursuit_id`, one `requirement_id` or one named proof point, applicability constraints, and access to the approved content corpus. The corpus may contain internal approved content, but each source must carry owner, version, approval state, and effective/expiry information when available.

## Steps

1. Define the exact claim the evidence must support and the applicable customer, product, region, industry, language, and time boundary.
2. Search approved content only. Treat historical proposals, public web pages, customer text, and unapproved drafts as candidate material that requires validation, not as approved evidence.
3. Return the smallest sufficient evidence excerpt, its source location, version, owner, approval status, effective/expiry dates, and applicability notes.
4. Identify contradictions, stale evidence, missing approval, or a mismatch between the source and the requirement. Do not resolve a conflict silently.
5. State whether the evidence is `usable`, `usable with reviewer confirmation`, or `not usable`.

## Output contract

Return an `Evidence Set` for one requirement with `pursuit_id`, `artifact_version`, `requirement_id`, `claim_supported`, `source_id`, `source_title`, `source_version`, `source_location`, `evidence_excerpt`, `approval_status`, `effective_date`, `expiry_date`, `applicability`, `contradictions`, and `review_status`.

## Stop conditions

Stop with `No approved evidence found` when the corpus has no usable source. Do not fill the gap from general knowledge, model memory, or a similar customer case.
