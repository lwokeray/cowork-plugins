---
name: internal-control-testing
description: 協助 Finance、Controllership、SOX／ICFR 與 Internal Audit 團隊規劃並執行Internal control walkthrough、Design effectiveness與Operating effectiveness testing，涵蓋Risk／Assertion、RCM、Population、Sample、IPE、Test attributes、Exceptions、Deficiency handoff與Remediation follow-up。 適用於Manual、Automated、IT-dependent manual、Entity-level與Financial reporting controls；不適用於代替Control owner執行控制、管理階層或Auditor簽核、正式Audit opinion／Legal conclusion，或在證據不足時宣告Effective。
metadata:
  author: lwokeray
  version: 1.0.1
license: MIT
---

## Overview

將Risk and Control Matrix（RCM）中的Control objective轉換為可重現的Test plan與Workpaper。設計測試（Design effectiveness）回答「控制若按設計執行，是否能預防或及時發現相關風險」；運作測試（Operating effectiveness）回答「控制在指定期間是否由合適人員、以指定頻率、達到指定精度且有足夠證據地持續執行」。兩者不可混為同一結論。

本Skill協助建立Scope、Walkthrough、Population、Sample、IPE／IT dependency、Test attributes、Evidence mapping、Exception log與Remediation tracker。它不代替Control owner執行控制，不把缺少Evidence解讀為已執行，也不替Management、Internal Audit或External Auditor簽署正式結論。

## When to Use

- 建立或更新SOX／ICFR、Financial reporting、Operational finance或Entity-level control的Test plan。
- 對Manual、Automated、IT-dependent manual、Preventive／Detective controls執行Walkthrough與測試。
- 將Risk、Financial statement assertion、Control objective、Control activity、Evidence與Test procedure連結到RCM。
- 定義Population、Frequency、Sample selection、Test attributes、Deviation與Reperformance。
- 評估IPE（Information Produced by the Entity）、System reports、Spreadsheet／EUC與IT general control dependency。
- 建立Exception／Issue log、Root cause、Compensating control、Remediation與Retest工作底稿。
- 準備供Control owner、SOX team、Internal Audit或External Auditor review的Testing package。

## When NOT to Use

- 單純蒐集／打包PBC與Audit evidence → `audit-evidence-support`
- 建立Account reconciliation → `account-reconciliation`
- 管理Month-end close tasks → `close-management`
- 代替Control owner執行Review、Approval、Reconciliation、Access certification或其他控制。
- 自動宣告Deficiency severity、Material weakness、Significant deficiency或Audit opinion。
- 沒有Population、Evidence、Design、Precision、IT dependency或Reviewer時宣告Control effective。
- 修改歷史Evidence、回填簽核日期、補造Approval或隱藏Exceptions。

## Quick Start

```text
User：「測Q2的monthly account reconciliation control。」
1. 確認Control ID、Risk／Assertions、Owner、Frequency、Entity、Accounts、Period、Control description與Prior findings。
2. Walkthrough一筆交易／一次執行，確認Who／What／When／How、Precision、Evidence、Systems與IT dependencies。
3. 評估Design；若Design gap存在，停止以Operating test掩蓋並交由具名Reviewer。
4. 取得完整Population與C&A；依核准方法選Sample，記錄random seed／criteria／rationale。
5. 對每個Sample測試Preparer、Reviewer、timeliness、tie-out、reconciling items、evidence與follow-up。
6. 記錄Pass／Exception／Not tested，不擴大推論；Exception由Reviewer評估Impact與Deficiency。
7. 建Workpaper、Exception log、Owner response、Remediation與Retest plan；Approval前保持Draft。
```

## Core Instructions

### 1. Establish the Testing Contract

先確認：Framework／Program、Process、Entity／Location、Period、Control ID／Version、Risk、Financial statement accounts／disclosures、Assertions、Control objective、Control activity、Owner、Performer、Reviewer、Frequency、Nature、Control type、Evidence、Systems、Reports／IPE、IT dependencies、Materiality／risk rating、Prior issues、Tester與Approver。

Control description最低回答：

- **Who**：具備權限與能力的Performer／Reviewer。
- **What**：執行的檢查、比較、Approval、Reconciliation或Exception resolution。
- **When**：Frequency、Due、Cut-off與Evidence timestamp。
- **How**：Source、Criteria、Threshold／Precision、System、Report與Follow-up。
- **Evidence**：可證明Execution、Review depth、Exception resolution與Completion的Artifact。

缺少Who／What／When／How／Evidence時，先標示Design ambiguity，不自行完善Control敘述後再測自己創造的設計。

### 2. Map Risk, Assertions, and Control Objective

