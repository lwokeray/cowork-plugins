---
name: proposal-preparation
description: >-
  將一個明確商機的客戶需求、原文證據、成果、Solution scope、Assumptions、Dependencies、Owners 與缺漏整理成 Word、PowerPoint 或 Excel 提案草案。
  適用於 Solution Proposal、Customer Presentation、Statement of Work input 與 Bid preparation；不適用於核准價格、法務條款、資安承諾或最終送件。
metadata:
  author: lwokeray
  version: "3.0.0"
---

# 解決方案提案準備

## 概述

建立可審閱的 Proposal Evidence Package，將客戶語言與內部方案假設分開。內容可以產生 Word、PowerPoint 或 Excel 草案，但 Pricing、Discount、Legal、Security、Privacy、SLA、Data residency 與 final submission 都保留給具名 Owner。

## 適用情境

- 準備 Solution Proposal、Customer deck 或 SOW input。
- 整理 RFP／RFQ／Bid requirements 與來源。
- 建立 Requirements traceability、Scope、Assumptions 與 Dependencies。
- 準備交給 Solution、Delivery 或 Commercial reviewer 的草案。

## 不適用情境

- 核准 Pricing、Discount、Margin 或 Contract terms。
- 代表 Security、Privacy、Legal 或 Delivery Owner 接受承諾。
- 寄送或正式提交 Proposal。

## 快速開始

1. 確認 Account、Opportunity、Deliverable、Audience、Deadline 與核准的存放位置。
2. 用 `ask` 找需求、會議、Email、文件、Planner 與 People context。
3. 用 `search_paths`、`get_schema`、`fetch` 驗證客戶原文、版本、Owner、Due 與 supporting artifacts。
4. 建立 Requirements、Outcome、Solution scope、Assumptions、Dependencies、Evidence gaps 與 Human decisions。
5. 產生草案 preview；核准位置與變更後才建立或更新檔案。

## 核心流程

### 階段一：Proposal Gate

- 必須解析唯一 Opportunity、Deliverable 與 Deadline。
- 找到既有核准 Proposal 時，以該版本為基準並顯示差異。
- 沒有客戶需求證據時，不以一般產品能力填滿 Proposal；先建立缺口清單。

### 階段二：Requirements Traceability

每項 Requirement 記錄 Customer wording、Source、Date、Owner、Acceptance／Decision state。內部 interpretation 另列，不可改寫成客戶原話。

### 階段三：Solution 與 Scope

- Solution component 必須對應客戶 Outcome 或 Requirement。
- In scope、Out of scope、Assumption、Dependency、Constraint 分開。
- Project effort 可採三點估算，但輸入與 confidence 必須透明；不得將估算視為 Commercial quote。

### 階段四：Artifact 與 Approval

| Requirement／Decision | Customer wording | Source | Proposed response | Owner | Due | Status |
|---|---|---|---|---|---|---|
|  |  |  |  |  |  | Ready／Missing／Human decision |

輸出 Proposal outline、Artifact list、Open decisions 與 Save preview。只有使用者核准 location、file name、version 與 changed sections 後才寫入。

### 階段五：建立 Requirements baseline

先將所有需求逐項編號並保存客戶原文。分類為 Business、Functional、Technical、Security、Privacy、Compliance、Commercial、Delivery、Support 或 Submission requirement。每項記錄：來源、日期、提出者、Mandatory／Desired 狀態、澄清問題、回覆 Owner、到期日及目前狀態。

客戶原文、我方理解與 Proposed response 必須分開。若同一需求在 RFP、Email 與會議中有不同版本，並列差異並要求客戶或 Bid owner 確認。

### 階段六：建立 Solution narrative

Proposal 依客戶決策邏輯組織，而非依我方產品目錄：

1. 客戶目前情境與目標。
2. 已確認問題、影響與成功條件。
3. Proposed approach 與如何支持 Outcome。
4. Solution scope、使用情境、責任與關鍵設計。
5. Delivery approach、Milestones、Adoption、Operations 與 Support。
6. Security、Privacy、Compliance 與治理回應。
7. Assumptions、Dependencies、Constraints、Out of scope。
8. Commercial、Legal 與其他待核准事項。
9. Next step 與有效期限；只有經核准者才可加入。

