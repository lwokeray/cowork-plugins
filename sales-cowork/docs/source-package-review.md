# Source package review

The uploaded `microsoft_sales_cowork_single_plugin.zip` was a design package rather than a deployable Copilot Cowork plugin. It contained a non-schema `plugin-manifest.json`, Agent Builder instructions, and workflow design material, but no M365 unified `manifest.json`, required icons, or `skills/*/SKILL.md` files. Its README also referenced `testing/acceptance-tests.md` and `research/`, which were not included in the ZIP.

The deployable package in this directory converts the design into a Microsoft 365 Copilot Cowork skills-only app package:

- twelve bounded Agent Skills under `skills/`;
- a schema-v1.28 M365 manifest with only documented root fields;
- required 192×192 and 32×32 PNG icons;
- a static validator and tenant acceptance scenarios; and
- no connector or hidden write capability.

The source design's approval and evidence rules are retained. Microsoft 365 retrieval and actions are handled by Cowork's native Work IQ and built-in skills. Account, opportunity, pipeline, forecast, proposal, and renewal records are represented by approved Excel, SharePoint, OneDrive, Word, and PowerPoint artifacts.

## Cowork runtime model

Cowork is natively grounded in Microsoft 365 through Work IQ and includes built-in skills for Email, Scheduling, Calendar Management, Meetings, Daily Briefing, Enterprise Search, Communications, Deep Research, and Microsoft 365 files. Sales Cowork intentionally stays inside this Microsoft 365 user workspace.
