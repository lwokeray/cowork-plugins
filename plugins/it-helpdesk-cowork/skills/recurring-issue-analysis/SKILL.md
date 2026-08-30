---
name: recurring-issue-analysis
description: |
  Analyzes IT support cases for defensible recurring-issue patterns and problem-investigation candidates.
  Use when a user asks to "find repeated incidents", "analyze recurring tickets", "cluster similar errors",
  "identify a support trend", "check whether this is a known problem", "measure workaround recurrence",
  or needs an evidence-backed recommendation for deeper problem investigation. It does not merge cases,
  declare root cause, create a problem record, or treat superficial text similarity as proof.
license: MIT
metadata:
  author: lwokeray
  version: 2.0.1
---

# Recurring IT Issue Analysis

## Overview

Find repeatable patterns across visible support records while preserving meaningful differences. Quantify recurrence, impact, environment, failure signature, and workaround behavior so a problem owner can decide whether deeper investigation is justified.

## When to Use

- Reviewing repeated incidents for the same service, feature, error, or environment
- Determining whether reopened or duplicate-looking cases form one pattern
- Finding recurrence by version, site, device model, region, or change window
- Evaluating whether a workaround is repeatedly used without durable resolution
- Preparing a problem-investigation recommendation
- Identifying missing diagnostics or knowledge that prevent reliable clustering

## When NOT to Use

- Triage of one new case — use `case-intake-triage`
- Active major incident coordination — use `major-incident-coordination`
- Declaring a root cause or known error from correlation alone
- Merging, linking, closing, reprioritizing, or creating problem records without approval
- Broad employee monitoring, performance analysis, or analysis of unrelated requester behavior

## Quick Start

```text
User: "Check whether VPN error 809 is recurring this month."

1. Define the exact service, signature, time range, environment, and population.
2. Query only visible cases within that scope.
3. Normalize comparable fields while retaining versions, sites, times, and outcomes.
4. Form clusters using multiple shared features, then inspect differences and counterexamples.
5. Quantify frequency and impact from observed records.
6. Recommend or reject problem investigation with confidence and evidence limits.
```

## Analysis Boundary

Before searching, state:

- Selected Customer Service environment
- Time range and displayed time zone
- Services, products, categories, or case populations included
- Statuses and channels included or excluded
- Search signatures: exact error, symptom, version, component, location, or workaround
- Known data-quality limits

Use the narrowest scope that answers the request. Do not expose requester identities when aggregated results are sufficient.

## Core Instructions

### 1. Define a Candidate Signature

A useful signature combines multiple features:

- Same service, feature, dependency, or configuration item
- Same observable failure mode or exact error signature
- Overlapping start window or recurrence cadence
- Same relevant platform, version, device model, network, region, or tenant condition
- Same discriminating test result
- Same workaround and subsequent recurrence pattern

Generic title words such as “slow,” “access,” “error,” “email,” or “VPN” are insufficient on their own.

### 2. Retrieve and Normalize Records

For every candidate record capture only fields needed for comparison:

- Case identifier and timestamps
- Affected service and feature
- Normalized symptom plus preserved original error text
- Environment, version, location, device, or user cohort when relevant
- Impact scope and configured priority
- Diagnostic evidence and result
- Workaround, resolution category, reopen status, and recurrence
- Linked incident, problem, change, knowledge, or asset

Normalize spelling, casing, known aliases, and timestamps, but do not erase material distinctions. Keep `Unknown` separate from `No` or `Not affected`.

### 3. Check Data Quality

Assess:

- Missing fields and inconsistent categories
- Copy-pasted or templated descriptions
- Duplicate records created from the same contact
- Resolution notes without validation
- Category or ownership changes over time
- Differences in logging coverage
- Whether the sample includes only users who reported the issue

State how these limitations affect confidence. Case counts do not equal affected-user counts unless the source establishes that relationship.

### 4. Form and Test Clusters

For each cluster:

