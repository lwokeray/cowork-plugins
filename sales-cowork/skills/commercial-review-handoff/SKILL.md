---
name: commercial-review-handoff
description: >-
  整理一個企業商機或提案中的 Pricing、Discount、Margin、Legal、Security、Privacy、SLA、Data residency 與必要核准，建立具風險、Owner、Due 與來源的 Commercial Review Handoff。
  適用於商務審查與跨部門核准準備；不適用於代替核准人接受條款、決定最終價格或送出 Proposal。
metadata:
  author: lwokeray
  version: "2.0.0"
---

# 商務審查交接

## 概述

把 Proposal 中需要人員決策的 Commercial、Legal、Security 與 Privacy 項目轉成可追蹤的 Review Package。此 Skill 負責 Evidence、Risk classification、Owner routing 與狀態，不做最終決策。

## 適用情境

- 準備 Pricing／Discount／Margin review。
- 整理 Contract deviation、SLA、Data residency、Security 或 Privacy question。
- 建立 Reviewer、Due、Evidence、Decision state 與 escalation path。
- 準備跨部門 Commercial review meeting。

## 不適用情境

- 核准價格、折扣、Margin 或付款條件。
- 接受 Legal、Security、Privacy 或 SLA 承諾。
- 直接修改或寄送正式 Proposal／Contract。

## 快速開始

1. 確認唯一 Opportunity／Proposal、版本、Deadline 與要求的 Review scope。
2. 用 `ask` 定位 Proposal、Email、Teams、Meeting、Policy、Reviewer 與已有 Decisions。
3. 用 `search_paths`、`get_schema`、`fetch` 驗證條款、來源、版本、Owner 與 approval evidence。
4. 將項目分類為 `Ready／Need clarification／Decision required／Blocked`，評估 Severity 與 Likelihood。
5. 建立 Handoff；Planner 或 file write 在逐項 preview 與核准後執行。

## 核心流程

### 階段一：Version Gate

- 必須確認 Proposal／Contract 的唯一版本與 last-modified time。
- 不比較或合併不同版本而不顯示差異。
- 口頭或聊天中的「可以」不能取代正式 approval evidence。

### 階段二：Decision Inventory

逐項記錄 Category、Request、Current position、Source、Owner、Due、Severity、Likelihood、Approval state 與 Required evidence。

### 階段三：Risk 與 Escalation

- Severity 反映可能影響；Likelihood 反映發生可能性，兩者不得混為一項主觀分數。
- High impact 或超出核准範圍的項目明確標示 Senior reviewer／Legal／Security／Privacy escalation。
- 不提供法律意見或代表 reviewer 作出 acceptance。

### 階段四：輸出與追蹤

| Category | Request／Deviation | Source／Version | Severity | Likelihood | Owner | Due | Required decision | State |
|---|---|---|---|---|---|---|---|---|
|  |  |  |  |  |  |  |  | Ready／Clarify／Decision／Blocked |

最後列出 `可繼續項目`、`阻塞項目`、`Escalations` 與 `下一個 Review checkpoint`。

## Work IQ 工具規則

- `ask` 用於跨文件與人員關聯；`fetch` 驗證 exact clause、version、message 與 approval。
- `create_entity`、`update_entity` 需 path/schema discovery、preview 與核准。
- `do_action` 只在 Work IQ 明確支援且使用者核准通知／會議動作時使用。

## 範例

**輸入：**「整理 Contoso 提案還有哪些商務與資安核准沒完成。」

**正確行為：**確認 Proposal 版本，逐項列 Evidence、Owner 與 Decision state；不把聊天同意當正式 approval。

## Guardrails

- 不代替 Pricing、Finance、Legal、Security、Privacy 或 Delivery Owner 決策。
- 不接受 Contract deviation 或 Final terms。
- 不修改正式文件或寄送 Proposal，除非另有明確 preview 與核准。
- 不將推論寫成 approval evidence。

## 常見問題

| 問題 | 處理方式 |
|---|---|
| 找到多個 Proposal 版本 | 要求選定唯一版本並顯示差異。 |
| Owner 不明 | 標示 `未知`，找可驗證的 internal source 或 escalation route。 |
| Approval 只存在聊天 | 列為 supporting context，不視為正式核准。 |
| Deadline 已過 | 標示 Blocked，提出具 Owner 的 escalation。 |
