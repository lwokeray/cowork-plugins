---
name: knowledge-grounded-reply
description: |
  Drafts IT support guidance grounded in approved knowledge and the current case.
  Use when a user asks to "reply with the right KB", "find troubleshooting instructions",
  "draft a knowledge-based response", "send steps for this error", "check whether this article applies",
  or needs safe requester guidance with prerequisites, expected results, and stop conditions.
  It does not invent missing policy or technical steps, publish knowledge, or send a message without approval.
license: MIT
metadata:
  author: lwokeray
  version: 2.0.0
---

# Knowledge-Grounded IT Reply

## Overview

Find the strongest approved knowledge for the exact case, verify that it applies, and turn it into a clear requester-facing draft. Keep the article's safety boundaries intact and never fill a policy, licensing, security, or configuration gap from general model knowledge.

## When to Use

- Finding an approved knowledge article for a case symptom or error code
- Checking article applicability by product, version, platform, audience, and environment
- Drafting requester steps from one or more compatible articles
- Explaining prerequisites, expected results, stop conditions, and escalation paths
- Recording which knowledge was considered, accepted, or rejected

## When NOT to Use

- Writing a generic progress or acknowledgement message — use `requester-communication`
- Troubleshooting without relevant approved knowledge — use `technical-troubleshooting`
- Creating or revising the knowledge article — use `knowledge-maintenance`
- Sending instructions that change production, access, identity, endpoint security, or data without an authorized fulfillment process
- Treating an unpublished, expired, draft, or mismatched article as approved guidance

## Quick Start

```text
User: "Draft a reply for case CAS-10482 using the approved KB."

1. Read the case symptom, environment, version, prior attempts, and audience.
2. Search approved knowledge with exact service names, errors, and differentiating terms.
3. Verify publication state, scope, prerequisites, version, and safety notes.
4. Reject weak or conflicting matches explicitly.
5. Draft only the applicable steps and preserve expected results and stop conditions.
6. Mark the message as a draft until the user approves sending it.
```

## Source Priority

Use the following order:

1. Published, tenant-approved knowledge articles
2. Authoritative service or vendor documentation approved by the organization
3. Active major incident communications or service notices
4. Resolved related cases only as supporting evidence, not as policy
5. Direct case evidence

Do not use unsupported general knowledge to create administrative commands, registry changes, scripts, policy exceptions, licensing claims, or security instructions.

## Core Instructions

### 1. Define the Knowledge Need

Extract from the case:

- Product or service and feature
- Exact symptom, error text, and error code
- Platform, device type, operating system, version, browser, and network when relevant
- User role and intended audience
- Production or test environment
- Steps already attempted and their results
- Access level needed for possible steps
- Data sensitivity or security concerns

If critical applicability data is missing, ask for it before giving steps that might be wrong or unsafe.

### 2. Search Narrowly

Start with exact error codes, service names, feature names, and version. Broaden one dimension at a time. Avoid searches containing unnecessary requester names, message bodies, personal data, or unrelated case details.

For each candidate article, capture:

- Article identifier, title, and source
- Publication state and last review date if visible
- Product, platform, version, tenant, and audience scope
- Prerequisites and required permissions
- Warning, rollback, stop, and escalation guidance

### 3. Score Applicability

Evaluate each candidate against the case:

| Check | Requirement |
|---|---|
| Publication | Approved and available to the intended audience |
| Product and feature | Exact match or explicitly compatible |
| Version and platform | Matches or article states cross-version applicability |
| Symptom and error | Same behavior, not merely similar wording |
| Environment | Instructions are valid for the case's tenant and environment |
| Prerequisites | Requester or resolver can safely meet them |
| Prior attempts | Does not blindly repeat a failed step |
| Safety | Warnings, permissions, rollback, and stop conditions are usable |

Label each article `Applicable`, `Partially applicable`, `Conflicting`, `Stale`, or `Insufficient evidence`. Do not combine articles whose instructions or prerequisites conflict.

### 4. Resolve Conflicts

When two sources disagree:

