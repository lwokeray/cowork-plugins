# Plugin Package Standard

每個 Plugin source 必須包含：

```text
manifest.json
color.png
outline.png
skills/
prompts/
assets/
evals/
README.md
CHANGELOG.md
```

Manifest 使用 M365 Unified App Manifest v1.28、穩定 GUID、SemVer、統一 Publisher `lwokeray`，並逐一宣告實際 Skill folder。每個 package 最多 20 個 Skills。

部署 ZIP 只允許 `manifest.json`、`color.png`、`outline.png`、`skills/` 及 Connector package 必要的 `tools/`。README、CHANGELOG、Prompt Cards、assets、evals 與 build scripts 不進入 ZIP。

Connector 必須使用 HTTPS remote MCP、有效 `mcpToolDescription.file`、受支援 authentication、最小權限及完整 safety annotations。Secret 不得出現在 package。
