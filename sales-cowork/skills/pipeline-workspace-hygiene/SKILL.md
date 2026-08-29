---
name: pipeline-workspace-hygiene
description: >-
  檢查並清理核准的 Excel、SharePoint 或 OneDrive 銷售工作區，找出重複紀錄、缺少 Owner、逾期承諾、過期資料與沒有證據的欄位。
  適用於 Pipeline register 的 mechanical cleanup；不適用於自行決定 Stage、Amount、Probability、Close Date、Owner 或 Forecast。
metadata:
  author: lwokeray
  version: "2.0.0"
---

# Pipeline 工作區清理

## 概述

維持 Microsoft 365-based Sales register 的資料一致性。把可安全修正的 Mechanical issue 與需要 Business owner 決策的欄位分開；任何共用內容變更都需欄位級 preview 與核准。

## 適用情境

- 找出 duplicate、missing owner、invalid date、stale record 或 inconsistent format。
- 比對 register 與可存取的 Outlook、Teams、Meetings、Planner 及 files evidence。
- 更新已核准的機械性修正。

## 不適用情境

- 自行決定 Stage、Amount、Probability、Close Date、Forecast 或 Business status。
- 進行 Forecast Review → `forecast-decision-pack`
- 診斷單一 Deal → `deal-inspection`

## 快速開始

1. 確認唯一核准 register、file／list／table／sheet、Owner、review scope 與 as-of time。
2. 使用 `search_paths`、`get_schema` 解析 entity，使用 `fetch` 讀取限定範圍。
3. 使用 `ask` 做跨工作負載 correlation，但重大 finding 再以 `fetch` 驗證。
4. 將問題分類為 `Mechanical correction` 或 `Business decision`。
5. 顯示欄位級 before／after／evidence；核准後只套用 mechanical corrections。

## 核心流程

### 階段一：Source-of-truth Gate

- 必須命名檔案或 List、Table／Sheet、Owner 與 last-modified time。
- 多個 register 符合時不得合併，先要求使用者選定。
- 沒有核准 register 時停止寫入，但可提供建議的 Data Quality checklist。

### 階段二：Data Quality Review

檢查 duplicate key、missing required field、invalid date／format、stale timestamp、orphan owner、broken link、overdue commitment 與 unsupported business value。

### 階段三：Evidence Reconciliation

- `Mechanical correction`：格式、明確 duplicate、已確認 owner identity、明確日期轉換等不需要商務判斷的修正。
- `Business decision`：Stage、Amount、Probability、Close Date、Forecast category、Opportunity status 或任何需要解讀 Buyer intent 的欄位。

活動量不能作為 Business field 更新依據；來源衝突時不得自動覆蓋。

### 階段四：Preview 與 Apply

| Record | Finding | Current | Proposed | Evidence | Decision owner | State |
|---|---|---|---|---|---|---|
|  |  |  |  |  |  | Finding／等待核准／Updated／Decision required／Blocked |

只套用核准的 Mechanical corrections。完成後重新 `fetch` 驗證 affected records，回報 reviewed、clean、proposed、updated、blocked 與 decision-required 數量。

## Work IQ 工具規則

- `search_paths`、`get_schema`、`fetch` 用於 register discovery、schema 與 bounded retrieval。
- `ask` 只做 cross-workload correlation，不能取代 exact verification。
- `update_entity` 只在欄位級 preview 核准後執行。
- 不使用 `delete_entity` 移除 record，除非 Work IQ 明確支援且使用者對特定項目另行核准。

## 範例

**輸入：**「清理本週 Pipeline workbook。」

**正確行為：**先確認唯一 workbook／table，將格式錯誤與 Stage decision 分開，只對核准的格式修正執行 update。

## Guardrails

- 不用 inferred activity 更新 Business fields。
- 不覆蓋來源衝突或較新的 register value。
- 不批次刪除資料。
- 不在缺少 source-of-truth 時建立另一份平行 register。

## 常見問題

| 問題 | 處理方式 |
|---|---|
| 多份 register | 要求指定唯一 source of truth。 |
| Table／Sheet 無法解析 | 標示 `不支援`，不寫入。 |
| Evidence 與 register 衝突 | 列為 Business decision。 |
| 部分更新成功 | 重新 fetch 每筆結果，分開報告完成與 blocked。 |
