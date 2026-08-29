---
name: voice-of-customer-synthesis
description: >-
  從會議逐字稿、訪談、Forms、Email、Customer notes 與使用者提供的材料中，提取可追溯的 Voice of Customer themes、逐字引言、需求、阻礙與語言模式。
  適用於 Message validation、Persona、Content、Campaign 與 Product feedback；不適用於無逐字來源的虛構引言、個人 profiling、Legal approval 或大規模情緒監控。
metadata:
  author: lwokeray
  version: "1.0.0"
---

# Voice of Customer Synthesis

## Overview

將零散 Customer／Prospect 語言整理為可供 Marketing 決策使用的 Evidence Set。Skill 會區分逐字證據、paraphrase、內部觀察與分析推論；逐字引言必須能回到具體 transcript-like source 與 speaker context，找不到來源時寧可少給，也不生成聽起來合理的 quote。

## When to Use

- 尋找客戶如何描述 Problem、Outcome、Barrier、Trigger 或 Category。
- 為 Campaign message、Landing page、Case study、Persona 或 Product launch 找證據。
- 整理訪談、Meeting transcript、Forms free text、Email reply 或 Customer note 的主題。
- 比較不同 Segment、Journey stage、region 或 time window 的 Voice 差異。
- 找出常用詞、反對理由、未回答問題與可測試 Messaging hypothesis。

## When NOT to Use

- 沒有 transcript-like source 卻要求逐字 Customer quote。
- 以內部同仁意見冒充客戶語言。
- 做個人心理、健康、政治或其他敏感屬性推斷。
- 宣稱完整市場代表性或以少數引言計算 Population percentage。
- 自動將 Customer quote 發布到網站、廣告、Case study 或社群。

## Quick Start

1. 確認 Research theme、Audience、source scope、time window、用途及 quote 是否會對外使用。
2. 用 `ask` 找到 meeting、interview、Forms、Email 或 approved research；對 transcript／file 使用 `fetch` 或 `fetch_blob` 取得精確內容。
3. 分類 speaker、source、date、segment 與 consent／usage status；無法確認 Customer identity 時降低 confidence。
4. 提取逐字 quote，建立 Theme、Need、Trigger、Barrier、Desired outcome 與 Messaging implication。
5. 交付 Quote set、Theme synthesis、coverage、contradictions、gaps 與使用限制；保持 Read-only。

## Core Instructions

### 1. Define evidence scope

至少解析：

- Theme：要找的問題、Outcome、objection、language 或 experience。
- Population：Customer、Prospect、Partner、User，及其 Segment／Region。
- Window：日期範圍；未指定時使用與 Campaign decision 相符的最近期間。
- Evidence type：逐字 transcript、Email／Forms free text、call notes、research report。
- Intended use：內部理解、Marketing copy、Case study、public claim 或 Executive brief。

Intended use 會改變門檻：內部 Research 可保留匿名且具限制的低風險引言；對外使用必須另有 attribution、consent、claim、Legal 與 Brand approval 證據。

### 2. Classify source quality

| Level | Evidence | Allowed use |
|---|---|---|
| A | 逐字稿／書面 Customer response，speaker 與日期可確認 | 可作高信心 quote candidate；對外仍需 approval |
| B | 逐字內容存在，但 speaker role 或公司不完全明確 | 內部主題證據，quote 附 ambiguity |
| C | 具名研究摘要或 call note，明確是 paraphrase | 只作 paraphrase，不加引號 |
| D | 內部同仁觀察、CRM-like note、memory | 方向性 field signal，不是 Customer quote |

不得把 meeting summary 中的改寫句、AI-generated recap 或 internal interpretation 放入引號。只有原始文字可作逐字 quote。

### 3. Retrieve and verify

先用 `ask` 建 source map；再針對可能相關來源精確讀取。每個 quote candidate 保留：

- Exact text，不修正文法、不拼接不同句子。
- Speaker name 或 `Unknown`、Customer／Prospect confidence、role evidence。
- Company／Segment、call／survey、date、topic 與 source link／label。
- Quote 前後必要 context，避免斷章取義。
- Consent／external-use status：`Approved／Not evidenced／Restricted／Unknown`。

如果來源有自動轉錄錯誤，只能在不改變意思且明確標示 `[sic]`／`transcript unclear` 的情況下呈現；不得自行猜字補齊。

