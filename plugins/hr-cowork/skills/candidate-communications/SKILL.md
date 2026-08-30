---
name: candidate-communications
description: >-
  依候選人流程狀態與已核准事實，撰寫收件、補件、邀請、改期、進度、暫緩、婉拒、Offer 流程及 Talent Community 等候選人訊息。
  適用於單一對象或明確名單的 Candidate communication；不適用於捏造決定或理由、洩漏內部評語、未核准批次傳送或要求不必要敏感資料。
license: MIT
metadata:
  author: lwokeray
  version: "1.0.1"
---

# 候選人溝通

## 概述

建立準確、尊重、可執行且與正式 Candidate status 一致的溝通。每封訊息都要清楚說明目前已確認事實、下一步、時間與聯絡窗口；草稿不得暗示尚未作成的錄取、Offer、拒絕或薪酬承諾。對外傳送前必須解析正確收件人並取得核准。

## 適用情境

- Application receipt、補件、Recruiter screen 與 Interview invitation。
- Scheduling confirmation、改期、取消與提醒。
- 面試後進度、流程延遲、On hold 與 Withdrawal confirmation。
- 人工決定後的婉拒、Offer process、Talent community 或 Referral handoff。
- 中英文或雙語候選人訊息與跨時區溝通。

## 不適用情境

- 不在沒有正式 Decision record 時發送拒絕、錄取或 Offer 訊息。
- 不透露 Interviewer 評語、其他候選人、內部排名、Legal／ER 討論或未核准理由。
- 不要求與階段無關的身分證、薪資單、健康、家庭、照片或其他敏感資料。
- 不進行未經 Consent、Contact preference 與批次核准的大量訊息。

## 快速開始

1. 確認 Candidate、Requisition、Stage、Communication purpose、語言、渠道、Owner 與 deadline。
2. 用 `fetch` 驗證正式 status、最近一次訊息、已承諾時間與 Decision／Offer approval。
3. 選用相符 Message type 與語氣，保留必要資訊，避免內部技術與流程術語。
4. 建立 Subject、Opening、Status、Action／Next step、Deadline、Contact、Closing。
5. 執行 Recipient、Fact、Attachment、Sensitive content、Link 與日期 QA。
6. 顯示完整傳送 Preview；使用者核准後才呼叫訊息 Action，並回讀確認結果。

## 核心流程

### 階段一：狀態與授權

候選人訊息以正式 Candidate record 與具名 Owner 決定為準，不能只依聊天中的提議。驗證：Candidate ID、Requisition ID、目前 Stage、Decision owner、決定日期、允許的 Reason code、最近聯絡時間、Candidate preferred channel、語言與 Contact restriction。

若 register 與郵件不同，先列衝突，不發送。若沒有正式狀態，最多提供 Draft 並使用中性表述，例如「我們仍在完成內部審查」，不得預告結果。

### 階段二：訊息類型規則

#### 收件與補件

- 確認收到什麼與對應職缺，不承諾進入下一階段。
- 補件只要求當前階段必要資料，說明用途、格式、期限與安全提交方式。
- 不要求候選人用一般 Email 傳送高敏感身分或銀行資料。

#### 邀請與排程

- 說明 Stage、形式、時長、時區、Panel 概況、準備事項與 Accommodation contact。
- 不在邀請中透露內部 Scorecard 或其他候選人資訊。
- 時間尚未確認時提供選項，不寫成已排定。

#### 進度與延遲

- 明確承認延遲，說明已確認的下一個更新時間。
- 不捏造「主管出差」「仍有很多候選人」等原因。
- 無新資訊時仍可提供真實狀態與具體下一次更新點。

#### 暫緩或 Withdrawal

- On hold 需有正式 Requisition／Decision 狀態與可承諾的更新方式。
- 候選人 Withdrawal 要確認其意圖與適用職缺，不延伸到其他申請。
- 不對 Withdrawal 原因追問私人細節；只在候選人自願時記錄必要資訊。

#### 婉拒

- 必須有人工決定、適用 Reason code 與可對外表達方式。
- 清楚但尊重，不使用模糊假希望，也不提供未核准的個人化評語。
- 若組織允許回饋，只使用具體、工作相關、已審查且一致提供的內容。
- 不承諾未核准的未來職缺或 Talent community。

#### Offer 流程

- 區分「準備 Offer」「口頭說明」「正式書面 Offer」與「已接受」。
- 只引用核准的 Title、Level、Compensation、Location、Start date、Contingencies 與 expiry。
- 不在非核准訊息中改動或口頭保證條款。

### 階段三：語氣與結構

訊息保持專業、直接與對候選人友善：

1. Subject：目的與職缺。
2. Greeting：核對姓名與稱謂；不猜性別稱謂。
3. Opening：引用實際申請或互動。
4. Status：第一段內說明已確認狀態。
5. Action：候選人需要做什麼、何時完成、如何完成。
6. Support：聯絡窗口與 Accommodation／Accessibility 管道。
7. Closing：不過度承諾。

