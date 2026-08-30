# Repository Standard

## Scope

此 repository 只保存 Microsoft 365 Copilot Cowork Plugin source、共用驗證與相關研究。MCP Server runtime、Codex／Claude Plugin manifest、build ZIP、credential 與 tenant-specific configuration 必須放在其他 repository 或安全設定系統。

## Ownership model

- 每個 Plugin 對應一個清楚職能，不以單一文件類型建立跨職能 Plugin。
- 每個工作流程只能有一個主要 Plugin owner；其他 Plugin 只提供本職能輸入、審查或 handoff。
- 新增 Skill 前先檢查 Catalog、manifest、Prompt Cards 與 cross-plugin routing eval。
- Plugin 目錄統一為 `plugins/<domain>-cowork`，Skill 目錄統一為 `skills/<kebab-case>/SKILL.md`。
- Manifest GUID 建立後永久保留；改目錄、名稱或版本不能更換 GUID。

## Source and release

Repository 不追蹤 ZIP。所有 package 都從目前 commit 使用共用 builder 產生，通過 validation 後以 `<plugin>-v<version>` tag 發布至 GitHub Releases。
