# Copilot Cowork、Cowork plugins 與 Dynamics 365 MCP：企業採用動能解構

**驗證日期：2026-08-28**
**範圍：Copilot Cowork、Cowork plugins、Dynamics 365 Sales MCP、Dynamics 365 ERP MCP，以及以 Microsoft 365 為工作入口的 Dynamics 365 導入模式。**

## 架構師結論

採取「**Validate first，再以受控試點推進**」的路線。不要將 Cowork 定位成另一個聊天機器人，也不要承諾它可取代 Dynamics 365 的業務操作。

較準確的企業架構是：

- **Copilot Cowork**：員工委派任務、檢視步驟與核准動作的工作入口。
- **Cowork plugin**：以 skills 與 connectors 封裝角色或領域能力的發佈單位。
- **Dynamics 365 MCP**：讓相容 agent 安全地使用特定 Dynamics 365 工作負載資料與業務邏輯的工具面。
- **Dynamics 365**：系統記錄（system of record）、角色權限及既有業務規則的執行層。

Cowork 會先以 Microsoft 365 工作脈絡完成跨系統的準備工作，再經由受權限控制的 Dynamics 365 plugin／MCP 提出資料更新或業務動作；Cowork 會在每項動作發生前要求使用者核准。[Copilot Cowork overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/)

這個模式提高採用意願，**但不會自動改善 Dynamics 365 的資料品質、權限設計、區域可用性、授權成本或治理成熟度**。首批場景必須能從多個資料來源產出可審核的工作成果，而非只將既有聊天介面換成 Cowork。

## 產品邊界與用語

| 元件 | 正確角色 | 不應誤解為 |
|---|---|---|
| **Copilot Cowork** | 跨 Microsoft 365 工作的 agentic orchestrator；可建立文件、寄信、排程、搜尋、管理檔案，並在每個動作前核准 | 無人監督的 RPA，或直接取代 D365 UI 的所有功能 |
| **Work IQ** | Cowork 可使用的工作脈絡能力，例如 email、calendar、文件與試算表 | 已完成資料治理或可跨越原有存取權限 |
| **Cowork plugin** | Microsoft 365 app package，可包含 skills、remote connectors，或兩者 | 所有第三方系統都已原生整合 |
| **Dynamics 365 Sales MCP server** | 為 AI agent 提供 sales-specific tools，亦支援 Dataverse record CRUD 工具 | Customer Service 的通用 MCP server |
| **Dynamics 365 ERP MCP server** | Finance and Operations apps 的 dynamic data、form 與 action tools | 不受版本、環境或使用者權限限制的 ERP API |
| **Microsoft Agent 365、Entra、Purview、Power Platform policies** | 身分、資料政策、可觀測性、稽核與支出控制的治理面 | 可取代業務 owner、核准責任或資料治理 |

### Cowork plugins 的正式邊界

Cowork plugin 能加入：

- **Skills**：以 `SKILL.md` 提供提示式領域工作流程與操作邊界。
- **Connectors**：以 remote server 連結外部資料來源或 API；remote MCP connector 必須採 HTTPS、Streamable HTTP、JSON-RPC 2.0，並支援 `tools/list` 與 `tools/call`。

插件使用標準 Microsoft 365 app package 發佈；管理員可部署給全組織或指定群組，使用者可在個人 session 啟用或停用已部署插件。首次使用 connector 時，仍由使用者自行完成 sign-in／consent，管理員不能代為登入。[Use plugins with Copilot Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-plugins) · [Build plugins for Copilot Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-plugin-development)

## 可驗證的 Dynamics 365 整合能力

### Sales

