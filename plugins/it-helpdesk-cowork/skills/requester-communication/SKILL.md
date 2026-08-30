---
name: requester-communication
description: |
  Drafts clear, calm, evidence-based communications for IT support requesters.
  Use when a user asks to "acknowledge this ticket", "ask the customer for information",
  "write a progress update", "explain the workaround", "notify them of escalation",
  "confirm service restoration", or "draft a closure message". Supports acknowledgement,
  information request, progress, workaround, escalation, and closure drafts without sending them
  or promising unsupported outcomes.
license: MIT
metadata:
  author: lwokeray
  version: 2.0.1
---

# IT Requester Communication

## Overview

Turn verified case information into a requester-facing message that is useful, respectful, and appropriate for the channel. Communicate what is known, what is being done, what is needed, and when the next update is expected only when that commitment is recorded.

## When to Use

- Acknowledging receipt of an IT incident or service request
- Asking targeted questions or requesting diagnostic evidence
- Sharing a progress update when resolution is not yet available
- Explaining an approved workaround and its limits
- Notifying the requester that a specialist or another resolver is being engaged
- Confirming restoration and requesting validation
- Drafting a closure message based on recorded resolution evidence
- De-escalating a frustrated interaction without making false promises

## When NOT to Use

- Giving technical steps that require knowledge verification — use `knowledge-grounded-reply`
- Writing internal escalation details — use `escalation-handoff`
- Publishing a broad outage update — use `major-incident-coordination`
- Sending a message, adding a case note, or closing a case without a platform approval checkpoint
- Disclosing private notes, other requesters, sensitive logs, security indicators, or internal blame

## Quick Start

```text
User: "Draft an update for CAS-10482. The issue is still under investigation."

1. Read the latest verified case state and last requester contact.
2. Choose the communication type and audience.
3. State current impact, completed work, and next action without claiming a cause.
4. Include a next-update time only if one is recorded or requested and feasible.
5. Return a draft and internal evidence note; do not send it silently.
```

## Required Context

Before drafting, establish:

- Exact case and intended recipient
- Channel: email, portal, chat, Teams, phone follow-up, or another approved channel
- Current symptom, impact, and service state
- Last requester message and unanswered questions
- Work completed and recorded results
- Workaround, if approved and applicable
- Current owner or resolver and next action
- Any recorded update commitment
- Audience language, locale, and technical level when known

If recipient identity is ambiguous, do not guess. Resolve it through approved directory or case data, or ask the user.

## Core Instructions

### 1. Choose the Communication Type

| Type | Required content |
|---|---|
| Acknowledgement | What was received, interpreted impact, case reference, immediate next step |
| Information request | Why the information matters, minimal safe questions, secure submission guidance |
| Progress update | Current verified state, work completed, result, next action, next update commitment if real |
| Workaround | Applicability, prerequisites, steps or approved article, limitations, rollback or stop condition |
| Escalation notice | Why specialist involvement is needed, what has been preserved, what happens next |
| Restoration validation | What appears restored, validation evidence, exact confirmation requested |
| Closure | Confirmed outcome, resolution summary, retained workaround or prevention guidance, reopen path |

Use one primary purpose per message. If two purposes are necessary, order them by what the requester must do first.

### 2. Build an Evidence Card

Before writing external text, list internally:

- Confirmed facts
- Requester statements
- Unknowns
- Approved instructions or workaround
- Proposed next action
- Information that must remain internal

Do not put unresolved hypotheses, internal priority debates, queue disputes, personnel criticism, or unrelated case details into the message.

### 3. Acknowledge Impact Without Overclaiming

Use specific, neutral language:

- “I understand that five Finance users cannot open the payroll portal.”
- “We are reviewing the 503 responses reported since 09:10.”
- “The current evidence does not yet confirm the cause.”

Avoid dismissive or adversarial language such as:

- “Just try again.”
- “You must have changed something.”
- “This is not our problem.”
- “As I already told you.”
- “There is no issue on our side.”

When the requester is frustrated, acknowledge the operational consequence, not an emotion you cannot know. Do not mirror hostility or promise special priority outside policy.

### 4. Request Information Safely

