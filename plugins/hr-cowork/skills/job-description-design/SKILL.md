---
name: job-description-design
description: >-
  依已核准的 Requisition、Job Architecture、政策與職務證據，建立或修訂可評估、具包容性且可供發布審查的 Job Description。
  適用於新職缺、職務重設、JD 比對與刊登前 QA；不適用於捏造條件、以個人履歷反向設計職缺或未核准直接發布。
license: MIT
metadata:
  author: lwokeray
  version: "1.0.1"
---

# Job Description 設計與審查

## 概述

將核准的人力需求轉為描述清楚、可公平評估且能被候選人理解的 Job Description。JD 必須以實際成果、責任與必要能力為核心，區分必要與可培養條件，並與 Job family、Level、Location、Work model、薪酬揭露政策及組織語氣一致。

## 適用情境

- 從 Requisition Brief 建立全新 JD。
- 修訂既有 JD、移除過時工具或不必要條件。
- 比較多個版本並形成 Change Log。
- 檢查職稱、Level、責任、資格與薪酬範圍的一致性。
- 產生內部審查版、外部刊登版或短版職缺介紹。

## 不適用情境

- 不從特定候選人或現任員工履歷倒推「量身排除／錄取」條件。
- 不把偏好的性格、年齡、性別、國籍、家庭狀態或文化背景寫成資格。
- 不捏造薪酬、福利、Remote policy、Visa、Travel、On-call 或法規聲明。
- 不直接發布職缺或變更正式 Job Architecture，除非已取得精確核准。

## 快速開始

1. 取得已核准 Requisition、Job family／Level、標準 JD、政策與 Employer Brand 語氣。
2. 用 `ask` 找出實際成果、責任、Stakeholders、工作條件與成功標準。
3. 用 `search_paths`、`get_schema`、`fetch` 驗證正式範本、薪酬揭露與政策版本。
4. 建立 Outcomes、Responsibilities、Must-have、Learnable／Nice-to-have 與工作條件。
5. 執行必要性、包容性、可評估性、一致性與聲明 QA。
6. 交付 Draft、問題與 Change Log；核准後才更新檔案或刊登流程。

## 核心流程

### 階段一：來源與版本基準

指定主來源及優先順序：已核准 Requisition > Job Architecture／Level guide > 組織 JD template > 主管訪談 > 舊 JD。舊 JD 是參考，不自動視為正確。外部同業 JD 只能用於市場語言觀察，不能成為內部條件或薪酬的事實來源。

記錄文件版本、Owner、核准狀態、Location 與適用 Employment entity。若同一職務跨地區，需分開處理法定聲明、薪酬揭露、語言與工作條件。

### 階段二：以成果定義角色

先寫 3 至 6 項可觀察成果，再寫任務。成果描述應包含對象、影響與邊界，例如「維持企業客戶的 Microsoft 365 服務穩定並在約定 SLA 內推進問題解決」，而不是「負責 Microsoft 365」。

每項責任應：

- 以動詞開頭，代表持續責任或決策。
- 對應至少一項角色成果。
- 說明主要範圍、合作對象或交付標準。
- 避免把臨時任務、所有可能工具或整個部門責任塞入單一職缺。

### 階段三：能力與資格設計

將條件分成：

- **Must-have**：無法在合理入職期內補足，且能直接連結核心成果。
- **Learnable**：重要但可在 Onboarding 或工作中培養。
- **Nice-to-have**：增加價值但不得在初篩中變成隱性淘汰條件。
- **Required authorization**：法律、執照、安全許可或工作資格；需由授權 Owner 驗證措辭。

每個 Must-have 必須通過必要性測試：若移除該條件，候選人是否仍能合理完成核心工作？若答案是可能，移至 Learnable 或 Nice-to-have。

年資僅在 Job Architecture 有明確要求且能合理代表成熟度時使用；優先描述能處理的範圍、複雜度、獨立性與影響力。學歷要求需有工作必要性，不以名校、特定科系或母語者作不必要限制。

### 階段四：工作條件與候選人資訊

明確且可驗證地描述：Location、Hybrid／Remote、Travel、Shift、On-call、Physical requirements、Employment type、Working hours、Reporting line、Application process、Accessibility／Accommodation contact、薪酬範圍與福利揭露。

Physical requirement 必須與工作本質相關，提供可合理調整的空間；不得用健康狀態作推斷。工作資格、Visa 或 Background check 僅依當地政策與 Legal-approved wording。

### 階段五：包容性與偏誤 QA

逐句檢查：

- 是否出現與工作無關的性別化、年齡化、健全主義或文化偏好。
- 是否使用「年輕、數位原住民、母語、強勢、拼命、無家庭負擔、文化契合」等不可驗證或可能排除的表述。
- 是否把人格形容詞改成可觀察行為，例如將「有領導魅力」改成「能在跨部門分歧中形成可執行決定」。
- 是否對相同責任使用一致 Level 標準。
- 是否有過長的 Must-have 清單，造成不必要的人才池縮減。

