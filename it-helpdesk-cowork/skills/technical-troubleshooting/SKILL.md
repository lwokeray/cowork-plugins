---
name: technical-troubleshooting
description: |
  Creates and maintains an evidence-led troubleshooting record for an IT support case.
  Use when a user asks to "troubleshoot this issue", "analyze these logs", "suggest the next check",
  "compare failed and working users", "diagnose this error", "record troubleshooting steps",
  or needs ranked hypotheses and low-risk discriminating tests. It does not execute commands,
  change endpoints or production systems, expose secrets, or present correlation as root cause.
license: MIT
metadata:
  author: lwokeray
  version: 2.0.0
---

# Evidence-Led Technical Troubleshooting

## Overview

Guide IT diagnosis as a controlled sequence of observations and low-risk tests. The goal is to reduce uncertainty, preserve a reproducible record, avoid repeated work, and make the handoff clear when the current resolver cannot safely continue.

## When to Use

- Diagnosing an existing incident after intake and initial classification
- Reviewing error codes, screenshots, event details, or supplied log excerpts
- Comparing affected and unaffected users, devices, versions, or locations
- Ranking plausible hypotheses and selecting the next discriminating check
- Recording what was tried, by whom, when, and with what result
- Deciding whether evidence supports resolution, monitoring, requester input, or escalation

## When NOT to Use

- Creating or triaging a new case — use `case-intake-triage`
- Executing scripts, commands, configuration changes, credential resets, access grants, or security containment
- Performing digital forensics or investigating a suspected security incident
- Giving unsupported generic troubleshooting steps when approved knowledge is required
- Declaring a root cause solely from a temporal correlation or successful workaround

## Quick Start

```text
User: "Troubleshoot case CAS-10482. The portal returns 503 for Finance, but HR works."

1. Restate the expected and observed behavior.
2. Establish the time window, affected scope, environment, and last known good state.
3. Read prior attempts and available evidence before suggesting anything new.
4. Rank hypotheses by fit and list evidence for and against each one.
5. Propose one low-risk check that best separates the leading hypotheses.
6. Record the result before changing the hypothesis ranking.
```

## Evidence Model

Keep these categories visibly separate:

| Category | Definition | Example |
|---|---|---|
| Observation | Directly recorded behavior or system output | HTTP 503 at 10:14 UTC |
| Requester statement | A user's description not yet independently verified | “It started after the update” |
| Known fact | Observation corroborated by an authoritative source | Service health shows the endpoint degraded |
| Hypothesis | Testable explanation for the symptom | Regional dependency failure |
| Test | A safe action designed to distinguish hypotheses | Compare a known-working region |
| Result | What the test actually produced | Working region returns 200 |
| Unknown | Missing or contradictory information | Exact application version not recorded |

Do not use words such as “caused,” “confirmed,” or “root cause” unless the evidence supports them.

## Core Instructions

### 1. Establish the Diagnostic Frame

Capture:

- Expected behavior and observed behavior
- Exact error text or code without paraphrasing away important details
- Start time, last known good time, frequency, and reproducibility
- Affected and unaffected users, devices, locations, networks, versions, and actions
- Business impact and workaround state
- Environment: production, test, device type, operating system, application version, browser, network, or other relevant dimensions

If these are not known, ask the smallest number of questions that will change the next test.

### 2. Review Prior Work

Read existing case notes, requester messages, approved knowledge, related incidents, and supplied diagnostic artifacts. Build a deduplicated list of attempted actions.

For every prior action, record:

- Timestamp and actor if visible
- Action performed
- Preconditions or scope
- Observed result
- Whether the environment changed afterward

Never repeat a disruptive or failed step without a stated reason and updated evidence.

### 3. Inspect Logs and Errors Safely

When log excerpts are supplied:

1. Confirm source, system, time zone, and covered time range.
2. Focus on the incident window and compare with a known-good window when possible.
3. Group repeated events by normalized signature while preserving counts and representative timestamps.
4. Correlate IDs only within their documented scope.
5. Separate the initiating error from retries and downstream symptoms.
6. Redact secrets, tokens, cookies, authorization headers, recovery keys, personal data, and unrelated payloads.

