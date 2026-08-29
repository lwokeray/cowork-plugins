---
name: escalation-handoff
description: |
  Prepares a complete, evidence-backed IT resolver escalation or handoff.
  Use when a user asks to "escalate this case", "prepare an L2 or L3 handoff",
  "send this to the application team", "build a vendor escalation", "summarize what was tried",
  or needs a resolver-ready packet with impact, timeline, diagnostics, hypotheses, attachments,
  knowledge checked, missing evidence, and the exact assistance requested. It does not assign,
  route, contact a vendor, or change priority without approval.
license: MIT
metadata:
  author: lwokeray
  version: 2.0.0
---

# IT Escalation Handoff

## Overview

Create a handoff that lets the receiving resolver continue from the current evidence instead of restarting the investigation. Explain why escalation is needed, what decision or action is requested, what has already been ruled in or out, and what remains unknown.

## When to Use

- Escalating from Help Desk to a specialist, resolver group, engineering team, or vendor
- Handing a case to another shift or service owner
- Requesting privileged diagnostics or an action outside the current resolver's authority
- Escalating after approved troubleshooting has been exhausted
- Preparing evidence for a third-party support case
- Returning a misrouted case with a clear routing basis

## When NOT to Use

- Briefing yourself on a case — use `case-brief`
- Coordinating a declared major incident — use `major-incident-coordination`
- Escalating only because the requester is senior, angry, or repeatedly asks
- Routing a suspected security incident through an ordinary resolver path
- Assigning, reprioritizing, sending, or sharing sensitive artifacts without approval

## Quick Start

```text
User: "Prepare CAS-10482 for L2 escalation."

1. Read the exact case, full diagnostic record, latest communications, and attachments.
2. Reconstruct a timestamped timeline and deduplicate attempted actions.
3. State current impact, service condition, workaround, and escalation trigger.
4. Label hypotheses and include evidence for and against them.
5. Name the receiving capability and exact assistance requested.
6. Return a handoff packet; keep assignment and sending as proposed actions.
```

## Escalation Preconditions

An escalation must have at least one evidence-backed reason:

- Required access, tool, environment, or expertise is outside the current resolver's authority
- An approved troubleshooting or knowledge path is exhausted
- Documented impact or urgency meets the organization's escalation rule
- The service owner or catalog explicitly requires the receiving group
- A vendor defect, platform condition, or external dependency requires third-party investigation
- Progress is blocked by conflicting records or a decision that only the receiving owner can make

If the escalation reason is only “no update,” first identify the actual blocker, owner, and last meaningful action.

## Core Instructions

### 1. Resolve the Target and Audience

Identify the receiving capability from service ownership, routing rules, approved runbooks, or the exact privileged action needed. Do not guess an individual or queue from memory.

For vendor handoffs, verify what contract, tenant, product, version, severity definition, and artifact-sharing rules are visible. Do not include credentials, tokens, personal data, or internal-only content.

### 2. Reconstruct the Case State

Capture:

- Case identifier, requester, affected service, environment, version, and asset when relevant
- Current status, configured priority, queue, owner, and actual SLA state if visible
- Expected versus observed behavior
- Affected and unaffected scope
- Business impact, workaround, and present service state
- First occurrence, last known good, detection, and important changes

Preserve any mismatch between configured priority and recorded impact rather than silently rewriting it.

### 3. Build a Verified Timeline

Use timestamps and source references. Include events that changed understanding, scope, service condition, or ownership:

- Requester observations
- System or log observations
- Diagnostic actions and results
- Workarounds and validation
- Knowledge articles used
- Resolver or vendor contacts
- State, ownership, or routing changes

Exclude routine acknowledgements unless they establish a commitment or missing response. If timestamps or records conflict, flag the conflict.

### 4. Consolidate Diagnostics

For each attempted action, specify:

| Action | Scope / precondition | Result | Interpretation | Evidence |
|---|---|---|---|---|

Use `Result not recorded` instead of inferring. Never list an article as attempted unless its relevant steps and outcomes are recorded.

