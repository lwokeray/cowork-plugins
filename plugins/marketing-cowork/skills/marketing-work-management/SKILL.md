---
name: marketing-work-management
description: 在 Microsoft 365 中檢視、建立、更新、指派、重新排程或有限刪除 Marketing work item、Planner task、Campaign／Content／Approval register、Calendar milestone與 internal handoff，具備 runtime schema discovery、identity resolution、duplicate check、Preview、逐項核准、Idempotency與結果驗證。 適用於已核准計畫的執行管理；不適用於自行決定策略、mass external communication、未核准內容發布或規避 Tenant policy。
metadata:
  author: lwokeray
  version: 1.0.1
license: MIT
---

# Marketing Work Management

## Overview

把已核准的 Marketing plan／brief／review轉成受控的 Microsoft 365 work artifacts，並維持 Owner、Due、Dependency、Approval、Version與 source linkage。所有 mutation都先發現目前 Work IQ支援的 path／schema、解析唯一 target、檢查 duplicate與 current state、顯示完整 Preview、取得逐項核准，最後讀回驗證。不能因任務合理就推定有操作權限。

## When to Use

- 檢視、建立或更新 Planner Marketing tasks／buckets／checklist（依 runtime支援）。
- 維護 SharePoint／Excel／OneDrive 中 approved Campaign、Content、Asset、Approval、Lead handoff或Experiment register。
- 建立／更新 internal Calendar milestone、review session或具名 handoff event。
- 產生 internal Outlook／Teams draft／action，限具名 recipient與核准情境。
- 做 duplicate cleanup preview、Owner／Due／Status correction、archive／closeout與result verification。

## When NOT to Use

- 自行決定 Campaign strategy、Content claim、Budget、Audience、MQL或 Launch Go／No-Go。
- Mass external Email、Event invitation、Social posting、Ad submission、Website publishing或 Audience upload。
- 猜 person Email、Planner ID、site／list／file path、schema、action URL或 system status。
- 沒有 Preview與核准就寫入、刪除、寄送、指派或重新排程。
- Tenant policy拒絕後改用另一個 Agent／tool／path重試。

## Quick Start

1. 確認 desired outcome、source plan／brief、target workspace、artifact type、owner、due、status、required fields與是否允許 create／update／delete／action。
2. 使用 `search_paths`與`get_schema`發現 runtime目前支援的 exact path、method、fields、actions與限制；不可依記憶猜 API。
3. 使用 `fetch`解析唯一 target、person、container、existing item與current version；先做 duplicate／conflict／idempotency check。
4. 顯示每個 mutation的完整 Preview、before／after、dependencies、recipient／time與可逆性；逐項取得核准。
5. 使用 `create_entity`、`update_entity`、`delete_entity`或`do_action`執行已核准項目；立即 `fetch`驗證，回報成功、blocked、partial或failed，不重複。

## Core Instructions

### 1. Require an approved execution basis

Write request需能回到使用者指令或 approved source artifact。記錄 Source title／URL／version、Plan owner、Approver、requested operations、scope與deadline。Skill可以整理使用者明確要求的工作，但不能從 research／report recommendation自動變成 committed task。

如果 Source是 Draft，建立的 item也需標 Draft／Proposed；不能寫成 Approved／Committed。Budget、Legal、Privacy、Brand、Launch與Lead status仍由對應 owner決定。

### 2. Discover the runtime contract

每種 entity／action都遵循：

1. `search_paths`找目前可用 resource paths。
2. `get_schema`確認 method、required／optional fields、types、enum、action URL與 policy hints。
3. `fetch`讀 container與候選 item，取得 stable ID／etag-like state（若提供）。
4. 只有 schema明確支援才組 payload。

不硬編碼 Planner、SharePoint、Excel、Outlook、Teams或 Calendar path。`jsonBody`等參數需依 tool contract使用正確 encoding。若 operation未提供，輸出 `不支援`與可人工套用的 Preview，不換工具規避。

