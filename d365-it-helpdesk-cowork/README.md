# Dynamics 365 IT Help Desk Cowork Plugin

This is a **skills-only Microsoft 365 Copilot Cowork plugin package** for a focused IT Help Desk workflow on Dynamics 365 Customer Service.

## Included skills

| Skill | Use it for |
|---|---|
| `case-brief` | Build a one-screen brief from one Dynamics 365 case, activities/timeline, related cases, and available knowledge context. |
| `knowledge-grounded-reply` | Draft an employee-ready response using approved Customer Service knowledge and the current case. |
| `escalation-handoff` | Prepare an evidence-based handoff for the next resolver without repeating first-line investigation. |
| `supervisor-case-review` | Review visible open cases and draft safe follow-up or re-engagement actions. |

## Package shape

The package contains `manifest.json`, the required icons, and four Agent Skills under `skills/`. It intentionally has no remote connector. The skill workflows use the Dynamics 365 Customer Service Cowork plugin already available to the signed-in user.

## Safety boundary

The skills are read-first. They distinguish record facts, interpretation, and unknowns. Any note, field update, message, reassignment, or resolution must be presented as a proposed action and reviewed through Cowork's approval/edit/dismiss checkpoint before execution.

The package does not perform endpoint actions, credential changes, cloud changes, or autonomous resolution. It does not replace Customer Service permissions, queues, routing, SLA policy, or supervisor approval.

## Build and validate

From the repository root:

```bash
python3 scripts/create_icons.py
python3 scripts/validate_plugin.py d365-it-helpdesk-cowork
python3 -m unittest discover -s tests -v
mkdir -p dist
(cd d365-it-helpdesk-cowork && zip -qr ../dist/d365-it-helpdesk-cowork.zip manifest.json color.png outline.png skills README.md)
unzip -t dist/d365-it-helpdesk-cowork.zip
```

The package must have `manifest.json`, `color.png`, `outline.png`, and `skills/` at the ZIP root. The `manifestVersion` is `1.28`; do not add unsupported root properties to the manifest.

## Test in a tenant

Use a Microsoft 365 work account and a non-production training environment. Install the ZIP through the Microsoft 365 Agents Toolkit or upload it as a custom app according to the tenant's admin policy. In Cowork, open **Sources & Skills → Plugins**, verify that the package is available, then confirm that the Dynamics 365 Customer Service plugin and the user's Customer Service permissions are available.

Run the skills against synthetic training cases first. Verify every proposed write-back in the target Dynamics 365 environment after approval. Tenant configuration, licensing, role permissions, available Customer Service fields, queue/routing setup, and SLA indicators must be checked in the target environment; this package does not assume they are configured.

## Official references

- [Build plugins for Copilot Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-plugin-development)
- [Use plugins with Copilot Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-plugins)
- [Manage plugins for Copilot Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-manage-plugins)
- [Use Dynamics 365 Customer Service skills in Copilot Cowork](https://learn.microsoft.com/en-us/dynamics365/customer-service/use/use-copilot-cowork-service-skills)
- [Manage cases with case grids](https://learn.microsoft.com/en-us/dynamics365/customer-service/use/case-grids)
- [Use Copilot-generated case summaries](https://learn.microsoft.com/en-us/dynamics365/customer-service/use/copilot-use-summary)
- [Use Copilot to generate knowledge drafts from cases](https://learn.microsoft.com/en-us/dynamics365/customer-service/use/use-copilot-knowledge-from-cases)
- [Resolve, Cancel, and Reassign Cases](https://learn.microsoft.com/en-us/dynamics365/customer-service/use/customer-service-hub-user-guide-resolve-cancel-reassign-a-case)

## Privacy

This package contains no remote connector and no credential. It operates through the signed-in user's Copilot and Dynamics 365 Customer Service permissions. Tenant administrators remain responsible for Microsoft 365 and Dynamics 365 audit, retention, and data-governance settings.

## Terms

This sample plugin is provided as-is for tenant-controlled evaluation. Validate licensing, permissions, data handling, and the available Dynamics 365 Customer Service features in the target environment before production use.
