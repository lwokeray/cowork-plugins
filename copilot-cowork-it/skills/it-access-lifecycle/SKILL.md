---
name: it-access-lifecycle
description: |
  Manages enterprise identity and access lifecycle tasks using authoritative directory evidence,
  least privilege, separation of duties, approval and expiry controls, and post-change readback.
  Use for joiner-mover-leaver processing, account or group access, role assignments, license
  access, guest users, shared resources, MFA and authentication troubleshooting, access reviews,
  dormant accounts, session revocation, emergency access, or “who has access to this?” questions.
---

## Overview

Handle identity work as a security-sensitive lifecycle, not a simple directory edit. Keep identity resolution, entitlement, authentication, authorization, and licensing distinct.

## When to Use

- Joiner, mover, or leaver events
- Group, application, mailbox, site, role, or resource access
- MFA, sign-in, passwordless, conditional-access, or session problems
- Guest lifecycle and external collaboration access
- Access certification, orphaned access, dormant accounts, or privilege review
- Emergency access with explicit authorization

## When NOT to Use

- General endpoint failure without identity evidence
- Code-level authorization design
- Security containment already owned by an active security incident commander
- Anonymous or unresolved user requests affecting access

## Identity Resolution

1. Resolve the person through an authoritative directory or HR-backed identity record.
2. Match stable ID, tenant, employment/guest state, manager, department, and location.
3. Never construct an email address or assume two similar names are the same person.
4. If identity remains ambiguous, stop all writes and request a stable identifier.

## Joiner Workflow

1. Confirm start date, worker type, manager, role profile, location, and sponsor.
2. Apply birthright access from approved role policy, not from a copied peer account.
3. Request resource-owner approval for non-birthright access.
4. Assign minimum licenses and groups.
5. Require strong authentication enrollment through approved channels.
6. Verify account, group, role, license, and mailbox/resource provisioning separately.
7. Record outstanding tasks and first-day validation owner.

## Mover Workflow

1. Capture old and new role profiles and effective date.
2. Calculate additions, removals, conflicts, and separation-of-duties risks.
3. Remove obsolete access; do not only add new access.
4. Preserve temporary overlap only with owner, reason, and expiry.
5. Read back effective memberships and role assignments.

## Leaver Workflow

1. Verify termination authority, effective time, legal hold, and HR source.
2. Disable sign-in at the authorized time.
3. Revoke active sessions and tokens when authorized.
4. Remove privileged roles and external sharing.
5. Preserve mailbox, files, device, records, and evidence according to retention policy.
6. Transfer ownership to a resolved recipient; never invent one.
7. Reclaim licenses and assets only after dependency checks.
8. Verify disabled state, session status, role removal, forwarding/delegation, and retention separately.

## Access Request Workflow

1. Identify resource, requested role, beneficiary, duration, and business purpose.
2. Check existing access and avoid duplicate or conflicting assignment.
3. Identify the authoritative resource owner and approval policy.
4. Evaluate least privilege, data sensitivity, external access, and separation of duties.
5. Prefer group- or role-based access over direct grants.
6. Set expiry for temporary or privileged access.
7. Execute only after required approval.
8. Read back the effective assignment and test access without exposing protected data.

## Authentication Troubleshooting

Check in order:

1. Account state and tenant
2. Sign-in logs and failure code
3. Credential or authentication-method registration state
4. Conditional-access result
5. Device compliance and join state
6. Application assignment and consent
7. Network/location constraints
8. Session/token state

Do not disable MFA or security policy merely to test. Use a controlled test account or approved temporary policy exception with expiry.

## High-Impact Actions

Account disablement, role elevation, session revocation, guest removal, emergency access, and authentication-method reset require exact target resolution and explicit authorization. After execution, perform authoritative readback and report collateral impact.

## Output Contract

Return:

```text
Identity: Resolved stable ID and tenant, with sensitive fields minimized
Lifecycle event: Joiner / mover / leaver / access / authentication / review
Requested entitlement: Resource, role, duration
Evidence: Current account, access, sign-in, and approval state
Risk checks: Least privilege, SoD, data class, external access
Action: Drafted / approved / executed / blocked
Verification: Effective state after action
Expiry and owner: Review or removal condition
```

Do not expose hidden reasoning, access tokens, authentication secrets, or unnecessary personal data.

## Guardrails

- Never accept self-approval where separation of duties is required.
- Never copy all permissions from another person as a shortcut.
- Never grant standing privilege when just-in-time access is available.
- Never send credentials or recovery codes through tickets, email, or chat.
- Do not delete identities to solve ordinary access problems.
- Treat offboarding timing and legal hold as authoritative constraints.
- A successful assignment call is not proof of effective access; verify propagation and effective membership.

## Common Issues

| Issue | Response |
|---|---|
| Duplicate names | Resolve by immutable directory ID |
| Group added but no access | Check nested-group support, propagation, app assignment, and license |
| MFA loop | Inspect failure code, method state, device, policy, and clock before reset |
| Leaver owns resources | Transfer ownership before license or account removal |
| Guest still active | Check invitations, direct grants, teams/sites, sessions, and expiry |
| Emergency elevation | Time-box, log, monitor, and remove with readback |
