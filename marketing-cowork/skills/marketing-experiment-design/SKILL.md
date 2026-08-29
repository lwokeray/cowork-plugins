---
name: marketing-experiment-design
description: >-
  設計、檢查與分析 Marketing A/B 或 controlled experiment，涵蓋 Hypothesis、Unit、Randomization、Primary metric、Guardrail、MDE、Alpha、Power、Sample、Duration、SRM、Multiple testing、Confidence interval、Decision 與 Rollout。
  適用於 Email、Landing page、Ad creative、Offer、Message、Channel 與 Journey experiments；不適用於用顯著性包裝壞資料、過早停止、操弄 Audience 或自動修改 Live campaign。
metadata:
  author: lwokeray
  version: "1.0.0"
---

# Marketing Experiment Design

## Overview

把「測兩個版本哪個好」轉成可解釋、可重現且不傷害 Audience 的實驗。設計先於結果：必須預先定義 Hypothesis、Unit、Eligibility、Randomization、Primary metric、MDE、Alpha、Power、Sample、Duration、Exclusion、Guardrail 與 Decision rule。分析同時報 Effect size、Confidence interval、Data quality 與 Practical significance，不只報 p-value。

## When to Use

- Email Subject／CTA／message、Landing page、Ad creative、Offer、Channel、Timing 或 Form experiments。
- 設計新的 A/B test、檢查既有設計、估算 sample／duration 或分析結果。
- 比較 conversion proportion、continuous outcome、time-to-action 或 funnel progression。
- 檢查 Sample Ratio Mismatch、tracking、contamination、novelty、seasonality 與 multiple testing。
- 建立 Rollout／Retest／Stop／Inconclusive decision pack 與 experiment registry entry。

## When NOT to Use

- 沒有共同 eligibility／randomization，只有兩個時期或兩個不同 Audience 的簡單比較。
- 用個人敏感屬性做不當分組或給不同人不公平／有害待遇。
- 每小時查看並在第一次 p<0.05 時停止，卻沒有 sequential design。
- 同時變更 Audience、Offer、Creative、Landing、Budget 後宣稱單一因素造成差異。
- 自動 rollout、修改 Live Campaign、Budget、Audience 或網站。

## Quick Start

1. 確認 Decision、Hypothesis、control／treatment、unit、eligible population、primary metric、guardrails、MDE、alpha、power、traffic 與 duration constraint。
2. 用 `ask` 尋找 prior experiments、metric definitions、Campaign／Audience、tracking、performance workbook 與 policy；用 `fetch`／`fetch_blob` 驗證。
3. 在 launch 前建立 experiment specification、sample plan、QA、stopping／decision rule 與 registry fields。
4. 分析時先檢查資料完整性、SRM、exposure、dedupe、window 與 exclusions，再估計 effect、interval、p-value／Bayesian result（依預先方法）。
5. 交付 `Roll out／Retest／Keep control／Inconclusive／Stop for harm` 建議與 evidence；不執行變更。

## Core Instructions

### 1. Frame a falsifiable hypothesis

使用：

`For [eligible audience], changing [one primary variable] from [control] to [treatment] will change [primary metric] from [baseline] by at least [MDE] within [window], because [mechanism]. We will reject this hypothesis if [disconfirming evidence].`

Hypothesis 必須連接 Audience behavior 與 mechanism，不能只寫「B 會贏」。同一 Experiment 中保持其他重要因素一致；若需要 factorial design，明確列 factors、levels、interactions 與 sample implications。

### 2. Define population, unit, and assignment

記錄：Eligibility、exclusions、consent／policy、unit of randomization（person／account／session／region／campaign）、unit of analysis、assignment ratio、hash／random method、exposure event、cross-device／cross-channel contamination、re-entry、concurrent experiments 與 holdout。

Unit 不一致會低估標準誤，例如按 Account 分配卻按每次 click 分析。Cluster randomization 需在 sample／analysis 中處理 cluster correlation。不能讓同一人同時看到 Control 與 Treatment，除非設計就是 crossover 且有 washout。

### 3. Define metrics before launch

- Primary metric：一個，直接對應 Decision。
- Secondary metrics：解釋 mechanism，不用來無限制找 Winner。
- Guardrails：unsubscribe、complaint、bounce、quality、refund、support load、page error、brand／policy risk。
- Diagnostic metrics：exposure、delivery、sample ratio、tracking coverage。

每項保留 formula、numerator、denominator、event、attribution window、dedupe、timezone、late-arriving data、source、owner。Email Open 受 privacy protection 影響，不適合作為唯一 outcome；Ad CTR 不能單獨代表 conversion value。

### 4. Choose MDE, alpha, and power

- MDE 是最小值得改變決策的效果，不是希望看到的 uplift。
- Alpha 預設可採 0.05，但需在設計中明示；高風險決策可更嚴格。
- Desired power 通常至少 0.80；baseline、variance、traffic 與 decision cost 決定 sample。
- One-sided test 只有在反方向效果確實不會導致相反決策且 launch 前預先定義時使用。

兩比例近似 sample 可用：

`n per arm ≈ 2 × (z_(1-α/2) + z_(power))² × p̄(1-p̄) / Δ²`

實際應使用 control／treatment expected rates、unequal allocation、cluster／variance reduction、dropout 與 multiple comparison 調整。低 event rate、small sample 或 extreme proportion 不可只依 Wald approximation；需用合適 exact／score／Bayesian 方法並標示。

### 5. Set duration and stopping rules

