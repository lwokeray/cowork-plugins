---
name: lead-intake-qualification
description: >-
  Qualifies inbound B2B Sales leads from Outlook and approved Excel or SharePoint intake evidence.
  Use when the user asks to review new inquiries, classify leads, identify missing qualification data,
  or prepare the first safe next action. Do not use for bulk outreach, opportunity planning, or forecast review.
metadata:
  author: lwokeray
  version: "1.4.0"
---

# Lead Intake and Qualification

## Purpose

Turn one lead or a bounded batch of up to ten new inquiries into evidence-led qualification briefs. Use Work IQ MCP `ask` for related context and `fetch` for exact Outlook, Teams, file, people, Planner, and register evidence.

## Guardrails

- Separate sender statements, internal facts, qualification inference, and missing information.
- Never infer budget, authority, need, timing, consent, or fit from job title or company size alone.
- Do not send outreach or change a shared register without showing the exact action and preserving Cowork approval.

## Workflow

1. Confirm the intake scope, time window, and approved lead register.
2. Use Work IQ `ask` to locate the inquiry and related context, then `search_paths`, `get_schema`, and `fetch` to verify exact communications, people, register rows, and duplicates.
3. Assess business need, stakeholder, urgency, fit, next information needed, and routing recommendation.
4. Produce one qualification brief per lead and one recommended next action.
5. For a register or Planner create/update, discover the path and schema. For a reply, require an exact Work IQ-supported action URL. Show the mutation, wait for approval, then use the relevant tool or route Planner work to `sales-task-planning`.

## Output format

| Lead | Evidence-backed need | Qualification | Missing information | Owner | Next action | Source |
|---|---|---|---|---|---|---|
|  |  | qualify / nurture / disqualify / unknown |  |  |  |  |

End with `Read-only qualification complete`, `Awaiting approval`, or `Approved and completed`.
