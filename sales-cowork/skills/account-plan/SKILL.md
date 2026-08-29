---
name: account-plan
description: >-
  依 Microsoft 365 證據建立或更新一個企業客戶的長期經營計畫，包括客戶成果、關係覆蓋、Whitespace、風險與行動。
  適用於 Account Planning、Stakeholder Coverage 與 Executive Engagement；不適用於單一商機策略、Meeting Brief、Forecast 或 Proposal authoring。
metadata:
  author: lwokeray
  version: "2.0.0"
---

# 客戶經營計畫

## 概述

將 `account-research` 的可驗證證據轉成可持續維護的 Account Plan。計畫必須區分客戶確認事實、內部假設與未知，且不得把活動量、職稱或組織位置直接視為關係品質或決策權。

## 適用情境

- 建立或更新年度／季度 Account Plan。
- 盤點 Stakeholder Coverage、Executive Sponsorship 與關係缺口。
- 分析 Whitespace、Cross-sell 或合作機會假設。
- 建立具 Owner、期限與驗證方式的 Account actions。

## 不適用情境

- 單一 Opportunity 的推進策略 → `opportunity-strategy`
- 完整客戶研究 → `account-research`
- 單一 Meeting Brief → `customer-meeting-brief`
- Proposal 或 Forecast 決策。

## 快速開始

1. 確認唯一 Account、計畫期間、受眾及核准的現有 Account artifact。
2. 使用 `ask` 彙整客戶成果、組織關係、互動、承諾、風險及現有計畫。
3. 使用 `search_paths`、`get_schema`、`fetch` 驗證重大事實與 artifact 版本。
4. 建立 Outcome、Stakeholder、Whitespace、Risk 與 Action 五個區塊。
5. 如需儲存，顯示位置、版本與逐段差異；核准後才使用 `create_entity` 或 `update_entity`。

## 核心流程

### 階段一：確認規劃基準

- 指定 Account、期間及讀者，例如 Account Team 或 Sales Leadership。
- 找到現有核准版本時，以該版本為基準，不另建重複文件。
- 無核准版本時，建立 `草案`，不可宣稱為正式 Account Plan。

### 階段二：建立 Evidence Map

整理客戶業務成果、策略優先事項、現有解決方案、已知問題、互動歷程、利害關係人及待辦事項。每個項目必須有來源、日期及狀態：`已確認／推論／未知`。

### 階段三：關係與 Whitespace

- Stakeholder 只記錄已知角色與關係證據。
- Champion、Decision Maker、Blocker、Sponsor 等標籤需要明確證據；否則只寫待驗證假設。
- Whitespace 必須連結客戶成果或已確認問題，不得只因公司尚未購買某產品就判定為機會。

### 階段四：行動計畫

最多提出三項優先行動，每項包含 Outcome、Owner、Due、依賴、證據及完成標準。Planner 執行交給 `sales-task-planning`。

## 輸出格式

| 客戶成果 | 證據 | 目前狀態 | 缺口／風險 |
|---|---|---|---|
|  |  |  |  |

| 人員／群組 | 已知角色 | 關係證據 | 覆蓋缺口 | 下一步 |
|---|---|---|---|---|
|  |  |  |  |  |

| 優先行動 | Owner | Due | 依賴 | 完成標準 |
|---|---|---|---|---|
|  |  |  |  |  |

結尾：`計畫草案已完成`、`等待儲存核准` 或 `已核准並儲存`。

## Work IQ 工具規則

- `ask` 用於跨工作負載 Account reasoning。
- `fetch` 驗證精確證據與版本；先執行 path/schema discovery。
- `create_entity`、`update_entity` 只在位置、schema、差異與使用者核准成立後執行。
- 不使用 `do_action` 建立外部溝通。

## 範例

**輸入：**「幫我更新 Contoso 的年度 Account Plan。」

**正確行為：**先找核准基準版，列出新證據與逐段差異；沒有證據時不新增 Champion 或 Whitespace 結論。

## Guardrails

- 不覆寫核准版本而不顯示差異。
- 不從職稱推斷 Authority。
- 不把產品缺口直接等同銷售機會。
- 不自行建立 Planner 工作或寄送 Executive outreach。

## 常見問題

| 問題 | 處理方式 |
|---|---|
| 找到多個 Account Plan | 顯示位置、Owner、版本及日期，要求選擇基準。 |
| 無客戶成果證據 | 保留 `未知`，提出 discovery 問題。 |
| Whitespace 只有內部假設 | 明確標示 hypothesis，不列為 confirmed opportunity。 |
| 儲存被 policy 阻擋 | 報告 blocked operation，不重試。 |
