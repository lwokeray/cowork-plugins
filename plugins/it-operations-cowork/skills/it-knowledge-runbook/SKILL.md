---
name: it-knowledge-runbook
description: |
  Creates and maintains complete enterprise IT knowledge articles, standard operating procedures,
  operational runbooks, known-error records, troubleshooting guides, support handoffs, and recovery
  procedures using verified steps, decision points, permissions, safety gates, validation,
  rollback, ownership, and review metadata. Use for “write an IT SOP”, “document this fix”, “make a
  runbook”, onboarding/offboarding instructions, recurring support issues, operational handover,
  known errors, emergency procedures, or knowledge-base cleanup.
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

Convert validated operational practice into an executable, safe, maintainable article. Do not turn an unverified conversation or one-off workaround into authoritative procedure.

## Document Types

| Type | Purpose |
|---|---|
| Knowledge article | Diagnose or answer a recurring user/support question |
| SOP | Standardize a repeatable business/IT process and responsibilities |
| Runbook | Execute an operational procedure with commands, checkpoints, and rollback |
| Known error | Record confirmed cause, symptoms, workaround, and permanent-fix status |
| Recovery procedure | Restore service/data under controlled conditions |
| Handover | Transfer scope, ownership, access, dependencies, and open risks |

## Source Quality

Use:

- Current product/service documentation
- Verified configuration and inventory
- Successful incident/change records
- Tested commands and outputs
- Approved policy and ownership
- Subject-matter review

Label unverified steps as draft. Never embed live secrets or environment-specific credentials.

## Required Structure

1. Title and objective
2. Trigger/symptoms and when not to use
3. Scope, audience, environment, and prerequisites
4. Required roles, permissions, tools, and approvals
5. Inputs and exact target-resolution rules
6. Safety, data, security, and change impact
7. Ordered procedure with checkpoints
8. Decision points and branching conditions
9. Validation and success criteria
10. Rollback or recovery
11. Escalation criteria and handoff package
12. Known limitations and common errors
13. Owner, reviewer, source references, version, and review trigger

## Authoring Workflow

1. Define the operational outcome and user persona.
2. Collect authoritative sources and the last verified execution evidence.
3. Separate universal steps from environment-specific values.
4. Replace secrets and tenant-specific IDs with named placeholders and resolution instructions.
5. Write imperative steps; one action per step.
6. Put checks before consequential actions.
7. Define expected result after each critical step.
8. Include stop conditions, rollback triggers, and escalation.
9. Validate in a safe or read-only environment when possible.
10. Obtain SME/security/service-owner review appropriate to risk.
11. Publish only to the approved knowledge system.
12. Set review date/event and feedback path.

## Monolithic Packing Rules

- Keep the entire operational prompt in one `SKILL.md` when packaging a Cowork skill.
- Include every instruction required at execution time: triggers, exclusions, workflow, tool routing, output, guardrails, examples, and common failures.
- Do not depend on hidden references, a README, or unstated organizational knowledge.
- Avoid duplicate prose that does not change execution.
- Prefer tables and concise examples for high-density guidance.

## Output Contract

Produce the finished knowledge artifact itself, not a summary of how it was written. Include all applicable required-structure sections. Mark status as `Draft`, `Validated`, or `Approved` only when evidence supports it.

Do not include hidden reasoning, brainstorming notes, process commentary, fabricated approvals, or invented test results.

## Guardrails

- Never include production passwords, tokens, private keys, recovery codes, or personal data.
- Never publish destructive commands without scope checks, backups, approvals, rollback, and verification.
- Never claim validation from a syntax check alone.
- Do not copy obsolete commands without checking current platform capabilities.
- Distinguish example placeholders from real identifiers.
- Preserve legal, security, and access restrictions on documentation.

## Common Issues

| Issue | Correction |
|---|---|
| Procedure works only for author | Add prerequisites, target resolution, expected results, and failure paths |
| Commands contain real tenant data | Replace with placeholders and discovery steps |
| No rollback | Add stop conditions and recovery before approval |
| Screenshot-only procedure | Add searchable text and stable UI concepts |
| Article became stale | Tie review to version, service change, incident, or scheduled date |
| Workaround treated as fix | Record known-error status and permanent action separately |
