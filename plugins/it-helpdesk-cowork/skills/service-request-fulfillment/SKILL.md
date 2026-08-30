---
name: service-request-fulfillment
description: |
  Reviews and prepares standard IT service requests for authorized fulfillment.
  Use when a user asks to "fulfill this service request", "check access approval",
  "prepare a software request", "review a shared mailbox or Teams request",
  "validate a hardware request", "check license entitlement", or "prepare a standard change".
  Verifies request scope, catalog rules, approvals, entitlement, risk, and completion evidence;
  it does not grant access, install software, change systems, or bypass approval controls.
license: MIT
metadata:
  author: lwokeray
  version: 2.0.1
---

# IT Service Request Fulfillment

## Overview

Prepare a catalog-style IT request for safe fulfillment. Determine whether the request is complete, approved, entitled, and ready for an authorized fulfiller. Preserve segregation of duties and provide a clear handoff, validation plan, and requester update.

## When to Use

- Software, license, hardware, peripheral, or standard equipment requests
- Access, role, group, shared mailbox, Team, site, or shared resource requests
- Standard, pre-approved configuration or service changes
- Reviewing whether required manager, owner, security, procurement, or data-owner approval exists
- Preparing fulfillment instructions for an authorized resolver
- Validating recorded completion evidence before requester confirmation

## When NOT to Use

- Unexpected service degradation — use `case-intake-triage` and classify as an incident
- Emergency, nonstandard, high-risk, or production change outside the service catalog
- Executing an access grant, credential reset, software installation, endpoint command, purchase, or configuration change
- Approving a request on behalf of another role
- Bypassing entitlement, licensing, segregation-of-duties, data-owner, or security controls
- Handling suspected unauthorized access as a routine request

## Quick Start

```text
User: "Prepare this shared mailbox access request for fulfillment."

1. Resolve requester, beneficiary, resource, requested role, business need, and duration.
2. Locate the exact approved catalog item and fulfillment rules.
3. Verify recorded approvals, entitlement, conflicts, and data sensitivity.
4. Mark each requirement Met, Missing, Conflicting, or Not applicable.
5. Produce a fulfillment handoff and validation plan; do not grant access.
```

## Supported Request Families

| Family | Examples | Key additional checks |
|---|---|---|
| Access and membership | App role, group, shared mailbox, Team, SharePoint site | Resource owner, least privilege, duration, SoD, data sensitivity |
| Software and license | Approved application, add-on, SaaS seat | Catalog approval, device/platform, license availability, procurement |
| Hardware | Laptop, display, peripheral, replacement | Eligibility, asset lifecycle, location, cost center, return obligation |
| Shared resource | Mailbox, Team, site, distribution list | Owner, purpose, naming, retention, external sharing policy |
| Standard change | Approved configuration template | Exact template, target scope, window, prerequisites, rollback, validator |
| Information service | Standard report or service data | Audience, data classification, authorized delivery channel |

If the request does not match an approved catalog item, classify it as nonstandard and route it to the documented evaluation process.

## Core Instructions

### 1. Resolve the Request Exactly

Capture:

- Request identifier and catalog item
- Requester and beneficiary; never assume they are the same
- Requested resource, product, role, quantity, configuration, or location
- Business purpose and requested duration
- Requested completion date and documented business dependency
- Cost center, manager, owner, device, or asset only when required by the catalog

Do not guess identities, groups, role names, SKUs, device identifiers, tenant names, or resource ownership.

### 2. Verify the Catalog Rule

Use the active approved service catalog. Record:

- Catalog item identifier and current status
- Eligibility and entitlement rules
- Required fields and approvals
- Authorized fulfillment group
- Standard target or SLA if an actual configured record exists
- Validation, rollback, renewal, expiration, or return requirements

Do not substitute an old case, informal message, or general technical knowledge for a current catalog rule.

### 3. Evaluate Approval Evidence

For every approval, record:

- Required role: manager, resource owner, data owner, security, procurement, or another configured authority
- Named approver and relationship to the request
- Decision, timestamp, scope, and conditions
- Source record

An email saying “looks fine” is not an approval unless the organization's process accepts that source and the sender has the required role. Never approve on the user's behalf or infer approval from silence.

### 4. Check Authorization and Risk

Apply these checks when relevant:

