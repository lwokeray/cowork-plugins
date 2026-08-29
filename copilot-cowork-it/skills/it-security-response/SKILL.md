---
name: it-security-response
description: |
  Triages and coordinates enterprise cybersecurity alerts and incidents using evidence
  preservation, severity and scope assessment, identity/device/cloud/mail investigation,
  containment approval, eradication, recovery, notification, and post-action verification. Use
  for suspicious sign-ins, phishing, malware, compromised accounts, leaked credentials, risky
  users or devices, impossible travel, malicious inbox rules, data exposure, ransomware,
  unauthorized access, security alerts, containment requests, or security incident reporting.
---

## Overview

Protect people, systems, and evidence while minimizing unnecessary business disruption. Treat an alert as a claim until corroborated, and treat containment as a consequential action requiring exact scope and authority.

## Activation

- Credible alert involving identity, endpoint, email, cloud, network, data, or application
- User reports phishing, credential theft, malware, unusual prompts, or unauthorized activity
- Security control detects active compromise or material policy violation
- IT incident reveals indicators of compromise or unauthorized data access

## Immediate Safety

1. Record alert source, ID, detection time, affected identities/assets, and current severity.
2. Preserve logs, messages, headers, files, URLs, hashes, session data, and cloud audit events through approved evidence channels.
3. Identify whether threat activity is ongoing and whether privileged accounts, sensitive data, or broad infrastructure are involved.
4. Assign incident commander/security owner and communication restrictions.
5. Avoid tipping off an attacker through compromised channels.
6. Choose proportional containment with business and evidence impact understood.

## Investigation Workflow

1. Resolve every user, mailbox, device, IP, application, resource, and tenant to authoritative IDs.
2. Establish the initial access vector and first known malicious event.
3. Build a timeline across sign-ins, authentication methods, sessions, inbox rules, endpoint events, cloud activity, data access, and admin changes.
4. Separate observed evidence from user reports, detector hypotheses, and analyst inference.
5. Determine affected scope, privilege, persistence, lateral movement, data accessed, and external communication.
6. Search only for related indicators and behaviors within authorized scope.
7. Evaluate benign explanations and control effectiveness.
8. Set severity and containment priority from current evidence.

## Containment Options

| Domain | Possible controlled action |
|---|---|
| Identity | Disable sign-in, revoke sessions, reset authentication methods, remove privilege |
| Endpoint | Isolate device, block artifact, preserve image/logs, restrict network |
| Email | Purge confirmed malicious messages, block sender/domain/URL, remove malicious rules |
| Cloud | Disable key/service principal, restrict resource access, rotate secret with consumer plan |
| Network | Block specific indicator, segment affected asset, restrict egress |
| Data | Suspend sharing, preserve audit/versions, limit access |

Apply the narrowest effective action. Record approval, target, time, reason, expected impact, and reversal condition. Never perform broad tenant containment from an unresolved indicator.

## Eradication and Recovery

1. Remove persistence and malicious artifacts.
2. Close the initial-access weakness.
3. Rotate compromised credentials/secrets using clean channels and dependency-aware overlap.
4. Rebuild or restore endpoints/services when trust cannot be re-established.
5. Restore access gradually with monitoring.
6. Validate identity, endpoint, mailbox, cloud, network, and data state.
7. Confirm business service and security controls are healthy.
8. Monitor for recurrence across the defined window.

## Evidence Handling

- Preserve original timestamps, timezone, source, collector, and hash where applicable.
- Minimize copying; use approved restricted storage.
- Do not paste credentials, tokens, full mailbox content, or personal data into general tickets.
- Record collection gaps and retention limits.
- Coordinate legal, privacy, HR, and regulatory notifications through authorized owners.

## Output Contract

Return a restricted incident record:

```text
Security incident: ID/status/severity/owner
Affected scope: Verified identities, assets, services, data
Timeline: Timestamped observed events and actions
Evidence: Source, location, integrity, and access restriction
Assessment: Initial access, persistence, impact, and proof gaps
Containment: Target, approval, effect, verification, reversal
Recovery: Clean-state criteria and monitoring
Notifications: Required owner/status; do not send unless authorized
Residual risk and next actions: Owner and due condition
```

Do not reveal hidden reasoning, secrets, unrestricted indicators, or unsupported attribution.

## Guardrails

- Never ask the user to send passwords, MFA codes, recovery codes, tokens, or private keys.
- Never disable MFA, logging, endpoint protection, retention, or audit controls to simplify investigation.
- Never test malicious payloads or exploit systems without explicit authorized scope.
- Never attribute an attacker, malware family, or data breach without evidence.
- Do not delete evidence during remediation.
- Do not notify customers, regulators, law enforcement, or broad audiences unless explicitly authorized.
- Verify containment and recovery through authoritative readback and monitoring.

## Common Issues

| Issue | Correction |
|---|---|
| Alert has no corroboration | Keep as alert/needs investigation; do not overstate incident scope |
| Account disabled | Also assess sessions, methods, mailbox rules, applications, and data access |
| Device isolated | Confirm isolation state and preserve a recovery/forensics path |
| Phishing message removed | Check clicks, credentials, sessions, forwarding, and related recipients |
| Secret rotated | Verify every consumer and revoke old secret after overlap |
| No logs available | Preserve the gap, use alternate evidence, and avoid definitive conclusions |
