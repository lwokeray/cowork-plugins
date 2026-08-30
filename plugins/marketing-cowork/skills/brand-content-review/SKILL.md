---
name: brand-content-review
description: 依 canonical Brand guide、Messaging、Terminology、Approved claims、Legal／Privacy、Accessibility、Localization 與 Channel requirements，對 Marketing content 進行逐項審查、分級、Before／After 修正與 Release recommendation。 適用於發佈前 Editorial／Brand／Claim QA；不適用於把 Review 當正式 Legal approval、直接發布或在沒有基準時假裝品牌合規。
metadata:
  author: lwokeray
  version: 1.0.1
license: MIT
---

# Brand and Content Review

## Overview

提供可執行的發佈前 Review：指出位置、規則、風險、證據與具體修正，並給出 `Ready／Ready with fixes／Blocked` 的建議狀態。Brand review、Fact／Claim review、Legal／Privacy flag、Accessibility、Channel constraint 與 Localization 分開，避免「文法沒問題」被誤認為可發佈。

## When to Use

- 審查 Blog、Landing page、Email、Social、Ad、Video script、Case study、Press release 或 deck copy。
- 依 Brand voice、Tone、Messaging pillar、Terminology 與 Product naming 檢查。
- 檢查 unsupported claim、comparative claim、Customer quote、result、disclaimer 與 source。
- 做 cross-channel／locale consistency、Accessibility 與 final editorial QA。
- 比較修訂前後內容並建立 release checklist。

## When NOT to Use

- 建立 Brand system → `brand-strategy-governance`
- 從零撰寫完整內容 → `marketing-content-creation`
- 由 Agent 宣告 Legal、Trademark、Regulatory 或 Privacy 最終核准。
- 直接發布、寄送、更新網站或變更 approved source。
- 沒有 content 與 review scope 的泛泛「幫我看看」。

## Quick Start

1. 確認待審內容、canonical Brand／Claim sources、Audience、Channel、locale、publish date 與 review purpose。
2. 用 `ask` 找 approved guideline、Product source、Claim library、Legal guidance 與 prior approved examples；以 `fetch`／`fetch_blob` 驗證版本。
3. 建立 review baseline；若沒有 Brand guide，清楚切換為 General quality review，不稱 Brand compliant。
4. 依 Severity 與 release impact 檢查，為 High／Medium issue 提供 Before／After。
5. 交付完整 Revised content 或 precise patch、findings、required approvers 與 release recommendation；不直接修改或發布。

## Core Instructions

### 1. Resolve review baseline

記錄：Content version、source URL／file、Audience、Channel、locale、Campaign／Product、Brand guide version、Claim library version、Legal／Privacy／Accessibility requirement、owner、publish window。若多份 guideline 衝突，先列 conflict，不自行混合。

Review baseline 優先順序：正式 approved guideline／claim → product source-of-truth → approved Campaign brief → approved comparable example → generic clarity／quality rule。Generic rule 不能覆蓋企業明確規則。

### 2. Use severity and disposition

| Severity | Meaning | Disposition |
|---|---|---|
| Blocker | 事實錯誤、無權使用、重大 compliance／privacy／consent、核心 CTA 或 availability 誤導 | 不可發布，需 owner／approver 解決 |
| High | Unsupported claim、核心 message 偏離、錯誤 Product naming、Channel rejection risk | 修正後重新審查 |
| Medium | Tone、terminology、structure、proof placement、accessibility 缺失 | 發布前修正 |
| Low | Grammar、style、format 一致性 | 可批次修正，不應淹沒高風險項目 |

每個 finding 必須有 Location、Original、Rule／evidence、Why it matters、Suggested fix、Owner／approval 與 Status。

### 3. Review Brand voice and message

檢查：

- Voice attribute 是否以可觀察行為呈現。
- Tone 是否符合 Audience、Channel 與 situation。
- Core message 是否清楚且與 Campaign／Product baseline 一致。
- Supporting message 是否互相重複或超出 proof。
- Category／Product naming、capitalization、preferred／avoided term。
- 是否以 Audience outcome 說話，而非內部 Feature dump。
- CTA 是否唯一、具體、符合 Journey stage 並說明下一步。

### 4. Review facts, claims, and proof

逐一建立 Claim check：

| Claim | Type | Source | Scope / qualifier | Approval | Expiry | Result |
|---|---|---|---|---|---|---|

特別檢查：Superlative、comparative、performance、customer result、market share、price、availability、security／compliance、sustainability、health／financial implication、guarantee、roadmap。找不到直接來源時，選擇：Remove、Qualify、Replace with verified fact 或 `Approval required`，不能以「可能」「領先」模糊帶過。

