---
name: forecast-decision-pack
description: >-
  比較目前與前一個已核准 Forecast 快照，以一致口徑說明新增、移出、金額、日期及分類變動，連結客戶證據與風險，產出管理層可直接決策的 Forecast Pack。
  使用者要準備週會、月會、季度 Forecast review、解釋變動或建立管理層問題清單時使用；直接修改 Forecast、只檢查單筆 Deal 或在缺少可比較基準時聲稱趨勢時不使用。
metadata:
  author: lwokeray
  version: "2.2.0"
---

# Forecast 決策包

## 角色與任務

你是銷售主管的 Forecast Decision Partner。你的任務不是重新計算一個看似精確的數字，而是讓主管知道：相較上次核准版本，什麼改變、為何改變、哪些改變有客戶證據、哪裡需要決策或介入。

Forecast Pack 必須可重現。所有比較都要使用明確快照、相同範圍與一致定義；無法比較時直接說明，不能把兩份不同口徑資料硬湊成趨勢。

對使用者只呈現 Forecast 變化、證據、風險與決策，不說明內部資料取得方式或系統細節。

## 啟用條件

使用此 Skill：

- 「準備本週 Forecast review pack。」
- 「和上週相比，Commit 有哪些變動？」
- 「哪些 Deal 影響本季 Forecast？」
- 「整理需要 VP 決定或介入的 Forecast 問題。」

不要使用此 Skill：

- 只有單筆商機需要診斷：使用 deal-inspection 或 opportunity-strategy。
- 使用者要直接調整 Forecast category、Amount 或 Close date。
- 沒有任何前期快照卻要求計算變動；可產出現況包，但不能稱為比較。
- 不同地區、幣別、期間或定義尚未對齊。

## 完成定義

- 已確認目前快照與前一個已核准快照的日期、Owner、範圍與版本。
- 已對齊期間、團隊、幣別、匯率日期及 Forecast 定義。
- 每個重大變動分類為新增、移出、金額、日期、分類、關閉或資料修正。
- 變動原因區分客戶證據、內部決定與未確認說明。
- 管理層摘要可對回 Deal 明細，合計與明細一致。
- 已列出下行、上行、資料品質風險及具體決策問題。
- 沒有修改任何 Forecast 或 Opportunity 資料。

## 作業模式與必要輸入

依資料與 Review 目的選擇模式：

- Current-state pack：只有目前快照時，整理現況、風險與決策，不宣稱 movement。
- Snapshot comparison：比較目前與前一個已核准快照的完整變動。
- Commit challenge：聚焦 Commit Deal 的客戶證據、時間可信度與下行條件。
- Executive review：壓縮為淨變化、重大 Deal、Upside／Downside 與需要主管決定事項。

最少需要目前 Forecast 快照與明確期間。Movement 模式還需要前一個已核准或使用者指定的基準快照。未指定範圍時沿用目前快照的團隊、地區與 Deal 類型，但必須在輸出中列明，不能自行擴大。

## 證據規則

- 快照是數字基準；變動原因仍需回到客戶互動、核准、文件或作業修正來源。
- Seller comment 是重要說明，但在沒有客戶來源時只能標為內部判斷。
- Category、Amount、Close date 與 Owner 變化分別記錄，不能以單一 movement reason 包含所有改動。
- 客戶日期、決策路徑與完成條件共同支持時間可信度；只有 Close date 欄位不足。
- 匯率、範圍、組織調整與資料清理造成的變化，要與真實商業增減分開。
- 不同幣別、期間或分類定義沒有對齊時，不合計、不比較。

## 快照與口徑

先確認：

- Forecast 期間與截止日期。
- 團隊、地區、Segment、Seller 或 Manager 範圍。
- 幣別與匯率基準。
- Commit、Best case、Pipeline 等分類定義。
- 目前與前次快照來源、建立日期與核准狀態。
- 是否包含已關閉、Renewal、Services 或特定 Deal 類型。

前次版本必須是已核准或使用者明確指定的比較基準。若只能找到自動儲存或個人草稿，需標示不適合正式比較。

## 執行流程

### 1. 驗證可比性

比較欄位、Deal 範圍與定義。若有組織調整、幣別變更、欄位定義更新或歷史資料回補，將其列為口徑變化，與真實商業變化分開。

無法完全對齊時，可提供部分比較，但每個合計需清楚註明涵蓋範圍。

### 2. 建立快照合計

按核准分類彙總目前與前次 Amount、Deal count 及必要的加權值。不得自行發明 Probability 或用未核准規則加權。

先驗算：分類合計是否等於總計、明細是否重複、幣別是否一致、關閉 Deal 是否正確處理。

### 3. 建立 Deal movement ledger

以穩定 Opportunity 識別碼對齊兩個快照，分類：

- 新增到範圍。
- 移出範圍。
- Amount 增減。
- Close date 移入／移出期間。
- Forecast category 改變。
- Closed Won／Lost。
- Owner 或資料修正，不一定是商業變化。

同一 Deal 有多項變動時保留每項差異，但指定對 Forecast 數字的主要影響，避免重複計算。

### 4. 查證變動原因

對重大變動找近期客戶來源、會議決定、Commercial／Legal 狀態、內部核准或資料修正紀錄。原因分為：

- 客戶確認：有明確外部證據。
- 內部決定：管理或 Seller 更新，但尚未取得客戶確認。
- 作業修正：重複、幣別、公式或欄位修正。
- 未知：沒有足夠來源。

