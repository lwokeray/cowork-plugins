---
name: brand-strategy-governance
description: 建立、整併或更新企業 Brand voice、Audience promise、Messaging pillars、Tone spectrum、Terminology、Product naming、Approved claims 與使用規則，並以 Microsoft 365 核准資料維持版本治理。 適用於 Brand system、Messaging framework、Style guide 與 Claim library；不適用於單篇內容審稿、Logo 視覺設計、商標法律判定或未核准發布。
metadata:
  author: lwokeray
  version: 1.0.1
license: MIT
---

# Brand Strategy and Governance

## Overview

將分散的 Brand deck、產品訊息、Writing guide、Legal rule、Customer proof 與實際內容整合為可執行且可維護的 Brand communication system。輸出不只是形容詞清單，而是明確定義「怎麼寫、不能怎麼寫、在哪些情境調整、哪些 Claim 可用、誰核准、何時失效」。

## When to Use

- 建立或更新 Brand voice、Tone、Style、Messaging pillar 與 Value proposition。
- 整併不同 Business unit、Product、Region 或 Agency 的 Brand guideline。
- 建立 preferred／avoided terminology、Product naming 與 acronym rule。
- 建立 Approved claim／Proof library、usage condition 與 review date。
- 準備 Rebrand、Product launch 或多 Channel content 的治理基準。

## When NOT to Use

- 審查一篇既有內容 → `brand-content-review`
- 撰寫 Campaign／Landing page／Email → `marketing-content-creation`
- 設計 Logo、Visual identity、圖像資產或 Figma system。
- 提供 Trademark、Advertising law 或 Regulatory 的最終法律判定。
- 未經核准直接覆寫 Brand source-of-truth。

## Quick Start

1. 確認 Brand／Product／Region、使用者、語言、Channels、Owner 與現有 source-of-truth。
2. 用 `ask` 尋找 Brand guideline、Messaging deck、Product naming、approved claims、Legal guidance 與高品質內容範例。
3. 以 `fetch`／`fetch_blob` 驗證版本、approval、effective date、source owner 與內容。
4. 建立 Brand core、Voice attributes、Tone matrix、Messaging hierarchy、Terminology、Claims、Examples 與 Governance workflow。
5. 如需儲存，先顯示完整 destination、baseline、diff 與 approval；核准後才使用支援的 `create_entity`／`update_entity`，並以 `fetch` 驗證。

## Core Instructions

### 1. Resolve the authority model

找出：

- Canonical Brand owner 與 approvers。
- Source-of-truth location、version、effective date、review date。
- Corporate、Product、Campaign、Regional guideline 的優先順序。
- Legal／Privacy／Accessibility／Localization 的必要 review。
- 哪些規則是 Required、Preferred、Contextual 或 Deprecated。

同名指南衝突時，不自行選擇對使用者最方便的版本。以明確 approval、適用範圍與 effective date 排序；無法判斷時保留 conflict table，等待 Brand owner 決策。

### 2. Define the Brand core

Brand core 至少包含：

1. Audience：服務誰、他們的 Need／context／expertise。
2. Promise：品牌持續提供的結果或 experience，不是短期 Campaign slogan。
3. Category／frame：希望 Audience 如何理解這個領域。
4. Differentiation：有 proof 的差異，不用「innovative／leading」填補。
5. Values in communication：哪些價值會實際改變文字與行為。
6. Boundaries：品牌不是什麼、不能承諾什麼。

### 3. Document voice attributes

選三至五個 attribute，每個使用固定格式：

```markdown
### [Attribute]
- We are: [可觀察的寫作行為]
- We are not: [常見誤解]
- This sounds like: [合格例句]
- This does not sound like: [不合格例句]
- Evidence / source: [核准來源]
```

避免只有「專業、創新、可信」等無法執行的形容詞。每個 attribute 必須能讓 Writer 判斷句子是否合格。

### 4. Build a tone matrix

Voice 保持一致，Tone 依情境調整。至少涵蓋：

| Context | Audience need | Tone adjustment | Must include | Avoid |
|---|---|---|---|---|
| Product launch | 清楚理解價值與適用條件 | Confident、specific | Proof、availability | Hype、unapproved roadmap |
| Incident／bad news | 真實狀態與下一步 | Transparent、empathetic | Impact、owner、next update | Blame、promotion |
| Thought leadership | 有洞察與證據 | Authoritative、nuanced | Sources、limitations | Absolute prediction |
| Customer story | Customer-first recognition | Specific、respectful | Consent、measured outcome | 我方搶功、未核准數字 |
| CTA／conversion | 低 friction 的下一步 | Direct、helpful | Expected next step | Fake urgency |

