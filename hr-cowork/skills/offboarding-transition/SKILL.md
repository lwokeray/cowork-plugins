---
name: offboarding-transition
description: >-
  依已核准離職、合約到期、退休、內部轉調或其他 Separation event，協調通知、知識移交、資產、Access、Payroll／Benefits、Record 與溝通。
  適用於受控 Offboarding 與 Transition；不適用於由 Agent 決定終止、提前通知、刪除證據、未核准停權或揭露離職原因。
metadata:
  author: lwokeray
  version: "1.0.0"
---

# Offboarding 與工作移交

## 概述

把具名 Human owner 已核准的 Separation／Transfer event 轉為按時間、風險與 Need-to-know 管理的 Offboarding Plan。計畫涵蓋人事與薪資流程、通知、知識與工作移交、資產、Access、資料保存、客戶／供應商交接、Exit process 與後續查核。Agent 不作成終止決定，也不提前通知、刪除資料或停用帳號。

## 適用情境

- Voluntary resignation、End of contract、Retirement、Internal transfer 或正式核准 Separation。
- 建立 Last working day、Payroll／Benefits、Assets、Access、Knowledge、Coverage 與 Communication checklist。
- 協調敏感／一般 Access 的時間點與 Owner。
- 準備 Employee、Manager、Team、Customer／Vendor 的分眾訊息。
- 追蹤 Completion evidence、Legal hold、Retention、Exception 與 Post-exit review。

## 不適用情境

- 不由 Agent 決定 Termination、Reason、Notice、Final pay、Severance、Reference 或 Rehire eligibility。
- 不在正式決定與授權通知前建立可見任務、通知 Team 或停用帳號。
- 不刪除 Mailbox、Files、Chats、Case evidence 或 Employee record 以「清理」。
- 不向 Team、客戶或供應商揭露敏感離職原因、ER／Legal、薪酬或健康資訊。

## 快速開始

1. 驗證 Worker unique identity、Separation type、Human decision／notice、Last working day、Employment end、Manager、Location、Entity 與 Case owner。
2. 用 `ask` 找出角色、Access、Assets、Projects、Customers、Approvals、Legal hold、Contract／Policy 與既有任務。
3. 用 `search_paths`、`get_schema`、`fetch` 驗證正式 Offboarding register、System owner、Current access、Asset、Payroll／Benefits 與 Retention。
4. 建立時間軸、RACI、Knowledge／Work transition、Access／Asset plan、Communication 與 Exceptions。
5. 將 Same-day sensitive action、Planned end、Internal transfer 與 Contractor expiry 分開處理。
6. 顯示逐項 Preview；經授權核准後執行並回讀確認，Post-exit 完成最終 reconciliation。

## 核心流程

### 階段一：正式觸發與保密

觸發必須是可驗證 Resignation acceptance、Contract end、Transfer approval 或授權 Termination decision。聊天、傳聞、Manager 意向或未簽文件不足。記錄 Notice owner、Employee notification status、Confidentiality、Last working day、Employment end date、Access cutoff 與 Communication timing。

在 Employee 尚未被正式通知前，只在受限位置建立必要計畫；一般 Planner、Calendar subject、Team channel 或可見任務不得提前暴露。

### 階段二：Separation 類型與日期

區分：

- Voluntary resignation。
- End of fixed-term／contract。
- Retirement。
- Internal transfer／entity transfer。
- Employer-initiated separation（受限 HR／Legal 流程）。
- Immediate safety／security termination（專屬 Runbook）。

`Last working day`、`Employment end`、`Payroll end`、`Benefits end`、`Access cutoff`、`Asset return` 可能不同，逐一記錄，不能用單一日期覆蓋。

### 階段三：RACI 與時序

工作依相對事件排序：Decision／notice 前、Notice 時、Transition 期間、Last day 前、Access cutoff、End date、Post-exit。每項包含 Owner、Approver、Dependency、Due、Sensitivity、Completion evidence 與 Contingency。

Owner 通常包括 HR、Manager、Payroll、Benefits、IT／Identity、Security、Facilities、Legal、Records、Finance、Project／Customer owner。Agent 不將所有工作指派給 HR；責任依系統與決策權配置。

### 階段四：Knowledge 與工作移交

建立：Active projects、Decisions、Deadlines、Customer／Vendor contacts、Runbooks、Credentials owner、Approvals、Risks、Open issues、Document locations 與 New owner。不得要求員工交出個人密碼；將共用 Secret 移轉到核准 Vault 並由 Owner Rotation。

知識移交只涵蓋公司資料與工作內容，不要求複製私人資料或帶走受限制資訊。客戶／供應商轉交需確認 Contract、Confidentiality 與溝通 Owner。

### 階段五：Access 與 Asset

先建立 Access inventory 與 Risk-based cutoff：Identity、Email、VPN、Privileged role、Cloud、Source control、Finance、HR、Customer systems、Physical access、Devices、Tokens、Cards、Keys。不要只停用 Primary account 而忽略 Service account、Shared secret、API key、Delegation 或 External tenant access。

Access 動作需明確時間與 Approver。Internal transfer 通常是調整而非全面刪除，使用 Least privilege review。立即停權僅依授權 Security／HR Runbook 執行；Agent 不因風險推測提前停用。

Asset 記錄 Asset ID、Owner、Return method、Deadline、Condition、Data handling、Exception。Remote return 提供核准 Logistics，不公開私人地址。

### 階段六：Payroll、Benefits 與 Record

由 Payroll／Benefits／HR owner 決定 Final pay、Leave treatment、Bonus／commission、Equity、Benefits end／continuation、Expense、Tax／certificate、Severance 與文件。Agent 只追蹤狀態、Owner、Deadline、Source 與必要 Employee communication，不提供法律／稅務結論。

