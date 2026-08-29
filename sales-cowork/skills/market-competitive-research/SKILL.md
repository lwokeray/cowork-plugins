---
name: market-competitive-research
description: >-
  回答一個明確的市場、產業、競爭者或定位問題，分隔 Microsoft 365 內部證據與使用者明確要求的公開 Deep Research。
  適用於 Competitive Brief、Market Change、Battlecard 與 Sales Hypothesis；不適用於模糊公司簡介、SEO 分析或自動公開研究。
metadata:
  author: lwokeray
  version: "2.0.0"
---

# 市場與競爭研究

## 概述

把市場或競爭問題轉成可追溯的 Evidence Brief 與可在客戶對話中驗證的 Sales Hypotheses。內部 Work IQ 證據、公開來源、推論與未知必須分開呈現。

## 適用情境

- 指定產業變化對客戶的可能影響。
- 特定競爭者、替代方案或 Build-vs-Buy 比較。
- 建立客戶對話用 Battlecard 或 objection evidence。
- 驗證明確的 Account／Market hypothesis。

## 不適用情境

- 只有公司名稱而沒有研究問題。
- SEO、GEO、廣告或內容排名分析。
- 將公開新聞直接當成客戶購買意圖。
- 內部 Account 歷程 → `account-research`

## 快速開始

1. 確認研究對象、具體問題、決策用途、時間範圍與是否需要公開研究。
2. 以 `ask` 或支援的 `call_function` 蒐集內部企業證據。
3. 對重大內部敘述使用 `search_paths`、`get_schema`、`fetch` 驗證。
4. 只有使用者明確要求時才執行 Deep Research，記錄發布日期及直接來源。
5. 產出 Evidence、Comparison、Implications、Hypotheses 與 Unknowns。

## 核心流程

### 階段一：研究問題

問題必須包含對象、比較或變化、時間範圍及預期銷售用途。只有「研究某公司」時，先要求具體研究問題，不生成百科式簡介。

### 階段二：來源分層

1. **內部證據**：Microsoft 365 中的客戶陳述、會議、文件與內部分析。
2. **公開證據**：使用者明確要求後，由 Deep Research 取得的原始或權威來源。
3. **推論**：從證據推導、仍待驗證的銷售含意。
4. **未知**：來源無法回答或超出權限的部分。

不得以第三方摘要取代可取得的原始來源，也不得把不同發布日期的資料當成同一時點。

### 階段三：比較與影響

依問題比較客戶成果、能力、限制、導入條件、風險、商務模型與治理。只比較有證據支撐的維度；資料不對稱時標示 `證據不足`。

### 階段四：輸出

| 發現 | 來源類型 | 來源 | 日期 | 信心 |
|---|---|---|---|---|
|  | 內部／公開 |  |  |  |

| 維度 | 證據 | 銷售影響 | 待驗證問題 |
|---|---|---|---|
|  |  |  |  |

最後列出 `已確認結論`、`Sales Hypotheses`、`客戶確認事項` 與 `未知`。未要求公開研究時顯示 `未要求公開研究`。

## Work IQ 工具規則

- `ask`：內部跨工作負載推理。
- `call_function`：只使用目前支援的企業搜尋或計算函式。
- `fetch`：驗證精確內部實體；先執行 path/schema discovery。
- 不執行任何寫入或客戶互動。

## 範例

**輸入：**「比較競爭者 X 與我們在治理能力上的差異，供 Contoso 會議使用，並做公開研究。」

**正確行為：**界定比較時點，分開內部與公開證據，將會議說法寫成待驗證 hypothesis，而非客戶既定需求。

## Guardrails

- 公開研究必須由使用者明確要求。
- 不捏造競爭者能力、價格或 Roadmap。
- 不把公開新聞視為客戶已確認的 Budget、Intent 或 Timeline。
- 不發送 Battlecard、更新 Account artifact 或對外發布結果。

## 常見問題

| 問題 | 處理方式 |
|---|---|
| 問題太寬 | 要求一個決策用途與研究問題。 |
| 來源日期不同 | 保留日期並說明不可直接比較。 |
| 只有二手來源 | 降低信心並標示來源限制。 |
| 競爭資訊無法驗證 | 標示 `未知`，提出驗證問題。 |
