# cowork-plugins

## Packages

- [`d365-it-helpdesk-cowork/`](./d365-it-helpdesk-cowork/) — a skills-only Microsoft 365 Copilot Cowork plugin for Dynamics 365 Customer Service IT Help Desk workflows.

The package focuses on four narrow skills: case brief, knowledge-grounded reply, escalation handoff, and supervisor case review. It does not include a remote connector or autonomous remediation.

## Local validation

```bash
python3 scripts/create_icons.py
python3 scripts/validate_plugin.py d365-it-helpdesk-cowork
python3 -m unittest discover -s tests -v
mkdir -p dist
(cd d365-it-helpdesk-cowork && zip -qr ../dist/d365-it-helpdesk-cowork.zip manifest.json color.png outline.png skills README.md)
unzip -t dist/d365-it-helpdesk-cowork.zip
```

Implementation plan: [`docs/plans/2026-08-28-d365-it-helpdesk-cowork-plugin.md`](./docs/plans/2026-08-28-d365-it-helpdesk-cowork-plugin.md)
