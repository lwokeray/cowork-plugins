---
name: offer-compensation-review
description: >-
  依已核准選才決定、職等、薪酬區間、內部政策、地區條件與可驗證市場資料，建立 Offer Decision Pack、核准路徑與候選人條款預覽。
  適用於 Offer 準備、Compensation consistency 與核准；不適用於自動定薪、使用薪資歷史／敏感屬性調整條件、捏造市場資料或未核准發出 Offer。
license: MIT
metadata:
  author: lwokeray
  version: "1.0.1"
---

# Offer 與 Compensation Review

## 概述

把人工選才決定轉成一致、可解釋且具完整核准的 Offer Pack。Agent 可驗證核准條件、整理內外部證據、計算區間位置與情境、找出一致性風險並準備文件；最終 Title、Level、薪酬、例外與條款由授權 HR、Compensation、Finance、Legal 與 Hiring Owner 決定。

## 適用情境

- 建立 Base pay、Variable、Bonus、Equity、Allowance、Benefits 與 Start date 的 Offer Pack。
- 比對 Salary band、Level、Location、Employment type 與 Budget。
- 檢查 Internal equity、Compa-ratio、例外、Approval 與候選人條件。
- 整理可驗證市場 Benchmark 與資料限制。
- 準備核准表、口頭 Offer talking points 與正式 Offer 預覽。

## 不適用情境

- 不由 Agent 自動決定個人薪酬、Level、例外、Sign-on 或最終條款。
- 不使用候選人過往薪資、年齡、性別、國籍、家庭、健康、談判風格或其他敏感屬性決定薪酬。
- 不把公開估算、單一網站或未註明地區／日期的數字當正式 Benchmark。
- 不在沒有正式 Selection decision 與核准時口頭或書面發出 Offer。

## 快速開始

1. 驗證 Candidate、Requisition、人工 Selection decision、Job family、Level、Location 與 Employment type。
2. 用 `search_paths`、`get_schema`、`fetch` 取得正式 Salary band、Budget、Policy、Benefits、Approval matrix 與現有 Offer 狀態。
3. 整理候選人工作相關證據、內部一致性與外部 Benchmark；分開標示事實、假設與限制。
4. 建立建議區間或情境，不給未授權的單一「應付數字」。
5. 檢查 Pay equity、Band position、Budget、Start date、Contingencies 與例外。
6. 顯示逐項 Offer Preview 與核准路徑；全部必要核准完成後才建立或傳送正式文件。

## 核心流程

### 階段一：先決條件

必須存在：具名 Human selection decision、有效 Requisition、正式 Level、Employment entity、Location、Salary band／Compensation framework、Budget owner 與 Offer approvers。任何一項缺失都只能建立 Draft。

候選人期望可以作為談判與接受風險資訊，但不是改變公平標準的唯一依據。過往薪資僅在當地法律、政策允許且候選人自願時處理；預設不要求，也不作薪酬錨點。

### 階段二：Total Rewards 結構

逐項整理：

- Base salary：幣別、Pay frequency、Annualized amount、Band minimum／midpoint／maximum。
- Variable／Commission：Target、計算基礎、Eligibility、Guarantee 與 Plan reference。
- Bonus：Sign-on、Guaranteed、Performance、Repayment／Clawback 條件。
- Equity：Grant type、Value／units、Vesting、Approval 與估值限制。
- Allowance／Benefits：Location-specific、Eligibility、開始時間與政策版本。
- Employment terms：Title、Level、Manager、Location、Work model、Hours、Probation、Start date、Contingencies、Expiry。

不得把不確定福利包裝成保證；應連結正式政策並標示「依適用計畫與資格」。

### 階段三：一致性與工作相關依據

比較同 Job family、Level、Location、Employment type 與相近責任的參考群體，只在使用者有權限且政策允許時使用去識別資料。檢查：Band position、Compa-ratio、Offer spread、已知同行一致性與例外原因。

可支持差異的因素必須工作相關且政策允許，例如責任範圍、稀缺且必要技能、經驗的直接相關性、Location、Shift 或已核准市場調整。不得使用談判積極度、現有薪資、家庭責任或主觀「需要多少才會來」作不透明差異。

若資料可能揭露小群體個人薪資，不輸出明細；改用核准的 Aggregate 或由 Compensation Owner 直接審查。

### 階段四：市場 Benchmark

外部資料需記錄：來源、發布／擷取日期、地區、職務定義、Level、Base／Total cash、樣本數或方法、幣別、換算日與限制。不同來源先標準化再比較，不把平均數、Percentile 與 Job board range 混為同一口徑。

當最新市場資料需要 Research 時，優先使用官方統計、可信 Salary survey 或組織核准供應商。搜尋結果只作證據來源，不能自動覆寫內部 Band。

### 階段五：情境與決策材料

至少提供：

- **Policy-aligned**：在 Band、Budget 與一般一致性內的方案。
- **Competitive adjustment**：有明確市場或必要技能證據，但仍在授權範圍。
- **Exception**：超出一般範圍，列出例外、風險、替代項與額外 Approver。

