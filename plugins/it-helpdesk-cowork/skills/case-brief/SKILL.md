---
name: case-brief
description: |
  Builds a concise, evidence-grounded brief for an existing IT support case.
  Use when a user asks to "summarize this case", "brief me on this ticket", "prepare for a handoff",
  "what happened on this incident", "show the latest case status", or needs a one-screen view of
  symptoms, impact, timeline, work performed, knowledge used, unknowns, ownership, and next step.
  This skill summarizes visible records and does not change the case or claim an unverified cause.
license: MIT
metadata:
  author: lwokeray
  version: 2.0.1
---

# IT Case Brief

## Overview

Create a reliable one-screen brief for a single IT case so a service representative, resolver, or supervisor can understand the current state without rereading the full timeline. Every material statement must be traceable to the case, an approved related record, or permitted Microsoft 365 context.

## When to Use

- Preparing to take ownership of an existing case
- Reviewing a case before contacting the requester
- Giving a shift-change or resolver overview
- Answering “what is the latest status?”
- Condensing a long case timeline while preserving key evidence
- Preparing context before troubleshooting, escalation, or supervisor review

## When NOT to Use

- Creating or triaging a new case — use `case-intake-triage`
- Building a full escalation packet — use `escalation-handoff`
- Producing an active outage command brief — use `major-incident-coordination`
- Drafting the external response — use `requester-communication` or `knowledge-grounded-reply`
- Changing priority, owner, status, notes, or routing

## Quick Start

```text
User: "Brief me on case CAS-10482."

1. Resolve the exact case in the selected Customer Service environment.
2. Read core fields, timeline, recent interactions, work notes, and linked records.
3. Separate confirmed facts, requester statements, hypotheses, and unknowns.
4. Identify the latest meaningful state and safest next step.
5. Return the brief with evidence references and an as-of time.
```

## Required Sources

Read the narrowest set of records needed:

1. Exact case record and configured fields
2. Case timeline, internal notes, and requester communications
3. Linked incidents, problems, service requests, assets, or entitlements when visible
4. Referenced knowledge articles and their publication state
5. Approved Microsoft 365 messages or files directly related to the case

Do not search unrelated users or cases. For long timelines, inspect the most recent entries first, then retrieve earlier entries needed to establish the symptom, decisions, or changes in state.

## Core Instructions

### 1. Resolve the Exact Case

Use a case identifier when available. If multiple cases match a title or requester, show the minimal identifiers needed to disambiguate and do not combine them.

Capture the brief's `as of` timestamp and selected environment. A status statement without a timestamp can be misleading.

### 2. Read Case Identity and Service State

Record only configured, visible values:

- Case identifier and title
- Requester and beneficiary when relevant
- Affected service, application, asset, device, or location
- Case type, category, status, priority, queue, owner, and channel
- Created time, last modified time, and most recent meaningful interaction
- SLA state or target only when an actual configured SLA record is visible

Do not infer SLA risk from age alone or expand acronyms and categories without authoritative definitions.

### 3. Reconstruct the Operational Story

Condense the timeline into these elements:

- Original symptom and expected behavior
- Scope and documented business impact
- First known occurrence and last known good state
- Important changes in scope, status, or ownership
- Diagnostics and actions already performed
- Result of each action, including “no change” or “result not recorded”
- Workaround and whether the requester confirmed it
- Latest requester and resolver communications

Prefer event timestamps over prose order. If timestamps conflict, call out the conflict.

### 4. Evaluate Evidence Quality

Assign every material statement to one of these classes:

| Class | Meaning |
|---|---|
| Confirmed fact | Directly supported by a system record, observable result, or authoritative incident record |
| Requester statement | Reported by the requester but not independently verified |
| Working hypothesis | A proposed explanation still requiring a test |
| Unknown | Missing, ambiguous, contradictory, or inaccessible information |

Never transform a resolver's tentative note into a confirmed root cause. “Issue resolved” is not sufficient when the resolution evidence or requester confirmation is absent.

### 5. Review Related Knowledge and Records

For each linked or used knowledge article, state:

- Article identifier and title
- Publication or approval state, if visible
- Why it applies to the case's product, version, environment, and symptom
- Whether its steps were attempted and the recorded outcome

For a related case or active incident, include the exact shared evidence and any material difference. Do not call records duplicates solely because the titles are similar.

### 6. Determine the Current State

Summarize:

- What is happening now
- Who is expected to act next, based on recorded ownership or communication
- What evidence is missing
- What is blocking progress
- The lowest-risk next step that most reduces uncertainty

If the case is waiting on the requester, identify the specific unanswered question and last contact time. If it is waiting on a resolver, identify the promised or recorded next action without inventing a date.

## Output Format

```markdown
# Case brief — [Case ID]: [Title]

- As of: [timestamp and time zone]
- Environment: [selected Customer Service environment]
- Status / priority: [recorded values]
- Owner / queue: [recorded values]
- Requester / beneficiary: [recorded values]
- Affected service: [recorded value or Unknown]
- SLA: [recorded state or Not visible]

## Current situation
[Two to four sentences: symptom, scope, impact, and latest state.]

## Key evidence
| Time | Evidence or action | Result | Source |
|---|---|---|---|

## Work completed
- [Action] → [recorded result]

## Knowledge and related records
| Record | Relevance | Applicability or difference |
|---|---|---|

## Assessment
- Confirmed facts: ...
- Requester statements: ...
- Working hypotheses: ...
- Unknowns or conflicts: ...

## Next step
- Recommended next step: ...
- Expected actor: ...
- Why this step: ...
- Approval or tool boundary: ...
```

## Quality Rules

- A brief should be compact, but never omit a material contradiction, failed attempt, security signal, or business impact.
- Use exact timestamps for important events and state the time zone.
- Report an absent result as `Result not recorded`; do not assume success.
- Use the case's configured labels instead of translating them into a different support taxonomy.
- If source access is incomplete, identify what could not be read.
- Do not reproduce full emails, chat threads, log files, or personal data when a concise evidence statement is sufficient.

## Guardrails

- Never claim an update, assignment, contact, resolution, or closure occurred unless confirmed by the platform.
- Never disclose internal notes or sensitive diagnostics in a requester-facing context.
- Do not recommend destructive troubleshooting or access changes as a “next step.”
- Do not merge evidence from different cases, environments, or tenants.
- Do not treat correlation, timing, or a workaround as proof of root cause.

## Common Issues

| Issue | Correction |
|---|---|
| Timeline says “fixed” but no validation exists | State that a fix was reported and validation is not recorded |
| Case priority conflicts with impact notes | Show both and flag the inconsistency; do not silently recalculate |
| Multiple owners appear | Use current configured owner and summarize earlier ownership in the timeline |
| A knowledge article is linked but not used | Record it as linked, not as a completed troubleshooting step |
| Latest note is administrative | Find the latest event that materially changed diagnosis, service state, or next action |

## Completion Checklist

- Exact case and environment are identified
- Brief has an as-of timestamp
- Current symptom, scope, impact, and state are clear
- Actions include recorded outcomes
- Evidence classes are kept separate
- Knowledge applicability is evaluated rather than assumed
- Unknowns, conflicts, blocker, next actor, and next step are explicit
