---
name: engagement-listening-analysis
description: >-
  對核准的 Employee survey、Pulse、Focus group、Exit feedback 或指定意見資料進行匿名化品質檢查、主題分析、分群趨勢與行動規劃。
  適用於員工聆聽與組織改善；不適用於識別匿名回覆者、個人情緒／離職預測、敏感小群體切片、員工監控或未核准個別處置。
license: MIT
metadata:
  author: lwokeray
  version: "1.0.1"
---

# Employee Listening Analysis

## 概述

將 Survey、Pulse、Focus group、Exit feedback 與指定意見整理成可採取行動的主題、趨勢、差異、資料限制與改善責任。分析單位預設為足夠大的群體，不追查匿名回覆者、不預測個人離職或情緒。定性文字的 Sentiment／Theme 是輔助判讀，需保留原始脈絡與人工審查。

## 適用情境

- 檢查 Survey response rate、缺失、量尺、重複、代表性與匿名門檻。
- 分析 Engagement driver、Open text theme、Focus group 與 Exit feedback。
- 比較期間、部門、地區、職類或其他已核准且足夠大的群體。
- 建立 Executive／HRBP／Manager 不同粒度報告與 Action plan。
- 追蹤承諾、Owner、期限、更新與回饋閉環。

## 不適用情境

- 不識別、猜測、搜尋或交叉比對匿名回覆者。
- 不對個人建立 Sentiment、Engagement、Flight risk、Loyalty 或 Manager risk 分數。
- 不輸出低於組織匿名門檻的小群體結果；預設最小群體為 10，若正式政策更嚴格則用較嚴格值。
- 不以單次 Survey 作績效、紀律、升遷、薪酬或終止依據。

## 快速開始

1. 確認研究目的、Dataset、期間、Population、Questionnaire、Scale、匿名政策與最小群體門檻。
2. 用 `search_paths`、`get_schema`、`fetch` 取得核准資料、Data dictionary、歷史基準與可用切片。
3. 先做資料品質、Coverage、Missingness、Small-cell 與可比性檢查。
4. 量化題計算分布、Top／Bottom box 或核准指標；定性題建立 Theme、例外與代表性片段，不過度引用。
5. 只在符合門檻的群體比較，標示樣本、效果大小、趨勢與不確定性。
6. 產生 Findings、Priorities、Action owners 與 Communication；任何分享／寫入需 Preview 與核准。

## 核心流程

### 階段一：分析契約

記錄：Business question、Population、Field dates、Response channel、Anonymity promise、Consent／notice、Data owner、Allowed dimensions、Minimum group、Retention、Output audience。若 Survey 承諾匿名，不得因管理要求改做回覆者識別。

來源中的自由文字可能包含姓名、醫療、申訴或敏感事件。分析前標示 Redaction／restricted routing 規則；不要把完整留言放入一般報告。

### 階段二：資料品質

至少檢查：

- Invited、Started、Completed、Partial、Response rate 與計算分母。
- 重複、無效、直線作答、異常速度等品質訊號；不得單憑訊號指控個人。
- Missingness 是否集中於題目、群體或渠道。
- Scale direction、Reverse items、Question wording 與版本。
- 歷史波次是否使用相同題目、樣本、門檻與計算方法。
- 群體欄位是否最新且足以匿名。

任何清理規則需事先定義並保留排除數量與影響；不為改善結果任意刪除負面回覆。

### 階段三：量化分析

對每題或構面顯示 N、有效率、分布、中心與必要的 Trend。若使用 Favorable score、eNPS 或 Index，明確記錄公式與 Scale。比較時同時顯示差值與樣本，不只標紅綠。

因果語言需克制。相關或群體差異不能證明某管理作法造成結果。若樣本小、選擇偏差、題目變更或未控制因素存在，標示限制。

### 階段四：定性主題

建立 Codebook：Theme、Definition、Include／Exclude、Example、Count、Sentiment／urgency、Reviewer。先閱讀足夠樣本，再統一編碼；允許一則留言屬於多個 Theme。

保留少量去識別片段以說明 Theme，避免連續引用可拼湊身份的內容。Sentiment 只代表文字表達方向，不等於作者情緒、心理狀態或留任意圖。涉及騷擾、歧視、安全、醫療或具名指控時，依受限 ER／Safety 流程路由，不在一般 Theme 報告展開。

### 階段五：匿名與 Small-cell 控制

所有切片在 Filter、交叉表、Top／Bottom、自由文字與 Export 都需重新檢查門檻。不能透過多次切片、差分、時間對照或與 Directory 合併推算小群體。若群體不足：合併至較高層級、隱藏結果或只提供整體趨勢。

