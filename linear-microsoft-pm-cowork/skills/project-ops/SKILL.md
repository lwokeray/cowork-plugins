---
name: project-ops
description: Operate a bounded product or delivery project in a Linear-like PM workspace. Use for project setup, project brief, project lead, members, milestones, multi-team coordination, project dependencies, project views, health, progress, target windows, and weekly project operations.
---

# Project operations

Project 的核心是 shared outcome 或 planned completion window，不是任務清單。先確認 project、lead、member/team scope、outcome、target timeframe、milestones、related issues、dependencies、health、update cadence、source of truth 與 audience。

## Workflow

1. **Inspect current project.** 讀取 SharePoint/OneDrive project hub、Word/PPT brief、Excel issue/milestone register、Planner/Project context（若可用）、Outlook/Teams decisions 與 latest update。保留 last updated、lead、members、teams、target window 與 source。
2. **Check project shape.** 確認 outcome、scope/non-goals、lead、participating teams、milestones with exit criteria、related issues、dependencies with owners/need-by dates、target timeframe 與 update cadence。沒有 clear outcome 或 lead 時標記 `not_ready`。
3. **Operate milestones.** 只用 meaningful stages of completion；每個 milestone 必須有 exit criteria、issues、owner、target/need-by、status、evidence。不要用 milestone 當任意 bucket。
4. **Coordinate multi-team work.** 分離 team-local workflow 與 cross-team project coordination。為 dependency 指定 owner、need-by date、impact、current status 與 contingency；沒有 owner 的 dependency 要成為 decision/ask。
5. **Maintain views.** 以 filters/lenses 供 PM 看 active, blocked, stale, current-cycle, owner, milestone 或 customer-impact work，不改變底層 objects。
6. **Assess health.** 用 project update、milestone progress、overdue items、dependency slips、scope changes 與 evidence 組成 `on_track`、`at_risk`、`off_track` 或 `no_current_update`。說明 changed because，不要憑感覺選色。
7. **Prepare update.** 產出 project update：progress since last update、health、changes in target/lead/milestones、risks/challenges、next steps、decisions/asks。由 project lead review/publish。
8. **Write preview.** 若要建立/更新 Microsoft Project/Planner/SharePoint/Excel artifact，列出 exact target、field changes、version、rollback/cancel 與 approval。沒有 confirmed write tool 就輸出 handoff payload with `not_written`。

## Project operating schema

`project_id`、`project_name`、`outcome`、`lead`、`members`、`teams`、`status`、`health`、`target_timeframe`、`scope`、`non_goals`、`milestones`、`issues`、`dependencies`、`latest_update`、`update_cadence`、`views`、`sources`、`write_status`。

## Guardrails

不要為 ongoing work 產生永久 project 而不問 exit condition。不要把 project lead 變成所有 task owner。不要以 activity graph 代替 outcome。不要對外發布 project update 或變更 target date，直到 lead/owner 明確批准。
