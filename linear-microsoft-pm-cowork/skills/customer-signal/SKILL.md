---
name: customer-signal
description: |
  Capture customer or user feedback from approved Microsoft 365 sources, normalize the underlying
  problem, preserve customer context, aggregate evidence, and link the signal to existing issues,
  projects, or initiatives. Use for feature demand, support signals, account feedback, and segment
  patterns. Do not use to promise delivery or turn a customer's requested solution directly into scope.
---

# Customer Signal

## Overview

This skill turns scattered customer or user feedback into reliable product evidence. It preserves the
source and context, separates the user's problem from a requested solution, finds related signals, and
connects the evidence to product work without making an unapproved promise.

The result should help a product manager understand who is affected, what they are trying to do, how
serious the problem appears, and what should be learned or decided next. It is not a customer-message
summary and it is not a shortcut around prioritization.

## When to Use

- Customer, user, account, support, sales, or success feedback must be connected to PM work.
- Multiple signals need normalization, deduplication, segmentation, or aggregation.
- A PM needs customer evidence for prioritization or discovery.

## When NOT to Use

- A new work item needs triage disposition → `issue-triage`.
- The user needs a full product specification → `product-spec-writer`.
- The user needs a quantitative multi-criteria decision → `weighted-scorer`.

## Required Inputs

Preserve source pointer, requester, customer/account identity within approved scope, timestamp, original wording, problem, requested solution, workaround, frequency, severity, impact, affected users/segment, product area, commercial context when permitted, relations, and privacy classification.

## Workflow

1. **Capture source**: Read the named email/thread, Teams context, meeting artifact, request register, approved spreadsheet, or other source and preserve provenance.
2. **Normalize**: Separate user problem, requested solution, current workaround, context, frequency, severity, and desired outcome.
3. **Protect attributes**: Retain only customer/account, tier, segment, size, revenue, renewal, region, or contract fields needed for the approved decision.
4. **Check relations**: Search approved scope for matching customer requests, issues, projects, initiatives, and decision records.
5. **Aggregate carefully**: Count distinct requests/customers only when definitions and source coverage are explicit. Preserve segment distribution and counter-signals.
6. **Assess evidence**: Record impact, urgency, strategic relevance, confidence, data gaps, and smallest validation step.
7. **Propose linkage**: Recommend `duplicate`, `related`, `supports`, or `contradicts` relations; do not create them automatically.
8. **Preview mutation**: Route customer-request creation, linkage, importance, or work-priority changes through `governance`.

## Detailed Instructions

### Phase 1: Read the full context

Use only approved messages, notes, recordings, support records, research, spreadsheets, or account
documents. Read enough surrounding context to understand what the person was doing, what went wrong,
and what outcome they wanted. Preserve the source link and observation date.

Separate direct customer words from an employee's interpretation. When the source is second-hand,
label it as reported by sales, support, success, or another role rather than presenting it as direct
customer evidence.

### Phase 2: Normalize the signal

Rewrite the evidence into these practical parts:

- affected user or customer segment;
- task or goal;
- underlying problem;
- situation or trigger;
- impact and frequency described;
- current workaround;
- requested solution, if any;
- desired outcome;
- strength and limits of the evidence.

Example:

> Requested solution: “Add a weekly PDF email.”
>
> Underlying problem: Regional managers cannot review store exceptions without opening the dashboard
> every morning, so urgent exceptions are sometimes missed.

Keep both pieces. The solution suggestion may be useful, but discovery should remain open to better
ways of solving the problem.

### Phase 3: Protect sensitive context

Include account, contract, revenue, renewal, health, location, or personal information only when it is
needed for the approved decision and allowed for the audience. Prefer segment-level wording when an
individual identity adds no value.

Do not paste confidential commercial notes into broadly visible product issues. Preserve a restricted
source link and write only the minimum product-relevant context in the shared artifact.

### Phase 4: Find matching evidence and work

Search for other signals and active or historical product work using the problem, user, journey,
trigger, and outcome. Distinguish:

- **Duplicate signal:** the same source or event was captured more than once.
- **Similar signal:** a different user reports the same underlying problem.
- **Related signal:** the topic overlaps but the problem or journey differs.
- **Counter-signal:** evidence suggests that the problem is rare, already solved, or less important
  for another segment.

