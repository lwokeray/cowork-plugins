# Power Platform API contract

Base URL: `https://api.powerplatform.com`. API version defaults to `2024-10-01`. Continuation URLs are accepted only when they remain on the configured HTTPS origin.

| Capability   | Method and path                                                                | MCP tool                                          |
| ------------ | ------------------------------------------------------------------------------ | ------------------------------------------------- |
| Environments | `GET /environmentmanagement/environments`                                      | `list_live_environments`                          |
| Connections  | `GET /connectivity/environments/{environmentId}/connections`                   | `list_live_connections`                           |
| Connectors   | `GET /connectivity/environments/{environmentId}/connectors`                    | `list_live_connectors`, `describe_live_connector` |
| Cloud flows  | `GET /powerautomate/environments/{environmentId}/cloudFlows`                   | `list_live_flows`                                 |
| Flow runs    | `GET /powerautomate/environments/{environmentId}/flowRuns?workflowId={flowId}` | `get_live_flow_runs`, `get_live_flow_run_summary` |
| Flow actions | `GET /powerautomate/environments/{environmentId}/flowActions`                  | `list_live_flow_actions`                          |

Every request adds `api-version`. Identifiers are path encoded, connector lookups use an escaped OData filter, responses are normalized from either top-level fields or nested `properties`, and GET requests retry only bounded 429/5xx failures.

## Deliberately unsupported

The public REST documentation used here does not define direct endpoints for full flow definitions, create/update, start/stop, trigger callback URLs, resubmit/cancel, or runtime action inputs/outputs. Similar operations in the Power Automate Management connector are a separate supported surface and are not fabricated as `api.powerplatform.com` routes.

Consequently this release exposes no live write tools and does not infer action-level runtime root cause. Add such features only after validating an official contract in a sandbox tenant and adding explicit authorization, approval, idempotency, rollback, audit, and integration tests.
