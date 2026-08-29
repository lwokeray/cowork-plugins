---
name: account-reconciliation
description: 將 GL balance 與 Bank statement、Subledger、Supporting schedule、Counterparty 或 Roll-forward 進行可追溯對帳，分類 Reconciling items、Aging、Adjustment 與未解差異。 適用於 Bank、GL-to-subledger、Balance-sheet、Intercompany、Cash、AR、AP、Fixed asset、Prepaid 與 Accrual reconciliation；不適用於直接清帳、Write-off、Posting、Payment release 或正式 Audit conclusion。
metadata:
  author: lwokeray
  version: 1.0.1
license: MIT
---

## Overview

建立可由 Reviewer 重現的 Reconciliation：Book source 與 Independent comparison source 使用相同 Entity、Account、Currency、Period 與 As-of；每一筆差異保留原始識別、Match method、Category、Age、Owner、Expected resolution、Proposed adjustment 與 Evidence。不得將無關項目互相 Netting、以 Fuzzy match 自動清除，或用 Plug 讓 Difference 變成零。

Skill 產出 Reconciliation workpaper、Open item register 與 Proposed JE。清帳、Write-off、Bank adjustment、Subledger correction 或 ERP posting 必須由具權限人員透過核准流程執行。

## When to Use

- Bank statement vs GL cash reconciliation。
- GL control account vs AR／AP／Inventory／Fixed asset Subledger。
- Prepaid、Accrual、Debt、Lease、Equity 或其他 Balance-sheet roll-forward reconciliation。
- Intercompany receivable／payable、Revenue／expense、Loan 或 settlement reconciliation。
- 追蹤 Outstanding checks、Deposits in transit、Unapplied cash、Unposted batches、Manual JE 與 Interface errors。
- 比較本期與上期 Open items、Aging 與 recurring difference。
- 審查既有 Reconciliation 的 Tie-out、Evidence、Reviewer 與 Status。

## When NOT to Use

- 從來源文件準備 JE → `journal-entry-preparation`
- 建立完整 Close calendar → `close-management`
- 產製 Financial Statements → `financial-statement-preparation`
- 進行 AR／AP／Inventory 策略分析 → `working-capital-review`
- 未經核准直接 Clear、Write off、Reverse、Delete、Settle 或修改 Source records。

## Quick Start

1. 確認 Account、Entity、Ledger、Currency、Period end、Reconciliation type、Materiality、Tolerance 與 Status。
2. 取得 Book source 與 Independent source，記錄 Report parameters、As-of timestamp、Version 與 Source totals。
3. 驗證兩邊 Scope、Opening balance、Activity、Ending balance、Signs、Units 與 Completeness。
4. 先 Exact ID matching，再 Amount／Date／Counterparty matching，最後才產生需人工 Review 的候選 Fuzzy matches。
5. 分類 Timing、Book adjustment、Source adjustment、Classification、Duplicate／Omission、Disputed、Unexplained。
6. 建立 Tie-out、Aging、Proposed JE、Owner／Due 與 Reviewer conclusion；未解差異保持可見。

## Core Instructions

### 階段一：建立 Reconciliation header

記錄：

- Reconciliation ID、Account code／name、Entity、Ledger、Currency、Period end。
- Book source 與 Comparison source 的名稱、位置、Report／File ID、版本、Extracted time、Filters。
- Beginning balance、Current activity、Ending balance、Control total。
- Approved matching key、Date window、Amount tolerance、FX treatment、Materiality、Aging policy。
- Preparer、Reviewer、Due、Prepared／Reviewed date 與 Status。

任一來源使用不同 As-of、Entity scope 或 Currency 時，先建立 Scope bridge。無法 Bridge 就停止 Tie-out，不得直接比較 Totals。

### 階段二：驗證來源完整性

對兩個來源檢查：

- Header total 是否等於 Detail sum。
- Beginning＋Activity 是否等於 Ending。
- Report filters、Entity、Account range、Currency、Posting status 與 Date range。
- 是否遺漏 Manual JE、Unposted batch、Cancelled item、Zero-balance line 或 Closed item。
- Stable identifiers 是否唯一；重複資料是否由 Export／Join 造成。
- Numeric、Date、Sign、Debit／Credit convention 與 Unit 是否一致。
- Prior-period ending 是否等於 Current beginning，差異是否有 Restatement／Late posting bridge。

來源不完整時，Reconciliation status 為 `Source incomplete`；可以列出已知差額，但不能標示 Prepared／Complete。

### 階段三：依類型建立 Tie-out

#### GL-to-subledger

```text
Subledger ending total
+/- Unposted or interface timing
+/- Manual GL entries not represented in subledger
+/- Mapping / classification differences
+/- Source corrections
= Adjusted subledger balance

GL control-account ending balance
+/- Book adjustments required
= Adjusted GL balance

Adjusted subledger - Adjusted GL = 0
```

調查 Manual JE、Failed interface、Batch timing、Reclassification、Wrong entity／account、Cut-off 與 Duplicate posting。Control account 的 Manual JE 必須特別標示。

