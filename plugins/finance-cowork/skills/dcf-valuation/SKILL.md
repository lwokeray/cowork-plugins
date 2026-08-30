---
name: dcf-valuation
description: 依 Historical／Forecast financials、Unlevered free cash flow、WACC、Terminal value、Net debt、Other claims 與 Diluted shares 建立可稽核 DCF valuation、Enterprise-to-equity bridge、Scenario 與 Sensitivity。 適用於 Corporate valuation、Strategic planning、Transaction／Investment analysis support；不適用於個人投資建議、證券買賣、未經來源支持的 Price target、只給單一精確值或將估值視為市場事實。
metadata:
  author: lwokeray
  version: 1.0.1
license: MIT
---

## Overview

建立從 Operating forecast → EBIT／NOPAT → D&A／Capex／NWC → Unlevered FCF → Discount factors → Terminal value → Enterprise value → Equity value → Per-share value 的完整 Bridge。Assumptions集中、Sources可追蹤、Timing convention一致、Sensitivities重新計算模型，並以 Range／Scenario呈現不確定性。

本 Skill 是分析工具，不提供買賣建議或保證。若缺關鍵 Inputs，建立Simplified／Illustrative case並明示Limitation，不用虛構Beta、WACC、Terminal growth、Net debt或Shares填滿模型。

## When to Use

- Enterprise／Equity DCF valuation。
- WACC、Cost of equity／debt、Capital structure。
- Gordon growth 或 Exit multiple Terminal value。
- WACC × Terminal growth／Exit multiple Sensitivity。
- Revenue／Margin／FCF／Scenario valuation range。
- EV-to-equity bridge、Diluted per-share value。
- 審查現有DCF的Formula、Timing、Sources、Double count、Terminal value concentration。

## When NOT to Use

- 建完整Three-statement／Operating model → `financial-model-building`
- 只做Financial ratio／trend → `financial-analysis`
- 個人投資建議、Trade execution、Portfolio allocation、保證報酬。
- 缺少Forecast／FCF basis卻要求精確Price target。
- Formal fairness／tax／legal／audit opinion。

## Quick Start

```text
User：「用現有五年Forecast做DCF，附敏感度。」
1. 確認Valuation date、Company／Entity、Currency／Unit、Forecast version、Timing convention與用途。
2. Tie Revenue／EBIT／Tax／D&A／Capex／NWC到受控model，計算Unlevered FCF。
3. 以可追溯Inputs計算WACC，建立Gordon或Exit-multiple terminal value。
4. Discount forecast FCF與TV，建立EV-to-equity bridge與Diluted per-share value。
5. 建WACC×TGR、Business scenario sensitivities與Checks。
6. 交付Valuation range、Drivers、Source／Assumption register、Limitations，不給買賣指令。
```

## Core Instructions

### 1. Establish Valuation Basis

確認：Valuation date、Entity／Security scope、Currency／Unit、Fiscal periods、Forecast version、Mid-year／End-year convention、DCF type、Terminal method、Net debt date、Diluted share date、Scenario、Audience與Decision。

不要混用不同日期的Market data、Net debt、Shares、Risk-free rate。若Business有多Segment／Currency／Country，決定單一DCF或Sum-of-the-parts，並說明Tax／WACC／FX treatment。

### 2. Source Hierarchy

1. Approved financial model／Forecast與Issued historicals。
2. Filed／official company disclosures、Debt／cash／share schedules。
3. Approved Treasury／Tax／Accounting policy。
4. Named market data source與As-of date。
5. User-provided transaction／strategic assumptions。
6. Explicit estimates with rationale／owner／date。

每個Hardcoded input記錄Value、Unit、Period／As-of、Source、Reference、Owner、Notes。外部Market data需Current／official source；無法驗證時標示Stale／User-provided。

### 3. Forecast Operating Performance

DCF需至少包含：Revenue／operating drivers、EBIT或EBITDA、D&A、Tax、Capex、NWC。使用Company-specific drivers，不以單一Growth＋Margin假設取代已有底層模型。若直接使用Approved forecast，先完成Source tie與Model checks。

### 4. Calculate Unlevered FCF

