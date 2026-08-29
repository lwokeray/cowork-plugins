---
name: marketing-operating-rhythm
description: >-
  從 Microsoft 365 中的 Campaign milestones、Calendar、承諾、Planner 工作、Approval、KPI snapshot 與風險，整理今日、每週或 Campaign control-room 的 Marketing priority brief。
  適用於「今天先做什麼」「本週 Marketing 重點」「Campaign stand-up」「整理待決策與阻礙」；不適用於完整 Campaign strategy、績效歸因、建立工作或自動監控。
metadata:
  author: lwokeray
  version: "1.0.0"
---

# Marketing Operating Rhythm

## Overview

把分散於 Outlook、Teams、Calendar、Planner、SharePoint、OneDrive、Excel 與會議內容的 Marketing 訊號整理成可執行的 Daily Brief、Weekly Review 或 Campaign Control Brief。輸出先呈現真正會影響 Launch、Audience、Brand、Budget、Lead flow 或 KPI 的事項，不把活動量、未讀訊息或所有待辦堆成清單。

此 Skill 預設為 Read-only。若使用者要求建立或更新工作，先完成 Brief，再交由 `marketing-work-management` 處理逐項 Preview、去重與核准。

## When to Use

- 整理今日或本週 Marketing 最重要的三至五項行動。
- 準備 Marketing stand-up、Campaign control room 或週會。
- 彙整即將到期的 Campaign milestone、內容核准、活動、Launch 與跨部門依賴。
- 判斷哪些阻礙、決策或未完成承諾最可能影響結果。
- 比較上一個核准週期與目前狀態，找出新增、惡化、解除或無變化的事項。

## When NOT to Use

- 建立完整 Campaign brief → `campaign-strategy-plan`
- 診斷 Channel 或 Funnel performance → `campaign-optimization-review`
- 建立 Executive performance report → `marketing-performance-report`
- 建立、修改或完成 Planner 工作 → `marketing-work-management`
- 設計持續自動化或排程監控；本 Skill 只處理目前一次執行的證據。

## Quick Start

1. 解析時間範圍、Campaign／Team scope、讀者與決策節奏；未指定時使用使用者當地時區的「今天」。
2. 用 `ask` 彙整近期 Marketing commitments、meeting decisions、campaign files、tasks、risks 與 KPI mentions。
3. 使用 `search_paths`、`get_schema` 與 `fetch` 驗證時間、Owner、Status、Due、版本及來源；文件需要精確內容時使用 `fetch_blob`。
4. 依 Business impact、Urgency、Dependency、Evidence confidence 與可行動性排序，最多保留五項。
5. 交付 Priority、Decision、Blocker、Milestone、Evidence gap 與明確 Next action；不執行任何 mutation。

## Core Instructions

### 1. Resolve the operating window

先確定下列範圍：

- Mode：`Daily`、`Weekly` 或 `Campaign Control`。
- Window：明確起訖日期與時區；Daily 預設今天，Weekly 預設今天起七日。
- Scope：使用者本人、具名 Team、單一 Campaign、Launch 或 Event。
- Audience：個人執行、Marketing lead、跨部門團隊或 Executive。
- Baseline：若使用者要求「變化」，需找到先前核准 snapshot；找不到時只描述 Current state。

若多個 Campaign 名稱相似，先以日期、Owner、workspace 或 campaign ID 解析唯一對象。不得把不同地區、產品或版本的工作混在一起。

### 2. Gather bounded evidence

以最小足夠範圍查找：

1. Calendar：固定日期、Launch、Event、Review、Content deadline。
2. Planner 或 approved work register：Owner、Due、Status、Dependency。
3. Outlook／Teams：具名承諾、Decision、Approval、Blocker、最新變更。
4. SharePoint／OneDrive／Word／PowerPoint：核准 Brief、Launch plan、Brand／Legal review 與版本。
5. Excel：KPI snapshot、Budget pacing、Asset tracker 或 Lead handoff register。

`ask` 的綜合結果是探索線索，不是重大事實的最終證明。對日期、Owner、Approval、Budget、Status、KPI 與對外承諾，必須使用精確來源驗證。來源無法取得時標示 `無法存取`；找不到證據時標示 `未知`。

### 3. Normalize signals

每個候選事項整理為：

| Field | Requirement |
|---|---|
| Outcome | 會影響的 Marketing 結果，不只是活動名稱 |
| Evidence | 來源、日期、版本或訊息脈絡 |
| Owner | 有明確證據才填寫 |
| Due | 保留時區與期限依據 |
| State | 已確認／進行中／Blocked／等待核准／未知 |
| Dependency | 需要誰、什麼資產或哪個 Decision |
| Next action | 一個可完成且有完成標準的行動 |

