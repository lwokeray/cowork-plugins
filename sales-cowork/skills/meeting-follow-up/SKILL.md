---
name: meeting-follow-up
description: >-
  Creates a reviewable post-meeting package for one customer meeting: internal note, customer follow-up email draft,
  and proposed tasks. Use when the user asks to close the loop after a meeting, extract customer commitments,
  draft follow-up, or turn meeting actions into tasks. Do not use to send email, create Planner tasks, or update CRM records.
metadata:
  author: lwokeray
  version: "1.0.0"
---

# Meeting Follow-Up

## Purpose

Create three distinct review artifacts from one completed meeting: an internal note, an Outlook-ready customer email draft, and task proposals. The skill remains draft-only because this skills-only package has no write connector.

## Guardrails

- Resolve one completed meeting before producing any artifact. Stop when the meeting or evidence is ambiguous.
- Use available Teams recap or transcript, meeting metadata, and related messages as evidence. Label each item as `stated`, `inferred`, or `unresolved`.
- Never turn a seller's own intention into a buyer commitment. Do not invent task owners or due dates.
- Do not send external email, create Planner tasks, save documents, post to Teams, or change Dynamics 365 Sales fields.

## Workflow

1. Identify one completed customer meeting and read available recap, transcript, chat, and follow-up context.
2. Extract buyer evidence: decision process, commitments, objections, requested materials, owner, date, and timestamp.
3. Produce the internal note, the email draft, and task proposals separately.
4. For every task with unknown owner or due date, leave the field `unknown` rather than guessing.
5. State that the user must review and execute the proposed write in the appropriate Microsoft 365 surface.

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

`Draft — not sent`

**Subject:**

**Message:**

### Proposed tasks

| Task | Proposed owner | Proposed due | Source | Write status |
|---|---|---|---|---|
|  |  |  |  | not written |

End with `Draft package ready for review; no email, task, or record was created`.
