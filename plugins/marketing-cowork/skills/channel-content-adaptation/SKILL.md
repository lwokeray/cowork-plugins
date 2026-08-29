---
name: channel-content-adaptation
description: 將一份已核准的核心 Marketing content 轉為 Website、LinkedIn、X、Instagram、YouTube、Email、Teams／community、PR 或地區語言版本，依 Channel 行為重新構圖，同時保持 Claim、Brand、Source、Consent 與 CTA fidelity。 適用於 Repurposing、Transcreation、Localization 與多渠道 Content pack；不適用於從零 Campaign strategy、直接發布或未驗證平台規格。
metadata:
  author: lwokeray
  version: 1.0.1
license: MIT
---

# Channel Content Adaptation

## Overview

把核准 Source asset 轉成各 Channel 真正可用的版本，而不是機械縮短或逐字翻譯。每個版本依 Audience expectation、content consumption、format、hook、proof、CTA、accessibility 與 current platform constraint 重新設計，但不可改變核心事實、claim scope、Customer consent 或 offer terms。

## When to Use

- 將 Blog、Report、Webinar、Case study、Launch brief 或 Video 轉為多 Channel 內容。
- 將長內容轉成 Social post、thread、carousel brief、short video、email 或 community update。
- 為不同 Audience seniority、Journey stage、region、language 或 cultural context 改寫。
- 建立 Campaign content pack、launch channel kit 或 partner-ready copy。
- 檢查跨 Channel message consistency 與 content fatigue。

## When NOT to Use

- 核心 Source content 尚未核准且使用者要求「直接發布」。
- 從零建立完整 Campaign → `campaign-strategy-plan`
- 建立 Content calendar → `content-strategy-calendar`
- 單篇內容的完整 Brand review → `brand-content-review`
- 自動張貼、排程、上傳、建立 Ads 或發送 Email。

## Quick Start

1. 確認 canonical source、version、approval、Audience、Channels、locales、Campaign objective 與 primary CTA。
2. 用 `fetch`／`fetch_blob` 取得 exact source；用 `ask` 找 Brand、Channel、Localization、Claim 與 prior performance context。
3. 建立 Message invariant、adaptable elements、prohibited changes 與 channel constraint sheet。
4. 為每個 Channel 重新選擇 Hook、structure、proof depth、format、CTA 與 visual／accessibility requirements。
5. 交付完整 Channel pack、fidelity matrix、production notes 與 approval gaps；不發布。

## Core Instructions

### 1. Establish the canonical source

記錄 Source title、URL／ID、version、approved date、owner、language、primary Audience、core message、claims、proof、quote／consent、offer、CTA、expiry 與 required disclaimer。多份版本存在時先解析 canonical；無法判斷就列候選，不自行拼接。

### 2. Define message invariants

不得改變：

- Product／Brand／Feature official name。
- Capability、Availability、Price、Result、Customer quote 的 evidence scope。
- Legal／Privacy／Security qualifier 與 disclaimer intent。
- Offer eligibility、expiry、capacity、terms。
- Primary Campaign objective 與 conversion destination。
- Customer attribution、consent、translation approval requirement。

可調整：Hook、length、sequence、tone intensity、example、visual framing、hashtag／keyword、CTA phrasing、format 與 level of detail；但改寫後仍需回到 invariant。

### 3. Verify current channel constraints

Platform character、asset、link、hashtag、caption、accessibility、ad policy 與 placement 規格可能變動。使用者要求 exact upload-ready 規格時，必須從 current official platform source 或使用者提供的 approved spec 驗證並標注 observed date；無法驗證時使用 conservative draft，清楚標 `Platform validation required`，不硬編造限制。

### 4. Adapt by channel behavior

#### Website／Landing page

保留 search／ad message match、Hero clarity、proof、objection、CTA expectation、SEO metadata、accessibility 與 conversion path。

#### LinkedIn／professional social

以專業但有人味的觀點開場，建立 context、insight、evidence、implication 與 conversation CTA。不要把文章摘要貼成長段落；只使用少量真正相關 hashtag。

#### X／short-form thread

首則能獨立傳達 value；thread 每則推進一個 idea，保留 source links 與 claim qualifiers。不得為了簡短刪除必要限制。

#### Instagram／visual social

Visual-first caption、清楚 opening、scannable body、alt-text／caption brief、one CTA。Carousel 需提供 Slide-by-slide message，不把每張塞滿原文。

#### YouTube／short video

提供 Title、description、Hook、script／shot list、on-screen text、caption、thumbnail brief、chapters／timestamps（長影片）與 CTA。聲音、字幕與畫面 claim 必須一致。

#### Email

提供 Subject options、preview、one-message body、CTA、plain-text／mobile notes、footer／unsubscribe requirement。若是多封 sequence，交由 `email-nurture-campaign`。

