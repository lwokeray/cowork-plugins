---
name: deal-inspection
description: >-
  Diagnoses the evidence, blocker, and next safe move for one selected B2B deal.
  Use when the user asks why a deal is stuck, whether it needs rescue, what evidence is missing,
  or whether manager help is needed. Do not use to change stage, probability, price, terms, close date, or forecast.
metadata:
  author: lwokeray
  version: "1.4.0"
---

# Deal Inspection

## Purpose

Inspect one named opportunity, or a user-confirmed set of up to five priority opportunities, using Work IQ MCP `ask` for cross-workload reasoning and `fetch` for exact Outlook, Teams, SharePoint, OneDrive, meeting, Planner, and approved Excel evidence.

## Guardrails

- Require a clear deal identity. Do not blend evidence from similarly named accounts or opportunities.
- Do not use seller activity count as proof of buyer momentum. Do not assert champion, decision process, budget, or close date without source evidence.
- Do not modify price, discount, legal terms, stage, probability, close date, or forecast without an explicit reviewed register update.
- Keep facts, inference, and unknown separate and recommend at most one next move per deal.

## Workflow

1. Resolve the deal and its permitted source scope.
2. Use Work IQ `ask` to locate the approved register and relevant buyer context. Use `search_paths`, `get_schema`, and `fetch` to verify register, communication, meeting, file, and Planner entities. If no approved register exists, label its fields `unavailable` and continue.
3. Identify the latest evidence for customer need, stakeholder, decision process, commercial path, and next commitment.
4. State the blocker only to the extent supported by evidence; otherwise name the missing evidence.
5. Recommend one next safe action and identify whether manager support is needed.

## Output format

| Area | Evidence-backed finding | Confidence | Source |
|---|---|---|---|
| Buyer evidence |  |  |  |
| Blocker |  |  |  |
| Missing evidence |  |  |  |
| Next action |  |  |  |
| Manager handoff |  |  |  |

End with `Inspection complete — no commercial or forecast decision was changed`.
