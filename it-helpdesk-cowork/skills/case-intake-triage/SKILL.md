---
name: case-intake-triage
description: |
  Converts a new IT support report into an evidence-backed case intake and triage proposal.
  Use when a user asks to "triage this ticket", "create an IT case", "classify this issue",
  "assess impact and urgency", "check for duplicate incidents", "route this support request",
  or provides an email, chat, call note, or portal submission that must become a Help Desk case.
  Produces proposed fields and follow-up questions; it does not silently create, prioritize,
  assign, route, close, or investigate the case.
license: MIT
metadata:
  author: lwokeray
  version: 2.0.0
---

# IT Case Intake and Triage

## Overview

Turn an incoming IT report into a consistent intake record that another service representative can act on. Preserve what the requester actually reported, distinguish verified data from interpretation, and propose classification, impact, urgency, duplicate candidates, and routing without presenting any proposal as an executed change.

## When to Use

- Converting an email, chat, phone note, or portal submission into a case proposal
- Reviewing a newly created case for missing intake data
- Distinguishing an incident, service request, question, access request, or security concern
- Assessing business impact and urgency from recorded evidence
- Looking for likely duplicates or a known active outage
- Preparing proposed case fields and a routing recommendation

## When NOT to Use

- Troubleshooting an already-triaged technical issue — use `technical-troubleshooting`
- Fulfilling an approved catalog request — use `service-request-fulfillment`
- Coordinating a declared service outage — use `major-incident-coordination`
- Investigating a suspected security incident; follow the organization's security escalation process
- Changing identity, endpoint, production, network, or security controls
- Creating, assigning, reprioritizing, routing, or closing a case without a platform approval checkpoint

## Quick Start

```text
User: "Triage this: Finance cannot open the payroll portal since 09:10. Five people see error 503."

1. Preserve the reported symptom, time, group, and error as requester statements.
2. Check the selected Customer Service environment for related active cases and advisories.
3. Propose type, affected service, impact, urgency, and routing from evidence.
4. List missing information and the fewest useful follow-up questions.
5. Return a structured intake; do not create or update a case silently.
```

## Required Context

Use only information visible through the active Dynamics 365 Customer Service environment and approved Microsoft 365 context. Prefer these sources, in order:

1. The original requester submission or conversation
2. Existing case fields and timeline entries
3. Active major incidents, service notices, and related cases
4. Approved service catalog and routing information
5. Published knowledge articles relevant to classification

Record the source of every material fact. If a source is unavailable, mark the field unknown rather than infer it.

## Core Instructions

### 1. Establish Intake Identity

Capture only fields supported by the source:

- Requester and beneficiary, if different
- Preferred contact channel when recorded
- Reported date and time, including time zone when available
- Affected service, application, device, location, or account
- Original subject and a normalized working title

Do not guess an employee identity, email address, device name, asset, location, department, or tenant.

### 2. Normalize the Report

Rewrite the issue as a compact symptom statement:

```text
[Who or what] cannot [expected action] in [service/environment] since [time],
and observes [specific error or behavior].
```

Keep the original wording available. Do not convert a user's theory such as “the firewall is blocking it” into a confirmed cause.

Capture:

- Expected behavior
- Observed behavior
- First known occurrence and last known good time
- Frequency or reproducibility
- Affected and unaffected scope
- Business task blocked or degraded
- Error text, code, screenshot, or attachment reference
- Changes noticed by the requester, explicitly labelled as reported

### 3. Classify the Work

Choose one proposed type and explain the evidence:

| Proposed type | Use when |
|---|---|
| Incident | An existing service or configuration is unexpectedly degraded or unavailable |
| Service request | The requester asks for a standard item, installation, resource, or approved service |
| Access request | Access, role, membership, credential lifecycle, or entitlement is requested |
| Information request | The requester needs instructions, status, or an answer without a service failure |
| Security concern | Phishing, malware, credential exposure, suspicious access, data exposure, or another security signal is reported |
| Unclear | Available evidence cannot distinguish the types |

A security concern requires prompt routing to the approved security process. Do not perform containment, evidence collection beyond approved case data, or forensic investigation under this skill.

### 4. Assess Impact and Urgency

Assess impact and urgency separately. Never derive priority from the requester's job title, tone, repeated messages, or a requested priority label.

