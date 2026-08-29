# IT Help Desk Cowork Plugin

A skills-only Microsoft Copilot Cowork plugin for IT Help Desk work grounded in Dynamics 365 Customer Service and approved Microsoft 365 context. It is designed for service representatives, technical support engineers, incident coordinators, knowledge owners, and Help Desk supervisors.

## Included skills

| Skill | IT service job |
|---|---|
| `case-intake-triage` | Convert an incoming report into a complete, evidence-backed case proposal with type, impact, urgency, duplicate candidates, and routing needs. |
| `case-brief` | Build a one-screen case brief from the case, timeline, related cases, knowledge, and Microsoft 365 context. |
| `technical-troubleshooting` | Create and maintain an evidence-led troubleshooting record without inventing causes or silently changing systems. |
| `knowledge-grounded-reply` | Draft verified troubleshooting guidance from approved knowledge articles and the current case. |
| `requester-communication` | Draft clear acknowledgement, information request, progress, workaround, escalation, and closure messages. |
| `service-request-fulfillment` | Review catalog-style requests such as access, software, hardware, shared resources, and standard changes against required approvals. |
| `escalation-handoff` | Prepare a complete resolver handoff that prevents repeated investigation and makes missing evidence explicit. |
| `major-incident-coordination` | Maintain a fact-based incident brief, impact view, timeline, workstreams, stakeholder update, and next checkpoint during an active outage. |
| `recurring-issue-analysis` | Detect defensible patterns across related cases and prepare a problem-investigation recommendation. |
| `incident-review` | Produce a blameless post-incident review with verified timeline, contributing conditions, corrective actions, and follow-up ownership. |
| `knowledge-maintenance` | Identify knowledge gaps and draft new or revised knowledge content from verified cases and approved sources. |
| `supervisor-case-review` | Review visible case queues for stale, blocked, high-impact, misrouted, or insufficiently documented work. |

## Operating boundary

The plugin is read-first. It separates recorded facts, requester statements, interpretations, hypotheses, unknowns, and proposed actions. It never treats a hypothesis as a confirmed root cause.

Any case field update, note, email, message, assignment, priority change, routing action, approval, closure, or knowledge publication remains a proposed action until Copilot Cowork presents the platform checkpoint and the user approves it. Endpoint commands, identity changes, production changes, and security containment are outside this skills-only package unless a separately approved tool is available.

## Required environment

- Microsoft 365 Copilot with Copilot Cowork enabled.
- Dynamics 365 Customer Service access for the signed-in user.
- Dataverse MCP enabled for the selected Customer Service environment.
- Dynamics 365 Customer Service plugin enabled in Cowork.
- Any Microsoft 365 context used by a skill must be within the signed-in user's permissions.

The plugin does not contain a remote connector, credentials, or a duplicate Dynamics 365 integration. It relies on the active Customer Service plugin and the user's existing permissions.

## Package structure

```text
it-helpdesk-cowork/
├── manifest.json
├── color.png
├── outline.png
├── README.md
└── skills/
    ├── case-intake-triage/SKILL.md
    ├── case-brief/SKILL.md
    ├── technical-troubleshooting/SKILL.md
    ├── knowledge-grounded-reply/SKILL.md
    ├── requester-communication/SKILL.md
    ├── service-request-fulfillment/SKILL.md
    ├── escalation-handoff/SKILL.md
    ├── major-incident-coordination/SKILL.md
    ├── recurring-issue-analysis/SKILL.md
    ├── incident-review/SKILL.md
    ├── knowledge-maintenance/SKILL.md
    └── supervisor-case-review/SKILL.md
```

## Build

Create the ZIP with `manifest.json`, both icons, and `skills/` at the archive root. The Microsoft 365 manifest uses schema version 1.28 and intentionally contains no unsupported root properties.

```bash
mkdir -p dist
(cd it-helpdesk-cowork && zip -qr ../dist/it-helpdesk-cowork.zip manifest.json color.png outline.png skills)
unzip -t dist/it-helpdesk-cowork.zip
```

For tenant testing, package and install with Microsoft 365 Agents Toolkit CLI 1.1.12 or later, or upload the ZIP through Microsoft 365 admin center according to tenant policy.

## Privacy

This package contains instructions only. It does not store credentials or add a remote data service. Data access occurs through the signed-in user's Dynamics 365 Customer Service and Microsoft 365 permissions. Tenant administrators remain responsible for access control, audit, retention, DLP, sensitivity labels, and deployment scope.

Skills minimize copied case data, avoid unrelated records, and keep sensitive diagnostic data out of broadly visible messages. Users must review recipients and content before any communication or record mutation.

## Terms

This sample plugin is provided as-is for tenant-controlled evaluation. Validate licensing, permissions, field mappings, queue and routing rules, SLA configuration, knowledge governance, and approval behavior in a non-production environment before production deployment.

## Official references

- [Build plugins for Copilot Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-plugin-development)
- [Use Dynamics 365 Customer Service skills in Copilot Cowork](https://learn.microsoft.com/en-us/dynamics365/customer-service/use/use-copilot-cowork-service-skills)
- [Manage plugins for Copilot Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-manage-plugins)
