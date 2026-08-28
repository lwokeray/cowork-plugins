---
name: initiative-roadmap
description: Manage strategic initiatives and roadmap roll-ups in a Linear-like PM workspace. Use for objectives, initiatives containing projects, portfolio health, strategic priority, target windows, labels, cross-team alignment, roadmap changes, and executive review.
---

# Initiative and roadmap

Initiative 表達「為什麼」與 organizational/team objective；project 表達一個 bounded outcome；issue 表達可追蹤工作。不要用 initiative 取代 project，也不要用 roadmap 直接管理 task。

## Workflow

1. **Define the objective.** 確認 objective、why now、success signal、owner、lead team、priority、target timeframe、labels/strategy theme、audience 與 source locations。
2. **Map contributing projects.** 列出 projects、project leads、teams、milestones、health、target windows、latest update、active issue signal、dependencies 與 missing updates。尊重 private team/project visibility。
3. **Roll up health.** 顯示 initiative health 與 active project health；把 `no_current_update` 與 `on_track` 分開，不以沉默推定健康。
4. **Review priority.** 對新增/移除/重排的 project 說明 what changed、evidence、trade-off、capacity/dependency impact、what moves、decision owner/deadline。
5. **Create roadmap lens.** 產出 Now/Next/Later、quarter/theme 或 OKR-aligned view；將 precise execution details 保留在 project/cycle，不在高層 roadmap 偽造精準日期。
6. **Prepare executive review.** 組織 objective progress、project roll-up、risks, decisions, capacity/dependency gaps, stale updates, next checkpoint 與 specific asks。
7. **Handoff and approval.** 任何 roadmap/initiative status、priority、target、project relation 或 external communication change 必須先 preview、由 owner 批准，再交給確認可用的 Microsoft tool；否則輸出 `not_written`。

## Initiative schema

`initiative_id`、`objective`、`owner`、`lead_team`、`status`、`priority`、`labels`、`target_timeframe`、`projects`、`project_health_rollup`、`active_projects`、`stale_projects`、`dependencies`、`risks`、`latest_update`、`decision_needed`、`sources`、`write_status`。

## Guardrails

不要因為一個 project 延遲就自動判定 initiative off track；說明 roll-up 方法與 evidence。不要把 labels 當成 strategy。不要自行改 priority、target date 或 project membership。