1. Prefer the approved source with the narrower product/version/environment match.
2. Check review date and supersession metadata.
3. Preserve the disagreement in internal notes.
4. Do not select a risky path solely because it is newer.
5. Escalate to the knowledge owner when authority cannot be determined.

### 5. Draft the Reply

The requester-facing draft must:

- Acknowledge the specific symptom without overstating the diagnosis
- Explain why the selected guidance applies in plain language
- State prerequisites before steps
- Present steps in the order required by the approved source
- Include the expected result after each meaningful checkpoint
- Preserve warnings, stop conditions, and escalation instructions
- Ask the requester to report the exact result, not merely “did it work?”
- Avoid internal queue names, private notes, unrelated cases, and sensitive diagnostics

Tailor presentation, not technical substance. You may shorten redundant wording, but do not omit a prerequisite, permission requirement, safety warning, rollback, or validation step.

### 6. Separate Internal Evidence from External Text

Internal notes may include article evaluation, rejected candidates, and case evidence. The external reply must not reveal:

- Other requesters or case identifiers
- Internal-only articles or resolver notes
- Sensitive topology, hostnames, tokens, access details, or security indicators
- Hypotheses stated as confirmed causes

### 7. Apply the Action Boundary

Keep the output in draft state. If a supported communication tool is active, invoke its platform approval checkpoint before sending. If a case note or article association is proposed, treat that as a separate write action.

## Output Format

```markdown
# Knowledge-grounded reply — [Case ID]

## Guidance status
- Ready to send | Needs applicability detail | No approved match | Knowledge conflict
- Case environment: ...

## Approved sources
| Article | Status | Applicability | Important limits |
|---|---|---|---|

## Rejected or unresolved sources
| Article | Reason not used |
|---|---|

## Requester-facing draft
**Subject:** [case-specific subject]

[Acknowledgement and concise context]

Before you begin:
- [Prerequisite]

Steps:
1. [Approved step]
   - Expected result: ...
2. ...

Stop and reply to us if:
- [Article-derived stop condition]

Please send back:
- [Exact observation needed]

## Internal evidence note
- Selected because: ...
- Case evidence used: ...
- Remaining unknowns: ...

## Action boundary
- Message status: Draft, not sent
- Other proposed writes: ...
```

## Communication Rules

- Match the requester's technical level while retaining exact button names, paths, and error codes.
- Use numbered steps for sequences and bullets for prerequisites or outcomes.
- Do not blame the requester or use phrases such as “you should have,” “obviously,” or “just.”
- Do not promise a resolution time unless an authoritative commitment exists.
- Do not say “this will fix it”; state the expected result and what to do if it differs.
- If no approved article applies, say so and prepare a diagnostic or escalation path instead of improvising.

## Guardrails

- Never invent a knowledge article, identifier, publication state, instruction, or quotation.
- Never expose unpublished or internal-only knowledge to an unauthorized audience.
- Never add administrative commands or configuration changes absent from the approved source.
- Never remove safety warnings, backup requirements, rollback instructions, or authorization limits.
- Never send the draft or mutate the case without the platform checkpoint.
- Treat security concerns as a routing trigger, not an opportunity to provide improvised containment steps.

## Common Issues

| Issue | Correction |
|---|---|
| Article matches the error but not the product version | Mark partially applicable and obtain version-specific guidance |
| Article is linked to an old case | Verify its current publication and applicability independently |
| Two approved articles conflict | Prefer the narrower authoritative match or escalate to the knowledge owner |
| Requester lacks required permissions | Do not ask them to bypass controls; route the privileged step |
| Instructions repeat a failed action | State the prior result and use a different approved branch if available |
| No article exists | Report the gap and use `technical-troubleshooting` or `knowledge-maintenance` |

## Completion Checklist

- Case environment and audience are known
- Every used source is real, approved, and applicable
- Rejected matches have a reason
- Draft contains prerequisites, ordered steps, expected results, and stop conditions
- Internal evidence and external communication are separated
- No technical substance was invented
- Send and record updates remain explicitly unexecuted until approved
