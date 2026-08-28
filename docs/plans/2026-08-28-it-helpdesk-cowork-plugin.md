# Dynamics 365 IT Help Desk Cowork Plugin Implementation Plan

## Overview

This change adds a skills-only Microsoft 365 Copilot Cowork plugin package for an IT Help Desk workflow implemented on Dynamics 365 Customer Service. The package must not introduce ServiceNow, Jira, Confluence, Okta, CMDB, endpoint remediation, cloud administration, password resets, or any other external connector.

The plugin will teach Cowork four narrow, composable workflows: case briefing, knowledge-grounded response drafting, escalation handoff, and supervisor case review. It will use the Dynamics 365 Customer Service plugin and the records available to the signed-in user. It will not claim that a case is resolved, a response is sent, or a field is updated until the user reviews and approves the proposed action in the target environment.

## Acceptance Criteria

1. The package follows Microsoft 365 Unified App Manifest v1.28.
2. The package contains a valid manifest, 192×192 color icon, 32×32 outline icon, and skills with valid Agent Skills frontmatter.
3. Every skill has a narrow trigger, explicit read/write boundary, exact output format, and a workflow grounded in Dynamics 365 Customer Service.
4. The skills mention only Customer Service objects and Cowork capabilities that are documented by Microsoft: cases, activities/timeline, knowledge articles, queues, routing, SLAs, case summaries, checkpoints, and approval/edit/dismiss review.
5. The default package is skills-only. No remote MCP connector or invented OAuth configuration is included.
6. Tests validate manifest schema shape, icon dimensions, skill folder/name agreement, frontmatter, maximum package limits, and absence of forbidden external-system assumptions.
7. The repository includes a package ZIP and a README with build, validation, sideload, and tenant verification instructions.

## File Structure

| File | Responsibility |
|---|---|
| `it-helpdesk-cowork/manifest.json` | Microsoft 365 Unified App Manifest v1.28 |
| `it-helpdesk-cowork/color.png` | 192×192 full-color package icon |
| `it-helpdesk-cowork/outline.png` | 32×32 outline package icon |
| `it-helpdesk-cowork/skills/case-brief/SKILL.md` | One-screen case context workflow |
| `it-helpdesk-cowork/skills/knowledge-grounded-reply/SKILL.md` | Approved-knowledge response draft workflow |
| `it-helpdesk-cowork/skills/escalation-handoff/SKILL.md` | Evidence-based resolver handoff workflow |
| `it-helpdesk-cowork/skills/supervisor-case-review/SKILL.md` | Open-case review and re-engagement draft workflow |
| `scripts/validate_plugin.py` | Deterministic package validation |
| `tests/test_validate_plugin.py` | Validator behavior tests |
| `it-helpdesk-cowork/README.md` | Package usage and tenant verification guide |
| `dist/it-helpdesk-cowork.zip` | Root-level uploadable package |

## Tasks

### Task 1: Add the package shell

- [ ] Write `manifest.json` with only schema-supported fields.
- [ ] Add deterministic icons at the required dimensions.
- [ ] Verify the package shell parses as JSON.
- [ ] Commit point: `Add Cowork plugin package shell`.

### Task 2: Add focused skills

- [ ] Add case brief skill.
- [ ] Add knowledge-grounded reply skill.
- [ ] Add escalation handoff skill.
- [ ] Add supervisor case review skill.
- [ ] Verify each skill has valid frontmatter and folder/name agreement.
- [ ] Commit point: `Add IT Help Desk Cowork skills`.

### Task 3: Add deterministic validation

- [ ] Write failing tests for schema shape, frontmatter, icons, and forbidden scope.
- [ ] Implement the validator.
- [ ] Run the full test suite.
- [ ] Package the ZIP and validate the ZIP contents independently.
- [ ] Commit point: `Add plugin package validation`.

### Task 4: Document tenant verification

- [ ] Document Cowork plugin installation and the Dynamics 365 Customer Service environment prerequisite.
- [ ] Document the sandbox-only write-back checkpoint.
- [ ] Document the official Microsoft source links and version caveats.
- [ ] Run a clean checkout validation.
- [ ] Commit point: `Document Customer Service Cowork plugin usage`.

## Explicit Non-Goals

This package does not implement a remote MCP server, ServiceNow/Jira adapter, device management, password reset, group membership changes, production restart, cloud change, or autonomous case resolution. A future connector, if ever required, must be designed as a separate plan with its own OAuth, security, and tenant approval review.
