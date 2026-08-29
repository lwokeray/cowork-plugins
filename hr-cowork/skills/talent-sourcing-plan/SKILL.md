---
name: talent-sourcing-plan
description: >-
  依已核准 Requisition 與 Job Description，建立人才來源、搜尋條件、渠道、Outreach、進度指標與風險控制的 Sourcing Plan。
  適用於主動招募、人才社群、內部人才與多渠道規劃；不適用於未經同意的大量聯繫、敏感屬性推斷、繞過平台限制或自動建立錄取順位。
metadata:
  author: lwokeray
  version: "1.0.0"
---

# Talent Sourcing Plan

## 概述

把核准職缺轉成可執行、可衡量且不依賴敏感屬性推斷的人才搜尋計畫。輸出應定義理想證據、可替代背景、搜尋語彙、來源渠道、Outreach 原則、漏斗假設、Owner、Review cadence 與停止條件，而不是產生一長串未驗證姓名或自動發訊息。

## 適用情境

- 為新職缺建立內部與外部 Sourcing Strategy。
- 將 JD 的 Must-have 轉成可搜尋、可驗證的證據訊號。
- 規劃 LinkedIn、人才庫、Referral、社群、校園、Agency 或內部流動渠道。
- 檢查來源組合、漏斗轉換、候選人體驗與市場風險。
- 撰寫一對一 Outreach 草稿與 Recruiter 工作計畫。

## 不適用情境

- 不抓取、購買或合併未經核准的個資名單。
- 不由姓名、照片、地址、學校、社群或語言推斷種族、國籍、宗教、年齡、性別、健康、家庭、性傾向、工會或其他敏感屬性。
- 不把社群活躍度、追蹤者數、照片印象或「像不像團隊」當成 Fit。
- 不批次寄送未經核准的 Outreach，不規避平台速率、Consent、Opt-out 或 Tenant policy。

## 快速開始

1. 驗證 Requisition 已核准、JD 版本、Location、Level、Work model 與 Target date。
2. 將核心成果與 Must-have 轉成候選人可能留下的工作證據及同義語彙。
3. 用 `ask` 尋找內部人才庫、過往相似職缺、Referral 與已核准來源紀錄。
4. 用 `search_paths`、`get_schema`、`fetch` 驗證 Talent pool、Consent、Owner 與 Duplicate。
5. 建立渠道組合、搜尋式、Outreach 原則、容量與漏斗假設。
6. 先交付計畫與訊息 Preview；實際聯繫或 register 寫入需逐項核准。

## 核心流程

### 階段一：把 JD 轉成搜尋證據

每個搜尋條件必須對應工作必要性。建立三層訊號：

- **直接證據**：曾交付與核心成果高度相近的工作、持有法定必要資格或在相近複雜度下負責相同決策。
- **相鄰證據**：使用不同產品、產業或職稱，但展現可轉移的問題、規模、Stakeholder 或責任。
- **探索訊號**：可能相關但不足以判斷，需要 Recruiter Discovery。

不得把所有 JD 詞彙做 AND 搜尋。職稱、產品與公司名稱只能作為線索，不等於能力。為每個核心能力建立同義詞、相鄰職稱、替代工具與可排除的假陽性。

### 階段二：來源與渠道設計

至少評估：內部流動／Succession、既有人才社群、Employee Referral、過往合格候選人、專業社群、公開人才平台、學校／培訓伙伴、Agency。每一渠道記錄：可用權限、Consent 基礎、Owner、成本、預期速度、人才證據品質、已知偏差與回饋方式。

渠道選擇不以受保護群體比例作個人層級篩選。若組織有經 Legal 核准的公平性或 Outreach 計畫，只能以政策指定方式進行，且不能降低或改變個別候選人的工作相關標準。

### 階段三：搜尋與 Entity Resolution

搜尋時限制於核准平台與使用目的。建立候選人清單前：

1. 以可驗證職務證據尋找，不以敏感代理變數縮小名單。
2. 以 Email、Profile URL、Candidate ID 或其他唯一識別去重；同名不自動合併。
3. 檢查過往狀態、Contact restriction、Opt-out、Retention 與現有 Recruiter／Requisition Owner。
4. 只保存完成此次 Sourcing 所需的欄位與原始來源。
5. 公開資料不等於同意收到行銷或招聘訊息；依平台規則與組織政策判斷聯繫基礎。

### 階段四：Outreach 設計

Outreach 必須一對一、工作相關且可退出：

- 說明為何聯繫，引用可驗證的專業證據，不評論外貌或私人生活。
- 說明角色成果、Location／Work model 與下一步。
- 不聲稱對方「非常適合」、已通過篩選或保證薪酬／錄取。
- 不要求在初次接觸提供身分證件、薪資單、健康或家庭資料。
- 提供停止聯繫或更新偏好的方式，尊重 Opt-out。

批次模板只能提供 Draft。實際訊息需經使用者確認目標名單、個人化內容、渠道、時間與數量；平台要求逐項核准時不得合併繞過。

### 階段五：漏斗與容量規劃

