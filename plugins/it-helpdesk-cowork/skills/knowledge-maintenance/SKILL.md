---
name: knowledge-maintenance
description: |
  Identifies IT knowledge gaps and drafts governed new, revised, merged, or retired knowledge content.
  Use when a user asks to "create a KB from this resolved case", "update this support article",
  "fix conflicting knowledge", "document this workaround", "retire stale instructions",
  "capture a recurring resolution", or "prepare an article for review". It verifies source evidence,
  scope, audience, prerequisites, steps, validation, rollback, ownership, and review status;
  it does not publish or approve knowledge.
license: MIT
metadata:
  author: lwokeray
  version: 2.0.1
---

# IT Knowledge Maintenance

## Overview

Turn verified support learning into maintainable knowledge without turning one case-specific workaround into unsafe general guidance. Decide whether to create, revise, merge, retire, or leave content unchanged, then prepare a review-ready article and evidence record.

## When to Use

- A resolved or well-understood case exposes a missing article
- Existing knowledge is stale, ambiguous, incomplete, duplicated, or conflicting
- A repeatable diagnostic or approved workaround should be documented
- An incident review identifies a knowledge or runbook gap
- Version, platform, permission, validation, rollback, or escalation information is missing
- A knowledge owner needs a review-ready draft and source traceability

## When NOT to Use

- Drafting a one-time requester message — use `knowledge-grounded-reply`
- Publishing unverified hypotheses, temporary incident speculation, or one-off actions as guidance
- Writing security-sensitive operational procedures for an unauthorized audience
- Approving, publishing, changing visibility, retiring, or deleting knowledge without governance approval
- Copying confidential case content or personal data into an article

## Quick Start

```text
User: "Create a KB draft from resolved case CAS-10482."

1. Verify the resolution, environment, validation evidence, and reuse potential.
2. Search for existing articles that cover or conflict with the topic.
3. Choose Create, Revise, Merge, Retire, or No change, with evidence.
4. Draft scoped symptoms, prerequisites, steps, expected results, rollback, and escalation.
5. Attach source traceability and a review checklist.
6. Keep publication state as Draft — not published.
```

## Knowledge Decision Model

| Decision | Use when |
|---|---|
| Create | No approved article covers a repeatable, verified support need |
| Revise | One authoritative article exists but needs correction, scope, or completeness |
| Merge | Multiple approved articles duplicate or conflict and one governed replacement is appropriate |
| Retire | Content is unsafe, obsolete, superseded, or no longer supported |
| No change | Existing content is current, complete, applicable, and findable |
| More evidence needed | Resolution, applicability, ownership, or safety cannot yet be verified |

Do not create a new article merely because the existing article was hard to find; consider metadata and discoverability improvements.

## Required Sources

Use:

1. Verified case resolution and validation evidence
2. Approved incident review, known error, service catalog, or change record
3. Existing published knowledge and supersession metadata
4. Approved vendor or product documentation
5. Service owner, security, legal, compliance, or accessibility requirements when applicable

Resolved cases are evidence, not automatically authoritative procedure. Remove requester identity, tenant-specific secrets, temporary hostnames, tokens, and unrelated logs.

## Core Instructions

### 1. Define the Knowledge Need

State:

- Intended audience: requester, Help Desk, resolver, administrator, or restricted operations
- User job to be accomplished
- Product, service, feature, version, platform, and environment
- Trigger symptom, error, or request type
- Frequency or reuse evidence
- Data classification and visibility
- Owner and required reviewers when recorded

If instructions require privileged access, mark the article for the appropriate restricted audience and do not expose privileged details in a general-user article.

### 2. Verify the Technical Basis

Confirm:

- The symptom and expected behavior are reproducible or otherwise well evidenced
- The resolution or workaround was actually executed and validated
- Cause confidence is represented accurately
- Preconditions and required permissions are known
- Side effects, risks, rollback, and stop conditions are known
- The steps apply beyond one incidental case detail

If service restoration occurred but the causal mechanism is unknown, write symptom-based guidance and label the workaround as temporary. Do not present it as a permanent fix.

### 3. Search Existing Knowledge

Search exact product names, feature names, errors, symptoms, synonyms, and version. For each candidate record:

- Record identifier, title, owner, state, review date, scope, and visibility
- Compare technical content and intended audience
- Identify duplicate, superseded, contradictory, or complementary instructions
- Check inbound links or references before proposing retirement

