# Microsoft Product Management Workspace for Cowork

A role-level Cowork plugin for real enterprise PM work, modeled on Linear's product development concepts and mapped to Microsoft 365. This is not an AI adoption project, transformation playbook, or generic PM prompt pack.

## Product model

The plugin works with the following PM objects: workspace, team, issue, triage queue, project, milestone, initiative, cycle, customer request, project/initiative update, view, template, decision and outcome. It keeps these objects distinct because each has a different owner, cadence, workflow and decision boundary.

## Skills

| Skill | Real PM job |
|---|---|
| `issue-triage` | Review incoming work: accept, clarify, duplicate, decline, snooze, route or leave pending |
| `issue-shaping` | Make an accepted issue delivery-ready with context, acceptance criteria and relations |
| `project-ops` | Run a bounded project with lead, members, milestones, dependencies, health and updates |
| `initiative-roadmap` | Roll projects up to objectives and review strategic priority and portfolio health |
| `cycle-planning` | Make capacity-aware near-term commitments, cut scope and review carryover |
| `customer-signal` | Link customer/user feedback and attributes to issues/projects without equating demand with priority |
| `project-update` | Draft recurring project/initiative health updates from changes since the last update |
| `outcome-review` | Compare intended outcomes to observed evidence and choose the next move |
| `governance` | Review object identity, evidence, privacy, write/publish risk and approval |

The shared `pm-operating-system` skill routes requests to the right object and preserves the operating loop `capture → triage → shape → relate → plan → execute → update → review → learn`.

## Reviewer agent

`agents/pm-reviewer.md` is a no-write reviewer. Use it after a draft and before a system-of-record mutation or publication. It returns `PASS`, `REVISE`, or `STOP` based on evidence, ownership, relations, capacity, dependency, audience, privacy and approval.

## Microsoft mapping

Use the official Microsoft 365 connector for SharePoint, OneDrive, Outlook, Calendar and Teams context. Map issue/project/milestone/cycle work to Planner or Project only when a confirmed tool is available. Use SharePoint/OneDrive Word, Excel and PowerPoint as durable PM artifacts. Use Outlook and Calendar for commitments and rituals. Use Teams for context and signals; treat it as read-only unless a confirmed tool says otherwise.

If Planner/Project write is not available, produce a normalized handoff payload and set `write_status: not_written`. Do not create a duplicate OAuth/MCP server or place credentials inside this plugin.

## What a normal run looks like

A PM asks for a weekly project update. Cowork identifies the project and period, reads the last approved update and current project/milestone/issue/cycle evidence, detects changes and stale signals, drafts health/progress/risks/asks for the audience, invokes the reviewer, then shows an exact publication/write preview. The PM lead reviews and publishes; the plugin does not silently create or change work.

## Installation

Upload the `.plugin` package in Cowork's **Customize → Plugins** area. Connect Microsoft 365 separately under **Customize → Connectors**. Use a sanitized test scope before enabling any write tools. For organization distribution, use a private/internal plugin marketplace.

## Sources

- [Linear Concepts](https://linear.app/docs/conceptual-model)
- [Linear Projects](https://linear.app/docs/projects)
- [Linear Cycles](https://linear.app/docs/use-cycles)
- [Linear Customer Requests](https://linear.app/docs/customer-requests)
- [Linear Triage](https://linear.app/docs/triage)
- [Linear Project and Initiative Updates](https://linear.app/docs/project-updates)
- [Linear Creating Issues](https://linear.app/docs/creating-issues)
- [Anthropic Cowork plugin creation guidance](https://github.com/anthropics/knowledge-work-plugins/tree/main/cowork-plugin-management/skills/create-cowork-plugin)
- [Anthropic Connect to Microsoft 365](https://support.claude.com/en/articles/15183774-connect-to-microsoft-365)
