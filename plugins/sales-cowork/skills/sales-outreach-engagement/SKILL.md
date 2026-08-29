---
name: sales-outreach-engagement
description: >-
  根據核准的 Account evidence，準備並執行限定的 Outlook、Teams 與 Calendar 客戶互動，包括首次聯繫、Follow-up、Re-engagement 與 Meeting invitation。
  適用於具名受眾與明確商務目的；不適用於 Mass marketing、未核准名單、捏造個人化內容或無人監督的持續自動化。
license: MIT
metadata:
  author: lwokeray
  version: "3.1.0"
---

# 客戶聯繫與互動

## 概述

把核准證據與明確客戶 Outcome 轉成最小且合適的 Outlook、Teams 或 Calendar 動作。每個 Touch 只有一個目的，任何寄送、張貼或排程都需要顯示完整內容與逐項核准。

## 適用情境

- 對具名 Prospect 或 Customer 建立個人化 First touch。
- 會後 Follow-up、Re-engagement 或 Requested material delivery。
- 建立限定步驟的 Engagement sequence。
- 產生或送出 Meeting invitation。

## 不適用情境

- Mass marketing、Newsletter、未核准 Contact list。
- 自動或無期限的 sequence。
- 找不到具名受眾或合法商務脈絡的 outreach。
- Meeting recap → `meeting-follow-up`

## 快速開始

1. 確認受眾、目的、Channel、時間、停止條件與證據來源。
2. 使用 `ask` 取得相關 Account context，使用 `fetch` 驗證 recipient、近期互動與 Calendar 狀態。
3. 依受眾角色調整深度：Executive 聚焦 Outcome，Technical 聚焦 Evidence，Operations 聚焦 Process。
4. 建立最小 sequence，檢查重複、敏感資料、unsupported claim、tone 與 conflict。
5. 顯示每個動作的 recipient、channel、time、完整內容與 evidence，逐項核准後才執行。

## 核心流程

### 階段一：Audience Gate

- 必須解析唯一 recipient 或明確群組。
- 人員身分、Email／Teams identity 與既有關係需以 Work IQ 驗證。
- Public profile、職稱或公司事件不能證明對方同意被聯繫。

### 階段二：Message Design

- 每個 Touch 只有一個 Outcome 與一個 CTA。
- 個人化內容只使用可追溯 evidence，不捏造 prior relationship、customer event 或 interest。
- 對外文字不得包含 Internal-only risk、pricing assumption、unapproved roadmap 或 private meeting content。

### 階段三：Sequence Control

限定 sequence 必須包含：Step、Channel、Timing、Purpose、Stop condition。回覆、拒絕、Meeting accepted 或使用者取消時停止後續動作；不得建立 recurring automation。

### 階段四：Approval 與執行

- Create／Update 先使用 `search_paths`、`get_schema` 確認支援。
- Send／Post／Respond 等 action 只使用 Work IQ 明確提供的 `do_action` URL。
- 每個 recipient 與每個 consequential action 分開核准。
- 執行後以 `fetch` 驗證結果；policy denial 視為 final。

### 階段五：選擇正確 Channel

- Outlook：正式 Follow-up、提供文件、較完整的商務內容或需要可追蹤回覆者。
- Teams：已有互動脈絡的短確認、即時協調或已知內部／Partner Channel。
- Calendar：雙方已同意開會，且受眾、目的、時間、時區與必要參與者均明確。

沒有既有 Teams 關係時，不假設可以直接傳訊。沒有時間共識時先提出時間選擇，不自行發送 Invite。

### 階段六：撰寫可發送內容

每個訊息必須有：具體 Subject／Opening、與對方相關的真實背景、單一價值或目的、清楚 CTA、合理回覆期限及專業結尾。依受眾調整內容深度，不使用誇張銷售語言或無證據的個人化。

語氣判斷：

