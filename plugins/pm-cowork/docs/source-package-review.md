# Source and design review

本 package 的執行格式以 Microsoft 365 Copilot Cowork 官方規格為唯一部署依據；Kimi、Claude 與 ChatGPT Skills 僅用來改善 `SKILL.md` 的可觸發性、完整度、可重用性與安全性，不引入它們各自的 plugin manifest 或 runtime-specific frontmatter。

## 採用的設計原則

| 來源 | 採用內容 | 在本 package 的實作 |
|---|---|---|
| Microsoft 365 Copilot Cowork | app manifest v1.28、根目錄圖示、`agentSkills`、最多 20 Skills、可上傳 ZIP | `manifest.json`、192×192 / 32×32 PNG、16 個 `skills/<name>/SKILL.md`；部署 ZIP 只包含允許項目 |
| Microsoft Work IQ | 先探索 path/schema、唯讀取得、mutation、action 與 read-back 的工具責任 | 內部執行規則明確區分讀取、建立、更新、刪除、外部動作與驗證；工具名稱不出現在使用者可見章節 |
| Agent Skills open standard | kebab-case `name`、具體 `description`、Markdown 指令與 examples | 每個 Skill 以 YAML frontmatter + 完整 Markdown playbook 封裝 |
| Kimi Skills | directory/flat skill、觸發描述、可重複 SOP 與單檔模式 | 選用每個能力只含一份 `SKILL.md` 的 Monolithic Prompt Packing，將流程、契約、範例與例外放在同檔 |
| Claude Skills | `description` 同時說明做什麼與何時使用、按需載入、明確 examples 與 skill trust boundary | 每個 frontmatter 都含正向觸發與排除邊界；內文把外部內容視為不受信任資料 |
| ChatGPT Skills | reusable/shareable workflow、instructions、examples、supporting governance | 強化完成定義、穩定輸出契約、例外處理與 workspace 級治理可審查性 |

## 明確未採用

- 不包含 `.claude-plugin/plugin.json`、Claude agents、hooks 或 Claude-specific tool permissions。
- 不包含 Codex plugin manifest、OpenAI plugin metadata 或 Codex runtime 設定。
- 不包含 Kimi-specific `type`、`whenToUse`、arguments 或 flow frontmatter。
- 不在部署 ZIP 中包含 prompts、tests、docs、scripts、references 或外層資料夾。
- 不將不同產品的 plugin schema 混入 Microsoft Teams / Microsoft 365 manifest。

## 來源

- Microsoft: <https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-plugin-development>
- Microsoft Work IQ tool reference: <https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/work-iq/mcp/tool-reference>
- Kimi Agent Skills: <https://www.kimi.com/code/docs/en/kimi-code-cli/customization/skills.html>
- Anthropic Agent Skills: <https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview>
- OpenAI Skills in ChatGPT: <https://help.openai.com/en/articles/20001066-skills-in-chatgpt>
