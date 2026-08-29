---
name: audit-evidence-support
description: >-
  協助 Finance、Controllership、Internal Audit 與 External Audit 團隊建立、追蹤、驗證並交付 PBC／Audit evidence package，涵蓋 Evidence request、Source integrity、Completeness and accuracy、Tie-out、Version、Access、Cross-reference、Open items 與交付紀錄。
  適用於財務報表稽核、SOX／ICFR、Internal audit、Walkthrough、Sample support、PBC tracker 與Evidence handoff；不適用於改寫原始證據、代替Auditor下結論、規避Legal hold／Retention／Access policy，或在未核准下對外分享敏感資料。
metadata:
  author: lwokeray
  version: "1.0.0"
---

## Overview

將Audit request轉換為可追溯、可重現、權限正確的Evidence package。每一項Evidence都必須回答：Request是什麼、適用Entity／Period／Population為何、Source system與Owner是誰、何時擷取、由誰擷取、如何證明Completeness and accuracy、如何Tie到Financial statements／Control／Sample，以及交付了哪個不可混淆的Version。

本Skill只協助整理、驗證與交付證據，不改寫原始Record、不建立不存在的Approval、不替Management或Auditor做Assertion／Opinion。狀態必須區分`Requested`、`In progress`、`Ready for review`、`Reviewed`、`Delivered`、`Accepted`、`Rejected`與`Superseded`；`Delivered`不等於`Accepted`。

## When to Use

- 建立或更新PBC（Prepared by Client）request list、Evidence tracker、Due-date與Owner。
- 蒐集Financial statement audit、SOX／ICFR、Internal audit或Compliance review的Supporting documents。
- 對Journal entry、Reconciliation、Invoice、Contract、Approval、System report、Meeting record或Sample做Evidence bundle。
- 驗證Report／Spreadsheet／Export的Completeness and accuracy（C&A）、Parameters、Population與Tie-out。
- 建立Evidence index、Cross-reference、Naming convention、Version register、Review notes與Delivery log。
- 回應Auditor follow-up，保留原Request與原Delivery，建立新Version與Change note。
- 準備Walkthrough、Sample selection、Control test或Substantive procedure所需資料，但不執行Audit conclusion。

## When NOT to Use

- 評估Control design／operating effectiveness → `internal-control-testing`
- 建立或核准Journal entry → `journal-entry-preparation`
- 完成Account reconciliation → `account-reconciliation`
- 從TB產製Financial statements → `financial-statement-preparation`
- 修改、補造、回填、重建或刪除原始Audit evidence。
- 代替Auditor判定Sufficient appropriate audit evidence、Material misstatement或Audit opinion。
- 未經Legal／Privacy／Data owner核准分享PII、Payroll、Tax、Legal privileged或其他Restricted資料。
- 規避Retention、Legal hold、Sensitivity label、DLP、Access control或Tenant governance。

## Quick Start

```text
User：「把Q2 audit的PBC清單整理好，已收到的證據打包給Auditor。」
1. 確認Audit／Review、Entity、Period、Request list version、Auditor、Delivery channel、Due date與Sensitivity。
2. 為每項Request建立唯一ID、Owner、Evidence criteria、Status、Source與Open items。
3. 取得候選Evidence；記錄Source、Path／ID、Version、As-of、Extractor、Parameters與Access。
4. 執行Completeness／accuracy、Population、Tie-out、Approval、Signature／timestamp與Cross-reference檢查。
5. 建Evidence index與Package；原始Evidence保持不變，衍生說明文件另存並標示。
6. 顯示Exact files、Recipients、Permissions、Sensitivity、Redactions與Delivery action；核准後才分享。
7. 驗證交付結果並保留Delivery receipt、Rejected／follow-up與Superseded version紀錄。
```

## Core Instructions

### 1. Establish the Evidence Request Contract

先確認並記錄：

- Audit／Review type、Engagement／Control／Procedure、Entity、Location、Period、Currency與Reporting basis。
- Request list owner、Request list version、Request ID、Description、Purpose／Assertion、Due date與Priority。
- Auditor／Reviewer、Management owner、Preparer、Reviewer與Approver。
- Required format、Population、Sample IDs、Date range、System／Report、Parameters、Required fields與Evidence acceptance criteria。
- Delivery channel、Recipients、External sharing、Sensitivity、Retention、Legal hold、Redaction與Encryption要求。

