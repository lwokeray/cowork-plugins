---
name: product-spec-writer
description: |
  Create or revise an evidence-based product requirements document from an approved idea, discovery
  source, or accepted product problem. Use when the user needs problem framing, users, outcomes,
  functional and non-functional requirements, prioritization, release scope, acceptance criteria,
  dependencies, risks, measures, and open decisions. Do not use for a single delivery issue or for
  summarizing source documents without producing a controlled PRD.
license: MIT
---

# Product Spec Writer

## Overview

A product specification creates shared understanding before a team commits to building. It explains
the user problem, evidence, intended outcomes, product behavior, boundaries, measures, dependencies,
and decisions that remain open. It must be detailed enough for product, design, engineering, data,
security, support, and business reviewers to find the decisions relevant to them.

The specification is not a polished summary of source documents. It is the working definition of the
product change. Write the actual content, identify gaps honestly, and keep internal formatting details
out of the user-facing document.

## When to Use

- A product problem spans multiple features, user roles, or release decisions.
- The user asks for a PRD, product specification, requirement baseline, or scope revision.
- Existing discovery evidence must be converted into controlled requirements and decisions.
- A PRD needs consistency, completeness, or change-impact review.

## When NOT to Use

- One accepted item needs an issue → `issue-shaping`.
- The request is still awaiting intake disposition → `issue-triage`.
- Requirements already exist and only need release visualization → `story-map-builder`.
- The user only asks for effort estimates → `project-sizing-guide`.

## Required Context

Collect or recover from approved sources:

- product/problem owner, document owner, reviewers, status, version, and source of truth;
- target users/segments and the current workflow or behavior;
- problem evidence, frequency, impact, workarounds, customer signals, and counter-signals;
- intended user/business outcomes and measurable success signals;
- constraints covering security, privacy, compliance, platform, budget, time, and compatibility;
- prior decisions, related projects/issues, dependencies, assumptions, and open questions.

If the user requests immediate drafting, continue with explicit assumptions. Do not present assumptions as approved requirements.

## Operating Modes

| Mode | Use when | Behavior |
|---|---|---|
| `guided` | Material product decisions are missing | Ask only questions that affect outcome, scope, priority, or acceptance. |
| `draft_from_evidence` | Approved source material is available | Produce a traceable draft and mark contradictions/open decisions. |
| `quick_draft` | User explicitly requests no clarification | Use stated assumptions and keep status `draft`. |
| `revision` | A versioned PRD already exists | Preserve IDs, show deltas, and cascade impacted sections. |

## Workflow

1. **Establish document control**: Set product, owner, reviewers, version, status, date, source of truth, and change reason.
2. **Frame the problem**: Describe current behavior/workflow, affected users, evidence, impact, why now, and excluded interpretations.
3. **Define outcomes**: State intended user and business outcomes, success measures, measurement definitions, guardrail metrics, baseline/target status, and observation window.
4. **Model users and journeys**: Identify only evidence-supported personas/roles, goals, pain points, permissions, and critical journey steps.
5. **Write user stories or jobs**: Express actor, capability/need, and value. Keep implementation choices separate unless constrained.
6. **Define requirements**: Assign stable IDs to functional requirements and link each to source, user story/job, priority, dependencies, acceptance criteria, and owner/decision status.
7. **Define non-functional requirements**: Include only applicable performance, reliability, security, privacy, compliance, accessibility, localization, observability, supportability, data, and compatibility requirements with measurable thresholds or explicit open decisions.
8. **Prioritize**: Apply the organization rubric. Use MoSCoW only when requested or when no rubric exists; document rationale and trade-offs rather than enforcing arbitrary percentages.
9. **Define release scope**: Separate MVP/release scope, deferred work, non-goals, migration/rollout, enablement, telemetry, and rollback considerations.
10. **Map dependencies and risks**: Record dependency owner/need-by, assumptions, product risks, technical risks, decision risks, and unresolved constraints.
11. **Write acceptance criteria**: Use observable behavior, error/boundary conditions, permissions, data handling, and validation evidence. Use Given/When/Then when it improves precision.
12. **Run consistency checks**: Validate IDs, traceability, scope, terminology, requirement conflicts, metric definitions, release assignments, and unresolved decisions.
13. **Preview publication**: Route creation, overwrite, approval-state change, or stakeholder distribution through `governance`.

