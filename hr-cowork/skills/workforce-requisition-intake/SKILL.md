---
name: workforce-requisition-intake
description: >-
  接收新增、替補、約聘或派遣的人力需求，驗證業務理由、Headcount、預算、職務範圍、時程、核准與重複職缺，形成可審查的 Requisition Brief。
  適用於 Hiring Request 與職缺立案前準備；不適用於自動核准編制、發布職缺或承諾招聘時程。
metadata:
  author: lwokeray
  version: "1.0.0"
---

# 人力需求與職缺申請接收

## 概述

把主管的自然語言需求、郵件、表單或會議紀錄整理為可供 HR、Finance 與 Management 審查的 Requisition Brief。重點是找出業務成果、實際容量缺口、職務責任、成本邊界、替代方案、核准路徑與未決問題，不把「急著找人」直接轉成已核准職缺。

## 適用情境

- 新增 Headcount、離職替補、Backfill、Fixed-term、Contractor、Intern 或派遣需求。
- 合併 Hiring Manager 的郵件、會議紀錄與既有職務資料。
- 檢查是否已有相同或高度重疊 Requisition。
- 建立核准前的需求、成本、時程與風險說明。
- 核准後建立 Requisition register 項目或 Planner 工作。

## 不適用情境

- 不替 Finance、HR Leader 或 Business Owner 核准預算與編制。
- 不在缺少核准時發布職缺、聯絡候選人或承諾 Start Date。
- 不使用特定現任員工的年齡、健康、家庭、國籍或其他敏感資訊支持需求。
- 不用單一主管的主觀評語證明某人應被替換或終止。

## 快速開始

1. 確認需求類型、Hiring Manager、Team、Location、Employment Type、期望到職日與來源。
2. 用 `ask` 找出相關 Capacity、專案、離職通知、既有 Requisition 與核准紀錄。
3. 用 `search_paths`、`get_schema`、`fetch` 驗證 Headcount register、Budget owner、Job family、Level 與重複項目。
4. 將事實、主管假設、HR 建議與未知分開。
5. 建立 Requisition Brief、核准路徑與最少需要補問的問題。
6. 只有在核准證據存在且使用者確認 Preview 後才建立或更新 Requisition。

## 核心流程

### 階段一：解析需求與唯一識別

先辨識這是 New headcount、Backfill、Conversion、Temporary coverage 或 Role redesign。對 Backfill，記錄原職缺或 Position ID，但不在一般文件揭露離職原因。對新 Headcount，要求能連結至核准的組織目標、服務需求、專案、法規義務或容量缺口。

以 Team、Job family、Level、Location、Employment type、Hiring Manager 與預計期間檢查重複；相似名稱不代表重複，名稱不同也可能是相同工作。

### 階段二：建立業務需求鏈

需求必須能回答：

1. 要達成的業務成果或維持的必要服務是什麼。
2. 現有容量、技能或責任缺口如何影響成果。
3. 缺口的可驗證證據為何，例如 workload、SLA、project scope、coverage 或 succession gap。
4. 不補人時的具體影響與可接受期限。
5. 是否評估流程改善、優先級調整、內部移動、短期支援、Automation 或 Vendor 等替代方案。

不得將長工時本身直接視為永久 Headcount 的充分理由；需確認期間、需求是否持續、工作能否移除或重新分配。

### 階段三：定義職務邊界

建立 Role Charter：

- 3 至 6 項主要成果，而不是工具清單。
- 主要責任、決策權、利害關係人與交付邊界。
- 必備能力與可入職後學習能力。
- Job family、Level、Manager、Location、Work model、Travel／On-call 條件。
- Employment type、預計期間、FTE 或工時比例。

若 Level 尚未確認，列出不同 Level 對責任、獨立性、影響範圍與成本的差異，不依候選人薪資反推 Level。

### 階段四：核准與成本條件

至少驗證：Headcount availability、Cost center、Budget owner、Salary band 或 Contractor budget、Recruiting owner、Target start、必要核准與政策例外。薪酬只引用核准範圍，不將個別現任員工薪資放入 Brief。

狀態使用：

- `草擬中`：需求存在但關鍵資料未齊。
- `待核准`：必要欄位齊全且已送至明確核准者。
- `已核准`：可驗證核准紀錄、範圍、有效期限與條件存在。
- `退回補件`：核准者要求補充或改變範圍。
- `暫緩／關閉`：有明確決定與原因；不得用無回覆自動判定。

### 階段五：風險與相依性

檢查：

- Target Start 是否與核准、Sourcing、Notice period、Background check 或設備準備的 Lead time 相容。
- JD、Level、Location、Budget 是否互相一致。
- New hire 是否依賴 Office、Visa、Security clearance、Shift 或 Local employment entity。
- 同時開多個相似職缺是否造成重複競爭或錯誤 Headcount 計算。
- Backfill 是否受 Legal Hold、ER Case 或組織變更限制；只記錄限制，不揭露個案內容。

### 階段六：核准後建立

