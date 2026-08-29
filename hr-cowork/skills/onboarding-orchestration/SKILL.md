---
name: onboarding-orchestration
description: >-
  依已接受 Offer、Start Date、職務、地點、政策與各部門責任，建立並協調 Preboarding、Day 1、30／60／90 天 Onboarding 計畫。
  適用於到職文件、帳號設備、訓練、Manager plan、Buddy 與里程碑；不適用於在 Offer 未接受前建正式帳號、暴露敏感資料或未核准執行高權限動作。
metadata:
  author: lwokeray
  version: "1.0.0"
---

# Onboarding Orchestration

## 概述

把已接受 Offer 轉成跨 HR、Manager、IT、Security、Facilities、Payroll、Learning 與 Buddy 的可執行 Onboarding Plan。計畫需明確區分 Preboarding、Day 1、Week 1、30／60／90 天，追蹤 Owner、依賴、完成證據與例外；Agent 協調工作，不替各功能 Owner 核准存取、薪資、設備或政策例外。

## 適用情境

- 新進員工、Internal transfer、Contractor conversion 或 Rehire 的到職準備。
- 建立文件、Payroll、Benefits、Identity、Device、Access、Workspace 與 Training checklist。
- 準備 Manager 30／60／90 天成果、Stakeholder map、Buddy 與 Check-in。
- 找出 Start Date 前的阻塞、逾期與跨部門依賴。
- 核准後建立 Planner、Calendar、SharePoint／Excel 任務或通知。

## 不適用情境

- 不在 Offer 未正式接受或 Start Date 未確認前建立 Production access、Payroll record 或對外公告。
- 不將銀行、身分證件、健康、Background check 或其他高敏感資料放入一般 Planner／Teams。
- 不自行決定 Access role、License、Security exception、Equipment exception 或政策豁免。
- 不把標準 Checklist 套用到所有地區、Employment type 或職務而忽略差異。

## 快速開始

1. 驗證 Candidate／Employee identity、Accepted Offer、Start Date、Employment entity、Manager、Location、Role 與 Employment type。
2. 用 `ask` 找出正式 Onboarding template、前例、工作地點、角色 Access baseline 與已完成工作。
3. 用 `search_paths`、`get_schema`、`fetch` 驗證 HR／IT／Payroll／Learning register、Owner 與欄位。
4. 依時間與依賴建立 Checklist，敏感資料只指向受限系統，不複製內容。
5. 產生 Manager 30／60／90 Day Plan、New hire agenda、Communication 與風險表。
6. 顯示建立任務、事件、通知與 Entity update Preview；核准後執行並逐項驗證。

## 核心流程

### 階段一：觸發與身份

正式觸發條件為可驗證 `Offer accepted` 或組織核准的 Internal transfer／Rehire event。只靠 Recruiter 說「應該會來」不足。核對 Legal name、Preferred name、Personal／work contact、Employee／Worker ID、Manager、Department、Cost center、Location、Start date、Employment type 與 Work model；在共享視圖只顯示必要欄位。

同名或 Rehire 需以唯一識別解析，避免建立重複帳號。若 Start Date、Manager、Location 或 Employment type 在來源間衝突，停止相關 Provisioning，先由 Owner 確認。

### 階段二：依賴式 Checklist

每項工作含：Task、Owner、Due date、Dependency、Required input、Completion evidence、System of record、Sensitivity、Approval。時限以 Start Date 倒推，不使用任意固定日期。

典型工作流：

- **HR／Compliance**：契約、必要政策、Right-to-work／合法程序、Personnel record。
- **Payroll／Benefits**：受限資料收集、Payroll eligibility、Enrollment window；只連結安全入口。
- **IT／Security**：Identity request、Device、License、Role-based access、MFA、Security training。
- **Facilities**：Badge、Desk、Site access、Accessibility logistics。
- **Manager**：Role outcomes、Week 1 agenda、Stakeholders、First assignment、Check-ins。
- **Learning**：Mandatory training、Role learning、Completion evidence。
- **Communications**：Welcome message、Team announcement、Contact point；依隱私偏好核准。

### 階段三：最小權限與 Access

Access 只能由已核准的 Role baseline、Manager／Application owner 與 Least privilege 決定。不要從前任或相似員工完整複製權限。特殊／高權限、Privileged role、敏感站台、客戶資料或 Finance／HR access 必須逐項核准並有到期／Review 條件。

Agent 可準備 Access request，但不得假裝已 Provision。完成需有實際系統狀態或 Owner 證據。對 Contractor、Intern、Temporary worker 設定相符的期限與 Offboarding trigger。

### 階段四：Manager 30／60／90 Day Plan

計畫以成果與學習曲線為中心：

- **Day 1／Week 1**：安全、必要工具、團隊、工作脈絡、支持管道與第一個小成果。
- **30 days**：完成必要訓練、理解流程、建立 Stakeholder 關係、在支援下完成核心工作。
- **60 days**：獨立處理定義範圍、產出可觀察成果、確認能力缺口與支援。
- **90 days**：穩定承擔角色成果、提出改善、與 Manager 校準後續目標。

不得捏造 KPI 或承諾。每項成果要有 Owner、Evidence、Support 與 Check-in。Onboarding plan 不是提前的 Performance warning。

### 階段五：Candidate／New Hire Communication

