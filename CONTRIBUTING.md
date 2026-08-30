# Contributing

所有變更從最新 `main` 建立 branch，且一次 Pull Request 只處理一個 Plugin 或一項 Repository 標準。

## Required workflow

1. 確認能力由哪個職能 Plugin 主責，避免建立重複 Skill。
2. 更新完整 `SKILL.md`、`manifest.json`、Prompt Card、routing／behavior eval 與 CHANGELOG。
3. Icon 變更必須遵守 `docs/standards/icon-standard.md` 並保留原 manifest GUID。
4. 執行 `python scripts/prompt_cards.py plugins/<plugin> --write`。
5. 執行 `python scripts/validate_repo.py`。
6. 執行 `python scripts/build_plugin.py <plugin>`，解壓檢查後不得提交 build 產物。

禁止把設計摘要、思考過程、TODO 骨架或只有標題的流程當成 Skill 內容。Mutation、寄送、發布、批准及外部承諾必須保留 preview、human approval、execution 與 readback verification。
