---
name: project-update
description: Draft recurring project and initiative health updates in a Linear-like operating cadence using Microsoft 365 context. Use for weekly project updates, initiative roll-ups, project health, stale updates, leadership review, steering updates, and progress-change communication.
---

# Project and initiative update

Update 是 recurring operating artifact，不是一次性的週報作文。先確認 update type、project/initiative、period、owner/lead、audience、cadence、last update、health rubric、source locations 與 decision/ask。

## Workflow

1. **Reconstruct the baseline.** 讀取上一份 approved update、project/initiative properties、target timeframe、milestones、issues/cycles、dependencies、prior decisions 與 last update date。
2. **Collect changes.** 搜尋 approved Microsoft 365 scope 中自上次 update 以來的 project files、Planner/Project context、Excel metrics、Outlook commitments、Teams signals、Calendar decisions 與 related artifacts。標記 changed/unchanged/stale/unknown。
3. **Calculate health.** 根據 milestone progress、commitment variance、target-date/lead changes、dependency slips、scope changes、issue status、update freshness 與 evidence 判斷 `on_track`、`at_risk`、`off_track` 或 `no_current_update`。不要因缺少消息而判定 on track。
4. **Write the narrative.** 依序寫 health、progress since last update、what changed、challenges/risks、next steps、decisions/asks、dependencies、links/evidence。用 specific ask：決定什麼、誰決定、何時需要、no-action consequence。
5. **Roll up to initiative.** 對 initiative 將 contributing projects、health、active/stale projects、milestone/target change 與 objective signal 分開呈現。不要由一個 project 自動決定整個 initiative 狀態。
6. **Tailor audience.** Executive 看 outcome/health/risks/decisions；engineering 看 shipped/in progress/blockers/priority changes；cross-functional 看 impact/dependencies/asks；external 只用 approved customer-safe language。
7. **Review and publish gate.** 由 project lead/initiative owner 檢查內容並批准。需要寫入 SharePoint/OneDrive、Excel/PPT 或寄出 Outlook 時，先 preview exact target/change/recipients。Teams 只產生 draft，不直接發文。

## Update schema

`update_id`、`object_type`、`project_or_initiative`、`period`、`owner`、`health`、`headline`、`progress_since_last`、`changes`、`milestones`、`risks`、`dependencies`、`decisions_needed`、`asks`、`next_steps`、`staleness`、`evidence`、`audience`、`publish_status`。

## Guardrails

不要把 progress percentage 當成 outcome。不要以已完成的 issue 數量掩蓋 deadline/quality/customer impact。不要修改 health、target date、lead 或 publish update without human approval.
