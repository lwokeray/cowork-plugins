---
name: case-intake-triage
description: |
  Converts a new IT support report into an evidence-backed case intake and triage proposal.
  Use when a user asks to "triage this ticket", "create an IT case", "classify this issue",
  "assess impact and urgency", "check for duplicate incidents", "route this support request",
  or provides an email, chat, call note, or portal submission that must become a Help Desk case.
  Produces proposed fields and follow-up questions; it does not silently create, prioritize,
  assign, route, close, or investigate the case.
license: MIT
metadata:
  author: lwokeray
  version: "2.0.2"
---

## 執行前提與交付方式

本 Plugin 提供工作方法，不會自行授予資料存取或系統操作能力。下文列出的 Work IQ、MCP 或應用操作，僅在本次工作環境實際提供對應工具、連線與使用者權限時適用；不得依工具名稱猜測路徑、欄位或成功結果。

沒有即時工具時，可用使用者提供或已授權匯出的資料完成本 Skill 的分析與草稿，保留資料日期、版本與無法即時驗證的範圍。政策拒絕或權限不足時停止該操作，不透過其他帳號、工具或瀏覽器繞過；仍交付可完成的部分。

使用者要求可下載的草稿文件時，完成該文件屬於所請交付物；「草稿」或「不要發布」不等於禁止產生供本人審閱的新檔。明確要求只讀或不建立檔案時遵守其限制。修改共用原檔、寫入正式系統、寄送、排程與發布，仍依後文的目標、差異、核准及執行後驗證規則處理；產生草稿不代表完成這些動作。

# IT Case Intake and Triage

## Overview

Turn an incoming IT report into a consistent intake record that another service representative can act on. Preserve what the requester actually reported, distinguish verified data from interpretation, and propose classification, impact, urgency, duplicate candidates, and routing without presenting any proposal as an executed change.

## When to Use

- Converting an email, chat, phone note, or portal submission into a case proposal
- Reviewing a newly created case for missing intake data
- Distinguishing an incident, service request, question, access request, or security concern
- Assessing business impact and urgency from recorded evidence
- Looking for likely duplicates or a known active outage
- Preparing proposed case fields and a routing recommendation

## When NOT to Use

- Troubleshooting an already-triaged technical issue — use `technical-troubleshooting`
- Fulfilling an approved catalog request — use `service-request-fulfillment`
- Coordinating a declared service outage — use `major-incident-coordination`
- Investigating a suspected security incident; follow the organization's security escalation process
- Changing identity, endpoint, production, network, or security controls
- Creating, assigning, reprioritizing, routing, or closing a case without a platform approval checkpoint

## Quick Start

```text
User: "Triage this: Finance cannot open the payroll portal since 09:10. Five people see error 503."

1. Preserve the reported symptom, time, group, and error as requester statements.
2. Check the selected Customer Service environment for related active cases and advisories.
3. Propose type, affected service, impact, urgency, and routing from evidence.
4. List missing information and the fewest useful follow-up questions.
5. Return a structured intake; do not create or update a case silently.
```

## Required Context

Use only information visible through the active Dynamics 365 Customer Service environment and approved Microsoft 365 context. Prefer these sources, in order:

1. The original requester submission or conversation
2. Existing case fields and timeline entries
3. Active major incidents, service notices, and related cases
4. Approved service catalog and routing information
5. Published knowledge articles relevant to classification

Record the source of every material fact. If a source is unavailable, mark the field unknown rather than infer it.

## Core Instructions

### 1. Establish Intake Identity

Capture only fields supported by the source:

- Requester and beneficiary, if different
- Preferred contact channel when recorded
- Reported date and time, including time zone when available
- Affected service, application, device, location, or account
- Original subject and a normalized working title

Do not guess an employee identity, email address, device name, asset, location, department, or tenant.

### 2. Normalize the Report

Rewrite the issue as a compact symptom statement:

```text
[Who or what] cannot [expected action] in [service/environment] since [time],
and observes [specific error or behavior].
```

Keep the original wording available. Do not convert a user's theory such as “the firewall is blocking it” into a confirmed cause.

Capture:

- Expected behavior
- Observed behavior
- First known occurrence and last known good time
- Frequency or reproducibility
- Affected and unaffected scope
- Business task blocked or degraded
- Error text, code, screenshot, or attachment reference
- Changes noticed by the requester, explicitly labelled as reported

### 3. Classify the Work

Choose one proposed type and explain the evidence:

| Proposed type | Use when |
|---|---|
| Incident | An existing service or configuration is unexpectedly degraded or unavailable |
| Service request | The requester asks for a standard item, installation, resource, or approved service |
| Access request | Access, role, membership, credential lifecycle, or entitlement is requested |
| Information request | The requester needs instructions, status, or an answer without a service failure |
| Security concern | Phishing, malware, credential exposure, suspicious access, data exposure, or another security signal is reported |
| Unclear | Available evidence cannot distinguish the types |

A security concern requires prompt routing to the approved security process. Do not perform containment, evidence collection beyond approved case data, or forensic investigation under this skill.

### 4. Assess Impact and Urgency

Assess impact and urgency separately. Never derive priority from the requester's job title, tone, repeated messages, or a requested priority label.

**Impact evidence** may include:

- Number and type of users, sites, devices, or business services affected
- Complete outage versus partial degradation
- Availability of a safe workaround
- Data, regulatory, patient, customer, financial, or operational consequences explicitly recorded

**Urgency evidence** may include:

- Time until a documented business deadline
- Whether work is stopped or only slowed
- Rate at which impact is expanding
- Duration and whether a workaround can bridge it