跟隨候選人語言；雙語只在要求或政策需要時提供。英文使用自然商務語言，繁體中文避免過度官樣與技術名詞。

### 階段四：Recipient 與隱私 QA

- 一律從正式 Candidate record 解析 Email，不猜測地址。
- 批次寄送不得在 To／Cc 暴露其他候選人；依核准系統或個別 Action 執行。
- 附件與 Link 必須屬於該 Candidate、該 Requisition、正確版本且有適當權限。
- Email subject 與 body 不放入不必要敏感資訊。
- 內部 Notes、Scorecard、Compensation approval、Background check 或其他候選人資料不得附上。

### 階段五：Cadence 與升級

提醒與追蹤依已核准 Cadence。未回覆不等於拒絕或退出。到期後可提出：一次溫和提醒、指定新期限、由 Recruiter 人工關閉。每一步需保留 Candidate preference 與 Reason，不進行無限制追寄。

### 階段六：傳送與紀錄

傳送前 Preview 顯示 Recipient、Subject、Body、Attachment／Link、Channel、Planned time、Candidate status impact。核准後執行並確認 Message ID／狀態。只有在訊息成功傳送且流程允許時才更新 `Last contacted` 或相關欄位；部分失敗逐筆回報。

## 完整產出要求

每次溝通至少包含：

- Verified Candidate、Requisition、Stage 與 Message type。
- 可直接使用的完整 Subject 與 Body。
- 所依據的 Decision／Status、日期與 Owner。
- Candidate action、deadline、time zone、contact route。
- Attachments／links 及權限檢查。
- 傳送 Preview、核准與實際結果。

不要在正式草稿後附長篇寫作分析；只有必要時列 `待確認欄位`。

## 輸出格式

**Subject:** [目的：職缺／階段]

[完整訊息正文]

### 傳送 Preview

| 對象 | Channel | Stage | 依據 | Attachment／Link | Status change | 核准 |
|---|---|---|---|---|---|---|

結尾：`Draft only`、`等待核准`、`已核准並傳送`、`部分完成` 或 `受政策阻擋`。

## 停止條件

- Recipient、Requisition 或 Stage 無法唯一解析時不傳送。
- 拒絕、Offer、On hold 或 Withdrawal 沒有正式人工決定時只產生中性 Draft。
- 訊息包含未核准理由、條款、敏感資料或錯誤附件時停止。
- Candidate 已 Opt-out、Withdraw 或有 Contact restriction 時依政策停止聯繫。
- Tenant policy 拒絕後不得以私人 Email、匯出名單或其他工具繞過。

## 使用者溝通與完成檢查

- 直接提供可用訊息，不解釋通用 Email 寫作理論。
- 檢查姓名、職缺、Stage、日期、星期、時區、Link、Attachment 與 Contact。
- 檢查措辭沒有暗示未作成決定或未核准承諾。
- 檢查對外內容不含 Scorecard、其他候選人或敏感內部資訊。
- Draft、核准與 Sent 狀態清楚分開；不輸出隱藏思考。

## Work IQ 工具規則

- `ask` 尋找 Candidate thread、流程背景與核准模板。
- `fetch` 驗證 Candidate identity、正式 status、Decision、Offer 與附件版本。
- `search_paths`、`get_schema` 用於定位及更新正式 Candidate register。
- `do_action` 僅在完整 Message Preview 經核准後使用回傳的 Action URL。
- `update_entity` 只在訊息成功且欄位更新已核准後執行。
- 不使用 `create_entity` 複製未經授權的候選人個資。

## 範例

**輸入：**「這個人我們應該不會用，先寄拒絕信，理由寫經驗不足。」

**正確行為：**先驗證是否已有具名 Owner 的正式不推進決定與可用 Reason code；沒有時只提供 Draft 並標示等待人工決定；不得把推測的「經驗不足」寫成既定理由或直接傳送。

## Guardrails

- 不捏造 Candidate status、Decision、Reason、Offer term、Deadline 或已傳送狀態。
- 不揭露內部評分、其他候選人、敏感屬性或未審查評論。
- 不猜測收件人、稱謂、Email 或語言偏好。
- 不要求不必要的高敏感資料，也不透過不安全渠道收集。
- 不批次傳送未經核准訊息或繞過 Opt-out。

## 常見問題

| 問題 | 處理方式 |
|---|---|
| 正式狀態與郵件不同 | 停止傳送，交由 Owner 確認。 |
| 沒有拒絕理由 | 使用核准的中性模板，不自行發明理由。 |
| 候選人要求回饋 | 依政策與核准 Evidence 提供；否則由 Recruiter 回覆可提供範圍。 |
| 批次通知 | 保護收件人隱私，逐筆核對狀態與核准。 |
| 訊息傳送失敗 | 不更新 Last contacted，回報失敗並保留安全重試條件。 |
