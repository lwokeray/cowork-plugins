# Microsoft 365 Copilot Cowork Plugins

職能型 Microsoft 365 Copilot Cowork Plugin monorepo。每個 Plugin 都是獨立的 M365 Unified App Package source，包含 manifest、icons、完整 Monolithic Skills、Prompt Cards 與行為驗證。

## Plugin Catalog

<!-- PLUGIN_CATALOG:START -->
| Plugin | Version | Skills | Status | Responsibility |
|---|---:|---:|---|---|
| [`sales-cowork`](plugins/sales-cowork/) | 3.1.0 | 18 | candidate | 企業銷售、商機、提案、商務審查、成交交接與續約擴展 |
| [`hr-cowork`](plugins/hr-cowork/) | 1.0.1 | 20 | candidate | 招募、員工生命週期、HR operations、人才發展與人力規劃 |
| [`pm-cowork`](plugins/pm-cowork/) | 2.0.1 | 16 | candidate | 產品與專案 intake、規格、規劃、交付、風險、治理與成果檢視 |
| [`it-operations-cowork`](plugins/it-operations-cowork/) | 1.0.1 | 17 | candidate | Identity、Endpoint、M365、Cloud、Network、Security、Change 與 IT Operations |
| [`it-helpdesk-cowork`](plugins/it-helpdesk-cowork/) | 2.0.1 | 12 | candidate | Dynamics 365 Customer Service IT case intake、troubleshooting、communication 與 escalation |
<!-- PLUGIN_CATALOG:END -->

規劃中的 `finance-cowork` 與 `marketing-cowork` 必須完成 Skills、Prompt Cards、icons、evals 與 tenant acceptance 後才加入 Catalog，不建立空殼 package。

## Repository Layout

```text
plugins/<domain>-cowork/    獨立職能 Plugin source
docs/standards/             Repository、Skill、Prompt Card、icon 與發布規範
scripts/                    共用驗證、Prompt Card 產生與打包工具
.github/workflows/          Pull request validation 與 GitHub Release
catalog.yaml                Plugin 清單、狀態與責任邊界
```

`proposal-cowork` 已退役。提案準備、品質審查、商務審查及 Win/Loss learning 已歸入 `sales-cowork`；完整能力對照見 [Proposal migration map](docs/migrations/proposal-to-sales.md)。其他職能只處理自己授權範圍內的輸入與核准。

Self-hosted Power Automate MCP 已移至獨立私人 repository：[`lwokeray/power-automate-mcp-selfhosted`](https://github.com/lwokeray/power-automate-mcp-selfhosted)。

## Validate

```bash
python -m pip install -r requirements-dev.txt
python scripts/validate_repo.py
```

驗證內容包括 manifest v1.28、Skill 數量與 frontmatter、Monolithic 內容完整度、Prompt Card 一對一覆蓋、icon 尺寸與透明度、evals、Catalog、禁止追蹤 ZIP 及舊目錄殘留。

## Build

```bash
python scripts/build_plugin.py sales-cowork
```

產物建立於本機 `build/`，ZIP 根目錄只包含 `manifest.json`、`color.png`、`outline.png`、`skills/` 及必要的 `tools/`。ZIP 與 SHA-256 只透過 GitHub Release 發布，不提交到 Git。

## Standards

- [Repository standard](docs/standards/repository-standard.md)
- [Plugin package standard](docs/standards/plugin-standard.md)
- [Skill authoring standard](docs/standards/skill-standard.md)
- [Prompt Card standard](docs/standards/prompt-card-standard.md)
- [Icon standard](docs/standards/icon-standard.md)
- [Evaluation standard](docs/standards/evaluation-standard.md)
- [Release standard](docs/standards/release-standard.md)
