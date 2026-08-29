---
name: sales-task-planning
description: >-
  Reviews or prepares Microsoft Planner sales tasks and plans from approved Microsoft 365 evidence.
  Use when the user explicitly asks to create, update, complete, or review Planner tasks; build a sales plan;
  review overdue sales work; or turn approved follow-ups into Planner work. Do not use for read-only daily
  prioritization, meeting summaries, pipeline field changes, or project execution outside Sales.
metadata:
  author: lwokeray
  version: "1.4.0"
---

# Sales Task Planning

## Purpose

Coordinate seller and team execution in Microsoft Planner by calling Cowork's built-in unified Work IQ MCP tools. Work IQ can reason over Planner plans, but entity paths and operations must be discovered at runtime.

## Guardrails

- Resolve the target plan and task identity before any write; check for an existing matching task to prevent duplicates.
- Separate evidence-backed commitments from proposed work. Never invent an assignee, due date, priority, or completion state.
- Show the exact task name, plan, bucket when supported, start date, due date, priority, progress, proposed assignee, and source before a consequential action.
- Preserve Cowork's approval checkpoint before creating, updating, moving, assigning, or completing Planner work.
- Never hardcode a Planner resource path or payload from memory. Use Work IQ `search_paths` and `get_schema` first.
- Use only paths, operations, and fields returned by Work IQ for the current tenant. Label absent operations `unsupported`.

## Workflow

1. Confirm whether the request is a review, creation, or update and resolve the permitted plan or private-task scope.
2. Call Work IQ `search_paths` with Planner, plan, and task filters. Select only a returned Microsoft Graph v1.0 path whose operations match the request.
3. Call `get_schema` for the selected path and operation, then use `fetch` to retrieve relevant Planner work and check duplicates. Use `ask` only when cross-workload reasoning over Outlook, Teams, meetings, files, people, and Planner is needed.
4. Validate the owner, dates, priority, progress, source commitment, target plan, and fields allowed by the discovered schema.
5. Produce a read-only review or an exact write preview. If the path or operation isn't returned, stop and label it `unsupported`.
6. After Cowork approval, use `create_entity` or `update_entity`. Treat a policy denial as final and don't retry it as a transient error.
7. Use `fetch` to verify the resulting entity before reporting completion.

## Output format

| Task | Plan / private | Bucket | Start | Due | Priority | Progress | Proposed assignee | Evidence | State |
|---|---|---|---|---|---|---|---|---|---|
|  |  |  |  |  |  |  |  |  | review / awaiting approval / completed / unsupported / policy-blocked |

End with counts for reviewed, proposed, approved, completed, duplicate, and blocked tasks.
