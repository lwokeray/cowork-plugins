---
name: close-renewal-handoff
description: >-
  Prepares evidence-led close, internal delivery transition, adoption follow-up, and renewal handoffs in Microsoft 365.
  Use when the user asks to close the loop after agreement, transition to delivery or customer success,
  prepare a renewal review, or track post-sale commitments. Do not approve contractual or financial terms.
metadata:
  author: lwokeray
  version: "1.4.0"
---

# Close, Renewal, and Handoff

## Purpose

Preserve customer outcomes and commitments across close, delivery, adoption, and renewal using Cowork's built-in unified Work IQ MCP tools across Outlook, Teams, Calendar, Planner, SharePoint, OneDrive, Word, Excel, and PowerPoint.

## Guardrails

- Require signed or explicitly approved evidence before labeling an opportunity won or an obligation accepted.
- Keep contractual facts, delivery assumptions, customer commitments, and internal actions separate.
- Do not send, schedule, save, or change a shared renewal register without Cowork approval.

## Workflow

1. Confirm transition type: close preparation, delivery handoff, adoption follow-up, or renewal review.
2. Use Work IQ `ask` to retrieve the approved outcome, scope, stakeholders, dates, dependencies, documents, tasks, and unresolved commitments; verify material entities with `search_paths`, `get_schema`, and `fetch`.
3. Produce the internal handoff, customer communication draft, calendar checkpoints, Planner task proposal, and renewal or adoption register proposal.
4. Identify every missing owner, date, artifact, or approval.
5. Discover the path and schema for create or update; require an exact Work IQ-supported URL for `do_action`. Present the Outlook, Teams, Calendar, Planner, file, or register action for approval before execution.

## Output format

| Commitment / outcome | Customer owner | Internal owner | Due | Evidence | Risk / unknown | State |
|---|---|---|---|---|---|---|
|  |  |  |  |  |  | confirmed / proposed / blocked |

End with the next transition checkpoint and action state.
