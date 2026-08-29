# PRD Contract

Use this reference when producing a new PRD, revising an existing PRD, or creating downstream work.

## Identifier Rules

| Object | Format | Stability rule |
|---|---|---|
| Persona/role | `PER-001` | Keep ID when wording changes but the role remains the same. |
| User story/job | `US-001` | Do not reuse a retired ID for a different need. |
| Functional requirement | `FR-001` | Preserve across revisions; mark removed items `retired`. |
| Non-functional requirement | `NFR-001` | Include dimension and measurable condition. |
| Acceptance criterion | `AC-FR-001-01` | Link to one requirement; cross-links are allowed. |
| Decision | `DEC-001` | Record owner, status, date, and alternatives. |
| Risk | `RISK-001` | Link to affected requirement/release where possible. |

## Requirement Record

```yaml
requirement:
  id: "FR-001"
  title: ""
  statement: ""
  type: "functional|non_functional"
  source_links: []
  user_or_segment: ""
  related_story_ids: []
  rationale: ""
  priority: ""
  release: ""
  dependencies: []
  acceptance_criteria_ids: []
  owner_or_decision_owner: ""
  status: "proposed|approved|deferred|retired|open_decision"
  assumptions: []
```

## Acceptance-Criteria Record

```yaml
acceptance_criterion:
  id: "AC-FR-001-01"
  requirement_id: "FR-001"
  precondition: ""
  trigger_or_action: ""
  expected_result: ""
  boundary_or_error_condition: ""
  validation_evidence: ""
```

## Traceability Matrix

At minimum map:

`source → problem/outcome → persona or segment → user story/job → requirement → acceptance criterion → release → downstream issue/project → validation evidence`.

Mark missing links. Do not fabricate a downstream object identifier before it exists.

## Revision Rules

1. Preserve existing IDs.
2. Record the change reason and affected sections.
3. Re-evaluate downstream acceptance criteria, priorities, releases, dependencies, risks, estimates, and issues.
4. Mark superseded content; do not silently remove approved requirements.
5. Keep proposed, approved, deferred, and retired states separate.

## Downstream Conversion

- Use `issue-shaping` for one bounded issue derived from approved requirements.
- Use `story-map-builder` to organize approved stories by activity and release.
- Use `project-sizing-guide` only after estimate inputs and scope boundaries are explicit.
- Use `risk-heatmap` for risks requiring active register ownership.
- Use `governance` before creating or updating downstream records.