Dynamics 365 Sales MCP server 提供 sales-specific tools，用於取得銷售資料、產生洞察、草擬 email，以及其他銷售工作；也支援以 Dataverse MCP tools 操作 records。其工具的 AI 功能會消耗 Copilot Studio credits，並非由 Dynamics 365 Sales license 直接支付。[Dynamics 365 Sales MCP overview](https://learn.microsoft.com/en-us/dynamics365/sales/model-context-protocol-sales-overview)

適合作為第一波示範的工作成果：

- customer／account meeting preparation
- opportunity health、risks 與 stakeholder gaps 摘要
- sales outreach draft
- pipeline review 與可核准的 CRM 更新建議

### Customer Service

應描述為 **Dynamics 365 Customer Service plugin for Copilot Cowork**，而不是假設存在可替代所有 Customer Service 功能的通用 MCP server。採用場景應先聚焦案件分流、知識接地回覆草稿、escalation handoff 與主管檢視；最終回覆、case state 變更與任何敏感資料寫入仍保留人工審核與既有 CRM 權限。

### Finance and Operations（ERP）

Copilot Cowork 可透過 **Dynamics 365 ERP apps plugin** 連接 Dynamics 365 ERP MCP server，將 ERP 資料與 email、文件及其他 Microsoft 365 工作脈絡編排在同一段對話中。ERP MCP server 提供：

- **Data tools**：create、read、update、delete 資料實體。
- **Form tools**：以應用程式頁面可用的操作執行工作。
- **Action tools**：呼叫開發者暴露的自訂業務邏輯。

這不是不受限制的自動化。Server 依使用者 security roles、應用程式設定、擴充與個人化動態決定可用物件與動作；Cowork 的外部動作仍須由使用者核准。[Use Copilot Cowork with Dynamics 365 ERP](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/fin-ops/copilot/use-copilot-cowork-erp) · [Use Model Context Protocol for finance and operations apps](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/copilot/copilot-mcp)

生產前必須驗證以下必要條件：

| 項目 | 已驗證條件 |
|---|---|
| Finance and Operations 版本 | 10.0.47、10.0.46 PQU-2，或 10.0.45 PQU-7 以上 |
| Feature | 啟用 Dynamics 365 ERP MCP server；新版 server 預設啟用 |
| Client allow-list | 在 **Allowed MCP Clients** 加入使用的 agent platform |
| 環境 | Tier 2 以上或 Unified Developer Environment；**不支援 Cloud Hosted Environments** |
| 遷移 | 舊 static ERP MCP server 預計於 **2026-10-01** retire；新實作應採 dynamic server |

## 採用動能：從「問答案」轉為「委派成果」

第一階段不應讓 AI 自動完成交易，而應讓使用者在原有 Microsoft 365 環境委派一項跨系統工作：Cowork 利用 email、會議與文件脈絡，再經 D365 plugin／MCP 取得商機、案件、供應商或採購資料，交付可審查的 briefing、報告、回覆草稿或更新清單。

| 採用機制 | 具體效果 | 必要前提 |
|---|---|---|
| **先展示工作成果** | 以 QBR、case handoff、RFQ 比較等成果降低學習與介面切換成本 | D365 主要資料完整且可讀取 |
| **讀取 → 建議 → 核准寫入** | 用可逆的信任階梯逐步導入，避免一開始就自動修改核心資料 | 每個寫入有權限、核准、audit 與 rollback 設計 |
| **角色型 plugin 分發** | 依銷售、客服、採購、法務或財務分發可發現、可啟用的能力 | 清楚定義 plugin owner、資料邊界與 support model |
| **把 D365 做為執行層** | 當建議被核准寫回，CRM／ERP 可保留可信記錄與業務規則 | 資料模型、security role 與冪等性可驗證 |
| **以工作流衡量用量與價值** | 以每個任務的採用、品質、風險和成本判斷是否擴大部署 | 有基準流程與可量測 KPI |

## 產業場景與優先級

下列為根據產品能力推導的候選場景；除另有官方案例支持者外，均必須以客戶資料與 PoC 驗證，不可當成產品保證。

| 產業 | 優先工作流 | Cowork + plugin／MCP 協作 | 主要風險 |
|---|---|---|---|
| 製造／設備 | case handoff、現場工單、零件與供應商報價 | Service／Field Service 資料配合 ERP、email 與附件建立交接與建議 | 現場離線、庫存與工單資料品質 |
| 零售／Commerce | 庫存、訂單、退換貨、商品與促銷 briefing | Cowork 彙整文件與信件，ERP／Commerce 連線提供查詢與核准寫回 | 庫存即時性、訂單與價格更新錯誤 |
| 金融服務 | 客戶會議準備、案件摘要、內部研究草稿 | 以既有權限讀取 Sales／Service 資料，輸出可審核的 briefing | 法規、資料主權、保留與稽核要求 |
| 醫療／健康服務 | service case 分流、知識接地回覆、跨團隊交接 | Service plugin 提供案件與知識，Cowork 產出草稿 | 個資、臨床責任、禁止自動寫入 |
| 專業服務 | QBR、專案風險、合約與交付彙整 | Work IQ 補足會議／文件，D365 Sales 或 Project 資料補足客戶脈絡 | 合約機密、跨客戶資料隔離 |

## 建議採用路徑與 gates

| 階段 | 目標 | 最小範圍 | 必須通過的 gate |
|---|---|---|---|
| **0. Readiness** | 確認可安全開始 | 版本、環境、角色、資料品質、授權、區域與 plugin 可用性 | 無重大過度分享；資料與權限邊界可說明 |
| **1. Read-only pilot** | 證明使用者願意委派 | meeting preparation、case brief、RFQ／商機查詢 | 重複使用，且相較現行流程節省可量測時間 |
| **2. Draft and recommend** | 證明能產生業務可用成果 | email／回覆草稿、QBR deck、升級與報價建議 | 人工修改後達到業務品質門檻 |
| **3. Approved write-back** | 將價值連回 D365 | CRM／case 更新、低風險 RFQ 回覆或採購動作 | 權限、核准、retry、冪等、audit 與回復皆可驗證 |
| **4. Scale and productize** | 擴大為角色型產業方案 | 多部門 rollout、可配置 plugins、usage budget | 有 workflow owner、runbook、成本上限、版本與風險管理 |

首選 PoC 應在 4–6 週內驗證一條含低風險寫回的流程：**Sales meeting／QBR preparation**、**Customer Service case handoff** 或 **RFQ bid evaluation**。僅使用已脫敏的真實資料，並將功能、權限、資料品質、成本、錯誤處理及使用者接受度分開測量。

## 成功指標

| 面向 | 建議指標 | 不應只看 |
|---|---|---|
| 採用 | weekly active delegators、重複委派率、plugin 啟用率、首次產出時間 | 已分配的授權數 |
| 品質 | accept／edit／dismiss、引用正確性、人工修改時間、tool error／retry rate | 回答是否流暢 |
| 業務 | case throughput、回覆時間、QBR 準備時間、RFQ 評估週期、CRM 更新完成率 | 單純節省分鐘數 |
| 風險 | 未授權阻擋率、人工否決率、資料外洩測試、寫入回復成功率、audit 完整性 | demo 是否成功 |
| 經濟 | 每任務／案件成本、預算偏差、成功寫回成本、support 工時 | 供應商平均 ROI |

## 治理、資安與成本邊界

### Plugin 與 MCP

MCP 擴大能力同時也擴大 tool poisoning、prompt injection、context oversharing、過度授權 token、未經 gateway 的 endpoint 及開放 egress 等風險。自訂 MCP server 應最少具備 vetted server inventory、least-privilege short-lived token、API gateway、集中 logging、rate limiting、資料外洩監控與明確人工 consent。

對 Cowork remote connector，生產設計至少要符合官方要求：HTTPS/TLS 1.2+、Streamable HTTP、JSON-RPC 2.0、`tools/list`、`tools/call`；Store 發佈建議 99.9% uptime 與單次工具呼叫少於 30 秒。MCP tool descriptions 需被納入 plugin package，否則 package service 會拒絕上傳。[Build plugins for Copilot Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-plugin-development)

### Copilot Studio 與企業治理

Microsoft Agent 365 可作為 Copilot Studio agents 的集中 control plane；在已 onboard 的組織中，agents 可表達為 Entra identities，並採 Conditional Access、RBAC／ABAC 與 access-governance workflows。Power Platform data policies 可治理 maker／user authentication、knowledge sources、actions、connectors、skills、HTTP requests、publication channels 與 triggers；Purview 可檢視 maker audit logs。[Copilot Studio security and governance](https://learn.microsoft.com/en-us/microsoft-copilot-studio/security-and-governance)

不要把上述治理能力延伸成「所有 Cowork 或所有 D365 MCP 事件都自動受同一種治理與稽核範圍保護」；實際 coverage 必須依租戶、產品、region、license 和設定逐項驗證。

### Billing

Cowork 已 GA；管理員必須先啟用 **usage-based billing** 才能讓使用者存取 Cowork。Cowork 的 plugin、模型、browser use、安全與合規、以及 usage-based billing 均由 Cowork 管理面管理。成本模型應以每次任務、每個 case、每張 RFQ 和每次成功寫回建立基線，配合 department budget 與支出上限；不可引用未核對的固定單價或泛用 Copilot pay-as-you-go 文件來推估 Cowork 成本。[Manage Copilot Cowork for your organization](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-admin-governance)

## 路線比較

| 路線 | 適用情況 | 優點 | 代價與依賴 | 建議 |
|---|---|---|---|---|
| **A. D365 內嵌 Copilot** | 工作主要留在 CRM／ERP，跨 M365 需求低 | 邊界較窄、治理較直接 | 使用者仍需進入 D365；跨資料來源成果有限 | 低風險起點或單一模組優化 |
| **B. Cowork + 官方 D365 plugin／MCP** | 任務跨 email、會議、文件與 CRM／ERP | 使用者體驗最佳，可串接交付成果與 D365 寫回 | 需驗證 Cowork、plugin、版本、環境、授權與治理 | **首選**；先做 Sales／Service 或 ERP RFQ／case 流程 |
| **C. Copilot Studio + 自訂 MCP／plugin** | 有差異化流程或 legacy system | 彈性最高，可建立自有 agent 與 connector | OAuth、gateway、SLA、監控、版本、資安與 support 由企業／夥伴承擔 | B 證明價值後再延伸 |

## 最終判斷

Cowork、plugins 與 Dynamics 365 MCP 能把 AI 入口、企業資料與業務規則組成「**可委派、可審核、可寫回**」的工作循環：Cowork 降低開始使用的摩擦；plugin 讓領域能力可分發與重用；MCP 將資料與工具接入相容 agent；Dynamics 365 保留可信記錄、角色權限與業務邏輯。

最可行的商業與導入敘事是：先讓員工在既有 Microsoft 365 工作環境交付一個跨系統、有業務結果且可核准的成果；當他需要可信資料、規則與可追蹤寫回時，Dynamics 365 成為執行平台。資料、權限、成本、版本、治理與人工責任尚未被設計前，不應將此敘事升級為全面自動化承諾。

## 官方來源

- [Copilot Cowork overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/)
- [Use plugins with Copilot Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-plugins)
- [Build plugins for Copilot Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-plugin-development)
- [Manage Copilot Cowork for your organization](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-admin-governance)
- [Use Copilot Cowork with Dynamics 365 ERP](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/fin-ops/copilot/use-copilot-cowork-erp)
- [Use Model Context Protocol for finance and operations apps](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/copilot/copilot-mcp)
- [Dynamics 365 Sales MCP server overview](https://learn.microsoft.com/en-us/dynamics365/sales/model-context-protocol-sales-overview)
- [Copilot Studio security and governance](https://learn.microsoft.com/en-us/microsoft-copilot-studio/security-and-governance)
