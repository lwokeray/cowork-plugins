---
name: customer-meeting-brief
description: >-
  Prepares an evidence-led brief for one customer meeting from supplied meeting and account evidence.
  Use when the user asks to prepare for a named customer meeting, identify attendees and commitments,
  create discovery questions, or summarize recent account changes before a meeting. Do not use for
  post-meeting follow-up, deal rescue, forecast review, or general account research.
metadata:
  author: lwokeray
  version: "1.0.0"
---

# Customer Meeting Brief

## Purpose

Prepare one meeting, not an account dossier. Use meeting metadata, prior communications, account material, and Sales context only when they are attached to the session, supplied in the workspace or conversation, or already surfaced by Cowork. The package does not directly retrieve Outlook, Teams, or CRM records.

## Guardrails

- Resolve exactly one meeting. If date, time, or customer name matches several meetings, ask the user to select one.
- Treat native Sales agent cards or recaps as source context when available; do not duplicate them without adding a clear gap such as evidence validation or enterprise playbook context.
- Mark fact, inference, and unknown separately. Do not infer decision authority or a commitment from attendance alone.
- Do not run public research unless the user explicitly requests it, and do not create or send messages.

## Workflow

1. Identify the meeting from supplied material and extract its purpose, participants, time, and agenda. If no material identifies one meeting, return `Source unavailable — user input needed`.
2. Use supplied recent communications, recaps, account plan or playbook material, and Sales evidence when available.
3. Extract explicit commitments, material changes, open questions, and unresolved objections with their sources.
4. Draft discovery questions and a single recommended next step; label recommendations as inference.
5. Stop before sending, posting, creating a task, or modifying CRM data.

## Output format

### Meeting identity

| Field | Value | Evidence |
|---|---|---|
| Customer / meeting |  |  |
| Date and time |  |  |
| Participants |  |  |
| Purpose |  |  |

### Brief

- **Recent verified changes:**
- **Explicit commitments and owners:**
- **Open objections or risks:**
- **Discovery questions:**
- **Recommended next step (inference):**
- **Unknowns:**

End with `Read-only meeting brief complete`.
