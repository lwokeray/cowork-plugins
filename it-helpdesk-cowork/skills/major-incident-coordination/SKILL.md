---
name: major-incident-coordination
description: |
  Maintains a fact-based operational brief for an active major IT incident or service outage.
  Use when a user asks to "coordinate this major incident", "build an outage brief",
  "update the incident timeline", "summarize current impact", "prepare a stakeholder update",
  "track incident workstreams", or "set the next checkpoint". It separates confirmed service
  state from hypotheses and proposed actions, and does not declare an incident, publish a status,
  change systems, or replace the authorized incident commander.
license: MIT
metadata:
  author: lwokeray
  version: 2.0.0
---

# Major IT Incident Coordination

## Overview

Provide a shared, current operational picture during a declared or candidate major incident. Maintain impact, service state, timeline, workstreams, decisions, risks, stakeholder message, and the next checkpoint using verified records. This skill supports coordination; governance and command authority remain with the organization's designated incident roles.

## When to Use

- A declared major incident or broad service outage is active
- Multiple resolver teams need a common operational brief
- Stakeholders need a verified internal update draft
- The incident commander needs a current timeline and decision log
- Teams need workstream status, dependencies, and explicit owners
- Service restoration needs validation across affected scope

## When NOT to Use

- A single ordinary case with limited impact — use `case-brief` or `technical-troubleshooting`
- Declaring or downgrading a major incident without authorized governance
- Conducting the post-incident review while response is still active — use `incident-review` after stabilization
- Publishing external status, changing production, invoking emergency access, or performing containment
- Inventing an incident commander, severity, bridge, ETA, cause, or recovery state

## Quick Start

```text
User: "Build the current brief for major incident MI-204."

1. Resolve the exact incident and capture the as-of timestamp.
2. Read authoritative service state, linked cases, timeline, communications, and workstreams.
3. Separate confirmed facts, requester reports, hypotheses, decisions, and unknowns.
4. State impact perimeter, current mitigation or restoration evidence, and open risks.
5. Draft the next stakeholder update and checkpoint; do not publish it silently.
```

## Source Priority

Prefer sources in this order:

1. Authorized major incident record and designated incident roles
2. Service telemetry or health records explicitly linked to the incident
3. Verified resolver updates and decision log
4. Linked cases and requester reports for scope evidence
5. Approved Microsoft 365 bridge notes, chats, messages, and files related to the incident

Treat a chat statement as reported until confirmed in the incident record or by an authoritative owner. Avoid broad searches across unrelated conversations.

## Core Instructions

### 1. Establish Incident Authority

Capture only recorded values:

- Incident identifier and title
- Declared state and severity
- Incident commander, technical lead, communications lead, and service owner
- Detection, declaration, and latest-update timestamps
- Communication channel or bridge reference
- Next scheduled checkpoint, if recorded

If the incident is only a candidate, label it `Candidate major incident` and identify the authorized declaration decision required.

### 2. Define the Impact Perimeter

Describe:

- Affected services, features, regions, locations, users, devices, or transactions
- Unaffected comparisons that constrain the scope
- Start time, last known good, and whether impact is stable, expanding, contracting, or unknown
- Complete outage versus degradation
- Recorded business, customer, operational, financial, regulatory, or safety consequence
- Workaround availability, capacity, limitations, and adoption

Use ranges or `at least` when counts are incomplete. Do not extrapolate from a small sample to the entire tenant.

### 3. State Current Service Condition

Use one of these carefully qualified states:

- Investigating
- Identified condition under validation
- Mitigation in progress
- Monitoring recovery
- Service restored pending validation
- Resolved by authorized incident record

For each state, cite the supporting record and timestamp. Do not state `restored` from one successful user test when broader impact was recorded.

### 4. Maintain the Operational Timeline

Include events that change impact, technical understanding, mitigation, decision, or communication:

| Time | Event | Evidence class | Operational significance | Source |
|---|---|---|---|---|

Use a single displayed time zone and preserve source time zones when necessary. Corrected events must remain traceable; do not silently rewrite history.

### 5. Track Workstreams

For each workstream record:

- Objective
- Accountable role or recorded owner
- Current status: Not started, Active, Blocked, Complete, or Unknown
- Last verified result and timestamp
- Dependency or blocker
- Next action and checkpoint