建立或更新前顯示：Requisition title、ID、Team、Manager、Type、FTE、Level、Location、Cost center、Target start、狀態、核准人、核准來源與 JD 下一步。若任何高影響欄位與核准內容不一致，停止並重新送審。

## Requisition 完整欄位

| 類別 | 必要內容 |
|---|---|
| 身分 | Requisition ID、Title、Hiring Manager、Recruiter、Team |
| 類型 | New／Backfill／Temporary／Conversion、Employment type、FTE |
| 成果 | 業務成果、容量或技能缺口、不補人的影響 |
| 職務 | Job family、Level、Location、Work model、核心責任 |
| 成本 | Cost center、Budget owner、核准範圍、有效期限 |
| 時程 | Target start、Sourcing window、決策與依賴里程碑 |
| 治理 | 核准者、核准證據、政策例外、資料分類 |
| 狀態 | 已知、未知、阻塞、下一步與完成定義 |

## 決策規則

- 缺少 Headcount 或 Budget 核准：可以完成 Draft，不得標示可招聘。
- 需求與既有職缺高度重疊：先提供合併或區隔建議，不建立第二筆。
- Target Start 不合理：呈現 Lead-time 風險與最早可行區間，不承諾日期。
- 必備條件過多：標示人才池縮小風險，要求區分 `必要` 與 `可培養`。
- 對特定個人的替換要求：將職缺需求與個別員工議題分離，後者交由授權 HR 流程。

## 輸出格式

### Requisition Brief

| 欄位 | 內容 | 證據／來源 | 狀態 |
|---|---|---|---|
| Business outcome |  |  | 已確認／待確認 |
| Capacity or skill gap |  |  |  |
| Headcount and budget |  |  |  |
| Role scope |  |  |  |
| Timeline |  |  |  |
| Approvals |  |  |  |

### 未決問題與建議

| 優先級 | 問題 | 回答者 | 為何會影響核准 | 最晚時間 |
|---|---|---|---|---|

### 建立／更新預覽

逐欄列出目標、舊值、新值、核准來源與執行狀態。

## 停止條件

- 無法驗證 Hiring Manager、Cost center、Headcount 或核准人時，不建立正式 Requisition。
- 需求理由包含歧視、報復、規避調整或替換特定受保護群體的意圖時，停止並交由 HR／Legal。
- Backfill 與 ER、調查或終止流程相連但尚未有正式決定時，不提前建立對外可見職缺。
- Tenant policy 拒絕或資料來源未授權時，不換工具重試。

## 使用者溝通與完成檢查

- 直接提供可審查的 Requisition Brief，不把欄位擷取清單當成果。
- 使用 Hiring Manager 能理解的業務語言；內部工具與 schema 不出現在正式文件。
- 檢查 Business outcome、Gap、替代方案、Role boundary、Cost、Timeline、Approval、Risk 是否齊全。
- 明確區分 Draft、待核准與已核准，不用顏色或語氣取代狀態。
- 不輸出隱藏思考，只列支持結論的證據與未知。

## Work IQ 工具規則

- `ask` 尋找需求背景、工作量、專案、既有職缺與核准紀錄。
- `search_paths` 定位正式 Headcount／Requisition register 與核准文件。
- `get_schema` 在任何欄位寫入前取得實際 schema。
- `fetch` 驗證原始核准、最新版本、Position ID 與重複項目。
- `create_entity`、`update_entity` 只在精確 Preview 與核准後執行。
- `do_action` 可用於已核准的郵件或任務，但只使用回傳的 Action URL。
- `delete_entity` 不用於未核准職缺；關閉通常以狀態更新保留 Audit trail。

## 範例

**輸入：**「主管說團隊太忙，要新增兩個 Senior Engineer，下個月到職。」

**正確行為：**將「太忙」視為尚待證明的需求；找出可驗證 workload、服務或專案缺口，檢查兩個 Headcount 與 Budget、Level 和 Lead time；產出 Draft 與未決問題，不直接建立兩筆已核准職缺或承諾下月到職。

## Guardrails

- 不以受保護屬性、健康、家庭或工會身分支持人力需求。
- 不把個人績效爭議寫入一般 Requisition Brief。
- 不捏造 Budget、Salary band、Headcount、Approval 或 Start date。
- 不在核准前發布 JD、啟動 Outreach 或建立外部承諾。
- 不把 Agent 建議描述成 HR、Finance 或 Management 的正式決定。

## 常見問題

| 問題 | 處理方式 |
|---|---|
| 主管只說很急 | 要求可驗證影響、最晚決策事件與可接受的替代方案。 |
| 找到相似職缺 | 比較職責、Level、Location、Manager 與 Headcount，再決定合併或區隔。 |
| 沒有 Salary band | 保持 `待確認`，不從公開薪資或個人資料直接填入。 |
| Target Start 過早 | 提供 Lead-time 風險與最早可行區間。 |
| Backfill 原因敏感 | 只記 `Backfill eligibility 待 HR 確認`，不展開原因。 |
