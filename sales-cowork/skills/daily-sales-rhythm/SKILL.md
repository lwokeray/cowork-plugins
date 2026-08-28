---
name: daily-sales-rhythm
description: >-
  Prioritizes up to three evidence-backed sales actions for today from the user's available Microsoft 365 context.
  Use when the user asks what to do today, which customer action comes first, which commitment is overdue,
  or how to prioritize seller work. Do not use for meeting preparation, meeting follow-up, deal diagnosis,
  forecast review, or broad market research.
metadata:
  author: lwokeray
  version: "1.0.0"
---

# Daily Sales Rhythm

## Purpose

Return the smallest useful set of next actions for the current day. Prefer available Outlook calendar and email signals, Teams commitments, Planner assignments, and approved account context. Use only sources visible to the signed-in user.

## Guardrails

- Never infer a commitment, owner, or customer priority from tone, attendee lists, or activity volume.
- Do not expand a prioritization request into account research, deal review, or forecast analysis unless the user explicitly asks to continue.
- Do not create, update, send, assign, or publish anything. A missing or unavailable source stays `unknown`.
- Keep customer data in the current user's permitted scope and cite the source beside each recommended action.

## Workflow

1. Confirm the time scope is today in the user's working timezone; ask only if it is unclear.
2. Read available same-day meetings, customer commitments, overdue or due-today Planner work, and time-sensitive approved account signals.
3. Rank no more than three actions by deadline, customer impact, and evidence of an explicit commitment.
4. For each action, state why now, suggested owner, due time or date, and the record that supports it.
5. If the leading action is meeting preparation, offer to prepare that one meeting only.

## Output format

| Priority | Next action | Why now | Owner | Due | Evidence |
|---|---|---|---|---|---|
| 1 |  |  |  |  |  |

Then add `Unknowns or excluded signals` and end with `Read-only prioritization complete`.
