# Finance Cowork

Finance Cowork 是供 Enterprise Finance、Accounting、FP&A、Treasury、Controllership 與 Internal Audit 使用的 Microsoft 365 Copilot Cowork Plugin。套件採 Skills-only 架構，由多個獨立 Agent Skills 協調 Cowork 內建 Unified Work IQ MCP；不封裝 Remote MCP Server、OAuth、Credential 或 workload-specific connector。

版本 1.0.1 使用單檔平鋪 Monolithic Prompt Packing。每個 `skills/<skill-name>/SKILL.md` 都能獨立完成核心工作，內含適用／排除條件、工作流程、來源與證據規則、計算與Tie-out、產出契約、停止條件、核准邊界、例外處理、Work IQ工具規則、範例與常見問題，不依賴外部Reference才可運作。使用者收到完整Finance artifact，不會收到Agent思考過程或製作摘要。

## Skills

| Finance lifecycle | Skill | 核心用途 |
|---|---|---|
| Close | `close-management` | 建立結帳Calendar、Dependency、Status、Blocker、Escalation與Close evidence。 |
| Accounting | `journal-entry-preparation` | 準備具Support、Approval、SoD與Posting verification的Journal entry package。 |
| Accounting | `account-reconciliation` | 執行GL／Subledger／Bank／Intercompany reconciliation及差異追蹤。 |
| Reporting | `financial-statement-preparation` | 由Approved TB建立可Tie-out的Financial statements、Notes與Review package。 |
| FP&A | `variance-analysis` | 將Actual／Budget／Forecast／Prior差異分解為可Reconcile drivers。 |
| FP&A | `budget-forecast-planning` | 建立Driver-based Budget／Forecast、Scenarios、Assumptions與Approval workflow。 |
| Treasury | `cash-liquidity-forecast` | 建立13-week／短中期Cash forecast、Liquidity、Headroom與Scenario。 |
| Working capital | `working-capital-review` | 分析AR、AP、Inventory、DSO／DPO／DIO及Cash release actions。 |
| AP / Expense | `invoice-expense-review` | 檢查Invoice／Expense的Duplicate、Policy、Approval、Coding、Tax與Payment readiness。 |
| Analysis | `financial-analysis` | 執行Profitability、Margin、Ratio、Trend、Segment與Decision analysis。 |
| Modeling | `financial-model-building` | 建立可稽核、可重算、Input／Calculation／Output分離的財務模型。 |
| Valuation | `dcf-valuation` | 建立Unlevered DCF、WACC、Terminal value、Sensitivity與Value bridge。 |
| Management | `management-reporting` | 整合Reviewed Finance artifacts為CFO／Leadership／Board decision pack。 |
| Audit | `audit-evidence-support` | 建立PBC tracker、Evidence index、C&A、Tie-out、Access與Delivery log。 |
| Controls | `internal-control-testing` | 執行Walkthrough、Design／Operating testing、Sample、IPE、Exception與Retest。 |

## 設計原則

- Plugin內包含多個各自註冊的Finance Skills，不把不同Finance職能塞進單一Skill。
- 每個Skill固定採`Overview`、`When to Use`、`When NOT to Use`、`Quick Start`、`Core Instructions`、`Examples`、`Guardrails`與`Common Issues`結構。
- Fact、Calculation、Assumption、Estimate、Hypothesis、Exception、Decision與Approval保持可辨識；Unknown不由模型補寫。
- 所有Headline numbers保留Entity、Period、Currency、Unit、Source、Version與As-of，並能Tie回Source artifact。
- `ask`用於跨工作負載reasoning；精確事實以`search_paths`、`get_schema`與`fetch`驗證。
- Mutation、Posting、Payment、Send、Share、Publish、Delete與Approval必須逐項Preview、取得核准、執行後重新驗證。
- 權限不足標為`Access denied`，證據不存在標為`Unknown`，operation未提供標為`Unsupported`；Tenant policy denial不得繞過。
- Skills不代替Controller、CFO、Treasury、Tax、Legal、Management、Internal Audit或External Auditor作正式核准或專業結論。

詳細規格見[Skill設計標準](docs/skill-design-standard.md)。

## 建置與驗證

```bash
python scripts/validate_repo.py
python scripts/build_plugin.py finance-cowork
```

部署 ZIP 根目錄只包含 `manifest.json`、`color.png`、`outline.png` 與 `skills/`。README、docs、Prompt Cards 與 evals 是 Repository materials，不放入部署 ZIP。

## Tenant 測試

在非Production tenant使用合成或去識別化的Outlook、Teams、Calendar、Planner、SharePoint、OneDrive、Word、Excel、PowerPoint、PDF、Financial statement、TB、Subledger、Bank、Invoice、Forecast、Audit與Control evidence測試。至少覆蓋Skill routing、Permission trimming、Source／version衝突、Tie-out failure、Draft／Approved狀態、Mutation preview、Policy denial、Partial failure與External sharing。

## 官方參考

- [Build plugins for Copilot Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-plugin-development)
- [Work IQ MCP overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/work-iq/mcp/overview)
- [Work IQ MCP tool reference](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/work-iq/mcp/tool-reference)
- [Work IQ entity model](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/work-iq/mcp/entity-model)

## Privacy

套件不含Remote connector、Credential或Telemetry。所有存取沿用登入使用者的Copilot、Microsoft 365權限與Tenant policy；Tenant管理員負責Purview、Retention、Audit、DLP、Sensitivity、Sharing control、External access與Finance workspace governance。

## Terms

此Sample僅供受Tenant管理的評估與測試。Production deployment前必須驗證Licensing、Permission、Data handling、Financial／Audit methodology、Segregation of duties、Approval matrix與Tenant實際提供的Work IQ operations。套件不構成Accounting、Audit、Tax、Legal、Investment或Valuation的正式專業意見。
