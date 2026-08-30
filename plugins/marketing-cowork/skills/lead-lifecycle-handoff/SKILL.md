---
name: lead-lifecycle-handoff
description: 將 Marketing response、Event／Content／Form engagement 或 approved lead export整理為具 Consent、Identity、Dedupe、Source、Attribution、Qualification、Score evidence、Routing、SLA、Sales acceptance、Feedback與Privacy的 Lead lifecycle handoff。 適用於 MQL definition、lead quality、handoff pack與closed-loop feedback；不適用於購買名單、猜測聯絡資料、敏感 profiling、無證據自動標 MQL／SQL或直接進行 Sales outreach。
metadata:
  author: lwokeray
  version: 1.0.1
license: MIT
---

# Lead Lifecycle Handoff

## Overview

建立 Marketing 到 Sales／Partner／Customer success 的可追溯 handoff。Engagement不是購買意圖，Lead score不是事實，MQL不是終點；每筆 handoff需能回答「這個人／組織是誰、為何可處理、做了什麼、符合哪個 definition、哪個 Owner接手、何時回覆、如何回饋、哪些資料不能使用」。

## When to Use

- 建立／更新 Lead、Inquiry、MQL、PQL-like signal、Event follow-up或 Campaign response的 qualification與 handoff。
- 設計 MQL definition、score model、routing、SLA、accept／reject reason與 recycle path。
- 整理 approved Excel／SharePoint lead register、Forms／Event export與 Campaign attribution。
- 檢查 duplicate、identity／account match、consent、lifecycle conflict與 active owner。
- 分析 Marketing-to-Sales acceptance、lead quality與 feedback loop。

## When NOT to Use

- 購買、抓取、enrich或猜測個人 Email／phone／job title。
- 從姓名、照片、語言、社群或 location推定敏感屬性。
- 將 Click、Download、Registration、Attendance或 open直接標成 MQL／SQL。
- 直接寄 Sales outreach、建立 Opportunity、承諾跟進或寫入未核准 CRM。
- 在沒有 approved lifecycle definition時自行設 Business status。

## Quick Start

1. 確認 Lead source、Campaign、Audience、consent／privacy、approved lifecycle／MQL definition、routing owner、SLA與 destination system／register。
2. 用 `ask` 尋找 forms／event／campaign／lead files、definitions、owners、active motions、accept／reject feedback與 policy；以 `fetch`／`fetch_blob`驗證。
3. 解析 identity、dedupe、account／owner、eligibility、behavior／fit evidence、consent、source與 freshness。
4. 依 approved rule產出 `Handoff-ready／Needs enrichment from owner／Recycle／Suppress／Route elsewhere／Blocked`，保留理由與 unknown。
5. 交付 preview pack與 feedback plan；任何 register／task update交由 `marketing-work-management`逐項核准。

## Core Instructions

### 1. Establish authoritative definitions

先取得：Lifecycle stages、MQL／accepted lead definition、required fields、score／threshold、routing hierarchy、SLA、rejection／recycle reasons、suppression、consent／retention、owner與 source-of-truth version。

沒有 approved definition時，只能做 Evidence brief與 proposed framework，不能將人員標成正式 MQL／SQL。SQL／Opportunity通常由 Sales或 authoritative CRM／process決定，Marketing evidence不能覆蓋。

### 2. Validate identity without guessing

建立 stable identifiers：Source record ID、explicit Email／phone（只使用合法提供）、person／organization name、company domain、account ID、campaign／event／form ID。絕不拼接或猜 Email；同名需用 additional verified fields解析。

Dedupe規則依 canonical system：exact stable ID／normalized permitted contact、approved matching、existing lead／contact／account、open owner／opportunity、recent handoff。Fuzzy match只產生 `Possible duplicate`，需 human review。

### 3. Preserve provenance and consent

每筆記錄保存：Original source、collected date、purpose、consent／preference、privacy notice version、partner／third-party sharing、region、retention／expiry、campaign touch、UTM／source taxonomy與 evidence link。

Event logistics consent、transactional contact、support communication與 general Marketing consent分開。Unsubscribe／complaint／do-not-contact／sensitive support state需 suppression，不能因 high score繞過。

### 4. Separate fit, behavior, and intent

- Fit：符合 approved company／role／use-case criteria，但不是意圖。
- Behavior：完成某 action，例如 form、event、content、product action；需 event與 freshness。
- Expressed intent：明確要求 demo／contact／quote／follow-up；仍需 identity與 consent／routing。
- Negative／risk：unsubscribe、complaint、student／vendor／competitor／employee、fraud／test、ineligible region、existing support issue。

Score table每項需有 Evidence、Weight／rule、freshness、cap／decay、reason。不要用 Email open、job title或單一 download給過高權重。Model score需能解釋，不把機器分數表示為 Customer truth。

### 5. Qualify against the approved gate

Handoff-ready至少需：