Do not report `Active` merely because a team was paged. Do not create owners or deadlines that were not accepted.

### 6. Manage Hypotheses and Decisions

Keep separate tables:

**Hypotheses**

| Hypothesis | Supporting evidence | Contradicting evidence | Test / needed evidence | Status |
|---|---|---|---|---|

**Decisions**

| Time | Decision | Decision owner | Evidence / constraint | Expected outcome | Revisit trigger |
|---|---|---|---|---|---|

A mitigation decision does not confirm a root cause. Record emergency, rollback, failover, or access actions only as proposals until authorized and confirmed by the responsible system.

### 7. Draft Stakeholder Communication

The update must contain:

- Timestamp and incident state
- Affected service and verified impact
- What has changed since the prior update
- Current mitigation or restoration state
- Workaround only when approved and safe
- Next checkpoint or update time only when recorded

Exclude raw hypotheses, blame, internal conflict, security-sensitive details, and unsupported ETAs. Prepare separate internal and external-safe drafts when audiences differ.

### 8. Validate Recovery

Before recommending transition to monitoring or closure, look for:

- Service telemetry returned to expected range
- Representative validation across affected scope
- Error rate, latency, transaction, or functional checks appropriate to the service
- Workaround removal or continuing-risk plan
- No known expanding impact
- Authorized owner decision

Record residual risk and gaps. Do not declare full restoration from incomplete telemetry.

### 9. Preserve Review Inputs

During response, preserve evidence needed later without conducting the retrospective:

- Verified timeline and decision records
- Detection and response milestones
- Mitigation and validation evidence
- Communications and checkpoint history
- Known gaps in monitoring, runbooks, ownership, or data

After stabilization, use `incident-review` for contributing conditions and follow-up actions.

## Output Format

```markdown
# Major incident brief — [Incident ID]: [Title]

- As of: [timestamp and zone]
- State / severity: [recorded values]
- Incident commander / service owner: [recorded values]
- Next checkpoint: [recorded value or Not set]

## Current service state
[Concise verified statement]

## Impact perimeter
| Dimension | Affected | Unaffected / unknown | Evidence |
|---|---|---|---|

## Timeline
| Time | Event | Class | Significance | Source |
|---|---|---|---|---|

## Workstreams
| Workstream | Owner | Status | Last result | Blocker | Next action |
|---|---|---|---|---|---|

## Hypotheses
| Hypothesis | For | Against | Needed | Status |
|---|---|---|---|---|

## Decisions and risks
| Time | Decision or risk | Owner | Basis | Revisit trigger |
|---|---|---|---|---|

## Stakeholder update draft
[Timestamped, audience-appropriate update]

## Recovery validation
- Telemetry: ...
- Functional validation: ...
- Scope validation: ...
- Residual risk: ...

## Action boundary
- Declaration/state changes: Not performed
- Communications: Draft — not published
- System actions: Outside this skill
```

## Guardrails

- Do not replace or impersonate the authorized incident commander or service owner.
- Do not declare, change severity, downgrade, resolve, publish, page, or change systems without approval.
- Do not state a root cause while evidence remains a hypothesis.
- Do not expose security-sensitive details, personal data, or internal-only discussions to broad audiences.
- Do not suppress uncertainty, contradictions, failed mitigations, or residual risk.
- Route security incidents through the authorized security response process.

## Common Issues

| Issue | Correction |
|---|---|
| Many cases report the same broad symptom | Establish shared service, time, and environment evidence before linking scope |
| Team was paged but has not responded | Record `Not started` or `Unknown`, not `Active` |
| One region recovered | State partial recovery and continue validation elsewhere |
| Mitigation appears successful | Separate restored service evidence from cause confidence |
| No next update time exists | State `Not set`; propose a checkpoint to the authorized coordinator |
| External update contains technical hypotheses | Replace with verified service impact and response state |

## Completion Checklist

- Incident authority and as-of time are clear
- Impact includes affected, unaffected, and unknown scope
- Service state has evidence and timestamp
- Timeline, workstreams, hypotheses, and decisions are distinct
- Stakeholder draft contains no unsupported cause or ETA
- Recovery evidence covers representative scope
- Every state change, publication, and system action remains subject to authorization

