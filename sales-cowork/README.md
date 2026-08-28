# Sales Cowork

Sales Cowork is a **skills-only Microsoft 365 Copilot Cowork plugin** for B2B sellers, Sales Managers, and RevOps. Users install one plugin; its skills handle a focused Sales outcome without exposing internal implementation steps.

## Included skills

| Skill | Use it for |
|---|---|
| `daily-sales-rhythm` | Choose up to three evidence-backed actions for today. |
| `customer-meeting-brief` | Prepare one customer meeting from its available Microsoft 365 context. |
| `meeting-follow-up` | Turn one completed meeting into an internal note, customer email draft, and proposed tasks. |
| `deal-inspection` | Diagnose the blocker and next move for one selected deal. |
| `forecast-decision-pack` | Prepare a manager decision pack from approved current and prior forecast snapshots. |
| `account-market-research` | Answer a defined account or market question while separating internal evidence from requested public research. |

## Design boundary

This package has no connector, credential, or remote runtime. It uses only context that Copilot Cowork makes available to the signed-in user. It does not create Planner tasks, save SharePoint files, update Dynamics 365 Sales, post Teams messages, or send email. Instead, it produces reviewable drafts and structured handoff proposals.

Every skill distinguishes fact, inference, and unknown. Material claims require an accessible source record, message, document, or timestamp. Email remains a draft; commercial terms, deal stage, probability, close date, and forecast values are not changed by the plugin.

Dynamics 365 Sales is optional context only. When it is unavailable, the skills use approved Microsoft 365 sources that the user can access and do not imply a CRM record exists.

## Build and validate

From the repository root:

```bash
python3 sales-cowork/tests/validate_package.py sales-cowork
mkdir -p dist
(cd sales-cowork && zip -qr ../dist/sales-cowork.zip manifest.json color.png outline.png skills)
unzip -t dist/sales-cowork.zip
```

The upload ZIP must contain `manifest.json`, `color.png`, `outline.png`, and `skills/` at its root. `docs/`, `tests/`, and this README are repository materials and are deliberately excluded from the deployment ZIP.

## Tenant test

Upload `dist/sales-cowork.zip` in a non-production Microsoft 365 tenant following the Copilot Cowork plugin deployment process. Test first with synthetic meetings, opportunities, and forecast snapshots. Confirm that each skill returns only data visible to the signed-in test user, labels unknowns, cites its evidence, and does not perform a write or external send.

## Official references

- [Build plugins for Copilot Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-plugin-development)
- [Use plugins with Copilot Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-plugins)
- [Use Sales agent in Microsoft 365 Copilot](https://learn.microsoft.com/en-us/microsoft-sales-copilot/use-sales-chat)

## Privacy

This package contains no remote connector, credential, telemetry, or external data transfer. It relies on the signed-in user's Copilot and Microsoft 365 permissions. Tenant administrators remain responsible for retention, audit, data governance, and any connected Dynamics 365 Sales configuration.

## Terms

This sample is provided for tenant-controlled evaluation. Validate licensing, permissions, data handling, and available Microsoft 365 capabilities before production deployment.