Also search for related issues, product specifications, projects, initiatives, and previous decisions.
Do not link solely because titles share a keyword.

### Phase 5: Aggregate responsibly

When reporting patterns, state:

- the time window;
- which channels were reviewed;
- number of unique customers or users;
- number of separate requests or observations;
- relevant segment distribution;
- missing channels or known sampling bias;
- supporting and contradictory evidence.

Do not add repeated messages from one customer as if they were several customers. Do not extrapolate
from a selected account list to the full market. Revenue or account tier may affect business context,
but it does not prove that the underlying product problem should have the highest priority.

### Phase 6: Assess the signal

Assess in plain language:

| Dimension | Consider |
|---|---|
| Impact | Does the problem block a key task, create risk, cost time, or cause abandonment? |
| Frequency | Is it recurring, occasional, or observed once? |
| Reach | Which users or segments appear affected? |
| Workaround | Is there a safe and practical alternative? |
| Strategic relevance | Does the need support an approved product direction? |
| Confidence | Is the evidence direct, recent, varied, and sufficiently covered? |

Then recommend the smallest next step: link to existing work, triage a new request, conduct targeted
research, collect usage evidence, test a concept, or take no further action now.

### Phase 7: Connect the signal without promising work

For a proposed relationship, explain whether the signal supports, contradicts, duplicates, or is
merely related to existing work. Customer evidence may strengthen the case for a product decision but
does not itself set priority, scope, date, or commitment.

Use `issue-triage` when a new product request needs a disposition. Use `product-spec-writer` only after
the problem has been accepted for deeper definition.

### Phase 8: Prepare communication

Internal product notes may include evidence strength and prioritization context. Customer-facing
responses should acknowledge the problem, describe any confirmed next step, and avoid internal debate
or unapproved delivery language.

Never say “this is on the roadmap” or provide a target date unless an authorized source confirms it.

## User-Facing Result

Present:

1. **Observed need** — the underlying problem and affected user.
2. **Evidence** — source coverage, examples, frequency, and impact.
3. **Pattern** — related and counter-signals, with duplicates removed.
4. **Connected work** — existing issues, projects, or decisions.
5. **Confidence and gaps** — what is known and what remains uncertain.
6. **Recommended next step** — a concrete learning or decision action.

Do not output an internal field block by default.

## Evidence Rules

- Request count is not value.
- Revenue or account tier is context, not automatic priority.
- Requested solution is not necessarily the underlying need.
- Similar wording is not proof of the same problem.
- Aggregation must disclose scope, time window, and missing channels.

## Examples

### Several requests from one enterprise account

Treat them as one customer with several observations, not several customers. Preserve recurrence as
evidence, explain the workflow impact, and compare with other accounts or usage data before claiming a
broad market pattern.

### Sales requests a named feature

Capture the customer's desired result, commercial context only where permitted, and why the requested
feature appears useful. Search for existing evidence, then recommend discovery or triage. Do not copy
the sales promise into the product plan.

### Feedback contradicts the planned design

Record the counter-signal and the segment it represents. Link it to the specification or decision,
explain which assumption it challenges, and propose validation before changing scope.

## Quality Gate

- Problem and requested solution are separated.
- Source, timestamp, segment, and evidence coverage are explicit.
- Counts distinguish requests from distinct customers/users.
- Commercial and personal data are minimized for the decision.
- No commitment or priority is implied by capture alone.
- The result contains an evidence-backed product interpretation, not only a transcript summary.
- Related and contradictory evidence is visible.

## Common Issues

| Problem | Correct response |
|---|---|
| Requested feature is treated as the need | Preserve it, then identify the user's task and problem |
| The same request appears in several systems | Deduplicate by source, customer, event, and underlying problem |
| Commercial data is sensitive | Keep it in the restricted source and share only necessary context |
| One large account dominates the evidence | State its importance and separately assess broader reach |
| Feedback is second-hand | Attribute it to the reporting employee and seek direct evidence when needed |
| No matching work exists | Recommend triage or discovery; do not create a commitment automatically |

## Guardrails

- Do not expose customer revenue, contract, health, or support context beyond approved recipients.
- Do not fabricate frequency, urgency, revenue impact, tier, or affected-user counts.
- Do not tell the customer or internal stakeholder that work is committed unless an authorized owner approved the statement.
