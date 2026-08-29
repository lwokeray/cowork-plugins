---
name: seo-content-optimization
description: 依 Website／Content、Search intent、Keyword／query evidence、Audience、Competitor content、Brand 與 Conversion goal，進行 SEO content audit、On-page review、Content gap、Topic cluster、Metadata、Internal linking、Refresh 與優先行動計畫。 適用於 organic search 與 answer-engine content optimization；不適用於無工具證據的 technical crawl／ranking claim、black-hat link manipulation、保證排名或直接修改網站。
metadata:
  author: lwokeray
  version: 1.0.1
license: MIT
---

# SEO Content Optimization

## Overview

建立以 Audience search／answer need 為中心的 SEO Content Brief 或 Audit。Skill 能分析使用者提供的 pages、M365 content inventory、approved analytics export 與 current public search evidence；若沒有 crawler、Search Console、SEO platform 或 page-performance evidence，必須把 Technical／ranking status 標成 `Not measured`，不以表面觀察假裝完整 audit。

## When to Use

- Keyword／topic／query intent research 與 Content opportunity。
- Blog、Landing page、Product page、Guide、FAQ 的 On-page SEO review／rewrite。
- Content gap、topic cluster、pillar／supporting content 與 refresh plan。
- 分析 organic performance export、query／page data 與 ranking movement。
- 建立 metadata、heading、internal linking、schema opportunity 與 answer-ready content brief。

## When NOT to Use

- 沒有 crawler／analytics 證據卻宣稱完整 technical SEO health、Core Web Vitals 或 index status。
- 保證排名、搜尋流量、AI citation 或指定 position。
- Keyword stuffing、hidden text、cloaking、spam backlink、parasite content 或操弄評價。
- 直接修改 CMS、robots、sitemap、schema、redirect 或 live page。
- 只做 broad competitor positioning → `competitive-positioning-brief`

## Quick Start

1. 確認 Domain／page／topic、Market／language、Audience、business goal、conversion、audit mode、competitors 與 available data sources。
2. 用 `ask` 找 content inventory、Brand、Campaign、analytics export、keyword／query data、prior SEO reports 與 canonical page；用 `fetch`／`fetch_blob` 驗證。
3. 若 current public research 是必要且獲准，檢查 live result／competitor／official guidance；記錄 observed date。沒有 precise SEO data 時使用 qualitative opportunity，不虛構 volume／difficulty／rank。
4. 完成 Search intent、page／content、gap、internal-link、metadata、technical-evidence boundary 與 prioritization。
5. 交付完整 optimized content／brief 或 audit action plan；不修改網站。

## Core Instructions

### 1. Select the audit mode

- `Page optimization`：單一／有限 pages 的 content、metadata、structure、intent、CTA。
- `Content gap`：我方與 competitor／SERP／Audience questions 的 topic／format／journey gap。
- `Topic cluster`：Pillar、subtopics、queries、internal linking、content lifecycle。
- `Performance diagnosis`：使用 approved query／page／traffic／conversion export 分析 movement。
- `Technical evidence review`：只評估使用者提供的 crawl、index、CWV、schema、log／tool output，不自行假裝 crawl。

Scope 過大時先優先處理高 business relevance pages／queries，而不是任意抓前幾頁。

### 2. Establish evidence sources

使用優先順序：

1. First-party Search Console／analytics／CMS／crawler export 或使用者提供的 verified data。
2. Canonical page／content 與 approved Brand／Product source。
3. Customer／Audience questions、site search、support／sales evidence。
4. Current public SERP／competitor／official search documentation。
5. Third-party SEO estimates，保留 provider、date、method／limitation。

Search volume、difficulty、domain authority、rank、traffic、backlink、AI citation 等數字如果不是直接資料，明確稱 estimate。不同 tools 的指標不可直接拼接。

### 3. Classify search and answer intent

對每個 query／topic 記錄：Intent（Informational／Navigational／Commercial／Transactional／Task）、Audience、Journey、question、desired answer、proof required、content type、SERP／answer format、business relevance 與 current coverage。

不要只把 keyword 插入文章。先判斷 page 是否符合 user task；Search intent 與 Campaign CTA 衝突時，重新設計 page role 或 CTA，而不是強迫 conversion。

### 4. Review page and content quality

檢查：

- Title／meta：specific、accurate、query／Audience match、非 clickbait。
- H1／H2／H3：清楚 hierarchy，每節回答一個問題。
- Opening：快速回答 intent，說明 value／scope。
- Coverage：核心問題、subquestions、examples、proof、limitations、next step。
- Original value：first-party evidence、expertise、tool／template、clear point of view。
- Trust：author／owner、date、sources、Product／Customer evidence、review／update。
- Readability：段落、lists、tables、definitions、accessible links／alt text。
- CTA：符合 Journey、與 page promise 一致。
- Duplication／cannibalization：重複 page intent、canonical conflict、near-duplicate content。

Length 由 intent 與 completeness 決定，不套固定字數。E-E-A-T 等框架只能作 quality lens，不可當排名保證。

### 5. Optimize metadata and answer structure

