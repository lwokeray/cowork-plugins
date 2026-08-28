# External research sources for implementation

## Microsoft Power Platform API

- Power Platform API reference: https://learn.microsoft.com/en-us/rest/api/power-platform/
  - REST pattern: `https://api.powerplatform.com/{namespace}/{resource}?api-version={version}`.
  - Supports GET, POST, PATCH, PUT, DELETE; environment-level resources include environment ID in path.
  - Current documentation observed 2026-07-10.
- List Flow Runs: https://learn.microsoft.com/en-us/rest/api/power-platform/powerautomate/flow-runs/list-flow-runs
  - API version `2024-10-01`.
  - Endpoint: `GET https://api.powerplatform.com/powerautomate/environments/{environmentId}/flowRuns?workflowId={workflowId}&api-version=2024-10-01`.
  - Uses Microsoft Entra OAuth2 `.default`; possible responses include 200, 204, 400, 401, 403, 404, 500.
- List Flow Actions: https://learn.microsoft.com/en-us/rest/api/power-platform/powerautomate/flow-actions/list-flow-actions
  - API version `2024-10-01`.
  - Endpoint: `GET https://api.powerplatform.com/powerautomate/environments/{environmentId}/flowActions?api-version=2024-10-01` with optional workflowId, connector, trigger and parameter filters.
- Power Automate Management connector: https://learn.microsoft.com/en-us/connectors/flowmanagement/
  - Microsoft connector supports create, get, update, turn on/off, resubmit, cancel, list flows/connections/environments/connectors and related management operations.
  - “As Admin” operations are intended for admin privileges; service principal authentication is supported for administrative actions only.
  - Connector docs state default throttling limits of 300 non-GET requests per connection per 3600 seconds and 5 API calls per connection per 60 seconds.

## Microsoft identity

- Permissions and consent overview: https://learn.microsoft.com/en-us/entra/identity-platform/permissions-consent-overview
  - Delegated access acts on behalf of a signed-in user; application and user are authorized separately.
  - Delegated permissions cannot grant access beyond what the signed-in user can access.
  - App-only permissions are for background/service scenarios and require application permissions/admin consent.

## Microsoft MCP integration

- Power Platform CLI built-in MCP: https://learn.microsoft.com/en-us/power-platform/developer/howto/use-mcp
  - Microsoft positions it for local development and testing.
  - Uses `pac copilot mcp --run`, local stdio registration, and .NET 10+.
- Copilot Studio existing MCP server: https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-add-existing-server-to-agent
  - Copilot Studio supports Streamable transport.
  - Existing server can use none, API key, or OAuth 2.0 authentication.
  - MCP access is governed through Power Platform connector data policies.

## MCP protocol

- Tools spec: https://modelcontextprotocol.io/specification/2026-07-28/server/tools
  - MCP tools expose names, descriptions, inputSchema and optional outputSchema.
  - Clients discover with `tools/list` and invoke with `tools/call`.
  - Tool calls are model-controlled, but human-in-the-loop confirmation is recommended for sensitive operations.
  - Servers should validate inputs, enforce access controls, rate limit and sanitize outputs.
- Streamable HTTP: https://modelcontextprotocol.io/specification/2026-07-28/basic/transports/streamable-http
  - Single MCP endpoint accepts POST; each JSON-RPC request is its own HTTP POST.
  - Servers should authenticate connections and validate Origin to prevent DNS rebinding.
  - Current spec requires protocol/request metadata headers and supports JSON or request-scoped SSE responses.
