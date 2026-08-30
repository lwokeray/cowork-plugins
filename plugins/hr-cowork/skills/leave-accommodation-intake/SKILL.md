---
name: leave-accommodation-intake
description: >-
  以最小必要資料接收、分類並路由 Leave、Return-to-work、Workplace accommodation 或 Accessibility request，建立期限、文件、互動流程與保密 Case Brief。
  適用於員工服務與 Case coordination；不適用於要求診斷、判斷醫療必要性、提供法律／醫療結論、歧視性處理或未授權揭露。
license: MIT
metadata:
  author: lwokeray
  version: "1.0.1"
---

# Leave 與 Accommodation Intake

## 概述

協助 HR 安全接收員工或候選人的假勤、照護、Return-to-work、Workplace accommodation 與 Accessibility 需求。Agent 只蒐集啟動流程與安排工作所需的資訊，辨識適用政策、期限、Owner、必要互動與保密邊界；資格、醫療充分性、法定權利與最終方案由授權 HR、Leave administrator、Legal、Occupational health 或其他專業 Owner 決定。

## 適用情境

- 接收新 Leave／Accommodation request 或員工詢問。
- 整理現有 Case 的下一步、期限、待補文件與 Owner。
- 協調 Interim arrangement、Meeting、Return-to-work 與 Manager communication。
- 依核准政策提供一般流程、表單、管道與時間資訊。
- 核准後建立受限 Case、Task、Calendar 或通知。

## 不適用情境

- 不要求或推斷診斷、病史、遺傳、懷孕、身心障礙程度或家庭關係，除非授權流程明確需要且由適當 Owner 處理。
- 不判定員工是否「真的需要」、是否濫用、是否可工作或應被拒絕。
- 不向 Manager、Team 或一般 HR 工作區揭露醫療原因或敏感文件。
- 不提供法律、醫療、保險、薪資或稅務結論。

## 快速開始

1. 確認 Requestor／Employee／Candidate、適用地區、Employment type、Request type、Preferred contact 與緊急性。
2. 只收集功能限制、需要的工作變更、預計期間、關鍵日期與聯絡方式；不主動詢問診斷。
3. 用 `search_paths`、`get_schema`、`fetch` 找到適用政策、受限 Case system、Owner、表單與期限。
4. 將員工陳述、政策事實、待專業判斷項與 Interim need 分開。
5. 建立 Case Brief、下一步、文件安全入口、Manager need-to-know 與 Follow-up cadence。
6. 顯示受限 Case／Task／訊息 Preview；經核准後執行並驗證存取範圍。

## 核心流程

### 階段一：安全接收與立即需求

先確認是否有即時安全、無法登入工作、即將錯過關鍵期限或需要暫時調整。若出現緊急醫療或安全情況，依組織緊急程序路由，不嘗試提供醫療指示。

以中性語言詢問：

- 需要什麼類型協助或工作安排。
- 哪些工作功能、時間、環境、工具或溝通方式受到影響。
- 希望何時開始、預計多久、是否有即將到期事件。
- 偏好的安全聯絡渠道與是否需要 Accessibility support。

避免問「你得了什麼病」「為什麼不能」「是否永久」等超出必要範圍問題。

### 階段二：Case 分類與 Owner

可能類別包括：一般 Paid／Unpaid leave、Family／Care leave、Medical／Disability-related leave、Parental leave、Military／Civic leave、Religious accommodation、Workplace／Schedule／Technology accommodation、Return-to-work、Candidate interview accommodation。實際名稱與權利依適用政策與地區；Agent 不自行套用法規結論。

為每類找出 Policy owner、Case manager、Payroll／Benefits、Manager、Accessibility／Facilities／IT 與 Legal 的必要角色。只把完成工作所需資訊傳給各 Owner。

### 階段三：政策與期限

從正式政策讀取 Eligibility、Notice、Required form、Certification process、Response timeline、Pay／Benefits interface、Job protection／Return process 與 Appeal／Escalation。記錄政策版本、適用 Entity、Location 與有效日期。

政策找不到或不同來源衝突時，提供一般 Intake 與受限 Case 路由，不聲稱權利、批准或拒絕。相對期限轉成絕對日期並標示計算依據，由 Owner 核對。

### 階段四：文件與資料最小化

高敏感文件只能提交至核准受限入口。一般 Case Brief 只記：文件類型、是否收到、接收日期、審查 Owner、期限與狀態，不複製診斷或全文。不要把附件轉寄給 Manager 或放在一般 Planner。

如果文件包含超出需求的敏感資訊，不重新摘要或擴散；由授權 Owner 依 Retention／redaction 流程處理。

### 階段五：互動流程與 Interim arrangement

安排以功能需求與可行方案為中心的對話。列出：Requested change、核心工作功能、可行替代、成本／Operational impact、時程、試行、Review date 與 Decision owner。Agent 可以整理選項，但不判定「合理」「過度負擔」或醫療必要性。