Request不清楚時，不自行猜測「Auditor應該要什麼」。將Ambiguity轉成具體Question，例如：「要General ledger population還是Selected sample support？」「需要System-generated PDF、Excel export，或兩者？」「Period是posting date或document date？」

### 2. Build the PBC and Evidence Register

每項Request使用穩定的唯一ID，不以行號作唯一識別。最低欄位：

| Field | Required content |
|---|---|
| Request ID | Engagement內唯一且不因排序改變 |
| Request | Auditor／Reviewer原文或受控轉述 |
| Purpose / Assertion | Existence、Completeness、Accuracy、Cutoff、Valuation、Rights等；只有有來源才填 |
| Scope | Entity、Account／Process、Period、Population、Sample |
| Owner / Reviewer | 具名人員或`Unassigned` |
| Due / Priority | 明確日期與來源 |
| Evidence criteria | File type、fields、approvals、parameters、tie-out |
| Candidate evidence | Source item IDs／paths與Versions |
| Status | Requested／In progress／Ready for review／Reviewed／Delivered／Accepted／Rejected／Superseded |
| Exceptions / Open items | 缺件、差異、Access、Follow-up |
| Delivery | Package version、recipient、timestamp、receipt |

不得把`Ready for review`改成`Reviewed`，不得把`Delivered`改成`Accepted`，除非有具名Reviewer／Auditor evidence。

### 3. Evidence Hierarchy and Source Integrity

優先使用最接近Source of record且可重現的Evidence：

1. System-generated immutable／controlled report或transaction record。
2. Approved document、signed record、workflow history或versioned repository item。
3. Controlled spreadsheet／reconciliation／memo及其Source links與Review evidence。
4. Email／Teams／meeting evidence，只在能確認Participants、timestamp、context與完整thread時使用。
5. Screenshot只作Supporting evidence；若可取得原Report／record，不以Screenshot取代。

對每個Evidence記錄：Title、Source system、Stable ID／URL、Folder／Library、Owner、Created／Modified、Version、As-of、Extracted by、Extracted at、Parameters、File hash（若流程提供）、Permissions、Sensitivity與Relationship to request。

不得改變原始Evidence。需要Annotation、Translation、Index、Calculation或Redaction時建立Derived copy，清楚標示`Derived`、Source、Transformation、Author、Date與Version；保留未修改原件。

### 4. Completeness and Accuracy (C&A)

System report、Query、Export或Spreadsheet至少檢查：

- Report／Query名稱、System／Environment、Entity／Ledger／Company、Period與As-of。
- Filters、Parameters、Status、Currency、Time zone、Posting／Document date convention。
- Population row count、record count、control total、debit／credit total或其他可驗證Totals。
- 與Source system screen／control total／GL／TB／Subledger／approved source的Tie-out。
- Fields、column definitions、sign convention、duplicates、missing values、hidden rows／columns、filters與formulas。
- Report是否Scheduled／Standard／Custom；Custom query由誰維護與是否經Change control。
- Extraction timestamp、Extractor、Access role與是否可重現。

無法取得C&A證據時，把Report標為`C&A not established`，列出Impact與需要的Owner action；不可用敘述代替檢查。

### 5. Spreadsheet and IPE Checks

對Excel／CSV／user-created report執行：

- 確認Source tabs／files、Import method、refresh timestamp與link health。
- 檢查Totals、Subtotals、formulas、hardcodes、named ranges、hidden content、filters、duplicates與error cells。
- 抽查Source-to-output與Output-to-source，保留Sample selection方式。
- 記錄Macro／Power Query／external connection／manual step；不在不明情況下啟用Macro。
- 確認Reviewer檢查的Precision與Evidence，不把檔案存在當作Review證據。

若表格是IPE（Information Produced by the Entity），Evidence package需包含IPE purpose、Source、Parameters、C&A、Change control／logic、Preparer與Reviewer evidence。

### 6. Tie-Out and Cross-Reference

每個Evidence與Request／Procedure建立雙向Cross-reference：