### 3. Resolve identities and containers

- Person：以 Work IQ／directory evidence解析唯一 user／address；絕不猜 Email。
- Workspace：以 site／team／plan／drive／file／list／table stable ID與名稱解析。
- Similar names：顯示最多五個候選與 distinguishing context，取得唯一 target。
- Permission：只使用登入使用者可見資料，不因已知 URL假定可寫。
- Private Calendar／message：只顯示完成操作所需最少資訊。

### 4. Normalize the work item

每項至少包含：Title、Outcome／Description、Source link、Campaign／Workstream、Owner、Due／timezone、Priority（只有 approved rule或使用者指定）、Status、Dependencies、Reviewers／approvers、Definition of done、Sensitivity／sharing、Version／last updated。

避免「Follow up」「Make content」「Review campaign」等無完成標準任務。改為「由 [Owner] 在 [Due] 前，依 [Source/version] 完成 [Deliverable]；Done when [verifiable condition]」。

### 5. Check duplicates and conflicts

Create前在同 container查：stable source ID、normalized title、Campaign、Owner、due window、linked asset／lead／experiment與 open status。分類：

- Exact duplicate：不建立，回傳 existing link／ID。
- Likely duplicate：顯示差異，要求 merge／update／create decision。
- Related but distinct：保留 dependency或parent link。
- Closed prior item：只有新 outcome／cycle才建立，連結 prior learning。

Update前讀 current value；若已符合 desired state，回報 `No change`。這是 Idempotency gate，避免重複 create／send／complete。

### 6. Separate mechanical changes from business decisions

可作 mechanical preview：修正 typo、link、approved Owner／Due、同步明確 source status。需要另行決策：Priority、Budget、Publish、Approved、MQL／SQL、Launch Go、Legal passed、Campaign pause、customer commitment。後者只有使用者／authorized owner明確決定才更新。

### 7. Build complete previews

#### Create preview

顯示 Container、Entity type、all fields、Source、Owner identity evidence、Due／timezone、dependencies、sharing／sensitivity、duplicate result與post-create verification。

#### Update preview

| Field | Before | After | Source / reason | Consequence |

若一次更新多筆，每筆獨立列出；使用者可核准部分。不得以「同步所有」隱藏不同 business meaning。

#### Delete／cancel preview

顯示 exact target、why、downstream links／dependencies、recoverability、notification effect與alternative（close／archive）。優先使用可回復的 Close／Archive；只有明確要求且 schema支援才 delete。

#### Action／communication preview

顯示 recipient／channel、identity、subject／event、完整 body／agenda、attachments／links、time／timezone、purpose、source、sensitivity、external／internal與stop condition。Email、Teams、Calendar與Task是不同 consequential actions，分別核准。

### 8. Execute safely

- `create_entity`：只對 schema支援 collection；每次記錄 returned ID／URL／status。
- `update_entity`：只送必要 field，避免覆蓋 concurrent changes；必要時重新 fetch。
- `delete_entity`：最後手段，exact ID，逐項核准。
- `do_action`：只使用 runtime明確提供 action URL；不可推測 send／complete／post／cancel endpoint。
- Batch：先小批次驗證，partial failure不重送成功項目。

Policy confirmation由平台執行，但 Skill仍需在呼叫前提供業務 Preview，讓使用者知道將改變什麼。若平台拒絕，視為 final governance result。

### 9. Verify every result

Mutation後 `fetch`讀回 target／collection，確認：ID、Title、Owner、Due、Status、Content／link、version與 unintended changes。Action若無可讀 entity，使用 response status／correlation detail與相關 source檢查，不能因 request sent就宣稱 recipient received／accepted。

結果分類：

