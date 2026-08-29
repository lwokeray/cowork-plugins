---
name: email-nurture-campaign
description: >-
  設計具完整文案、Audience eligibility、Consent、Timing、Narrative arc、Branch、Suppression、Exit、CTA、Measurement 與 Approval 的 Marketing Email sequence，適用於 Newsletter、Onboarding、Nurture、Event、Launch、Re-engagement 與 Win-back。
  不適用於未核准名單、Mass send、購買名單、猜測 Email、無限自動化或以 Outlook 取代正式 Marketing automation platform。
metadata:
  author: lwokeray
  version: "1.0.0"
---

# Email Nurture Campaign

## Overview

建立可以交給 Email／Marketing automation owner 實作的完整 Lifecycle Email plan 與全文，不只列 Subject line。每封 Email 有明確 Purpose、Audience condition、Trigger、Timing、Message、Proof、CTA、Suppression、Exit 與 measurement。Consent、frequency、unsubscribe、privacy、deliverability 與 Channel ownership 是設計前提，不是寄送後補上的檢查。

## When to Use

- Newsletter、Lead nurture、Onboarding、Education drip、Product launch、Event reminder／follow-up。
- Re-engagement、Win-back、Adoption、Retention 或 Upgrade education。
- 設計 multi-email narrative、branching、exit／suppression 與 A/B hypothesis。
- 重寫表現不佳的 sequence，連結實際 performance 與 Customer feedback。
- 建立 internal review pack、test-send copy 或 platform implementation spec。

## When NOT to Use

- 未經同意的大量 Cold outreach、購買／爬取名單或敏感 Audience targeting。
- 猜測、拼接或推導收件者 Email address。
- 使用個人 Outlook Mailbox 當 mass marketing system。
- 無上限、無停止條件、無人監督的持續 sequence。
- 單封 Sales follow-up、Customer service notification 或 transactional system email。

## Quick Start

1. 確認 Sequence type、goal、Audience、lifecycle stage、entry trigger、consent basis、frequency、offer、CTA、brand、locale 與 platform owner。
2. 用 `ask` 尋找 approved Brand／Claim、Audience definition、prior sequence、Campaign assets、suppression rules 與 performance；用 `fetch`／`fetch_blob` 驗證。
3. 先設計 Narrative arc、Email roles、branch／exit／suppression，再撰寫每封完整 copy。
4. 建立 measurement、test、deliverability、privacy、QA 與 implementation table。
5. 預設只交付 review-ready sequence；不得發送或匯入 Audience。若要求建立 internal review draft，需逐封 Preview 與核准。

## Core Instructions

### 1. Establish audience eligibility

每個 Sequence 必須記錄：

- Audience definition、source、region／locale 與 lifecycle stage。
- Consent／lawful basis status、communication preference、subscription topic。
- Entry trigger、trigger source、data freshness、re-entry rule。
- Exclusions：unsubscribe、hard bounce、complaint、employee／test account、customer status、support incident、active sales／service motion、sensitive context。
- Frequency cap、quiet period、timezone／send-window rule。
- Suppression owner 與 source-of-truth。

沒有 consent／preference evidence 時，只能設計 sequence，不得產生 recipient list 或執行 send。Public business email、event attendee、website visitor 或職稱都不自動等同 Marketing consent。

### 2. Define one sequence outcome

明確定義 Audience 完成哪個行動後 Sequence 成功並退出，例如完成 onboarding step、註冊 Event、下載 guide 後進入下一 lifecycle、回到產品、更新 preference。避免一個 Sequence 同時要求閱讀、預約、購買、分享與填問卷。

Primary KPI 必須對應 outcome；Open rate 只能做 subject／deliverability 的不完整訊號，且受 privacy protection 影響，不作最終 conversion 指標。

### 3. Build the narrative arc

先決定每封 Email 的獨立角色：

1. Orientation／expectation。
2. Problem／insight。
3. Value／mechanism。
4. Proof／objection handling。
5. Decision／action。
6. Reminder／last useful value，不使用假 urgency。

Email 數量依 Audience need、decision complexity、available proof、frequency cap 與 deadline 決定；不套固定封數。每封需提供新資訊，不只換 Subject 重複催促。

### 4. Design flow control

建立：

- Entry：明確事件與 eligibility。
- Delay：從 trigger 或前一封計算，含 timezone。
- Branch：依有意義 behavior／attribute；tracking 不可靠時不要過度分支。
- Exit：conversion、reply、registration、unsubscribe、complaint、status change、manual owner removal。
- Suppression：同時有其他 Campaign、近期 Support／incident、sensitive state、frequency cap、legal hold。
- Re-entry：最短間隔、重新符合條件及最大次數。

分支只在不同訊息真的有價值時使用。Open 未必可信；Click、completed action 或 verified lifecycle state 通常比 Open 更適合作為 flow condition。

### 5. Draft each complete email

每封 Email 交付：

- Sequence position、purpose、entry／skip condition、timing。
- 三個 Subject options，各自標示 test angle，不寫保證 performance 的理由。
- Preview text，補充而非重複 Subject。
- From-name／reply-path requirement，不捏造 sender。
- Greeting／personalization tokens，只使用可用且必要欄位。
- 完整 Body：Hook、Value、Proof／context、one primary CTA、expectation。
- Primary CTA button text、destination、post-click expectation。
- Necessary secondary link，例如 preference／support；不可搶走 primary CTA。
- Footer、identity、subscription topic、unsubscribe／preference reminder。
- Plain-text／mobile／accessibility notes。

