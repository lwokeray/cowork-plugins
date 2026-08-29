# 企業人力資源 HR Cowork Prompt Cards

此檔案由 `prompt-cards.yaml` 自動產生，請勿直接修改。

## HR 今日工作摘要

- Skill：`hr-operations-brief`
- 顯示文字：整理今天的 HR 工作
- Department：人力資源
- Task type：Catch up
- Locale：zh-TW

整理 HR 今天必須處理的工作、期限、阻塞與決策。

**Prompt**

請整理 {{日期與範圍，例如：今天、台灣 HR 團隊}} 的 HR 工作。優先列出 {{流程，例如：面試、下週一到職、員工服務}}，合併重複事件，標示 Owner、截止日、阻塞、敏感個案索引及需要我決定的事項；先提供唯讀摘要，不直接寄信或更新任務。

## 建立人力需求申請

- Skill：`workforce-requisition-intake`
- 顯示文字：整理人力需求申請
- Department：人力資源
- Task type：Prepare
- Locale：zh-TW

把主管提出的新增或替補需求整理成可送審的 Requisition Brief。

**Prompt**

請將 {{需求來源，例如：主管郵件與會議紀錄}} 整理為 {{職務，例如：Senior Cloud Engineer}} 的人力需求申請。驗證業務成果、容量或技能缺口、Headcount、Budget、Level、Location、Target Start、替代方案與核准路徑；缺少項目標示待確認，不直接建立已核准職缺。

## 撰寫職缺說明

- Skill：`job-description-design`
- 顯示文字：建立完整 Job Description
- Department：人力資源
- Task type：Create
- Locale：zh-TW

依核准需求建立完整且可公平評估的 Job Description。

**Prompt**

請依 {{核准職缺，例如：台北 Senior Security Consultant}} 建立完整 Job Description。包含角色成果、主要責任、Must-have、可培養能力、工作條件、薪酬與適用聲明的待確認欄位；檢查不必要資格、偏誤與可評估性，提供發布前 QA，不直接刊登。

## 規劃人才來源

- Skill：`talent-sourcing-plan`
- 顯示文字：規劃人才搜尋與 Outreach
- Department：人力資源
- Task type：Design
- Locale：zh-TW

建立工作相關、可衡量且符合 Consent 的 Sourcing Plan。

**Prompt**

請為 {{職缺，例如：Microsoft 365 Solution Architect}} 規劃人才來源。把核心成果轉成直接與相鄰證據、搜尋語彙、渠道、去重、Consent、Outreach 草稿、每週容量、漏斗假設與 Review trigger；不得用年齡、外貌、學校或其他敏感代理條件，也不要直接批次發送。

## 整理候選人初篩

- Skill：`candidate-intake-screening`
- 顯示文字：建立候選人 Evidence Map
- Department：人力資源
- Task type：Analyze
- Locale：zh-TW

依核准標準整理履歷證據與人工複核問題。

**Prompt**

請針對 {{候選人或批次，例如：此職缺最近 5 位申請者}}，依 {{核准 Rubric，例如：JD 的 5 項 Must-have}} 建立 Evidence Map。區分有證據、相鄰證據、未提及與需驗證，檢查重複與資料權利，提出人工複核問題；不要自動排名、拒絕或推斷敏感屬性。

## 設計結構化面試

- Skill：`interview-plan-scorecard`
- 顯示文字：設計面試與 Scorecard
- Department：人力資源
- Task type：Design
- Locale：zh-TW

建立 Interview Loop、題庫、Panel 與 1–4 分行為錨點。

**Prompt**

請依 {{職缺，例如：Sales Manager}} 設計結構化 Interview Kit。建立 4–6 項工作能力、Panel 分工、Behavioral／Situational questions、固定追問、Work sample、1–4 分專屬錨點、NE 規則、合理調整與 Debrief template；移除敏感或文化契合問題。

## 協調面試時程

- Skill：`interview-coordination`
- 顯示文字：安排候選人面試
- Department：人力資源
- Task type：Schedule
- Locale：zh-TW

找出候選人與 Panel 的可行時段並準備 Calendar 預覽。

**Prompt**