Do not invent undocumented meanings for error codes. If a vendor reference is not available, state that interpretation remains unverified.

### 4. Build Ranked Hypotheses

Each hypothesis must be falsifiable and tied to evidence:

| Rank | Hypothesis | Supporting evidence | Contradicting evidence | Missing evidence | Confidence |
|---|---|---|---|---|---|

Use confidence as a communication aid, not a numeric probability unless the organization defines one. Include an “insufficient evidence” option when appropriate.

Avoid hypotheses based only on stereotypes such as “network issue,” “user error,” or “permissions” without a specific mechanism and discriminating evidence.

### 5. Select the Next Check

Prefer a check that is:

- Read-only or easily reversible
- Within the user's and resolver's authorized access
- Narrowly scoped to the affected service or test account
- Able to distinguish at least two leading hypotheses
- Observable, with a clear expected result for each outcome
- Unlikely to affect availability, security, data integrity, or other users

Describe the check without pretending it was executed:

```text
Check: [what to inspect or compare]
Purpose: [which hypotheses it separates]
Expected if H1: [...]
Expected if H2: [...]
Stop condition: [when not to continue]
Required actor/tool/approval: [...]
```

Do not provide destructive commands, credential material, malware instructions, security bypasses, or unreviewed production changes.

### 6. Record the Result and Reassess

After the user supplies or an approved tool returns a result:

- Preserve the raw result reference
- State whether it supports, weakens, or does not affect each relevant hypothesis
- Update the known facts and unknowns
- Choose the next check only after reassessment

A workaround may restore service without identifying the cause. Record restoration and cause confidence separately.

### 7. Determine the Disposition

Recommend one state with evidence:

- Continue troubleshooting
- Waiting for requester information
- Monitor after a reversible workaround
- Escalate to a resolver with required expertise or access
- Validate restoration with the requester
- Ready for proposed resolution when symptom, restoration evidence, and closure criteria are met

Do not change case status or close the case under this skill.

## Output Format

```markdown
# Troubleshooting record — [Case ID]: [Title]

## Diagnostic frame
- Expected: ...
- Observed: ...
- Window / time zone: ...
- Affected / unaffected: ...
- Environment: ...
- Business impact / workaround: ...

## Evidence reviewed
| Time | Observation or source | Evidence class | Reference |
|---|---|---|---|

## Prior attempts
| Time | Action | Scope | Result | Interpretation |
|---|---|---|---|---|

## Ranked hypotheses
| Rank | Hypothesis | For | Against | Missing | Confidence |
|---|---|---|---|---|---|

## Next discriminating check
- Check: ...
- Purpose: ...
- Expected outcomes: ...
- Risk and stop condition: ...
- Required actor/tool/approval: ...

## Current disposition
- Recommendation: ...
- Resolution evidence: ... | Not yet established
- Remaining unknowns: ...
```

## Guardrails

- Read diagnostic data only from the selected case, linked systems, and explicitly approved context.
- Never ask for or reproduce secrets, passwords, tokens, cookies, private keys, or recovery codes.
- Never execute or imply execution of a command or change not confirmed by an approved tool.
- Never attribute fault to a person; describe conditions, interfaces, decisions, and system behavior.
- Never suppress contradictory evidence to make one hypothesis appear stronger.
- Stop and route suspected compromise, data exposure, malware, or unauthorized access to the approved security process.

## Common Issues

| Issue | Correction |
|---|---|
| Error occurs after a deployment | Treat timing as supporting context, not proof of causation |
| A workaround succeeds | Record restoration; continue to label cause as unknown unless verified |
| Logs contain many repeated errors | Cluster by signature and distinguish initiating errors from retries |
| No baseline is available | Seek an unaffected comparison or clearly state the limitation |
| Previous step has no result | Mark `Result not recorded`; do not repeat it automatically |
| The next test requires admin access | Prepare a handoff with the exact evidence and requested check |

## Completion Checklist

- Diagnostic frame includes expected and observed behavior
- Evidence window and time zones are explicit
- Previous attempts and results are not lost
- Hypotheses include evidence for, against, and missing
- Next check is low-risk, discriminating, and has stop conditions
- Workaround, restoration, and root cause are not conflated
- Disposition and authorization boundary are explicit

