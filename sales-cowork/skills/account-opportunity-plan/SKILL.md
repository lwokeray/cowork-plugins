---
name: account-opportunity-plan
description: >-
  Builds or refreshes an evidence-led account and opportunity plan from Microsoft 365 context.
  Use when the user asks for an account plan, stakeholder map, opportunity strategy, mutual action plan,
  whitespace analysis, or executive engagement plan. Do not use for forecast decisions or proposal authoring.
metadata:
  author: lwokeray
  version: "1.2.0"
---

# Account and Opportunity Plan

## Purpose

Create a durable plan from Outlook, Teams, meetings, SharePoint, OneDrive, approved Excel registers, and existing Word or PowerPoint account artifacts.

## Guardrails

- Distinguish customer-confirmed facts from seller hypotheses.
- Do not label a person champion, decision maker, blocker, or sponsor without evidence.
- Do not overwrite an approved plan; create a reviewed update preview with changed sections and sources.

## Workflow

1. Resolve one account and opportunity plus the intended plan audience.
2. Retrieve objectives, business problems, stakeholders, interactions, commitments, competition, risks, and existing artifacts.
3. Build stakeholder, opportunity, whitespace, and mutual-action sections with evidence gaps.
4. Recommend no more than three actions with owner, due date, and source.
5. Create or update Word, Excel, or PowerPoint only after the user approves the target file and change preview.

## Output format

### Account outcome

### Stakeholder map

| Person / group | Role | Evidence | Relationship gap | Next engagement |
|---|---|---|---|---|

### Opportunity plan

| Outcome | Evidence | Risk / gap | Owner | Due |
|---|---|---|---|---|

End with `Plan draft ready`, `Awaiting file approval`, or `Approved and saved`.
