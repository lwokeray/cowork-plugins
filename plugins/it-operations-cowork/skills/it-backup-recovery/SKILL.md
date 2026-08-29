---
name: it-backup-recovery
description: |
  Plans, validates, and coordinates enterprise backup, restore, disaster recovery, business
  continuity, failover, failback, retention, and recovery testing across files, Microsoft 365,
  endpoints, databases, applications, and cloud infrastructure. Use for deleted or corrupted data,
  restore requests, backup failures, ransomware recovery, DR exercises, RPO/RTO reviews, failover,
  failback, retention questions, recovery readiness, or continuity planning.
license: MIT
metadata:
  author: lwokeray
  version: "1.0.1"
---

## Overview

Recover the correct data or service to the correct target without overwriting good state, destroying evidence, or claiming recovery before integrity and business validation.

## Intake

- Requester and data/service owner
- Exact item, system, tenant, environment, and target
- Deletion/corruption/failure time and timezone
- Last known good point
- Required RPO and RTO
- Current production state and ongoing writes
- Legal hold, retention, privacy, and security constraints
- Whether compromise or ransomware is suspected

## Restore Workflow

1. Resolve source and target identifiers.
2. Verify requester authority and data ownership.
3. Preserve current state and security evidence.
4. Identify available recovery points and their completion/integrity status.
5. Select a recovery point based on business time, not only latest timestamp.
6. Determine overwrite, merge, rename, side-by-side, point-in-time, and dependency behavior.
7. Estimate data loss, downtime, downstream replay, and user impact.
8. Obtain approval for restore/failover when required.
9. Restore first to an isolated or alternate target when feasible.
10. Validate structure, integrity, permissions, application consistency, malware status, and representative business transactions.
11. Cut over only after acceptance.
12. Monitor and reconcile delayed or replayed work.
13. Record actual RPO, RTO, data variance, and residual risk.

## Backup Failure Workflow

1. Confirm job, policy, scope, target, schedule, retention, encryption, and last successful recovery point.
2. Inspect exact failure, capacity, credentials, network, locks, snapshots, application consistency, and recent changes.
3. Determine whether coverage is absent, degraded, delayed, or unverified.
4. Restore coverage with the least-risk correction.
5. Run a test recovery; a successful backup job alone does not prove recoverability.

## Disaster Recovery

Before failover establish:

- Primary and secondary health
- Replication lag and consistency
- RPO/RTO forecast
- DNS, identity, secrets, certificates, network, and dependency readiness
- Data-write ownership and split-brain prevention
- User routing and communication
- Failback criteria and method

After failover verify data integrity, transactions, background jobs, monitoring, security controls, and business acceptance.

## Ransomware/Security Boundary

- Coordinate with `it-security-response` before restoration.
- Preserve affected evidence and immutable backups.
- Verify clean recovery point and eradication status.
- Rotate compromised credentials/secrets through clean channels.
- Prevent restored systems from reconnecting to an untrusted environment.

## Output Contract

Return:

```text
Recovery request: Source, target, owner, reason
Recovery objective: RPO/RTO and required point
Available restore points: Time, integrity, limitations
Impact: Overwrite, data loss, downtime, dependencies
Plan: Backup/preserve, restore method, approval, rollback
Validation: Integrity, permissions, security, application, business transaction
Result: Restored / partial / failed / blocked / test only
Actual RPO/RTO and variance: Measured values
Residual risk and follow-up: Owner and due condition
```

Do not expose hidden reasoning, backup keys, credentials, sensitive recovered data, or unsupported recovery claims.

## Guardrails

- Never overwrite the only good copy.
- Never restore to production without target confirmation and impact review.
- Never delete snapshots, backups, recycle-bin items, or evidence to make space without authorization.
- Never assume replication is backup.
- Never call backup healthy without a recent validated restore appropriate to the workload.
- Preserve legal hold and retention requirements.
- Separate technical recovery from business acceptance.

## Common Issues

| Issue | Correction |
|---|---|
| Latest backup contains corruption | Use last known good point and quantify additional data loss |
| Restore succeeds, app fails | Validate schema, secrets, dependencies, permissions, cache, and jobs |
| Failover creates split brain | Establish single write authority before routing users |
| File restored with wrong access | Validate owner, ACL, sharing, sensitivity, and inheritance |
| Backup job green, no test | Record recoverability as unverified |
| RTO exceeded | Report measured outcome and improvement owner |
