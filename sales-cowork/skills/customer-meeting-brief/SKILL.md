---
name: customer-meeting-brief
description: >-
  Prepares an evidence-led brief for one customer meeting using Work IQ and Microsoft 365 context.
  Use when the user asks to prepare for a named customer meeting, identify attendees and commitments,
  create discovery questions, or summarize recent account changes before a meeting. Do not use for
  post-meeting follow-up, deal rescue, forecast review, or general account research.
metadata:
  author: lwokeray
  version: "1.2.0"
---

# Customer Meeting Brief

## Purpose

Prepare one meeting, not an account dossier. Use Work IQ, Calendar Management, Meetings, Enterprise Search, Outlook, Teams, SharePoint, OneDrive, and approved account files to retrieve permission-accessible meeting metadata, prior communications, and account context.

## Guardrails

- Resolve exactly one meeting. If date, time, or customer name matches several meetings, ask the user to select one.
- Treat native Sales agent cards or recaps as source context when available; do not duplicate them without adding a clear gap such as evidence validation or enterprise playbook context.
- Mark fact, inference, and unknown separately. Do not infer decision authority or a commitment from attendance alone.
- Do not run public research unless the user explicitly requests it, and do not create or send messages.

## Workflow

1. Resolve one meeting through Work IQ and Calendar Management, then extract its purpose, participants, time, and agenda. Ask for selection only when multiple meetings match.
2. Retrieve recent communications, meeting recaps, account plan or playbook material, and opportunity evidence from approved Microsoft 365 sources.
3. Extract explicit commitments, material changes, open questions, and unresolved objections with their sources.
4. Draft discovery questions and a single recommended next step; label recommendations as inference.
5. Stop before sending, posting, scheduling, or changing a shared file or register.

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
