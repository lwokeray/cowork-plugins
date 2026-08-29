# Estimation Methods

## PERT

For each work package:

- Expected effort: `E = (O + 4M + P) / 6`
- Standard deviation: `σ = (P - O) / 6`
- Variance: `V = σ²`

For independent work packages:

- Total expected effort: `ΣE`
- Total standard deviation: `sqrt(ΣV)`

Indicative normal-approximation intervals:

- 68%: `E ± 1σ`
- 90%: `E ± 1.645σ`
- 95%: `E ± 1.96σ`

Use intervals only when independence and distribution assumptions are reasonable. Correlated risks and shared dependencies require separate scenario analysis.

### Input Validation

- Require `O <= M <= P` and a consistent unit.
- A very large `P/O` spread indicates discovery or decomposition work, not merely a larger buffer.
- Near-identical O/M/P values require an evidence check; they may hide unexamined uncertainty.
- Do not obtain all three values by applying fixed percentages to one model-generated number.

## T-shirt Sizing

Use team-calibrated anchors from completed work. Record the anchor examples and date. Do not treat generic size-to-day tables as universal truth. Convert sizes to numeric ranges only when the team has approved a mapping.

Use XXL or equivalent as a split/discovery signal rather than a normal work package.

## Function Point Analysis

Count the functional boundary explicitly:

- ILF: internally maintained logical data group
- EIF: externally maintained logical data group referenced by the system
- EI: external input that changes internal state
- EO: external output with processing/derived data
- EQ: external inquiry without significant derived processing

Record complexity basis and the source of the hours-per-FP conversion factor. Treat platform, migration, data quality, integration, security, and non-functional work not represented by the count as explicit adjustments or separate work packages.

## Adjustment Rules

Review these as separate work packages or explicit factors:

- requirements instability and discovery;
- architecture/integration uncertainty;
- security, privacy, compliance, accessibility, and performance validation;
- test automation, regression, data migration, and environment setup;
- code review, documentation, deployment, monitoring, support transition, and training;
- context switching, PTO, support/on-call load, and onboarding.

Avoid stacking overlapping adjustments. State the basis and whether the factor changes expected effort, uncertainty, capacity, or elapsed duration.

## Re-estimation Triggers

- approved scope or acceptance criteria change;
- dependency interface or need-by date changes;
- architecture spike resolves or exposes uncertainty;
- team composition/capacity changes;
- actuals exceed the agreed variance threshold;
- regulatory/security constraints change;
- estimate baseline expires or new historical evidence becomes available.