Summarize large logs by source, time range, event signature, counts, representative timestamps, and correlation identifiers. Reference approved attachment locations rather than pasting sensitive raw content.

### 5. State Hypotheses Honestly

For each active hypothesis include:

- Testable mechanism
- Evidence supporting it
- Evidence contradicting it
- Evidence still needed
- Current confidence

Do not label the first, most popular, or most recent hypothesis as root cause. If an authoritative active incident confirms a cause, cite that record.

### 6. Define the Ask

The handoff must contain one primary request, such as:

- Interpret a specific diagnostic signal
- Run a named approved privileged check
- Confirm service-side behavior in a defined time window
- Validate a product defect against a stated version
- Decide between two documented routing or configuration paths
- Perform an authorized change under the receiving team's process

Avoid “please investigate” without scope. State what outcome will allow the case to progress.

### 7. Identify Missing Evidence and Blockers

Separate:

- Information requested but not received
- Evidence inaccessible to the current resolver
- Tool or permission limitation
- Conflicting records
- Pending external dependency
- Risk or approval preventing the next action

This prevents the receiver from mistaking an unknown for a negative finding.

### 8. Protect Data and Apply the Handoff Boundary

Include only data necessary for the receiving audience. Redact or omit secrets, unrelated user data, privileged topology, and internal notes not authorized for the vendor or group.

Return proposed receiver, priority or severity alignment, assignment, case note, and message separately. Use the platform checkpoint for each supported write or external communication.

## Output Format

```markdown
# Escalation handoff — [Case ID]: [Title]

## Handoff decision
- Proposed receiver: ...
- Escalation reason: ...
- Exact assistance requested: ...
- Required outcome: ...
- Action status: Proposed — not assigned or sent

## Current service state
- Expected / observed: ...
- Affected / unaffected: ...
- Business impact: ...
- Workaround: ...
- Status / priority / SLA: [recorded values]

## Verified timeline
| Time | Event | Result / significance | Source |
|---|---|---|---|

## Diagnostics completed
| Action | Scope | Result | Interpretation | Evidence |
|---|---|---|---|---|

## Knowledge and related records
| Record | Applicability | Outcome or difference |
|---|---|---|

## Active hypotheses
| Hypothesis | Supporting | Contradicting | Needed | Confidence |
|---|---|---|---|---|

## Artifacts
| Artifact | Source / time range | Sensitivity | Approved location |
|---|---|---|---|

## Missing evidence and blockers
- ...

## Proposed writes and communications
- Assignment / routing: ...
- Case note: ...
- Receiver message: ...
- Requester update: ...
```

## Guardrails

- Never escalate by seniority, frustration, or pressure alone; use service and impact evidence.
- Never assign, route, reprioritize, send, or share an artifact without the platform checkpoint.
- Never expose requester data or internal notes beyond the authorized receiving audience.
- Never call a hypothesis a root cause without authoritative evidence.
- Never erase failed attempts, contradictions, or unknowns to make the handoff appear cleaner.
- Use the approved security escalation route for compromise, malware, credential exposure, or data loss concerns.

## Common Issues

| Issue | Correction |
|---|---|
| Handoff says only “L1 steps completed” | List each action, scope, and recorded result |
| Receiver is chosen by habit | Verify service ownership or name the exact capability needed |
| Log file is too large | Summarize signatures and time window; reference an approved artifact location |
| Requester demands escalation | Record the request, then evaluate the documented escalation trigger |
| Priority appears too low | Flag the evidence mismatch and propose review as a separate action |
| Vendor should not see internal details | Produce a vendor-safe packet distinct from the internal handoff |

## Completion Checklist

- Receiver and escalation reason have an authoritative basis
- Current service state and impact are explicit
- Timeline is timestamped and evidence-backed
- Prior work includes results, not just actions
- Hypotheses remain labelled and balanced
- Exact receiver ask and success outcome are clear
- Artifacts are necessary, redacted, and audience-appropriate
- All routing, assignment, priority, notes, and messages remain proposed until approved
