---
name: forecast-decision-pack
description: >-
  依核准且可比較的目前與先前 Excel、SharePoint 或 OneDrive 快照，準備限定團隊與期間的 Forecast／Pipeline 決策包。
  適用於 Forecast call、Material movement、Deal risk 與 Manager decision questions；不適用於沒有核准快照、推算未提供數值或直接修改 Forecast。
metadata:
  author: lwokeray
  version: "2.0.0"
---

# Forecast 決策包

## 概述

為 Sales Manager 或 RevOps 準備具 as-of date、來源及 Evidence gap 的 Forecast decision pack。報告值、Buyer evidence、風險與 Human decision 必須分開；活動報告不能替代 Forecast。

## 適用情境

- 準備指定 Team／Period 的 Forecast call。
- 比較目前與先前核准 snapshot 的重大變化。
- 找出高風險 Deal、Evidence gap 與 Manager questions。

## 不適用情境

- 沒有核准 current snapshot 的 Forecast review。
- 沒有 prior snapshot 卻宣稱 movement。
- 自動改變 Forecast category、Amount、Probability、Stage 或 Close Date。

## 快速開始

1. 確認 Team scope、Forecast period、as-of date、current snapshot 與 prior snapshot。
2. 用 `ask` 找核准來源，再以 `search_paths`、`get_schema`、`fetch` 讀取精確 entities。
3. 驗證 approval status、Owner、schema、currency、period 與 snapshot comparability。
4. 比較 material movement，對關鍵項目檢查 Buyer evidence。
5. 產生 Rollup、Risk、Evidence gaps 與具名 Manager decision questions；不執行任何變更。

## 核心流程

### 階段一：Snapshot Gate

- Current snapshot 必須存在、屬於指定 scope／period 且可確認為核准來源。
- Prior snapshot 不存在時，只輸出 current posture，不宣稱 movement。
- 欄位、currency、period 或 aggregation 不一致時停止直接比較，列出差異。

### 階段二：Movement Analysis

只比較來源中已存在的數值及 category，記錄 old／new／delta／source。不得補算缺少的 Probability、Amount 或 Forecast value，除非使用者提供明確公式及授權分析。

### 階段三：Evidence Inspection

對 material items 驗證最近 Buyer outcome、Stakeholder、Decision／Commercial path、Next commitment。Seller activity 與內部 optimism 只能列為 context，不得視為 Buyer evidence。

### 階段四：Decision Pack

| Scope | Period | As-of | Current snapshot | Prior snapshot | Comparability |
|---|---|---|---|---|---|
|  |  |  |  |  |  |

| Deal／Segment | Reported movement | Buyer evidence | Evidence gap | Risk posture | Manager decision question |
|---|---|---|---|---|---|
|  |  |  |  |  |  |

每個 Decision question 包含 Decision owner、需要的 Evidence 與 Due。結尾：`決策包已完成；未變更任何 Forecast 或 Commercial field。`

## Work IQ 工具規則

- `ask` 找到核准 snapshots 與相關背景。
- `fetch` 驗證 snapshots 與 deal evidence；先使用 `search_paths`、`get_schema`。
- 此 Skill 不使用 mutation tools。

## 範例

**輸入：**「準備本季 Forecast Review。」

**正確行為：**先要求 Team、as-of 與核准 current snapshot；沒有 prior snapshot 時明確停止 movement comparison。

## Guardrails

- 不把活動報告當 Forecast。
- 不推算或修改缺少的 Forecast values。
- 不以內部 optimistic note 取代 Buyer evidence。
- 不將分析結果寫回 register。

## 常見問題

| 問題 | 處理方式 |
|---|---|
| 無 prior snapshot | 只輸出 current posture。 |
| Snapshot schema 不同 | 顯示差異，不直接比較。 |
| Approval status 無法確認 | 標示 `未知`，不宣稱正式 Forecast。 |
| Deal evidence 無權限 | 標示 `無法存取`，降低風險判斷信心。 |
