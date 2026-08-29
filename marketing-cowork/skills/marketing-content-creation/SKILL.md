---
name: marketing-content-creation
description: >-
  依核准的 Audience、Brand、Messaging、Claim、Proof、Channel 與 CTA，研究並撰寫可直接審閱的完整 Marketing content，包括 Blog、Thought leadership、Landing page、Case study、Press release、Newsletter、Executive brief 與 Short-video script。
  適用於新稿、重寫與多版本創作；不適用於無來源 Claim、直接發布、假 Customer quote 或只交付製作摘要。
metadata:
  author: lwokeray
  version: "1.0.0"
---

# Marketing Content Creation

## Overview

產出完整、可直接審閱的 Marketing artifact，而不是 outline、寫作建議或 Agent 製作摘要。內容由 Audience need 與 desired action 驅動，並將 Fact、Claim、Quote、Data、Product naming、Brand voice、Accessibility、SEO 與 Channel constraint 納入同一寫作流程。

## When to Use

- 撰寫或重寫 Blog、Article、Thought leadership、Guide 或 Whitepaper section。
- 建立 Homepage／Landing page／Product page／Feature page copy。
- 撰寫 Case study、Customer story、Press release 或 Executive brief。
- 撰寫 Email newsletter、Campaign asset、Event copy 或 short-video script。
- 將研究、Meeting notes、approved Campaign brief 或資料轉為完整內容。

## When NOT to Use

- 只規劃內容主題與 Calendar → `content-strategy-calendar`
- 將已核准內容轉成各渠道版本 → `channel-content-adaptation`
- 審查內容是否符合 Brand／Claim → `brand-content-review`
- 直接發布、寄送、上稿、排程或建立廣告。
- 捏造 Customer、Quote、Statistic、Benchmark、Award 或 Product capability。

## Quick Start

1. 解析 Content type、Audience、Journey stage、Objective、Core message、Proof、CTA、Channel、Language、Length、Deadline 與 required reviews。
2. 用 `ask` 尋找 approved Brand、Messaging、Claim、Product source、Customer evidence 與 related assets；用 `fetch`／`fetch_blob` 驗證重大事實。
3. 建立 Content contract 與 claim ledger；缺少的非關鍵資訊以清楚 placeholder 處理，不以虛構補齊。
4. 依 Content type 完成完整初稿、必要 metadata、visual／accessibility notes 與可驗證 source notes。
5. 自我審查 Audience fit、message hierarchy、fact、voice、CTA、channel constraint 與 duplication，交付可直接審閱成品。

## Core Instructions

### 1. Build the content contract

開始前固定：

- Content type／format／channel／language／locale。
- Audience、expertise、need、barrier、Journey stage。
- One primary objective、one primary message、one primary CTA。
- Required facts、claims、quotes、links、terms、disclaimers。
- Brand voice、tone、preferred／avoided terminology。
- Length、format constraint、publish window、reviewers。
- Source-of-truth、version、effective date。

若使用者沒有提供部分欄位，從已附來源或 M365 context 推導合理假設並標示。只有缺少會使內容完全錯誤的 Product／Audience／legal anchor 時才停止；其餘應先交付有用草稿。

### 2. Gather evidence before copy

以 `ask` 建 source map，再以精確讀取驗證：

- Product capability、availability、pricing、security、compliance 與 roadmap。
- Customer result、quote、company name、logo／testimonial permission。
- Research statistic、sample、date、geography、method 與 direct source。
- Approved message、Brand terminology、claim qualifier、legal disclaimer。

建立內部 Claim ledger：`Proposed wording → Evidence → Scope → Approval → Allowed use → Expiry`。未驗證內容改成 qualified language、placeholder 或 omission，不用模糊字眼掩蓋。

### 3. Write for audience and action

遵守：

- Clarity over cleverness：Audience 能在開頭理解為何值得讀。
- Benefit through mechanism：結果要說明如何產生及必要前提，不只列 Feature。
- Specificity with evidence：具體但不超出 proof。
- Customer language over internal jargon：採用已驗證語言，不製造 fake familiarity。
- One job per section：每段推進一個問題或決策。
- One primary CTA：次要 CTA 不可搶走主要行動。

### 4. Apply the correct content structure

#### Blog／Thought leadership

交付：三個可用標題、opening hook、明確 thesis、完整 sections、evidence／examples、counterpoint／limitation、conclusion、CTA、meta title、meta description、suggested slug、internal-link opportunities 與 image alt-text brief。若是觀點文，將 Fact 與作者觀點分開，不假裝中立研究。

#### Landing／Product page

交付：Hero headline、subheadline、primary CTA、proof／trust line、Problem／Outcome、Value sections、How it works、Proof、Objection／FAQ、final CTA、form／next-step expectation、meta title／description。廣告 Message 必須與 Landing page promise 相符；沒有 proof 時不放虛構 logo／testimonial placeholder 當成真實內容。

#### Case study／Customer story

