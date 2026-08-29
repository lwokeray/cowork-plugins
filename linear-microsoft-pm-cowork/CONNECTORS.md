# Microsoft connector mapping

This plugin preserves a Linear-like PM object model while using Microsoft products for context and artifacts. The plugin does not embed credentials and does not invent an MCP endpoint.

| PM object | Microsoft-first source/target | Default behavior |
|---|---|---|
| Workspace / team | Microsoft 365 tenant, SharePoint hub/site, Microsoft Team/channel | Resolve team, owner, workflow and scope from approved context |
| Issue | Planner task, Project task, SharePoint/Excel issue register, Outlook/Teams intake | Draft/normalize/triage; write only after exact approval and confirmed tool |
| Triage queue | Outlook inbox/thread, Teams channel/chat, Calendar meeting artifact, SharePoint/Excel intake register | Read, classify, route and draft decision; do not silently create/close work |
| PRD | SharePoint/OneDrive Word or approved Markdown/document library | Draft with controlled IDs, evidence, traceability and approval state |
| Story map | PRD/backlog sources plus generated local HTML | Keep source JSON/PRD authoritative; HTML is a derived planning view |
| Estimate | Approved requirements, Excel actuals, Project/Planner history, generated calculation output | Preserve scope version, unit, source, uncertainty and commitment boundary |
| Decision matrix | SharePoint/Excel decision record and generated calculation output | Apply hard constraints, evidence-backed scores and sensitivity before approval |
| Risk register | SharePoint/Excel register, Project/Planner dependencies, generated local HTML | Maintain owned risk data; heatmap is a derived view |
| Project | Project plan, Planner plan, SharePoint project hub, Word/PPT project brief | Read/roll up; preserve lead, members, milestones, target window, health and update cadence |
| Milestone | Project milestone, Planner bucket/label, SharePoint/Excel milestone register | Track meaningful stage exit criteria, not arbitrary task buckets |
| Initiative | SharePoint/Excel/PPT objective register, portfolio files, project roll-up | Connect objective to contributing projects; surface stale/missing updates |
| Cycle | Project iteration, Planner sprint convention, Excel/SharePoint cycle register | Capacity-aware commitment and carryover; never assume a cycle equals release |
| Customer request | Outlook customer thread, Teams signal, SharePoint/Excel request register | Preserve source, account/segment/impact and link to issue/project within privacy scope |
| Project/initiative update | SharePoint/OneDrive Word/PPT, Excel health record, Outlook draft | Produce recurring health update; owner reviews/publishes |
| View | Excel/SharePoint views, Planner filters, Power BI report definition | Define an operational lens without mutating underlying work |

## Official connector assumptions

Use the Anthropic-hosted Microsoft 365 connector when available. It provides delegated, user-level access to SharePoint, OneDrive, Outlook, Outlook Calendar and Teams context. Teams is read-only. Write tools, if enabled by the organization, require explicit approval and can create/update files, drafts, mail or calendar items within the user's permissions.

## Planner / Project adapter

Planner and Project access is represented as an adapter because it may not be exposed by the active Cowork connection. The plugin must generate a handoff payload with:

`target_system`, `object_type`, `source_object`, `title`, `description`, `team`, `status`, `assignee`, `priority`, `labels`, `project`, `milestone`, `cycle`, `due_or_need_by`, `dependencies`, `acceptance_criteria`, `source`, `source_version`, `confidence`, `approval_status`, `write_status`, `missing_tool`.

Set `write_status: not_written` unless a confirmed Microsoft tool returns a successful write. Never say “updated in Planner/Project” based only on a draft.

## Search scope and privacy

Search the narrowest approved project, period, site/library, team/channel, mailbox and file set. Respect delegated Microsoft 365 permissions. Do not copy entire mailboxes, channels, customer records or personnel data into artifacts. Keep source links and minimum necessary excerpts.
