# Finance Cowork Skill 設計標準

## Package topology

Finance Cowork是一個Plugin package，包含15個各自可路由的Agent Skills。每個Skill只有一個`SKILL.md`，採Monolithic Prompt Packing；核心執行規則不得拆到references、scripts或另一個Skill後才可理解。

```text
finance-cowork/
  manifest.json
  color.png
  outline.png
  skills/
    <skill-name>/
      SKILL.md
```

## Required Skill structure

每個Skill的YAML frontmatter包含`name`、繁體中文`description`與`metadata.author／version`。Body依序包含：

1. `## Overview`
2. `## When to Use`
3. `## When NOT to Use`
4. `## Quick Start`
5. `## Core Instructions`
6. `### Available MCP Tools`（位於Core Instructions內）
7. `## Examples`
8. `## Guardrails`
9. `## Common Issues`

Core Instructions必須包含該Finance流程的Inputs、Scope、Source hierarchy、計算／驗證、Evidence、Review、Stop conditions、Output contract與Completion check。內容不可只是角色描述、摘要或空白模板。

## Evidence and calculation contract

- 每個數值綁定Entity、Period／As-of、Currency、Unit、Reporting basis、Source、Version與Status。
- Actual、Budget、Forecast、Prior、Estimate與Scenario不可混用；同名指標先確認Definition與Sign convention。
- 計算顯示Formula、Inputs、Result、Rounding與Reconciliation；所有Bridge／Statement／Schedule必須有控制式。
- 原始Evidence保持不變；Derived artifact記錄Source與Transformation。
- Facts、Assumptions、Hypotheses、Exceptions、Decisions、Approvals與Unknown在輸出中可辨識。

## Work IQ contract

Cowork runtime可探索的Unified Work IQ MCP工具為`ask`、`list_agents`、`search_paths`、`get_schema`、`fetch`、`create_entity`、`update_entity`、`delete_entity`、`do_action`與`call_function`。Skill不假設每個Tenant、Entity或Path都提供相同operation。

涉及精確資料或Mutation時採`search_paths → get_schema → fetch → preview → approval → mutate → fetch verify`。完整URL、Entity ID、schema與operation不得猜測。`ask`的敘述性結果不能取代需精確Tie-out的Finance source。

## Approval and segregation of duties

建立Artifact與執行Business／Financial action分離。Posting JE、Release payment、Approve invoice、Publish statements、Send external evidence、Change permissions、Approve forecast／valuation與Close audit issue均由具名角色核准。Agent不得同時扮演Preparer、Reviewer與Approver，也不得因平台技術成功而宣告Business approval。

## Failure semantics

- `Unknown`：證據不存在或尚未確認。
- `Access denied`：證據可能存在，但目前使用者／Agent無權存取。
- `Unsupported`：目前Work IQ schema／operation未提供。
- `Policy denied`：Tenant governance明確拒絕；停止規避式重試。
- `Validation failed`：來源、計算、Tie-out、C&A或Review gate未通過。
- `Partial failure`：逐項列出成功、失敗與未執行項目，不宣告全部完成。

## User-facing completion

最終交付物是完整Finance artifact，例如Close tracker、JE package、Reconciliation、Statements、Variance bridge、Forecast、Model、DCF、Management pack、PBC index或Control workpaper。不得把Agent思考、工具呼叫、路徑探索、schema／payload或製作摘要當成結果正文。