- Financial statement → Note／Line → TB／Account → Reconciliation／Schedule → Source transaction。
- Control → Control execution → Population → Sample → Evidence → Test attribute（若由相關Skill執行）。
- Journal entry → JE ID → Support → Approval → Posting record → GL impact。
- Invoice／expense → Transaction ID → PO／contract → Receipt／service evidence → Approval → Payment。

Tie-out表必須顯示Source value、Evidence value、Difference、Tolerance、Explanation、Status與Reviewer。`0`差異不代表Evidence完整；仍需Scope、Period與Source匹配。

### 7. Packaging and Naming

建議Package結構只表達Audit navigation，不重複或改動Source：

```text
<Engagement>_<Entity>_<Period>_PBC_<Version>/
  00_Evidence_Index
  01_Request_<ID>/
  02_Request_<ID>/
  90_Open_Items
  99_Delivery_Log
```

檔名使用`<RequestID>_<Entity>_<Period>_<EvidenceType>_<SourceDate>_<Version>`；避免`final-final2`。Evidence index至少包含Request ID、Filename／Link、Description、Source、Version、As-of、C&A status、Tie-out status、Sensitivity、Reviewer與Notes。

若平台／Auditor portal要求不同結構，遵循核准的Delivery protocol。不要壓縮、加密或重新命名到破壞原Version／signature；需要密碼或Encryption時使用Approved channel分離傳遞。

### 8. Review, Redaction, and Access

交付前執行四層檢查：

1. **Scope**：Entity、Period、Population、Sample與Request一致。
2. **Evidence quality**：Source、C&A、Tie-out、Approval、timestamp、Version與legibility。
3. **Privacy／Legal**：PII、bank data、payroll、tax、legal privilege、commercial confidentiality、retention與legal hold。
4. **Access**：Recipient、guest／external status、least privilege、expiration、download restriction與Sensitivity label。

Redaction只能依Approved rule執行；記錄Redacted fields、Reason、Authority、Method、Reviewer與Source original。不可刪除可能影響Audit interpretation的資訊，也不可自行判定Legal privilege。

### 9. Delivery and Follow-Up

分享前顯示：Package name／version、Request IDs、Exact files／links、Recipients、External domains、Permissions、Expiration、Sensitivity、Redactions、Message與Delivery action。使用者確認且平台核准後才執行。

交付後驗證URL／portal result、Recipients、permission、timestamp與receipt。若Partial failure，逐項列出Delivered／Failed／Blocked；不把部分成功說成全部完成。Follow-up建立新Request／sub-request或新Version，保留原Delivery與Change note，不覆寫Accepted evidence。

### 10. Stop Conditions

- Engagement、Entity、Period、Request ID、Population／sample、Due date或Evidence criteria不清楚。
- Candidate evidence的Source、Version、C&A、Tie-out或Approval無法建立。
- Evidence疑似被修改、缺頁、截斷、過期、損壞、與Source不一致或存在未解差異。
- Recipients、External sharing、Permissions、Sensitivity、Redaction、Legal hold或Retention不明。
- 使用者要求補造、改寫、刪除、回填日期、偽造Approval／signature或隱藏不利Evidence。
- 要求作Auditor／Legal／Tax的正式Conclusion、Opinion或Privilege determination。

### 11. Output Contract

```text
AUDIT EVIDENCE PACKAGE — <Engagement / Entity / Period>
Package version：<...>  Status：Draft / Ready for review / Reviewed / Delivered / Accepted
Request list version：<...>  Prepared by：<...>  Reviewed by：<...>
As-of / extraction cut-off：<...>  Sensitivity：<...>
```

交付內容：PBC status table、Evidence index、C&A results、Tie-out／cross-reference、Open items、Exceptions、Version／change register、Access／redaction review與Delivery log。Unknown保持Unknown，不用推測填滿。

### 12. User Communication and Completion Check

- 直接交付Tracker、Index、Package或Evidence memo正文，不以製作摘要取代結果。
- 每個Request有Owner、Due、Criteria、Source、Version、C&A／Tie-out與Status。
- 原始Evidence未變更；所有Derived artifact可追溯Transformation。
- Reviewed／Delivered／Accepted狀態有具名Evidence，無誤導性完成宣告。
- External sharing、Recipients、Permissions、Sensitivity與Redaction已Preview並核准。
- Delivery後重新驗證Result與Receipt；Open／Rejected／Superseded仍可追蹤。

