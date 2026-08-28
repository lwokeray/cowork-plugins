---
name: customer-signal
description: Connect customer and user feedback to PM work in a Linear-like way. Use for customer requests, feature demand, support signals, account feedback, prioritization by segment/tier/size/revenue, and linking requests to issues or projects.
---

# Customer signal

Customer signal 的價值在於把 feedback 連到可追蹤的 issue/project，再以 customer context 支持優先排序；不是把郵件摘要成「客戶想要 X」。先確認 customer/account、source conversation、request、affected users/segment、business impact、importance、related issue/project、privacy boundary 與 requested decision。

## Workflow

1. **Capture the source.** 讀取指定 Outlook thread、Teams context、SharePoint/OneDrive request register、approved Excel/CSV、meeting artifact 或其他 Microsoft source。保留 source link/pointer、requester、customer/account、timestamp、original wording、attachments/links allowed。
2. **Normalize the request.** 分開 user problem、requested solution、current workaround、frequency、severity、impact、context、duplicate candidates 與 evidence confidence。
3. **Preserve customer attributes.** 在允許的範圍保留 account/segment、tier/size/revenue/status、region、contract/renewal context；對個資與機密採最小必要原則，不要把敏感資料複製到不必要的 artifact。
4. **Link to work.** 建議 related issue/project/initiative/milestone；若已有相同 problem，建議連結而非建立重複工作。由 PM/owner 確認 duplicate/merge/priority。
5. **Aggregate demand carefully.** 統計 request count、distinct customers、important requests、segment/impact patterns only when data and definitions are explicit. Do not equate count with value; show counter-signals and data gaps.
6. **Support prioritization.** 產出 customer impact、urgency、strategic fit、evidence confidence、smallest validation experiment 與 trade-offs。不要自動把高-revenue customer request 變成 Must-have。
7. **Handoff.** 產出 issue/project relation payload，並將 source link、customer context、importance、owner、next decision、write_status 保留。沒有 confirmed tool 就不建立或修改 work item。

## Output

`customer`、`request_id`、`source`、`problem`、`requested_solution`、`affected_segment`、`attributes`、`frequency`、`impact`、`importance`、`related_issue`、`related_project`、`duplicate_candidates`、`evidence`、`counter_evidence`、`priority_context`、`next_decision`、`write_status`。

## Guardrails

不要向不需要的人暴露客戶營收、合約、個資或敏感 support context。不要把 customer request 等同於 product commitment。不要虛構數量、revenue impact、tier 或 urgency。
