---
name: paid-media-creative-plan
description: 規劃 Paid search、Paid social、Display、Video、Sponsored content 與 Retargeting 的 Objective、Audience、Offer、Channel role、Budget scenario、Creative angles、完整 Copy variants、Visual brief、Experiment、Tracking、Policy QA 與 Optimization handoff。 適用於新 Paid campaign 與 data-driven creative iteration；不適用於自動上傳 Audience、提交 Ads、承諾 Spend 或以過期平台限制產生 upload-ready 資產。
metadata:
  author: lwokeray
  version: 1.0.1
license: MIT
---

# Paid Media and Creative Plan

## Overview

將 Paid media 需求轉成可由 Media owner 實作的完整 Strategy／Creative pack。先確定 Audience、offer、landing experience、measurement 與 policy，再產生不同心理／任務角度的 copy 與 visual brief；不是只大量換同義詞，也不因 AI 能生成很多 variants 就忽略 sample、brand safety 與 review capacity。

## When to Use

- 規劃 Paid search、social、display、video、sponsored content 或 retargeting。
- 建立 Media objective、channel role、budget scenario、audience／exclusion 與 funnel path。
- 產生多個真正不同的 Creative angles、headline／body／description／CTA variants。
- 根據已提供的 impression、click、conversion、CPA／ROAS、quality／policy data 迭代。
- 建立 platform QA、landing-page match、tracking、experiment 與 upload handoff table。

## When NOT to Use

- 自動建立 Advertising account、Campaign、Ad set、Audience 或上傳 Customer list。
- 未獲核准承諾 Budget、Bid、Discount、Offer、Price、Target 或 Spend。
- 使用敏感屬性、歧視性 targeting、fingerprinting 或 prohibited personalization。
- 只有 impressions 不足卻宣稱 Creative winner。
- 假裝已驗證 current platform character／policy／asset requirements。

## Quick Start

1. 確認 Objective、Audience、Journey stage、region、platform／placement、offer、landing destination、budget boundary、primary KPI、brand／policy 與 available performance data。
2. 用 `ask` 尋找 Campaign brief、Audience research、Brand／Claim、prior ads、landing copy、performance／budget workbook 與 approval；用 `fetch`／`fetch_blob` 驗證。
3. 建立 Channel role、Audience／exclusion、offer／landing match、budget scenario、tracking 與 decision thresholds。
4. 產生三至五個 distinct creative angles，各含完整 variants、visual／video brief、claim／policy QA 與 experiment mapping。
5. 交付 implementation-ready matrix，但標 `Draft / Platform validation required`，不提交 Ads 或 Audience。

## Core Instructions

### 1. Define Paid media logic

建立：Business objective、Audience behavior、desired action、primary KPI、secondary／guardrail metrics、channel role、funnel stage、offer、landing destination、budget status、campaign window、owners、approvers、attribution window 與 stop criteria。

Paid media 不應補救不清楚的 Product／Offer／Landing page。若 Ad promise 與 landing experience 不一致，先標 Blocker，不用更強 headline 提高 click。

### 2. Govern audience and exclusions

Audience definition 包含 source、eligibility、consent／lawful use、region、age／industry restrictions、inclusions、exclusions、suppression、frequency、lookalike／retargeting source 與 expiry。不得從姓名、照片、語言、location、job title 或 behavior 推斷敏感屬性。

Customer list、CRM export、website visitor 或 event attendee 只有在 policy／consent／platform terms 允許時才能規劃使用；本 Skill 不執行 upload。Exclusion 至少涵蓋 converted users、employees／test、ineligible region、unsubscribe／complaint（適用時）、sensitive／support state 與 frequency control。

### 3. Select channels and placements

每個 Channel／placement 說明：Audience fit、intent／journey、creative format、landing experience、cost／capacity assumption、measurement、brand safety、policy、frequency 與 role in mix。Search 適合 capture explicit intent；Social／video 可創造 discovery／consideration；Retargeting 只在 consent／eligibility 下重新提供 relevant proof。

不要依平台 popularity 自動選擇，也不要把不同 placement 的 metrics 直接比較。

### 4. Verify current platform specifications

Character、asset dimension、duration、safe area、text、CTA、landing、tracking、restricted category 與 review policy會變動。需要 exact upload-ready output 時，必須以 current official platform documentation 或使用者提供的 approved spec 驗證，記錄 observed date。無法驗證時：

- 產出 conservative copy／asset brief。
- 計算本地字符／word count，但不保證平台接受。
- 明確標 `Platform validation required`。
- 不引用記憶中的舊限制當現行規格。

### 5. Build distinct creative angles

先建立三至五個不同的 motivation／question，不只是換詞：

- Pain／friction，但不恐嚇或羞辱。
- Desired outcome，包含可信 mechanism。
- Proof／social evidence，需 approval。
- Identity／role relevance，不推定敏感屬性。
- Comparison／alternative，公平且有來源。
- Education／contrarian insight，有 evidence。
- Offer／urgency，只有真實 terms／expiry。

每個 Angle 記錄 Audience insight、Hypothesis、Core claim、Proof、Objection、CTA、Funnel stage、risk 與 disconfirming result。

### 6. Generate complete variants