## Detailed Authoring Instructions

### Phase 1: Establish purpose and control

Identify the product area, document owner, intended reviewers, current status, and why the document is
being created or revised. State the decision the specification must enable. If an existing document is
being revised, preserve its useful history and explain the change rather than silently replacing it.

Use a simple status such as Draft, In review, Approved, or Superseded. Never label a document approved
without evidence from the authorized owner.

### Phase 2: Build the evidence base

Review the approved research, customer signals, support cases, usage evidence, business context,
technical constraints, prior decisions, and related work. Extract both supporting and conflicting
evidence. Note the time period and limits of any data.

Write the problem statement so it answers:

- Which users are affected?
- What are they trying to accomplish?
- What happens today?
- What harm, delay, cost, or missed opportunity results?
- How do we know?
- Why is this worth considering now?

Do not begin with the proposed feature. If the evidence supports only a hypothesis, call it a
hypothesis and describe the smallest way to test it.

### Phase 3: Describe users and the current journey

Include only roles or user groups supported by evidence. For each relevant role, describe its goal,
important context, permissions, and pain points. Then outline the current journey far enough to show
where the problem occurs.

Avoid fictional demographic personas unless research supports them and they affect product decisions.
Often a practical role such as “workspace administrator” is clearer than an invented persona profile.

### Phase 4: Define outcomes and measures

State the change the product should create for users and the business. Separate outcomes from output:

- Output: “Launch a bulk invitation tool.”
- Outcome: “Administrators recover failed invitations without contacting support.”

For each success measure, define what is counted, the population, observation period, current baseline
if known, desired direction or target, and any guardrail measure that should not worsen. If no credible
baseline or target exists, mark the decision open rather than inventing a number.

### Phase 5: Set scope and non-goals

Describe what the first release must make possible and what is deliberately excluded. Include affected
roles, platforms, data, integrations, and regions when relevant. Non-goals should prevent realistic
misinterpretations, not list every imaginable future feature.

When scope is too large, identify coherent release slices that each complete a meaningful user task.
Use `story-map-builder` if the journey and sequencing need deeper treatment.

### Phase 6: Write product requirements

Give every requirement a stable identifier so reviewers can refer to it without ambiguity. Each
requirement should state one clear product behavior and connect to a user need or constraint.

Good requirement:

> FR-04: A workspace administrator can resend an expired invitation to one eligible user without
> changing that user's assigned role.

Weak requirement:

> Build a better invitation experience.

For each important requirement, include:

- the behavior or rule;
- affected role or condition;
- reason or supporting source;
- priority and rationale;
- dependencies or unresolved choices;
- acceptance or verification approach.

Keep design and implementation flexible unless a choice is a genuine requirement or approved
constraint.

### Phase 7: Cover quality and operational requirements

Review the following areas and include only those that apply:

- response time and expected scale;
- reliability, recovery, and data integrity;
- roles, permissions, security, and auditability;
- privacy, retention, deletion, and regulatory obligations;
- accessibility, localization, and regional differences;
- compatibility, migration, and supported versions;
- monitoring, analytics, alerting, and support needs;
- rollout controls, feature availability, and rollback.

Make requirements measurable where possible. If a threshold depends on another owner, write the open
decision and owner instead of using vague terms such as “fast” or “secure.”

### Phase 8: Prioritize and sequence

Apply the organization's existing method. If none exists, explain which requirements are essential
for a complete first release, which improve the outcome, and which can wait. Prioritization should
reference user value, risk, obligations, dependencies, and learning—not personal preference.

Do not use priority labels as decoration. Explain the consequence of removing a high-priority
requirement and the trade-off behind deferred work.

### Phase 9: Define acceptance and validation

Write acceptance conditions around observable behavior, permissions, errors, edge cases, and data
handling. Then define how the broader product outcome will be validated after release. Feature
acceptance confirms that the product behaves as specified; outcome measurement confirms whether it
helped users.

### Phase 10: Address rollout and change impact

Describe who receives the change first, how existing users or data are handled, which teams need
enablement, what support materials are needed, what will be monitored, and how to pause or reverse the
change. Include communications only when they are necessary to successful adoption or safe operation.