Ask only for information that changes diagnosis or fulfillment readiness. Explain why each item is needed. Prefer short, answerable questions and give examples of safe values.

Never request:

- Passwords or authentication codes
- Session cookies, access tokens, private keys, or recovery keys
- Full identity documents or unrelated personal information
- Unredacted logs when a narrow excerpt or correlation ID is sufficient

Provide an approved secure channel for sensitive artifacts when one is configured. Otherwise, ask the user not to post them and route the collection requirement internally.

### 5. State Progress Precisely

Differentiate:

- `Completed`: action and result are recorded
- `In progress`: an actor is actively working and that state is recorded
- `Planned`: action is proposed but not started
- `Waiting`: a specific dependency is outstanding

Do not convert “assigned to a queue” into “a specialist is actively investigating.” Do not give an estimated resolution time without an authoritative commitment. A next-update time is not a resolution promise.

### 6. Explain Workarounds and Restoration

Only include a workaround that is approved, applicable, and safe for the requester. State:

- What it enables
- Who and which environment it applies to
- Important limitations or side effects
- When to stop using it
- Whether it is temporary

For restoration, distinguish service telemetry, resolver validation, and requester confirmation. Ask the requester to test the exact failed action when appropriate.

### 7. Draft for the Channel

**Email or portal:** include subject, greeting, structured body, action requested, and case reference.

**Chat or Teams:** lead with current state, keep paragraphs short, and avoid a long diagnostic checklist in one message.

**Phone follow-up note:** provide a concise speaking outline and a separate internal record proposal.

Do not expose internal notes simply because the requester uses an internal company account.

### 8. Apply the Send Boundary

Return the communication as `Draft — not sent`. If an approved communication capability exists, use the platform checkpoint before sending. Treat adding the message to the case timeline, changing status, and closing the case as separate actions.

## Output Format

```markdown
# Requester communication — [Case ID]

- Type: Acknowledgement | Information request | Progress | Workaround | Escalation | Validation | Closure
- Channel: ...
- Audience: ...
- Status: Draft — not sent

## Draft
**Subject:** [for email or portal]

[Message text]

## Internal evidence note
- Facts used: ...
- Approved guidance used: ...
- Unknowns deliberately excluded: ...
- Requested requester action: ...
- Recorded next action / owner: ...
- Next-update commitment: ... | None recorded

## Action boundary
- Send: Requires platform approval
- Case note/status/closure: Not changed
```

## Message Patterns

### Acknowledgement

```text
We received your report that [specific symptom and impact]. The case reference is [ID].
We are [recorded immediate action]. To confirm the scope, please provide [minimal question].
```

### Progress Update

```text
We have completed [action], which showed [result]. The service is currently [verified state].
Next, [actor] will [recorded next action]. [Next update commitment, only if real.]
```

### Restoration Validation

```text
Our current checks show [specific restored behavior] as of [time and zone].
Please try [exact validation action] and tell us [specific expected observation].
```

## Guardrails

- Never claim a cause, fix, send, assignment, or closure that the system has not confirmed.
- Never blame the requester, another team, vendor, or individual.
- Never expose internal-only notes, unrelated case data, or sensitive diagnostic material.
- Never promise priority, resolution time, compensation, or policy exceptions without authority.
- Never use a security concern as ordinary troubleshooting content; follow the approved security route.
- Preserve accessibility: use plain language, short paragraphs, meaningful link text, and numbered sequences.

## Common Issues

| Issue | Correction |
|---|---|
| No new technical finding exists | Send a transparent progress update with completed work, blocker, and next action |
| Requester demands an ETA | Distinguish next-update time from resolution time and avoid unsupported promises |
| Case notes contain competing hypotheses | Exclude them or clearly state that the cause remains under investigation |
| A specialist queue accepted the case | Say it was routed or accepted; do not say active work began without evidence |
| Closure is proposed but requester has not validated | Draft a restoration validation message, not a confirmed closure message |

## Completion Checklist

- Exact audience, channel, case, and purpose are known
- Message uses only verified or clearly qualified information
- Requested action is minimal and safe
- Tone acknowledges impact and avoids blame
- Commitments are supported by the record
- Internal evidence and requester text are separate
- Message remains visibly unsent until approved

