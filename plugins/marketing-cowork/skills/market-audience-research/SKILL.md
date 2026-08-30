---
name: market-audience-research
description: 針對明確的市場、受眾、需求、Segment、Persona 或 Journey 問題，整合 Microsoft 365 內部證據與使用者要求的 current public research，產出可追溯的 Market and Audience Evidence Brief。 適用於市場進入、Audience segmentation、Persona、需求探索與 Channel hypothesis；不適用於競爭 Battlecard、SEO ranking audit 或將公開訊號當成客戶意圖。
metadata:
  author: lwokeray
  version: 1.0.1
license: MIT
---

# Market and Audience Research

## Overview

把模糊的「研究市場／受眾」轉成會影響 Marketing 決策的證據問題，建立市場環境、Audience segment、需求、行為、Journey、Channel 與 Evidence gap。內部資料、公開來源、研究受訪者陳述、分析推論與未知必須分開，不能用精緻 Persona 包裝不存在的證據。

## When to Use

- 評估一個地區、產業、Use case 或 Audience segment。
- 建立或更新 evidence-based Persona、ICP-like Marketing segment 或 Journey hypothesis。
- 找出 Audience pain point、trigger、barrier、content need 與 channel behavior。
- 準備 Market entry、Campaign discovery 或 Message testing 的 Research Brief。
- 整理內部研究、Forms 回覆、Meeting notes、Customer feedback 與公開市場資料。

## When NOT to Use

- 競爭產品與 Messaging 比較 → `competitive-positioning-brief`
- SEO keyword 與 On-page 分析 → `seo-content-optimization`
- 提取逐字客戶引言 → `voice-of-customer-synthesis`
- 建立完整 Campaign plan → `campaign-strategy-plan`
- 要求購買名單、抓取個資、推定敏感屬性或建立未同意的 Audience profile。

## Quick Start

1. 將要求改寫為一個明確 Research question：對象、地區、時間、Decision、成功條件。
2. 決定 `Internal evidence`、`Public research`、`User-provided study` 的範圍；Public research 只在使用者要求或 current market facts 為任務必要條件時進行。
3. 用 `ask` 尋找 M365 中的 research、campaign learnings、Forms、meetings 與 approved segmentation；以 `fetch`／`fetch_blob` 驗證來源。
4. 建立 Segment、Need、Trigger、Barrier、Journey、Channel 與 Unknowns，不自行產生精確人口或市場數字。
5. 交付 Evidence Brief、可驗證 Hypotheses 與下一個最小 Research action。

## Core Instructions

### 1. Frame the research decision

Research question 至少包含：

- 研究對象：市場、Segment、角色、產業、地區或 Use case。
- 決策用途：Campaign、Launch、Content、Channel、Positioning 或 Investment。
- 時間範圍：目前狀態、指定期間或趨勢。
- 需要判斷的差異：誰、為何、何時、在哪裡、如何行動。
- 排除範圍：未涵蓋地區、客群、產品或資料來源。

若使用者只說「研究 Gen Z」之類過廣要求，先採合理假設建立一版明確 scope 並標註，不回傳空白問卷。只有會根本改變資料蒐集路徑的問題才需要確認。

### 2. Establish source authority

依序使用：

1. 使用者提供的 research brief、dataset、interview、survey 或 approved report。
2. 內部核准研究、Campaign learning、Customer research、Forms 與會議證據。
3. 官方統計、法規、公司揭露、原始研究及具名方法的權威資料。
4. 可信的二手研究，用於補足而不是取代原始來源。
5. 分析推論，必須標示為 Hypothesis。

公開來源必須保留 publisher、publication date、observed date、geography、sample、method 與 direct link；搜尋摘要不能當最終引用。不同年度、母體或定義的數字不可直接拼接。

### 3. Inspect internal evidence

使用 `ask` 建立 source map，再以精確工具確認：

- SharePoint／OneDrive／Word／PowerPoint：研究報告、Persona、Campaign brief、Interview synthesis。
- Forms／Excel：Survey raw data、response base、question wording、segment fields。
- Teams／Outlook／Meeting content：Audience language、questions、objections、decisions。
- Planner／Calendar：Research activities 與 timeline，只用於執行脈絡，不當受眾證據。

同一份報告的 draft 與 approved version 同時存在時，以明確核准、最新且範圍匹配的版本為主，保留版本日期。

### 4. Build segments without stereotypes

Segment 必須基於與 Marketing decision 有關且可合法使用的特徵，例如：

- Need state、job-to-be-done、problem maturity。
- Lifecycle／buying stage、behavior、engagement 或 channel preference。
- Company size、industry、role、region 等合理 business attributes。
- Constraint、risk tolerance、adoption barrier 或 content need。

