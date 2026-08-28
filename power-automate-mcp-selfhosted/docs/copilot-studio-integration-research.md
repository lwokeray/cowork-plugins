# Copilot Studio integration research

Research date: 2026-08-28 (user timezone)

## Verified Microsoft facts

1. Copilot Studio agent flows are part of the standard harness. A flow has a trigger and at least one action, and can be manually triggered, event-triggered, agent-triggered or scheduled. Actions include AI capabilities, human-in-the-loop, built-in controls and connectors. Source: https://learn.microsoft.com/en-us/microsoft-copilot-studio/flows-overview
2. A published flow can be added to an agent as a tool when it uses the `When an agent calls the flow` trigger and the `Respond to the agent` action. The agent tool configuration includes name, description, input mapping and completion behavior. Source: https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-use-flow
3. Existing Power Automate cloud flows can be converted to agent flows when they are in a solution and the user has Copilot Studio capacity. Conversion changes billing/capacity behavior and is one-way. Source: https://learn.microsoft.com/en-us/microsoft-copilot-studio/flows-overview
4. Copilot Studio can connect to an existing MCP server through the MCP onboarding wizard or a custom MCP connector. The documented supported transport is Streamable; SSE is no longer supported after August 2025. The wizard supports no auth, API key or OAuth 2.0. Source: https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-add-existing-server-to-agent
5. Copilot Studio's MCP access relies on Power Platform connectors, so data policies regulating connectors also regulate access to the MCP server and its tools. Source: https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-add-existing-server-to-agent

## Implementation implication

The self-hosted server should expose a public HTTPS Streamable MCP endpoint for Copilot Studio. API-key mode is the fastest PoC; OAuth 2.0 is the correct production direction if each end user must use delegated identity. Copilot Studio's native agent-flow tool is not the same object as an MCP server tool. The repository will therefore add a Copilot Studio contract and setup guide, but it will not pretend that an MCP tool can programmatically create or publish a native Copilot Studio agent flow without an additional Power Platform authoring API.

For the agent-compatible path, the server should provide deterministic tool contracts with explicit input and output fields, safe descriptions, correlation IDs, and bounded response size. Add the remote MCP server directly as a Copilot Studio agent tool. A generic HTTP action is not automatically an MCP client because it must implement initialize, JSON-RPC and session handling. Native agent flows remain separate artifacts authored and published in Copilot Studio/Power Automate.
