---
name: story-map-builder
description: |
  Build a user story map from approved product evidence, organizing user activities, journey steps,
  capabilities, and stories into release slices with priority, dependencies, acceptance readiness,
  and source traceability; optionally generate a self-contained HTML map. Use for backlog discovery,
  MVP/release slicing, and journey-based scope review. Do not use as the system of record or to commit dates.
license: MIT
---

# Story Map Builder

## Overview

A story map shows the product through the user's journey. It helps a team see whether a release lets a
user complete something meaningful, where important steps are missing, and which work can be deferred.
It is a planning and conversation aid, not a decorative backlog board.

## When to Use

- Product requirements must be organized around user activity rather than component/team structure.
- The user needs Epic/Activity → Feature/Step → Story hierarchy and release slices.
- MVP scope, gaps, dependency order, or journey completeness needs review.
- The user requests an interactive self-contained HTML story map.

## When NOT to Use

- The product problem and requirements are not defined → `product-spec-writer`.
- A single story needs delivery-ready detail → `issue-shaping`.
- The user needs effort calculation → `project-sizing-guide`.
- The user needs actual roadmap or cycle mutation rather than a planning view.

## Required Inputs

`product_or_project`, target users/segments, user outcome, journey/activity sequence, features/capabilities, stories, source requirement IDs, acceptance readiness, priority rubric, release definitions, dependencies, estimates when approved, constraints, and decision owner.

## Mapping Model

Use the hierarchy supported by the source material:

- **Activity/Epic**: a major user goal or activity along the journey.
- **Step/Feature**: a capability or step needed to complete the activity.
- **Story**: a small testable user outcome linked to a requirement or evidence source.
- **Release slice**: an end-to-end usable set across the journey, not merely all items from one component.

Do not force technical infrastructure into fake user stories. Place enabling work in explicit enabler rows/relations when needed.

## Workflow

1. **Set map control**: Record product, owner, source version, target users, decision, release definitions, and map status.
2. **Build backbone**: Arrange user activities/journey steps in meaningful sequence based on evidence.
3. **Add capabilities**: Place features/steps under the activity they enable; identify cross-cutting capabilities explicitly.
4. **Add stories**: Link each story to source requirement/evidence, user value, acceptance readiness, priority, dependency, and estimate status.
5. **Check completeness**: Find missing entry, happy-path, error, permission, support, migration, telemetry, and accessibility needs relevant to the journey.
6. **Prioritize**: Apply the organization rubric. If MoSCoW is used, require rationale and maintain `wont_this_release` as explicit scope control.
7. **Slice releases**: Create thin end-to-end slices that deliver a coherent user outcome. Do not equate Must with Release 1 automatically.
8. **Validate dependencies**: Flag stories assigned before unmet dependencies, missing enabling work, or unresolved decision gates.
9. **Assess readiness**: Distinguish `mapped`, `needs_spec`, `needs_acceptance`, `needs_estimate`, and `ready_for_issue_shaping`.
10. **Generate HTML**: Validate the JSON contract, then run `scripts/generate_story_map.py`. The HTML remains a derived view.
11. **Route downstream work**: Use `issue-shaping` to create issues and `governance` before changing the backlog, release, roadmap, or cycle.

## Detailed Mapping Instructions

### 1. Define the mapping question

Name the user, the outcome they are trying to reach, the product boundary, and the release decision
the map should support. Confirm the source specification or evidence version. If the underlying
problem or requirements are still disputed, return to `product-spec-writer` first.

### 2. Build the journey backbone

Write the major user activities from left to right in the order the user experiences them. Use the
user's language, such as “prepare request,” “submit,” “review,” and “resolve,” rather than team or
system names. Include entry, completion, and recovery when they affect a successful journey.

Check alternative roles and paths. An administrator, approver, and requester may have connected but
different activities. Do not merge them into a confusing single flow.

### 3. Add capabilities and stories

Under each activity, add the capabilities needed to complete it. Break each capability into small,
observable user outcomes. A story should identify the user, need, and value, and should link back to a
requirement or evidence source.

Place technical enabling work in clearly named enabler rows or relations. Do not disguise database,
platform, migration, or monitoring work as fictional user stories.

### 4. Check journey completeness

Review the map for starting states, permissions, errors, empty states, retry and recovery, data
migration, notifications, accessibility, support, analytics, and operational readiness. Add only items
relevant to the journey and mark missing requirements instead of inventing them.

### 5. Create release slices

Draw each slice across the journey so it produces a coherent outcome. The first release should be the
smallest responsible end-to-end experience, not simply all high-priority cards. Later slices may add
reach, efficiency, automation, richer roles, or scale.

For every slice state:

- the user outcome it enables;
- included stories;
- excluded or deferred work;
- assumptions and dependencies;
- what will be learned or measured;
- why the slice is viable and safe.

### 6. Validate sequence and readiness

Flag stories scheduled before their enabling work, decisions, or permissions. Separately mark stories
that need specification, acceptance conditions, estimates, or issue shaping. A story's position on a
map does not make it ready or committed.

### 7. Review with the team

Walk the map from the user's first step to the outcome. Ask where the user gets stuck, which slice is
not truly usable, what can be removed, and which dependencies cross team boundaries. Capture decisions
and unresolved questions without silently changing the source specification.

## User-Facing Result

Provide the journey backbone, capabilities, stories, release slices, gaps, dependencies, deferred
work, and decisions required. Explain the recommended first slice in plain language. Generate the HTML
view only when useful or requested; the readable map content must remain understandable without it.

## HTML Tool

```bash
python3 scripts/generate_story_map.py --input story_map.json --output story_map.html
```

Read [references/story-map-contract.md](references/story-map-contract.md) for the script schema, release-slice rules, and traceability checks.

## Examples

### Thin first release

For an approval journey, a responsible first slice may let one requester submit one supported request,
one authorized approver decide it, and both parties see the result. Bulk actions, delegation, advanced
policy rules, and reporting can remain later slices if the first journey is safe and complete.

### Component-shaped backlog

If the source backlog is grouped as frontend, API, database, and notifications, reorganize it around
user activities. Preserve technical enablers but do not let architecture become the backbone.

## Common Issues

| Problem | Correct response |
|---|---|
| First release contains only setup work | Build a thin end-to-end user outcome |
| A requirement has no place on the map | Flag it as unmapped and resolve the scope conflict |
| Stories lack acceptance conditions | Mark them for issue shaping rather than calling them ready |
| A visual lane is treated as commitment | State that release and cycle approval are separate decisions |

## Quality Gate

- Backbone follows user activity or journey, not org chart or architecture alone.
- Every story links to user value and a source requirement/evidence item.
- Release slices are coherent end-to-end outcomes.
- Priority, release, estimate, and acceptance readiness are distinct fields.
- Unmapped requirements, enabling work, and dependency conflicts are visible.
- The HTML matches the source JSON and is not represented as the system of record.

## Guardrails

- Do not invent user journeys, priorities, estimates, or release commitments.
- Do not silently drop unmapped requirements.
- Do not turn a visual lane into an approved roadmap or cycle commitment.
- Do not create downstream issues or alter releases without authorization.