#### Teams／community／partner channel

先說明對群體的 relevance，再提供 context、action、deadline、source link。內部 Channel 可有操作細節，但不可無意外洩 embargoed launch、Customer PII 或 confidential result。

#### PR／media

以 factual news angle、who／what／when／where／why、approved quote、availability、boilerplate 與 media contact 為主；不將 promotional social wording直接搬入。

### 5. Adapt by audience seniority and journey

- Executive：Outcome、strategic relevance、risk、decision、少量高價值 proof。
- Practitioner：Workflow、how-to、examples、implementation constraints。
- Technical／regulated audience：precision、architecture／control、source、qualification。
- Awareness：problem／insight 與 low-friction CTA。
- Consideration：comparison、proof、FAQ、demo／guide CTA。
- Decision：fit、risk、terms、implementation、contact CTA。

同一 Channel 若服務多個 Audience，建立分支版本，不用一篇同時對所有人說話。

### 6. Localize through transcreation

先建立 meaning map：Message、claim、proof、tone、CTA、terms、idiom、date／time、currency／unit、legal copy。翻譯後檢查：

- 意思與 claim scope 是否一致。
- Locale 常用表達、formality 與 reading flow。
- Product／Brand naming 是否保持官方格式。
- Example、metaphor、humor 是否需替換。
- 日期、數字、currency、measurement、link destination 是否適用。
- Disclaimer、privacy、consent、promotion terms 是否需 local review。

Customer quote 的翻譯不得稱為 verbatim；應標 `Translated from [language]` 並保留原文及 approval requirement。

### 7. Design visual and accessibility handoff

每個 visual asset brief 包含：Objective、Audience、core message、single focal point、required copy、proof／disclaimer、format／placement、safe area／crop requirement、alt text、caption／transcript、brand assets、prohibited imagery 與 source rights。不要生成假 UI、虛構 Customer logo 或無授權 image instruction。

### 8. Prevent cross-channel fatigue

建立 Publish sequence 與 message-variation matrix。相鄰 Touch 應提供新價值：Insight、proof、how-to、objection、customer story 或 action，不只換詞。重複 reach／frequency 資料不可取得時，標示為未知並提出 pacing review。

### 9. Verify fidelity

每個版本逐項比較 Source：Facts、claims、numbers、names、quote、offer、CTA destination、disclaimer、date、language、approval。任何新增主張都回到 source 或標 Candidate；Channel version 不可藉改寫擴大原 claim。

## Output Format

```markdown
# Channel Content Pack
## Source control and message invariants

## [Channel / locale / audience]
[完整可審閱版本]

### Production notes
- Format / visual / accessibility / link / validation

## Cross-channel publish sequence
| Window | Channel | Audience / stage | New value | CTA | Dependency | Approval |
|---|---|---|---|---|---|---|

## Fidelity and approval matrix
| Version | Claims | Quote / consent | Offer / CTA | Platform validation | Status |
|---|---|---|---|---|---|
```

## Work IQ Tool Rules

- `ask`：尋找 canonical content、Brand、Channel guideline、Campaign 與 prior performance context。
- `search_paths`、`get_schema`、`fetch`、`fetch_blob`：驗證 source version、內容、claim、metadata 與 approval。
- 保持 Draft-only；不使用 `do_action` 發布、寄送或張貼，也不建立外部平台 asset。

## Examples

**User:**「把這份白皮書改成 LinkedIn、Email 和 30 秒短影音。」

**Correct behavior:** 建立 shared message invariant，分別提供完整 LinkedIn post、Email 與 timestamped video script；每個版本有不同 Hook／proof depth／CTA，但不新增白皮書沒有的數字。

## Guardrails

- 不捏造平台限制、performance benchmark、hashtag trend、Audience preference 或 localization approval。
- 不在縮短時刪除必要 qualifier、disclaimer 或 consent attribution。
- 不將翻譯 quote 表示成原文，不將 Draft source 表示成 approved content。
- 不直接發布、排程、寄送、建立 Ads 或使用未核准 Audience。
- 不使用 fake urgency、engagement bait、misleading thumbnail 或 dark pattern。

## Common Issues

| Issue | Cause | Fix |
|---|---|---|
| 所有版本只是截短 | 未按 Channel behavior 重構 | 重選 Hook、proof、format 與 CTA。 |
| Claim 在短版被放大 | qualifier 被刪除 | 恢復必要限制或不用該 claim。 |
| 平台字數過期 | 使用記憶中的規格 | current official validation 或標需驗證。 |
| 翻譯很直但不自然 | 逐字翻譯 | 以 meaning map 做 transcreation。 |
| Audience 疲勞 | 每個 touch 都講同一件事 | 設計新 value sequence 與 pacing。 |