### Available MCP Tools

| Tool | Purpose |
|---|---|
| `ask` | 跨SharePoint、OneDrive、Outlook、Teams、Word、Excel、PDF、Meeting與Enterprise Search整理Request與Evidence context。 |
| `search_paths` | 查詢Files、Folders、Lists、Messages、Meetings、Tasks等可用Path與operation。 |
| `get_schema` | 取得Evidence tracker、file、list item、message、task、permission等精確schema。 |
| `fetch` | 驗證Item ID、Version、metadata、content、participants、permissions、approval與delivery result。 |
| `call_function` | 只使用已支援的搜尋／計算功能；不得猜測operation或用計算掩蓋Source缺口。 |
| `create_entity` / `update_entity` | 在Preview、Version check與核准後建立／更新PBC tracker、index或Review task。 |
| `do_action` | 只在完整URL、Recipients／payload明確且平台核准時分享／寄送／呼叫支援動作。 |
| `delete_entity` | 原則上不用於Audit evidence；不得刪除Source、Delivered／Accepted package或Delivery history。 |

## Examples

### Prepare an external audit PBC package

```text
User：「PBC 42要Q2 AP aging、三張sample invoice和付款證明，週五前交。」
1. 鎖定Request 42原文、Entity、Q2 cut-off、AP aging parameters、三個Sample IDs與Auditor recipient。
2. 取得System-generated aging、C&A totals、Invoice／PO／receipt／approval／payment records。
3. Aging tie到AP subledger／GL；每個Sample建立transaction chain與cross-reference。
4. 建Evidence index，標記任何Missing receipt、date mismatch或Access restriction。
5. Reviewer完成後，Preview exact package、redactions、permissions與recipient；核准後交付並保存receipt。
```

### Respond to a rejected evidence item

```text
Auditor：「原本的Sales report沒有顯示filter與run date。」
1. 原Delivery保持不變並標為Rejected，不覆寫或刪除。
2. 取得相同Population、相同Period的新System report與Parameter／run metadata。
3. 重做C&A與Tie-out，記錄與前Version的Change。
4. 產生V2、重新Review、Preview並核准後交付；Delivery log連結V1與V2。
```

## Guardrails

- 不建立、修改、補造、回填、刪除或隱藏原始Evidence與Audit trail。
- 不把Screenshot、Email摘要或AI敘述冒充Source-system record。
- 不把`Ready`／`Delivered`說成`Reviewed`／`Accepted`，不替Auditor作Conclusion。
- 不在Source、C&A、Scope、Version、Tie-out或Reviewer不明時宣告Evidence完整。
- 不透過修改Permissions、移除Sensitivity label或另建公開Link規避Policy。
- 不自行決定Redaction、Legal privilege、Retention、Legal hold或External disclosure。
- 不將PII、Payroll、Bank、Tax、Customer或Legal資料分享給未確認Recipient。
- 所有Create／Update／Share／Send動作先Preview；平台核准後執行並驗證Result。

## Common Issues

| Issue | Cause | Fix |
|---|---|---|
| Auditor無法重現Report | 缺Parameters／run metadata | 補System、report、filters、period、as-of、extractor與control totals。 |
| Evidence有檔案但不完整 | 未建立Acceptance criteria | 逐Request定義Population、fields、approval、C&A與tie-out。 |
| V1被V2覆寫 | 無Version control | 保留原Delivery，新增Version、change note與Superseded link。 |
| Excel total對不上GL | Scope／sign／date convention不同 | 鎖定Entity、period、posting date、currency、sign並做差異表。 |
| Recipient看不到或看到太多 | Permission設定錯 | 核對guest、least privilege、expiration與Sensitivity後重新核准。 |
| Package含多餘PII | 未做Privacy review | 停止交付，依Approved redaction rule處理並保留original。 |
| Delivered被誤報Accepted | 狀態定義混用 | 只有Auditor／Reviewer回覆才改為Accepted。 |
| Search沒有結果 | 權限、索引或Path問題 | 查證Stable ID／owner／repository；標示Access denied，不臆測不存在。 |
