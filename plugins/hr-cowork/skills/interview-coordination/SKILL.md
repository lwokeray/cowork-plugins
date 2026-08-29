---
name: interview-coordination
description: >-
  協調候選人與 Panel 的可用時間、時區、會議室、線上會議、面試順序、提醒與必要調整，並在核准後建立或更新 Calendar 事件。
  適用於單場與完整 Interview Loop 排程；不適用於評估候選人、揭露調整原因、猜測 Email 或未核准取消與批次改期。
license: MIT
metadata:
  author: lwokeray
  version: "1.0.1"
---

# 面試協調與排程

## 概述

將已核准的 Interview Plan 轉成候選人與面試官都能執行的 Schedule。工作包含身分解析、可用時間、時區、緩衝、會議室／線上連結、Panel 順序、Candidate instructions、Accommodation logistics、提醒與變更管理；不涉及候選人評分或選擇。

## 適用情境

- 尋找候選人與一位或多位 Interviewer 的共同時間。
- 安排單場、Panel、Sequential Loop 或跨地區面試。
- 預訂會議室、建立線上會議與加入面試材料連結。
- 處理改期、取消、Interviewer replacement 與提醒。
- 追蹤 Scheduling SLA、未回覆與即將開始的 Logistics gap。

## 不適用情境

- 不依候選人回覆速度、可用時段或 Accommodation 需求評估動機與 Fit。
- 不向 Panel 揭露醫療、身心障礙、家庭或調整理由；只傳達必要 Logistics。
- 不猜測 Email、時區或身份，不把同名人員當同一人。
- 不在未核准時建立、修改、取消或轉寄 Calendar 事件。

## 快速開始

1. 取得 Candidate、Requisition、Interview stage、Panel、時長、日期窗口、時區與形式。
2. 解析每位對象的唯一身份與聯絡渠道；Email 不明時停止並要求來源。
3. 用 Calendar 可用性尋找符合工作時間、緩衝與 Interview Loop 順序的候選時段。
4. 以候選人時區先顯示 2 至 3 個選項，同時保留 Panel 時區對照。
5. 候選人選定後顯示 Event Preview：主旨、時間、時區、對象、Location、Link、Instructions、附件與可見性。
6. 經核准後建立事件並重新讀取確認；變更與取消使用同樣控制。

## 核心流程

### 階段一：排程資料契約

每場面試至少需要：Candidate ID／姓名與已驗證 Email、Requisition、Stage、Interviewers、Duration、Date range、Candidate time zone、Meeting mode、必要 buffer、Organizer 與 Feedback deadline。未指定時長可依 Interview Plan，不自行預設所有面試均為 30 分鐘。

候選人可用時間若來自訊息，保留原始時區與表達，再轉換成 Calendar 所需格式。相對日期轉為絕對日期並顯示星期，避免「下週三」跨時區誤解。

### 階段二：身份與權限

以 People／Directory 或正式 Candidate record 解析 Email。不得組合 `firstname.lastname@domain`。External candidate 與 Internal interviewer 分開驗證；對外 Calendar 邀請只包含完成面試所需內容，不附內部 Scorecard、評論或其他候選人資料。

### 階段三：可用性與排序

時段需同時滿足：

- 候選人提供的窗口與時區。
- 必要 Interviewers 的 Free／Busy；Optional interviewer 不應阻塞，除非 Plan 明確要求。
- 每場前後 Buffer、午休、工作時間與跨區合理時段。
- Sequential Loop 的順序、休息、Work sample 時間與 Candidate burden。
- Meeting room 容量、Accessibility、設備與 Security 條件。

若無共同時間，依序建議：擴大日期範圍、替換已授權 Backup interviewer、拆分 Loop、調整 Optional attendee。不得在未核准時把必要 Panel 改為 Optional。

### 階段四：Accommodation Logistics

只處理完成安排所需的 Logistics，例如額外時間、字幕、無障礙會議室、休息、替代格式或陪同安排。不要詢問診斷或原因，不把 Accommodation 放在 Event subject 或所有 Attendee 可見欄位。需要專業確認時以受限方式交由 HR／Accessibility Owner。

### 階段五：Event 內容

外部邀請包括：Role／Stage、日期時間與時區、Meeting mode／地址、Join link、預計時長、參與者姓名與職稱、準備事項、聯絡窗口、改期方式。不要附內部評分標準、薪酬討論、其他候選人或保密評語。

內部 Panel 邀請可另附：Competency ownership、面試材料位置、Feedback deadline、Conflict reminder 與禁止事項。外部與內部資訊需要分開時，建立適當的受限資源，不把全部內容塞在同一 Event body。

