# Story Map Contract

## Script Input

The HTML generator accepts:

```json
{
  "project": "Product or project name",
  "releases": [
    {"name": "Release 1", "description": "End-to-end outcome"}
  ],
  "epics": [
    {
      "name": "User activity",
      "features": [
        {
          "name": "Journey step or capability",
          "stories": [
            {
              "name": "As a user, I can...",
              "priority": "must",
              "release": "Release 1",
              "points": 3,
              "description": "Source: FR-001; readiness: needs_acceptance"
            }
          ]
        }
      ]
    }
  ]
}
```

Script-supported priority values are `must`, `should`, `could`, and `wont`. Map an organization-specific priority rubric to these display values only for the visualization; preserve the source priority separately in the working data.

## Working Story Record

Maintain this richer record before producing the script JSON:

```yaml
story:
  id: "US-001"
  title: ""
  user_or_segment: ""
  user_value: ""
  source_requirement_ids: []
  activity: ""
  capability: ""
  priority: ""
  priority_rationale: ""
  release: ""
  release_rationale: ""
  acceptance_readiness: "missing|draft|approved"
  estimate_status: "not_estimated|estimated|needs_reestimate"
  dependencies: []
  enablers: []
  status: "mapped|needs_spec|needs_acceptance|needs_estimate|ready_for_issue_shaping"
```

## Release-Slice Checks

- The slice supports a coherent user outcome across the necessary journey steps.
- Required entry, completion, failure, permission, data, telemetry, migration, and support needs are included when applicable.
- Dependencies and enabling work are available in or before the slice.
- The slice has an explicit success/validation signal.
- Deferred stories and non-goals remain visible.
- The release name is a planning label unless an authorized roadmap/release record confirms it.

## Traceability

Maintain:

`source evidence → requirement → user story → activity/capability → priority → release slice → downstream issue → validation evidence`.

The HTML `description` field can carry compact source/readiness text, but the full traceability record remains outside the visualization.