```text
NOPAT = EBIT × (1 - normalized operating tax rate)
Unlevered FCF = NOPAT + D&A - Capex - Change in operating net working capital
```

- EBIT、Tax、D&A、Capex、NWC scope一致；不混入Financing items。
- Tax loss／NOL、Tax shield、One-time、Stock compensation等依模型目的與Policy處理並揭露。
- Change in NWC sign清楚：Operating NWC增加是Cash use。
- Acquisition／disposal、Restructuring、Lease、Capitalized costs等Material items需明確Treatment。
- FCF schedule tie to underlying model；Reported FCF（OCF－Capex）不直接代替Unlevered FCF而不說明。

### 5. WACC

```text
Cost of equity = Risk-free rate + Beta × Equity risk premium + supported premiums
After-tax cost of debt = Pre-tax cost of debt × (1 - tax rate)
WACC = Equity weight × Cost of equity + Debt weight × After-tax cost of debt
```

- Risk-free rate、ERP、Beta、Credit spread／Yield、Tax rate、Capital structure都記錄Source／As-of／Definition。
- Capital weights使用Market value並說明Target／Current structure。
- Beta需說明Levered／Unlevered、Peer set、Relevering與Observation period（若適用）。
- Small-country／size／specific risk premium只有支持來源才加入，避免Double count。
- Currency／Inflation of WACC與FCF／Terminal growth一致。

### 6. Discount Factors

End-year：`DF_t = 1 / (1 + WACC)^t`。Mid-year依Half-period convention調整；Stub period使用實際Fraction。Terminal value與Forecast cash flows使用同一Timing convention，Valuation date到Cash-flow date一致。

### 7. Terminal Value

#### Gordon Growth

```text
Terminal FCF = Final forecast FCF × (1 + g)
TV = Terminal FCF / (WACC - g)
```

- WACC必須大於g。
- g與Long-term nominal／real Growth、Currency inflation、Mature economy／business一致。
- Final-yearMargins、Capex、D&A、NWC、Tax需接近可持續狀態，不能用未成熟Ramp高點。

#### Exit Multiple

```text
TV = Terminal metric × Exit multiple
```

- Terminal metric與Multiple定義一致（EBITDA、EBIT等）。
- Multiple由Source-backed comparables／transaction／normalized range支持。
- 避免用DCF本身推回Multiple再當獨立證據。

兩種方法可作Cross-check，不平均成單一值而不說明。

### 8. Enterprise-to-Equity Bridge

```text
Enterprise value = PV of forecast FCF + PV of terminal value
Equity value = EV
  - interest-bearing debt
  - debt-like items
  - preferred stock / minority interests / other claims
  + cash and permitted equivalents
  + non-operating investments / assets
Per-share value = Equity value / diluted shares outstanding
```

Debt、Lease、Pension、Factoring、Minority、Associates、Investments、Restricted cash、Tax assets／liabilities的Treatment需說明，避免Double count。Net debt date與Valuation date一致或建立Bridge。Share count使用Diluted definition與As-of；Options／RSUs／Convertibles依適用Method處理。

### 9. Sensitivity and Scenarios

至少：

- WACC × Terminal growth 或 WACC × Exit multiple。
- Business driver scenario：Revenue／Margin／FCF／Capex／NWC。

Sensitivity row／column清楚顯示 changed drivers；每格重新計算DCF mechanics。Invalid `WACC <= g`顯示`N/A`。Base cell可標示但不Hardcode。Scenario說明Assumptions change、Source、Probability（只有核准時）、Valuation impact。

### 10. Valuation Checks

| Check | Requirement |
|---|---|
| FCF | Ties to EBIT／Tax／D&A／Capex／NWC |
| Discount | Factors／stub／mid-year consistent |
| Terminal | First terminal FCF, WACC > g, normalized final year |
| PV | Forecast FCF + TV discounted to same valuation date |
| EV / Equity | No debt／cash／claims double count |
| Shares | Diluted, correct as-of, nonzero |
| Sensitivity | Recalculates model, invalid cells guarded |
| Sources | All material hardcodes sourced／labeled assumptions |
| Concentration | TV % of EV disclosed |
| Precision | Range reflects input uncertainty |