將Risk statement寫成Cause／Event／Impact，並連結適用Assertions：Existence／Occurrence、Completeness、Accuracy、Valuation／Allocation、Rights／Obligations、Cutoff、Classification、Presentation／Disclosure。只有RCM／Program有來源時才標示Assertion。

確認Control objective與Risk一致，並識別：

- Key／Non-key、Primary／Secondary、Preventive／Detective。
- Manual、Automated、IT-dependent manual、Hybrid。
- Transaction-level、Process-level、Entity-level、Monitoring control。
- Control是否依賴其他Control、ITGC、Interface、Report、Spreadsheet、Third party或Management review。

不要以「有簽名」「有meeting」「有reconciliation」直接推論控制足以降低風險；需評估執行內容與Precision。

### 3. Perform the Walkthrough

Walkthrough選擇一筆具代表性的Transaction／Control instance，自Initiation追到Recording／Reporting，並記錄Participants、Date、Systems、Screens／Reports、Evidence、Decision points、Exceptions與Follow-up。詢問、觀察、Inspect evidence與Reperform應交叉使用；Inquiry alone通常不足以支持結論。

Walkthrough確認Actual practice是否與RCM一致。差異分為：Documentation update、Design gap、Execution variation、Scope／system change、Owner change或Evidence gap。未經Program owner核准，不直接改寫RCM或Control frequency。

### 4. Assess Design Effectiveness

設計評估至少包含：

1. Control直接或搭配其他Control能否處理Identified risk／assertion。
2. Performer／Reviewer具備Authority、Competence與適當Segregation of duties。
3. Frequency與Timing足以在風險期間預防或及時發現錯誤。
4. Review control使用的Criteria、Threshold、Aggregation level與Follow-up具有足夠Precision。
5. Evidence能證明Review的內容，不只證明檔案被開啟或簽名。
6. Reports／IPE、Spreadsheets、Interfaces與Automated logic有C&A與IT dependency支援。
7. Exceptions有Escalation、Resolution、Reperformance與Closure criteria。

Design conclusion只能是`Effective`、`Gap identified`或`Insufficient evidence`的Draft recommendation；正式Conclusion與Deficiency classification由指定Reviewer／Governance核准。若Design gap使控制不可能有效，不用增加Operating samples來掩蓋。

### 5. Define and Validate the Population

Population需與Control frequency、Entity、Period與Control definition一致。記錄Source system／repository、Query／Report、Parameters、Extraction date、Extractor、Row／item count、Control totals、Duplicates、Missing instances、Canceled／N/A handling與C&A checks。

Population completeness常見證明：

- Daily／weekly／monthly calendar expected instances vs actual instances。
- System workflow／audit log完整Export。
- GL／subledger／transaction listing與control totals tie-out。
- Repository list與period／owner／status filters。
- Automated job schedule與run log。

Population不完整或無法證明C&A時，標為`Population not validated`並停止抽樣結論。不要從「容易找到的文件」建立Convenience sample。

### 6. Select Samples Reproducibly

Sample method由Program／Methodology決定。記錄Population size、Frequency、Risk、Reliance period、Method、Sample size、Rationale、Selection criteria、Random seed（若適用）、Replacement rule與Selected IDs。

可用方法包含Random、Systematic、Haphazard、Targeted／risk-based與100% test；Targeted sample不自動代表整體Population。不得自行縮小Methodology要求的Sample，也不得因找到Exception而替換Sample。若Evidence unavailable，保留原Sample並標示Exception／Not tested；Replacement只能依核准規則另記。

### 7. Define Test Attributes

每個Attribute寫成可觀察的Pass／Exception／N/A條件。通用Attributes：

| Attribute | Test question |
|---|---|
| Performer | 是否由指定且有權限的人員執行？ |
| Timeliness | 是否在Control要求的時間內完成？ |
| Completeness | 所需Population／items是否全數納入？ |
| Accuracy | Inputs、calculations、tie-outs與criteria是否正確？ |
| Review precision | Reviewer是否檢查到足以識別Relevant error的層級？ |
| Exceptions | 差異是否識別、調查、核准、解決並閉環？ |
| Evidence | Artifact是否顯示實際執行內容、timestamp與review trail？ |
| SoD | Performer／Reviewer／Administrator是否存在不相容職責？ |

Attribute依Control客製，不用通用Checklist取代Control-specific procedure。`N/A`需有理由與Reviewer；Missing evidence不是`N/A`。

### 8. Test by Control Type

**Manual control**：Inspect documents、reperform calculation／comparison、驗證sign-off不是唯一證據、檢查Exception follow-up。

