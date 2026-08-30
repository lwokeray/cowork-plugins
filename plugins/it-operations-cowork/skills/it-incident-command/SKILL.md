---
name: it-incident-command
description: |
  Commands major enterprise IT incidents by establishing severity, roles, timeline, evidence,
  service-restoration strategy, communication cadence, decisions, workstreams, vendor engagement,
  and verified recovery. Use for widespread or critical outages, cybersecurity-impacting service
  disruption, data-loss risk, multi-team incidents, executive-impacting failures, disaster events,
  P1/P2 coordination, war-room management, status updates, handovers, or major-incident closure.
license: MIT
metadata:
  author: lwokeray
  version: "1.0.1"
---

## Overview

Coordinate restoration under pressure without losing ownership, evidence, or safety. Optimize for reduced business impact; defer permanent root-cause work until service is stable unless it is required for safe restoration.

## Activation Criteria

- Critical service unavailable or severely degraded
- Multiple users, business units, sites, regions, or tenants affected
- Active data-loss, regulatory, safety, or security risk
- Multiple resolver teams or vendors required
- Executive or customer communication cadence required
- Normal incident ownership is insufficient

## Roles

| Role | Accountability |
|---|---|
| Incident commander | Severity, priorities, decisions, cadence, closure |
| Technical lead | Diagnostic strategy and restoration plan |
| Communications lead | Audience-specific updates and consistency |
| Scribe | Timeline, evidence, decisions, actions, owners |
| Workstream lead | Bounded technical area and status |
| Business liaison | Business impact, workaround, acceptance |
| Security/privacy/legal liaison | Specialized risk and notification requirements |

Do not assign a person without confirmation. Mark unfilled roles explicitly.

## First 15 Minutes

1. Record detection time, first known impact, affected service, scope, and reporter.
2. Set provisional severity from impact and urgency.
3. Name the incident commander and scribe.
4. Open or identify the authoritative incident record and collaboration channel.
5. Freeze unrelated risky changes in the affected scope when authorized.
6. Check service/provider health, monitoring, recent changes, and similar reports.
7. Split bounded workstreams with one owner and one question each.
8. Establish communication cadence and next checkpoint.
9. Identify immediate safety, security, data, and regulatory concerns.
10. Choose restoration candidates with blast radius and rollback.

## Timeline Rules

- Use absolute timestamps with timezone.
- Record observation time separately from event time when different.
- Label entries as observed, reported, inferred, decision, action, or result.
- Record exact owner and target for every action.
- Preserve failed actions and reversals; do not rewrite the timeline into a success story.

## Restoration Decision

For each proposed action capture:

- Evidence supporting it
- Expected user impact
- Blast radius
- Data/security risk
- Approval owner
- Execution owner
- Rollback trigger and method
- Verification signal

Prefer rollback, failover, traffic shift, feature disablement, bounded restart, or capacity relief only when the corresponding risks and dependencies are understood.

## Communications

Every update must include:

1. Current service state
2. Confirmed user/business impact
3. What changed since the previous update
4. Current workstreams
5. Workaround, if verified
6. Next update time

Do not publish speculative root causes. Use “investigating” and name the evidence gap.

## Recovery and Closure

1. Validate service with synthetic checks, telemetry, dependency health, and representative user transactions.
2. Confirm backlog, retries, delayed messages, replication, data integrity, and security controls are normal.
3. Monitor for an agreed stability window.
4. Confirm business acceptance or document why it is pending.
5. End emergency changes and temporary access.
6. Record residual risk and follow-up owners.
7. Downgrade or close the major incident only after recovery criteria are satisfied.
8. Open problem/RCA work separately.

## Output Contract

Return an incident board:

```text
Incident: ID/title/severity/status
Commander and roles: Confirmed assignments
Impact: Verified scope and business consequence
Timeline: Timestamped evidence, decisions, actions, results
Workstreams: Owner / question / status / next action
Restoration: Plan / approval / rollback / verification
Communications: Last update / next update / audiences
Recovery criteria: Met / pending
Residual risks and follow-ups: Owner / due condition
```

Do not output hidden reasoning or create fictional incident IDs, owners, timestamps, or stakeholder messages.

## Guardrails

- Never let urgency erase approval, target verification, rollback, or data-safety checks.
- Do not perform destructive remediation solely to reduce incident duration.
- Preserve forensic evidence when compromise is possible.
- Keep security containment under the authorized security lead.
- Do not declare “resolved” because alerts cleared; verify the user path and data state.
- Do not expose sensitive topology, vulnerabilities, personal data, or security indicators to broad audiences.

## Common Issues

| Issue | Response |
|---|---|
| Too many people issuing commands | Centralize through commander and workstream leads |
| Competing root-cause theories | Assign discriminating checks; do not debate without evidence |
| Status updates drift | Use one incident record and timestamped facts |
| Recovery is partial | State affected and restored scopes separately |
| Vendor owns dependency | Start `it-vendor-escalation` without surrendering internal ownership |
| Incident recurs | Reopen/escalate and route permanent analysis to problem management |
