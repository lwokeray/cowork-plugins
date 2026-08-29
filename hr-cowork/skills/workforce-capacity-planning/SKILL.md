---
name: workforce-capacity-planning
description: >-
  整合核准的 Headcount、Demand、Capacity、技能、職缺、離職與財務假設，建立 Base／Upside／Downside 人力情境、缺口、成本與行動。
  適用於年度／季度 Workforce Planning、容量與技能規劃；不適用於個人離職／績效預測、自動裁員排序、敏感屬性決策或捏造精確 Forecast。
metadata:
  author: lwokeray
  version: "1.0.0"
---

# Workforce Capacity Planning

## 概述

把業務需求、服務量、專案、組織容量、技能、Headcount、Vacancy、Hiring lead time、Attrition assumptions 與成本轉成透明的情境式 Workforce Plan。Agent 可建立模型、檢查假設、辨識技能／容量缺口與比較行動；Headcount、組織變更、Reallocation、Vendor、Hiring、Redeployment 或 Reduction 決定由授權 Leadership、HR、Finance 與 Legal 作成。

## 適用情境

- 年度、季度或專案 Workforce Plan。
- Demand／Capacity、Coverage、Shift、SLA、Utilization 與技能缺口分析。
- Headcount、Hiring、Internal mobility、Training、Automation、Vendor 與優先級情境。
- 比較 Base／Upside／Downside 的成本、Lead time、Risk 與 Trigger。
- 建立決策 Pack、Requisition roadmap 與 Review cadence。

## 不適用情境

- 不預測或排名個人離職、績效、可替代性、忠誠度或裁員優先順序。
- 不使用年齡、健康、家庭、國籍、性別、工會、Leave／Accommodation 或其他敏感屬性作人力決策。
- 不把活動監控、Presence 或工時推算當容量與生產力證據。
- 不將模型輸出視為已核准 Headcount、Budget、Reorganization 或 Workforce action。

## 快速開始

1. 定義 Planning horizon、業務成果、Service／project scope、Scenario、時間粒度、Org unit 與地區。
2. 用 `ask` 尋找核准 Demand、Headcount、Open requisitions、Budget、Skills、Workload、SLA 與歷史資料。
3. 用 `search_paths`、`get_schema`、`fetch` 驗證 Dataset、Definition、Period、Owner、版本與可比性。
4. 將 Demand driver、Available capacity、Productive capacity、Skill coverage、Vacancy、Attrition 與 Hiring lead time 分開建模。
5. 建立至少三個情境，列出 Assumption、Gap、Cost、Risk、Trigger 與 Action mix。
6. 交付 Decision Pack；任何 Requisition、Budget、Task 或組織資料寫入需核准。

## 核心流程

### 階段一：需求模型

Demand 需連結可驗證 driver：客戶／案件／交易量、服務時段、SLA、專案 Milestone、產品 Roadmap、法規控制、地點覆蓋或維運責任。區分：Run、Change／Project、Peak、Contingency、Management／enablement 與不可延後工作。

使用適合的 Work unit，例如 Cases、Tickets、Projects、Accounts、Hours of coverage、Deliverables；不要直接以「每人平均」掩蓋角色與技能差異。若沒有精確資料，建立 Low／Most likely／High 範圍並標示來源。

### 階段二：容量模型

從 Approved headcount／FTE 開始，扣除 Vacancy、Planned leave 的合規 Aggregate、Training、Management、Meeting、Maintenance、Ramp-up 與必要 Buffer，得到 Productive capacity。不要把個人 Leave 或 Accommodation 視為低績效，也不揭露個人資料。

容量計算至少說明：

- FTE／hours 定義與 period。
- Work calendar、Holidays、Shift、Location／time zone。
- Utilization／shrinkage 假設及依據。
- New hire ramp、Contractor duration、Internal transfer 生效。
- 單點技能、On-call、Segregation of duties 與 Backup coverage。

### 階段三：技能與角色覆蓋

使用角色／技能分類的 Aggregate，區分 Required、Available、Proficient、Developing、Unavailable／unknown。Skill inventory 必須說明來源與更新日期，員工自報或 Manager assessment 不是絕對事實。

建立 Coverage risk：沒有 Backup、只有單一地區、Certification 即將到期、Hiring market scarce、Onboarding lead time 長、關鍵流程依賴個人。輸出不應公開個人「可替代性」排名；需要 succession 討論時使用受限、人工作業流程。

### 階段四：Attrition 與 Vacancy

只使用經核准 Aggregate rate 或 Scenario assumption，不預測個人。區分 Voluntary、Involuntary、Retirement（僅 Aggregate／政策允許）、Internal movement、Contract end 與 Vacancy。記錄 Base period、Sample、Seasonality、Small-group suppression 與 uncertainty。

Open requisition 需包含 Stage、Expected fill、Offer risk、Notice、Ramp 與是否已核准；不要把 Target date 當確定 Start。

### 階段五：情境與行動組合

至少建立：

- **Base**：最可能 Demand、核准 Headcount 與一般 Attrition／Hiring。
- **Upside／Peak**：需求增加、Hiring delay 或高 Coverage 要求。
- **Downside／Constraint**：預算下降、優先級變更或 Demand 減少。