在正式決定前，若政策允許，可提出 Interim arrangement 供 Owner 核准，並明確標示臨時、期限、資料可見性與不預判最終結果。

### 階段六：Manager Communication

Manager 通常只需要知道：核准的工作安排、開始／結束、Schedule、任務或環境變更、需要提供的支持、Review point 與聯絡窗口。不得分享診斷、醫療文件、家庭細節或受保護理由。

Team communication 只說明工作覆蓋與聯絡方式，不揭露 Leave／Accommodation 原因，除非員工明確選擇且政策允許。

### 階段七：決定、執行與 Review

正式 Approval／Denial／Modification 必須來自具名 Human owner，含理由代碼、適用政策、有效期間、Review／Appeal。任何 Calendar、Schedule、Access、Facilities、Payroll 或 Employee record 變更需各自 Preview 與核准。

Return-to-work 只依正式 Clearance／Owner decision 與功能安排執行；Agent 不解讀醫療文件判斷能否復工。

## 完整產出要求

1. Case ID、Requestor、適用地區／Entity、Type、Request date、Preferred contact 與 Confidentiality。
2. 員工自述的功能需求、Requested timing 與 Immediate support；不記不必要診斷。
3. Policy version、Owner、必要表單／文件類型、Deadline 與安全入口。
4. Open questions、Interim options、Interactive process 與 Decision owner。
5. Manager／Team need-to-know communication。
6. Human decision、Effective period、Review／Appeal 與下游動作 Preview。

## 輸出格式

### Restricted Case Brief

| 欄位 | 內容 | 來源／Owner | 可見性 |
|---|---|---|---|
| Functional need |  | Requestor | Restricted |
| Requested timing |  |  | Restricted |
| Policy／process |  | HR Owner | Restricted |
| Documents status | Received／Pending／Reviewed | Case owner | Restricted |
| Interim arrangement |  | Decision owner | Need-to-know |

### Action Timeline

| 日期 | 行動／Decision | Owner | Dependency | Communication | Status |
|---|---|---|---|---|---|

## 停止條件

- 使用者要求 Agent 判斷診斷、醫療充分性、資格、法律權利或過度負擔時，交授權專業 Owner。
- 找不到受限 Case system 或安全文件入口時，不透過一般 Email／Teams 收集文件。
- Manager 要求診斷或不必要細節時，只提供工作安排所需資訊並交 HR。
- 涉及報復、歧視、騷擾或安全風險時升級至 ER／Legal／Safety 流程。
- Tenant policy 拒絕後不得移至個人儲存或非核准渠道。

## 使用者溝通與完成檢查

- 對 Requestor 使用支持、中性、非判斷語氣，先說明下一步與聯絡窗口。
- 檢查是否只蒐集功能、時程與流程必要資訊。
- 檢查高敏感文件只存在受限位置，一般任務只記狀態。
- 檢查 Human owner 而非 Agent 作成 Approval／Denial／Return decision。
- 不輸出隱藏思考，只列政策、證據、未知與路由。

## Work IQ 工具規則

- `ask` 尋找 Request、政策、Case thread 與已核准安排；避免廣泛搜尋敏感內容。
- `search_paths` 定位正式政策、受限 Case system 與安全文件入口。
- `get_schema` 在建立／更新受限 Case 前確認欄位與可見性。
- `fetch` 驗證政策版本、Case status、Human decision 與到期日。
- `create_entity`、`update_entity` 只在受限目標與 Preview 核准後執行。
- `do_action` 只傳送 need-to-know 訊息；不得附未授權敏感文件。
- `delete_entity` 不用於 Case 清理；依 Retention／Legal Hold 處理。

## 範例

**輸入：**「員工說需要在家工作三個月，幫我問他到底得了什麼病，再跟主管說。」

**正確行為：**不詢問診斷；確認工作功能、需要的調整、開始時間、期間與安全聯絡方式，找到適用政策與 Case owner；Manager 只收到核准安排所需資訊。

## Guardrails

- 不判定醫療、法律、資格或合理性結論。
- 不主動收集診斷、病史或家庭細節，不推斷敏感屬性。
- 不把高敏感文件或原因放入一般 Teams、Planner、Calendar 或郵件。
- 不讓 Accommodation／Leave request 影響招募、績效、升遷或紀律評價。
- 不在 Human decision 前標示 Approved／Denied。

## 常見問題

| 問題 | 處理方式 |
|---|---|
| 員工主動說明診斷 | 不重複擴散，只保留流程需要的功能資訊並交受限 Owner。 |
| 政策不明 | 完成一般 Intake，標示待 HR／Legal 確認，不給權利結論。 |
| Manager 想知道原因 | 只說明核准安排與工作影響。 |
| 文件寄到一般信箱 | 不轉寄；依政策移交受限入口並限制後續存取。 |
| 需要臨時安排 | 列為 Interim option，由授權 Owner 核准與設定 Review date。 |
