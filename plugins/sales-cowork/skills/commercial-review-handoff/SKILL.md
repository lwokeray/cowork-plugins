---
name: commercial-review-handoff
description: >-
  整理一個企業商機或提案中的 Pricing、Discount、Margin、Legal、Security、Privacy、SLA、Data residency 與必要核准，建立具風險、Owner、Due 與來源的 Commercial Review Handoff。
  適用於商務審查與跨部門核准準備；不適用於代替核准人接受條款、決定最終價格或送出 Proposal。
license: MIT
metadata:
  author: lwokeray
  version: "3.1.0"
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

### 階段五：逐類建立 Review packet

不同類別不可混成一個泛稱「待法務／資安確認」：

- **Pricing／Finance**：List price、Discount request、Currency、Tax、Billing、Payment terms、Margin impact、Approval threshold 與有效期限。
- **Legal／Contract**：條款原文、我方標準位置、客戶偏差、責任、賠償、終止、IP、Warranty、Governing law 與簽署流程。
- **Security**：控制要求、證據、責任邊界、Assessment／Questionnaire、Exception 與 remediation owner。
- **Privacy／Data**：資料類型、角色、處理位置、跨境、Retention、DPA、Subprocessor 與 Data subject obligation。
- **SLA／Support**：服務範圍、Availability、Response／Resolution、Exclusion、Credit、Support hours 與 Measurement。
- **Delivery**：Scope、Milestone、Resource、Acceptance、Dependency、Change control 與 Customer responsibility。

只列與本 Proposal／Contract 有關的項目；不要自行提供專業法律意見或 Security acceptance。

### 階段六：辨識偏差與風險

每項偏差保留客戶原文、我方標準或既有位置、差異、可能影響、Likelihood basis、建議 Reviewer、需要的決策及 Deadline impact。Severity 高不等於一定拒絕；它表示需要適當 Owner 處理。

區分：

- Clarification：文字或適用範圍不清楚。
- Evidence request：需要文件或證明，尚不構成偏差。
- Deviation：客戶要求與核准標準不同。
- Decision required：存在可選路徑，需具名 Owner 決定。
- Blocked：缺少必要 Owner、證據或時間，無法安全繼續。

### 階段七：建立 Approval trail

Approval evidence 應指出核准者、角色、核准的精確內容、版本、日期、限制與來源。Emoji、短句「OK」、會議出席或非 Owner 的同意只能作為背景。Approval 改變後保留歷史與被取代版本。

### 階段八：Green Review

針對同一 Proposal 版本核對 Price、Scope、Staffing、Timeline、Milestone、Acceptance、SLA、Support、Security、Privacy、Data residency、Assumption、Dependency、Customer responsibility 與 Delivery capacity。任何數字、日期、責任或承諾在主文件、Pricing workbook、SOW、Diagram 與附件之間不一致時，建立具位置與 Owner 的 Finding。

Green Review 的狀態為：

- `Aligned`：內容一致且目前版本具有正式 Approval evidence。
- `Revision required`：存在可修正的不一致、缺漏或版本錯置。
- `Decision required`：需要 Pricing、Finance、Legal、Security、Privacy 或 Delivery Owner 決策。
- `Blocked`：重大條件無授權 Owner、證據不可取得或期限不足以完成必要審查。

Green Review 不設定價格、不接受條款，也不把 Risk owner 的意見自動視為 Final approval。完成後將 Approval coverage、Residual risks 與未解 Decision 交給 `proposal-quality-review` 進行 Gold／Submission readiness。

## 完整 Handoff 結構

1. Opportunity、Proposal／Contract、Version、Deadline、Review owner 與 Scope。
2. Executive blockers：最可能影響 Submission／Signature 的項目。
3. 分類 Decision inventory。
4. Clause／Requirement 原文與精確 Source location。
5. Current position、Deviation、Impact、Likelihood 與 Required evidence。
6. Reviewer、Decision owner、Due、Escalation 及 Status。
7. 已取得 Approval trail 與尚未覆蓋的範圍。
8. 可以繼續、必須修訂、暫停及阻塞項目。
9. Review meeting agenda 與下一個 Checkpoint。

## 停止條件

- Proposal／Contract 版本不唯一時停止 Review conclusion。
- 未取得正式 Approval evidence 時不得標示 Approved。
- Reviewer 沒有權限作成決策時改為 Routing，不接受其意見為最終核准。
- Deadline 已過或風險超出授權時升級，不自行接受條件。
- 使用者要求直接改正式合約或送出 Proposal 時，先完成獨立差異與核准流程。

## 使用者溝通與完成檢查

- 交付逐項可追蹤的 Commercial Review Package，不只寫「待確認」摘要。
- 使用 Reviewer 能直接決策的語言；不顯示內部工具、schema、payload 或隱藏思考。
- 每項有原文、版本、偏差、影響、Owner、Due、Required evidence 與 Decision state。
- Pricing、Legal、Security、Privacy、SLA 與 Delivery 責任沒有混在一起。
- Supporting context 沒有被錯誤標示為正式 Approval。

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
