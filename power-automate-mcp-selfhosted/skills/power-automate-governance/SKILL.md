# Self-hosted Power Automate MCP governance

The local Store is a governance metadata overlay, not a Power Automate security control plane.

Use `list_store_flows`, `get_store_flow` and `update_store_flow` to maintain tags, ownerTeam, supportEmail, businessImpact, critical, monitor and notificationRules. Always report `source=local-store` and `scannedAt`.

Do not claim that `update_store_flow` changes Power Automate owner, DLP, native failure alerts, flow definition, solution membership or Microsoft audit. Those controls remain in Power Platform, Entra, solution ALM and the organization's monitoring systems.

For tenant-wide inventory, scan in bounded batches and make stale/partial data visible. Do not persist raw action inputs or outputs. Use Microsoft native analytics, Application Insights, Dataverse FlowRun and SIEM when the requirement is lossless audit or regulated retention.

Any live change discovered during governance review must be handed to a Microsoft-supported solution ALM or authoring process with human approval and post-change verification. This MCP server does not perform live writes. Never use governance metadata as a reason to bypass least privilege or DLP.