- Unique identity／organization足夠且非 unresolved duplicate。
- Source／Campaign／date／consent／preference可追溯。
- 符合 explicit MQL／handoff rule，有具体 fit／behavior／intent evidence。
- 未命中 suppression／privacy／regional／status conflict。
- Existing owner／account／opportunity已檢查，避免 parallel outreach。
- Routing owner與 SLA可解析。
- Handoff summary含 Customer language／action，不加入推測。

缺少非關鍵欄位但可由 Owner在 first contact確認時，標 `Handoff-ready with gap`；缺 identity、consent、duplicate、owner或 qualification evidence時不可強行 handoff。

### 6. Route by ownership and context

Routing hierarchy優先：Existing Account／Opportunity owner → explicit territory／segment／product rule → Partner／Customer success／Support path → queue／human triage。Existing relationship優先，避免同一公司多組人同時聯繫。

Routing需列 Owner、backup、accepted channel、SLA start／stop、timezone、required context與 escalation。Private Customer／employee information只給完成工作所需的 owner。

### 7. Create a seller-ready handoff

Handoff內容：

- Person／company identifiers與 confidence。
- What happened：exact behavior／request、date、source。
- Why routed：approved rule與 score evidence。
- Customer／prospect language：逐字 quote only if source supports；否則 paraphrase。
- Relevant Campaign／content／event、consent／preference。
- Existing account／owner／opportunity／recent touch status。
- Suggested next action：不代替 seller decision，不捏造 personalization。
- Required response time、gap、suppression／privacy note。

### 8. Design feedback loop

Sales／owner回覆狀態至少：Accepted、Rejected—reason、Duplicate、Existing motion、Not ready／Recycle、Wrong route、Invalid／test、Do not contact、Converted／Opportunity（由 authoritative system）。每個 reason定義、owner、timestamp與 next state。

Marketing review：Acceptance rate、time-to-accept、first-action SLA、reject reasons、duplicate rate、consent／data issue、MQL-to-next-stage lag與 Campaign／segment quality。不要因 Sales未即時接受就自行更改 business status。

### 9. Handle recycle and suppression

Recycle需有 reason、next eligible date／trigger、allowed content topic、frequency、owner與 expiry；不是無限 nurture。Suppression需有 source、scope、effective date與 irreversible／review rule。Sensitive／complaint／do-not-contact優先於 score或 Campaign target。

### 10. Keep writeback gated

本 Skill產出 handoff pack與 proposed register changes。若要求寫入，交由 `marketing-work-management`：先 schema discovery、duplicate check、exact diff、per-record preview、approval、idempotency與 result verification。不要在本 Skill直接寄信、建 Opportunity或 mass update lifecycle。

## Output Format

```markdown
# Lead Lifecycle Handoff Review
## Definition, source, consent, and data confidence
## Handoff-ready
| Person / company | Source / action | Qualification evidence | Consent / suppression | Existing owner / motion | Route / SLA | Gaps |

## Recycle / suppress / duplicate / blocked
| Record | State | Reason | Next eligible action | Owner |

## Seller-ready handoff briefs
## Proposed register changes — Preview only
## Feedback loop and quality metrics
## Unknowns and decisions
```

## Work IQ Tool Rules

- `ask`：尋找 Campaign／event／form／lead sources、definitions、owners、existing motions與 feedback。
- `search_paths`、`get_schema`、`fetch`、`fetch_blob`：驗證 records、workbooks、lists、messages、files、status與 schemas。
- Read／preview only；寫入、Task、internal notification交由 `marketing-work-management`。

## Examples

**User:**「把 Webinar attendees整理成 MQL交給 Sales。」

**Correct behavior:** 先檢查 registration／attendance／engagement、consent、approved MQL rule、duplicate、existing owner與 explicit intent；不把所有 attendees直接標 MQL，分出 handoff、recycle、suppress與 blocked。

## Guardrails

- 不購買、抓取、猜測或補造 contact data，不推定敏感屬性。
- 不把 engagement、score、public profile或 job title直接視為 intent／MQL／SQL。
- 不繞過 unsubscribe、complaint、consent、privacy、retention或 owner conflict。
- 不直接 Sales outreach、建 Opportunity、mass update或變更 authoritative status。
- 不洩露 personal／Customer data給非必要 recipient。

## Common Issues

| Issue | Cause | Fix |
|---|---|---|
| Event名單全變 MQL | Attendance被當 intent | 使用 approved fit／behavior／intent gate。 |
| 同一公司多人收到聯繫 | 未檢查 account／owner／motion | Dedupe並優先 existing owner。 |
| Score很高但無法解釋 | 黑箱／過度權重 | 列每項 evidence、weight與 freshness。 |
| Consent被過度擴大 | Event／transactional混 Marketing | 分開 purpose與 preference。 |
| Sales不回饋 | 無 reason taxonomy／SLA | 建 closed-loop feedback states。 |
