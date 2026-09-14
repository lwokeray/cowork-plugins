---
name: it-automation-governance
description: |
  Designs, reviews, and operates safe enterprise IT automations, scripts, workflows, scheduled
  jobs, agents, and remediation runbooks with identity, permissions, input validation, dry runs,
  idempotency, batching, retries, audit logs, approvals, rollback, secrets handling, monitoring,
  ownership, and human-in-the-loop controls. Use for PowerShell or CLI automation, Power Automate,
  Logic Apps, scheduled administration, bulk changes, self-healing, agentic IT actions, runbook
  automation, or reviewing whether an IT automation is safe for production.
license: MIT
metadata:
  author: lwokeray
  version: "1.0.2"
---

## 執行前提與交付方式

本 Plugin 提供工作方法，不會自行授予資料存取或系統操作能力。下文列出的 Work IQ、MCP 或應用操作，僅在本次工作環境實際提供對應工具、連線與使用者權限時適用；不得依工具名稱猜測路徑、欄位或成功結果。

沒有即時工具時，可用使用者提供或已授權匯出的資料完成本 Skill 的分析與草稿，保留資料日期、版本與無法即時驗證的範圍。政策拒絕或權限不足時停止該操作，不透過其他帳號、工具或瀏覽器繞過；仍交付可完成的部分。

使用者要求可下載的草稿文件時，完成該文件屬於所請交付物；「草稿」或「不要發布」不等於禁止產生供本人審閱的新檔。明確要求只讀或不建立檔案時遵守其限制。修改共用原檔、寫入正式系統、寄送、排程與發布，仍依後文的目標、差異、核准及執行後驗證規則處理；產生草稿不代表完成這些動作。

## Overview

Make automation predictable, bounded, observable, reversible, and owned. Drafting or syntax validation is not production readiness.

## When to Use

- Repetitive IT administration or fulfillment should be automated
- A script/workflow performs bulk or scheduled changes
- An AI agent can call IT administration tools
- A remediation runbook needs production safety controls
- Existing automation is failing, duplicating work, or causing drift

## When NOT to Use

- One-time read-only investigation that does not benefit from automation
- Unapproved bypass of an administrative or security process
- A destructive workflow with no recovery path or accountable owner

## Design Contract

Define before implementation:

- Objective and non-goals
- Trigger, schedule, event source, and concurrency policy
- Inputs, authoritative source, schema, validation, and trust boundary
- Targets and immutable identifiers
- Identity and minimum permissions
- Read, draft, write, high-impact, and destructive actions
- Approval checkpoints
- Idempotency key and duplicate behavior
- Batch size, rate limit, timeout, retry, and dead-letter behavior
- Partial failure and compensation
- Audit fields and evidence retention
- Secrets source and rotation
- Monitoring, alert, owner, and support hours
- Rollback/disable switch
- Test, pilot, rollout, and acceptance

## Workflow

1. Map the manual process and policy decision points.
2. Separate deterministic rules from human judgment.
3. Keep production, external, privilege, deletion, isolation, restoration, and risk acceptance under explicit human control unless a pre-approved policy defines otherwise.
4. Use read-only discovery to resolve targets at execution time.
5. Validate inputs and reject ambiguous identities or environments.
6. Generate a dry-run delta for every write workflow.
7. Use idempotent operations and stable correlation IDs.
8. Execute a pilot against approved low-risk targets.
9. Read back authoritative state after each mutation.
10. Record per-target result; do not collapse partial failure.
11. Route repeated failures to a queue with evidence and owner.
12. Monitor outcomes, not only workflow completion.
13. Review permissions, secrets, dependencies, cost, and effectiveness periodically.

## Agentic Action Policy

- The agent may gather, correlate, draft, classify, and recommend within scope.
- The agent may perform low-risk writes when the user's intent is explicit and the platform provides approval/audit.
- The agent must not infer authorization for privilege elevation, account disablement, device isolation/wipe, firewall/routing change, data restore/overwrite, deletion, or broad external communication.
- After an approved action, the agent must read back state and report exact success, failure, and unknown targets.
- The agent must never fabricate tool availability, authentication, execution, or validation.

## Failure Handling

| Failure | Required behavior |
|---|---|
| Transient timeout | Retry with bounded exponential backoff when operation is safe and idempotent |
| Rate limit | Honor retry guidance and reduce concurrency |
| Ambiguous result | Read back before retrying to avoid duplicate write |
| Partial batch | Preserve successful targets; retry only failed/unverified targets |
| Schema drift | Stop writes and quarantine payload |
| Permission denied | Do not broaden privilege automatically; escalate exact permission need |
| Dependency unavailable | Queue or fail safely; do not discard work |

## Production Readiness Gate

Require evidence for:

1. Syntax/static validation
2. Unit or rule tests
3. Safe integration test
4. Dry-run output review
5. Pilot execution
6. Permission and secret review
7. Failure/retry/idempotency test
8. Rollback or disable test
9. Monitoring and alert test
10. Owner approval and runbook

Only then label `Production ready`. State any untested gate.

## Output Contract

Return the completed automation design or operational assessment:

```text
Objective and scope
Trigger and inputs
Identity and permissions
Decision/approval boundaries
Execution, idempotency, batching, retries
Audit and verification
Failure and compensation
Secrets and data handling
Monitoring, owner, support, disable/rollback
Test/pilot/readiness evidence
Open blockers and risks
```

Do not output hidden reasoning, process summaries instead of the artifact, secrets, or unsupported readiness claims.

## Guardrails

- Never hardcode credentials, tokens, tenant secrets, or recovery keys.
- Never use display names as bulk-action identifiers.
- Never make destructive operations the default path.
- Never retry non-idempotent writes without readback.
- Never silently skip failed records.
- Never treat a scheduled job as ownerless.
- Preserve a manual safe path for critical services.
- If the user asks for read-only analysis, do not run, install, schedule, or modify the automation.

## Common Issues

| Issue | Correction |
|---|---|
| Workflow creates duplicates | Add stable idempotency key and pre-write lookup |
| Retry repeats a write | Read back result and use conditional/idempotent update |
| Bulk job hits wrong tenant | Resolve and display tenant/environment gate before writes |
| Automation “succeeds” but service fails | Add outcome verification and user-path monitoring |
| Secret expires silently | Use managed secret store, owner, rotation alert, overlap validation |
| No one owns failures | Create exception queue, SLA, and accountable service owner |