交付至少三個 Title／H1 options、meta description、suggested slug、opening answer、heading outline、FAQ／question set、internal／external link opportunities、image／alt-text brief、structured-data opportunity（Candidate only）與 CTA。

Featured snippet／AI answer optimization 以清楚 definition、steps、comparison、source與 concise answer 為原則，但不可保證被引用。Schema 只建議適合類型；實際 eligibility／markup／validation 需 technical owner。

### 6. Build content gap and cluster

Gap 分類：

- Audience question missing。
- Journey／decision evidence missing。
- Competitor／SERP covers but we do not。
- Existing content thin、stale、duplicated、misaligned 或 lacks proof。
- Format missing：Guide、comparison、FAQ、calculator、template、video、case。
- Internal-link／navigation gap。

每個 opportunity 有 Audience／intent、business relevance、evidence、recommended action、format、owner、dependency、effort、success signal 與 risk。Competitor 有內容不代表我方一定要做；需與 Audience need／Brand authority 相符。

Topic cluster 包含 Pillar purpose、supporting topics、query relationships、unique intent、internal-link direction、canonical／consolidation、publish／refresh sequence 與 ownership。

### 7. Diagnose performance carefully

先驗證 period、timezone、filters、search type、country、device、page／query canonical、tracking change、site migration、seasonality 與 data completeness。分析 Impressions、CTR、average position、clicks、organic sessions、engagement、conversion時保留 denominator／source。

常見 pattern 僅形成 Hypothesis：

- Impressions ↑、CTR ↓：query mix、title／SERP change、position distribution。
- Position stable、click ↓：demand／SERP feature／seasonality／tracking。
- Page traffic ↑、conversion ↓：intent mix、CTA／offer、page issue。
- Sudden drop：tracking／index／site change／manual action／algorithm／competitor；沒有證據不能指定原因。

### 8. Bound technical SEO claims

只有有直接 tool／export evidence 才判定：crawlability、indexation、canonical、redirect、robots、sitemap、schema validation、CWV、mobile、HTTPS、broken links、rendering。只看到 page HTML／screenshot時最多指出 observable issue 或 `Technical validation required`。

### 9. Prioritize by impact, confidence, and effort

Priority = Audience／business impact × evidence confidence × feasibility。分：

- Critical／Blocker：錯誤 canonical／noindex 等只有在 verified evidence 下使用。
- Quick win：可小幅修改且有清楚 intent／CTR／content gap evidence。
- Strategic investment：Pillar、tool、original research、migration、architecture。
- Monitor：資料不足或需等待完整周期。

每項要有 Done when 與 Measurement window，不用泛泛「改善 SEO」。

### 10. Keep changes in review state

提供 exact revised copy／metadata／content brief／redirect or schema recommendation，但不直接修改 CMS、site config、robots、sitemap、analytics 或 publish。需要工作項目時交由 `marketing-work-management`。

## Output Format

```markdown
# SEO Content Optimization Brief
## Scope, data, and technical-evidence boundary
## Executive findings
## Search intent and opportunity map
## Page / content findings
| Priority | Page / query | Evidence | Issue / opportunity | Recommended change | Done when |

## Optimized metadata and content
## Content gaps and topic cluster
## Internal linking and lifecycle actions
## Technical validation requests
## Measurement plan and limitations
```

## Work IQ Tool Rules

- `ask`：尋找 content inventory、analytics／SEO exports、Brand、Product、Customer questions 與 prior reports。
- `search_paths`、`get_schema`、`fetch`、`fetch_blob`：驗證 files、workbook rows、canonical sources 與 report metadata。
- 保持 Read-only；不修改網站、CMS、tracking 或 technical configuration。

## Examples

**User:**「為什麼這三篇文章流量下降？」

**Correct behavior:** 驗證 period、query／page data、filters、tracking／site changes與 current evidence；提出多個有 evidence 的 hypotheses 與 validation，不因時間接近演算法更新就宣稱根因。

## Guardrails

- 不捏造 keyword volume、difficulty、rank、traffic、backlink、CWV、index、algorithm impact 或 AI citation。
- 不保證排名、流量或 featured snippet，不做 black-hat／spam manipulation。
- 不用 competitor copying 取代 original value，不大量生成薄內容。
- 不直接修改或發布網站、metadata、schema、redirect、robots 或 sitemap。
- 不把第三方 estimate 表示為 first-party actual data。
- 無 crawl、Search Console、analytics或current SERP證據時將對應結論標示 `未知`／`Not measured`；任何網站變更都保留具名 Owner與正式核准。

## Common Issues

| Issue | Cause | Fix |
|---|---|---|
| Audit 看似完整但無 crawl | 混淆 observable 與 measured | 標 Technical validation required。 |
| 關鍵字很多但無策略 | 未連 Audience／intent／business | 建 intent opportunity map。 |
| 文章互相競爭 | 多頁服務同一 intent | Consolidate／differentiate／canonical review。 |
| 排名下降歸因演算法 | 只有時間相關 | 檢查 query mix、site、SERP、tracking、seasonality。 |
| 為長度而加內容 | 套固定字數 | 以 task completeness 與 original value 決定。 |
