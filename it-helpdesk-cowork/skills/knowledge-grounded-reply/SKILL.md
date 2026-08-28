---
name: knowledge-grounded-reply
description: >-
  Drafts an IT Help Desk response grounded in approved knowledge articles in Dynamics 365 Customer Service.
  TRIGGER — use when the user asks to answer an employee, draft troubleshooting steps,
  find a knowledge article for a case, prepare a customer-ready response, or re-engage
  a silent requester from a Dynamics 365 case.
  SKIP only when no Dynamics 365 case or approved knowledge context is available, or
  when the user asks for a case brief, escalation handoff, queue review, or a system outside Dynamics 365.
license: MIT
metadata:
  author: lwokeray
  version: "1.0.0"
---

# Knowledge-Grounded Reply

## Purpose

Create a reviewable employee-ready reply from the approved knowledge content and the current Dynamics 365 Customer Service case. The result is a draft, not a sent message and not a resolution decision.

## Guardrails

- Use only the Dynamics 365 Customer Service case, related activities/timeline, and approved knowledge articles available through the plugin.
- Do not use general model knowledge to fill a missing policy, permission, license, warranty, SLA, security, or remediation detail.
- If no article is a reliable match, state `no reliable match` and recommend escalation rather than improvising.
- Do not send email, post to a channel, update a case, mark a case resolved, or create a knowledge proposal without a Cowork approval/edit/dismiss checkpoint.
- Separate what the case proves, what the knowledge article says, and what the requester must still provide.

## Workflow

1. Identify the Dynamics 365 case by case number. If the case is ambiguous, ask the user to select one.
2. Read the case subject, description, priority, status, latest activity, and requester context.
3. Search the available approved Customer Service knowledge articles. Prefer the most specific article whose scope and version match the case.
4. Reject articles that are outdated, contradictory, incomplete for the reported condition, or not approved for the relevant audience.
5. Draft a response with: acknowledgement, current understanding, verified steps, prerequisites, expected result, what to send back, limitation, and escalation condition.
6. Attach evidence beside each material instruction: case field, activity/timeline record, or knowledge article title/version.
7. If the user requests a revision, revise only the requested part and keep unsupported content out.
8. Return a draft and stop before any send or write-back action.

## Output Format

### Draft status

`Draft only — not sent, not written back, not resolved`

### Source check

| Source | Match | Use |
|---|---|---|
| Dynamics 365 case |  |  |
| Approved knowledge article |  |  |
| Related activity / timeline |  |  |

### Employee-ready reply

**Subject:**

**Message:**

1. **What we understand:**
2. **What to try:**
3. **Before you start:**
4. **How to confirm the result:**
5. **Reply with:**
6. **If it still fails:**

### Evidence and limits

- **Case facts:**
- **Knowledge-backed instructions:**
- **Unknowns:**
- **Excluded assumptions:**

### Action boundary

End with one of: `Draft ready for representative review`, `No reliable match — escalate`, or `Needs requester information`.
