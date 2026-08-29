---
name: meeting-follow-up
description: >-
  Creates a reviewable post-meeting package for one customer meeting: internal note, customer follow-up email draft,
  and proposed Planner tasks. Use when the user asks to close the loop after a meeting, extract customer commitments,
  draft follow-up, or turn meeting actions into approved Microsoft 365 actions. Do not use for deal review or proposal authoring.
metadata:
  author: lwokeray
  version: "1.4.0"
---

# Meeting Follow-Up

## Purpose

Create three distinct review artifacts from one completed meeting: an internal note, a customer email, and Planner task proposals. Use Work IQ MCP `ask` for the meeting context and `fetch` for exact recap, transcript, chat, note, and message evidence. Route approved Planner work to `sales-task-planning`.

## Guardrails

- Resolve one completed meeting before producing any artifact. Stop when the meeting or evidence is ambiguous.
- Use the Teams recap or transcript, meeting metadata, and related messages available through Work IQ as evidence. Label each item as `stated`, `inferred`, or `unresolved`.
- Never turn a seller's own intention into a buyer commitment. Do not invent task owners or due dates.
- Before sending email, posting to Teams, scheduling, or making another consequential change, show the exact action and preserve Cowork's approval checkpoint. Do not change commercial or forecast fields.

## Workflow

1. Resolve one completed customer meeting with Work IQ `ask`, then use `search_paths`, `get_schema`, and `fetch` to verify the exact available meeting evidence.
2. Extract buyer evidence: decision process, commitments, objections, requested materials, owner, date, and timestamp.
3. Produce the internal note, the email draft, and task proposals separately.
4. For every task with unknown owner or due date, leave the field `unknown` rather than guessing.
5. For create or update, discover the path and schema. For `do_action`, require an exact URL supported by Work IQ. Present the action for Cowork approval and treat policy denial as final.

## Output format

### Evidence

| Item | Status | Owner | Due | Source |
|---|---|---|---|---|
|  | stated / inferred / unresolved |  |  |  |

### Internal note

- **Facts:**
- **Inferences:**
- **Unknowns:**

### Customer follow-up

`Draft — approval required before send`

**Subject:**

**Message:**

### Proposed tasks

| Task | Proposed owner | Proposed due | Source | Action state |
|---|---|---|---|---|
|  |  |  |  | proposed / awaiting approval / completed / blocked |

End with the current action state: `Draft ready`, `Awaiting approval`, `Approved and completed`, or `Blocked`.
