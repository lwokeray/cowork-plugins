# IT Operations Cowork Plugin

A skills-only Microsoft Copilot Cowork plugin for enterprise IT Operations teams. It provides operational workflows for identity, endpoints, Microsoft 365, infrastructure, incidents, security, continuity, assets, vendors, knowledge, reporting, and governed automation.

## Boundary from IT Help Desk Cowork

This package is independent from [`it-helpdesk-cowork`](../it-helpdesk-cowork/).

| Package | Responsibility |
|---|---|
| `it-operations-cowork` | Infrastructure and platform operations, identity, endpoints, M365, cloud, network, security, recovery, assets, changes, vendors, automation, and operational governance |
| `it-helpdesk-cowork` | Dynamics 365 Customer Service case intake, case handling, requester communication, service-request cases, escalation handoffs, knowledge-grounded replies, and supervisor queue review |

The IT Operations coordinator routes help-desk case work to the separate Help Desk plugin rather than duplicating those skills.

## Included skills

| Skill | IT Operations job |
|---|---|
| `it-operations-coordinator` | Route cross-domain IT Operations work and maintain one evidence, action, approval, and verification record. |
| `it-access-lifecycle` | Manage joiner-mover-leaver, access, privileged roles, guests, MFA, sign-ins, sessions, and access reviews. |
| `it-endpoint-support` | Diagnose and manage Windows, macOS, mobile, and virtual endpoint health, compliance, applications, storage, and remote actions. |
| `it-m365-operations` | Operate Exchange Online, Teams, SharePoint, OneDrive, Microsoft 365 Apps, licenses, service health, and tenant configuration. |
| `it-network-diagnostics` | Diagnose Wi-Fi, LAN, VPN, DNS, DHCP, proxy, firewall, routing, TLS, load-balancer, and connectivity paths. |
| `it-cloud-operations` | Operate and validate cloud resources, deployments, runtime health, dependencies, capacity, cost, and reliability. |
| `it-incident-command` | Coordinate major incidents, roles, timeline, workstreams, restoration, stakeholder cadence, and verified recovery. |
| `it-problem-root-cause` | Perform evidence-backed RCA, known-error management, causal analysis, and preventive-action tracking. |
| `it-change-release-control` | Plan, approve, execute, roll back, validate, and review production changes and releases. |
| `it-security-response` | Triage and coordinate identity, endpoint, email, cloud, network, and data security incidents. |
| `it-vulnerability-compliance` | Validate findings, prioritize exposure, manage remediation and exceptions, and prepare scoped audit evidence. |
| `it-backup-recovery` | Manage backup failures, restore requests, disaster recovery, failover/failback, RPO/RTO, and recovery testing. |
| `it-asset-license-management` | Reconcile hardware, software, cloud, SaaS, certificate, subscription, and license lifecycles. |
| `it-vendor-escalation` | Build secure vendor cases, manage entitlement/SLA/cadence, review recommendations, and verify recovery independently. |
| `it-knowledge-runbook` | Create self-contained SOPs, runbooks, known-error records, recovery procedures, and handovers. |
| `it-operations-reporting` | Produce current IT operational digests, service reviews, SLA exceptions, risks, decisions, and action registers. |
| `it-automation-governance` | Govern scripts, workflows, scheduled jobs, agents, bulk actions, retries, approvals, secrets, monitoring, and rollback. |

## Skill design

Every skill uses one self-contained `SKILL.md` with monolithic prompt packing. Each file includes:

- Complete trigger and exclusion criteria
- Operational workflow and decision points
- Read-first evidence requirements
- Approval and authority boundaries
- Tool-capability routing without hard-coded tenant endpoints
- Post-action readback and outcome verification
- Output contracts, guardrails, and common failures

The skills do not depend on separate prompt fragments, reference files, scripts, credentials, tenant IDs, or environment-specific MCP endpoints.

## Operating model

- Use current authoritative system evidence before action.
- Keep observed, reported, inferred, and unknown information distinct.
- Prefer least privilege, reversible actions, pilots, bounded batches, and dry runs.
- Keep production, privilege, isolation, deletion, restore/overwrite, broad external communication, and risk acceptance human-controlled.
- Verify every consequential action through authoritative readback and the affected service or user path.
- Report partial success and blockers exactly; never claim deployment, remediation, restoration, or integration from configuration alone.

## Required environment

- Microsoft 365 Copilot with Copilot Cowork enabled.
- The signed-in user must have access to the systems required by the selected skill.
- Appropriate enterprise plugins, MCP servers, or admin tools must already be connected and approved by the tenant.
- The package itself contains no connector, remote service, credential, tenant identifier, or privileged permission grant.

When a required capability is unavailable, the skills return the missing capability and a safe manual verification path rather than fabricating execution.

## Package structure

```text
plugins/it-operations-cowork/
├── manifest.json
├── color.png
├── outline.png
├── README.md
└── skills/
    ├── it-operations-coordinator/SKILL.md
    ├── it-access-lifecycle/SKILL.md
    ├── it-endpoint-support/SKILL.md
    ├── it-m365-operations/SKILL.md
    ├── it-network-diagnostics/SKILL.md
    ├── it-cloud-operations/SKILL.md
    ├── it-incident-command/SKILL.md
    ├── it-problem-root-cause/SKILL.md
    ├── it-change-release-control/SKILL.md
    ├── it-security-response/SKILL.md
    ├── it-vulnerability-compliance/SKILL.md
    ├── it-backup-recovery/SKILL.md
    ├── it-asset-license-management/SKILL.md
    ├── it-vendor-escalation/SKILL.md
    ├── it-knowledge-runbook/SKILL.md
    ├── it-operations-reporting/SKILL.md
    └── it-automation-governance/SKILL.md
```

## Build and validate

Run from the repository root. The builder produces a tenant-uploadable ZIP with `manifest.json`, both icons, and `skills/` at the archive root:

```bash
python scripts/validate_repo.py
python scripts/build_plugin.py it-operations-cowork
```

Validate and test in a non-production tenant according to tenant plugin policy before broader deployment.

## Privacy

This package contains instructions and images only. It does not store credentials or add a remote data service. Data access occurs through the signed-in user's connected enterprise tools and existing permissions. Tenant administrators remain responsible for identity, access control, audit, retention, DLP, sensitivity labels, connector governance, and deployment scope.

The skills minimize copied operational data and explicitly prohibit credentials, tokens, recovery codes, private keys, unrestricted diagnostic bundles, or unnecessary personal data in tickets and messages.

## Terms

This sample plugin is provided as-is for tenant-controlled evaluation. Validate tool availability, permissions, approval behavior, field mappings, operational policies, recovery paths, and output quality in a non-production environment before production use.

## Official references

- [Build plugins for Copilot Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-plugin-development)
- [Manage plugins for Copilot Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-manage-plugins)
