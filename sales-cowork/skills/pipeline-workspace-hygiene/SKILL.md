---
name: pipeline-workspace-hygiene
description: >-
  Reviews and cleans an approved Microsoft 365 Sales workspace built on Excel, SharePoint, OneDrive, Outlook, and Teams.
  Use when the user asks to find stale opportunities, missing owners, duplicate records, unsupported stages,
  overdue commitments, or inconsistent pipeline files. Do not use to make forecast or commercial decisions.
metadata:
  author: lwokeray
  version: "1.2.0"
---

# Pipeline Workspace Hygiene

## Purpose

Keep an approved Excel or SharePoint pipeline register consistent with permission-accessible communications, meetings, files, and commitments.

## Guardrails

- Treat the approved register as the system of coordination and name its file, table, sheet, and as-of timestamp.
- Never change stage, amount, probability, close date, owner, or status solely from inferred activity.
- Show a field-level write preview and preserve Cowork approval before changing or moving shared content.

## Workflow

1. Confirm the approved register and review scope.
2. Validate required columns, identifiers, owners, dates, duplicates, and allowed values.
3. Compare relevant rows with Work IQ evidence and flag stale or unsupported fields.
4. Separate mechanical corrections from business decisions.
5. Apply only approved mechanical corrections; route decision fields to their named owner.

## Output format

| Record | Finding | Current value | Proposed value | Evidence | Decision owner | State |
|---|---|---|---|---|---|---|
|  |  |  |  |  |  | finding / awaiting approval / updated |

End with counts for reviewed, clean, proposed, blocked, and decision-required records.
