---
name: close-delivery-handoff
description: >-
  依已簽署或明確核准的 Microsoft 365 證據，準備從企業銷售成交到 Delivery、Implementation 或 Customer Success 的交接。
  適用於 Scope、Outcome、Stakeholder、Commitment、Dependency、Artifact 與 Owner 移轉；不適用於自行宣告 Won、接受合約義務或開始未核准交付。
license: MIT
metadata:
  author: lwokeray
  version: "3.1.1"
---

## 執行前提與交付方式

本 Plugin 提供工作方法，不會自行授予資料存取或系統操作能力。下文列出的 Work IQ、MCP 或應用操作，僅在本次工作環境實際提供對應工具、連線與使用者權限時適用；不得依工具名稱猜測路徑、欄位或成功結果。

沒有即時工具時，可用使用者提供或已授權匯出的資料完成本 Skill 的分析與草稿，保留資料日期、版本與無法即時驗證的範圍。政策拒絕或權限不足時停止該操作，不透過其他帳號、工具或瀏覽器繞過；仍交付可完成的部分。

使用者要求可下載的草稿文件時，完成該文件屬於所請交付物；「草稿」或「不要發布」不等於禁止產生供本人審閱的新檔。明確要求只讀或不建立檔案時遵守其限制。修改共用原檔、寫入正式系統、寄送、排程與發布，仍依後文的目標、差異、核准及執行後驗證規則處理；產生草稿不代表完成這些動作。

# 成交與交付交接

## 概述

保存從銷售到交付的客戶成果、承諾、範圍與責任。只有存在 Signed 或明確 Approved evidence 時，才能把 Opportunity 標示為具成交依據；否則輸出 `Close readiness`，不能宣稱 Won。

## 適用情境

- Close readiness 或 Signed evidence review。
- 建立 Delivery／Implementation／Customer Success handoff。
- 整理 Scope、Assumptions、Dependencies、Stakeholders、Milestones 與 unresolved commitments。
- 準備 Kickoff、Planner work 與 artifact package。

## 不適用情境

- 代替 Legal／Commercial approval。
- 自行宣告 Won 或接受合約義務。
- Renewal／Expansion review → `renewal-expansion-review`

## 快速開始

1. 確認 Account、Opportunity、Transition type、Target team 與 deadline。
2. 用 `ask` 找 Approved outcome、Signed／approved artifacts、scope、stakeholders、dates、tasks 與 unresolved commitments。
3. 用 `search_paths`、`get_schema`、`fetch` 驗證每項重大 evidence、version 與 Owner。
4. 分開列 Contract fact、Delivery assumption、Customer commitment 與 Internal action。
5. 建立 Handoff package、Kickoff checklist、Planner 建議與 Customer communication draft；任何執行都逐項核准。

## 核心流程

### 階段一：Close Evidence Gate

- `Signed` 需要可驗證的簽署或正式 approval artifact。
- 口頭、Email 或 Teams 中的正向表述不能單獨視為 Signed contract。
- 證據不足時使用 `Close readiness`，列出缺少項目。

### 階段二：Handoff Map

整理 Customer outcome、In／Out of scope、Milestone、Stakeholder、Commercial constraint、Security／Privacy commitment、Assumption、Dependency、Deliverable、Owner、Due 與 Source。

### 階段三：責任與風險

- 客戶承諾與內部工作分開。
- 未確認 Owner／Due 不得猜測。
- Proposal assumption 未進入核准文件時，不得當成 Delivery obligation。
- 每個 unresolved item 指定 Decision owner 或標示 `未知`。

### 階段四：輸出與執行

| Commitment／Outcome | Type | Customer owner | Internal owner | Due | Evidence | Risk／Unknown | State |
|---|---|---|---|---|---|---|---|
|  | Contract fact／Assumption／Customer commitment／Internal action |  |  |  |  |  | Confirmed／Proposed／Blocked |

輸出 Internal handoff、Kickoff agenda、Planner proposal、Customer draft 與 next checkpoint。寫入、寄送或排程均需 preview 與核准。

### 階段五：建立 Contract-to-delivery traceability

從 Signed／Approved artifact 逐項擷取客戶成果、Deliverables、Scope、Acceptance、Dates、Customer responsibility、我方責任、Security／Privacy、SLA、Commercial constraints、Assumptions 與 Dependencies。每一項都保留 Clause／Section／Source，不以 Seller 記憶取代。

Proposal、Email 或會議承諾若未進入正式核准 artifact，列為「Sales context／待決定」，不得轉成 Delivery obligation。若 Signed contract 與 Proposal 衝突，以正式核准文件為準並清楚列差異。

### 階段六：建立 Delivery readiness

檢查：

- Delivery owner、Project／CS owner 與必要 Specialist 是否已確認。
- Scope 與 Out of scope 是否能被執行團隊理解。
- Milestone／Acceptance 是否有 Owner、條件與日期來源。
- 客戶 prerequisite、Access、Data、Environment 與人員是否明確。
- Security、Privacy、Legal、Procurement 的未解項目是否已轉移。
- 商務與交付假設是否在核准範圍內。
- Support、Operations、Adoption、Training 與 Success measurement 是否有安排。
- 尚未完成的 Sales commitment 是否有 Owner 與 Due。

任何 Critical item 不完整時，狀態為 `Handoff not ready`，並指出啟動前所需決策。

### 階段七：設計 Kickoff