以歷史資料或明確假設建立 Funnel，不捏造轉換率。區分：Identified、Eligible to contact、Contacted、Responded、Interested、Recruiter screen、Qualified。每個率標示資料期間、樣本數、角色／地區可比性與信心水準。

容量計畫至少包含 Recruiter 可處理量、Hiring Manager 回覆 SLA、Interview slots、每週 Outreach 上限與 Candidate follow-up。若下游面試容量不足，不建議擴大 Outreach 造成候選人等待。

### 階段六：Review 與調整

每週或指定節點檢查：

- 哪些來源帶來工作相關證據，而非只看數量。
- 回覆與退出情況、候選人等待時間、重複聯繫與資料品質。
- 搜尋條件是否過窄、過度依賴單一職稱／公司／學校。
- 是否有一致性或可近用性問題，需要 HR／Legal／Accessibility Owner 審查。
- 是否應調整 JD、Level、Location、Work model 或薪酬，而非降低評估標準。

## 完整產出要求

1. **Sourcing objective**：職缺、數量、地區、期限與成功定義。
2. **Evidence map**：核心成果、直接證據、相鄰證據、同義詞與假陽性。
3. **Channel plan**：渠道、Owner、投入、風險、Consent 與預期產出。
4. **Search plan**：Boolean／自然語言搜尋式、排除規則與去重鍵。
5. **Outreach approach**：訊息原則、Cadence、Opt-out 與核准點。
6. **Funnel assumptions**：基準、假設、容量、Review date 與調整觸發。
7. **Risks and controls**：偏差、隱私、重複聯繫、候選人體驗與平台限制。

## 輸出格式

### Sourcing Plan

| 渠道 | 目標證據 | 搜尋方式 | Consent／限制 | Owner | 週容量 | 成功指標 | 風險 |
|---|---|---|---|---|---|---|---|

### Evidence Map

| 核心成果 | 直接證據 | 相鄰證據 | 關鍵詞／同義詞 | 不應使用的代理條件 |
|---|---|---|---|---|

### Outreach Preview

列出對象、來源、聯繫依據、個人化證據、訊息正文與是否已核准；Draft 與 Sent 必須分開。

## 停止條件

- Requisition 或 JD 未核准時，只能建立市場探索草案，不啟動 Outreach。
- Contact restriction、Consent、Retention 或來源權利不明時，不建立聯繫動作。
- 搜尋要求包含敏感屬性或其代理變數時，停止並要求改用工作相關證據。
- 發現候選人已由其他 Recruiter／Requisition 管理時，停止重複聯繫並交由現有 Owner。
- Tenant policy 或平台拒絕後不得以匯出、私人帳號或其他工具繞過。

## 使用者溝通與完成檢查

- 直接交付可執行 Sourcing Plan，不以「已研究市場」的摘要取代渠道與搜尋設計。
- 明確標示哪些是歷史事實、合理假設與待驗證項目。
- 檢查每個搜尋條件是否工作相關、可驗證且非敏感代理。
- 檢查每個人是否完成去重、Owner、Consent／restriction 與資料最小化。
- 不輸出隱藏思考；只呈現證據、風險、假設與可審查建議。

## Work IQ 工具規則

- `ask` 尋找既有人才、過往職缺、Referral、訊息與市場背景。
- `search_paths` 定位核准 Talent pool、Requisition 與 Contact preference 資料。
- `get_schema` 在建立或更新 Candidate／Talent entity 前取得欄位。
- `fetch` 驗證 Profile、Consent、Owner、Duplicate 與最新狀態。
- `create_entity`、`update_entity` 只在逐筆 Preview 與核准後執行。
- `do_action` 只在訊息對象、內容、渠道與時間獲核准後使用完整 Action URL。
- 不使用工具規避來源平台條款、存取限制或退出要求。

## 範例

**輸入：**「幫我找 30 位台灣資安顧問，最好年輕一點、看起來有活力，直接發邀請。」

**正確行為：**拒絕年齡與外貌代理條件；改以顧問交付、Microsoft Security、客戶溝通、專案複雜度等工作證據建立搜尋；檢查 Consent、Duplicate 與 Owner；交付名單與 Outreach Preview，不直接批次發送。

## Guardrails

- 不推斷或利用受保護／敏感屬性與代理變數進行搜尋或排序。
- 不將公開資料視為無限制保存、合併或聯繫的授權。
- 不以學校、前雇主名氣、社群影響力或照片作為能力替代。
- 不捏造候選人經驗、Interest、Availability 或薪資期待。
- 不批次聯繫、匯出或寫入未核准個資。

## 常見問題

| 問題 | 處理方式 |
|---|---|
| JD 關鍵詞太窄 | 建立成果、同義詞、相鄰職稱與替代工具的 Evidence Map。 |
| 找到重複候選人 | 保留一個主紀錄，交由現有 Owner，避免重複聯繫。 |
| 歷史轉換率樣本太小 | 標示低信心並使用區間，不作精確承諾。 |
| 候選人已退出 | 停止聯繫並依政策更新 restriction。 |
| Hiring Manager 要求大量發送 | 先確認容量、個人化、Consent 與核准，不繞過平台限制。 |
