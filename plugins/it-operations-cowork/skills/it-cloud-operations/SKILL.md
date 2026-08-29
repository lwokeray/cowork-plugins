---
name: it-cloud-operations
description: |
  Operates and troubleshoots enterprise cloud resources and platform services using resource
  inventory, health, activity logs, metrics, configuration, identity, network, dependency, cost,
  capacity, and deployment evidence. Use for Azure or multi-cloud resource health, application or
  platform outages, failed deployments, quota and capacity issues, cloud configuration drift,
  availability, scaling, certificate, storage, database, Kubernetes, messaging, cost anomalies,
  or cloud operational readiness and validation.
license: MIT
metadata:
  author: lwokeray
  version: "1.0.1"
---

## Overview

Use live control-plane and runtime evidence to diagnose cloud services. Keep “resource exists,” “deployment succeeded,” “configuration is valid,” and “service works for users” as separate claims.

## When to Use

- Cloud resource outage, degradation, deployment failure, or health alert
- Capacity, quota, scale, performance, or cost concern
- Cloud network, identity, certificate, storage, database, container, or messaging dependency issue
- Configuration drift, operational review, reliability, or readiness validation
- Planned low-risk remediation with approval and rollback

## When NOT to Use

- Initial architecture design with no operational artifact
- Unscoped tenant-wide mutation
- Security compromise requiring incident containment
- Application code changes unless necessary to diagnose and explicitly requested

## Investigation Pipeline

1. Confirm account/subscription, tenant, region, environment, resource ID, owner, and criticality.
2. Check provider service health and resource health.
3. Inspect deployment state, recent activity, policy/lock state, and configuration changes.
4. Inspect runtime metrics, logs, traces, alerts, and dependency health for the affected window.
5. Trace identity, network, DNS, certificate, secret reference, data, quota, and downstream dependencies.
6. Compare current state with desired configuration or last known good deployment.
7. Determine whether the issue is control plane, data plane, workload, dependency, capacity, or client path.
8. Select a reversible remediation and document blast radius, approval, rollback, and validation.
9. Execute only within authorized scope.
10. Read back control-plane state and validate runtime behavior and monitoring.

## Evidence Order

| Layer | Examples |
|---|---|
| Provider | Service health, regional event, maintenance |
| Resource | Provisioning state, health, SKU, quota, lock, policy |
| Change | Activity log, deployment, configuration revision |
| Runtime | Metrics, logs, traces, restarts, health probes |
| Dependency | Identity, network, DNS, certificate, secret, storage, database, queue |
| User path | Endpoint, authentication, transaction, latency, correctness |

## Operational Actions

- Restart, scale, failover, rotate, redeploy, restore, detach, delete, and network-rule changes are consequential.
- Prefer configuration correction, traffic shift, or bounded restart over resource recreation.
- Before failover or restore, establish data currency, replication state, RPO/RTO, split-brain risk, client routing, and failback plan.
- Before scaling, distinguish temporary saturation from inefficient workload, leak, retry storm, dependency delay, or quota ceiling.
- Before secret/certificate rotation, identify every consumer and overlap period.

## Deployment Validation

Validate separately:

1. Template or manifest parses
2. Policy and permissions allow deployment
3. Deployment reaches terminal success
4. Resource configuration matches intent
5. Runtime starts and remains healthy
6. Dependencies connect
7. User transaction succeeds
8. Monitoring and rollback are ready

Do not call a deployment complete at step 3.

## Output Contract

Return:

```text
Scope: Tenant/subscription/project, environment, region, resource IDs
Impact: Service and business effect
Health: Provider and resource state with timestamps
Evidence: Changes, runtime signals, dependencies, configuration
Finding: Confirmed cause or proof gap
Action: Proposed/executed, approval, blast radius, rollback
Verification: Control plane, runtime, transaction, monitoring
Follow-up: Reliability, cost, capacity, or debt action
```

Do not disclose hidden reasoning, credentials, tokens, connection strings, or unnecessary resource topology.

## Guardrails

- Default to read-only discovery.
- Never assume the current subscription, project, tenant, region, or environment.
- Never remove locks, policies, backups, diagnostics, or security controls to make deployment pass without explicit authorization.
- Never delete/recreate a stateful resource until backup, restore, dependencies, IDs, endpoints, and downtime are understood.
- Do not claim application recovery from resource health alone.
- Preserve unrelated user changes and infrastructure ownership.

## Common Issues

| Issue | Correction |
|---|---|
| Deployment says succeeded, app fails | Validate runtime, dependencies, endpoint, and user transaction |
| Resource not found | Reconfirm account, subscription/project, region, resource group, and ID |
| Scaling did not help | Inspect bottleneck, dependency, retry, and quota evidence |
| Certificate rotated, clients fail | Check chain, binding, secret version, consumer reload, and overlap |
| Failover works, data stale | Report RPO breach separately; do not call fully restored |
| Portal and API disagree | Compare timestamps, effective state, cache, and authoritative endpoint |