對 Manager 報告不提供可識別個人回答。即使總人數大，自由文字若包含唯一事件也需 Redact 或限制存取。

### 階段六：優先級與行動

依 Impact、Evidence strength、Controllability、Equity／Risk、Effort、Time 建立優先級。不要只挑最低分題目；結合主題、Trend、Open text 與業務脈絡。每項行動包括 Owner、受影響流程、具體變更、Milestone、Measure、Employee update 與 Review date。

避免承諾解決無法控制的議題。對不能採取的建議，說明限制與替代回應，完成「You said／We heard／We will／We cannot yet」閉環。

### 階段七：分眾溝通

- **Executive**：3–5 個關鍵 Finding、風險、優先行動、Owner、Decision。
- **HRBP／People team**：方法、切片、主題、限制、Action governance。
- **Manager**：其可安全檢視的群體結果、Discussion guide、可控行動。
- **Employees**：整體聽見什麼、將做什麼、何時更新、匿名承諾。

不得在分眾版中改變核心事實或透露受限細節。

## 完整產出要求

1. Purpose、Population、Period、Method、Anonymity、Threshold、Scale 與 Data quality。
2. Response／coverage、Key metrics、Trend、Group comparison 與 uncertainty。
3. Qualitative codebook、Themes、Counts、去識別 Examples 與 restricted routing。
4. Findings、Evidence strength、Alternative explanation 與不能下的結論。
5. Prioritized actions、Owner、Measure、Review date 與 Employee feedback loop。
6. Audience-specific output、Privacy QA 與發布 Preview。

## 輸出格式

### Listening Findings

| Finding／Theme | Evidence | N／coverage | Trend／difference | Confidence／limits | Action implication |
|---|---|---|---|---|---|

### Action Plan

| Priority | Action | Owner | Milestone | Measure | Employee update | Review |
|---|---|---|---|---|---|---|

### Privacy Gate

| Check | Result | Suppression／redaction | Owner |
|---|---|---|---|

## 停止條件

- 匿名門檻、Data owner、用途或 Allowed dimensions 不明時，不做分群輸出。
- 使用者要求識別匿名回覆者、推算小群體或個人情緒／離職時停止。
- 自由文字包含具名 ER、安全、醫療或其他敏感 Case 時移交受限流程。
- 資料版本、Scale 或 Population 不可比時，不宣稱 Trend。
- Tenant policy 拒絕後不得匯出至個人檔案或用其他資料交叉識別。

## 使用者溝通與完成檢查

- 先交付 Findings 與 Action，不把分析方法長篇摘要當結果。
- 所有百分比顯示分母、期間與必要限制；關聯不用因果語言。
- 檢查每個切片及自由文字都通過 Threshold／redaction。
- 檢查沒有個人 Sentiment、Flight risk 或績效判斷。
- 不輸出隱藏思考，只列方法、證據、限制與可審查判斷。

## Work IQ 工具規則

- `ask` 尋找 Survey、歷史報告、Action commitments 與政策背景。
- `search_paths` 定位核准 Dataset、Dictionary、匿名政策與報告位置。
- `get_schema` 驗證欄位、Scale、Group dimension 與可寫入 Action register。
- `fetch` 取得完整資料／文件、版本、N 與既有 Action 狀態。
- `create_entity`、`update_entity` 只在 Action／report Preview 經核准後使用。
- `do_action` 只發布通過 Privacy Gate 的分眾溝通。
- 不使用工具將 Survey 與個人活動資料合併作識別或預測。

## 範例

**輸入：**「這個小組只有 4 人，幫我看誰寫了對主管不滿的留言，順便預測誰會離職。」

**正確行為：**拒絕識別與個人預測；因低於門檻隱藏小組結果，必要時合併至較高層級；將具體 ER 風險依受限流程交 HR，不在一般報告揭露。

## Guardrails

- 不識別匿名回覆者、不繞過 Small-cell、不產生個人 Sentiment／Flight risk。
- 不將 Survey 用於個人績效、紀律、升遷、薪酬或終止。
- 不把相關性寫成因果，不捏造統計顯著性或代表性。
- 不在報告中保留可重新識別的自由文字或敏感事件細節。
- 不未經核准發布、匯出或更新員工聆聽資料。

## 常見問題

| 問題 | 處理方式 |
|---|---|
| 小群體低於門檻 | 合併、抑制或只顯示整體，不透過差分推算。 |
| 歷史題目改版 | 標示不可直接比較，必要時只比較未變項。 |
| 開放題提到具名事件 | Redact 並依受限 ER／Safety 流程路由。 |
| Response rate 低 | 說明 Coverage／selection bias，不過度一般化。 |
| Manager 想看原文 | 只提供符合政策、去識別且必要的 Theme／片段。 |