不得從姓名、語言、地區、照片、職稱或社群行為推定種族、宗教、健康、性取向、政治立場等敏感屬性。人口特徵只有在合法、必要且來源明確時使用。

每個 Segment 至少包含：Definition、Evidence、Need、Trigger、Barrier、Preferred proof、Channel hypothesis、Journey stage、Unknowns。沒有足夠證據時稱為 `探索假設`，不稱為已驗證 Persona。

### 5. Map the journey

Journey 不是線性漏斗的想像。依證據記錄：

1. Trigger：什麼事件或條件讓受眾開始注意問題。
2. Questions：每階段需要回答的問題。
3. Evidence sought：受眾需要的 Proof、peer signal、demo、case、price 或 risk information。
4. Barriers：認知、流程、Budget、Trust、Security、Legal 或 Change barrier。
5. Touchpoints：有證據的 Channel／Content，不把 platform popularity 當成 Audience preference。
6. Desired action：Marketing 希望促成的下一步及其 consent requirement。

### 6. Handle quantitative evidence

- 百分比需有 numerator、denominator、period 與 definition。
- Survey 結果保留 question wording、base size、missing responses、multiple-select 規則。
- Market size 必須有來源方法；TAM／SAM／SOM 的範圍與假設分開。
- 小樣本定性研究不可宣稱人口代表性。
- 相關性或共同出現不等於因果；使用「與…相關」「可能」而不是「導致」。

### 7. Convert evidence into hypotheses

每個可行動 Hypothesis 使用：

`Evidence → Interpretation → Marketing implication → Validation method → Disconfirming signal`

例如：內部訪談反覆提到導入風險，只能形成「risk-reduction proof 可能比 feature depth 更影響 consideration」的假設；下一步需以 Message test、additional interviews 或 Campaign response 驗證。

## Output Format

```markdown
# Market and Audience Evidence Brief

## Research decision
- Question / scope / geography / time / exclusions

## Executive findings
1. [結論 + evidence confidence + 對決策的影響]

## Evidence map
| Finding | Source type | Direct source | Date / sample | Confidence | Limitation |
|---|---|---|---|---|---|

## Audience segments
| Segment | Need / trigger | Barrier | Proof needed | Channel hypothesis | Journey stage | Status |
|---|---|---|---|---|---|---|

## Journey evidence
| Stage | Audience question | Evidence sought | Touchpoint | Desired next action | Gap |
|---|---|---|---|---|---|

## Hypotheses to validate
| Hypothesis | Supporting evidence | Validation | Disconfirming signal |
|---|---|---|---|

## Unknowns and next research action
```

## Work IQ Tool Rules

- `ask`：尋找 M365 內 research、survey、meeting、campaign learning 與 approved Persona。
- `search_paths`、`get_schema`：發現可讀取的 files、Forms、list、workbook 或 meeting paths。
- `fetch`：驗證 metadata、row／item、event、message 與精確欄位。
- `fetch_blob`：讀取指定研究文件內容；超過限制時使用較小範圍或要求可讀版本。
- 本 Skill 不建立 Audience、名單、文件或 Task，也不向外聯繫。

## Examples

**User:**「研究台灣中型企業 IT 主管對 AI governance 的需求，供 Q4 Campaign 使用。」

**Correct behavior:** 界定中型企業與 Q4 決策用途，分開內部 Customer evidence 與 current public research，建立 Need／Barrier／Proof／Channel hypotheses，保留未驗證的 sample 與 market-size 限制。

## Guardrails

- 不捏造市場規模、Survey base、Persona quote、Audience preference 或 Channel behavior。
- 不建立或推定敏感 Audience attribute，不輸出個人層級 profile。
- 不將 Public trend、Website visit 或職稱直接視為購買意圖。
- 不將小樣本訪談外推為整體市場，不將二手圖表當原始資料。
- 不自動儲存研究、建立名單、發布內容或啟動 Campaign。

## Common Issues

| Issue | Cause | Fix |
|---|---|---|
| Persona 很完整但無證據 | 以常識補齊欄位 | 改標探索假設並列 Validation。 |
| 數字互相矛盾 | 範圍、年度或定義不同 | 並列來源，不平均或拼接。 |
| 內部結果與公開研究不同 | Audience／sample 不同 | 保留差異並說明適用範圍。 |
| 只有泛泛市場介紹 | Research question 無決策用途 | 重新連結到 Campaign／Launch decision。 |
| 要求上傳 Audience | 超出研究與 Consent boundary | 僅提供 Segment definition，交由核准流程。 |
