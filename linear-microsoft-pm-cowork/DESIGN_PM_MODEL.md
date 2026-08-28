# PM model and design decisions

## Why this is Linear-like

The plugin uses Linear's product development object model as the PM backbone: issues are the atomic work unit; teams own workflows and intake; triage decides what incoming work becomes; projects group issues around an outcome and can contain milestones; initiatives group projects around objectives; cycles create repeating near-term commitments; customer requests connect feedback to work; updates communicate project/initiative health; views organize work without mutating it.

## Why this is not an AI adoption project

The plugin does not contain AI transformation language, adoption phases, use-case prioritization, ROI claims, training plans, or change-management workstreams. It performs PM work directly: triage an issue, shape a spec, operate a project, roll up an initiative, plan a cycle, connect customer evidence, publish a project update, and review outcomes.

## PM object integrity rules

| Rule | Meaning |
|---|---|
| Issue ≠ project | An issue is one trackable piece of work; a project coordinates a bounded outcome across issues |
| Project ≠ initiative | A project has a delivery outcome/window; an initiative groups projects around a strategic objective |
| Cycle ≠ release | A cycle is a repeating team planning period; release timing is a separate commitment |
| Triage ≠ backlog | Triage is an inbox and decision process for incoming work before normal workflow |
| Customer request ≠ priority | Customer context informs prioritization but does not automatically determine it |
| Update ≠ status field | An update is a recurring narrative with health, changes, risks, asks and next steps |
| Closed issue ≠ outcome | Completing work is not evidence that the intended user/business outcome occurred |
| View ≠ mutation | A view is a lens over existing objects and should not change the underlying work |

## Component choices

- Use `skills/*/SKILL.md` for PM object workflows and progressive-disclosure references.
- Use one shared `pm-operating-system` skill for routing, common schema and approval behavior.
- Use a no-write `pm-reviewer` agent after drafting and before mutation/publication.
- Do not create legacy `commands/`; automatic skill discovery is sufficient for Cowork, and the plugin should not duplicate the same workflow in two invocation systems.
- Do not create hooks; PM data is sensitive and no lifecycle event requires an automatic shell or network action.
- Do not bundle an MCP server; Microsoft 365 connector setup, OAuth, delegated permissions and tool availability belong to the host environment, not to this plugin.
- Use explicit Planner/Project handoff payloads when the host has no confirmed task-writing surface.