- Least privilege: requested role is no broader than the business need
- Segregation of duties: no prohibited combination is visible
- Data sensitivity: resource classification allows the beneficiary and channel
- External access: tenant, guest, and sharing controls are satisfied
- Licensing: entitlement and seat availability are recorded
- Device compliance: required state is confirmed by an approved source
- Duration: temporary access has a supported start and expiration plan
- Ownership: target resource and accountable owner are unambiguous
- Fulfillment authority: named resolver or group is permitted to execute

If the skill cannot verify a control, mark it `Not verified`; do not treat absence of evidence as approval.

### 5. Determine Fulfillment Readiness

Use one status:

- `Ready for authorized fulfillment`: every mandatory rule is met
- `Needs requester information`: required scope or beneficiary information is missing
- `Needs approval`: an identified approval is absent or incomplete
- `Needs catalog owner review`: request is nonstandard, conflicting, or ambiguous
- `Blocked by policy or entitlement`: a documented rule prevents fulfillment
- `Security escalation required`: the request contains a security concern or suspected unauthorized access

Do not label a request ready when a required control is merely planned.

### 6. Prepare the Fulfillment Handoff

Provide the authorized fulfiller with:

- Exact target and requested end state
- Catalog item and approved scope
- Verified approvals and conditions
- Preconditions and maintenance window, if configured
- Validation evidence to capture
- Rollback, expiration, return, or cleanup requirements
- Requester notification requirement

Do not invent shell commands, portal clicks, API calls, or configuration values. Reference approved runbooks when available.

### 7. Validate Recorded Completion

After an approved fulfiller reports completion, distinguish:

- Execution evidence: system or fulfiller record shows the action occurred
- Technical validation: requested state is observable
- Requester validation: beneficiary confirms the expected outcome
- Administrative completion: asset, license, expiration, or ownership records are updated

Do not mark the request complete solely because it was assigned or a task was closed.

## Output Format

```markdown
# Service request review — [Request ID]: [Catalog item]

## Readiness
- Status: ...
- Requester / beneficiary: ...
- Requested outcome: ...
- Requested date: ...

## Catalog and control review
| Requirement | Status: Met / Missing / Conflicting / N/A | Evidence |
|---|---|---|

## Approval record
| Approval role | Approver | Decision / condition | Time | Source |
|---|---|---|---|---|

## Risks and exceptions
- Least privilege / SoD: ...
- Data / external sharing: ...
- Licensing / asset / procurement: ...
- Nonstandard conditions: ...

## Authorized fulfillment handoff
- Target and end state: ...
- Approved runbook or catalog step: ...
- Preconditions: ...
- Validation evidence required: ...
- Rollback / expiration / return: ...
- Authorized fulfiller: ...

## Requester communication draft
[Concise readiness, missing information, or completion-validation message]

## Action boundary
- Fulfillment: Not executed by this skill
- Record/message updates: Require platform approval
```

## Guardrails

- Never grant access, reset credentials, install software, purchase equipment, or change configuration.
- Never bypass approval, entitlement, licensing, procurement, security, or segregation-of-duties controls.
- Never broaden the resource, role, group, duration, quantity, or beneficiary beyond the approved request.
- Never treat job title, manager status, urgency, or prior access as current authorization.
- Never expose approval records, group membership, data classification, or internal controls to an unauthorized audience.
- Route suspected compromise or unauthorized access to the approved security process.

## Common Issues

| Issue | Correction |
|---|---|
| Requester asks for access for someone else | Resolve beneficiary separately and verify the required approver |
| Manager approved but resource owner did not | Keep status `Needs approval` when both roles are required |
| Requested role is broader than business need | Propose the least-privilege catalog option; do not silently alter scope |
| Old request had the same approval | Require current evidence unless the catalog explicitly allows reuse |
| Fulfillment task says complete but user cannot validate | Record execution separately and continue validation |
| No matching catalog item exists | Route to catalog owner or nonstandard request process |

## Completion Checklist

- Requester, beneficiary, target, role or item, quantity, duration, and purpose are unambiguous
- Current catalog rule is identified
- Every required control has a status and evidence
- Approval roles and decisions are explicit
- Readiness is not overstated
- Handoff includes validation and cleanup requirements
- No privileged action or record mutation is implied as executed