Kickoff agenda 聚焦共同理解與可執行決策：客戶成果、Scope／Non-scope、角色、Milestones、Acceptance、Dependencies、Ways of working、Risk／Issue route、Change control、Communication cadence 與立即下一步。不要在 Kickoff 重新銷售或揭露內部 Commercial discussion。

### 階段八：建立成功量測與回饋

將銷售階段承諾的 Outcome 轉成 Delivery 可追蹤的 Baseline、Measure、Target／Direction、Data source、Observation window 與 Owner。沒有核准 Target 時標示待確認。這些項目將作為後續 Renewal／Expansion review 的 Evidence baseline。

## 完整 Handoff Package

1. Close evidence、Contract／Order version、Status 與驗證來源。
2. Customer outcomes、Success measures 與商務背景。
3. Contract-to-delivery traceability matrix。
4. In scope、Out of scope、Deliverables、Acceptance 與 Change control。
5. Stakeholders、Decision／Escalation roles 與聯絡界線。
6. Milestones、Dependencies、Customer prerequisites 與 Owner。
7. Security、Privacy、Legal、SLA、Support 與 Commercial constraints。
8. Assumptions、Open decisions、Risks 與未完成 Sales commitments。
9. Delivery readiness、Kickoff agenda、Planner-ready actions。
10. 客戶可見 Handoff draft 與下一個 Checkpoint。

## 停止條件

- 無 Signed／Approved evidence 時只產出 Close readiness。
- 正式 artifact 與 Sales record 衝突時不自行調和，列出差異與 Owner。
- Delivery owner、Critical scope 或責任未確認時不宣稱 Ready。
- Planner、Calendar、Email、Project 或 file mutation 需各自預覽與核准。
- Operation 部分成功時回報已建立的 ID，不重複建立。

## 使用者溝通與完成檢查

- 交付 Delivery team 可直接使用的 Handoff Package，不是成交過程摘要。
- 使用客戶成果、Scope 與責任語言；不暴露工具、schema、payload、Forecast 或內部談判內容。
- Signed／Approved facts、Sales context、Assumptions、Customer commitments 與 Internal actions 已分開。
- Scope、Acceptance、Owners、Dependencies、Open decisions、Readiness 與 Kickoff 均完整。
- 無正式 Close evidence 時只回覆 Close readiness，不宣稱 Won。

## Work IQ 工具規則

- `ask` 找到 cross-workload transition context；`fetch` 驗證 signed／approved evidence。
- Create／Update 前使用 `search_paths`、`get_schema`。
- `do_action` 只使用 Work IQ 明確 URL 且逐項核准。
- Planner 變更使用 `sales-task-planning` 的流程。

## 範例

**輸入：**「Contoso 已簽約，準備交給 Delivery。」

**正確行為：**先驗證 signed evidence 與版本，再建立 scope、commitment、owner、dependency 與 unresolved item 的 Handoff。

## Guardrails

- 無簽署或正式 approval evidence 不宣稱 Won。
- 不把 Proposal assumption 轉成 Contract obligation。
- 不猜測 Customer／Internal owner 或 due date。
- 未核准不建立 Planner、排程 Kickoff 或寄送通知。

## 常見問題

| 問題 | 處理方式 |
|---|---|
| 找不到 signed artifact | 改輸出 Close readiness。 |
| Proposal 與 Contract 不一致 | 以核准 Contract 為準並列出差異。 |
| Delivery owner 未確認 | 標示 `未知`，建立 escalation。 |
| 寫入被 policy 阻擋 | 回報 blocked item，不重試。 |

## 跨階段交接與接續執行

依案件目前進度，從第一個尚未完成且影響下游的工作開始。保留同一案件、任務與文件版本；只在需要該獨立產出時使用相鄰 Skill，不要求一次執行整個 Plugin。

| 工作階段 | 帶入的證據 | 交付與承接條件 |
|---|---|---|
| 需求與訪談 | 客戶原話、參與人、資料位置與問題 | 接案表與訪談議程；意向日期仍是意向，不轉成上線承諾 |
| 提案與商務審查 | 訪談確認範圍、排除項目、追加要求 | 提案版本與商務差異表；價格、折扣與新增工作交有權人決定 |
| 簽署與交接 | 雙方簽署或正式核准文件、交付接收者 | 條款對照、前置資料、責任及接受交接證據；正向回信不等於簽署 |
| 執行前追蹤 | 已接受交接版本、仍未完成承諾 | 只追蹤缺口與下一檢查點；新範圍另建變更，保留已簽基準 |

客戶追加工程圖移轉時，先列與已簽範圍的差異、需盤點資料與決策人；原本不受影響的工作可繼續，新增工作保持待核准。

交接時保留案件 ID、輸入版本、資料截至時間、已完成成品位置、原決策與批准範圍、仍缺的資料、接收者及下一檢查點。接收者沒有明確接受時標示待承接，不把「已寄出」當成責任已轉移。

執行中收到新資料，先比較原值、新值、來源時間、受影響產出與依賴。已核准基準保留原版；只修訂受影響事項，超出原批准的動作重新提出具體預覽。無關且已完成的事項不重做。

中斷後接續前，讀取目前成果與目標狀態，分別列已驗證成功、失敗、結果未知及尚未執行。已成功項目不重送；結果未知先核對再重試；依賴失敗步驟的後續動作保持等待。若本次只有來源文件，僅更新草稿與待辦，不聲稱已更新正式系統。
