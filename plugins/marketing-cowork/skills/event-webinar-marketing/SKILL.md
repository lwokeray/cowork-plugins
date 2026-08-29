---
name: event-webinar-marketing
description: 規劃企業 Event、Webinar、Workshop、Conference 或 Roundtable 的 Audience、Value proposition、Registration、Promotion、Speaker／Content、Calendar、Reminder、Live engagement、Follow-up、Lead treatment 與 Measurement。 適用於完整 Event marketing lifecycle；不適用於未核准大規模邀請、直接建立公開活動頁、猜測與會者或自動將出席者視為 Sales lead。
metadata:
  author: lwokeray
  version: 1.0.1
license: MIT
---

# Event and Webinar Marketing

## Overview

建立從 Event purpose 到 Post-event learning 的完整 Marketing plan。Event success 不只看 Registrations；需同時設計 qualified audience、attendance、engagement、content value、follow-up action、consent、capacity、speaker readiness、operational dependency 與 attribution limits。

## When to Use

- Webinar、Workshop、Executive roundtable、Conference session、Partner event 或 Customer community activity。
- 建立 Event brief、Audience／invite plan、registration copy、reminder sequence 與 follow-up。
- 規劃 Speaker／Moderator、Agenda、Content asset、poll／Q&A 與 repurposing。
- 檢查 Event readiness、capacity、calendar conflicts、approval 與 contingency。
- 建立 Event performance／learning framework 與 lead handoff criteria。

## When NOT to Use

- 單純排一場內部會議；使用一般 Calendar scheduling。
- 未核准名單的 bulk invitation 或 cold outreach。
- 將 Registrant／Attendee 自動標成 MQL、SQL 或 consented marketing contact。
- 直接建立外部 Registration platform、付款頁、直播或社群發布。
- 把 Calendar attendance 當作完整 Event engagement／business impact。

## Quick Start

1. 確認 Event type、business purpose、Audience、format、date／timezone、capacity、region／language、platform、budget、speakers 與 decision owners。
2. 用 `ask` 尋找 prior Event learning、Audience research、Campaign、Brand／Claim、Speaker material、Calendar、venue／platform notes 與 follow-up commitments。
3. 用 `fetch`／`fetch_blob` 驗證日期、speaker、agenda、asset、approval、consent、capacity 與 source version。
4. 建立 Value proposition、Registration journey、Promotion、Content／Run-of-show、Reminder、Follow-up、Lead／consent treatment、measurement 與 contingency。
5. 交付完整 Event marketing pack；任何 Calendar／Email action 需具名 recipient、完整 Preview、逐項核准且不能代替 mass Event platform。

## Core Instructions

### 1. Define Event success

Event brief 必須包含：Purpose、Audience job、one-sentence value、format、date／time／timezone、duration、capacity、location／platform owner、primary action after Event、budget status、owners、approvers、recording／content rights、privacy／consent status。

依 Event type選 primary success：

- Education：qualified attendance、engaged consumption、knowledge／next action。
- Demand：qualified registration-to-attendance、meaningful follow-up action，而非 raw registrations。
- Executive roundtable：right-person attendance、quality discussion、approved next step；避免以大量名單為目標。
- Community／Customer：participation、feedback、retention／advocacy signal，需 separate consent。

### 2. Build the audience and invitation policy

定義：Inclusion、exclusion、priority segment、role／need、region、capacity、consent／invitation basis、frequency cap、VIP／accessibility／language needs。Partner-provided list、old Event list 或 public profile 不能自動成為可行銷名單。

Invite message 要說清楚：為何適合對方、會得到什麼、format／time、speaker、privacy／recording、registration action、capacity／deadline（若真實）與 contact。不同 Audience segment 需要不同 relevance，不用虛構 personalization。

### 3. Design registration journey

建立 Touchpoint：Announcement／invite → Registration page → Confirmation → Calendar／preparation → Reminder → Attendance → Follow-up／content。每一步列 Content、Owner、data collected、purpose、consent、CTA、failure／fallback 與 measurement event。

Registration form 只蒐集完成 Event 與核准後續所需的最少資料；Marketing consent 不可隱藏在 Event logistics 同意中。Recording／photography／Q&A use、data sharing with partner 與 communication preference 分開說明。

### 4. Build agenda and content architecture

Agenda 需從 Audience question 出發，每段包含：Outcome、speaker／owner、format、time、proof／asset、interaction、transition、backup。避免把 Event 變成連續 Product pitch。

Event content pack：Title／abstract、speaker bio、moderator brief、run-of-show、slides／demo、poll／Q&A、accessibility、recording／caption、support／incident path、closing CTA、follow-up asset、repurposing rights。Speaker quote、Customer logo、case result 與 recording 需明確 approval。

### 5. Plan promotion and reminders