#### Bank reconciliation

```text
Bank statement ending balance
+ Deposits in transit
- Outstanding checks / payments
+/- Bank errors
= Adjusted bank balance

GL cash ending balance
+ Interest / credits not recorded
- Fees / returns / debits not recorded
+/- GL errors
= Adjusted GL balance

Adjusted bank - Adjusted GL = 0
```

Bank-side timing items與 Book-side adjustment 分開。不得用同額但不同 Counterparty／Date 的交易互相抵銷。Book cash、Bank cash、Available cash、Restricted cash 與 Trapped cash 不混用。

#### Balance-sheet roll-forward

```text
Beginning supported balance
+ Additions
- Settlements / amortization / disposals / releases
+/- Revaluation / FX / other supported movement
= Expected ending balance
Expected ending - GL ending = Difference
```

每一類 Movement 都要 Tie to Source schedule；`Other` 必須可展開到明細與理由。

#### Intercompany

- 以 Entity pair、Counterparty、Document、Transaction date、Currency、Amount、Invoice／Settlement ID 配對。
- 同時顯示 Entity A 與 Entity B 的 Book amount、Functional currency、FX rate、Difference。
- 分類 Missing counter-entry、Timing、FX、Markup、Classification、Dispute、Settlement、Cut-off。
- Elimination proposal 必須連結 Both-side evidence；不因一方餘額正確就推定另一方需調整。

### 階段四：Matching hierarchy

依序使用：

1. **Exact stable ID**：相同 Source／Document／Line ID。
2. **Exact business key**：Entity／Counterparty＋Amount＋Currency＋Date／Reference。
3. **One-to-many／Many-to-one**：明確 Aggregation，組合 Totals 完全相符並符合 Business event。
4. **Approved tolerance match**：在政策允許的 Amount／Date tolerance 內，保留 Tolerance reason。
5. **Candidate fuzzy match**：文字、相近日期或相近 Amount，只能列為 `Review candidate`。

每個 Match 保留 `match_method`、Matched record IDs、Difference、Tolerance、Confidence 與 Reviewer status。Material fuzzy match、跨 Currency match 或多個等價候選不可自動 Resolve。

### 階段五：分類 Reconciling items

| Category | 定義 | 預設處理 |
|---|---|---|
| Timing difference | 已正確記錄，等待正常處理週期清除 | 設 Expected clearing date 並監控 |
| Book adjustment required | Independent source 正確，GL／Book 需更正 | 準備 Proposed JE，不直接 Posting |
| Source adjustment required | GL 正確，Subledger／Schedule／Bank source 需更正 | 指派 Source owner |
| Classification difference | Account、Entity、Dimension、Period 或 Currency 錯誤 | 準備 Reclass／Mapping correction |
| Duplicate / omission | 重複或缺少 Transaction | 調查完整 Population 與 Corrective action |
| Disputed | Counterparty／Owner 對 Validity／Amount 有爭議 | 保留 Gross balance、Evidence 與 Escalation |
| Unexplained | Root cause 未建立 | 不清除、不 Netting，設定 Owner／Due |

### 階段六：Aging 與趨勢

- Age 由 Original transaction date 或 Expected clear date 計算，不用 Reconciliation preparation date。
- Aging buckets 使用企業政策；未提供時可使用 `0–30 / 31–60 / 61–90 / 90+` 作分析分組，但不得自行設定 Write-off threshold。
- 比較 Open item amount、Count、Average age、Oldest age、Recurring category 與 Prior-period carryforward。
- 標示 Material、Stale、Recurring、Unsupported、Growing、Disputed 或可能 Fraud signal 的項目，僅作 Investigation priority，不直接作處置結論。

### 階段七：Proposed adjustments

將 Book adjustment 與 Reclass 交給 `journal-entry-preparation`，保留：Source ref、Account、Debit／Credit purpose、Amount、Currency、Period、Reversal、Policy、Reviewer。Timing items 不產生 JE；Unexplained items 不可為了 Tie-out 直接做 JE。

### 階段八：Review 與寫入

Reviewer 檢查 Source completeness、Matching rules、Reconciling classification、Aging、Proposed JE、Prior-period items、Tie-out 與 SoD。若要更新 Reconciliation workbook、SharePoint list 或 Planner：

1. Discover Path／schema。
2. 確認唯一 Reconciliation ID 與版本。
3. 顯示新增、修改、Carryforward、Closed 與仍 Open 項目 Preview。
4. 核准後寫入；重新 Fetch Record／Version 驗證。

不得用 Update／Delete 破壞 Original source 或歷史 Reconciliation。

### Reconciliation Decision and Calculation Rules