1. State the shared signature.
2. List inclusion criteria.
3. Inspect representative members.
4. Identify differences and counterexamples.
5. Test whether the cluster could reflect a common intake template rather than common system behavior.
6. Split the cluster when version, environment, time, or outcome differences suggest different mechanisms.

Assign `High`, `Medium`, or `Low` pattern confidence and explain why. Similarity supports a pattern, not a cause.

### 5. Quantify Recurrence and Impact

Use observed counts and explicit denominators:

- Number of candidate records and accepted cluster members
- Unique affected users, sites, devices, or services only when reliably available
- First and last occurrence
- Frequency by comparable time interval
- Reopen or repeat-contact count
- Documented downtime or work-blocked duration
- Workaround usage, success, and recurrence after workaround
- Configured priorities and verified business impacts

Do not extrapolate beyond the dataset. If volume changes because search scope or intake practice changed, flag it.

### 6. Compare Against Known Work

Review linked or relevant:

- Active and resolved major incidents
- Existing problem or known-error records
- Approved changes and release windows
- Knowledge articles and known workaround guidance
- Vendor advisories approved for use

State exact matches and differences. A nearby deployment or change is contextual evidence, not proof of causation.

### 7. Recommend a Disposition

Choose one:

- `Problem investigation recommended`
- `Continue monitoring with defined signal`
- `Improve intake or diagnostics before clustering`
- `Associate with an existing problem or incident — proposed`
- `No defensible recurring pattern in the selected scope`

When recommending investigation, define:

- Problem statement without a claimed cause
- Business and operational reason
- Representative cases
- Minimum evidence package
- Next discriminating analysis
- Appropriate service owner based on recorded ownership
- Success criterion for the investigation

Do not create or link records under this skill.

## Output Format

```markdown
# Recurring issue analysis — [Scope]

## Analysis boundary
- Environment: ...
- Time range / zone: ...
- Included / excluded: ...
- Search signature: ...
- Data limitations: ...

## Pattern findings
| Cluster | Shared signature | Records | First–last seen | Impact | Confidence |
|---|---|---:|---|---|---|

## Cluster evidence
### [Cluster name]
- Inclusion criteria: ...
- Representative cases: ...
- Shared evidence: ...
- Material differences / counterexamples: ...
- Workaround and recurrence: ...
- Cause status: Unknown | Confirmed by [authoritative record]

## Known-work comparison
| Record | Match | Difference | Relationship status |
|---|---|---|---|

## Recommendation
- Disposition: ...
- Evidence-based reason: ...
- Proposed problem statement: ...
- Required evidence / next analysis: ...
- Proposed owner: ...

## Action boundary
- Case links / problem creation / assignments: Not executed
```

## Guardrails

- Never expose requester identities or unrelated case details in aggregate reporting.
- Never interpret frequency as prevalence without a valid denominator.
- Never declare cause from textual similarity, timing, shared workaround, or change proximity alone.
- Never merge, link, create, route, or reprioritize records without approval.
- Never hide excluded cases or counterexamples that weaken the pattern.
- Use the authorized security process for recurring security signals.

## Common Issues

| Issue | Correction |
|---|---|
| Titles are nearly identical | Compare exact symptom, error, environment, time, and outcome before clustering |
| Case volume increased after a new portal form | Treat the intake change as a measurement confounder |
| Same workaround resolves many cases | Record the operational pattern; do not infer the underlying cause |
| Category fields are inconsistent | Normalize cautiously and report the mapping and uncertainty |
| One case has much broader impact | Analyze it as a possible outlier or separate cluster |
| Existing problem record is similar | Compare exact signature and propose association only when supported |

## Completion Checklist

- Analysis scope, time range, and exclusions are explicit
- Cluster signature uses discriminating features
- Normalization preserves important differences
- Data quality and sampling limits are stated
- Counts use valid denominators and avoid extrapolation
- Counterexamples and conflicting evidence are visible
- Recommendation does not overstate cause or perform record changes

