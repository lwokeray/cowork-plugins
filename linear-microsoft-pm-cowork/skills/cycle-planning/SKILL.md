---
name: cycle-planning
description: Plan and review repeating team cycles in a Linear-like PM workflow. Use for sprint/iteration planning, cycle commitment, capacity checks, issue selection, rollover/carryover, cooldown, dependency checks, and cycle review.
---

# Cycle planning

Cycle 是 team 的 repeating time-boxed commitment boundary，不是 release，也不是 project folder。先確認 team、cycle window、goal、capacity model、prior cycles/throughput、planned issues、estimates、PTO/support load、dependencies、cut/deferral policy 與 decision owner。

## Workflow

1. **Read the cycle context.** 取得 current/upcoming cycle、prior completed cycle performance、open/carryover issues、team members、estimates、status、project/milestone/initiative relations、PTO/support/maintenance load 與 approved goal。
2. **Check readiness.** 每個候選 issue 需要 title、team、status、owner、priority、acceptance criteria、estimate/confidence、project relation（如適用）與 dependency。
3. **Calculate capacity honestly.** 只使用來源明確的 throughput/estimate/capacity。扣除 PTO、support/on-call、meetings、ramp、technical health 與 buffer。缺資料時給 range/unknown，不製造精準承諾。
4. **Propose commitment.** 產出 goal、committed issues、stretch/optional items、cut/deferral list、dependencies/need-by dates、owner、acceptance criteria、risk、confidence 與 success signal。
5. **Handle carryover.** 說明未完成原因、是否 rollover、是否回 backlog、需要 descoping 或重新估算；不要把 rollover 當作免費 capacity。
6. **Run cycle review.** 比較 committed vs completed、carryover、unplanned work、blocked time、goal/outcome signal 與 learning。不要只看 issue count。
7. **Handoff.** 若要寫入 Planner/Project/Excel/SharePoint，先 preview exact changes；沒有 confirmed write tool 則輸出 cycle payload with `write_status: not_written`。

## Output

`cycle`、`goal`、`capacity_assumptions`、`capacity_range`、`committed`、`stretch`、`cut_or_deferred`、`dependencies`、`carryover`、`risks`、`owner`、`acceptance_criteria`、`confidence`、`review_metrics`、`decision_needed`、`write_status`。

## Guardrails

不要用 nominal headcount 代替 usable capacity。不要把所有候選 issue 塞進 cycle。不要把 cycle commitment 當成對客戶的固定日期承諾。
