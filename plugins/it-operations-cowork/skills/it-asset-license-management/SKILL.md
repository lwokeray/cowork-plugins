---
name: it-asset-license-management
description: |
  Manages enterprise IT hardware, software, cloud, SaaS, certificate, subscription, and license
  inventory across procurement, assignment, custody, utilization, renewal, compliance,
  reclamation, return, sanitization, and disposal. Use for asset inventory, device assignment,
  stock and warranty, software licenses, Microsoft 365 licenses, SaaS subscriptions, unused
  resources, renewals, ownership gaps, CMDB reconciliation, procurement planning, or asset audits.
license: MIT
metadata:
  author: lwokeray
  version: "1.0.1"
---

## Overview

Maintain an authoritative lifecycle record for what the organization owns or consumes, who is accountable, where it is, what it costs, and how it is recovered or retired.

## Asset Model

Track as applicable:

- Immutable asset/resource/license ID
- Type, manufacturer/provider, model/SKU, serial, version
- Owner, custodian, user, department, cost center
- Location, environment, tenant/subscription
- Status and lifecycle dates
- Purchase, contract, warranty, renewal, and support
- Assignment, entitlement, usage, and capacity
- Data class, encryption, compliance, backup, and recovery
- Dependencies and business service
- Return, sanitization, disposal, and evidence

## Workflow

1. Identify the authoritative inventory, contract, admin, finance, and endpoint sources.
2. Reconcile records by stable identifiers; do not merge from display name alone.
3. Classify discrepancies: missing, duplicate, stale, unassigned, unknown owner, unauthorized, overallocated, underused, expired, or disposed-but-active.
4. Validate discrepancies against live state and accountable owners.
5. Prioritize security, regulatory, renewal, service-continuity, and cost risk.
6. Propose assignment, reclamation, renewal, replacement, retirement, or record correction.
7. Obtain approval where user/service impact or financial commitment exists.
8. Execute bounded updates and preserve per-item result.
9. Read back inventory and service state.
10. Record custody, acceptance, return, sanitization, or disposal evidence.

## License and SaaS Review

- Compare purchased, assigned, activated, and recently used counts.
- Check service-plan dependencies, group-based assignments, shared/service accounts, retention, mailbox/files, and automation identities before removal.
- Define inactivity using policy and workload evidence, not a universal day count.
- Notify owner and provide a review window before reclamation when policy requires.
- Track renewal date, notice period, minimum commitment, data-export/exit requirements, and business owner.

## Hardware Lifecycle

1. Receive and verify serial/model/condition.
2. Enroll, label, encrypt, configure, and assign with custody evidence.
3. Maintain repair, warranty, loaner, and replacement history.
4. On return, verify data backup/transfer, account sign-out, management state, accessories, and physical condition.
5. Sanitize using approved standard and record evidence.
6. Dispose or redeploy only after data and ownership checks.

## Cloud Resource Hygiene

- Resolve owner, environment, business service, tags, cost, usage, backup, dependencies, and deletion protection.
- “Unused” requires telemetry and dependency evidence.
- Stop/deallocate before delete when appropriate.
- Never delete stateful or externally referenced resources from cost data alone.

## Output Contract

Return:

```text
Scope and sources: Inventories reconciled and timestamp
Coverage: Total, matched, unresolved
Exceptions: ID, type, owner, risk, evidence
Actions: Assign/reclaim/renew/replace/retire/correct
Approvals and user impact: Status
Verification: Readback and lifecycle evidence
Financial view: Avoidable cost, renewal exposure, forecast assumptions
Residual gaps: Missing owner, source, contract, or disposition proof
```

Do not reveal hidden reasoning, personal purchase data, secrets, license keys, or unsupported savings claims.

## Guardrails

- Never fabricate serials, owners, emails, contract terms, costs, usage, or savings.
- Never reclaim access or delete resources from inactivity alone.
- Never dispose of or reassign hardware before data sanitization and custody verification.
- Never store software keys or secrets in general inventory notes.
- Preserve finance, legal hold, data retention, and support dependencies.
- Separate record cleanup from real-world asset disposition.

## Common Issues

| Issue | Correction |
|---|---|
| Same name, different assets | Reconcile using serial/resource ID and source provenance |
| License appears unused | Check service accounts, automations, shared data, and reporting lag |
| Device returned but online | Verify identity, management, custody, and wipe/retire state |
| Cloud resource has no owner | Trace deployment, tags, activity, billing, dependencies; quarantine decision |
| Contract data conflicts | Escalate to authoritative procurement/legal record |
| Savings estimated | State timeframe, assumptions, one-time versus recurring |