### 11. Interpret Results

先說Valuation range與主要Drivers，再說Base case。顯示：EV、Equity value、Per-share（如適用）、TV share、FCF CAGR、WACC、Terminal assumption、Net debt bridge、Scenario range。不要將DCF output寫成「真實價值」；用「在上述Assumptions下的估值範圍」。

### 12. Stop Conditions

- Valuation date、Forecast version、Currency／Unit、Timing convention不清楚。
- FCF無法Tie、Final-year economics不穩定或Critical forecast inputs缺失。
- WACC inputs無Source／As-of，或WACC <= g。
- Net debt／claims／shares定義不完整，Per-share output會誤導。
- User要求Buy／Sell／Target／Personal advice或保證。
- Model有Formula errors／Plug／Double count未解。

### 13. Output Contract

1. Valuation header：Date、Currency／Unit、Scenario、Forecast version、Timing。
2. Operating／FCF forecast與PV。
3. WACC build。
4. Terminal value build與Cross-check。
5. Enterprise-to-equity bridge。
6. Per-share（如適用）。
7. Sensitivity matrices、Business scenarios。
8. Key drivers、Risks、Limitations。
9. Source／Assumption register、Checks、Model status。

### 14. User Communication and Completion Check

- 交付完整Valuation artifact，不只給單一數字或摘要。
- FCF、WACC、TV、Discount、EV／Equity、Shares與Sensitivity都可追溯。
- Invalid combinations、Missing inputs、TV concentration、Timing與Uncertainty清楚。
- Output是Range／Scenario，不表述為Guarantee、Market fact或Investment advice。
- 所有Checks通過或顯示Fail；不隱藏Double count／Plug／Source gap。

### Available MCP Tools

| Tool | Purpose |
|---|---|
| `ask` | 尋找Financial model、Forecast、Debt／cash／shares、Market inputs與decision context。 |
| `search_paths` | 查詢Files、Workbook tables、Lists等可用Path。 |
| `get_schema` | 取得精確資料／Artifact schema。 |
| `fetch` | 驗證Values、Versions、As-of dates、Sources與existing valuation model。 |
| `call_function` | 只使用支援搜尋／計算；DCF核心公式必須保留在Model。 |
| `create_entity` / `update_entity` | Version diff、Preview與Approval後儲存Valuation artifact。 |
| `do_action` / `delete_entity` | 不用於Trade、Investment order、Capital action、Posting或刪除Model history。 |

## Examples

### Gordon growth DCF

```text
User：「做Gordon growth DCF並看WACC 8%–12%的敏感度。」
1. 驗證Forecast FCF、Valuation date、Currency／Unit與WACC／g sources。
2. 計算NOPAT、UFCF、Discount factors、TV與PV。
3. 建EV-to-equity bridge與Diluted shares。
4. 生成WACC×g矩陣，WACC<=g標N/A。
5. 交付Range、TV concentration、Drivers、Checks與Limitations，不給買賣指令。
```

## Guardrails

- 不提供個人投資建議、Buy／Sell、Trading或保證報酬。
- 不虛構Beta、ERP、WACC、g、Net debt、Shares或Market data。
- 不接受WACC<=g，不混用Nominal／real或Currency／inflation。
- 不把Non-operating assets算入EV又再加到Equity造成Double count。
- 不貼Static sensitivity，不以過度Precision掩蓋Uncertainty。
- 不覆寫Approved model或刪除Source／Version history。

## Common Issues

| Issue | Cause | Fix |
|---|---|---|
| TV異常大 | WACC-g過小／Final FCF未Normalized | 檢查g、WACC、final-year economics與TV share。 |
| Equity value重複加Cash | EV／Net debt bridge double count | 列出每個Claim／Asset並對帳。 |
| Per-share不合理 | Basic／diluted／date不同 | 使用正確Diluted shares與As-of。 |
| Sensitivity不變 | Static values／未連Drivers | 重建為Full recalculation。 |
| WACC與FCF不一致 | Currency／real-nominal／tax不同 | 對齊Basis與Rate sources。 |
| 更新被Policy阻擋 | Tenant governance | 保留Valuation artifact／Preview，標示`Policy denied`。 |