### 5. Review Customer and third-party content

- Quote 必須逐字、speaker／company／date／source 可追溯。
- Name、logo、title、photo、quote、result、case detail 各自需要 external-use consent。
- Research／award／certification 保留 publisher、date、method、scope 與 attribution。
- Competitor comparison 要公平、同時點、同 tier、具來源且無 FUD。
- Copyright text、image、music、brand asset 需有使用權 evidence 或標待確認。

### 6. Review Legal, privacy, and ethical flags

本 Skill 只辨識並路由，不取代專業 approval。檢查：promotion terms、price／discount、contest、testimonial disclosure、regulated claim、children／sensitive audience、personal data、tracking／cookie、unsubscribe、consent、embargo、forward-looking statement、confidential information、dark pattern、fake urgency。

需要 Legal／Privacy review 時，將 exact text、issue、jurisdiction／channel、source、deadline 與 proposed fix 整理給 approver。

### 7. Review accessibility and inclusivity

檢查 heading hierarchy、descriptive links、alt text、caption／transcript、reading order、plain language、acronym first use、contrast requirement note、non-color cues、inclusive language、cultural idiom 與 locale-specific date／number／currency。無法檢查視覺 contrast 時標 `Visual QA required`，不要假稱 Pass。

### 8. Review channel readiness

Channel exact limits 需 current official spec 或 approved internal spec。檢查 subject／preview、ad／landing message match、link destination、form expectation、video timestamp／caption、social truncation、email footer／unsubscribe、PR dateline／media contact、mobile scan。無法 current validate 時標 `Platform validation required`。

### 9. Produce revision

對 Blocker／High／Medium issue 提供 Before／After；使用者要求完整修訂時，交付完整 clean version，再附 change table。修訂不得引入新 Claim、改變 Customer quote、移除必要 qualifier 或偷偷更換 CTA destination。

### 10. Recommend release state

- `Ready`：無 Blocker／High，必要 approver evidence 完整，Channel／Accessibility gate 已驗證。
- `Ready with fixes`：只有明確可修正 Medium／Low，修正後不需新決策。
- `Blocked`：有未解決 fact／claim／consent／legal／privacy／availability／channel blocker。

這是 Review recommendation，不是正式 Legal／Brand／Publisher approval。列出 still-required approvers。

## Output Format

```markdown
# Content Review
- **Recommendation:** Ready / Ready with fixes / Blocked
- **Content / baseline / channel / locale / publish window:**

## Release blockers
## Detailed findings
| Severity | Location | Original | Rule / evidence | Fix | Owner / approval | Status |
|---|---|---|---|---|---|---|

## Claim and source check
## Accessibility and channel readiness
## Revised content / exact patches
## Required approvals and final checklist
```

## Work IQ Tool Rules

- `ask`：發現 Brand、Claim、Product、Legal guidance、approved examples 與 Campaign context。
- `search_paths`、`get_schema`、`fetch`、`fetch_blob`：驗證 canonical baseline、version、source 與 content。
- Review 預設 Read-only；不使用 mutation 或 publish action。

## Examples

**User:**「檢查這份 Landing page 可不可以上線。」

**Correct behavior:** 依 approved baseline 檢查 claims、Customer proof、CTA、Privacy／form、Brand、Accessibility、Channel；輸出 precise blockers 與完整修訂，不把「文案通順」等同 Ready。

## Guardrails

- 不捏造 guideline、claim source、consent、approval、platform spec 或 legal conclusion。
- 不將 General quality review 表示為 Brand-compliant review。
- 不為了讓內容通過而刪除必要 disclaimer、縮小風險描述或改寫逐字 quote。
- 不直接修改 canonical file、發布、寄送、建立 Ad 或標記正式 Approved。
- 不用大量 Low issue 淹沒 Blocker／High finding。
- 找不到 authoritative baseline、Claim source 或必要 context 時標示 `未知` 並要求對應 Owner 驗證，不推定為 Pass。

## Common Issues

| Issue | Cause | Fix |
|---|---|---|
| Review 只改文法 | 未建立 baseline 與 risk layers | 加 Brand、Claim、Consent、Channel、Accessibility。 |
| 所有 finding 都 High | 沒有 severity definition | 依 release impact 分級。 |
| Claim 看似合理就通過 | 未回到 direct source | 建 Claim check table。 |
| 修訂後又新增風險 | 改寫引入新 claim | 對 Revised version 重新跑 Claim check。 |
| 無法驗證視覺卻標 Pass | 只看文字 | 標 Visual QA required。 |