請為 {{候選人與職缺，例如：Alex 的 Cloud Architect 面試}} 協調 {{面試範圍，例如：下週三場 Panel}}。核對身份、Email、時區、時長、必要面試官、Buffer、Room／online link 與必要調整，只先提供 2–3 個時段和完整邀請預覽，取得核准後才建立事件。

## 整理面試 Debrief

- Skill：`interview-debrief`
- 顯示文字：整理候選人面試回饋
- Department：人力資源
- Task type：Analyze
- Locale：zh-TW

彙整獨立回饋、Score anchor、證據分歧與人工決策材料。

**Prompt**

請為 {{候選人與職缺，例如：Alex／Cloud Architect}} 建立 Interview Debrief Pack。依預先核准 Competency 整理各面試官獨立 Evidence、Score、Anchor 對齊、NE、分歧、流程偏差與待補問題，隔離敏感或主觀評論；保留 Human decision 欄位，不替 Panel 決定錄取。

## 撰寫候選人訊息

- Skill：`candidate-communications`
- 顯示文字：撰寫候選人通知
- Department：人力資源
- Task type：Create
- Locale：zh-TW

依正式流程狀態撰寫準確且尊重的候選人溝通。

**Prompt**

請為 {{候選人與情境，例如：完成二面、等待結果的 Alex}} 撰寫 {{訊息類型，例如：進度更新、邀請、補件或婉拒}}。先核對正式 Stage、Decision、日期、語言與聯絡方式，包含清楚下一步及期限；不要透露內部評分或捏造理由，只提供傳送預覽。

## 準備 Offer 審查

- Skill：`offer-compensation-review`
- 顯示文字：建立 Offer Decision Pack
- Department：人力資源
- Task type：Prepare
- Locale：zh-TW

比較核准薪酬情境、內部一致性、成本、例外與核准。

**Prompt**

請為 {{候選人與職缺，例如：Alex／Senior Consultant}} 建立 Offer Decision Pack。核對 Human selection decision、Level、Location、Salary band、Budget、Total Rewards、內部一致性、市場資料口徑、Start、Contingencies 與 Approvers，提供可比較情境與正式條款預覽；不要用過往薪資自動定薪或直接寄出。

## 建立 Onboarding 計畫

- Skill：`onboarding-orchestration`
- 顯示文字：規劃新進人員到職
- Department：人力資源
- Task type：Prepare
- Locale：zh-TW

協調新進人員 Preboarding、Day 1 與 30／60／90 天工作。

**Prompt**

請依 {{已接受 Offer，例如：9 月 15 日到職的台北 Solution Architect}} 建立 Onboarding Master Plan。涵蓋 HR、Payroll、IT、Security、Facilities、Manager、Learning、Day 1、30／60／90 天、Owner、依賴、證據與 Readiness Gate；敏感資料只放安全入口，先提供執行預覽。

## 處理人事資料異動

- Skill：`employee-record-change`
- 顯示文字：準備人事異動
- Department：人力資源
- Task type：Execute
- Locale：zh-TW

驗證人員、舊值、新值、生效日、核准與下游影響。

**Prompt**

請處理 {{異動，例如：兩位員工於月底更換主管與成本中心}}。使用唯一 Employee ID 核對正式來源、Current value、Requested value、Effective date、Reason、Approver、Payroll／Directory／Access 影響與通知，逐系統顯示 Preview；未核准或身份不明的項目不要寫入。

## 接收假勤與調整需求

- Skill：`leave-accommodation-intake`
- 顯示文字：整理 Leave 或 Accommodation
- Department：人力資源
- Task type：Assist
- Locale：zh-TW

以最小必要資料建立保密 Case Brief 與流程。

**Prompt**

請接收 {{需求，例如：員工希望三個月調整工作地點與時間}}。只整理工作功能、需要的安排、期間、關鍵日期與安全聯絡方式，查找適用政策、Owner、文件安全入口、Interim options、Manager need-to-know 與 Review；不要詢問診斷或自行批准／拒絕。

## 建立 ER Case Brief

- Skill：`employee-relations-case`
- 顯示文字：整理員工關係個案
- Department：人力資源
- Task type：Prepare
- Locale：zh-TW

中立整理申訴、時間軸、證據、風險、Conflict 與路由。

**Prompt**

