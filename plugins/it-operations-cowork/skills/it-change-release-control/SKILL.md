---
name: it-change-release-control
description: |
  Plans, assesses, approves, executes, validates, and reviews enterprise IT changes and releases
  with scope, dependency, risk, test evidence, maintenance windows, communications, rollback,
  separation of duties, and post-change monitoring. Use for production configuration changes,
  Microsoft 365 tenant changes, infrastructure updates, network or firewall changes, endpoint
  deployments, patches, releases, emergency changes, CAB preparation, maintenance notices,
  implementation plans, rollback plans, or change validation.
license: MIT
metadata:
  author: lwokeray
  version: "1.0.1"
---

## Overview

Make change risk visible and execution verifiable. A change plan is not authorization, and a successful command is not successful service delivery.

## Change Types

| Type | Criteria |
|---|---|
| Standard | Pre-authorized, repeatable, low risk, documented, proven rollback |
| Normal | Requires assessment and approval appropriate to risk |
| Emergency | Urgent to restore service or reduce immediate risk; uses emergency approval and retrospective review |

Do not label a novel or high-impact change “standard” to bypass governance.

## Required Change Record

- Business outcome and technical scope
- In-scope and out-of-scope resources
- Environment, tenant, region, users, services, and data affected
- Owner, implementer, validator, approver, and communications owner
- Dependencies and concurrent changes
- Risk, blast radius, security/privacy/compliance impact
- Preconditions and backups
- Test evidence
- Step-by-step implementation with checkpoints
- Rollback triggers, steps, time, and data consequences
- Maintenance window and expected interruption
- Validation and monitoring criteria

## Workflow

1. Resolve exact targets from live inventory.
2. Capture current state and desired state.
3. Check policy, locks, approvals, dependencies, conflicts, capacity, and freeze windows.
4. Review test evidence against production-relevant conditions.
5. Classify risk using likelihood, impact, detectability, reversibility, novelty, and blast radius.
6. Choose pilot/canary and batch boundaries.
7. Obtain required approvals; preserve separation of duties for high-risk changes.
8. Send approved maintenance communication with user impact and support path.
9. Recheck preconditions immediately before execution.
10. Execute one bounded step at a time and record timestamps/results.
11. Stop on rollback trigger or unexpected scope.
12. Validate configuration, runtime, dependencies, user transaction, security controls, and monitoring.
13. Monitor through the agreed window.
14. Close as successful, backed out, failed, or partially successful with evidence.
15. Review emergency and failed changes.

## Rollback Quality Gate

A valid rollback must state:

- Exact restore point or prior configuration
- Data written after change and how it is reconciled
- Identity, DNS, certificate, client-cache, and propagation implications
- Estimated rollback time
- Authority to trigger rollback
- Validation after rollback

“Redeploy previous version” is insufficient when state, schema, data, or external dependencies changed.

## Output Contract

Return:

```text
Change: Type, outcome, scope, window
Current → desired state: Exact delta
Risk: Blast radius, dependencies, security/data impact
Approvals: Required and obtained
Implementation: Ordered steps and checkpoints
Rollback: Trigger, steps, data handling, owner
Validation: Config, runtime, transaction, monitoring
Result: Successful / backed out / failed / partial / not executed
Residual risk and follow-up: Owner and due condition
```

Do not output hidden reasoning, fabricated approvals, or invented test evidence.

## Guardrails

- Do not execute because a plan exists; confirm authorization and window.
- Never widen scope silently during implementation.
- Never remove backups, locks, policies, security controls, or monitoring merely to make a change pass.
- Do not proceed when rollback is impossible unless the authorized risk owner explicitly accepts it.
- Preserve exact per-target results for bulk changes.
- Verify from authoritative state and a user transaction.
- Emergency does not mean unrecorded.

## Common Issues

| Issue | Correction |
|---|---|
| Approval covers different scope | Stop and obtain scoped approval |
| Pilot succeeds | Continue only through planned gates; do not skip batches |
| Change API returns success | Read back effective config and service behavior |
| Rollback exceeds window | Reassess go/no-go before execution |
| Concurrent change detected | Pause and resolve ownership/dependency |
| Partial batch failure | Stop or continue according to predeclared threshold; report every target |
