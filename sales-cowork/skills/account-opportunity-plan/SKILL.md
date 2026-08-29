---
name: account-opportunity-plan
description: >-
  Builds or refreshes an evidence-led account and opportunity plan from Microsoft 365 context.
  Use when the user asks for an account plan, stakeholder map, opportunity strategy, mutual action plan,
  whitespace analysis, or executive engagement plan. Do not use for forecast decisions or proposal authoring.
metadata:
  author: lwokeray
  version: "1.4.0"
---

# Account and Opportunity Plan

## Purpose

Create a durable plan from Microsoft 365 evidence. Use Work IQ MCP `ask` for cross-workload account reasoning and `fetch` for exact Outlook, Teams, meeting, Planner, SharePoint, OneDrive, Excel, Word, and PowerPoint entities.

## Guardrails

- Distinguish customer-confirmed facts from seller hypotheses.
- Do not label a person champion, decision maker, blocker, or sponsor without evidence.
- Do not overwrite an approved plan; create a reviewed update preview with changed sections and sources.

## Workflow

1. Resolve one account and opportunity plus the intended plan audience.
2. Use Work IQ `ask` to retrieve objectives, business problems, stakeholders, interactions, commitments, competition, risks, and artifacts; use `search_paths`, `get_schema`, and `fetch` to verify material entities.
3. Build stakeholder, opportunity, whitespace, and mutual-action sections with evidence gaps.
4. Recommend no more than three actions with owner, due date, and source.
5. For Word, Excel, PowerPoint, or Planner mutation, discover the path and schema, show a change preview, obtain approval, and use the supported `create_entity` or `update_entity`; route Planner operations to `sales-task-planning`.

## Output format

### Account outcome

### Stakeholder map

| Person / group | Role | Evidence | Relationship gap | Next engagement |
|---|---|---|---|---|

### Opportunity plan

| Outcome | Evidence | Risk / gap | Owner | Due |
|---|---|---|---|---|

End with `Plan draft ready`, `Awaiting file approval`, or `Approved and saved`.