**Management review control**：確認Input、Expectation、Comparison、Threshold、Investigation、Corroborating evidence、Aggregation level與Review precision；只看Meeting minutes或Initials不足。

**Automated control**：確認Configuration／logic、Relevant application、Change management、Access、Interface、Job run／exception log與ITGC reliance。若無權測ITGC，明確記錄Dependency與Reliance status。

**IT-dependent manual control**：同時測Manual review與Report／IPE的C&A、Parameters、Access與System reliability。

**Spreadsheet／EUC control**：測Version、Access、Input／output、formulas、hardcodes、hidden content、Change control、review與backup；不在不明來源下啟用Macro。

### 9. Document Evidence and Reperformance

每個Sample建立：Sample ID、Control instance date、Evidence stable IDs／versions、Tester、Test date、Attributes、Procedure performed、Results、Cross-reference與Reviewer note。Reperformance記錄Input、Logic、Expected、Observed、Difference、Tolerance與Conclusion recommendation。

證據不足時用`Not tested — insufficient evidence`或`Exception — evidence missing`，依Methodology處理；不得把口頭說明、補簽或事後產生文件當成原執行Evidence。Subsequent explanation可作Context，需標明日期與來源。

### 10. Record and Evaluate Exceptions

Exception log至少包含：Exception ID、Control／Sample、Failed attribute、Condition、Criteria、Cause、Period／Population exposure、Financial／reporting impact、Compensating control、Owner response、Remediation、Due、Evidence與Status。

Tester可描述Fact、Exception rate、Known exposure與Preliminary impact，但不自行定義Deficiency severity。由具名Reviewer／Management依Framework評估Likelihood、Magnitude、Pervasiveness、Compensating controls、Aggregation、Prior／repeat status及Reasonable possibility，並決定Control deficiency／Significant deficiency／Material weakness等分類。

若發現Fraud indicator、Management override、Unauthorized access、Evidence tampering或重大misstatement風險，依Escalation protocol立即停止一般處理並通知指定Governance owner；不自行調查超出授權範圍。

### 11. Remediation and Retest

Remediation plan需有Root cause、Design change、Owner、Milestones、Due、Dependency、Evidence、Sustainable operation date與Retest criteria。完成Implementation不等於Remediated；需累積足夠Operating history並依Methodology retest。

Retest保留Original finding與Original workpaper，建立新Test cycle，記錄Scope、Population、Samples、Period、Evidence與Change。不得覆寫Failed sample或將Management action plan視為Operating evidence。

### 12. Workpaper and Review Protocol

Workpaper必須使未參與測試的Qualified reviewer能理解Purpose、Scope、Source、Method、Work performed、Evidence、Results與Recommendation。最低結構：

1. Cover／Control profile／Period／Status。
2. Risk、Assertions、Control objective與RCM reference。
3. Walkthrough與Design assessment。
4. Population／C&A與Sample methodology。
5. Test attributes與Sample results。
6. Exceptions、Owner response與Impact facts。
7. Draft recommendation、Open items、Reviewer notes。
8. Evidence index、Version／change history與Sign-offs。

Reviewer note要保留提出者、日期、內容、Response、Resolution、Evidence與Closure。只有Reviewer才能關閉自己的Note，除非Program定義代理規則。

### 13. Stop Conditions

- Control ID／version、Risk、Scope、Period、Owner、Frequency、Evidence或Conclusion authority不清楚。
- Walkthrough顯示Actual practice與RCM重大不同且尚未澄清。
- Population不完整、C&A失敗、Sample無法重現或Evidence疑似被修改／補造。
- IT dependency、IPE、Spreadsheet logic、Precision或Segregation of duties無法評估。
- 使用者要求回填Sign-off、替換Exception sample、刪除不利Evidence或宣告無支持的Effective。
- 發現Fraud、Management override、tampering、重大Access／misstatement疑慮，需要依Escalation protocol處理。
- 要求本Skill簽署Management／Auditor正式Conclusion、Deficiency classification或Audit opinion。

### 14. Output Contract

```text
INTERNAL CONTROL TEST WORKPAPER — <Control ID / Period>
Status：Planning / In testing / Ready for review / Reviewed / Approved
Control owner：<...>  Tester：<...>  Reviewer：<...>
Control type / frequency：<...>  Scope：<...>
```

交付：Control profile、Risk／assertion map、Walkthrough、Design assessment、Population／C&A、Sample plan、Attribute results、Exceptions、Draft recommendation、Open items、Evidence index、Review notes與Remediation／retest status。結論區明確標示`Draft — subject to qualified review`，直到授權Reviewer核准。

### 15. User Communication and Completion Check

