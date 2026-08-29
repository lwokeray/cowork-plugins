---
name: issue-shaping
description: |
  Turn accepted work into a delivery-ready Linear-like issue with clear problem context,
  observable acceptance criteria, ownership, relations, dependencies, and readiness state.
  Use after triage for a bounded bug, feature, technical task, or follow-up. Do not use for
  product-level PRDs, portfolio planning, or cycle commitment.
---

# Issue Shaping

## Overview

Issue shaping turns an accepted product or project need into a piece of work that a team can
understand, discuss, estimate, and verify. A shaped issue explains the problem and the observable
result without pretending that unknown product or technical decisions are already settled.

The finished result must be readable by the people doing and reviewing the work. Do not give the
user a field dump, a thin summary, or hidden implementation instructions.

## When to Use

- An accepted intake item needs a trackable issue.
- An existing issue lacks problem context, acceptance criteria, dependency ownership, or relations.
- A feature or bug must be split into delivery-ready work.

## When NOT to Use

- The request still needs intake disposition → `issue-triage`.
- The scope spans multiple features/personas and needs a PRD → `product-spec-writer`.
- The user needs effort calculation → `project-sizing-guide`.
- The user needs release-oriented story organization → `story-map-builder`.

## Required Inputs

Resolve the accepted triage decision, source, issue type, owning team, problem/outcome, affected user, impact evidence, proposed owner, priority context, project/milestone/cycle candidates, dependencies, constraints, and decision owner.

Do not continue as `ready` when ownership, acceptance boundary, or a critical dependency is unknown.

## Workflow

1. **Set identity**: Write a searchable outcome/behavior title and stable issue type.
2. **State the problem**: Record current behavior, expected behavior or desired outcome, affected user, impact, why now, and source evidence.
3. **Separate evidence**: Label confirmed facts, reported signals, hypotheses, assumptions, and unresolved questions.
4. **Define scope**: Specify in-scope behavior, non-goals, constraints, edge cases, and affected surfaces.
5. **Define done**: Write observable acceptance criteria covering normal behavior, error behavior, permissions/security where applicable, and required validation evidence.
6. **Set properties**: Propose team, workflow state, assignee, priority, labels, project, milestone, cycle, estimate status, and customer relations.
7. **Map relations**: Identify parent/sub-issues, `blocks`, `blocked_by`, `related`, and duplicate candidates only when supported.
8. **Assess readiness**: Return `ready`, `needs_clarification`, `needs_dependency_decision`, or `needs_product_spec`.
9. **Preview write**: Show exact field changes and route mutations through `governance`.

## Detailed Instructions

### Phase 1: Confirm that the work is ready to shape

Verify that triage has accepted the need or that the user has explicitly asked to shape an already
approved item. Recover the original evidence and any triage rationale. Confirm the likely owning team
and whether the item is a bug, feature, technical task, follow-up, or internal request.

Stop and return to `issue-triage` if the product still needs to decide whether the request belongs in
the backlog. Escalate to `product-spec-writer` if the work spans several user journeys, substantial
policy choices, or multiple independently releasable capabilities.

### Phase 2: Write the problem before the solution

Describe the current situation in concrete terms:

- who encounters the problem;
- what they are trying to do;
- what happens today;
- what should be possible instead;
- why the difference matters;
- what evidence supports the claim;
- why the work is being considered now.

Preserve a requested implementation as a proposal unless it has already been approved as a
constraint. Avoid titles such as “Improve experience” or “Fix bug.” A useful title names the affected
behavior and desired change, for example “Allow workspace admins to resend an expired invitation.”

### Phase 3: Establish the boundary

Write a short in-scope list and a deliberate non-goal list. Include affected roles, screens,
integrations, data, permissions, or platforms only when supported. Identify edge cases that determine
whether the issue is truly one unit of work.

Split the issue when:

- separate parts deliver value independently;
- different teams own the work;
- separate release or rollback decisions are needed;
- validation would require unrelated acceptance paths;
- one part can proceed while another waits on a decision.

Do not split solely to make the issue appear smaller. When several issues share one outcome, use a
parent only if it helps preserve shared context and decision ownership.

### Phase 4: Write acceptance criteria

Acceptance criteria describe what must be observable for the issue to be considered complete. Cover
the normal path and the important boundaries. Depending on the work, consider:

- starting state and triggering action;
- expected user-visible behavior;
- errors, empty states, retries, and recovery;
- roles and permission differences;
- creation, update, retention, or deletion of data;
- accessibility and localization behavior;
- audit, security, privacy, and compliance needs;
- analytics or logs needed to confirm correct behavior;
- compatibility and migration behavior.