- 首次聯繫：簡短、尊重、說明為何聯繫及對方可選擇的下一步。
- 會後 Follow-up：重述已確認內容，不重新銷售整個方案。
- Reminder：指出原承諾、為何現在需要回覆與可協助之處，不指責。
- Re-engagement：提供新的、有證據的相關理由，不以「只是想追蹤」為全文。
- Executive outreach：聚焦客戶結果與決策，不塞入產品功能清單。
- Technical follow-up：保留精確問題、環境與證據，不宣稱未驗證能力。

### 階段七：處理有限 Sequence

Sequence 最多建立三個步驟，每步有不同且合理的目的。預設只產出計畫與草稿，不預先核准未來寄送。每次實際執行前重新檢查是否已有回覆、拒絕、Meeting、Owner change 或情境變化。

停止條件至少包括：收到任何實質回覆、拒絕或退訂、Meeting accepted、聯絡人離職、Account Owner 取消、Opportunity 狀態改變、資料或 Consent 不再有效。

## 完整 Preview 要求

在任何外部動作前顯示：

1. Recipient 的姓名、公司、Address／Channel 與身分證據。
2. Channel、目的、Account／Opportunity 關聯。
3. 完整 Subject、Body、附件／連結。
4. 寄送或排程時間與時區。
5. 使用的個人化證據及日期。
6. 對外承諾、敏感資訊與權限檢查結果。
7. 此動作完成後的停止條件。

使用者核准某一封 Email 不代表核准 Calendar Invite、Teams post、後續 Sequence 或其他 Recipient。

## Calendar Invite 規則

Invite 需包含明確標題、目的、Agenda、時間、時區、參與者、Location／Meeting link 及準備事項。檢查 Organizer 與必要參與者的可用性；Private conflict 只顯示不可用時段。不得移動既有會議、加入未核准參與者或在 Notes 中暴露內部內容。

## 停止條件

- Recipient 無法唯一辨識、Consent 不明或商務脈絡不存在時，不執行。
- 內容含未核准價格、折扣、Legal terms、Roadmap 或交付日期時，保持草稿。
- 發送 action／Calendar operation 未被 Work IQ 回傳時，標示不支援。
- Policy denial 或 operation error 後停止，不換工具重送，以免重複寄送。

## 輸出格式

| Step | Channel | Recipient | Timing | Purpose | Draft／Action | Evidence | State |
|---|---|---|---|---|---|---|---|
|  | Outlook／Teams／Calendar |  |  |  |  |  | 草稿／等待核准／完成／Blocked |

結尾列出下一個 Engagement checkpoint 與停止條件。

## 使用者溝通與完成檢查

- 先提供可直接審閱的完整訊息或 Invite，不輸出設計摘要。
- 文字符合 Recipient、Channel 與商務目的；不暴露工具、path、schema 或個人內部註記。
- 不輸出隱藏思考；個人化內容只使用可追溯且適合對外的事實。
- 每個 Touch 只有一個 CTA，Recipient、時間、附件、承諾與停止條件已檢查。
- 清楚區分草稿、已核准、已執行與執行失敗。

## Work IQ 工具規則

- `ask` 取得 Account context；`fetch` 驗證 recipient、interaction 與 event。
- `create_entity`、`update_entity` 需 path/schema discovery 與核准。
- `do_action` 只使用明確 URL；不得推測 send、reply、post 或 accept endpoint。

## 範例

**輸入：**「幫我寄一封 Contoso follow-up 並約下週會議。」

**正確行為：**先顯示 Email 與 Calendar 兩個獨立動作、recipient、內容與時間，分別取得核准。

## Guardrails

- 不執行 Mass marketing 或未核准自動化。
- 不捏造個人化內容、客戶事件或 prior relationship。
- 不在未核准前寄送、張貼或排程。
- 不用其他工具規避 Work IQ policy denial。

## 常見問題

| 問題 | 處理方式 |
|---|---|
| Recipient 有多個符合 | 顯示候選並要求唯一選擇。 |
| 找不到支援的 action URL | 保留草稿並標示 `不支援`。 |
| Calendar conflict | 顯示 conflict 與替代時間，不自行覆蓋。 |
| Sequence 收到回覆 | 停止後續步驟並回報。 |
