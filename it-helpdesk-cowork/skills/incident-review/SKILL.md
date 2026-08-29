---
name: incident-review
description: |
  Produces a blameless, evidence-based review after an IT incident is stabilized or resolved.
  Use when a user asks to "write a post-incident review", "run a postmortem",
  "review the outage timeline", "analyze detection and recovery", "perform five whys",
  "capture lessons learned", or "draft corrective actions". It verifies the timeline,
  distinguishes root cause from contributing conditions, and proposes measurable follow-up;
  it does not assign blame, invent owners or due dates, or run during active response.
license: MIT
metadata:
  author: lwokeray
  version: 2.0.0
---

# Blameless IT Incident Review

## Overview

Create an operationally useful review after service has stabilized. Explain what happened, how impact evolved, how the organization detected and responded, what conditions shaped the outcome, and which verifiable improvements would reduce recurrence or impact.

## When to Use

- A major or significant incident is resolved or stable enough for review
- Teams need a verified detection-to-recovery timeline
- Root cause and contributing conditions need careful evidence assessment
- Monitoring, runbook, ownership, knowledge, or communication gaps need documentation
- Corrective and preventive actions need measurable completion criteria
- A blameless review document is required for governance or learning

## When NOT to Use

- The incident is active or service remains unstable — use `major-incident-coordination`
- Evaluating employee performance, assigning fault, or supporting disciplinary conclusions
- Forcing a root-cause statement when evidence is incomplete
- Creating work items, assigning owners, or setting dates that were not accepted
- Publishing sensitive incident details to an audience not authorized to receive them

## Quick Start

```text
User: "Draft the post-incident review for MI-204."

1. Confirm the incident is stable or resolved and define the review scope.
2. Collect the authoritative incident record, telemetry milestones, decisions, and communications.
3. Reconcile timestamps and mark any disputed events.
4. Assess impact, detection, response, mitigation, recovery, and validation.
5. Describe causal and contributing conditions only to the strength of the evidence.
6. Propose measurable actions; keep owners and dates unassigned unless recorded.
```

## Review Principles

- Be blameless: examine systems, conditions, incentives, interfaces, procedures, and information available at the time.
- Use evidence: distinguish observed events from recollection and interpretation.
- Preserve uncertainty: unresolved or contested details remain visible.
- Focus on learning: explain how safeguards behaved and how resilience can improve.
- Make actions verifiable: every accepted action needs an outcome and evidence of effectiveness.

Blameless does not mean accountability-free. It means evaluating whether ownership, controls, and decisions were clear without turning the review into personal fault attribution.

## Required Sources

Use the narrowest authorized evidence set:

1. Major incident or case record and linked service records
2. Service telemetry, health events, logs, and validation evidence
3. Incident bridge timeline, decision log, and workstream updates
4. Stakeholder and requester communications
5. Approved changes, releases, runbooks, knowledge, and monitoring definitions
6. Follow-up interviews or recollections, explicitly labelled as retrospective statements

Do not make private messages the sole basis for a causal conclusion when authoritative system evidence is available.

## Core Instructions

### 1. Define Scope and Completion State

State:

- Incident identifier, service, environment, and review period
- Incident state and restoration evidence
- Included and excluded services, regions, and teams
- Review audience and sensitivity
- Known evidence gaps

If the incident is not stable, stop the retrospective and return to active coordination.

### 2. Build and Reconcile the Timeline

Capture at least:

- Last known good
- Fault or initiating condition, if verified
- First user or system impact
- First detectable signal
- Actual detection
- Triage start
- Major incident declaration when applicable
- Key decisions and diagnostic turning points
- Mitigation start and effect
- Service restoration
- Technical and requester validation
- Closure or transition to monitoring

Normalize to one time zone while retaining original references. When sources disagree, show both, identify the stronger source, and mark the event disputed rather than selecting a convenient value.

### 3. Assess Impact

Record only supported measures:

- Services, features, regions, sites, users, devices, or transactions affected
- Full outage versus degradation
- Start and end of impact, including partial recovery
- Business or customer operations blocked
- Data, security, regulatory, financial, or safety implications when confirmed
- Workaround availability, adoption, capacity, and limitation

Separate incident duration, user-impact duration, detection delay, mitigation time, and validation time.

### 4. Analyze Detection and Response

Ask:

- What signal first existed, and was it monitored?
- What signal actually triggered response?
- Was the alert actionable and routed to the right owner?
- What information was missing during triage?
- Which checks reduced uncertainty, and which produced noise?
- Did runbooks, access, ownership, communication, and escalation paths work as expected?
- Which decisions improved or prolonged recovery, based on evidence available at that time?

