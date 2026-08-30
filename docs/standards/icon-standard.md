# Icon Standard

## Deployment files

- `color.png`：192×192 PNG，透明背景的職能 icon。
- `outline.png`：32×32 PNG，透明背景的白色單色輪廓。
- `assets/icon-source.yaml`：保存圖示庫、來源 commit、license、glyph、縮寫與色彩，不進部署 ZIP。

## Visual system

- 優先使用 [Microsoft Fluent UI System Icons](https://github.com/microsoft/fluentui-system-icons) 的既有 glyph，不自由生成通用圖形。
- `color.png` 使用 Filled variant、單一職能色與透明背景；不使用 3D、底板、陰影、玻璃、漸層或裝飾場景。
- Plugin Name 縮寫放左上角，高度不超過畫布 10%，不與中央 glyph 競爭。
- `outline.png` 使用相同 glyph 的 Regular variant，不含縮寫，以維持 32px 可讀性。
- 主 glyph 約佔畫布 65–72%，四周保留安全留白。
- 不使用 Emoji、未授權 Logo 或自行仿製的 Microsoft product mark。
- 不提交 SVG 作為部署 icon；manifest 只引用兩個 PNG。來源檔只用於可追溯與再製。
- 第三方圖示必須記錄固定 commit 與 license，並列入 `THIRD_PARTY_NOTICES.md`。

CI 驗證 PNG signature、精確尺寸、透明度、manifest path、source metadata 與 ZIP allowlist。人工 QA 同時檢視全部 192px 與 32px icons，確認縮寫位置、語意、辨識度、Fluent 一致性與無重複設計。