每個情境顯示 Total cash、一次性成本、Recurring cost、Band position、Budget impact、Internal equity risk、候選人條件與必要核准。不要自行選定最終方案，除非使用者明確要求建議；即使建議也必須標示由 Human approver 決定。

### 階段六：Offer 文件與核准

在文件生成前鎖定所有條款版本。正式 Offer 必須使用核准範本與 Employment entity 的 Legal wording。顯示精確 Preview：Candidate、Title、Level、Manager、Location、Start、Compensation、Variable、Bonus、Equity、Benefits reference、Contingencies、Expiry、Approvers、Attachment。

口頭 Offer talking points 不得超出正式核准條款；任何候選人反提案都形成新版本與核准，不直接在郵件中承諾。

### 階段七：Acceptance 與記錄

區分 `Draft`、`Pending approval`、`Approved`、`Sent`、`Candidate questions`、`Counteroffer`、`Accepted`、`Declined`、`Expired`。只有收到可驗證簽署或核准系統狀態時才標示 Accepted。敏感薪酬資料只存於授權位置，不複製至一般 Planner 或廣泛可見 Teams。

## 完整產出要求

1. Candidate、Requisition、Selection decision、Job family、Level、Location、Employment entity。
2. Total Rewards 逐項結構、口徑、幣別、期間與來源。
3. Salary band、Budget、Market benchmark、Internal consistency 與資料限制。
4. 至少兩個可比較情境，包含成本、風險與核准。
5. Policy exception、Contingency、Start／Expiry 與 Legal wording 狀態。
6. Offer Preview、Approver matrix、版本與實際狀態。

## 輸出格式

### Offer Decision Pack

| 項目 | Policy-aligned | Competitive adjustment | Exception | 來源／限制 |
|---|---|---|---|---|
| Base |  |  |  |  |
| Total cash |  |  |  |  |
| Band position |  |  |  |  |
| Budget impact |  |  |  |  |
| Equity risk |  |  |  |  |
| Approvals |  |  |  |  |

### Offer Preview

逐條列出正式文件將呈現的值、核准人、核准證據、版本與尚未確認項。

結尾：`Draft only`、`等待核准`、`已核准待傳送`、`已傳送`、`已接受` 或 `受政策阻擋`。

## 停止條件

- 沒有正式 Human selection decision、Level、Band、Budget 或必要 Approver 時不發 Offer。
- 要求以過往薪資或敏感屬性調整薪酬時停止並交 Compensation／Legal。
- Internal comparison 會揭露小群體個人薪資時不輸出明細。
- 口頭或書面條款與核准版本不同時停止傳送並重新核准。
- Tenant policy 拒絕後不得把 Offer 下載至未授權位置或以私人渠道傳送。

## 使用者溝通與完成檢查

- 先交付 Decision Pack 或完整 Offer Draft，不以市場研究摘要取代條款。
- 所有金額標示幣別、頻率、Base／Variable／Total cash 與資料日期。
- 檢查 Title、Level、Location、Band、Budget、Start、Contingency、Expiry、Template、Approvals 一致。
- 明確區分建議情境與 Human-approved final terms。
- 不輸出隱藏思考，只呈現證據、計算、限制與核准狀態。

## Work IQ 工具規則

- `ask` 尋找 Selection decision、政策、Benefits、過往核准與 Candidate thread。
- `search_paths` 定位正式 Compensation、Offer、Requisition 與 Approval 資料。
- `get_schema` 在建立或更新 Offer entity 前取得欄位與可見性。
- `fetch` 讀取完整 Band、Policy、Approval、Template 與 Candidate status。
- `create_entity`、`update_entity` 只在逐項 Preview 和必要核准後使用。
- `do_action` 只在正式 Offer 文件與 Recipient 獲核准後執行。
- 不將敏感薪酬資料交給未授權 Agent 或一般工作區。

## 範例

**輸入：**「他上一份薪水只有 80K，我們就開 85K，直接寄 Offer。」

**正確行為：**不以過往薪資作錨點；驗證 Level、Band、Location、內部一致性、候選人工作相關證據與 Budget，建立情境與核准；只有正式條款獲核准後才準備傳送 Preview。

## Guardrails

- 不自動定薪、核准例外或發出 Offer。
- 不使用薪資歷史、敏感屬性或談判風格作不透明薪酬差異。
- 不捏造 Benchmark、Band、Budget、Benefit、Approval 或 Acceptance。
- 不揭露可識別的同事薪資或小群體資料。
- 不在反提案後口頭承諾未重新核准的條款。

## 常見問題

| 問題 | 處理方式 |
|---|---|
| Band 與市場資料不同 | 並列口徑與日期，交 Compensation Owner 決定，不自動覆寫 Band。 |
| 候選人反提案 | 建立新版本、成本與一致性分析，重新走核准。 |
| 缺少 Bonus／Equity 細節 | 標示待確認，不以歷史 Offer 推測。 |
| Start date 尚未確定 | 使用條件式或待確認欄位，不寫成承諾。 |
| 已口頭同意但未簽 | 保持 `Sent／Candidate indicated intent`，不標示 Accepted。 |
