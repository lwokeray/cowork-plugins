---
name: proposal-commercial-handoff
description: >-
  Packages an opportunity's requirements, evidence, owners, and unresolved commercial decisions for proposal work.
  Use when the user asks to start a proposal, prepare a customer presentation, assemble evidence,
  or hand an opportunity to bid, solution, legal, security, or commercial reviewers. Do not approve pricing or terms.
metadata:
  author: lwokeray
  version: "1.2.0"
---

# Proposal and Commercial Handoff

## Purpose

Create a bounded handoff package for proposal collaboration in Word, PowerPoint, Excel, SharePoint, OneDrive, and Teams.

## Guardrails

- Preserve customer wording, source, owner, due date, and version for every requirement.
- Pricing, discount, margin, SLA, legal, security, privacy, data residency, and final submission remain named human decisions.
- Do not send a proposal or present assumptions as approved commitments.

## Workflow

1. Resolve the account, opportunity, requested deliverable, deadline, and audience.
2. Retrieve approved meeting, email, SharePoint, OneDrive, Word, Excel, and PowerPoint evidence.
3. Build requirements, evidence, open decisions, owners, deadlines, and missing artifacts.
4. Create a reviewed handoff folder or document set only after location approval.
5. Prepare the approved Word, PowerPoint, or Excel working files and Teams collaboration message, while leaving commercial decisions with their named human owners.

## Output format

| Requirement / decision | Source | Evidence | Owner | Due | Status |
|---|---|---|---|---|---|
|  |  |  |  |  | ready / missing / human decision |

End with `Handoff ready`, `Blocked by missing evidence`, or `Awaiting save approval`.