Do not merge instructions from incompatible versions, platforms, tenants, or audiences.

### 4. Select the Maintenance Action

Explain the selected action with source evidence and risks. For revision or merge, identify precisely:

- Text or section to change
- Why it is incorrect or insufficient
- Replacement content
- Compatibility impact
- Redirect or supersession requirement

For retirement, identify the replacement, effective date if approved, affected audiences, and review owner. Do not delete the history.

### 5. Draft the Article

Use this structure when applicable:

1. Purpose and outcome
2. Audience and scope
3. Symptoms or request criteria
4. Prerequisites and required permissions
5. Safety, backup, data, and access warnings
6. Ordered diagnostic or fulfillment steps
7. Expected result at meaningful checkpoints
8. Validation of the final outcome
9. Rollback, recovery, or temporary-workaround removal
10. Stop conditions and escalation path
11. Version, platform, and environment limits
12. Related knowledge and source references

Use exact UI labels and error strings from verified sources. Avoid vague instructions such as “check settings,” “restart as needed,” or “contact IT” without stating what, when, and why.

### 6. Make Content Findable and Maintainable

Propose:

- Clear task-oriented title
- Search terms and exact errors
- Product, version, platform, audience, and category metadata
- Owner and reviewers by recorded role
- Review trigger: release, incident, policy change, date, or deprecation
- Related and superseded articles
- Change summary for reviewers

Do not invent taxonomy values that are not configured in the knowledge system.

### 7. Review for Safety and Usability

Check:

- Least privilege and audience visibility
- Secrets, personal data, internal topology, and security-sensitive content
- Preconditions before irreversible or privileged steps
- Rollback and stop conditions
- Accessibility and plain language
- Steps tested against the stated platform and version
- No reliance on screenshots alone for essential instructions
- Links and references resolve to approved sources

### 8. Preserve Governance Boundaries

Return `Draft — not published`. Approval, translation, publication, retirement, visibility changes, and case/article associations are separate governed actions. Use the platform checkpoint when those capabilities are active.

## Output Format

```markdown
# Knowledge maintenance proposal — [Topic]

## Decision
- Action: Create | Revise | Merge | Retire | No change | More evidence needed
- Evidence: ...
- Intended audience / visibility: ...
- Owner / required reviewers: [recorded values or Unassigned]
- Publication state: Draft — not published

## Existing-content assessment
| Article | State / scope | Finding | Proposed treatment |
|---|---|---|---|

## Article draft
### [Task-oriented title]

**Purpose**
...

**Applies to**
- Product / version / platform / environment: ...
- Audience: ...

**Symptoms or request criteria**
...

**Prerequisites and warnings**
- ...

**Procedure**
1. ...
   - Expected result: ...

**Validation**
- ...

**Rollback or removal**
- ...

**Stop and escalate when**
- ...

**Related knowledge**
- ...

## Source traceability
| Claim or section | Approved source | Evidence / validation |
|---|---|---|

## Review checklist and open questions
- ...

## Action boundary
- Publication / retirement / associations: Not executed
```

## Guardrails

- Never publish a one-case hypothesis as established guidance.
- Never include credentials, tokens, private keys, recovery codes, personal data, or unnecessary internal topology.
- Never broaden permissions, audience, product scope, or version applicability beyond evidence.
- Never remove warnings, rollback, validation, or governance requirements for brevity.
- Never publish, approve, retire, delete, or change visibility without the required checkpoint.
- Route security procedures through the organization's restricted review and publication process.

## Common Issues

| Issue | Correction |
|---|---|
| Workaround restored service but cause is unknown | Label it temporary and symptom-based; preserve stop and escalation conditions |
| Article exists but users cannot find it | Improve title, keywords, category, and links before creating a duplicate |
| Two versions need different steps | Split or branch clearly by version; do not blend them |
| Steps require administrator access | Restrict audience and define authorized fulfiller; do not expose bypass guidance |
| Retirement removes a frequently linked URL | Plan supersession and redirect under governance |
| Case contains useful screenshots with personal data | Recreate or redact instructional visuals before publication |

## Completion Checklist

- Maintenance decision is evidence-backed
- Existing and conflicting knowledge was checked
- Technical basis and validation are clear
- Article states audience, scope, prerequisites, expected results, rollback, and escalation
- Sensitive and case-specific content is removed
- Source traceability and review ownership are present
- Publication and retirement remain unexecuted until approved

