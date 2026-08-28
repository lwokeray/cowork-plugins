---
name: issue-shaping
description: Shape an accepted issue into a delivery-ready work item in a Linear-like PM workflow. Use after triage for bugs, features, technical work, follow-ups, and internal requests that need clear context, ownership, acceptance criteria, and relations.
---

# Issue shaping

一個 issue 不是一份縮短版 PRD；它是 team workflow 能追蹤與完成的最小工作單位。先確認 issue type、team、problem/outcome、requester/customer、priority context、owner、project、milestone、cycle、dependencies 與 source。

## Workflow

1. **Write the title.** 用可搜尋、描述 outcome/behavior 的標題，不把 solution detail 堆在 title。
2. **Write context.** 描述 current behavior/problem、affected user、impact、why now、source and links。區分 confirmed fact、reported signal 與 hypothesis。
3. **Define done.** 寫 acceptance criteria、edge cases、validation evidence、non-goals 與 handoff notes。每項 criteria 必須可觀察或可測試。
4. **Set properties.** 建議 team、workflow status、assignee、priority、labels、project、milestone、cycle、estimate 與 customer request relations；對沒有證據的欄位標為 proposed/unknown。
5. **Check relations.** 找出 parent/sub-issue、duplicate candidates、blocked-by/blocks、related project/initiative/customer request；不要為了看起來完整而建立不必要關係。
6. **Check readiness.** 若缺 owner、acceptance criteria、dependency owner、need-by date 或 success signal，提出最少澄清問題並保留 issue 為 draft/needs_clarification。
7. **Handoff.** 產出 Microsoft Planner/Project/SharePoint/Excel payload；若沒有 confirmed write tool，標記 `not_written`。任何建立或更新都要先 preview/approve。

## Issue schema

`title`、`type`、`team`、`status`、`assignee`、`priority`、`labels`、`description`、`acceptance_criteria`、`non_goals`、`project`、`milestone`、`cycle`、`parent`、`relations`、`customer_requests`、`dependencies`、`source`、`confidence`、`write_status`。

## Guardrails

不要把 unresolved question 寫成 requirement；不要把 customer desire 直接寫成 priority；不要由 sender、職稱或最後留言推斷 assignee；不要自行承諾 cycle/date。