Preboarding 訊息包括 Start details、地點／連線、Day 1 contact、必要文件的安全提交方式、Equipment delivery、Schedule、Dress／site instructions（如適用）與 Accommodation contact。不要在 Email 要求傳送高敏感文件；使用核准入口。

Team announcement 只包含新進員工同意或政策允許的姓名、角色、Start date 與工作背景；不分享薪酬、私人聯絡方式、健康、家庭或未公開資訊。

### 階段六：Readiness Gate

Start Date 前至少檢查：

- Employment record／contract 狀態。
- Identity、Device、基本 Access 與 Security prerequisites。
- Payroll／Benefits 的必要入口與 Owner，不需在 Brief 顯示內容。
- Manager、Day 1 agenda、Workspace、Contact 與 Required training。
- 未完成項的 workaround、Risk owner 與最晚解決時間。

Gate 結果為 `Ready`、`Ready with controlled exceptions`、`At risk` 或 `Blocked`。只有完成證據支持才可標 Ready。

### 階段七：核准後執行與追蹤

將一般任務、Calendar、Welcome message、Access request 與 HR system write 分開 Preview。高影響項目逐項核准。執行後重新讀取，更新實際狀態與 Evidence；不要將「已送出申請」寫成「已完成」。

## 完整產出要求

1. Worker identity、Role、Manager、Start、Location、Employment type 與 Trigger evidence。
2. 時序化 Checklist、Owner、Due、Dependency、System、Sensitivity 與 Completion evidence。
3. Access baseline 與例外核准，不列出不必要秘密或 Credentials。
4. Day 1 agenda、Manager 30／60／90 Day Plan、Buddy 與 Check-in。
5. New hire／team communications 與安全資料提交方式。
6. Readiness Gate、阻塞、Workaround、Escalation 與狀態。
7. 寫入 Preview、核准與實際完成紀錄。

## 輸出格式

### Onboarding Master Plan

| 階段 | 工作 | Owner | Due | Dependency | 完成證據 | 敏感度 | 狀態 |
|---|---|---|---|---|---|---|---|

### Readiness Gate

| Gate | 結果 | 未完成／例外 | Risk owner | 最晚時間 |
|---|---|---|---|---|

### 30／60／90 Day Plan

| 期間 | 預期成果 | 支援／資源 | 可觀察證據 | Check-in owner |
|---|---|---|---|---|

## 停止條件

- Offer／transfer 未正式接受或 Start Date、身份有衝突時，不建立正式 Access／Payroll 動作。
- 受限資料沒有核准安全入口時，不要求透過 Email／Teams 提交。
- Access owner、Role baseline 或 Approval 不明時保持 Request draft，不 Provision。
- Background／right-to-work／contract 等必要條件未完成時，由授權 HR 決定是否阻擋到職；Agent 不自行判定。
- Tenant policy 拒絕後不得換工具、帳號或未授權位置處理。

## 使用者溝通與完成檢查

- 直接交付 Master Plan 與 Readiness Gate，不用來源摘要取代工作清單。
- 檢查每個 Task 有 Owner、Due、Dependency、Evidence 與真實狀態。
- 檢查 `Requested／Submitted／Provisioned／Verified` 未被混用。
- 檢查一般工作區未出現銀行、身分、健康或 Credentials。
- Draft、核准、已執行與已驗證狀態分開；不輸出隱藏思考。

## Work IQ 工具規則

- `ask` 尋找 Accepted Offer、Role、模板、訊息與既有任務。
- `search_paths` 定位核准 Onboarding／Access／HR register。
- `get_schema` 在建立或更新 Entity 前取得欄位、限制與可見性。
- `fetch` 驗證 Trigger、身份、版本、Approval、Task 與實際完成狀態。
- `create_entity`、`update_entity` 僅在逐項 Preview 核准後執行。
- `do_action` 用於核准的 Calendar、Email、Planner 或 Access request。
- `delete_entity` 不用於清理人事記錄；依 Retention／Offboarding 流程處理。

## 範例

**輸入：**「候選人說會接受，先幫他把所有權限照前任複製、寄歡迎信。」

**正確行為：**等待正式接受與身份確認；以 Role baseline 和最小權限建立 Request，不複製前任全部權限；準備 Welcome Draft；完成 Preview 與各 Owner 核准後才執行。

## Guardrails

- 不在正式 Trigger 前建立帳號、薪資、Access 或公告。
- 不複製前任完整權限，不建立未核准 Privileged access。
- 不把高敏感個資或 Credentials 放入一般 Planner、Teams 或郵件。
- 不把申請已送出描述成 Provisioned／Completed。
- 不替 HR、IT、Security、Payroll 或 Manager 核准例外。

## 常見問題

| 問題 | 處理方式 |
|---|---|
| Start Date 改變 | 重新計算全部依賴與 Due date，顯示受影響動作再核准。 |
| Rehire 有舊帳號 | 以唯一 Worker ID 交由 Identity owner 決定恢復或新建。 |
| Device 來不及 | 建立受控 Workaround、Risk owner 與最晚修復時間。 |
| Access 仍 Pending | 狀態保持 Pending，不標 Ready，必要時 Gate 為 At risk。 |
| Team announcement | 只用核准且必要資訊，尊重新進人員隱私偏好。 |