不要把 Meeting attendance、訊息數量、文件編輯次數或 Task 數量直接視為進展。進展必須對應完成的 Deliverable、取得的 Approval、解除的 Dependency 或 KPI 的可驗證變化。

### 4. Prioritize

依下列順序判斷：

1. 會阻止 Launch、Send、Publish、Audience handoff 或 Legal／Brand approval 的事項。
2. 期限在 Window 內且尚無合格 Owner／Input／Approval 的事項。
3. KPI、Budget 或 Lead flow 有實質偏差且需要現在決策的事項。
4. 已對內或對外承諾、但缺少完成證據的事項。
5. 可在目前 Window 內解除重大風險或產生下一個有效證據的行動。

每項評為 `Critical／High／Normal`，但只呈現有證據且可行動者。沒有重大事項時直接說明「本時段沒有已驗證的重大變化」，不要用低價值項目填滿版面。

### 5. Separate states and deltas

當有 prior snapshot 時，變化只使用：`New`、`Changed`、`Worsened`、`Resolved`、`No material change`。聊天中的口頭同意不能自動等同正式 Approval；文件被上傳不能等同已發布；工作被標示完成也不能證明對外結果已發生。

### 6. Produce audience-appropriate content

- Individual contributor：具體 Next action、Owner、Due、Dependency。
- Marketing lead：跨 Campaign 取捨、Capacity、Approval 與 Risk。
- Executive：Outcome、KPI、Budget exposure、Decision request；不輸出工具或流程細節。
- Cross-functional team：共同 milestone、交付條件、明確 handoff 與 unresolved decision。

## Output Format

```markdown
# Marketing Operating Brief

- **Mode / Window:**
- **Scope:**
- **Current posture:** 一至兩句可直接判斷是否 on track

## Priority actions
| Priority | Outcome at risk / opportunity | Evidence | Owner | Due | Next action | Done when |
|---|---|---|---|---|---|---|

## Decisions needed
| Decision | Decision owner | Needed by | Options / trade-off | Evidence |
|---|---|---|---|---|

## Milestones and blockers
| Date | Milestone | State | Dependency / blocker | Impact |
|---|---|---|---|---|

## Evidence gaps
- [會改變優先順序但目前未知的資料]
```

若使用者要求 Weekly Review，再加入 `Delta since prior snapshot`；沒有 baseline 時明確寫 `無 prior snapshot，未宣稱 movement`。

## Work IQ Tool Rules

- `ask`：跨工作負載找出可能的 commitments、decisions、tasks 與 files。
- `search_paths`、`get_schema`：在精確讀取前發現目前可用 resource path 與欄位。
- `fetch`：驗證 event、message、task、file metadata、list item 或 workbook entity。
- `fetch_blob`：只在需要檢查特定文件內容且大小允許時使用。
- 不使用 `create_entity`、`update_entity`、`delete_entity` 或 `do_action`；本 Skill 保持 Read-only。

## Examples

**User:**「整理本週三個 Marketing 重點。」

**Correct behavior:** 先界定本週與 Team scope，驗證 Launch／Campaign deadline、核准與工作狀態，輸出最多三項具 Outcome、Owner、Due、Evidence 與完成標準的行動；不列出所有未讀 Email。

**User:**「跟上週比，這個 Campaign 有什麼變化？」

**Correct behavior:** 找到上週核准 snapshot；若找不到，輸出目前 posture 並標示無法判斷 movement，不自行重建上週狀態。

## Guardrails

- 不捏造 Campaign、Owner、Deadline、Approval、Budget、KPI 或 Customer commitment。
- 不因訊息急迫、寄件人職級或會議密度就自動提高 Business priority。
- Private／Confidential calendar event 只顯示可用性或必要時間，不揭露 Subject、Body、Attendees 或 Location。
- 不自動建立工作、寄送更新、修改 register、完成 Task 或發布內容。
- Tenant policy denial、權限不足或 operation 不存在時停止，不改用其他工具規避。

## Common Issues

| Issue | Cause | Fix |
|---|---|---|
| 重點過多 | 未設定 Window 或 Outcome filter | 限定 Scope，最多五項且需影響 Outcome。 |
| 把活動當成果 | 只看到 Meeting／Task 數量 | 尋找 Deliverable、Approval 或 KPI 證據。 |
| 宣稱進度變化 | 找不到 prior snapshot | 只報 Current state，標示無 baseline。 |
| Owner 衝突 | 不同來源版本不一致 | 以最新核准 artifact 為主並保留衝突。 |
| 要求直接建 Task | 超出 Read-only boundary | 完成 Brief 後交由 `marketing-work-management`。 |