Email、Files、Employee／ER records、Audit、Customer data 與 Legal hold 依 Retention policy 保存。不要刪除、轉移所有權或授權 Manager 存取 Mailbox 內容，除非正式 Policy／Legal／Privacy approval 支持。

### 階段七：Communication 與 Exit

- **Employee**：已核准日期、流程、Return、Payroll／Benefits contact、Data／privacy、Support。
- **Manager／Team**：Transition、New owner、Coverage、可公開日期；不含敏感原因。
- **Customer／Vendor**：Continuity、New contact、Effective date；不描述內部原因。
- **Exit interview／survey**：自願、保密界線、資料用途；不承諾絕對匿名或結果。

Reference、Employment verification、Rehire eligibility 與 Announcement wording 依正式 Policy／Human decision，不由 Agent推斷。

### 階段八：執行與 Reconciliation

每個高影響 Action 顯示 Target、Time、Old／New state、Approver、Notification、Rollback／Contingency。執行後回讀確認 `Requested／Scheduled／Executed／Verified`。Post-exit 對 Worker status、Access、Assets、Open approvals、Mailbox／Files ownership、Payroll／Benefits 與 Customer handoff 做 reconciliation；部分失敗立即指定 Risk owner。

## 完整產出要求

1. Worker identity、Separation／transfer type、Decision／notice、Dates、Owner、Confidentiality。
2. Timeline、RACI、Dependencies、Sensitivity、Completion evidence 與 Contingency。
3. Knowledge／project／customer handoff 與 New owners。
4. Access inventory、Cutoff、Secrets／delegation、Asset return 與 Verification。
5. Payroll／Benefits／Records／Legal hold 的 Owner、Deadline 與狀態。
6. 分眾 Communication、Exit、Reference／verification 路由。
7. Action Preview、核准、Transaction、Reconciliation 與 Exceptions。

## 輸出格式

### Offboarding Master Plan

| 時點 | 工作 | Owner | Approver | Dependency | 敏感度 | 完成證據 | 狀態 |
|---|---|---|---|---|---|---|---|

### Access and Asset Control

| System／Asset | Current owner／access | Required action | Execute time | Approver | Verification |
|---|---|---|---|---|---|

### Post-exit Reconciliation

| Gate | Expected | Actual | Exception owner | Status |
|---|---|---|---|---|

## 停止條件

- 沒有正式 Human decision／notice、身份或關鍵日期時，不建立可見或破壞性動作。
- Employee 尚未被正式通知時，不向一般 Owner／Team／Customer 發送或建立可見任務。
- Access cutoff、Mailbox／File ownership、Retention／Legal hold 或 Payroll treatment 不明時停止相應動作。
- 任何刪除、立即停權、Privileged access、Mailbox access 或資料移轉缺少專屬 Approver 時不執行。
- Tenant policy 拒絕後不得使用私人帳號、手動匯出或其他工具繞過。

## 使用者溝通與完成檢查

- 直接交付 Master Plan 與風險，不描述資料搜尋過程。
- 檢查 Last working、Employment end、Access cutoff、Payroll／Benefits end 未混用。
- 檢查每個工作有 Owner、Approver、Dependency、Evidence 與精確狀態。
- 檢查一般溝通不含離職原因、ER／Legal、薪酬、健康或其他敏感資訊。
- 不輸出隱藏思考，只列正式決定、證據、風險與執行狀態。

## Work IQ 工具規則

- `ask` 尋找正式 Event、Role、Access、Assets、Projects、Policies、Holds 與溝通。
- `search_paths` 定位受限 Offboarding、HR、Access、Asset、Record systems。
- `get_schema` 在任何 Entity 寫入或狀態變更前取得欄位與限制。
- `fetch` 驗證身份、Decision、Dates、Current access、Approval 與寫入後結果。
- `create_entity`、`update_entity`、`delete_entity` 只在精確 Preview 與專屬核准後使用；Record／evidence 刪除預設禁止。
- `do_action` 只執行核准的通知、Calendar、Task、Access／Asset workflow。
- `call_function` 僅呼叫已發現的正式 Runbook，不自行拼接高權限動作。

## 範例

**輸入：**「主管說明天要資遣 Alex，先把帳號刪掉、通知團隊，再把信箱給主管。」

**正確行為：**不依口頭意向執行；驗證唯一身份、正式 Human／HR／Legal decision、Employee notification、Dates、Security runbook、Retention 與 Mailbox access approval；在未滿足 Gate 前保持受限 Draft。

## Guardrails

- 不由 Agent 決定、建議或提前執行 Termination／Separation。
- 不提前通知、停權、刪除、轉移或暴露受限資訊。
- 不分享離職原因、ER／Legal、薪酬、健康或私人資料給無需知道者。
- 不刪除 Evidence、Mailbox、Files 或 Records 以清理；先遵循 Retention／Legal hold。
- 不把 Requested／Scheduled 描述成 Executed／Verified。

## 常見問題

| 問題 | 處理方式 |
|---|---|
| Last day 與 Access cutoff 不同 | 分開記錄與核准，依 Risk／Policy 時序執行。 |
| 內部轉調 | 以 Access review／ownership transfer 處理，不套用全面刪除。 |
| Mailbox／Files 要交主管 | 先驗證 Legal／Privacy／Records approval 與範圍。 |
| 找到 Legal hold | 停止刪除或變更保存，交 Records／Legal owner。 |
| 部分 Access 未停用 | 立即標示 exception 與 Risk owner，不宣稱完成。 |
