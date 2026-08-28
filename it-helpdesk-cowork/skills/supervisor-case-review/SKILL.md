---
name: supervisor-case-review
description: >-
  Reviews open Dynamics 365 Customer Service cases for a Help Desk supervisor and drafts safe re-engagement actions.
  TRIGGER — use when the user asks to review a case queue, find stale or blocked cases,
  identify cases waiting for requester information, compare priority and status,
  prepare a supervisor brief, or draft a re-engagement message from Dynamics 365 cases.
  SKIP only when the user asks for a single-case brief, knowledge-grounded reply,
  escalation handoff, or a system outside Dynamics 365 Customer Service.
license: MIT
metadata:
  author: lwokeray
  version: "1.0.0"
---

# Supervisor Case Review

## Purpose

Help a supervisor identify open Dynamics 365 Customer Service cases that need attention and prepare reviewable next actions. The skill reads the case grid, case records, activities/timeline, queue context, and available SLA indicators. It does not silently change routing, priority, ownership, or status.

## Guardrails

- Query only records the signed-in supervisor is permitted to see.
- Do not infer an SLA breach from Created On alone. Use an actual available SLA indicator or mark the result `unknown`.
- Do not treat a status such as `On Hold`, `Waiting for Details`, or `Researching` as proof that the requester is at fault.
- Do not send a re-engagement message, reassign a case, change priority, or resolve a case without a Cowork approval/edit/dismiss checkpoint.
- Do not claim a queue or owner recommendation when the relevant routing configuration is unavailable.
- Never include private or unrelated case data in a requester-facing draft.

## Workflow

1. Confirm the requested scope: current user, queue, view, status, priority, age window, or waiting condition.
2. Read the available case grid and identify candidate cases using visible fields such as case title, case number, priority, origin, customer/requester, status reason, created on, and any tenant-enabled SLA/activity columns.
3. Open each candidate case and read the latest available activity/timeline entry, owner, queue, and case history.
4. Classify each case as `waiting for requester`, `waiting for resolver`, `needs supervisor decision`, `active investigation`, or `unknown`.
5. Produce a concise review table with evidence for inclusion.
6. Draft a re-engagement or internal follow-up message only for cases where the case records support the proposed purpose.
7. Present any proposed field update, reassignment, note, or message for approval before execution.

## Output Format

### Review scope

| Field | Value |
|---|---|
| User / role |  |
| Cases view or queue |  |
| Filter used |  |
| Time window |  |
| Read timestamp |  |

### Cases needing attention

| Case number | Subject | Priority | Status | Created on | Latest activity | Attention reason | Evidence |
|---|---|---|---|---|---|---|---|
|  |  |  |  |  |  |  |  |

### Decision per case

| Case number | Classification | Safe next step | Missing information | Proposed owner/queue, if evidenced |
|---|---|---|---|---|
|  |  |  |  |  |

### Draft message, if requested

`Draft only — not sent and not written back`

**Subject:**

**Message:**

### Action boundary

End with one of: `Read-only review complete`, `Draft ready for supervisor approval`, `Needs tenant field or activity verification`, or `No eligible cases found`.