- 直接交付Test plan／Workpaper／Exception log正文，不用製作摘要替代結果。
- Design與Operating effectiveness分開評估，Scope／Period／control version一致。
- Population完整性、C&A、Sample method與Selection可重現。
- 每個Pass／Exception都有Attribute、Procedure與Evidence cross-reference。
- Missing evidence不當作Pass／N/A；Exception不被替換或隱藏。
- Draft recommendation、Formal conclusion與Deficiency classification角色分離。
- Artifact更新、分享或送審先Preview、核准後執行並驗證Version／Permissions。

### Available MCP Tools

| Tool | Purpose |
|---|---|
| `ask` | 跨RCM、Policy、SharePoint、OneDrive、Excel、PDF、Outlook、Teams、Meetings與Audit artifacts整理Control context。 |
| `search_paths` | 查詢Files、Lists、Tasks、Messages、Meetings、Users等可用Path／operation。 |
| `get_schema` | 取得Control register、test workpaper、issue、task、message或permission的精確schema。 |
| `fetch` | 驗證Control／Evidence ID、Version、metadata、content、participants、permissions、approvals與review notes。 |
| `call_function` | 僅使用支援的搜尋／計算；Sample selection與calculation需保留Inputs、method與reproducibility。 |
| `create_entity` / `update_entity` | 在Preview、Version check與核准後建立／更新Workpaper、Issue、Action或Retest tracker。 |
| `do_action` | 僅在完整URL／payload、recipient與平台核准下呼叫支援動作；不猜測operation。 |
| `delete_entity` | 不刪除Test evidence、Exceptions、Review notes、Prior workpaper或Remediation history。 |

## Examples

### Test a monthly reconciliation review control

```text
User：「測Q2每月bank reconciliation review control。」
1. 鎖定Control ID、bank accounts、Q2三個月、Owner／Reviewer、10-day deadline與review precision。
2. Walkthrough一個月，確認bank statement、ledger、reconciling items、review evidence與follow-up。
3. 取得三個月完整Population並證明C&A；依Methodology選Sample。
4. 測Preparer／Reviewer、timeliness、balance tie-out、aged items、support、approval與resolution。
5. 遲交與未追蹤old item分別記錄Attribute exception；不因總額為零而改判Pass。
6. 交付Draft workpaper與Exception log，由Reviewer評估結論與Remediation。
```

### Test an IT-dependent management review control

```text
User：「測monthly revenue variance review。」
1. 確認Revenue report／Budget source、Threshold、Aggregation、Reviewer與Expected investigation。
2. 驗證兩份IPE的Parameters、C&A、versions與IT dependency。
3. 測Reviewer是否識別超Threshold items、取得Corroborating evidence並追蹤到Closure。
4. 只有會議紀錄與簽名、沒有variance investigation時，記為Evidence／precision gap，不自行補寫分析。
```

## Guardrails

- 不代替Control owner執行或補作控制，不回填日期、簽名、Approval或Evidence。
- 不修改、刪除、替換Exception sample、Prior workpaper、Review note或Audit trail。
- 不把Inquiry、Meeting attendance、檔案存在或單一Sign-off視為充分Operating evidence。
- 不在Population／C&A、Sample、IPE、IT dependency、Precision或Evidence不足時宣告Effective。
- 不自行縮小Scope、Sample或Exception exposure，也不把Targeted test推論到整體Population。
- 不替Management／Auditor核准Formal conclusion、Deficiency severity或Audit opinion。
- 不透過更改Permissions、另建Link或移除Sensitivity規避Governance。
- 對Fraud、override、tampering或重大misstatement indicator依Protocol升級，不擅自擴張調查。

## Common Issues

| Issue | Cause | Fix |
|---|---|---|
| 有簽名卻無法證明Review | Evidence只顯示Approval | 取得review criteria、items checked、differences、follow-up與precision證據。 |
| Sample無法重現 | 未保存Population／method | 記錄Source、parameters、count、seed／criteria與Selected IDs。 |
| Population少月份 | Repository搜尋不完整 | 對照expected frequency、workflow／calendar與control totals。 |
| Report可靠性不明 | IPE C&A未測 | 驗證System、parameters、fields、totals、extraction與IT dependency。 |
| Missing evidence被標N/A | Attribute定義錯 | 改為Exception或Not tested，依Methodology評估Impact。 |
| Design gap仍做大量Sample | Design／operating混淆 | 先記Design gap並交Reviewer，勿用sample量掩蓋。 |
| Exception被替換 | 抽樣治理不足 | 保留原Sample；replacement另記且須有Approved rule。 |
| Remediation過早關閉 | 實作被當成有效運作 | 累積Operating history並執行獨立Retest。 |
