---
name: pipeline-workspace-hygiene
description: >-
  檢查並清理核准的 Excel、SharePoint 或 OneDrive 銷售工作區，找出重複紀錄、缺少 Owner、逾期承諾、過期資料與沒有證據的欄位。
  適用於 Pipeline register 的 mechanical cleanup；不適用於自行決定 Stage、Amount、Probability、Close Date、Owner 或 Forecast。
license: MIT
metadata:
  author: lwokeray
  version: "3.1.0"
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

### 階段五：建立資料品質基準

先讀取目前 Table／List schema 與核准的欄位定義，再判斷資料品質。不得假設所有 Sales register 都使用相同 Stage、Probability、Date 或 Owner 規則。若沒有 Data dictionary，將可客觀驗證的格式問題與需要 Owner 定義的規則分開。

檢查面向：

- **Identity**：Account、Opportunity、Contact、Owner、Record ID 是否可唯一辨識。
- **Completeness**：核准 required fields 是否缺漏。
- **Validity**：日期、Currency、Email、Choice、Number 與 Link 格式是否符合 schema。
- **Consistency**：同一欄位的值、時區、貨幣、命名及分類是否一致。
- **Freshness**：最後更新時間是否超出既定 review cadence。
- **Uniqueness**：同一 Opportunity／Commitment 是否被重複記錄。
- **Referential integrity**：Owner、Account、Proposal、Task 或 source link 是否仍存在。
- **Evidence**：關鍵 Business field 是否有可追溯來源與觀察日期。

### 階段六：分類可修正程度

| 類型 | 例子 | 行為 |
|---|---|---|
| 安全機械修正 | 明確日期格式、空白、大小寫、已驗證同一人識別 | 可建立欄位級 Preview |
| 建議修正 | 可能重複、可疑 Owner、過期連結 | 顯示證據，由使用者決定 |
| Business decision | Stage、Amount、Probability、Close Date、Forecast、Status | 只列問題與 Decision owner |
| 無法修正 | 權限、schema、來源或 operation 不可用 | 保留結果並標示原因 |

「明確 duplicate」仍需確定哪一筆是 source of truth、需要保留哪些歷史與連結。預設不刪除紀錄。

### 階段七：處理 Stale 與 Conflict

Stale 只表示缺少近期驗證，不表示 Deal 已失敗。列出最後可靠來源、需要更新的欄位與應由誰確認。若 Register 與較新 Buyer evidence 衝突，將差異交給 Business owner，不直接覆蓋。

## 完整清理報告

1. Source of truth、範圍、Table／List、Owner、as-of time 與 schema 版本。
2. Review 數量及各類 finding 統計。
3. 安全機械修正：Record、欄位、舊值、新值、規則與證據。
4. 建議修正：衝突、候選值、判斷所需資料。
5. Business decisions：欄位、現值、相反證據、Decision owner。
6. Stale／Missing evidence：最後更新日期與取得新證據的方法。
7. Blocked／Unsupported：權限、schema 或 operation 限制。
8. Apply 結果：成功、部分成功、失敗及重新驗證狀態。

## 停止條件

- Source of truth、Table 或範圍不唯一時停止寫入。
- 沒有核准欄位規則時不批次正規化 Business values。
- 更新結果不明時先重新 Fetch，不重送相同 mutation。
- 大量刪除、合併或覆寫需獨立核准，不包含在一般 cleanup。

## 使用者溝通與完成檢查

- 交付清楚的資料品質報告、修正預覽及決策清單，不輸出工具操作紀錄。
- 使用 Business／RevOps 可理解的欄位語言；不暴露 schema、payload 或隱藏思考。
- Mechanical correction、建議修正、Business decision 與 Blocked 已分開。
- 每個 proposed change 有舊值、新值、規則、證據與影響範圍。
- Apply 後成功、部分成功、失敗與未執行數量均經驗證。

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