### Phase 11: Review consistency

Before sharing the draft, check:

- every requirement relates to the stated problem or a necessary constraint;
- scope, non-goals, release plan, and acceptance conditions agree;
- success measures can actually be observed;
- terms are used consistently;
- conflicting requirements or sources are visible;
- decisions and assumptions have owners or a resolution path;
- related issues and projects do not contradict the document;
- no date, owner, architecture, or approval has been invented.

## Working with Incomplete Information

Do not refuse to draft solely because information is incomplete. Produce the useful parts and mark
gaps in context:

- **Assumption:** a temporary belief used to continue drafting.
- **Open question:** information needed to finish a section.
- **Decision required:** a choice that must be made by an authorized owner.
- **Validation needed:** a claim that requires research or measurement.

For every important gap, explain why it matters and who or what can resolve it. Avoid filling the
document with generic placeholders.

## Detailed Contract

Read [references/prd-contract.md](references/prd-contract.md) when creating a new PRD, revising IDs, checking traceability, or converting the PRD to issues/story maps.

## Product Specification Format

Produce the actual specification in this order:

1. Document control
2. Problem and evidence
3. Users and current journey
4. Intended outcomes and measures
5. Scope and non-goals
6. User stories/jobs
7. Functional requirements
8. Non-functional requirements
9. Prioritization and release scope
10. Acceptance criteria
11. Dependencies and integrations
12. Rollout, telemetry, support, and rollback
13. Risks, assumptions, open questions, and decisions required
14. Traceability matrix
15. Proposed downstream issues or projects and publication state

Do not include empty sections merely to look complete. If a section is not applicable, say why in one
sentence or omit it when the user's template permits. Finish with the decisions required, named
reviewers, and next review step in plain language.

## Review Conversation

When presenting a draft, lead with what is ready for review and the few decisions that materially
change the product. Group feedback by problem, scope, behavior, measure, or delivery consequence.
When revising, preserve requirement identifiers and show which decisions changed.

Do not treat every comment as an approved change. If reviewers disagree, capture the alternatives,
evidence, trade-off, and decision owner.

## Examples

### New product capability

For a workspace approval capability, define the requesting and approving roles, eligible actions,
policy rules, notification and expiry behavior, audit history, failure handling, measures, rollout,
and migration. Do not reduce the specification to “add approvals.”

### Revision caused by evidence

If pilot data shows that a proposed multi-step setup causes abandonment, update the affected user
journey, requirements, acceptance conditions, measures, and release scope. Preserve the original
decision history and explain why the revision was made.

### Quick draft

If the user asks for a draft from limited notes, create a coherent document using explicit assumptions.
Keep its status Draft and put the most consequential decisions at the top of the review request.

## Quality Gate

- Every requirement has a stable ID, source, rationale, priority, and verification path.
- Requirements, acceptance criteria, metrics, and release scope are mutually consistent.
- User evidence, assumptions, hypotheses, and approved decisions are distinguishable.
- Non-functional requirements are measurable or explicitly unresolved.
- Non-goals and deferred work prevent accidental scope expansion.
- The PRD does not assign a delivery date or implementation owner without authorization.
- A reader can understand the product behavior without returning to the raw source notes.
- The document contains complete requirement language, not headings with summary bullets.

## Common Issues

| Problem | Correct response |
|---|---|
| The document starts with a feature | Reframe the user problem and evidence before defining the solution |
| Every requirement is high priority | Explain first-release necessity and make trade-offs explicit |
| Measures are vague | Define population, event, period, direction, and baseline or open decision |
| Technical choices dominate the document | Keep product behavior central and move implementation detail to supporting material |
| Review comments conflict | Record alternatives and route the decision to the named owner |
| Large requirements cannot be reviewed | Split them into stable, traceable behaviors without losing the shared outcome |
| Approval is unclear | Keep status Draft or In review until explicit authorization exists |

## Guardrails

- Do not invent personas, demand, metrics, constraints, architecture, security requirements, or acceptance decisions.
- Do not make every requested feature a Must Have.
- Do not convert the PRD directly into committed cycle work.
- Do not publish, overwrite, or mark approved without the exact approval and confirmed tool result.
