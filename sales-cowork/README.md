# Sales Cowork

Sales Cowork is a **Microsoft 365-only Copilot Cowork skills plugin** for B2B sellers and Sales Managers. It teaches Cowork when and how to use its built-in unified Work IQ MCP tools for common Sales work.

## Included skills

| Skill | Use it for |
|---|---|
| `daily-sales-rhythm` | Choose up to three actions from Work IQ, Planner, calendar, communications, and files. |
| `sales-task-planning` | Review or prepare approved Microsoft Planner tasks and sales plans. |
| `customer-meeting-brief` | Prepare one customer meeting from Work IQ and Microsoft 365 account evidence. |
| `meeting-follow-up` | Turn one completed meeting into an internal note, customer email draft, and proposed Planner tasks. |
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

This package contains only Agent Skills. It doesn't bundle an MCP connector, OAuth registration, or workload-specific Mail, Teams, Calendar, OneDrive, SharePoint, Word, or User MCP server. Each skill invokes the unified Work IQ MCP tools already available in Cowork: `ask`, `fetch`, `create_entity`, `update_entity`, `delete_entity`, `do_action`, `call_function`, `list_agents`, `get_schema`, and `search_paths`.

Use `ask` for cross-workload semantic reasoning, `fetch` for exact source entities, and `call_function` for supported searches or computed results. For `fetch`, `create_entity`, and `update_entity`, use `search_paths` to confirm the resource path and `get_schema` to obtain the current Microsoft Graph v1.0 payload. Use `do_action` or `delete_entity` only when the exact supported URL is supplied by the current Work IQ contract; never infer one. Never assume a Planner or other workload path exists merely because Work IQ can reason over that workload.

The Microsoft 365 system of work is explicit: Outlook and Teams hold communications and commitments; Calendar and Meetings provide time and meeting evidence; Planner holds tasks, owners, dates, priority, and progress; SharePoint and OneDrive hold approved account, opportunity, proposal, and handoff artifacts; Excel holds lead, pipeline, forecast, and renewal registers; Word and PowerPoint produce customer and internal deliverables.

Every skill distinguishes fact, inference, and unknown. Material claims require an accessible source record, message, document, task, or timestamp. Reads remain bounded and permission-trimmed. Before `create_entity` or `update_entity`, the skill confirms the path and schema; before `do_action`, it confirms the supported action URL. Every mutation requires an exact preview and Cowork approval. Work IQ tenant policy can still block mutation even after user approval.

## Build and validate

From the repository root:

```bash
mkdir -p dist
(cd sales-cowork && zip -qr ../dist/sales-cowork.zip manifest.json color.png outline.png skills)
python3 sales-cowork/tests/validate_package.py sales-cowork dist/sales-cowork.zip
```

The upload ZIP must contain `manifest.json`, `color.png`, `outline.png`, and `skills/` at its root. `docs/`, `tests/`, and this README are repository materials and are deliberately excluded from the deployment ZIP.

## Tenant test

Upload `dist/sales-cowork.zip` in a non-production Microsoft 365 tenant. Test with synthetic Outlook, Teams, Calendar, Planner, SharePoint, OneDrive, Word, Excel, PowerPoint, and meeting content that the signed-in test user can access. Confirm Work IQ tool routing, runtime path and schema discovery, permission trimming, evidence citations, approval checkpoints, mutation-policy denial handling, Planner task previews, and register write previews.

## Official references

- [Build plugins for Copilot Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-plugin-development)
- [Use plugins with Copilot Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-plugins)
- [Copilot Cowork overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/)
- [Work IQ MCP overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/work-iq/mcp/overview)
- [Work IQ MCP tool reference](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/work-iq/mcp/tool-reference)
- [Work IQ API overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/work-iq/api-overview)

## Privacy

This package contains no remote connector, credential, or telemetry. It relies on the signed-in user's Copilot and Microsoft 365 permissions. Tenant administrators remain responsible for retention, audit, data governance, sharing controls, and approved Sales workspace locations.

## Terms

This sample is provided for tenant-controlled evaluation. Validate licensing, permissions, data handling, and available Microsoft 365 capabilities before production deployment.
