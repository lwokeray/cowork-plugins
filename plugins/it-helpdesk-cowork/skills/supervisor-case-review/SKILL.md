---
name: supervisor-case-review
description: |
  Reviews an IT Help Desk case queue for evidence-backed operational risks and follow-up needs.
  Use when a user asks to "review my support queue", "find stale tickets", "show blocked cases",
  "identify SLA risk", "check misrouted cases", "find cases waiting too long",
  "review reopened tickets", or "prepare a supervisor follow-up list". It uses configured status,
  SLA, ownership, interaction, and impact evidence; it does not score employee performance,
  silently assign work, change priority, close cases, or infer SLA breach from age alone.
license: MIT
metadata:
  author: lwokeray
  version: 2.0.1
---

# IT Help Desk Supervisor Case Review

## Overview

Provide a fair, current, evidence-backed review of visible support work. Identify cases at operational risk, explain the signal, recommend a specific next action, and draft appropriate follow-up without turning incomplete case records into judgments about individual performance.

## When to Use

- Daily or shift-change review of a Help Desk queue
- Finding high-impact, stale, blocked, waiting, misrouted, or reopened cases
- Reviewing actual SLA warning or breach indicators
- Finding cases with weak intake, missing diagnostics, missing requester contact, or unclear ownership
- Preparing internal follow-ups or requester re-engagement drafts
- Reviewing whether closed or resolved cases have adequate validation and notes

## When NOT to Use

- Ranking or evaluating employee productivity or performance
- Inferring negligence from case age, note count, or communication style
- Changing assignment, priority, status, routing, SLA, or closure without approval
- Aggregating cases outside the signed-in user's authorized environment and scope
- Performing root-cause or trend analysis — use `recurring-issue-analysis`
- Coordinating an active major incident — use `major-incident-coordination`

## Quick Start

```text
User: "Review the Tier 1 queue for cases needing action today."

1. Confirm environment, queue, filters, time zone, and review horizon.
2. Read lightweight case fields and configured SLA indicators for the visible scope.
3. Inspect detailed timelines only for cases matching a risk signal.
4. Classify the signal and cite the evidence.
5. Rank by documented service risk, not by requester status or agent volume.
6. Return proposed next actions and drafts; do not mutate the queue silently.
```

## Review Scope

Always state:

- Selected Customer Service environment
- Queue, team, owner, service, status, priority, or channel filters
- Included date range and time zone
- Whether closed and resolved cases are included
- Review horizon: current shift, today, next SLA window, or another explicit period
- Data unavailable or fields not configured

Do not expand scope beyond the user's authorized request. Use lightweight fields first and retrieve detailed timelines only for flagged cases.

## Operational Signals

| Signal | Evidence required |
|---|---|
| High impact | Recorded affected scope or business consequence, not title or tone |
| SLA warning or breach | Actual configured SLA status, timer, target, or breach record |
| Stale active work | No meaningful progress event within an agreed service-specific threshold |
| Waiting on requester | A specific unanswered request and last contact timestamp |
| Waiting on resolver | Recorded next action, owner, and no subsequent result |
| Blocked | Explicit dependency, missing access, approval, evidence, vendor, or system decision |
| Unowned or unclear ownership | Configured owner/queue absent or conflicting with current record |
| Possible misroute | Service ownership or routing rule conflicts with current queue |
| Reopened or repeat contact | Reopen or repeat-contact evidence and unresolved symptom |
| Weak documentation | Missing symptom, scope, action result, resolution evidence, or next actor |
| Closure risk | Resolved/closed state lacks required validation, resolution code, or requester outcome |

Age alone is not an SLA breach, and a low note count is not evidence of inactivity.

## Core Instructions

### 1. Retrieve the Queue Safely

Start with identifiers and relevant lightweight fields:

- Case ID and title
- Service, type, status, priority, queue, owner
- Created, modified, last meaningful interaction, and next target timestamps
- Configured SLA state
- Impact and urgency fields
- Waiting reason, blocker, reopen count, and linked major incident when configured

Avoid bulk retrieval of full message bodies, attachments, logs, personal profiles, or unrelated notes.

### 2. Validate Each Signal

For every flagged case, inspect the exact case timeline and related records necessary to confirm the signal. Determine:

- Latest event that materially changed service state, diagnosis, scope, ownership, or next action
- Latest requester contact and whether a response is actually due
- Latest resolver action and recorded result
- Current blocker or dependency
- Whether the case is covered by an active major incident
- Whether priority and impact evidence conflict