### 4. Code themes

每段 evidence 可編碼為：

- Trigger／context。
- Functional、emotional 或 social job。
- Pain／friction／risk。
- Desired outcome／success definition。
- Objection／barrier／trade-off。
- Existing workaround／alternative。
- Proof needed／trust signal。
- Customer vocabulary／category wording。
- Journey stage／next question。

先以開放編碼找出 recurring pattern，再合併同義但不同強度的 theme。不要因為同一場會議重複提到多次就當成多位 Customer evidence；同一 speaker 的近義內容需去重。

### 5. Assess theme strength

Theme strength 需同時考慮：distinct sources、segment spread、recency、specificity、contradiction 與 source quality。不要只報次數；可報「3/8 個獨立訪談提到」但必須知道分母與 sampling method。

標記：

- `Strong directional signal`：多個獨立高品質來源，內容一致。
- `Emerging signal`：來源少但具體，值得測試。
- `Contradicted`：不同來源或 Segment 有實質分歧。
- `Insufficient evidence`：只有 internal observation 或無法驗證的 summary。

### 6. Convert to Marketing implications

每個 implication 使用：

`Customer language → Underlying need → Marketing implication → Claim/proof required → Test`

Marketing implication 仍是分析，不得改寫成客戶已確認的 Brand claim。若 quote 涉及結果數字，必須確認量測範圍及 approval，不能直接轉成廣告文案。

### 7. Apply privacy and usage boundaries

- 對內預設以必要最少資訊呈現；可匿名時不暴露個人識別資料。
- Confidential meeting、Support incident、Security／health／financial details 不可因與 theme 相關就對外使用。
- Testimonial、logo、company name、job title、image 或結果數字都需各自的 external-use approval。
- Unsubscribe、complaint、support 或 sensitive context 不得拿來做個人化 Marketing targeting。

## Output Format

```markdown
# Voice of Customer Brief

## Scope and coverage
- Sources checked / usable sources / segments / dates / limitations

## Themes
| Theme | Customer need / barrier | Evidence spread | Strength | Marketing implication | Gap |
|---|---|---|---|---|---|

## Verbatim evidence
### [Theme]
- “Exact quote”
  - **Speaker:** [Name or Unknown] · **Customer confidence:** High/Medium/Low
  - **Context:** [Company/segment, source, date]
  - **External-use status:** Approved/Not evidenced/Restricted/Unknown
  - **Source:** [Link or label]

## Paraphrased evidence
- [不用引號，明確標示 paraphrase]

## Contradictions and missing voices
## Message hypotheses to test
```

## Work IQ Tool Rules

- `ask`：探索 meeting、Email、Forms、research 與 customer-note source。
- `search_paths`、`get_schema`：確認 transcript、message、file、form response 或 list path。
- `fetch`：讀取精確 message、response、metadata 與 source entity。
- `fetch_blob`：取得可讀文件／逐字稿內容；超過限制時縮小來源範圍。
- 不使用 mutation tools，不建立 Audience，不發布或寄送 quote。

## Examples

**User:**「找最近客戶談到 AI 導入阻礙的原話，給 Campaign team 參考。」

**Correct behavior:** 只從可驗證逐字來源提取，保留 speaker confidence、date、context 與 external-use status；meeting summary 內容列為 paraphrase，不加引號。

## Guardrails

- 不捏造、修飾、合併或翻譯後仍稱為「逐字」Customer quote。
- 不猜測 speaker、role、company、segment、consent 或敏感屬性。
- 不以 quote 數量宣稱 prevalence，除非有明確 sampling base。
- 不因內容有說服力就視為可公開使用。
- 不把 internal employee、Partner 或 AI summary 混入 Customer quote set。

## Common Issues

| Issue | Cause | Fix |
|---|---|---|
| 找到主題但沒有原話 | 來源只有 summary | 以 paraphrase 呈現並要求 transcript-like source。 |
| Speaker 不明 | 轉錄標籤缺失 | 降低 confidence，不放入高信心 Customer set。 |
| 同一引言重複多次 | 文件或 recap 重複引用 | 回到最原始來源並去重。 |
| 想直接放廣告 | 沒有 external-use evidence | 保持 internal-only，列出所需 approval。 |
| Theme 看似普遍 | 重複來自同一人 | 依 distinct sources 而非 mentions 評估。 |
