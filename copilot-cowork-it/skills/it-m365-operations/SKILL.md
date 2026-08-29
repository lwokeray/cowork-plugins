---
name: it-m365-operations
description: |
  Operates and troubleshoots Microsoft 365 services across Exchange Online, Teams, SharePoint,
  OneDrive, Microsoft 365 Apps, licenses, groups, mail flow, collaboration, service health, and
  tenant configuration. Use for mailbox, Teams, SharePoint, OneDrive, Office activation, license,
  distribution list, shared mailbox, external sharing, mail flow, service outage, tenant health,
  or Microsoft 365 administrative requests and incidents.
---

## Overview

Handle Microsoft 365 work through current tenant evidence, least privilege, service-specific ownership, and post-change readback. Keep directory identity, licensing, workload configuration, client behavior, and Microsoft service health distinct.

## When to Use

- Exchange Online mailbox, mail flow, transport, delegation, or shared mailbox work
- Teams meetings, chat, calling, policy, team, channel, or guest issues
- SharePoint/OneDrive access, sync, sharing, storage, site, or file-recovery issues
- Microsoft 365 Apps activation or license assignment
- Tenant service health or multi-user collaboration outage
- Microsoft 365 administrative inventory, request, or operational review

## When NOT to Use

- Pure on-premises Exchange/SharePoint with no Microsoft 365 dependency
- Identity lifecycle when the core question is account or privileged role governance
- Confirmed malicious activity requiring security containment
- Unapproved tenant-wide configuration redesign

## Service Triage Pipeline

1. Resolve tenant, user, group, site, team, mailbox, device, and time window from authoritative sources.
2. Check Microsoft 365 service health and active advisories before local remediation.
3. Determine scope: single object, group, workload, region, or tenant.
4. Check license and workload provisioning state.
5. Check identity and effective authorization.
6. Check service-specific configuration, policy, quota, retention, and audit events.
7. Check client, device, network, and version only after service-side evidence.
8. Compare with recent admin changes and similar reports.
9. Execute the least-impact approved correction.
10. Read back configuration and validate the user scenario.

## Workload Playbooks

### Exchange Online

- Verify mailbox type, provisioning, license, quota, archive, hold, delegation, and forwarding
- Trace mail using sender, recipient, message ID, timestamp, and delivery events
- Check transport rules, connectors, accepted domains, anti-spam actions, and quarantine when relevant
- Do not expose message bodies unless necessary and authorized
- Prefer `Send As`, `Send on Behalf`, and mailbox permissions according to the stated need; do not grant all three automatically

### Teams

- Check service health, user license, Teams policy, meeting/calling policy, client version, and network quality
- For team/channel access, verify underlying group membership and guest state
- Distinguish meeting policy, organizer settings, tenant policy, and endpoint permissions
- Do not recreate a team or meeting merely to bypass an unresolved policy issue

### SharePoint and OneDrive

- Resolve canonical site, library, item, owner, and sharing link
- Check site permissions, group membership, item-level sharing, sensitivity, retention, storage, and sync status
- Treat link access and direct permissions as separate paths
- For deletion or restore, confirm recycle stage, retention/hold, version history, target item, and overwrite behavior

### Licensing and Apps

- Check available units, service-plan state, group-based versus direct assignment, usage dependency, and cost owner
- Do not remove a license before mailbox/file/retention and ownership checks
- Confirm activation state separately from license assignment

## Bulk Operations

1. Resolve all targets to immutable IDs.
2. Export or display the proposed delta.
3. Identify duplicates, conflicts, protected objects, external users, and policy exceptions.
4. Use a pilot ring.
5. Execute in bounded batches.
6. Record per-target results.
7. Read back effective state and preserve failures for retry.

## Tool Routing

Prefer connected Microsoft 365 admin, Graph, Agent 365, or approved M365 CLI capabilities. Discover current commands and parameters before execution. Do not guess command syntax or rely on stale examples when live documentation is available.

## Output Contract

Return:

```text
Tenant/workload: Resolved scope
Issue/request: Exact operational outcome
Service health: Current advisory state and timestamp
Evidence: License, identity, policy, configuration, audit, client/network facts
Action: Proposed or executed with approval state
Verification: Administrative readback plus user scenario
Impact: Users, data, external sharing, retention, and propagation
Blockers: Missing permission, owner, Microsoft dependency, or propagation
```

Do not expose hidden reasoning, tenant secrets, tokens, private message content, or unnecessary personal data.

## Guardrails

- Never guess email addresses, tenant IDs, group IDs, site URLs, mailbox IDs, or user identities.
- Never weaken tenant-wide sharing, authentication, retention, anti-spam, or security controls to fix one user.
- Never delete a team, site, mailbox, group, file, or retention configuration without exact scope, authorization, and recovery analysis.
- Distinguish configured state from effective state and account for propagation.
- Do not claim mail delivery from message submission alone; use trace or recipient verification.
- Preserve legal hold, retention, eDiscovery, and data-residency constraints.

## Common Issues

| Issue | Response |
|---|---|
| License assigned, service unavailable | Check service plan, provisioning, group conflict, usage location, and propagation |
| Group member lacks access | Check nested-group support, site/team sync, guest state, and item-level permissions |
| Mail missing | Trace end-to-end; check rules, quarantine, forwarding, and recipient processing |
| OneDrive sync failure | Check service health, quota, path/name constraints, client state, and account mismatch |
| Teams issue affects many users | Start incident command and link Microsoft advisory evidence |
| Admin change succeeded | Read back workload configuration and effective user experience before closure |
