---
name: sales-task-planning
description: >-
  在 Microsoft Planner 中檢視、建立或更新企業銷售工作與計畫，並以 Work IQ runtime discovery 驗證支援路徑、schema、重複項目及欄位。
  適用於核准的 Follow-up、Sales plan、Overdue review、Assignment 與 Progress update；不適用於唯讀優先排序或沒有來源的工作建立。
license: MIT
metadata:
  author: lwokeray
  version: "3.1.0"
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

### 階段五：把承諾轉成良好工作

工作名稱要描述完成結果，例如「提供 Contoso Security questionnaire 的已核准回覆」，不要寫「Follow up Contoso」。Description 應包含：來源、Account／Opportunity、背景、完成標準、必要連結、依賴及不應對外承諾的限制。

欄位判斷：

- Owner 只能來自明確承諾、使用者指定或已核准計畫。
- Due 必須有客戶／內部承諾、會議、流程或使用者指定依據。
- Priority 依已核准規則或客戶影響設定，不從 Email 語氣推斷。
- Progress 反映 Planner 實際狀態，不以文件已建立推定整個工作完成。
- Completion 需要完成標準與來源證據；只有使用者明確確認時才提出更新。

### 階段六：Review 與清理

Review 模式依指定 Plan、Account、Owner 或期間找出：逾期、未指派、缺少 Due、Blocked、可能重複、已完成但仍開啟、來源已失效及長期無更新工作。對每筆說明問題與建議修正，不批次變更。

Duplicate 判斷需比較相同承諾／Outcome、Account、Plan、Owner、Due 與來源。標題相似但交付結果不同者不是重複。

### 階段七：變更預覽

Create preview 顯示所有將寫入的欄位；Update preview 顯示每一個舊值、新值與理由。多筆操作逐筆編號，讓使用者能只核准部分項目。刪除、取消或移動到其他 Plan 屬於獨立 consequential action，不與一般更新一併推定核准。

## Planner-ready 產出

每筆工作包含：

1. Task title。
2. Plan 與 Bucket。
3. Account／Opportunity／Meeting 關聯。
4. Description 與完成標準。
5. Proposed Owner、Start、Due、Priority、Progress。
6. 依賴、Blocker 與必要連結。
7. 來源、日期及建立／更新理由。
8. Duplicate check 結果。
9. Operation state：草稿、等待核准、完成、不支援或受阻。

## 停止與失敗處理

- Plan、Task 或 operation 無法唯一解析時停止寫入。
- Schema 不支援的欄位從 payload 移除並保留在說明中，不嘗試別名。
- Create 成功但後續欄位更新失敗時，回報部分完成與 Task ID，不重複建立。
- Network／policy error 後先確認實際結果再決定是否重試，避免 duplicate。
- 使用者撤回核准或來源承諾已改變時取消尚未執行的項目。

## 使用者溝通與完成檢查

- 對使用者呈現 Planner-ready 工作或欄位差異，不解釋 runtime discovery 技術細節。
- 不顯示 schema、payload 或隱藏思考；僅在無法執行時以一般語言說明限制。
- 每筆工作有 Outcome、來源、Owner、Due 依據、完成標準與 Duplicate 結果。
- 多筆 mutation 可逐筆核准，未核准項目不執行。
- 寫入後已驗證 Task ID 與實際欄位；部分成功不宣稱全部完成。

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