依實際 Channel 加入 Email、Website、Social、PR、Event、Sales collateral 或 Support handoff。

### 5. Create messaging hierarchy

對每個 Audience／Use case 建立：

- Audience problem／desired outcome。
- Core message：一句話。
- Supporting pillars：三至五個，不互相重疊。
- Proof points：source、scope、date、usage condition。
- Objections／qualification：適用與不適用情境。
- CTA：符合 Journey stage 的下一步。

Message 必須從 Audience outcome 出發；Feature 只有在能解釋 outcome 且有必要前提時出現。

### 6. Govern terminology and naming

Terminology table 包含：

| Use | Avoid / deprecated | Meaning | Audience | Capitalization | First-use rule | Owner |
|---|---|---|---|---|---|---|

對 Product／Feature name 保留官方大小寫、版本、縮寫、商標符號規則與 approved shorthand。翻譯時避免逐字造成 Category meaning 改變；Regional variant 必須保留 local owner 與 approved date。

### 7. Build the Claim library

每項 Claim 必須包含：

- Claim text 與 approved variants。
- Claim type：Capability、Outcome、Comparative、Performance、Customer、Compliance。
- Evidence source、measurement definition、population、period、geography。
- Allowed channels／audiences／regions。
- Required qualifier、disclaimer 或 attribution。
- Owner、approval status、approved date、expiry／review date。
- Prohibited extrapolation。

沒有證據或 approval 的句子放入 `Candidate claims`，不可標為 Approved。Certification、Security、Privacy、Sustainability 與 regulated claim 需要對應 Owner review。

### 8. Write examples and tests

至少為下列情境提供 Before／After：Headline、Value proposition、Technical statement、Executive statement、CTA、Competitive comparison、Bad news。例句必須使用真實 approved terminology；沒有事實資料時用清楚 placeholder，不能虛構 Customer 或數字。

### 9. Save safely when requested

儲存前顯示：Destination、baseline version、new version、section-level diff、approvers、effective date。Create／Update 前使用 `search_paths`、`get_schema` 發現支援操作；逐項核准後才執行。更新後用 `fetch` 驗證 version、URL／ID 與內容 metadata。若只支援建立草稿，就明確標示 `Draft—not approved`。

## Output Format

```markdown
# Brand Communication System

## Document control
## Brand core
## Voice attributes
## Tone matrix
## Messaging hierarchy by audience
## Terminology and product naming
## Approved claim library
## Candidate / prohibited claims
## Channel and localization rules
## Before / after examples
## Governance and approval workflow
## Conflicts, unknowns, and review schedule
```

## Work IQ Tool Rules

- `ask`：發現 Brand、Product、Legal、Localization 與 Claim sources。
- `search_paths`、`get_schema`：確認 source 與 destination 的 path/schema。
- `fetch`、`fetch_blob`：驗證版本、approval、metadata 與 guideline 內容。
- `create_entity`／`update_entity`：只有使用者要求儲存、runtime 支援且 Preview 核准後使用。
- 不使用 `do_action` 發布 Brand guideline，也不刪除舊版 source-of-truth。

## Examples

**User:**「把三份不同的 Brand guide 整併成正式版本。」

**Correct behavior:** 先確認三份的 scope、owner、approval 與 effective date，建立 conflict table；產出整併草案與 section diff，不自行宣布正式生效。

## Guardrails

- 不捏造 Brand principle、approved claim、Customer proof、Legal approval 或 Product naming。
- 不把常見寫作建議冒充企業 Brand guideline。
- 不因高階主管在聊天中稱讚某句話就視為正式 claim approval。
- 不覆寫、刪除或發布 canonical guideline，除非使用者明確要求且操作受支援並核准。
- 不把 Legal／Trademark／Compliance review 標為已完成。

## Common Issues

| Issue | Cause | Fix |
|---|---|---|
| Voice 只有形容詞 | 缺少可觀察行為 | 加 We are／not 與正反例。 |
| 多份指南互相衝突 | Scope／date／owner 未解析 | 建 conflict table，等待 owner 決策。 |
| Claim 有數字但無範圍 | 遺失 measurement metadata | 降為 Candidate 並補 source／population／period。 |
| Regional copy 不一致 | 沒有 localization governance | 建立 locale owner、approved variant 與 review date。 |
| 儲存後誤稱正式版 | 只建立 draft | 明確標 `Draft—not approved` 並列 approver。 |
