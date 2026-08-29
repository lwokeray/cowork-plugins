---
name: sales-task-planning
description: >-
  在 Microsoft Planner 中檢視、建立或更新企業銷售工作與計畫，並以 Work IQ runtime discovery 驗證支援路徑、schema、重複項目及欄位。
  適用於核准的 Follow-up、Sales plan、Overdue review、Assignment 與 Progress update；不適用於唯讀優先排序或沒有來源的工作建立。
metadata:
  author: lwokeray
  version: "2.0.0"
---

# 銷售工作規劃

## 概述

以 Cowork 內建 Unified Work IQ MCP 協調 Microsoft Planner。Work IQ 能推理 Planner 內容，但實體路徑、operation 與 payload 必須在執行期由 `search_paths` 與 `get_schema` 發現，不得從記憶硬編碼。

## 適用情境

- 檢視指定 Plan、Account 或期間的銷售工作。
- 將已核准 Meeting／Proposal／Handoff 行動轉成 Planner task。
- 更新 Owner、Due、Priority、Progress 或 Completion state。
- 找出 Overdue、Duplicate、Unassigned 或 Blocked task。

## 不適用情境

- 今日唯讀優先排序 → `daily-sales-rhythm`
- 未經來源支持的自動工作建立。
- Project execution outside Sales。

## 快速開始

1. 確認是 Review、Create、Update、Assign、Move 或 Complete，以及目標 Plan／Task scope。
2. 呼叫 `search_paths`，以 Planner、Plan、Task 及 operation 篩選目前支援的 Microsoft Graph v1.0 路徑。
3. 對選定 path 與 operation 呼叫 `get_schema`，再用 `fetch` 解析 Plan／Task 並檢查重複。
4. 驗證 Task name、Plan、Bucket、Owner、Start、Due、Priority、Progress 與來源。
5. 顯示精確 preview；核准後才使用 `create_entity` 或 `update_entity`，再 `fetch` 驗證結果。

## 核心流程

### 階段一：Scope 與 Identity

- 解析唯一 Plan、Bucket 與 Task；多個同名項目先列候選。
- 沒有目標 Plan 時不得任意選擇最近或最常用 Plan。
- 工作來源必須是已確認承諾、使用者明確要求或核准的 Sales plan。

### 階段二：Runtime Discovery

- `search_paths` 只選擇回傳且 operation 符合的 path。
- `get_schema` 必須針對相同 path 與 operation。
- Schema 沒有的欄位不得傳送；operation 未回傳時標示 `不支援`。
- `ask` 只用於跨 Outlook、Teams、Meetings、Files、People 與 Planner 的語意關聯。

### 階段三：Duplicate 與欄位驗證

在 Create 前以 `fetch` 比較 Task title、Plan、Owner、Due 與來源 commitment。近似項目需顯示給使用者決定，不自動建立第二筆。

不得猜測 Assignee、Due、Priority、Progress 或 Completion。未知欄位保留 `未知`。

### 階段四：Approval 與 Verification

| Task | Plan | Bucket | Start | Due | Priority | Progress | Proposed assignee | Evidence | State |
|---|---|---|---|---|---|---|---|---|---|
|  |  |  |  |  |  |  |  |  | Review／等待核准／完成／不支援／Blocked |

核准時只執行 preview 中的欄位。執行後使用 `fetch` 驗證 Task ID、欄位與最後更新時間，再報告結果。

## Work IQ 工具規則

- `search_paths`、`get_schema` 是所有 Planner entity operation 的必要前置步驟。
- `fetch` 用於 Plan／Task identity、duplicate check 與 post-write verification。
- `create_entity`、`update_entity` 只在明確核准後使用。
- `do_action`、`delete_entity` 只有 Work IQ 明確提供完整 URL 時才可使用；不得推測。

## 範例

**輸入：**「把剛才核准的三個 Follow-up 建成 Planner 工作。」

**正確行為：**解析目標 Plan，runtime discovery，逐筆 duplicate check，顯示所有欄位並取得核准後才建立。

## Guardrails

- 不硬編碼 Planner path、operation 或 payload。
- 不猜測 Owner、Due、Priority 或 Completion。
- 不因使用者先前核准會議紀要，就視為已核准 Planner 寫入。
- Policy denial 後停止，不切換 Agent 或工具規避。

## 常見問題

| 問題 | 處理方式 |
|---|---|
| Planner path 未回傳 | 產生 Planner-ready preview 並標示 `不支援`。 |
| 找到近似 Task | 顯示 duplicate evidence，要求 Update 或 Skip 決定。 |
| Schema 沒有 Bucket／Assignee | 不傳送該欄位，標示 `不支援`。 |
| 寫入被 policy 拒絕 | 回報 operation 與 correlation details，不重試。 |