**Impact evidence** may include:

- Number and type of users, sites, devices, or business services affected
- Complete outage versus partial degradation
- Availability of a safe workaround
- Data, regulatory, patient, customer, financial, or operational consequences explicitly recorded

**Urgency evidence** may include:

- Time until a documented business deadline
- Whether work is stopped or only slowed
- Rate at which impact is expanding
- Duration and whether a workaround can bridge it

Return qualitative impact and urgency using the organization's configured values when visible. If a configured priority matrix is available, use it and identify it. Otherwise, propose impact and urgency only and leave priority undetermined.

### 5. Check for Related Work

Search narrowly using the affected service, error code, time window, location, version, and symptom. A duplicate candidate must share more than generic words such as “slow,” “error,” or “cannot log in.”

For each candidate, record:

- Case or incident identifier
- Matching evidence
- Material differences
- Current status and owner, if visible
- Confidence: high, medium, or low

Do not merge or link cases automatically. If an active major incident plausibly explains the report, propose association and preserve any mismatched evidence.

### 6. Determine Completeness and Routing

Propose the queue or resolver group only when supported by service ownership or routing rules. Never infer ownership from an individual's name.

Ask only questions that change classification, impact, urgency, routing, or the first safe diagnostic step. Prefer three or fewer questions at a time. Do not request passwords, authentication codes, recovery keys, private keys, or unnecessary personal data.

### 7. Prepare Proposed Actions

Clearly label every mutation as proposed:

- Create or update case
- Set type, category, impact, urgency, or priority
- Associate a duplicate or major incident
- Assign or route
- Add an internal note
- Send a requester message

Use the platform approval checkpoint before any supported write action. If no approved write capability is active, provide copy-ready proposed values only.

## Output Format

```markdown
# Intake and Triage — [Working title]

## Intake status
- Completeness: Ready for triage | Needs requester information | Security escalation required
- Source: [email/chat/call/portal/existing case]
- As of: [timestamp and time zone]

## Reported facts
| Field | Value | Evidence source |
|---|---|---|
| Requester / beneficiary | ... | ... |
| Affected service | ... | ... |
| Symptom | ... | ... |
| Started / last known good | ... | ... |
| Scope | ... | ... |
| Business impact | ... | ... |
| Error evidence | ... | ... |

## Proposed classification
- Type: ...
- Impact: ...
- Urgency: ...
- Priority: ... | Undetermined
- Rationale: ...

## Related-work check
| Candidate | Matching evidence | Differences | Confidence |
|---|---|---|---|

## Proposed case fields
| Field | Proposed value | Basis |
|---|---|---|

## Missing information
1. ...

## Routing proposal
- Queue or resolver: ...
- Basis: ...

## Action boundary
- Not yet executed: ...
- Approval or tool required: ...
```

## Guardrails

- Treat requester statements as reported information until independently verified.
- Never state a root cause during intake unless an authoritative incident record already confirms it.
- Do not assign priority without recorded impact and urgency evidence.
- Do not expose unrelated cases, requester identities, internal notes, or sensitive diagnostics.
- Do not ask for secrets or collect data unrelated to resolving the case.
- Do not imply that a case, link, assignment, or message exists until the platform confirms the write.
- Keep security concerns intact and route them; do not downgrade them to ordinary incidents to simplify handling.

## Common Issues

| Issue | Correction |
|---|---|
| Request says “urgent” but gives no impact | Record requested urgency and ask what work is blocked and by when |
| Similar case has only a generic symptom | Keep it as a low-confidence candidate; do not mark duplicate |
| Service and owner are unknown | Use `Unclear`, ask a discriminating question, and avoid guessed routing |
| Multiple request types are mixed | Separate the primary failure from any fulfillment request and note both |
| Security language appears in a normal ticket | Preserve the signal and invoke the approved security escalation path |

## Completion Checklist

- Original report and normalized symptom are both represented
- Facts, requester statements, hypotheses, and unknowns are distinguishable
- Classification has evidence and an explicit confidence level when uncertain
- Impact and urgency are assessed independently
- Duplicate candidates include both matches and differences
- Follow-up questions are necessary and minimal
- All record changes and communications are clearly marked as proposed or confirmed

