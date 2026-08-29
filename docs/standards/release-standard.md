# Release Standard

- 使用 SemVer；Skill 行為或輸出契約的相容新增升 minor，破壞性變更升 major，文字與無行為修正升 patch。
- Tag 使用 `<plugin>-v<version>`。
- Release asset 使用 `<plugin>-<version>.zip` 與同名 `.sha256`。
- Release ZIP 必須由 tag commit 建置，不得使用工作目錄中的舊 ZIP。
- 發布前必須通過 repository validation、reproducible build、ZIP root inspection 與 tenant smoke test。
- Manifest GUID 永遠不因版本或目錄重新命名而更換。