Avoid hindsight bias. Evaluate decisions using the context and information available when they were made.

### 5. Establish Cause and Contributing Conditions

Use these labels:

| Label | Meaning |
|---|---|
| Confirmed causal condition | Evidence shows the condition was necessary or directly produced the failure mechanism |
| Contributing condition | Increased likelihood, blast radius, detection delay, or recovery time |
| Trigger | Event that activated a latent condition but may not be the underlying cause |
| Hypothesis | Plausible explanation requiring more evidence |
| Unknown | Evidence cannot currently resolve the question |

If using Five Whys, each link must be a supported, testable answer. Stop when evidence ends; do not force five levels.

```text
Observed failure → Why? [evidence]
Condition → Why was it possible? [control or design evidence]
Why was it not detected or contained? [monitoring or safeguard evidence]
```

Do not use “human error” as a terminal cause. Examine interface design, review mechanisms, access model, procedure clarity, workload conditions, automation, and safeguards.

### 6. Evaluate What Helped and What Hindered

Document concrete examples:

- Detection or telemetry that shortened response
- Runbooks, tools, expertise, communication, or architecture that limited impact
- Missing access, unclear ownership, noisy alerts, stale knowledge, or coordination delays
- Safeguards that failed, were absent, or worked as designed
- Workarounds that helped and risks they introduced

### 7. Draft Corrective and Preventive Actions

Group proposed actions by objective:

- Prevent recurrence
- Reduce blast radius
- Improve detection
- Shorten diagnosis or recovery
- Improve validation
- Improve communication and ownership
- Repair knowledge, runbook, or data-quality gaps

Each action must include:

- Specific outcome
- Evidence-based link to a review finding
- Proposed owner role, not an invented individual
- Due date only when accepted or required by policy
- Completion evidence
- Effectiveness measure and review point
- Dependencies and risk

Avoid vague actions such as “improve monitoring,” “add documentation,” or “be more careful.”

### 8. Preserve Approval Boundaries

The review may propose follow-up records, knowledge updates, monitoring changes, or control changes. It does not create, assign, publish, or implement them. Record accepted owners and dates only when confirmed through an authoritative decision.

## Output Format

```markdown
# Incident review — [Incident ID]: [Title]

## Review scope
- Incident state: ...
- Service / environment: ...
- Review window / zone: ...
- Included / excluded: ...
- Evidence limitations: ...

## Executive account
[What failed, verified impact, duration, restoration, and cause confidence.]

## Impact
| Dimension | Observed impact | Duration / scope | Evidence |
|---|---|---|---|

## Verified timeline
| Time | Event | Significance | Evidence | Confidence |
|---|---|---|---|---|

## Causal analysis
- Confirmed causal conditions: ...
- Triggers: ...
- Contributing conditions: ...
- Hypotheses: ...
- Unknowns: ...

## Detection and response
- What worked: ...
- What hindered: ...
- Decision analysis: ...

## Corrective and preventive actions
| Action outcome | Finding addressed | Owner | Due | Completion evidence | Effectiveness measure | Status |
|---|---|---|---|---|---|---|

## Knowledge and follow-up gaps
- ...

## Action boundary
- Proposed actions not yet accepted: ...
- Records/publications/changes not executed: ...
```

## Guardrails

- Never name a person as the root cause or use the review for performance judgment.
- Never force certainty, a Five Whys chain, an owner, or a due date when evidence or agreement is absent.
- Never alter the incident timeline to remove failed attempts or inconvenient decisions.
- Never conflate restoration, mitigation, trigger, contributing condition, and root cause.
- Never publish sensitive topology, vulnerabilities, personal data, or security details beyond the authorized audience.
- Never create work items or implement changes without the required approval process.

## Common Issues

| Issue | Correction |
|---|---|
| Incident record says resolved but telemetry is incomplete | State the recorded decision and the validation gap separately |
| Recollections conflict with system timestamps | Prefer authoritative timestamps and preserve the disagreement |
| “Deployment caused it” is assumed from timing | Identify the exact failure mechanism and supporting evidence |
| Five Whys reaches “engineer mistake” | Continue into safeguards, interface, procedure, review, and system conditions |
| Action says “improve alerts” | Define signal, threshold intent, owner, validation, and effectiveness measure |
| Owner has not accepted an action | Use a proposed owner role and leave status unaccepted |

## Completion Checklist

- Incident is stable and review scope is explicit
- Timeline is reconciled, timestamped, and source-backed
- Impact and response intervals are not conflated
- Causal labels match evidence strength
- Human actions are analyzed in system context
- Proposed actions are specific, measurable, and traceable to findings
- Owners, dates, publications, and implementation are not invented