請把 {{來源，例如：員工對主管行為的申訴}} 建立為受限 ER Case Brief。保留原始陳述，區分 Allegation、Observation、Hearsay、Document 與 Unknown，建立 Timeline、Evidence inventory、立即安全／報復風險、Conflict、Preservation 與 Human decision gates；不要判斷誰說謊或建議處分。

## 準備績效回顧

- Skill：`performance-cycle-support`
- 顯示文字：整理績效證據
- Department：人力資源
- Task type：Prepare
- Locale：zh-TW

依目標、角色期望與可追溯成果建立 Review Draft 與校準材料。

**Prompt**

請為 {{員工與期間，例如：Alex 的 2026 H2 review}} 建立 Performance Evidence Matrix。對照正式 Goals、Role／Level、具體 Contribution、Outcome、Feedback、Context 與來源，檢查 Recency、Visibility、Attribution 與標準不一致，產生 Review Draft 與 Calibration questions；Rating 保留給 Manager 決定。

## 建立學習發展計畫

- Skill：`learning-development-plan`
- 顯示文字：規劃 Learning & Development
- Department：人力資源
- Task type：Design
- Locale：zh-TW

把角色成果與能力差距轉為學習、實作、回饋與成效。

**Prompt**

請依 {{對象與目標，例如：M365 顧問團隊提升 Copilot Studio 交付能力}} 建立 Learning & Development Plan。說明 Baseline evidence、Target behavior、Learn／Observe／Practice／Feedback／Apply、Owner、時間、成本、Accessibility、工作應用證據與 Review；不要只列課程或把完成課程當成能力。

## 分析員工意見

- Skill：`engagement-listening-analysis`
- 顯示文字：分析 Employee Listening
- Department：人力資源
- Task type：Analyze
- Locale：zh-TW

以匿名門檻分析 Survey、主題、趨勢、限制與改善行動。

**Prompt**

請分析 {{資料，例如：2026 Q3 engagement survey 與開放題}}。先檢查 Population、Scale、Response、Missingness、可比性與匿名門檻 {{門檻，例如：至少 10 人}}，整理量化趨勢、去識別主題、資料限制與 Action owner；不要識別回覆者或預測個人離職。

## 建立人力容量計畫

- Skill：`workforce-capacity-planning`
- 顯示文字：規劃 Workforce Capacity
- Department：人力資源
- Task type：Analyze
- Locale：zh-TW

用 Demand、Capacity、Skills、Vacancy、Cost 與情境支援決策。

**Prompt**

請為 {{範圍，例如：台灣 Microsoft Delivery 團隊 2027 年}} 建立 Workforce Capacity Plan。定義 Demand driver、Productive capacity、Skill coverage、Vacancy、Aggregate attrition、Hiring lead time、Cost 與 Base／Upside／Downside 情境，提供 Action mix、敏感度、Trigger 與 Approvers；不要預測或排名個人離職。

## 更新 HR Policy

- Skill：`policy-handbook-maintenance`
- 顯示文字：修訂 HR Policy 或 Handbook
- Department：人力資源
- Task type：Edit
- Locale：zh-TW

建立完整政策修訂、差異、影響、審查與發布計畫。

**Prompt**

請更新 {{政策，例如：台灣 Hybrid Work Policy}}。確認 Current controlled version、適用地區、Policy owner、官方／Legal input、Requirement conflict，產生完整修訂正文、Before／After、Impact、RACI、FAQ、Manager guide、Communication、Effective date 與 Publication Gate；未完成必要核准前不要覆寫或發布。

## 建立 Offboarding 計畫

- Skill：`offboarding-transition`
- 顯示文字：規劃受控 Offboarding
- Department：人力資源
- Task type：Prepare
- Locale：zh-TW

協調正式離職或轉調的移交、Access、資產、薪資與紀錄。

**Prompt**

請依 {{正式事件，例如：Alex 已核准於 9 月 30 日離職}} 建立 Offboarding Master Plan。區分 Last working day、Employment end、Access cutoff、Payroll／Benefits、Knowledge／Customer handoff、Assets、Secrets、Records／Legal hold、分眾溝通與 Post-exit reconciliation；未正式通知或核准前不要停權、刪除或公告。
