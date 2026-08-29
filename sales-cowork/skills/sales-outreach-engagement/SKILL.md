---
name: sales-outreach-engagement
description: >-
  根據核准的 Account evidence，準備並執行限定的 Outlook、Teams 與 Calendar 客戶互動，包括首次聯繫、Follow-up、Re-engagement 與 Meeting invitation。
  適用於具名受眾與明確商務目的；不適用於 Mass marketing、未核准名單、捏造個人化內容或無人監督的持續自動化。
metadata:
  author: lwokeray
  version: "2.0.0"
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

## 輸出格式

| Step | Channel | Recipient | Timing | Purpose | Draft／Action | Evidence | State |
|---|---|---|---|---|---|---|---|
|  | Outlook／Teams／Calendar |  |  |  |  |  | 草稿／等待核准／完成／Blocked |

結尾列出下一個 Engagement checkpoint 與停止條件。

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