每個 Angle 產生適合 placement 的 Headline、Primary text、Description、CTA、display／link text、keyword／query intent（Search）、on-screen text／voiceover（Video）、visual concept、landing message match 與 character count。Variants 必須在 Angle、structure、specificity 或 proof 上有意義地不同。

Copy rules：

- 每段能獨立理解；可隨機組合的元件需組合後仍成立。
- Benefit 與 proof 對齊，不使用「best／only／guaranteed」等 unsupported claim。
- 不用全大寫、過量標點、clickbait、fake countdown 或 misleading before／after。
- CTA 說明 Audience 會取得什麼與下一步。
- Landing page 必須兌現 headline、offer、terms、Audience 與 CTA。

### 7. Create visual and video briefs

每個 brief 包含：Placement、Audience、Angle、single focal point、scene／composition、required copy、Brand asset、Product representation、proof／disclaimer、rights、alt text／caption、safe-area／crop validation、prohibited imagery、variants、source asset 與 approval owner。

Video 另含 Hook、timestamped sequence、voiceover、on-screen text、shot／motion、caption／audio、CTA frame 與 duration validation。不得要求生成假 Customer、fake UI result、誤導性 transformation 或未授權 person／brand likeness。

### 8. Plan budget and pacing

在沒有核准 Budget 時使用 low／base／high scenario，分開 Media、Production、Testing、Measurement 與 Contingency。每個 scenario 列 assumptions、reach／action range（若有證據）、learning objective、pacing／frequency、capacity 與 pause threshold。

CPA／ROAS 需明確 conversion、revenue、margin、attribution window、lag 與 exclusions。沒有 credible revenue attribution時使用 cost per qualified action，不自造 ROAS target。

### 9. Iterate from performance data

先確認 optimization metric 與 data quality，再比較：same placement、audience、time、budget／bid context、sample maturity。分析 winners／losers時區分：Angle、Hook、proof、format、Audience、Offer、Landing、frequency、placement 與 delivery effect。

建立 Iteration log：Round、dates、variants、exposure、primary／guardrail metrics、confidence、pattern、new hypothesis、what stays constant、decision。低 exposure、unequal delivery 或 multiple changes 的結果不可稱 causal winner。

### 10. Design tracking and QA

QA 包含：Naming／taxonomy、destination／redirect、tracking parameter、conversion event、consent、dedupe、test data、brand／claim、spelling、localization、accessibility、policy、audience／exclusion、budget／bid owner、schedule／timezone、landing speed／form、mobile rendering、approval、rollback／pause owner。

### 11. Keep execution separate

本 Skill 不上傳 Audience、不提交／publish Ad、不變更 Budget／Bid、不 pause／scale live Campaign。Implementation handoff 必須列 Platform、Account／Campaign placeholder、placement、copy／asset IDs、Audience rule、budget scenario、tracking、approver、status 與 platform validation。

## Output Format

```markdown
# Paid Media and Creative Plan
## Objective, audience, offer, landing, and measurement
## Channel / placement roles
## Budget and pacing scenarios
## Creative angle matrix
| Angle | Insight / hypothesis | Claim / proof | Audience / stage | CTA | Risk / validation |

## Complete creative variants
## Visual / video production briefs
## Experiment and iteration plan
## Tracking, platform, policy, and approval QA
## Implementation handoff — Draft only
```

## Work IQ Tool Rules

- `ask`：尋找 Campaign、Audience、Brand、Claims、prior creative、landing、budget 與 performance context。
- `search_paths`、`get_schema`、`fetch`、`fetch_blob`：驗證 M365 source、workbook data、files、approval 與版本。
- 不使用 mutation／action 連接任何 Advertising platform，也不修改 Budget／Audience／live Campaign。

## Examples

**User:**「根據上月 LinkedIn Ads 表現做下一輪文案。」

**Correct behavior:** 先驗證同 placement／audience／metric／sample，找 Angle／Hook／proof pattern，再產生 controlled variants 與 test plan；不僅把最佳標題換幾個同義詞，也不直接上線。

## Guardrails

- 不捏造 Audience、consent、platform spec、benchmark、performance、attribution、budget、offer 或 approval。
- 不進行敏感／歧視 targeting，不使用個資或未授權 Customer list。
- 不使用 fake urgency、misleading transformation、unsupported comparison 或 prohibited claim。
- 不自動 submit、publish、upload、pause、scale、bid 或 spend。
- 不把低 sample、unequal delivery 或多變數差異稱為 causal winner。
- Platform constraint、Audience eligibility、budget ceiling或performance baseline未知時標示 `未知`，在 implementation前要求 current official verification與核准。

## Common Issues

| Issue | Cause | Fix |
|---|---|---|
| Variants 幾乎一樣 | 只換措辭 | 先建立 distinct motivations／angles。 |
| CTR 高、conversion 低 | Ad／landing／offer mismatch | 檢查 Message match、form、audience 與 tracking。 |
| 平台拒登 | spec／policy 過期 | current official validation 與 QA。 |
| ROAS 看似很好 | attribution／revenue 定義不清 | 保留 model、lag、margin 與 uncertainty。 |
| Retargeting 風險 | consent／exclusion 未處理 | 建 eligibility、suppression 與 expiry。 |
