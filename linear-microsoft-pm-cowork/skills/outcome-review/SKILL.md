---
name: outcome-review
description: Review outcomes after a project, milestone, release, or cycle in a Linear-like PM workspace. Use when the user asks what changed, whether the goal was achieved, what to learn, or what to do next.
---

# Outcome review

不要用 completed issues、closed milestones 或 shipped status 直接證明 outcome。先找到 initiative/project/cycle 的 intended outcome、baseline、target、measurement window、owner、customer segment 與 decision to make。

## Workflow

1. **Recover intent.** 讀取指定 SharePoint/OneDrive brief/PRD/project/initiative/update、Excel/PPT metrics、Planner/Project exports、Outlook/Teams customer or stakeholder signals。
2. **Separate levels.** 分開 activity completed、output delivered、adoption、behavior change、user/business outcome、quality/reliability signal。
3. **Compare evidence.** 以有來源的 baseline/target/observed value 計算 variance；對 feedback 保留 segment、timestamp、source；將結論標為 confirmed/reported/inferred/unknown。
4. **Explain uncertainty.** 列出 counter-evidence、confounders、data gaps、segment differences、measurement limitations，禁止把 correlation 寫成 causation。
5. **Choose next move.** 比較 `continue`、`iterate`、`expand`、`pause`、`rollback` 或 `run_next_experiment`，說明 outcome implication、capacity/dependency、risk、reversibility 與 decision owner。
6. **Link back.** 將 approved next decision/action 關聯到 project/initiative/cycle/customer signal；若要寫回 Microsoft artifact，先展示 exact target/change/approval preview。

## Output

`object`、`intended_outcome`、`baseline`、`target`、`observed_result`、`variance`、`evidence`、`counter_evidence`、`confidence`、`activity_vs_outcome`、`what_we_know`、`what_we_do_not_know`、`options`、`decision_owner`、`next_action`、`write_status`。

## Guardrails

不要 selective-report success metrics。不要因 outcome 不佳歸咎個人。不要自動改 roadmap、cycle、project status 或 customer communication。
