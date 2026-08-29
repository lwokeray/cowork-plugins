# Source package review

The uploaded `microsoft_sales_cowork_single_plugin.zip` was a design package rather than a deployable Copilot Cowork plugin. It contained a non-schema `plugin-manifest.json`, Agent Builder instructions, and workflow design material, but no M365 unified `manifest.json`, required icons, or `skills/*/SKILL.md` files. Its README also referenced `testing/acceptance-tests.md` and `research/`, which were not included in the ZIP.

The deployable package in this directory converts the design into a Microsoft 365 Copilot Cowork skills-only app package:

- thirteen bounded Agent Skills under `skills/`;
- a schema-v1.28 M365 manifest with only documented root fields;
- required 192×192 and 32×32 PNG icons;
- a static validator and tenant acceptance scenarios; and
- no connector or hidden write capability.

The source design's approval and evidence rules are retained. Microsoft 365 retrieval and actions use Cowork's built-in unified Work IQ MCP tools. Tasks and execution status are held in Planner; account, opportunity, pipeline, forecast, proposal, and renewal records are represented by approved Excel, SharePoint, OneDrive, Word, and PowerPoint artifacts.

## Cowork runtime model

Cowork is natively grounded in Microsoft 365 through Work IQ. Sales Cowork doesn't package another connector: its skills call the built-in unified Work IQ MCP tools. `ask` handles cross-workload reasoning; `fetch` retrieves exact entities; `search_paths` and `get_schema` discover current Microsoft Graph v1.0 support for fetch, create, and update. `do_action` or `delete_entity` is used only with an exact URL supported by the current Work IQ contract. If a Planner or other path isn't exposed, the skill reports that operation as unsupported.
