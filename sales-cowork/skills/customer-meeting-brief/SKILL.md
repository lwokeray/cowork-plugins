---
name: customer-meeting-brief
description: >-
  為一場指定且即將發生的企業客戶、Prospect 或 Partner 會議建立證據導向 Brief、議程、發現問題及建議下一步。
  適用於會前準備與同日會議佇列；不適用於會後整理、完整 Account Plan、Deal Rescue、Forecast 或一般公開研究。
metadata:
  author: lwokeray
  version: "2.0.0"
---

# 客戶會議準備

## 概述

準備一場會議，不建立無邊界 Account dossier。以 Cowork 內建 Work IQ 解析唯一會議，驗證參與者、目的、近期互動、承諾、文件、風險與未知，輸出能直接用於會議的精簡 Brief。

## 適用情境

- 準備具名客戶、Prospect 或 Partner 的即將發生會議。
- 依日期整理當天多場客戶會議的 chronological queue。
- 建立 Meeting outcome、agenda、discovery questions 及預期下一步。

## 不適用情境

- 完成會議後的 recap 與 follow-up → `meeting-follow-up`
- 完整 Account research → `account-research`
- 單一商機推進策略 → `opportunity-strategy`
- 公開研究；只有使用者明確要求時才轉交 `market-competitive-research`。

## 快速開始

1. 以 `ask` 找出候選會議；多筆符合時顯示日期、時間及可安全辨識資訊供使用者選擇。
2. 以 `search_paths`、`get_schema`、`fetch` 驗證 Calendar event、Participants、近期 messages、recaps、tasks 與 approved files。
3. 擷取近期變化、明確承諾、未解 objection、requested materials 與證據日期。
4. 建立單一 outcome、精簡 agenda、發現問題與一個建議下一步。
5. 停止於 Brief，不寄送、不排程、不更新資料。

## 核心流程

### 階段一：唯一會議解析

- 會議需有唯一日期時間、主題或參與者組合。
- 同名會議、系列會議或不同時區不可自行選擇。
- 顯示所有時間時轉換成使用者時區並保留原始時間戳記。

### 階段二：隱私與資料最小化

- Private／Confidential event 只用於時間衝突，不顯示 Subject、Organizer、Attendees、Body 或 Location。
- 只讀取準備該會議所需的限定內容。
- 不把非與會者的私人對話納入 Brief。

### 階段三：證據整理

按以下順序：會議目的、參與者已知角色、最近客戶陳述、雙方明確承諾、未解風險、可用文件、未知。Attendance 不等於 Authority，情緒不等於購買意圖。

### 階段四：會議設計

- 定義一個具體 Meeting outcome。
- 議程只保留支援 outcome 的項目。
- 發現問題以驗證未知與 hypothesis 為主，不把答案預設在問題中。
- 建議下一步需能在會議中確認 Owner 與日期。

## 輸出格式

| 欄位 | 內容 | 證據 |
|---|---|---|
| 客戶／會議 |  |  |
| 日期與時間 |  |  |
| 參與者與已知角色 |  |  |
| Meeting outcome |  |  |

- **近期已確認變化：**
- **明確承諾與 Owner：**
- **未解風險或 objection：**
- **建議議程：**
- **發現問題：**
- **建議下一步（推論）：**
- **未知：**

結尾：`唯讀的會議 Brief 已完成。`

## Work IQ 工具規則

- `ask` 解析會議及跨工作負載背景。
- `fetch` 驗證精確 event、message、file、person 與 task；先執行 path/schema discovery。
- 此 Skill 不呼叫 mutation tools。

## 範例

**輸入：**「準備明天下午的 Contoso 會議。」

**正確行為：**若有兩場 Contoso 會議，先讓使用者選擇；選定後只整理該會議必要證據。

## Guardrails

- 不從出席名單推斷決策權。
- 不把內部意圖寫成客戶承諾。
- 不自動執行公開研究。
- 不寄送 Brief 或修改 Calendar。

## 常見問題

| 問題 | 處理方式 |
|---|---|
| 多場會議符合 | 先要求選定一場。 |
| Recap 或文件無權限 | 標示 `無法存取`，繼續其他證據。 |
| 會議目的不明 | 標示 `未知`，提出確認問題。 |
| Private event 衝突 | 只顯示 `私人行程（時間）`。 |
