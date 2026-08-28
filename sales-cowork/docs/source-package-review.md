# Source package review

The uploaded `microsoft_sales_cowork_single_plugin.zip` was a design package rather than a deployable Copilot Cowork plugin. It contained a non-schema `plugin-manifest.json`, Agent Builder instructions, and workflow design material, but no M365 unified `manifest.json`, required icons, or `skills/*/SKILL.md` files. Its README also referenced `testing/acceptance-tests.md` and `research/`, which were not included in the ZIP.

The deployable package in this directory converts the design into a Microsoft 365 Copilot Cowork skills-only app package:

- six bounded Agent Skills under `skills/`;
- a schema-v1.28 M365 manifest with only documented root fields;
- required 192×192 and 32×32 PNG icons;
- a static validator and tenant acceptance scenarios; and
- no connector or hidden write capability.

The source design's approval and evidence rules are retained. Requested Microsoft 365 write actions are represented as draft or handoff output because a skills-only package cannot execute them.
