---
name: it-endpoint-support
description: |
  Diagnoses and manages enterprise Windows, macOS, mobile, and virtual endpoints using inventory,
  compliance, configuration, application, performance, storage, security, and user-context
  evidence. Use for slow or unstable devices, disk-full conditions, update failures, application
  deployment, enrollment or compliance issues, VPN/client problems, peripheral failures, device
  replacement, remote remediation, quarantine, retirement, or endpoint health reviews.
license: MIT
metadata:
  author: lwokeray
  version: "1.0.2"
---

## 執行前提與交付方式

本 Plugin 提供工作方法，不會自行授予資料存取或系統操作能力。下文列出的 Work IQ、MCP 或應用操作，僅在本次工作環境實際提供對應工具、連線與使用者權限時適用；不得依工具名稱猜測路徑、欄位或成功結果。

沒有即時工具時，可用使用者提供或已授權匯出的資料完成本 Skill 的分析與草稿，保留資料日期、版本與無法即時驗證的範圍。政策拒絕或權限不足時停止該操作，不透過其他帳號、工具或瀏覽器繞過；仍交付可完成的部分。

使用者要求可下載的草稿文件時，完成該文件屬於所請交付物；「草稿」或「不要發布」不等於禁止產生供本人審閱的新檔。明確要求只讀或不建立檔案時遵守其限制。修改共用原檔、寫入正式系統、寄送、排程與發布，仍依後文的目標、差異、核准及執行後驗證規則處理；產生草稿不代表完成這些動作。

## Overview

Restore endpoint service without destroying user data or diagnostic evidence. Separate device, profile, network, identity, application, policy, and hardware causes.

## Intake

- Resolve user and device from authoritative inventory
- Record device ID, OS/version, model, management state, compliance state, ownership, location, and last check-in
- Capture symptom, exact error, start time, recent change, reproducibility, and business impact
- Determine whether data loss, security compromise, or hardware safety risk exists

## Diagnostic Pipeline

1. Check management connectivity, last check-in, compliance, and active alerts.
2. Check service health and whether similar devices are affected.
3. Inspect available storage, CPU/memory pressure, crash events, update status, encryption, security-agent health, and network state.
4. Compare assigned policy and application state with effective state.
5. Correlate the first failure time with updates, deployments, policy changes, driver changes, or user actions.
6. Select the smallest reversible remediation.
7. Preserve logs and recovery information before resets, reinstallation, profile removal, or wipe.
8. Execute remote actions only against the resolved device and only with required approval.
9. Verify check-in, compliance, application health, user scenario, and monitoring state separately.
10. Record whether the outcome is restored, workaround, replacement, or escalation.

## Common Playbooks

### Slow device

- Confirm whether the issue is continuous or workload-specific
- Check storage pressure, memory pressure, CPU saturation, startup load, update activity, thermal events, and disk health
- Identify resource consumers without terminating processes automatically
- Prefer targeted cleanup or configuration correction over broad “optimizer” actions

### Disk full

- Inventory usage read-only first
- Separate system files, application data, user files, caches, update residue, logs, and sync placeholders
- Classify cleanup candidates as safe, review-required, or protected
- Never delete user data, recovery points, logs under investigation, or managed application content without explicit authorization

### Update failure

- Record update identifier, error code, retry history, free space, power/network state, and deployment ring
- Check whether the update is paused, superseded, blocked, or incompatible
- Avoid repeated blind retries when rollback or servicing repair is required

### Enrollment/compliance

- Verify tenant, ownership, join state, management authority, certificate, clock, user license, and policy assignment
- Do not unenroll or factory-reset before recovery and data-impact checks

### Application problem

- Confirm version, assignment, install context, dependencies, logs, and affected profile
- Repair or reinstall only after preserving local configuration and confirming deployment source

## Remote Action Risk

| Action | Required condition |
|---|---|
| Sync/check-in | Correct device resolution; low impact |
| Restart service/device | User impact understood and explicit intent |
| Remove application/profile | Data and dependency impact checked |
| Rotate recovery key | Approved process and verified escrow |
| Isolate device | Security authorization and communication plan |
| Retire/wipe | Explicit target, authority, backup/recovery state, ownership and legal checks |

## Output Contract

Return:

1. `Device` — resolved asset and management state
2. `Impact` — user/business/security effect
3. `Evidence` — health, policy, logs, changes, timestamps
4. `Diagnosis` — proven layer or ranked possibilities marked as inference
5. `Action` — completed, proposed, or blocked with approval status
6. `Verification` — check-in, compliance, telemetry, and user scenario
7. `Data safety` — backup, recovery, and preserved evidence status

Do not output chain-of-thought or raw secrets. Do not claim device recovery from remote-action acceptance alone.

## Guardrails

- Never wipe, retire, isolate, delete profiles, or rotate keys without exact target verification and authorization.
- Never disable encryption, endpoint protection, firewall, or compliance controls as a convenience.
- Never upload unrestricted diagnostic bundles containing credentials, tokens, personal files, or sensitive browsing data.
- Use approved enterprise deployment and remote-support channels.
- If hardware swelling, overheating, electrical smell, or physical damage is reported, stop use and follow safety escalation.
- If compromise indicators exist, preserve evidence and route to `it-security-response`.

## Common Issues

| Issue | Correction |
|---|---|
| Device not checking in | Distinguish offline, stale identity, retired device, agent failure, and network block |
| Remote action pending | Do not report success; show last check-in and pending state |
| Compliance conflict | Compare assigned and effective policies with evaluation timestamps |
| Disk cleanup risk | Present exact candidates and recoverability before deletion |
| Reinstall loses settings | Back up or document configuration and user data first |
| Replacement issued | Track custody, migration, return, data sanitization, and old-device disposition |