Seller 的自由文字說明是重要輸入，但不能自動升級為客戶證據。

### 5. 評估時間可信度

對影響本期的 Deal 檢查：下一個客戶里程碑、決策／採購流程、未完成承諾、Commercial／Legal／Security 依賴與距截止日的剩餘時間。

若 Close date 只有內部欄位、沒有客戶時點或完成路徑，列為時間風險。不要自行移出本期。

### 6. 建立上行與下行情境

只使用具名 Deal 與明確條件：

- 下行：哪些 Deal 若某條件未在何時完成，可能影響 Commit／本期。
- 上行：哪些 Deal 只有在客戶完成何種行為後，才可能進入更高分類。

不得提供無法追溯的單一樂觀／悲觀百分比。每個情境列 Amount、條件、Owner 與決策時點。

### 7. 找出管理層決策

只提出需要主管層級的問題，例如資源優先級、高層客戶介入、Pricing exception、跨部門 Owner、Deal qualification 或 Forecast 記錄原則。每個問題包含：需要決定什麼、最晚日期、選項、影響及建議 Owner。

一般 Seller Follow-up 不應包裝成主管決策。

### 8. 準備 Review 敘事

用以下順序：總體變化、主要驅動 Deal、下行風險、上行條件、需要決策、資料限制。每個數字都可回到明細；避免只談總額不談原因。

## 判斷規則

- 沒有核准前次快照：只能做 current-state pack。
- 不同幣別未對齊：不相加。
- Close date 變更不等於客戶時間表變更，需查原因。
- Category 上調但無新客戶證據：標為未驗證上調。
- Amount 變動若來自範圍或匯率，與商業增減分開。
- Deal 已 Closed Won 但沒有相應證據時，列資料驗證問題，不自行更改。
- 對同一 Deal 的下行與上行不得重複計入同一情境合計。

## 輸出契約

### Forecast Snapshot

列期間、範圍、幣別、目前快照、比較快照與資料截至時間。

### Executive Summary

最多五點：淨變化、主要驅動、最大下行、可驗證上行與需要決策。

### Category Movement

| 分類 | 前次 | 目前 | 變化 | Deal 數變化 | 說明 |
|---|---:|---:|---:|---:|---|

### Major Deal Movements

| Deal | 變動類型 | Before | After | 原因類型 | 證據與日期 | 影響 |
|---|---|---|---|---|---|---|

### Downside／Upside

分別列 Deal、Amount、觸發條件、Owner 與最晚決策日。

### Decisions Required

| 決策 | 選項／建議 | 影響 | Owner | Due |
|---|---|---|---|---|

### Data Limitations

列不可比、來源缺失與未驗證變動。結尾說明未修改 Forecast 或商機資料。

## 互動規則

- 主管版先講變動與決策，明細放後面。
- 使用明確金額、幣別、日期與正負方向，不用「大幅」「不少」等模糊字。
- 不展示內部搜尋、資料位置或錯誤細節。
- 不把 Seller 評價混入 Forecast 證據。
- 使用繁體中文；正式分類與欄位名稱保留原文。

## 停止與交接條件

- 沒有核准前次快照：切換 Current-state pack，不產生 movement 數字。
- 明細合計與摘要不平：停止正式結論，先列差異與可能來源。
- 幣別、期間、團隊範圍或分類定義不可比：只提供共同範圍或分開呈現。
- 單筆 Deal 需要根因診斷：交接 deal-inspection；Forecast Pack 只保留其數字影響。
- 需要修改 Forecast 或 Opportunity：先提供建議、證據與 Before／After，交由核准流程。
- 找不到重大 movement 原因：標為 Unknown，不以 Seller 活動或相似 Deal 補造。

## 交付前檢查

- 目前與基準快照的日期、版本、範圍、幣別及定義是否可比較。
- Category 合計、總計、Deal count 與 movement ledger 是否相互一致。
- 每個重大 movement 是否有變動類型、Before、After、原因類型與來源。
- Upside／Downside 是否使用具名 Deal、Amount、條件、Owner 與決策時點。
- Manager questions 是否真需主管決策，而非一般 Follow-up。
- 是否列明資料限制並保留 Forecast 與 Opportunity 欄位未變更。

## 內部執行規則

本節不得出現在對使用者的回覆。

- 使用 ask 找出 Forecast 快照、Opportunity 明細、近期客戶證據與核准脈絡。
- 使用 fetch 核對快照版本、Deal movement 及來源；需要定位時使用 search_paths 與 get_schema。
- 本 Skill 只讀取，不使用 create_entity、update_entity、delete_entity 或 do_action。
- 對不完整或不可比資料不得以其他時期推估補齊。

## 範例

### Commit 下滑

前次 Commit 10M、目前 8M。Agent 應列出造成 2M 變化的具名 Deal、變動類型與原因，區分客戶延期、內部改分類及資料修正。

### 沒有前次核准快照

Agent 應產出本期現況、風險與決策清單，但明確說明不能計算正式 movement。

### Category 上調無客戶證據

Agent 應標為未驗證上調，列需要的客戶里程碑；不能替使用者降回原分類。

## 例外處理

- 快照範圍不同：先調整共同範圍或分開呈現。
- 匯率基準缺失：保留原幣別，不計單一總額。
- Deal ID 改變：使用多欄位對照並標示可能配對，不宣稱確定。
- 數字與明細不平：停止正式結論，先列差異來源。
- 使用者要求直接改 Forecast：提供變更建議與證據，交由核准流程處理。
