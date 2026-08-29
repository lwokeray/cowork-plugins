---
name: sales-outreach-engagement
description: >-
  Prepares and coordinates evidence-led customer outreach through Outlook, Teams, and Calendar.
  Use when the user asks for a personalized first touch, follow-up sequence, re-engagement message,
  meeting invitation, or scheduled engagement plan. Do not use for mass marketing or unapproved contact lists.
metadata:
  author: lwokeray
  version: "1.4.0"
---

# Sales Outreach and Engagement

## Purpose

Turn approved account evidence and a defined customer outcome into a bounded series of Outlook, Teams, and Calendar actions using Cowork's built-in unified Work IQ MCP tools.

## Guardrails

- Require a named audience, legitimate business context, objective, and source evidence.
- Don't fabricate personalization, customer events, references, or prior relationships.
- Do not send, post, schedule, or create a recurring automation without displaying the exact action and preserving Cowork approval.

## Workflow

1. Confirm audience, objective, channel, timing, and stop condition.
2. Use Work IQ `ask` for relevant context, then `search_paths`, `get_schema`, and `fetch` to verify the exact audience, prior communications, and calendar state.
3. Draft the smallest suitable sequence with one purpose per touch.
4. Check tone, duplication, sensitive data, unsupported claims, and calendar conflicts.
5. For create or update, confirm the path and schema. For `do_action`, require an exact URL supported by Work IQ. Present each action for approval and don't retry policy denial.

## Output format

| Step | Channel | Timing | Purpose | Draft / action | Evidence | State |
|---|---|---|---|---|---|---|
|  | Outlook / Teams / Calendar |  |  |  |  | draft / awaiting approval / completed |

End with the next approved engagement checkpoint.