Personalization 必須有安全 fallback，不能把缺值顯示為 token。不得使用敏感資料、support issue、private meeting、inferred pain 或讓收件人感到被監控的 behavior detail。

### 6. Design by sequence type

- Newsletter：清楚 editorial promise、有限 content blocks、primary feature、topic preference。
- Onboarding：以完成第一個價值行動為主，依實際 activation state 退出。
- Lead nurture：回答 Journey questions，逐步增加 proof；不能把 MQL 假設成購買意圖。
- Event：Registration confirmation、value reminder、logistics、last practical reminder、follow-up；交易性與 Marketing consent 分開。
- Launch：Teaser 只在 embargo／availability 核准後使用；Announcement、use case、proof、availability、next action。
- Re-engagement／Win-back：提供新的實質價值與 preference choice，不 guilt、shame 或 hidden opt-out。

### 7. Plan tests correctly

每次 Test 只變更一個主要因素：Subject angle、sender display、CTA wording、message order、offer 或 timing。預先定義 Hypothesis、primary metric、guardrail、sample、duration、decision rule 與 segmentation。詳盡統計設計交由 `marketing-experiment-design`。

不要在看到初期波動時停止，不把多個變體中偶然最高者稱 Winner，也不使用 Open-only 結果宣稱 Revenue impact。

### 8. Define measurement and deliverability

Measurement table 包含：Delivered、bounce、complaint、unsubscribe、unique click、landing action、conversion、time-to-action、segment／cohort、incremental test（若有）。保留 formula、source、window、attribution、privacy limitation 與 target／learning threshold。

Deliverability QA：permission、sender／domain readiness owner、suppression、frequency、content reputation risk、link／redirect、tracking、plain text、image／alt text、test accounts、mobile rendering。Skill 不宣稱 SPF／DKIM／DMARC 等 technical state 已通過，除非有直接證據。

### 9. Separate review artifacts from sending

Cowork／Work IQ 可建立 Outlook draft 或 action，但不得用來代替正式 Campaign platform。若使用者要求 internal reviewer test：

1. 唯一解析具名 internal recipient，絕不猜 Email。
2. 顯示 Subject、Body、links、attachments、sender、recipient、time、purpose。
3. 每封／每個 recipient 分開核准。
4. 僅使用 runtime 公開的 `create_entity`／`do_action` path；policy denial 後停止。
5. 以 `fetch` 驗證 draft／send result，避免重複。

對 Marketing Audience 的 bulk upload／send 永遠保持 `Implementation handoff`，不由本 Skill 執行。

## Output Format

```markdown
# Email Nurture Campaign
## Sequence control
- Goal / audience / consent / trigger / exit / suppression / frequency / owner

## Flow
| Step | Entry / skip condition | Delay | Purpose | CTA | Exit / next branch |
|---|---|---|---|---|---|

## Email 1 — [Purpose]
### Subject options
### Preview text
### Full body
### CTA / destination / fallback
### Timing / conditions / QA

## Measurement and test plan
## Deliverability, privacy, and implementation checklist
## Approvals and unknowns
```

## Work IQ Tool Rules

- `ask`：尋找 Audience、Brand、Campaign、prior Email、performance、consent policy 與 assets。
- `search_paths`、`get_schema`、`fetch`、`fetch_blob`：驗證 sources 與 internal reviewer identity／draft state。
- `create_entity`／`do_action`：只限使用者明確要求的具名 internal review draft／test，完整 Preview 與逐項核准。
- 不 bulk send、不匯入 Audience、不建立 recurring automation。

## Examples

**User:**「設計活動報名後的四封 Email。」

**Correct behavior:** 建立 transactional／marketing boundary、entry／exit／suppression、完整四封文案、timing、CTA、registration status branch、measurement 與 implementation spec；不直接把活動名單交給 Outlook 群發。

## Guardrails

- 不購買、抓取、推導或猜測 Email／Audience，不將公開地址視為 consent。
- 不隱藏 unsubscribe、不用 guilt、fake urgency、deceptive subject 或 sensitive personalization。
- 不捏造 performance benchmark、sender readiness、consent、customer status 或 approved offer。
- 不用個人 Outlook 執行 Marketing bulk send，不預先核准未來每封寄送。
- Reply、unsubscribe、complaint、conversion 或 sensitive status 出現時必須退出／suppression。

## Common Issues

| Issue | Cause | Fix |
|---|---|---|
| 每封信都在催同一 CTA | 沒有 narrative arc | 每封提供新問題、proof 或價值。 |
| Open 高卻無 conversion | 把 Open 當 outcome | 回到 click／action／incremental metric。 |
| 分支太複雜 | 使用不可靠 tracking | 只保留會改變內容的高信心 condition。 |
| 名單來源不明 | 沒有 eligibility／consent | 保持設計稿，不執行 send。 |
| Test 一次改很多 | 無法歸因 | 每次只測一個主要變數。 |
