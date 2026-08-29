---
name: it-vendor-escalation
description: |
  Builds and manages enterprise IT vendor and provider escalations with entitlement checks,
  severity alignment, reproducible evidence, business impact, secure artifact handling, SLA and
  communication tracking, workaround evaluation, ownership, and closure validation. Use for
  Microsoft or cloud support cases, ISP and telecom outages, SaaS incidents, hardware warranty,
  managed-service escalation, third-party defects, support-ticket follow-up, stalled vendors,
  service-credit evidence, or coordinating an external dependency during an incident.
license: MIT
metadata:
  author: lwokeray
  version: "1.0.1"
---

## Overview

Escalate a vendor-ready technical case without surrendering internal ownership. Keep internal incident status, vendor case status, and actual service state separate.

## Intake

- Vendor/provider and affected product/service
- Contract, support plan, entitlement, tenant/subscription/serial as appropriate
- Internal incident/request/change ID
- Severity and business impact
- Start time, timezone, scope, affected regions/users
- Exact errors, correlation/request IDs, versions, configuration, and reproduction
- Diagnostics and changes already performed
- Required vendor outcome and deadline

## Workflow

1. Confirm the correct vendor, product, support entitlement, and case channel.
2. Map internal severity to vendor severity without inflating facts.
3. Build a minimal reproducible evidence package.
4. Redact secrets, personal data, customer content, and unrelated logs.
5. State the business impact and why available workarounds are insufficient.
6. Open or draft the case only when requested; do not fabricate a case number.
7. Record vendor case ID, owner, severity, submission time, SLA, and next update.
8. Track every vendor request and internal response as actions with owners.
9. Validate vendor recommendations for local risk, scope, prerequisites, and rollback before implementation.
10. Escalate through account/support management when SLA, impact, or evidence warrants it.
11. Verify service recovery independently of vendor closure.
12. Capture defect, advisory, credit, replacement, or permanent-fix follow-up.

## Evidence Package

Include only necessary:

- Environment and version matrix
- Timeline and recent changes
- Exact error and correlation IDs
- Sanitized logs/traces/screenshots
- Reproduction steps and frequency
- Affected versus unaffected comparison
- Architecture/path limited to relevant dependency
- Diagnostic results
- Workaround and impact
- Specific questions or requested action

## Communication Cadence

Maintain:

- Last vendor response
- Outstanding vendor question
- Outstanding internal evidence
- Next vendor checkpoint
- Internal stakeholder update time
- Escalation threshold

Do not let “awaiting vendor” become an ownerless state.

## Output Contract

Return:

```text
Vendor case: Draft / submitted / active / escalated / closed
Provider/product/entitlement: Verified details
Internal incident and severity: Linked state
Business impact: Verified scope and deadline
Evidence package: Included artifacts and redactions
Vendor ask: Specific outcome/questions
Actions: Vendor and internal owners/status
SLA/cadence: Last and next checkpoints
Recommendation review: Risk/approval/rollback
Closure verification: Independent service and user evidence
```

Do not include hidden reasoning, secrets, fabricated case IDs, or unsupported vendor commitments.

## Guardrails

- Never upload unrestricted logs, credentials, private keys, tokens, customer datasets, or mailbox content.
- Never implement vendor advice as implicit authorization.
- Never close the internal incident merely because the vendor case closed.
- Do not promise service credits, RCA dates, fixes, or replacement dates without confirmed vendor commitment.
- Use approved support channels and contract contacts.
- Preserve evidence and timelines for SLA and contractual review.

## Common Issues

| Issue | Correction |
|---|---|
| Vendor requests broad logs | Narrow time/scope and redact before transfer |
| Severity downgraded | Provide current impact evidence and contract mapping |
| Vendor workaround is risky | Route through change/security approval |
| Case stalls | Escalate with timeline, unanswered ask, impact, and SLA |
| Vendor says resolved | Validate tenant/resource/user state independently |
| Multiple vendors involved | Keep one internal owner and dependency matrix |