- `Completed and verified`
- `Completed, verification limited`
- `No change / duplicate prevented`
- `Partially completed`（列成功與失敗）
- `Blocked by policy / permission / unsupported operation`
- `Failed—safe to retry`或`Failed—retry may duplicate`；後者先重新 fetch。

### 10. Manage specific Marketing artifacts

#### Planner tasks

保持 Campaign／bucket、Owner、Due、description、checklist／dependency、source與done criteria。完成 Task前確認 deliverable／approval evidence；Task被標 completed不代表 Campaign published或 KPI achieved。

#### Campaign／Content／Asset register

以 stable Campaign／Asset ID與 canonical URL去重。Status enum依 schema；Draft、In review、Approved、Scheduled、Published、Retired不可自行跨越。Excel更新需確認 table／row key與 formula cells，不覆蓋 calculated fields。

#### Approval register

記錄 Artifact/version、Review type、Approver、Requested／Due、Decision、Conditions、Evidence link與timestamp。Meeting chat同意不能自動變 Approved；需 authorized owner與正式 decision evidence。

#### Calendar milestones

解析 timezone、participants、availability、private conflicts、recurrence scope與notification。External mass invite不支援；只建立 internal或具名同意 participant的有限 event。

#### Internal handoff

Draft／send internal message需完整 context、source、one ask、deadline與recipient identity。External／mass communication交由正式 platform／owner。

### 11. Close and archive

Closeout前驗證 Definition of done、Deliverable link、Approval／publish evidence、actual date、owner與learning. Archive保留 source lineage與retention；delete前列 recovery。過期／superseded asset建議 Retire／Archive，不自動移除公開內容。

## Output Format

```markdown
# Marketing Work Management
## Execution basis and target workspace
## Current-state / duplicate check

## Proposed operations
| # | Operation | Target | Before → After / full content | Source | Consequence | Approval state |

## Execution results
| # | Result | Verified state | Link / ID | Limitation / next action |

## Blocked / unsupported / no-change items
## Audit handoff
```

## Work IQ Tool Rules

- `search_paths`、`get_schema`：每種 operation前必做 runtime discovery。
- `fetch`／`fetch_blob`：解析 target、identity、schema context、duplicate、current state與 post-write verification。
- `ask`：只用於跨 workload找 source context，不代替 exact entity read。
- `create_entity`、`update_entity`、`delete_entity`、`do_action`：只有完整 Preview、使用者核准、runtime支援與 Tenant policy允許時使用。

## Examples

**User:**「把 Campaign plan 的工作建到 Planner。」

**Correct behavior:** 找唯一 Plan／bucket／people，解析 source version，將每項改寫成有 Outcome／Owner／Due／Done when的 task，查 duplicate，顯示所有 Preview；核准後逐項建立並 fetch驗證，成功項目不因部分失敗重建。

## Guardrails

- 不猜 path、schema、ID、Email、action URL、Owner、Due、Status、approval或權限。
- 不在未 Preview／未核准前 create、update、delete、send、post、assign或reschedule。
- 不使用 mass external communication、Audience upload、Ad／Website publish或 Budget change。
- 不將 Draft recommendation自動變 committed work或 Approved business status。
- Policy denial／permission failure後停止，不換其他 Agent／tool／path規避。
- Target、Owner、Due、Status、source或核准狀態未知時標示 `未知` 並停止該項 mutation，不以預設值補齊。

## Common Issues

| Issue | Cause | Fix |
|---|---|---|
| 重複建立 Task | 未查 source／title／owner／due | Create前 duplicate＋idempotency gate。 |
| 更新錯 Plan／List | 只靠名稱 | 解析 stable container ID與 distinguishing context。 |
| 部分成功後全部重送 | 未記錄 per-item result | 只 retry failed且先 fetch。 |
| Task completed但資產未核准 | 把 task state當 business outcome | 驗證 deliverable／approval evidence。 |
| Send失敗後重複寄 | 未判斷 side effect | 先 fetch／check sent state，標 retry risk。 |
