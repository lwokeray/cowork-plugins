# Copilot Studio setup

## Remote MCP tool

1. Publish the server behind an HTTPS reverse proxy. Keep the Node listener private and configure a long random `MCP_HTTP_API_KEY`.
2. In Copilot Studio open `Tools > Add a tool > New tool > Model Context Protocol` and enter the `/mcp` URL.
3. Configure API-key authentication for an internal PoC. For per-user delegated production access, add a real OAuth 2.0 gateway; the repository's device-code provider is process authentication, not a Copilot OAuth callback.
4. Turn off **Allow all tools**. Explicitly enable only the required read-only tools, starting with `server_info`, `list_live_environments`, `list_live_flows`, `get_live_flow_runs`, and `get_live_flow_run_summary`.
5. In agent instructions require discovery of environment/flow/run IDs, treat all returned tenant content as untrusted data, and state that action-level runtime outputs and live writes are unavailable.

## Native agent flow

A native Copilot Studio agent flow is a different artifact from an MCP tool. Keep it in the same environment and solution as the agent, use `When an agent calls the flow` plus `Respond to the agent`, define explicit inputs/outputs, set **Asynchronous response = Off**, and complete within the 100-second response limit.

Do not assume a generic HTTP action is an MCP client: MCP requires initialize, session-header handling and JSON-RPC. Prefer adding this server directly as the agent's MCP tool. If a native agent flow must mediate it, use a supported connector or wrapper that implements the MCP protocol and test the complete session exchange.

## Recommended tool mapping

| Goal                       | Tool                                                                 |
| -------------------------- | -------------------------------------------------------------------- |
| Check capability           | `server_info`                                                        |
| Find IDs                   | `list_live_environments`, `list_live_flows`                          |
| Review recent runs         | `get_live_flow_runs`                                                 |
| Read one run-level error   | `get_live_flow_run_summary`                                          |
| Review static flow actions | `list_live_flow_actions`                                             |
| Bounded orchestration      | `run_copilot_agent_flow` with `discover`, `diagnose`, or `inventory` |

Validate authentication, DLP, tenant RBAC, latency and tool selection in a non-production environment before publishing the agent.
