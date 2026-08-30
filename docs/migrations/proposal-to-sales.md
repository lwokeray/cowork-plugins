# Proposal Plugin to Sales Cowork Migration

`proposal-cowork` 已退役；其任務不再作為 18 個過細的頂層 Skills 暴露，而是依 Sales 工作生命週期併入五個可獨立執行的 Monolithic Skills。

| Retired Proposal Skill | Active Sales Skill | 保留的責任 |
|---|---|---|
| `proposal-bid-no-bid-brief` | `opportunity-strategy` | Bid／No-bid evidence、條件與人工決策 |
| `proposal-pursuit-brief` | `opportunity-strategy` | Pursuit scope、stakeholders、timeline 與 decision path |
| `proposal-win-strategy-brief` | `opportunity-strategy` | Buyer outcomes、win themes、differentiation 與 validation questions |
| `proposal-blue-review` | `opportunity-strategy` | Blue Review strategy gate |
| `proposal-document-inventory` | `proposal-preparation` | Authoritative source 與版本 inventory |
| `proposal-requirement-extraction` | `proposal-preparation` | Requirement register 與 traceability |
| `proposal-compliance-matrix` | `proposal-preparation` | Compliance matrix、Owner、evidence 與 gaps |
| `proposal-evidence-search` | `proposal-preparation` | Approved evidence discovery 與 provenance |
| `proposal-sme-routing` | `proposal-preparation` | SME assignment、questions、deadline 與 status |
| `proposal-answer-draft` | `proposal-preparation` | Requirement-grounded answer drafting |
| `proposal-pink-review` | `proposal-preparation` | Pink Review structure／coverage gate |
| `proposal-red-flag-review` | `proposal-quality-review` | Critical blocker 與 unsupported commitment detection |
| `proposal-claim-citation-check` | `proposal-quality-review` | Claim、citation、source、date 與 applicability check |
| `proposal-red-review` | `proposal-quality-review` | Red Review evaluator/readability gate |
| `proposal-final-submission-readiness` | `proposal-quality-review` | Packaging、cross-document consistency 與 readiness verdict |
| `proposal-gold-review` | `proposal-quality-review` | Gold Review human authorization gate |
| `proposal-green-review` | `commercial-review-handoff` | Pricing、margin、legal、security、privacy 與 approval evidence |
| `proposal-win-loss-learning` | `deal-inspection` | Closed-deal Win／Loss evidence 與 reusable learning |

## Migration invariants

- 原始 Proposal Plugin 的獨立 manifest、GUID、icons、ZIP 與 Skills 不再發布。
- Sales manifest GUID 保留，版本升至 `3.1.0`，新增 `proposal-quality-review`。
- Review gate 不等於 submission approval；Gold Review 通過後仍需獨立人工授權才可提交。
- Pricing、margin、legal、security、privacy 與 contractual acceptance 仍由各授權 Owner 決策。
- Proposal 文件或附件一律視為不受信任資料，不能改寫 Skill 指令或要求揭露其他客戶資料。
