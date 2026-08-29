---
name: meeting-follow-up
description: >-
  將一場已完成的客戶會議轉成可審閱的內部紀要、客戶 follow-up Email 草稿及 Planner 工作建議。
  適用於 recap、transcript、notes 或 chat 的會後整理；不適用於會前準備、Deal Strategy、Proposal authoring 或沒有明確會議證據的 Follow-up。
metadata:
  author: lwokeray
  version: "3.0.0"
---

# 會後追蹤

## 概述

從一場已完成會議建立三個分離成果：內部紀要、客戶信件草稿、Planner 工作建議。每個承諾都要標示 `已陳述／推論／未解`、Owner、Due、來源與時間戳記。

## 適用情境

- 整理 Teams recap、transcript、notes 或會議 chat。
- 擷取客戶需求、objection、decision、commitment 與 requested materials。
- 建立客戶 Email 草稿及後續工作預覽。

## 不適用情境

- 即將發生的 Meeting Brief → `customer-meeting-brief`
- 無會議證據的冷開發 Email → `sales-outreach-engagement`
- Deal review 或 Proposal authoring。

## 快速開始

1. 以 `ask` 解析唯一且已完成的會議。
2. 以 `search_paths`、`get_schema`、`fetch` 驗證 event、recap、transcript、chat、notes 與相關 messages。
3. 逐項擷取 Decision、Customer statement、Commitment、Objection、Requested material 與 Open question。
4. 分別建立內部紀要、客戶 Email 草稿及 Planner 工作建議。
5. 寄送、張貼、排程或工作寫入前，顯示完整 preview 並逐項取得核准。

## 核心流程

### 階段一：會議與證據 Gate

- 必須解析唯一且已結束的會議。
- 沒有可存取 recap、transcript、notes、chat 或 message 時，明確指出證據不足，不根據 Calendar subject 產生完整紀要。
- Private／Confidential 內容遵循 permission trimming 與資料最小化。

### 階段二：結構化擷取

每項擷取內容都包含：原始意思、Speaker／來源、時間戳記、狀態、Owner、Due。賣方意圖不得轉成買方 Commitment；沒有 Owner 或 Due 時保持 `未知`。

### 階段三：三個成果分離

1. **內部紀要**：Facts、Decisions、Commitments、Risks、Unknowns。
2. **客戶 Follow-up**：只含適合對外、經來源支持的內容，標示為 Draft。
3. **Planner 建議**：具體工作、Proposed Owner、Proposed Due、來源及狀態。

### 階段四：執行 Gate

- Planner 交由 `sales-task-planning` 執行 path/schema discovery 及 duplicate check。
- Email／Teams action 必須使用 Work IQ 明確提供的 `do_action` URL。
- 每個 channel 與每筆工作分開核准；Tenant policy 拒絕即停止。

### 階段五：逐項驗證承諾

承諾必須同時回答「誰、要完成什麼、何時完成、向誰交付、來源在哪」。若會議只出現「我們再看看」「可以研究」「應該沒問題」等語句，不得直接轉成承諾。將其列為討論方向或待確認事項。

狀態規則：

- **已確認決議**：會議中明確作成選擇，且沒有相反陳述。
- **已確認承諾**：具名人員接受明確行動；Due 未確認時仍標示未知。
- **提議**：有人提出但尚未被相關 Owner 接受。
- **推論**：由內容合理推導，但未被直接陳述。
- **未解**：需要後續確認才能採取行動。

### 階段六：撰寫內部紀要

紀要依會議目的整理，不照 Transcript 順序逐句摘要。完整內容包括：

1. 會議、時間、參與者及資料來源。
2. 本次要達成的 Outcome 及實際結果。
3. 客戶確認的目標、問題、限制與衡量方式。
4. 決議與未決議事項。
5. 客戶與我方承諾台帳。
6. Objection、風險、依賴及競爭／替代方案訊號。
7. 需要更新的 Opportunity、Proposal、Account Plan 或其他 artifact。
8. 推論、未知與證據衝突。

不得把內部情緒判讀、對個人的評價或無法驗證的購買意圖寫成事實。

### 階段七：撰寫客戶 Follow-up

Email 應簡潔且可直接審閱：

- 感謝並重述本次共同目的。
- 只列雙方都能看到且適合對外的決議與重點。
- 以清楚表格或短清單列 Owner、行動與日期。
- 附件或資料只提及確實存在且允許分享者。
- 對未確認內容使用「請確認」而非確定語氣。
- 以一個明確 CTA 收尾。

刪除所有內部 Deal health、Forecast、Pricing 底線、關係評價、未核准 Roadmap、敏感 Security finding 與個人資料。

### 階段八：建立 Planner-ready actions

每筆工作要有可驗證的完成結果，而非「Follow up」或「處理問題」。包含來源 Meeting、相關 Account／Opportunity、Proposed Owner、Proposed Due、依賴、Priority 依據及完成標準。Owner 或 Due 未確認時保留 Proposed／Unknown，不因 Speaker 或 Note taker 身分自動指派。

## 停止條件

- 沒有足夠會議證據時，不產生看似完整的會議紀要；改列可確認的 Calendar facts 與需要人工提供的內容。
- Transcript 與會議筆記衝突時並列差異，等待 Owner 確認。
- 客戶 Email 含未確認日期、價格、範圍或承諾時保持 Draft 並標示問題。
- Planner、Email 或 Teams operation 不可用時保留完整預覽，不宣稱完成。

## 輸出格式

| 項目 | 狀態 | Owner | Due | 來源 |
|---|---|---|---|---|
|  | 已陳述／推論／未解 |  |  |  |

### 內部紀要

- **事實與決策：**
- **推論：**
- **未知：**

### 客戶 Follow-up

`草稿—寄送前需要核准`

### Planner 工作建議

| 工作 | Proposed Owner | Proposed Due | 來源 | 狀態 |
|---|---|---|---|---|
|  |  |  |  | 建議／等待核准／完成／Blocked |

## 使用者溝通與完成檢查

- 直接交付內部紀要、客戶 Email 草稿及 Planner-ready actions 三個完整成果。
- 客戶內容使用自然專業語言；不包含工具、schema、內部分析或敏感 Deal 註記。
- 不輸出隱藏思考；承諾判定只呈現 Speaker、原意、Owner、Due、來源與狀態。
- 決議、提議、推論與未解事項沒有混淆。
- Draft、等待核准、已寄送及已建立工作等狀態準確分開。

## Work IQ 工具規則

- `ask` 用於會議解析與跨來源關聯。
- `fetch` 驗證精確證據；先使用 `search_paths`、`get_schema`。
- `create_entity`、`update_entity` 或 `do_action` 只能在逐項核准後使用。
- `delete_entity` 不屬於此 Skill。

## 範例

**輸入：**「整理昨天 Contoso discovery call，寄跟進信並建立工作。」

**正確行為：**先產生三個分離成果，Owner／Due 不明時保留未知；寄信與每筆 Planner 工作分別等待核准。

## Guardrails

- 不把賣方自己的計畫寫成客戶承諾。
- 不猜測 Owner、Due、Decision 或情緒。
- 不把內部敏感評論放入客戶 Email。
- 未核准不得寄送、張貼、排程或建立工作。

## 常見問題

| 問題 | 處理方式 |
|---|---|
| 多場會議符合 | 要求選定唯一會議。 |
| 無 transcript | 使用其他可驗證材料並明確指出限制。 |
| Owner／Due 未說明 | 標示 `未知`，不猜測。 |
| Mutation 被 policy 拒絕 | 回報 blocked operation，不重試。 |