每個 Solution component 必須至少連結一項 Requirement 或 Outcome。無法連結的功能不應放入正文。

### 階段七：寫作與受眾調整

- Executive：以 Outcome、Value、Risk、Decision 與責任為主。
- Business：以流程改變、使用情境、採用與衡量方式為主。
- Technical／Security：保留可驗證架構、整合、控制、限制及 Owner。
- Procurement／Legal：保留 Scope、假設、條款狀態、有效期限與偏差。

不向非技術讀者堆疊產品名詞；先說明解決的業務問題，再補必要技術。不得以空洞的「領先」「無縫」「安全」取代具體證據。

### 階段八：建立 Traceability 與 Review package

每項 Requirement 對應 Proposal section、Proposed response、Evidence、Owner、Decision state 及驗證方式。列出尚未回答、部分回答、需要客戶澄清及需要內部核准的內容。Review package 依 Solution、Delivery、Security、Privacy、Legal、Pricing 分派，不推定任何人已接受。

## 完整 Proposal 產出

1. Document control：Account、Opportunity、Audience、Version、Owner、Deadline、Status。
2. Executive summary：客戶目標、我方建議、預期結果、主要限制與下一步。
3. Customer context、requirements 與 success criteria。
4. Proposed solution 與可追溯 scope。
5. Delivery、Adoption、Operations、Support 與 governance。
6. In scope、Out of scope、Assumptions、Dependencies、Constraints。
7. Risks、Open questions、Human decisions。
8. Requirements response matrix。
9. Artifact／Attachment inventory。
10. Review、Save 及 Submission state。

## 停止條件

- 沒有唯一 Opportunity／Deliverable／Deadline 時停止建立正式 Proposal。
- 客戶需求證據不足時產出 Discovery／clarification package，不用 generic capabilities 填滿。
- Pricing、SLA、Security、Privacy、Legal 或 Delivery commitment 未核准時保留 Placeholder 與 Owner。
- Save 成功不代表 Proposal 已核准或已提交。
- 正式 Submission 必須由獨立、明確核准的 Outreach／action 完成。

## 使用者溝通與完成檢查

- 交付完整 Proposal 正文與 Traceability，不以 Outline 或製作摘要冒充成品。
- 先用客戶與商務語言說明 Value，再保留必要技術；不暴露工具、schema、payload 或思考過程。
- 客戶原文、內部理解、Proposed response、Assumption 與 Human decision 已分隔。
- 每個 Solution component 對應 Requirement／Outcome，未核准承諾保持 Placeholder。
- Draft、Saved、Reviewed、Approved 與 Submitted 狀態沒有混淆。

## Work IQ 工具規則

- `ask` 定位 evidence；`fetch` 驗證精確 meeting、message、file、task、person。
- 建立或更新 artifact 前使用 `search_paths`、`get_schema`。
- `create_entity`、`update_entity` 只在 save preview 核准後使用。
- 不使用 `do_action` 送出 Proposal。

## 範例

**輸入：**「幫 Contoso 準備 Microsoft 365 Security 提案。」

**正確行為：**先解析商機與客戶需求，將 requirement、solution、assumption 與 human decision 分開；未核准前只產生草案。

## Guardrails

- 不捏造客戶需求、Success metric、Reference 或產品 Roadmap。
- 不核准 Pricing、Discount、Legal、Security、Privacy 或 SLA。
- 不覆寫既有核准 Proposal。
- 不寄送或正式提交草案。

## 常見問題

| 問題 | 處理方式 |
|---|---|
| 需求來源互相衝突 | 並列來源與日期，標示需客戶確認。 |
| 找不到核准存放位置 | 保留草案，等待 location approval。 |
| 估算資訊不足 | 提供 range 與 confidence，不給單點承諾。 |
| Schema 不支援檔案寫入 | 標示 `不支援`，保留可複製草案。 |