行動先比較需求管理、停止／延後低價值工作、流程改善、Automation、Cross-training、Internal mobility、Schedule／coverage、Contractor／Vendor、Hiring。任何 Reduction、Redeployment 或重大組織變更需專屬 HR／Legal／Leadership 流程，不由模型自動選人。

每個情境顯示 Gap、Cost、Time-to-impact、Operational risk、People risk、Dependency、Trigger、Reversibility 與 Decision owner。不要用單一點估算假裝確定。

### 階段六：敏感度與品質

測試 Demand、Productivity、Attrition、Fill time、Ramp、Utilization、Vendor capacity 等關鍵假設上下變動對 Headcount gap 的影響。指出最會改變決策的假設與 Break point。

檢查不同系統的 Headcount definition、Contractor、Leave、Open position、Cost currency、Period、Duplicate、Effective dating 與 organizational hierarchy。來源衝突時並列，不自行覆寫。

### 階段七：決策與追蹤

Decision Pack 先顯示結論、關鍵 Gap、推薦 Action mix、成本、Risk、Trigger 與不可逆決定。正式 Headcount／Budget 由 Human approver 決定。核准後將 Action 轉成 Requisition、Learning、Process improvement 或 Vendor work；分開追蹤 Plan、Approved、In progress、Realized。

## 完整產出要求

1. Scope、Horizon、Business outcomes、Demand units、Time grain 與 Owners。
2. Demand、Capacity、Productive capacity、Skills、Vacancy、Attrition、Hiring／Ramp 的定義與來源。
3. Base／Upside／Downside 情境、Assumptions、Gap、Cost、Risk 與 Trigger。
4. Action mix、Time-to-impact、Dependency、Reversibility 與 Human decision。
5. Sensitivity、Data quality、Small-group／privacy control 與不能下的結論。
6. Approved actions、Owner、Milestone、Measure 與 Review cadence。

## 輸出格式

### Workforce Scenarios

| 指標／假設 | Base | Upside | Downside | 來源／限制 |
|---|---|---|---|---|
| Demand |  |  |  |  |
| Productive capacity |  |  |  |  |
| Skill gap |  |  |  |  |
| Headcount gap |  |  |  |  |
| Cost |  |  |  |  |

### Action Portfolio

| Action | Gap addressed | Time | Cost | Risk | Trigger | Owner | Approval |
|---|---|---|---|---|---|---|---|

## 停止條件

- Headcount、Demand、Capacity、Cost 或 Period 定義無法對齊時，不輸出精確單一 Forecast。
- 使用者要求個人 Flight risk、低績效、可替代性或裁員排序時停止。
- 小群體資料可能識別個人時使用 Aggregate／suppression，不輸出明細。
- Reduction、Redeployment、Location closure 或其他高影響行動未經 HR／Legal／Leadership 時只作情境，不執行。
- Tenant policy 拒絕後不得匯出或合併未授權員工資料。

## 使用者溝通與完成檢查

- 先交付情境與決策影響，不以資料來源摘要取代模型。
- 每個數字標示期間、單位、口徑、來源與假設；區間優於假精確。
- 檢查 Demand、Capacity、Skill、Vacancy、Attrition、Hiring、Ramp 未重複計算。
- 檢查沒有個人離職／績效預測或敏感屬性決策。
- 不輸出隱藏思考，只列公式、證據、假設、限制與可審查建議。

## Work IQ 工具規則

- `ask` 尋找 Demand、Headcount、Budget、Projects、Skills、Vacancies 與過往 Plans。
- `search_paths` 定位核准 Workforce／Finance／HR／Project Dataset。
- `get_schema` 驗證欄位、Definition、Effective dating 與目標 Action register。
- `fetch` 讀取完整資料、版本、Approval 與歷史基準。
- `create_entity`、`update_entity` 只在 Approved action Preview 核准後使用。
- `do_action` 可建立核准的 Planning task／review，不代表 Headcount 已核准。
- 不使用工具建立個人監控或跨資料集推斷敏感特徵。

## 範例

**輸入：**「預測哪些人最可能離職，先把他們排進補人和裁員名單。」

**正確行為：**不預測或排名個人；使用 Aggregate attrition 情境、技能與容量缺口建立 Base／Upside／Downside 計畫；任何 Requisition 或 Reduction 由 Human owner 依正式流程決定。

## Guardrails

- 不預測個人 Flight risk、績效、可替代性或自動裁員排序。
- 不使用敏感屬性、Leave／Accommodation 或活動監控作規劃依據。
- 不把 Target／assumption 描述為確定 Headcount、Start 或 Savings。
- 不以模型自動核准 Hiring、Vendor、Redeployment、Reduction 或 Reorganization。
- 不揭露小群體或可識別的員工資料。

## 常見問題

| 問題 | 處理方式 |
|---|---|
| Demand 沒有歷史資料 | 使用範圍與明確 driver，建立假設和敏感度。 |
| Headcount 系統口徑不同 | 先建立定義對照，不直接合計。 |
| Hiring date 不確定 | 使用 Fill／notice／ramp 區間，不當成確定 Start。 |
| 技能資料過舊 | 標示低信心並建立更新動作。 |
| 需要減少成本 | 比較多種 Action mix，高影響人事決定交正式流程。 |
