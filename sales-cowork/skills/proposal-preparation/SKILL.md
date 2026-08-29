---
name: proposal-preparation
description: >-
  將一個明確商機的客戶需求、原文證據、成果、Solution scope、Assumptions、Dependencies、Owners 與缺漏整理成 Word、PowerPoint 或 Excel 提案草案。
  適用於 Solution Proposal、Customer Presentation、Statement of Work input 與 Bid preparation；不適用於核准價格、法務條款、資安承諾或最終送件。
metadata:
  author: lwokeray
  version: "2.0.0"
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
