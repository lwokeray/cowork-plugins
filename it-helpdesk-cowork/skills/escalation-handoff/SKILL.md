---
name: escalation-handoff
description: >-
  Prepares an evidence-based IT Help Desk escalation handoff from a Dynamics 365 Customer Service case.
  TRIGGER — use when the user asks to escalate a case, prepare a resolver handoff,
  summarize impact and attempted actions, identify missing information, or route a
  difficult Dynamics 365 case to the next owner.
  SKIP only when the user asks for a simple case brief, knowledge-grounded reply,
  supervisor queue review, or a system outside Dynamics 365 Customer Service.
license: MIT
metadata:
  author: lwokeray
  version: "1.0.0"
---

# Escalation Handoff

## Purpose

Give the next Dynamics 365 Customer Service resolver enough context to act without repeating first-line investigation. The handoff is a reviewable proposal; it does not perform endpoint remediation, password reset, production change, or autonomous routing.

## Guardrails

- Read the case, activities/timeline, related knowledge, and available queue/owner context through Dynamics 365 Customer Service only.
- Preserve the difference between employee report, record fact, inference, and unknown.
- Never claim a root cause unless a Dynamics 365 record or approved knowledge article proves it.
- Do not reassign a case, change priority, add a note, send a message, or resolve a case without presenting the exact proposed fields and waiting for Cowork approval/edit/dismiss.
- Recommend a queue or owner type only when the available case data supports the recommendation. Do not invent queue names.
- If the evidence is insufficient, identify the missing field or activity and ask for it.

## Workflow

1. Identify one Dynamics 365 case by case number. Ask for confirmation if more than one case matches.
2. Read the case identity, requester, product/service, priority, status, owner, queue, SLA indicators, description, and related activities.
3. Reconstruct the timeline in chronological order. Keep timestamps and actors when available.
4. List every troubleshooting or service action already attempted and its result.
5. Check approved knowledge context and state whether it was followed, unavailable, or not a reliable match.
6. Assess impact from case evidence: one requester, multiple requesters, business-critical service, or unknown.
7. Produce the handoff format below.
8. Stop at the human checkpoint. If the user approves a write action, show the exact Dynamics 365 field/note/assignment change before execution.

## Output Format

### Handoff status

`Draft only — no case update, reassignment, message, or resolution performed`

### Case and impact

| Field | Value | Evidence |
|---|---|---|
| Case number |  |  |
| Subject |  |  |
| Requester |  |  |
| Product / service |  |  |
| Priority / status |  |  |
| Current owner / queue |  |  |
| Impact |  |  |
|
### Timeline and attempts

| Time / actor | Event or action | Result | Evidence |
|---|---|---|---|
|  |  |  |  |

### Resolver handoff

- **Known facts:**
- **Employee expectation:**
- **Knowledge checked:**
- **What remains unknown:**
- **Why L1 should escalate:**
- **Suggested next safe step:**
- **Suggested queue or owner type, if evidenced:**
- **Incoming owner must confirm:**

### Proposed Dynamics 365 action

State one of: `No write action proposed`, `Proposed note pending approval`, `Proposed reassignment pending approval`, or `Proposed resolution pending approval`. Include the exact target fields and values when a proposal exists.
