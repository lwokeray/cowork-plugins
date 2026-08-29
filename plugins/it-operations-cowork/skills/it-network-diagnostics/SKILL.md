---
name: it-network-diagnostics
description: |
  Diagnoses enterprise connectivity and network-service issues across client, Wi-Fi, LAN, VPN,
  DNS, DHCP, proxy, firewall, routing, load balancer, TLS, internet, and cloud network paths using
  layered evidence and safe tests. Use for “no internet”, intermittent connectivity, slow network,
  VPN failure, DNS resolution errors, certificate warnings, unreachable applications, packet loss,
  site outages, blocked ports, proxy problems, or network change validation.
license: MIT
metadata:
  author: lwokeray
  version: "1.0.1"
---

## Overview

Locate the failing network layer without making broad firewall or routing changes. Distinguish name resolution, reachability, transport, TLS, authentication, application response, and performance.

## Intake

- Source user/device/site/network and destination service/host
- Exact timestamp and timezone
- Wired, wireless, VPN, mobile, or cloud path
- Scope and frequency
- Error text, status code, and affected protocol
- Recent endpoint, certificate, firewall, DNS, proxy, ISP, or cloud changes

## Layered Workflow

1. Confirm device link, IP configuration, gateway, DNS servers, proxy, VPN, and clock.
2. Check known site, ISP, VPN, DNS, certificate, cloud, and application incidents.
3. Test name resolution and record resolver, answer, TTL, split-horizon behavior, and DNSSEC where applicable.
4. Test route and transport to the exact host and port. Do not equate ping failure with service failure.
5. Validate TLS hostname, chain, validity, protocol, SNI, and interception behavior.
6. Validate application response, redirects, authentication boundary, and dependency endpoints.
7. Compare affected and unaffected sources to isolate device, segment, site, region, or destination.
8. Correlate firewall, proxy, VPN, load-balancer, and flow logs using the same time window.
9. Identify the smallest supported correction or workaround.
10. Verify the complete user path and monitoring after approved change.

## Diagnostic Matrix

| Symptom | Evidence to collect |
|---|---|
| No IP | Link, VLAN/SSID, DHCP lease, address conflict, NAC state |
| DNS failure | Query, resolver, response code, authoritative record, cache, split DNS |
| Host reachable, app unavailable | Port, TLS, proxy, load balancer, app health, authentication |
| Intermittent slowness | Latency, loss, jitter, utilization, retransmission, Wi-Fi signal, time pattern |
| VPN failure | Client/version, profile, identity/MFA, certificate, tunnel negotiation, routes, DNS |
| Certificate warning | Hostname, chain, expiry, trust store, interception, server binding, clock |
| One site affected | Local circuit, gateway, DNS forwarder, Wi-Fi/controller, tunnel, change history |

## Change Rules

- Do not open broad ports, use `any/any`, disable inspection, bypass proxy, or weaken TLS as a diagnostic shortcut.
- For proposed firewall, route, DNS, or load-balancer changes, specify source, destination, protocol, port, direction, environment, owner, duration, rollback, and validation.
- Use temporary rules only with expiry and monitoring.
- Capture current configuration and dependencies before mutation.
- Validate from both allowed and disallowed paths after a security-control change.

## Output Contract

Return:

1. `Path` — source, destination, protocol, port, network context
2. `Scope` — affected versus unaffected
3. `Layer evidence` — link/IP, DNS, route/transport, TLS, application
4. `Finding` — proven failing layer or explicit unknown
5. `Action` — safe test, proposed change, executed change, or escalation
6. `Verification` — end-to-end result and monitoring
7. `Rollback/expiry` — for any temporary change

Do not output hidden reasoning or unrestricted network configuration. Keep sensitive topology and public IP detail minimized to the audience.

## Guardrails

- Respect authorization boundaries for packet capture, scanning, and external testing.
- Do not run broad network scans or penetration tests from a troubleshooting request.
- Do not expose VPN secrets, private keys, shared secrets, or full packet contents.
- Never change production routing, DNS, firewall, proxy, or certificate state without explicit scope and approval.
- Preserve timestamps, logs, and configuration evidence during outages.
- A successful local test does not prove all users or paths are restored.

## Common Issues

| Issue | Correction |
|---|---|
| Ping fails | Test actual protocol/port and review ICMP policy |
| DNS works on one device | Compare resolver, suffix, cache, VPN, and split-horizon state |
| TLS fixed by ignoring warning | Reject workaround; repair trust, name, chain, binding, or clock |
| VPN connects but app fails | Check routes, DNS, proxy, authorization, and overlapping subnets |
| Rule change has no effect | Verify policy order, direction, target, deployment, and effective config |
| Intermittent issue disappears | Preserve telemetry window and monitor recurrence criteria |
