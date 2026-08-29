# Sales Cowork

Sales Cowork is a **Microsoft 365-only Copilot Cowork plugin** for B2B sellers and Sales Managers. It coordinates common Sales work through Work IQ and Cowork's built-in Microsoft 365 capabilities.

## Included skills

| Skill | Use it for |
|---|---|
| `daily-sales-rhythm` | Choose up to three actions from Work IQ, calendar, communications, and files. |
| `customer-meeting-brief` | Prepare one customer meeting from Work IQ and Microsoft 365 account evidence. |
| `meeting-follow-up` | Turn one completed meeting into an internal note, customer email draft, and proposed tasks. |
| `deal-inspection` | Diagnose one opportunity from Outlook, Teams, SharePoint, OneDrive, and Excel evidence. |
| `forecast-decision-pack` | Compare approved Excel or SharePoint forecast snapshots. |
| `account-market-research` | Answer a defined account or market question using Work IQ and Deep Research. |
| `lead-intake-qualification` | Qualify inbound leads from Outlook and approved Excel or SharePoint registers. |
| `account-opportunity-plan` | Build an evidence-led account and opportunity plan in Word, Excel, or PowerPoint. |
| `sales-outreach-engagement` | Prepare and execute approved Outlook, Teams, and Calendar engagement actions. |
| `pipeline-workspace-hygiene` | Review and clean the approved Excel or SharePoint Sales workspace. |
| `proposal-commercial-handoff` | Package requirements and evidence for Word, PowerPoint, and Excel proposal work. |
| `close-renewal-handoff` | Prepare close, delivery transition, adoption follow-up, and renewal handoffs. |

## Design boundary

This package adds Sales-specific orchestration to Work IQ and Cowork's built-in Email, Scheduling, Calendar Management, Meetings, Daily Briefing, Enterprise Search, Communications, Deep Research, Word, Excel, PowerPoint, PDF, OneDrive, SharePoint, and Teams capabilities. These capabilities run with the signed-in user's Microsoft 365 permissions.

The Microsoft 365 system of work is explicit: Outlook and Teams hold communications and commitments; Calendar and Meetings provide time and meeting evidence; SharePoint and OneDrive hold approved account, opportunity, proposal, and handoff artifacts; Excel holds lead, pipeline, forecast, and renewal registers; Word and PowerPoint produce customer and internal deliverables.

Every skill distinguishes fact, inference, and unknown. Material claims require an accessible source record, message, document, or timestamp. Cowork must present its normal approval checkpoint before sending email, posting to Teams, scheduling a meeting, moving or overwriting files, or changing a shared register. Pricing, discount, legal terms, final commitments, and forecast decisions remain human-controlled.

## Build and validate

From the repository root:

```bash
mkdir -p dist
(cd sales-cowork && zip -qr ../dist/sales-cowork.zip manifest.json color.png outline.png skills)
python3 sales-cowork/tests/validate_package.py sales-cowork dist/sales-cowork.zip
```

The upload ZIP must contain `manifest.json`, `color.png`, `outline.png`, and `skills/` at its root. `docs/`, `tests/`, and this README are repository materials and are deliberately excluded from the deployment ZIP.

## Tenant test

Upload `dist/sales-cowork.zip` in a non-production Microsoft 365 tenant. Test with synthetic Outlook, Teams, Calendar, SharePoint, OneDrive, Word, Excel, PowerPoint, and meeting content that the signed-in test user can access. Confirm permission trimming, evidence citations, approval checkpoints, register write previews, and safe handling of missing Microsoft 365 evidence.

## Official references

- [Build plugins for Copilot Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-plugin-development)
- [Use plugins with Copilot Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-plugins)
- [Copilot Cowork overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/)

## Privacy

This package contains no remote connector, credential, or telemetry. It relies on the signed-in user's Copilot and Microsoft 365 permissions. Tenant administrators remain responsible for retention, audit, data governance, sharing controls, and approved Sales workspace locations.

## Terms

This sample is provided for tenant-controlled evaluation. Validate licensing, permissions, data handling, and available Microsoft 365 capabilities before production deployment.
