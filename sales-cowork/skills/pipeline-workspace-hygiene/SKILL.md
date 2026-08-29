---
name: pipeline-workspace-hygiene
description: >-
  Reviews and cleans an approved Microsoft 365 Sales workspace built on Excel, SharePoint, OneDrive, Outlook, and Teams.
  Use when the user asks to find stale opportunities, missing owners, duplicate records, unsupported stages,
  overdue commitments, or inconsistent pipeline files. Do not use to make forecast or commercial decisions.
metadata:
  author: lwokeray
  version: "1.4.0"
---

# Pipeline Workspace Hygiene

## Purpose

Keep an approved Excel or SharePoint pipeline register consistent with permission-accessible communications, meetings, Planner tasks, files, and commitments retrieved through Work IQ MCP.

## Guardrails

- Treat the approved register as the system of coordination and name its file, table, sheet, and as-of timestamp.
- Never change stage, amount, probability, close date, owner, or status solely from inferred activity.
- Show a field-level write preview and preserve Cowork approval before changing or moving shared content.

## Workflow

1. Confirm the approved register and review scope.
2. Use Work IQ `search_paths` and `get_schema` to resolve the register and related entity types, then `fetch` the bounded review scope.
3. Use `ask` only for cross-workload correlation; verify material findings with `fetch` and flag stale or unsupported fields.
4. Separate mechanical corrections from business decisions.
5. Show a field-level preview and apply only approved mechanical corrections with `update_entity`; route decision fields to their named owner and don't retry policy denial.

## Output format

| Record | Finding | Current value | Proposed value | Evidence | Decision owner | State |
|---|---|---|---|---|---|---|
|  |  |  |  |  |  | finding / awaiting approval / updated |

End with counts for reviewed, clean, proposed, blocked, and decision-required records.
