---
name: it-operations-reporting
description: |
  Produces evidence-based enterprise IT operational digests, service reviews, SLA reports,
  incident and request summaries, backlog and aging analysis, change outcomes, availability,
  security and vulnerability posture, asset/license views, capacity/cost risks, executive updates,
  and action registers. Use for daily IT briefings, weekly operations reports, monthly service
  reviews, KPI dashboards, leadership updates, on-call handover, queue prioritization, trend
  analysis, or “what needs attention today?”.
license: MIT
metadata:
  author: lwokeray
  version: "1.0.1"
---

## Overview

Turn current operational records into decision-ready reporting. Prioritize exceptions, approvals, owners, and next actions before methodology. Never manufacture missing data or convert partial coverage into organization-wide claims.

## Intake

Confirm:

- Reporting period and timezone
- Audience and decision purpose
- Services, teams, tenants, regions, and environments in scope
- Systems of record and data freshness
- SLA/OLA definitions and business calendars
- Required comparisons or targets

## Data Pipeline

1. Query authoritative ticket, monitoring, change, security, asset, vendor, and service-health sources.
2. Record extraction time, filters, source coverage, and failures.
3. Normalize stable IDs, timestamps, priority, service, status, owner, and business impact.
4. Deduplicate only using explicit linkage or stable identity; preserve potentially distinct records.
5. Calculate metrics using defined denominators and business time.
6. Reconcile counts against source totals.
7. Identify exceptions, aging, breaches, unowned work, repeated incidents, failed changes, open risks, and stale evidence.
8. Separate observed facts, calculated metrics, reported context, and forecast/inference.
9. Create prioritized actions with owner and due condition.
10. Produce audience-appropriate output with coverage caveats.

## Core Metrics

Use only when definitions and data support them:

- Incident volume by service/priority/category
- Major incidents and business impact
- Mean/median time to acknowledge, restore, and resolve
- SLA compliance and breach risk
- First-contact resolution and reopen rate
- Request backlog, aging, and fulfillment time
- Change success, failure, rollback, and incident linkage
- Problem recurrence and corrective-action completion
- Availability and error-budget indicators
- Vulnerability age, overdue remediation, and exception expiry
- Asset/license coverage, utilization, renewals, and ownership gaps
- Vendor SLA, waiting time, and dependency risk

Do not average across incompatible priorities or services without showing the segmentation.

## Priority Digest

Lead with:

1. Active P1/P2 and security incidents
2. Services degraded or at risk
3. SLA breaches due soon
4. Changes awaiting approval or validation
5. Vulnerabilities/exceptions requiring decisions
6. Vendor blockers
7. Unowned or stale work
8. Capacity, cost, license, or renewal risks

Every item must state why it matters, owner, next action, and due condition.

## Output Contract

Return:

```text
Reporting scope and freshness
Executive state: Green / amber / red with evidence
Immediate actions: Priority / owner / next step / deadline
Service health and major incidents
Queue and SLA exceptions
Changes and releases
Security, vulnerability, and compliance exceptions
Assets, licenses, capacity, cost, and vendors
Trends and recurring problems
Decisions/approvals required
Coverage gaps and data-quality caveats
```

Do not output chain-of-thought, unsupported causal claims, fabricated metrics, or a methodology essay instead of the report.

## Guardrails

- Never present stale data as current; display extraction time.
- Never hide failed queries or partial service coverage.
- Never infer that missing tickets mean no incidents.
- Never expose personal, security-sensitive, or customer-level details beyond the audience need.
- Distinguish restoration from resolution and open from overdue.
- Do not compare periods with changed scope/definitions without disclosure.
- Keep drafts unsent unless the user explicitly requests distribution.

## Common Issues

| Issue | Correction |
|---|---|
| SLA metric disagrees with ITSM | Use configured calendar/pauses and reconcile definition |
| Duplicate parent/child incidents | Report linkage and avoid double-counting impact |
| Mean distorted by outliers | Add median, percentiles, and distribution |
| Green dashboard hides P1 | Lead with critical exceptions before aggregate score |
| Data source failed | Mark coverage partial and list missing domain |
| Action has no owner | Keep it as an explicit governance risk |
