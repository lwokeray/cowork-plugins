---
name: close-delivery-handoff
description: >-
  依已簽署或明確核准的 Microsoft 365 證據，準備從企業銷售成交到 Delivery、Implementation 或 Customer Success 的交接。
  適用於 Scope、Outcome、Stakeholder、Commitment、Dependency、Artifact 與 Owner 移轉；不適用於自行宣告 Won、接受合約義務或開始未核准交付。
metadata:
  author: lwokeray
  version: "2.0.0"
---

# 成交與交付交接

## 概述

保存從銷售到交付的客戶成果、承諾、範圍與責任。只有存在 Signed 或明確 Approved evidence 時，才能把 Opportunity 標示為具成交依據；否則輸出 `Close readiness`，不能宣稱 Won。

## 適用情境

- Close readiness 或 Signed evidence review。
- 建立 Delivery／Implementation／Customer Success handoff。
- 整理 Scope、Assumptions、Dependencies、Stakeholders、Milestones 與 unresolved commitments。
- 準備 Kickoff、Planner work 與 artifact package。

## 不適用情境

- 代替 Legal／Commercial approval。
- 自行宣告 Won 或接受合約義務。
- Renewal／Expansion review → `renewal-expansion-review`

## 快速開始

1. 確認 Account、Opportunity、Transition type、Target team 與 deadline。
2. 用 `ask` 找 Approved outcome、Signed／approved artifacts、scope、stakeholders、dates、tasks 與 unresolved commitments。
3. 用 `search_paths`、`get_schema`、`fetch` 驗證每項重大 evidence、version 與 Owner。
4. 分開列 Contract fact、Delivery assumption、Customer commitment 與 Internal action。
5. 建立 Handoff package、Kickoff checklist、Planner 建議與 Customer communication draft；任何執行都逐項核准。

## 核心流程

### 階段一：Close Evidence Gate

- `Signed` 需要可驗證的簽署或正式 approval artifact。
- 口頭、Email 或 Teams 中的正向表述不能單獨視為 Signed contract。
- 證據不足時使用 `Close readiness`，列出缺少項目。

### 階段二：Handoff Map

整理 Customer outcome、In／Out of scope、Milestone、Stakeholder、Commercial constraint、Security／Privacy commitment、Assumption、Dependency、Deliverable、Owner、Due 與 Source。

### 階段三：責任與風險

- 客戶承諾與內部工作分開。
- 未確認 Owner／Due 不得猜測。
- Proposal assumption 未進入核准文件時，不得當成 Delivery obligation。
- 每個 unresolved item 指定 Decision owner 或標示 `未知`。

### 階段四：輸出與執行

| Commitment／Outcome | Type | Customer owner | Internal owner | Due | Evidence | Risk／Unknown | State |
|---|---|---|---|---|---|---|---|
|  | Contract fact／Assumption／Customer commitment／Internal action |  |  |  |  |  | Confirmed／Proposed／Blocked |

輸出 Internal handoff、Kickoff agenda、Planner proposal、Customer draft 與 next checkpoint。寫入、寄送或排程均需 preview 與核准。

## Work IQ 工具規則

- `ask` 找到 cross-workload transition context；`fetch` 驗證 signed／approved evidence。
- Create／Update 前使用 `search_paths`、`get_schema`。
- `do_action` 只使用 Work IQ 明確 URL 且逐項核准。
- Planner 變更使用 `sales-task-planning` 的流程。

## 範例

**輸入：**「Contoso 已簽約，準備交給 Delivery。」

**正確行為：**先驗證 signed evidence 與版本，再建立 scope、commitment、owner、dependency 與 unresolved item 的 Handoff。

## Guardrails

- 無簽署或正式 approval evidence 不宣稱 Won。
- 不把 Proposal assumption 轉成 Contract obligation。
- 不猜測 Customer／Internal owner 或 due date。
- 未核准不建立 Planner、排程 Kickoff 或寄送通知。

## 常見問題

| 問題 | 處理方式 |
|---|---|
| 找不到 signed artifact | 改輸出 Close readiness。 |
| Proposal 與 Contract 不一致 | 以核准 Contract 為準並列出差異。 |
| Delivery owner 未確認 | 標示 `未知`，建立 escalation。 |
| 寫入被 policy 阻擋 | 回報 blocked item，不重試。 |