- `Difference = Adjusted comparison balance - Adjusted book balance`，並固定 Sign convention。
- Match rate 同時呈現 Count 與 Amount：`Matched count / population count`、`Matched amount / population amount`。
- Amount match 必須考慮 Currency；不同 Currency 先依核准 FX policy 轉換並保留原 Amount。
- Tolerance 只使用核准政策，沒有政策就不自動 Resolve。
- Same amount 不代表 Same transaction；Business key 與 Event 必須一致。
- Difference＝0 不代表 Reconciliation 有效；若 Source incomplete、Netting、Unsupported items 或無 Reviewer evidence，狀態不能 Complete。
- Prior-period open item 只有在本期出現對應 Clear evidence 才能 Closed。

### Stop Conditions

- Account、Entity、Currency、Period、As-of 無法唯一確認。
- Book 或 Comparison source 缺少 Header／Detail／Filters，無法驗證 Completeness。
- 兩邊 Scope／Unit／Currency 不一致且無法 Bridge。
- Matching tolerance、Policy 或 Materiality 缺失，且會實質改變 Clear／Open 判斷。
- 多個 Fuzzy candidates、Unexplained material difference 或疑似 Duplicate 未解。
- 使用者要求 Clear、Write-off、Settle、Post 或 Delete，但操作不支援、未核准或 Policy denied。

### Output Contract

```text
RECONCILIATION — <Account> — <Entity> — <Period end>
Status：Draft / Source incomplete / Prepared / Reviewed / Complete / Blocked
Currency / Unit：<...>    Tolerance：<policy ref>    As-of：<...>
Book source：<source/version>    Comparison source：<source/version>
```

| Summary | Book | Comparison | Difference |
|---|---:|---:|---:|
| Source ending balance |  |  |  |
| Supported adjustments |  |  |  |
| Adjusted balance |  |  |  |

| Item ID | Source refs | Description | Amount | Currency | Origin date | Age | Category | Match method | Owner | Expected clear | Action | Status |
|---|---|---|---:|---|---|---:|---|---|---|---|---|---|

另附：Matched summary、Aging、Prior-period roll-forward、Proposed JEs、Source register、Tie-out checks、Reviewer conclusion。

### User Communication and Completion Check

- 直接交付 Reconciliation 與 Open item register，不輸出工具操作摘要。
- Scope、Source、As-of、Currency、Tolerance、Sign convention 與 Status 清楚。
- Source totals 與 Detail 完整 Tie；Match 可由 IDs 與規則重建。
- 每筆差異有 Category、Age、Owner、Action、Evidence 與 Resolution status。
- Timing 與 Adjustment 分開；Unexplained residual 明確可見。
- Difference＝0、Reviewer evidence 與 Complete status 分別檢查。

### Available MCP Tools

- `ask`：尋找 Bank／GL／Subledger exports、Schedules、Prior recs、Email confirmations、Teams decisions 與 Open item context。
- `search_paths`：確認 Files、Lists、Workbook tables、Tasks 或 External resource 是否可讀／寫。
- `get_schema`：取得精確讀取或更新的即時 schema；不假設 Excel table／List columns。
- `fetch`：驗證檔案版本、Table、Rows、Record ID、Owner、Approval 與 Source metadata。
- `call_function`：可用於明確支援的搜尋／計算；Matching 結果仍需保留可重現規則與 IDs。
- `create_entity`、`update_entity`：只更新核准的 Reconciliation artifact 或 Action tracker，先 Preview 並保留歷史。
- `do_action`、`delete_entity`：不得用於清帳、Write-off、Payment、Source deletion 或 History removal。

## Examples

**輸入：**「對八月底銀行帳戶，找出還沒清的項目。」

**正確行為：**以相同 Account／Currency／As-of 的 Bank statement 與 GL detail 驗證 Totals，先 Exact reference match，再處理 one-to-many。將 Outstanding payments、Deposits in transit 與 Fees／Interest 分開，列出 Aging、Expected clear、Proposed JE、Owner 與 Tie-out。相近金額但不同 Reference 的項目保留 Review candidate，不自動清除。

## Guardrails

- 不將無關項目 Netting、不使用 Plug、不隱藏 Residual。
- 不以 Fuzzy match 自動 Resolve material item。
- 不修改 Source evidence、不刪除 Open-item history。
- 不因 Difference＝0 宣稱完整或核准。
- 不自行設定 Materiality、Tolerance、Write-off 或 Escalation authority。
- 不執行 Payment、Settlement、Write-off、Clear 或 ERP posting。
- 不暴露完整 Bank account、Customer／Vendor PII 或不必要敏感資料。

## Common Issues

| 問題 | 處理方式 |
|---|---|
| Source total 與 detail 不同 | 狀態改為 `Source incomplete`，先修正 Export／Filter。 |
| Same amount 有多個候選 | 保留全部 Candidate，用 Reference、Counterparty、Date 與 Event 人工判斷。 |
| Prior-period item 沒有本期紀錄 | 保留 Carryforward，不因 Aging 自動 Closed。 |
| Bank 與 GL Currency 不同 | 依核准 FX policy 建立 Bridge，保留原 Currency／Amount。 |
| Difference 只剩小額 | 沒有核准 Tolerance 時仍保持 Open。 |
| Policy 阻擋更新 | 報告 `Policy denied`，保留工作底稿與 Preview，不重試。 |
