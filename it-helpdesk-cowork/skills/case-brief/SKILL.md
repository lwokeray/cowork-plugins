---
name: case-brief
description: >-
  Builds a one-screen IT Help Desk case brief from Dynamics 365 Customer Service.
  TRIGGER — use when the user asks for a case summary, one-screen brief, case context,
  recent activity, prior case history, or next-step briefing for a Dynamics 365 case.
  SKIP only when the user asks for a knowledge reply, escalation handoff, supervisor
  queue review, or a system outside Dynamics 365 Customer Service.
license: MIT
metadata:
  author: lwokeray
  version: "1.0.0"
---

# Case Brief

## Purpose

Turn one Dynamics 365 Customer Service case into a compact, evidence-led brief that a Help Desk representative can use without rereading the full record. Use only the Dynamics 365 Customer Service plugin and the records available to the signed-in user.

## Guardrails

- Start in read-only mode. Do not change case fields, add notes, send a message, route a case, or resolve a case while building the brief.
- Treat case, activity/timeline, knowledge, queue, routing, and SLA values as separate record types. Do not invent missing fields.
- Mark unsupported or unavailable information as `unknown` and state which record was not available.
- Separate record facts, reasonable interpretation, and unknowns.
- If the user requests a write-back after the brief, present a proposed action and its exact fields first. Wait for the Cowork approval/edit/dismiss checkpoint before any write action.

## Workflow

1. Identify the case by case number. If the user gives only a subject, search the available Dynamics 365 cases and ask for confirmation when multiple cases match.
2. Read the case identity and current state: case number, title, subject, customer or employee, product/service, case type, priority, status reason, owner, queue, and available SLA indicators.
3. Read related activities and timeline entries. Record the latest interaction, outstanding activity, attachments, and actions already attempted.
4. Check related or prior cases only when they are available in Dynamics 365 Customer Service and clearly linked to the same customer or issue.
5. Check relevant knowledge context without turning the brief into a troubleshooting answer.
6. Produce the output below. Cite the originating case, activity, timeline, or knowledge record beside each material fact.
7. Run a quality check: no unsupported root cause, no hidden assumptions, no missing unknowns, and no accidental write action.

## Output Format

### Case identity

| Field | Value | Evidence |
|---|---|---|
| Case number |  |  |
| Title / subject |  |  |
| Customer / employee |  |  |
| Product / service |  |  |
| Priority / status |  |  |
| Owner / queue |  |  |

### Situation

- **Employee or customer report:**
- **Current impact:**
- **Latest interaction:**
- **Activities already attempted:**
- **Related or prior cases:**

### Decision context

| Category | Content |
|---|---|
| Known facts |  |
| Reasonable interpretation |  |
| Unknowns |  |
| Next safe step |  |

### Evidence

List the Dynamics 365 Customer Service record, activity, timeline entry, or knowledge article supporting each important statement. If no evidence is available, write `unknown`.

### Action boundary

End with one of: `Read-only brief complete`, `Needs user clarification`, or `Proposed write action pending approval`.
