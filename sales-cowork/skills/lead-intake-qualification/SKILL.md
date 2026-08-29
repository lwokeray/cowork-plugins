---
name: lead-intake-qualification
description: >-
  依 Outlook、Teams、People 及核准的 Excel 或 SharePoint intake 資料，評估新進 B2B 銷售線索、重複項目、資訊缺口與安全下一步。
  適用於新詢問、活動名單、轉介或指定批次的初步 qualification；不適用於大量行銷、既有商機策略或 Forecast Review。
metadata:
  author: lwokeray
  version: "2.0.0"
---

# 銷售線索接收與資格評估

## 概述

把單一線索或最多十筆的限定批次轉成證據導向 qualification brief。不得僅依職稱、公司規模或語氣推斷 Budget、Authority、Need、Timing、Consent 或 Fit。

## 適用情境

- 檢視指定期間的新詢問、活動名單或轉介。
- 判斷線索為 `進一步確認`、`培養`、`不符合` 或 `未知`。
- 找出重複線索、缺少資料及適合的內部 Owner。
- 準備首次回覆或 Planner 工作預覽。

## 不適用情境

- 大量或自動化行銷序列。
- 既有商機的 Deal Strategy。
- 將模糊意向直接轉成 Forecast 或 Pipeline 承諾。

## 快速開始

1. 確認 intake 來源、時間範圍與最多十筆的批次上限。
2. 用 `ask` 找出線索訊息、相關公司、人員與既有互動。
3. 用 `search_paths`、`get_schema`、`fetch` 驗證訊息、People、register 與重複項目。
4. 分開記錄外部陳述、內部事實、qualification 推論與未知。
5. 每筆只提出一個最安全下一步；回覆或資料更新都先預覽並取得核准。

## 核心流程

### 階段一：界定 Intake

- 指定 Outlook、Teams、核准的 Excel／SharePoint register 或使用者提供的來源。
- 指定時間、客群或 Owner；預設不跨越要求範圍。
- 沒有核准 register 時仍可完成唯讀評估，相關欄位標示 `無法取得`。

### 階段二：身分與重複檢查

- 以寄件地址、公司網域、姓名及可存取的人員資料做 entity resolution。
- 不把相同姓名自動視為同一人。
- 建立資料前，以 `fetch` 檢查相同 Email、公司與近期詢問。

### 階段三：證據式 Qualification

逐筆整理明確的業務問題、已知角色、期限、與核准 ICP／服務範圍的符合證據，以及仍需確認的 Budget、Authority、Need、Timing、Consent 與採購條件。

- `進一步確認`：有明確問題及合理符合證據，但仍需 discovery。
- `培養`：可能相關，但時機或需求證據不足。
- `不符合`：只有具明確排除證據時使用。
- `未知`：資訊不足，不能合理判定。

### 階段四：下一步與執行

回覆只使用 Work IQ 明確支援的 `do_action` URL；register 或 Planner 變更先完成 path/schema discovery。每項動作顯示對象、內容、目的、欄位與來源，再等待核准。

## 輸出格式

| 線索 | 外部陳述 | 內部事實 | Qualification | 缺少資訊 | 建議 Owner | 下一步 | 來源 |
|---|---|---|---|---|---|---|---|
|  |  |  | 進一步確認／培養／不符合／未知 |  |  |  |  |

結尾：`唯讀評估完成`、`等待核准`、`已核准並完成` 或 `受政策阻擋`。

## Work IQ 工具規則

- `ask` 尋找跨工作負載背景。
- `search_paths`、`get_schema`、`fetch` 驗證來源、重複資料與可寫入欄位。
- `create_entity`、`update_entity` 只在使用者核准精確 preview 後執行。
- `do_action` 只使用 Work IQ 回傳的完整 action URL。

## 範例

**輸入：**「幫我評估今天收到的五筆詢問。」

**正確行為：**限定今天及五筆，先去重，分開外部說法與內部事實，未知欄位不猜測；不直接寄出回覆。

## Guardrails

- 不從職稱或公司規模推斷 Budget、Authority 或購買意圖。
- 不把公開資訊當成對方同意被聯繫的證據。
- 不批次寄送未核准訊息。
- Tenant policy 拒絕後不得換工具重試。

## 常見問題

| 問題 | 處理方式 |
|---|---|
| 同名或共用信箱 | 要求唯一識別資料，不合併紀錄。 |
| 無核准 intake register | 完成唯讀 brief，register 欄位標示 `無法取得`。 |
| 找到既有商機 | 停止新建，提供重複證據並轉交既有 Owner。 |
| 資訊不足 | 使用 `未知`，提出一個可驗證問題。 |