### 階段六：可評估性對齊

每個核心成果或 Must-have 必須能對應後續 Screening evidence 或 Interview competency。建立 `JD → 評估方式` 對照，但不在外部 JD 揭露內部評分規則。

| JD 項目 | 工作必要性 | 可接受證據 | 面試／評估方式 |
|---|---|---|---|
|  |  |  |  |

如果某一條件無法公平評估，應刪除、重寫或標示由授權程序驗證，不可保留為模糊「感覺」。

### 階段七：審查與發布控制

外部發布前檢查 Requisition status、Legal／HR wording、薪酬與 Location、Application URL、Owner、Closing date、資料隱私聲明與最新版本。只在使用者核准精確內容與目標後才更新文件或啟動刊登 Action。

## JD 必要結構

1. **Role summary**：角色存在理由與主要影響，80 至 150 字。
2. **What you will achieve**：3 至 6 項成果。
3. **Key responsibilities**：5 至 10 項，與成果一一對應。
4. **Must-have qualifications**：只保留工作必要且可公平評估者。
5. **Learnable／Nice-to-have**：清楚標示不作硬性淘汰。
6. **Team and collaboration**：Reporting line、主要內外部 Stakeholders。
7. **Work conditions**：Location、Work model、Travel、Shift、Employment type。
8. **Compensation and benefits**：只引用核准版本及適用地區。
9. **Accessibility and process**：申請方式、合理調整聯絡方式、必要聲明。

## 輸出格式

先提供可直接審查的完整 JD，再提供：

### 審查問題

| 問題 | 目前狀態 | Owner | 發布影響 |
|---|---|---|---|

### Change Log

| 區段 | 原文 | 修訂 | 理由／來源 |
|---|---|---|---|

### 發布前 QA

以 `通過`、`待確認`、`受阻擋` 表示 Requisition、Level、Location、Compensation、Policy wording、Application path 與 Approval。

## 停止條件

- Requisition 未核准時，只能產生 Draft，不標示可發布。
- 薪酬、工作地點、Employment type 或法定聲明無法驗證時保留 `待確認`，不得猜測。
- 使用者要求加入歧視性、報復性或針對特定人的條件時，停止並指出需 HR／Legal 審查。
- 找不到正式範本或版本衝突時，不覆寫既有 JD。

## 使用者溝通與完成檢查

- 直接交付完整 JD，不把編寫原則或分析過程當成結果正文。
- 說明必要的未決欄位與發布阻塞，不輸出隱藏思考。
- 檢查每個 Must-have 是否能連結核心工作並可公平評估。
- 檢查 JD 與 Requisition、Level、Location、Work model、薪酬及 Interview scorecard 是否一致。
- 區分 Draft、審查版與已核准發布版。

## Work IQ 工具規則

- `ask` 尋找核准 Requisition、角色背景、類似 JD 與政策。
- `search_paths` 定位正式 JD template、Job Architecture 與已核准資料來源。
- `get_schema` 在更新 JD register、SharePoint 或其他 Entity 前取得欄位。
- `fetch` 讀取完整來源、版本與核准紀錄；搜尋摘要不足以支持發布。
- `update_entity` 或 `do_action` 只在精確發布 Preview 經核准後使用。
- 不以公開網頁或外部 JD 直接覆寫內部正式資料。

## 範例

**輸入：**「把以前的 Cloud Engineer JD 改成 Senior，條件多寫一點比較好篩。」

**正確行為：**先驗證 Senior Level 的成果、決策範圍與核准 Requisition；只保留工作必要條件，將可培養能力分開；不為了縮小人才池而增加無證據的年資、學歷或工具條件；交付 Draft 與發布阻塞。

## Guardrails

- 不依特定候選人、現任員工或受保護屬性量身設計條件。
- 不使用「文化契合」作為模糊排除標準，改用可觀察的合作行為。
- 不捏造薪酬、福利、工作資格、Visa、Background check 或法定聲明。
- 不把 Nice-to-have 在後續流程中偷偷當成 Must-have。
- 不在未核准前發布或同步到外部 Job Board。

## 常見問題

| 問題 | 處理方式 |
|---|---|
| 舊 JD 與實際工作不同 | 以核准 Requisition 和目前成果為主，保留 Change Log。 |
| 主管要求列很多工具 | 區分成果、核心能力與可替代工具，刪除非必要項。 |
| Level 不確定 | 列出責任與影響範圍差異，交由 Job Architecture Owner 決定。 |
| 跨地區共用 JD | 共用 Role core，分開 Location-specific 條件與聲明。 |
| 需要短版刊登文案 | 從已核准完整 JD 摘取，不新增未核准承諾。 |