Use Given/When/Then when it makes state or permissions clearer. Otherwise use concise, testable
bullets. Each criterion must have one expected result. Do not describe engineering tasks as acceptance
criteria unless the task itself is the required outcome.

### Phase 5: Identify validation evidence

Say how completion will be demonstrated. Examples include a passing automated test, a reviewed
permission test, a verified analytics event, an accessible interaction check, or a product-owner
review against a named scenario. “QA complete” alone is not sufficient when the expected evidence can
be named.

### Phase 6: Map ownership and dependencies

Propose the responsible team and owner only from approved rules or evidence. Record dependencies in
plain language:

- what is needed;
- which person or team owns it;
- when it is needed;
- what happens if it is late;
- whether the issue is blocked now or merely related.

Do not mark an issue blocked by a general concern. A blocking dependency prevents responsible
progress or completion; a related item only provides context.

### Phase 7: Assess readiness

Use the following practical test:

| Readiness | Use when |
|---|---|
| Ready | The team, problem, boundary, acceptance conditions, and critical dependencies are clear |
| Needs clarification | A question about behavior, user, scope, or evidence changes the work materially |
| Needs dependency decision | A required external decision or deliverable has no resolved owner or timing |
| Needs product specification | The issue contains broader product decisions that should not be hidden inside one item |

Explain what prevents readiness and name the next action. Do not use “ready” to mean merely that the
description has been filled in.

### Phase 8: Review and write

Before creating or editing an issue, show a readable preview when the changes are material. Confirm
the target issue, changed title or description, owner, state, priority, project, milestone, cycle, and
relations. Use `governance` for the actual mutation.

If the system cannot be updated, return a complete issue draft that can be pasted into the source of
truth. State plainly that it was not written.

## User-Facing Issue Format

Use this order unless the user's existing template requires another:

1. **Title**
2. **Problem and impact**
3. **Desired outcome**
4. **Evidence and source links**
5. **In scope**
6. **Not in scope**
7. **Acceptance criteria**
8. **Validation evidence**
9. **Dependencies and relations**
10. **Assumptions and open questions**
11. **Readiness and next action**

Place administrative properties such as team, proposed owner, project, milestone, or priority in a
small readable section. Do not expose an internal schema.

## Acceptance-Criteria Rules

- Describe observable behavior, not implementation unless implementation is itself the requirement.
- Use Given/When/Then when state transitions or error paths matter; concise testable bullets are acceptable otherwise.
- Include boundary, permission, failure, and data-handling conditions when relevant.
- Do not convert an unanswered question into a requirement.
- Each criterion must have one unambiguous expected result.

## Splitting Rules

Split when the item contains independently valuable outcomes, multiple owning teams, separable release decisions, or work too large to validate as one unit. Preserve a parent issue only when it carries shared context or outcome; do not create hierarchy for appearance.

## Examples

### Example: bounded feature

An accepted request asks workspace admins to resend invitations that expired after seven days. Shape
one issue around the admin action, expected invitation state, permissions, error behavior, audit
record, and validation. Do not add bulk resend if it was not part of the accepted scope.

### Example: issue that needs a specification

An item titled “Add enterprise approvals” includes approval policies, several administrator roles,
notifications, audit history, API behavior, and migration. Mark it as needing a product specification
because the product decisions and release slices cannot be responsibly contained in one issue.

### Example: dependency decision

A report export depends on the data team defining the retained fields. Record the exact decision, the
data owner, and the effect on acceptance criteria. Do not invent the field list or mark the issue ready.

## Quality Gate

- The issue represents one bounded, testable unit of work.
- Title, problem, outcome, and acceptance criteria agree.
- Every critical dependency has an owner and need-by condition or is explicitly unresolved.
- Proposed properties are traceable to evidence or marked proposed.
- Readiness is not `ready` when a material decision is missing.
- The issue is understandable without reading the original conversation.
- The result contains actual acceptance conditions, not a template asking someone else to add them.

## Common Issues

| Problem | Correct response |
|---|---|
| Title describes an implementation only | Rewrite it around affected behavior and desired result |
| Acceptance criteria repeat the description | Add observable starting conditions, actions, results, and boundaries |
| Several teams are hidden in one issue | Split by ownership or establish a meaningful parent |
| Priority is implied by requester seniority | Preserve the request and leave priority to the approved process |
| A dependency has no owner | Mark the issue not ready and name the decision needed |
| The issue contains open product policy | Route that decision to a specification rather than guessing |
| Existing issue has useful history | Edit it carefully instead of creating a duplicate |

## Guardrails

- Do not make product, architectural, security, or date decisions on behalf of their owners.
- Do not treat customer demand, executive interest, or sender seniority as priority proof.
- Do not promise a cycle, milestone, or delivery date.
- Do not claim a write without tool confirmation.