### 階段六：建立、改期與取消

- **Create**：候選人或 Owner 選定時段後，顯示完整 Preview 並核准。
- **Reschedule**：先取得原 Event ID，說明是單場或整個 Loop，檢查新時段後更新。
- **Cancel**：有外部 Attendee 時使用會通知的取消方式；個人 Hold 才可靜默刪除。
- **Interviewer replacement**：確認 Replacement 能力與 Conflict，由 Interview owner 核准後更換。
- **No response**：依核准 Cadence 提供提醒 Draft，不自動判定退出。

### 階段七：完成驗證

寫入後重新讀取 Event，確認時間、時區、Attendees、Location、Join link、Organizer 與 Body。若部分操作失敗，不宣稱整個 Loop 完成；列出成功場次、失敗場次與安全重試條件。

## 完整產出要求

1. Candidate 與 Requisition 識別。
2. 每場 Stage、Competency owner、必要／Optional Interviewer 與 Duration。
3. 候選時段及 Candidate／Panel 時區對照。
4. Conflict、Buffer、Room、Accessibility 與 Loop 依賴。
5. External invitation、Internal briefing 與 Reminder Draft。
6. Create／Update／Cancel Preview 和逐項執行狀態。
7. Feedback deadline 與 Scheduling owner。

## 輸出格式

### 候選時段

| 選項 | 候選人時間 | Panel 主要時區 | 必要人員 | 衝突／限制 | Room／Mode |
|---|---|---|---|---|---|

### Calendar Preview

| 欄位 | 值 |
|---|---|
| Subject |  |
| Start／End／Time zone |  |
| Required／Optional attendees |  |
| Location／Join link |  |
| Candidate instructions |  |
| Internal material | 受限位置，不附外部邀請 |

結尾標示 `等待候選人選擇`、`等待核准`、`已核准並完成` 或 `受政策阻擋`。

## 停止條件

- Candidate 或 Interviewer 身份／Email 無法唯一解析時停止建立。
- Interview Plan、Panel owner 或 Stage 不明時只提供選項，不建立正式事件。
- Accommodation 的必要 Logistics 無法安全傳達時交由授權 HR Owner。
- 改期／取消找不到正確 Event ID 或 Scope 時不執行。
- Tenant policy 拒絕後不得使用其他帳號或工具繞過。

## 使用者溝通與完成檢查

- 先給候選時段或已完成安排，不描述 Calendar 查詢過程。
- 所有顯示時間包含日期、星期與時區；跨區時至少顯示候選人時區。
- 檢查 Required attendees、Buffer、Room、Link、Instructions、Feedback deadline。
- 檢查外部邀請未包含內部評分、敏感調整理由或其他候選人資訊。
- Draft、Preview 與實際已建立狀態清楚分開。

## Work IQ 工具規則

- `ask` 尋找 Interview Plan、候選人窗口、Panel 與既有事件。
- `fetch` 驗證 Candidate record、People identity、Event ID、Room 與最新狀態。
- `search_paths`、`get_schema` 只在需要讀寫 Scheduling register 時使用。
- `do_action` 用於 Calendar／Email 的核准動作，只使用回傳完整 URL。
- `create_entity`、`update_entity` 只在 Scheduling register Preview 核准後執行。
- 不從 Calendar 標題或活動模式推斷候選人／員工敏感資訊。

## 範例

**輸入：**「安排 Alex 下週跟三位主管面試，直接找時間發出去。」

**正確行為：**先唯一解析 Alex 與三位主管、取得候選人窗口與時區、Interview Plan 及每場時長；提出 2–3 個可行 Loop；在 Candidate／Owner 選定並核准 Event Preview 後才建立，不猜 Email 或直接發送。

## Guardrails

- 不因可用時間少、改期或 Accommodation 對候選人作負面評價。
- 不猜測身份、Email、時區或會議 Scope。
- 不在外部邀請揭露內部評分與敏感個資。
- 不未經核准建立、修改、轉寄、取消或刪除面試。
- 不宣稱完成尚未重新驗證的 Calendar 寫入。

## 常見問題

| 問題 | 處理方式 |
|---|---|
| 沒有共同時間 | 擴大範圍、使用已授權 Backup、拆分 Loop，不擅自移除必要人員。 |
| 同名 Interviewer | 以 Directory 唯一識別，無法解析則停止。 |
| 候選人未回覆 | 依核准 Cadence 提供提醒 Draft，不自動退出流程。 |
| 需要調整 | 只記必要 Logistics，原因交由受限 HR 流程。 |
| 改整個 Loop | 逐場列出舊／新時間與影響，取得完整核准。 |