交付：Title、Snapshot、Context、Challenge、Decision criteria、Solution／approach、Implementation boundaries、Measured results、Customer quote、Lessons、CTA。任何 Customer name、quote、logo、result、timeline 與 comparison 均需來源與 external-use approval；缺少時標 `[Customer approval required]` 或以匿名 internal draft 呈現。

#### Press release

交付：Factual headline、subheadline、dateline、lead paragraph（who／what／when／where／why）、details、approved quotes、availability、boilerplate、media contact placeholder 與 source notes。只有真正 newsworthy 且已核准的資訊可使用；不自行宣布 partnership、customer、availability 或 funding。

#### Email newsletter

交付：三個 Subject、preview text、header、完整 body blocks、one primary CTA、secondary links、footer／unsubscribe reminder、plain-text considerations 與 accessibility notes。不要在此 Skill 直接寄送；Sequence 應使用 `email-nurture-campaign`。

#### Executive brief

交付：One-line conclusion、3–5 key findings、business impact、decision／ask、evidence、risks／unknowns 與 appendix references。去除不影響決策的製作細節。

#### Short-video script

交付：Platform／Audience／duration、one core message、Hook、Conflict／question、Value／reveal、CTA、逐鏡 Shot list、timestamp、visual、voiceover／caption、on-screen text、audio cue、asset／claim source 與 duration check。Hook 不得使用無證據的恐嚇、誇大或 fake statistic；CTA 最多一主一次。

### 5. Handle research and citations

current public facts 需使用 direct authoritative sources、publication date 與 observation date。內部稿可用 source note；公開稿依 channel 以正文 link、footnote、endnote 或 source line 呈現。不得複製長段來源文字；Quote 僅在允許範圍內使用並保留 attribution。

### 6. Optimize without damaging meaning

- Headline：呈現 Audience outcome 或 tension，與內容實際交付一致。
- Hook：使用問題、具來源資料、具體場景或 contrarian insight；不 clickbait。
- CTA：動詞＋Audience 得到的具體下一步；說明提交後會發生什麼。
- SEO：自然使用 primary topic／intent，保持 H1／H2 hierarchy、meta、internal links 與 alt text；不 keyword stuffing。
- Localization：先保持 meaning／claim／CTA，再調整 idiom、formality、examples、dates、units；不是逐字翻譯。
- Accessibility：descriptive link、alt text、caption／transcript、清晰 heading、避免只靠顏色傳意。

### 7. Perform the final review

交付前逐項檢查：Audience／objective、message hierarchy、fact／claim、quote／consent、Brand voice、terminology、channel／length、CTA、accessibility、SEO、duplicate、placeholder、review requirement。若 source conflict 尚未解決，正文不選邊，將衝突放入 Review notes。

### 8. Deliver content, not process narration

先輸出完整 Content artifact。需要補充時，只在末尾附 `Review notes`：待確認 placeholder、未核准 claim、required approver、source conflict 與 channel constraint。不得把「我如何研究／思考／撰寫」當正文。

## Output Format

```markdown
# [Complete content title]
[依指定 Content type 交付完整成品]

## Review notes
| Item | Status | Source / approval needed | Required action |
|---|---|---|---|

## Metadata / production handoff
- Audience / channel / locale / CTA / length / accessibility / source version
```

若使用者要求純成品，省略非必要說明，但保留會造成誤用的 approval／fact gap。

## Work IQ Tool Rules

- `ask`：尋找 Brand、Product、Campaign、Customer evidence、meeting 與 related content。
- `search_paths`、`get_schema`、`fetch`、`fetch_blob`：驗證 source、file、message、claim、version 與 metadata。
- 本 Skill 不使用 `create_entity`、`update_entity`、`do_action` 或 `delete_entity`；先交付草稿。

## Examples

**User:**「用這份 Campaign brief 寫完整 Landing page。」

**Correct behavior:** 先取得 approved Audience／message／proof／CTA，直接交付完整 Hero、value、proof、objection、FAQ、CTA 與 meta copy；沒有 Customer quote 就明確留 approval placeholder，不寫成不存在的推薦語。

## Guardrails

- 不捏造事實、Customer、Quote、數字、來源、Award、Certification、Price、Availability 或 Roadmap。
- 不輸出抄襲、過度近似來源的內容或超長引用。
- 不使用 dark pattern、fake countdown、fake scarcity、shaming 或 misleading CTA。
- 不直接發布、寄送、建立廣告、修改網站或覆寫 approved source。
- 不把 Draft、placeholder 或 AI-generated quote 表示為 Approved／live content。

## Common Issues

| Issue | Cause | Fix |
|---|---|---|
| 只得到 outline | 未進入 Content-type structure | 依選定格式完成全文。 |
| 文案很有力但無 proof | 先寫 claim 再找證據 | 建 claim ledger，降級或移除。 |
| 所有受眾用同一語氣 | 未解析 audience／stage | 調整 depth、proof 與 CTA。 |
| SEO 破壞可讀性 | Keyword stuffing | 以 intent／topic coverage 為主。 |
| Case study 缺數字 | 沒有 measured result | 用定性結果或 approval placeholder，不虛構。 |