每個 Channel 有 Audience role、message、CTA、timing、owner、capacity／frequency、metric。Reminder 提供新的 practical value：Agenda update、speaker insight、preparation、calendar／timezone、accessibility，而不是單純重複「不要錯過」。

Email 需要 sequence 時套用 `email-nurture-campaign` 原則；Social／channel copy 可用 `channel-content-adaptation`。本 Skill 負責 Event lifecycle 與 consistency。

### 6. Manage Calendar and named invitations safely

內部 planning meeting、speaker rehearsal 或已明確同意的具名 participant invite 可透過 Work IQ 處理：

1. 驗證唯一 person／address，絕不猜 Email。
2. 檢查 timezone、availability、required／optional role 與 private conflicts。
3. 顯示 event title、purpose、agenda、attendees、time、timezone、location／link、body。
4. 建立／更新／取消分開核准；Recurring scope 必須明確。
5. 以 `fetch` 驗證結果。

Marketing bulk invitations、registration list 與 public Event 建立不得透過個人 Calendar 取代正式平台。

### 7. Design live engagement and contingency

規劃 Host、Moderator、Producer、Speaker、Q&A／poll、timekeeping、caption／interpretation、recording、support、privacy escalation、backup speaker／deck／link、incident message、cancellation／reschedule communication 與 decision owner。

Contingency trigger 需具體：speaker unavailable、platform outage、capacity reached、low registration、regional incident、claim／content blocked。每項有 Decision deadline、fallback、affected Audience 與 communication owner。

### 8. Design post-event follow-up

依狀態分支：Attended／No-show／Registered-late-cancel／Speaker／Partner／Internal team。每個 follow-up 有 one purpose、value、CTA、content rights、consent／suppression 與 timing。

Event question、poll、chat、meeting request 與 attendance 是不同 signal。只有符合 approved qualification 且經必要 owner review者才進 lead handoff；support／privacy／complaint 需走正確路徑，不作 Marketing nurture。

### 9. Measure honestly

Measurement 至少包含：Eligible audience、delivery／reach、registrations、qualified registrations、attendance、engagement、CTA／follow-up action、lead acceptance（若有）、content reuse、cost、feedback、data gaps。計算 Registration rate、Attendance rate、Engagement rate 時保留 denominator definition。

Attendance 或 calendar acceptance 不等於觀看全程；Event-influenced pipeline 不等於 Event-caused revenue。無 control／Attribution evidence 時使用 directional language。

## Output Format

```markdown
# Event Marketing Plan
## Event control and success definition
## Audience, invitation, consent, and capacity
## Registration journey
## Agenda, speakers, and content pack
## Promotion and reminder plan
## Run-of-show and contingency
## Follow-up branches and lead treatment
## Measurement and attribution
## Timeline, owners, dependencies, and approvals
## Complete copy pack
```

## Work IQ Tool Rules

- `ask`：尋找 prior events、meetings、files、Campaign、Audience、speaker、Calendar 與 learning。
- `search_paths`、`get_schema`、`fetch`、`fetch_blob`：驗證 entities、files、versions、people 與 dates。
- `create_entity`／`update_entity`／`do_action`：只處理具名 internal planning 或已同意 participant 的有限 Calendar／review action，完整 Preview 與核准。
- 不 bulk invite、不建立 public registration／broadcast、不上傳 Audience。

## Examples

**User:**「規劃 200 人 AI security webinar。」

**Correct behavior:** 建立 qualified Audience、capacity、consent-separated registration、agenda、speaker／content、promotion、reminders、live engagement、follow-up、measurement 與 contingency；不把 200 個 Email 丟進 Calendar 邀請。

## Guardrails

- 不猜測 participant、Email、consent、attendance、speaker commitment、capacity 或 platform readiness。
- 不將 Event registration 同意擴大為所有 Marketing communication 同意。
- 不以 raw registrations 宣稱 success，不以 attendance 宣稱 pipeline／revenue impact。
- 不寄 bulk invite、建立 public Event、發布、錄影或分享 attendee data。
- 不暴露 private Calendar、Q&A、health／accessibility need 或 confidential Customer content。
- Speaker、capacity、consent、platform 或 availability 沒有證據時標示 `未知`，並把它保留在 readiness gate。

## Common Issues

| Issue | Cause | Fix |
|---|---|---|
| Registration 高、Attendance 低 | Value／reminder／timing 不匹配 | 分析 qualified audience、no-show reason 與 reminder value。 |
| 活動像 Product pitch | Agenda 未從 Audience questions 出發 | 加 education、proof、discussion 與 balanced CTA。 |
| Follow-up 全部一樣 | 未依 attendance／engagement 分支 | 建 state-based follow-up。 |
| Attendee 直接進 Sales | 無 qualification／consent | 使用 `lead-lifecycle-handoff` gate。 |
| Calendar 洩露資料 | 大量外部 recipient／private fields | 使用正式 Event platform 與最小資料。 |