Duration 至少涵蓋完整 business／behavior cycle、expected conversion lag、weekday／weekend、send／delivery window、seasonality 與 late events。達 sample 不代表已過完整 cycle；過完整 cycle不代表 sample 足夠。

停止只依預先規則：planned sample／duration complete、sequential boundary、technical invalidity、guardrail harm、policy／legal issue。不可看 p-value 後任意提前停止或延長到顯著。

### 6. Build pre-launch QA

檢查：Variant rendering、content／claim approval、eligibility、assignment、exposure logging、metric events、links／destinations、QA／employee exclusion、sample ratio monitoring、bot／duplicate、timezone、privacy、accessibility、fallback、rollback owner、experiment collision 與 registry ID。

A/A test 或 dry run 可驗證 tracking，但不是每次都必要。若 instrumentation 不可靠，先修 tracking，不用更大的 sample 補救。

### 7. Validate data before inference

分析順序：

1. 核對 experiment ID、variant、window、eligibility、assignment、exposure。
2. 移除預先定義 exclusions，不做結果導向排除。
3. 檢查 missing、duplicate、bot／test、late events、event definition change。
4. 檢查 SRM：observed allocation 是否與 planned ratio 顯著不符；SRM 時先找 implementation problem，不繼續宣稱 Winner。
5. 檢查 contamination、concurrent campaign、outage、budget／delivery imbalance。
6. 才計算 effect 與 inference。

### 8. Analyze effect, uncertainty, and practical value

比例 outcome 至少報：Control rate、Treatment rate、absolute difference、relative lift、95% confidence interval、test／model、p-value、sample、events。Continuous outcome 報均值／robust summary、absolute／relative effect、CI、distribution／outlier rule。Cluster／repeated observations 使用相符模型。

Statistical significance 不等於 practical significance。比較 observed effect 與 MDE、cost、capacity、guardrail、segment consistency 與 implementation complexity。CI 跨越 0 與有意義 positive／negative range 時，結論應是 Inconclusive，不是「沒有差異」。

### 9. Control multiple testing and segmentation

多 variants、metrics、looks 或 segments 會提高 false positive。使用預先指定 primary comparison，或採 Holm／Bonferroni／FDR／hierarchical／Bayesian multiplicity approach並說明。Post-hoc segment finding 標 `Exploratory`，需要 independent retest；不得只呈現顯著 segment。

### 10. Make the decision

- `Roll out`：資料有效，effect／CI 支持實用價值，guardrails 可接受，沒有 unresolved policy risk。
- `Keep control`：有可信 harmful／inferior evidence，或 treatment 不足以覆蓋成本。
- `Retest`：mechanism 有價值但 sample／implementation／variant 需修正。
- `Inconclusive`：CI 太寬、MDE 未覆蓋、data quality／SRM／contamination 問題。
- `Stop for harm`：guardrail、privacy、brand、legal 或 user harm。

Rollout plan 需列 phased percentage、monitoring、rollback、segment／region、owner、duration 與 success／harm threshold，但本 Skill 不執行。

## Output Format

```markdown
# Marketing Experiment Specification / Result
## Decision and hypothesis
## Population, unit, assignment, and variants
## Metrics and data contract
## MDE, sample, duration, and stopping rule
## Pre-launch QA and risks

## Data-quality checks
| Check | Expected | Observed | Status | Impact |

## Results
| Metric | Control | Treatment | Effect | 95% CI | Inference | Guardrail |

## Decision recommendation
## Rollout / retest / rollback plan
## Limitations and registry fields
```

## Work IQ Tool Rules

- `ask`：尋找 metric definitions、prior experiments、Campaign、Audience、tracking、policy 與 decisions。
- `search_paths`、`get_schema`、`fetch`、`fetch_blob`：驗證 workbook／file data、version、formula、sample 與 result source。
- 保持 Read-only；不變更 live variants、Audience、Budget、Website 或 Campaign。

## Examples

**User:**「A 10000/500、B 10000/550，B 可以上線嗎？」

**Correct behavior:** 計算 5.0% vs 5.5%、absolute +0.5pp、relative +10%，報 CI／p-value／power／MDE 與 data-quality前提；若 evidence 不足，不因 B 數字較高就宣稱 Winner。

## Guardrails

- 不捏造 sample、events、assignment、baseline、MDE、confidence、p-value、power 或 causal conclusion。
- 不 p-hack、optional stopping、結果導向排除、隱藏負面 segment 或只報 significant metric。
- 不對敏感 Audience 做不公平或有害 treatment，不用 dark pattern。
- 不自動 rollout、pause、修改 Budget／Audience／Website／Email／Ad。
- SRM、tracking failure 或 contamination 未解決時不宣稱實驗有效。
- Baseline、variance、eligibility 或 instrumentation 未知時明確標示 `未知`，提供所需資料與可行的 range，而不製造精確數字。

## Common Issues

| Issue | Cause | Fix |
|---|---|---|
| B 較高就叫 Winner | 忽略 uncertainty／MDE | 報 effect、CI、power 與 practical value。 |
| 每天看結果提早停 | Optional stopping | 用固定 horizon 或預先 sequential boundary。 |
| 很多 segments 都測 | Multiplicity 未控制 | Primary comparison＋adjustment，其他標 exploratory。 |
| Sample 夠但結果怪 | SRM／tracking／contamination | 先驗證 data quality。 |
| 顯著但價值小 | MDE／cost 未定義 | 比較 practical threshold 與 rollout cost。 |
