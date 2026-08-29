# Sales Cowork

Sales Cowork is a **skills-only Microsoft 365 Copilot Cowork plugin** for B2B sellers, Sales Managers, and RevOps. Users install one plugin; its skills handle a focused Sales outcome without exposing internal implementation steps.

## Included skills

| Skill | Use it for |
|---|---|
| `daily-sales-rhythm` | Choose up to three actions from Work IQ, calendar, communications, and account evidence. |
| `customer-meeting-brief` | Prepare one customer meeting from Work IQ and available Sales context. |
| `meeting-follow-up` | Turn one completed meeting into an internal note, customer email draft, and proposed tasks. |
| `deal-inspection` | Diagnose the blocker and next move for one selected deal. |
| `forecast-decision-pack` | Prepare a manager decision pack from approved current and prior forecast snapshots. |
| `account-market-research` | Answer a defined account or market question using Work IQ and Deep Research. |

## Design boundary

This package adds Sales-specific orchestration skills to the Cowork runtime. It uses Work IQ and Cowork's built-in Email, Scheduling, Calendar Management, Meetings, Enterprise Search, Communications, Deep Research, Word, Excel, PowerPoint, PDF, and file skills when they are available in the session. These capabilities run with the signed-in user's Microsoft 365 permissions.

For CRM context, the skills can use the separately enabled Dynamics 365 Sales plugin. Dynamics 365 Sales is enabled by default in Cowork but can be disabled by an administrator and requires the user to select an associated Power Platform environment. If that plugin or environment is unavailable, the workflow falls back to permission-accessible Microsoft 365 evidence and labels CRM-specific fields `unavailable`.

The package doesn't embed a custom connector or credential because Microsoft 365 context and actions are native Cowork capabilities, while Dynamics 365 Sales is an existing Microsoft plugin. A custom `agentConnectors` entry is needed only for another live system or service that isn't already available through Work IQ, built-in skills, or an enabled plugin.

Every skill distinguishes fact, inference, and unknown. Material claims require an accessible source record, message, document, or timestamp. Cowork must present its normal approval checkpoint before sending email, posting to Teams, scheduling a meeting, or making another consequential change. Commercial terms, deal stage, probability, close date, and forecast values remain human-controlled.

## Build and validate

From the repository root:

```bash
mkdir -p dist
(cd sales-cowork && zip -qr ../dist/sales-cowork.zip manifest.json color.png outline.png skills)
python3 sales-cowork/tests/validate_package.py sales-cowork dist/sales-cowork.zip
```

The upload ZIP must contain `manifest.json`, `color.png`, `outline.png`, and `skills/` at its root. `docs/`, `tests/`, and this README are repository materials and are deliberately excluded from the deployment ZIP.

## Tenant test

Upload `dist/sales-cowork.zip` in a non-production Microsoft 365 tenant following the Copilot Cowork plugin deployment process. Test with synthetic Outlook, Teams, SharePoint, and meeting content that the signed-in test user can access. For CRM scenarios, enable the Dynamics 365 Sales plugin and select a non-production Power Platform environment. Confirm permission trimming, evidence citations, approval checkpoints, and safe fallback when Sales context is unavailable.

## Official references

- [Build plugins for Copilot Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-plugin-development)
- [Use plugins with Copilot Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-plugins)
- [Available plugins for Copilot Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-available-plugins)
- [Use Sales agent in Microsoft 365 Copilot](https://learn.microsoft.com/en-us/microsoft-sales-copilot/use-sales-chat)

## Privacy

This package contains no remote connector, credential, telemetry, or external data transfer. It relies on the signed-in user's Copilot and Microsoft 365 permissions. Tenant administrators remain responsible for retention, audit, data governance, and any connected Dynamics 365 Sales configuration.

## Terms

This sample is provided for tenant-controlled evaluation. Validate licensing, permissions, data handling, and available Microsoft 365 capabilities before production deployment.
