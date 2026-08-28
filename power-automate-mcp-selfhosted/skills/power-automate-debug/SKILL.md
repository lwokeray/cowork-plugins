# Power Automate debug

1. Discover the environment and flow IDs.
2. Call `get_live_flow_runs` and select the exact run ID.
3. Call `get_live_flow_run_summary` for run-level status and error.
4. Call `list_live_flow_actions` with `workflowId` only to understand the static action inventory.
5. State the evidence and uncertainty clearly. Do not infer the last failed action or inspect runtime action inputs/outputs because this server's documented API surface does not expose them.
6. Recommend Power Automate run history or the supported Management connector when action-level evidence is required.