Return qualitative impact and urgency using the organization's configured values when visible. If a configured priority matrix is available, use it and identify it. Otherwise, propose impact and urgency only and leave priority undetermined.

### 5. Check for Related Work

Search narrowly using the affected service, error code, time window, location, version, and symptom. A duplicate candidate must share more than generic words such as “slow,” “error,” or “cannot log in.”

For each candidate, record:

- Case or incident identifier
- Matching evidence
- Material differences
- Current status and owner, if visible
- Confidence: high, medium, or low

Do not merge or link cases automatically. If an active major incident plausibly explains the report, propose association and preserve any mismatched evidence.

### 6. Determine Completeness and Routing

Propose the queue or resolver group only when supported by service ownership or routing rules. Never infer ownership from an individual's name.

Ask only questions that change classification, impact, urgency, routing, or the first safe diagnostic step. Prefer three or fewer questions at a time. Do not request passwords, authentication codes, recovery keys, private keys, or unnecessary personal data.

### 7. Prepare Proposed Actions

Clearly label every mutation as proposed:

- Create or update case
- Set type, category, impact, urgency, or priority
- Associate a duplicate or major incident
- Assign or route
- Add an internal note
- Send a requester message

Use the platform approval checkpoint before any supported write action. If no approved write capability is active, provide copy-ready proposed values only.

## Output Format

```markdown
# Intake and Triage — [Working title]

## Intake status
- Completeness: Ready for triage | Needs requester information | Security escalation required
- Source: [email/chat/call/portal/existing case]
- As of: [timestamp and time zone]

## Reported facts
| Field | Value | Evidence source |
|---|---|---|
| Requester / beneficiary | ... | ... |
| Affected service | ... | ... |
| Symptom | ... | ... |
| Started / last known good | ... | ... |
| Scope | ... | ... |
| Business impact | ... | ... |
| Error evidence | ... | ... |

## Proposed classification
- Type: ...
- Impact: ...
- Urgency: ...
- Priority: ... | Undetermined
- Rationale: ...

## Related-work check
| Candidate | Matching evidence | Differences | Confidence |
|---|---|---|---|

## Proposed case fields
| Field | Proposed value | Basis |
|---|---|---|

## Missing information
1. ...

## Routing proposal
- Queue or resolver: ...
- Basis: ...

## Action boundary
- Not yet executed: ...
- Approval or tool required: ...
```

## Guardrails

- Treat requester statements as reported information until independently verified.
- Never state a root cause during intake unless an authoritative incident record already confirms it.
- Do not assign priority without recorded impact and urgency evidence.
- Do not expose unrelated cases, requester identities, internal notes, or sensitive diagnostics.
- Do not ask for secrets or collect data unrelated to resolving the case.
- Do not imply that a case, link, assignment, or message exists until the platform confirms the write.
- Keep security concerns intact and route them; do not downgrade them to ordinary incidents to simplify handling.

## Common Issues

| Issue | Correction |
|---|---|
| Request says “urgent” but gives no impact | Record requested urgency and ask what work is blocked and by when |
| Similar case has only a generic symptom | Keep it as a low-confidence candidate; do not mark duplicate |
| Service and owner are unknown | Use `Unclear`, ask a discriminating question, and avoid guessed routing |
| Multiple request types are mixed | Separate the primary failure from any fulfillment request and note both |
| Security language appears in a normal ticket | Preserve the signal and invoke the approved security escalation path |

## Completion Checklist

- Original report and normalized symptom are both represented
- Facts, requester statements, hypotheses, and unknowns are distinguishable
- Classification has evidence and an explicit confidence level when uncertain
- Impact and urgency are assessed independently
- Duplicate candidates include both matches and differences
- Follow-up questions are necessary and minimal
- All record changes and communications are clearly marked as proposed or confirmed

## 跨階段交接與接續執行

依案件目前進度，從第一個尚未完成且影響下游的工作開始。保留同一案件、任務與文件版本；只在需要該獨立產出時使用相鄰 Skill，不要求一次執行整個 Plugin。

| 工作階段 | 帶入的證據 | 交付與承接條件 |
|---|---|---|
| 接案與影響 | 原始症狀、時間、受影響工作與使用者陳述 | 接案表、最少補問與路由建議；使用者推測不當根因 |
| 排查與替代 | 已發布知識、使用者測試及授權範圍 | 回覆、停止條件與結果；瀏覽器可用仍保留桌面故障 |
| 二線交接 | 已做步驟、結果、附件、影響與接收者 | 可接續處理的交接包及進度回覆；接受交接不等於解決 |
| 驗證與結案 | 修復紀錄、使用者同一業務情境驗證 | 逐案結案檢查與知識更新草稿；相似工單各自驗證 |

二線回報修復後，核對使用者原本受阻工作是否恢復。主案驗證成功不能批次關閉其他相似工單；知識更新保留原版本、修改理由、審閱者及受限資訊界線。

交接時保留案件 ID、輸入版本、資料截至時間、已完成成品位置、原決策與批准範圍、仍缺的資料、接收者及下一檢查點。接收者沒有明確接受時標示待承接，不把「已寄出」當成責任已轉移。

執行中收到新資料，先比較原值、新值、來源時間、受影響產出與依賴。已核准基準保留原版；只修訂受影響事項，超出原批准的動作重新提出具體預覽。無關且已完成的事項不重做。

中斷後接續前，讀取目前成果與目標狀態，分別列已驗證成功、失敗、結果未知及尚未執行。已成功項目不重送；結果未知先核對再重試；依賴失敗步驟的後續動作保持等待。若本次只有來源文件，僅更新草稿與待辦，不聲稱已更新正式系統。