Remove false positives. For example, a recent administrative edit does not count as meaningful progress, while a diagnostic result may count even if the case's modified time did not update as expected.

### 3. Classify Risk Without Scoring People

Assign case-level attention:

- `Immediate`: verified major impact, actual SLA breach/warning, security route required, or loss of ownership that threatens service
- `This shift`: blocked, waiting follow-up due, misrouted, or no meaningful progress against a documented commitment
- `Monitor`: action is owned and within a recorded window, with no conflicting risk signal
- `No action from current evidence`: no defensible signal in the selected horizon

Explain the evidence. Do not create agent rankings, leaderboards, productivity metrics, quality scores, or behavioral conclusions.

### 4. Recommend the Smallest Useful Action

Choose a concrete next step:

- Clarify missing intake information
- Record the result of an already completed diagnostic action
- Contact the requester with a specific question
- Follow up with the current resolver on a recorded dependency
- Propose rerouting based on service ownership
- Propose impact or priority review based on contradictory evidence
- Associate with a major incident or recurring pattern — proposed only
- Validate restoration before closure
- Reopen or closure review under the configured process

Do not recommend reassignment merely to improve queue statistics.

### 5. Draft Follow-Up Content

Prepare one of:

- Internal supervisor note stating signal, evidence, and requested action
- Resolver follow-up stating blocker and desired result
- Requester re-engagement message with the minimum unanswered question
- Restoration validation message

Keep internal and requester-facing text separate. Do not mention internal performance or queue pressure to the requester.

### 6. Report Coverage and Limitations

State:

- Number of visible records in scope
- Number inspected in detail
- Number flagged by each signal
- Missing SLA, ownership, timeline, or impact data
- Any configuration-dependent thresholds used

Do not imply complete tenant coverage when permissions or filters limit visibility.

### 7. Apply the Action Boundary

All assignment, routing, priority, status, note, message, association, reopen, and closure actions remain proposals. Use the platform checkpoint for supported writes and verify the confirmed result afterward.

## Output Format

```markdown
# Supervisor case review — [Queue or scope]

## Review boundary
- Environment: ...
- Filters / horizon / time zone: ...
- Visible records: ...
- Detailed records inspected: ...
- Data limitations: ...

## Attention list
| Attention | Case | Signal | Evidence | Current owner / queue | Proposed next action |
|---|---|---|---|---|---|

## Case details
### [Case ID]: [Title]
- Current service state / impact: ...
- Verified signal: ...
- Last meaningful progress: ...
- Blocker / unanswered item: ...
- Proposed action and actor: ...
- Approval boundary: ...

## Follow-up drafts
### Internal
[Draft]

### Requester-facing
[Draft, when needed]

## Coverage summary
| Signal | Count | Notes |
|---|---:|---|

## Proposed writes
- [Assignment/routing/priority/status/note/message] — not executed
```

## Prioritization Rules

1. Security route or safety concern with authoritative evidence
2. Verified broad or critical service impact
3. Actual configured SLA breach or imminent warning
4. No owner or blocked next action threatening recovery
5. Requester or resolver commitment due within the review horizon
6. Documentation or closure-quality issue

Requester seniority, emotional tone, message volume, and relationship to staff do not increase operational priority unless organizational policy explicitly defines and records a relevant business-impact rule.

## Guardrails

- Never evaluate, rank, or infer the performance of individual employees.
- Never use age alone as proof of SLA breach, inactivity, or neglect.
- Never expose unrelated requester information, private notes, or sensitive diagnostics in the review.
- Never silently assign, route, reprioritize, message, reopen, resolve, or close a case.
- Never conceal data gaps or configuration limits behind a precise-looking score.
- Route security concerns through the authorized security process.

## Common Issues

| Issue | Correction |
|---|---|
| Case was modified recently but no progress occurred | Inspect the latest meaningful timeline event, not only modified time |
| Old case has a paused SLA | Report the actual configured SLA state and waiting reason |
| Requester has not replied | Confirm a specific answer is needed and last contact was sent before flagging |
| Queue assignment differs from service owner | Verify current routing rules before proposing reroute |
| Case is linked to an active outage | Coordinate with the major incident and avoid duplicate troubleshooting |
| Resolved case lacks requester confirmation | Check configured closure criteria; propose validation if required |

## Completion Checklist

- Review environment, filters, horizon, and limitations are explicit
- Every flagged case has case-level evidence
- SLA findings use actual configured indicators
- Attention ranking is based on service risk, not people metrics
- Next action and actor are specific
- Internal and requester communications are separated
- All writes remain proposed until platform approval and confirmation
