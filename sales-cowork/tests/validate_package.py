#!/usr/bin/env python3
"""Sales Cowork skills-only package 與 Prompt Card 靜態驗證。"""

from __future__ import annotations

import csv
import json
import re
import struct
import sys
import zipfile
from pathlib import Path

import yaml


WORK_IQ_TOOLS = {
    "ask", "fetch", "create_entity", "update_entity", "delete_entity",
    "do_action", "call_function", "list_agents", "get_schema", "search_paths",
}

REQUIRED_SECTIONS = {
    "## 概述", "## 適用情境", "## 不適用情境", "## 快速開始",
    "## 核心流程", "## 使用者溝通與完成檢查", "## Work IQ 工具規則",
    "## 範例", "## Guardrails", "## 常見問題",
}

PROMPT_COLUMNS = [
    "Title", "Description", "Display Prompt", "Prompt Text",
    "Products", "Department", "Task Type", "Locale",
]

TASK_TYPES = {
    "Analyze", "Assist", "Create", "Execute", "Schedule", "Understand",
    "Design", "Find", "Catch up", "Code", "Prepare", "Ask", "Edit", "Learn",
}

PROMPT_TECHNICAL_TERMS = {
    "Work IQ", "search_paths", "get_schema", "create_entity", "update_entity",
    "delete_entity", "do_action", "call_function", "list_agents",
}

PROMPT_PRODUCTS = {"Copilot work", "Copilot web"}
WORK_ONLY_PROMPTS = {"安排 Planner 銷售工作"}


def fail(message: str) -> None:
    print(f"FAIL: {message}")
    raise SystemExit(1)


def parse_frontmatter(text: str, path: Path) -> dict[str, object]:
    match = re.match(r"^---\n(.*?)\n---\n", text, re.DOTALL)
    if not match:
        fail(f"{path} 缺少或未關閉 YAML frontmatter")
    try:
        parsed = yaml.safe_load(match.group(1))
    except yaml.YAMLError as error:
        fail(f"{path} YAML frontmatter 無效：{error}")
    if not isinstance(parsed, dict):
        fail(f"{path} frontmatter 必須是 mapping")
    return parsed


def png_size(path: Path) -> tuple[int, int]:
    with path.open("rb") as image:
        header = image.read(24)
    if header[:8] != b"\x89PNG\r\n\x1a\n" or header[12:16] != b"IHDR":
        fail(f"{path} 不是有效 PNG")
    return struct.unpack(">II", header[16:24])


def validate_prompts(package: Path, expected_count: int) -> None:
    path = package / "prompts" / "prompt-cards.csv"
    if not path.is_file():
        fail("prompts/prompt-cards.csv 不存在")
    if not path.read_bytes().startswith(b"\xef\xbb\xbf"):
        fail("Prompt Card CSV 必須使用與官方範本一致的 UTF-8 BOM 編碼")
    with path.open("r", encoding="utf-8-sig", newline="") as handle:
        reader = csv.DictReader(handle)
        if reader.fieldnames != PROMPT_COLUMNS:
            fail("Prompt Card CSV 欄位與官方欄位順序不符")
        rows = list(reader)
    if len(rows) != expected_count:
        fail(f"Prompt Card 數量必須與 Skill 數量一致：{expected_count}")
    titles: set[str] = set()
    for index, row in enumerate(rows, start=2):
        if not 1 <= len(row["Title"]) <= 35:
            fail(f"Prompt Card 第 {index} 列 Title 超過 35 字元或為空")
        if not 1 <= len(row["Display Prompt"]) <= 132:
            fail(f"Prompt Card 第 {index} 列 Display Prompt 超過 132 字元或為空")
        if not 1 <= len(row["Prompt Text"]) <= 8000:
            fail(f"Prompt Card 第 {index} 列 Prompt Text 超過 8000 字元或為空")
        if len(row["Prompt Text"]) < 80:
            fail(f"Prompt Card 第 {index} 列 Prompt Text 過短，缺少完整使用情境")
        if not re.search(r"\{\{[^{}]*例如：[^{}]+\}\}", row["Prompt Text"]):
            fail(f"Prompt Card 第 {index} 列 Prompt Text 必須包含 {{{{欄位，例如：範例}}}} 格式")
        if "{{" in row["Display Prompt"] or "}}" in row["Display Prompt"]:
            fail(f"Prompt Card 第 {index} 列 Display Prompt 必須是固定短句，不得包含 Prompt Text 變數")
        if technical := sorted(term for term in PROMPT_TECHNICAL_TERMS if term in row["Prompt Text"]):
            fail(f"Prompt Card 第 {index} 列不得包含 Skill 內部工具名稱：{', '.join(technical)}")
        if len(row["Description"]) > 200:
            fail(f"Prompt Card 第 {index} 列 Description 超過 200 字元")
        products = {item.strip() for item in row["Products"].split(",") if item.strip()}
        if not products or not products.issubset(PROMPT_PRODUCTS):
            fail(f"Prompt Card 第 {index} 列 Products 包含不支援的匯入值")
        expected_products = {"Copilot work"} if row["Title"] in WORK_ONLY_PROMPTS else PROMPT_PRODUCTS
        if products != expected_products:
            fail(f"Prompt Card 第 {index} 列 Products 與工作所需介面不符")
        if row["Department"] != "銷售":
            fail(f"Prompt Card 第 {index} 列 Department 必須為銷售")
        if row["Task Type"] not in TASK_TYPES:
            fail(f"Prompt Card 第 {index} 列 Task Type 不在允許清單")
        if row["Locale"] != "zh-TW":
            fail(f"Prompt Card 第 {index} 列 Locale 必須為 zh-TW")
        if row["Title"] in titles:
            fail(f"Prompt Card Title 重複：{row['Title']}")
        titles.add(row["Title"])


def validate_evals(package: Path, expected_skills: set[str]) -> None:
    path = package / "tests" / "skill-evals.json"
    if not path.is_file():
        fail("tests/skill-evals.json 不存在")
    payload = json.loads(path.read_text(encoding="utf-8"))
    if payload.get("locale") != "zh-TW" or payload.get("supported_app") != "Copilot Cowork":
        fail("Skill evals 必須限定 zh-TW 與 Copilot Cowork")
    evals = payload.get("evals")
    if not isinstance(evals, list):
        fail("Skill evals 必須為 list")
    eval_ids = {item.get("id") for item in evals if isinstance(item, dict)}
    if eval_ids != expected_skills:
        fail(f"Skill eval IDs 與 manifest 不一致：{sorted(eval_ids ^ expected_skills)}")
    for item in evals:
        if not isinstance(item.get("prompt"), str) or not item["prompt"].strip():
            fail(f"Skill eval {item.get('id')} 缺少 prompt")
        if not isinstance(item.get("expected"), list) or not item["expected"]:
            fail(f"Skill eval {item.get('id')} 缺少 expected behaviors")


def validate_zip(package: Path, archive_path: Path, expected_skills: set[str]) -> None:
    if not archive_path.is_file():
        fail(f"部署 ZIP 不存在：{archive_path}")
    with zipfile.ZipFile(archive_path) as archive:
        names = set(archive.namelist())
        required = {"manifest.json", "color.png", "outline.png"}
        if missing := required - names:
            fail(f"部署 ZIP 缺少根項目：{', '.join(sorted(missing))}")
        if any(name.startswith("sales-cowork/") for name in names):
            fail("部署 ZIP 不得包含外層 sales-cowork 目錄")
        expected = {f"skills/{skill}/SKILL.md" for skill in expected_skills}
        if not expected.issubset(names):
            fail("部署 ZIP 未包含 manifest 中全部 Skills")
        allowed = required | {"skills/"} | expected | {f"skills/{skill}/" for skill in expected_skills}
        if unexpected := names - allowed:
            fail(f"部署 ZIP 包含非預期項目：{', '.join(sorted(unexpected))}")
        for entry in required | expected:
            if archive.read(entry) != (package / entry).read_bytes():
                fail(f"部署 ZIP 內容過期或不一致：{entry}")


def main() -> None:
    if len(sys.argv) not in (1, 2, 3):
        fail("用法：validate_package.py [package-directory] [deployment-zip]")
    package = Path(sys.argv[1] if len(sys.argv) >= 2 else "sales-cowork")
    manifest_path = package / "manifest.json"
    if not manifest_path.is_file():
        fail("manifest.json 不存在")
    manifest = json.loads(manifest_path.read_text(encoding="utf-8"))

    allowed_root = {"$schema", "manifestVersion", "version", "id", "developer", "name", "description", "icons", "accentColor", "agentSkills"}
    if unknown := set(manifest) - allowed_root:
        fail(f"manifest 包含不支援的根欄位：{', '.join(sorted(unknown))}")
    if manifest["manifestVersion"] != "1.28":
        fail("manifestVersion 必須為 1.28")
    if not re.fullmatch(r"[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}", manifest["id"]):
        fail("manifest id 必須為小寫 GUID")
    if not re.fullmatch(r"#[0-9A-Fa-f]{6}", manifest["accentColor"]):
        fail("accentColor 必須為 hex color")
    if len(manifest["name"]["short"]) > 30:
        fail("short name 不得超過 30 字元")
    if len(manifest["description"]["short"]) > 80:
        fail("short description 不得超過 80 字元")

    for icon, expected in (("color.png", (192, 192)), ("outline.png", (32, 32))):
        path = package / icon
        if not path.is_file() or png_size(path) != expected:
            fail(f"{icon} 必須存在且尺寸為 {expected[0]}×{expected[1]}")

    skills = manifest["agentSkills"]
    if not 1 <= len(skills) <= 20:
        fail("agentSkills 必須包含 1 至 20 個項目")
    folders: set[str] = set()
    names: set[str] = set()
    for entry in skills:
        if set(entry) != {"folder"}:
            fail("每個 agentSkills 項目只能包含 folder")
        folder = entry.get("folder", "")
        if not isinstance(folder, str) or not folder.startswith("./skills/") or folder in folders:
            fail(f"Skill folder 無效或重複：{folder}")
        folders.add(folder)
        skill_dir = package / folder.removeprefix("./")
        skill_path = skill_dir / "SKILL.md"
        if not skill_path.is_file():
            fail(f"缺少 {skill_path}")
        body = skill_path.read_text(encoding="utf-8")
        frontmatter = parse_frontmatter(body, skill_path)
        skill_name = frontmatter.get("name")
        description = frontmatter.get("description")
        metadata = frontmatter.get("metadata")
        if skill_name != skill_dir.name or not re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*", str(skill_name)):
            fail(f"{skill_path} name 必須等於 kebab-case folder name")
        if not isinstance(description, str) or not 1 <= len(description.strip()) <= 1024 or not re.search(r"[\u4e00-\u9fff]", description):
            fail(f"{skill_path} description 必須是 1 至 1024 字元的繁體中文描述")
        if not isinstance(metadata, dict) or metadata.get("version") != manifest["version"]:
            fail(f"{skill_path} version 必須與 manifest 相同")
        if missing_sections := REQUIRED_SECTIONS - set(re.findall(r"^## .+$", body, re.MULTILINE)):
            fail(f"{skill_path} 缺少完整章節：{', '.join(sorted(missing_sections))}")
        if len(body.encode("utf-8")) < 6500:
            fail(f"{skill_path} 內容過短，未達完整 Skill 規格")
        if not any(re.search(rf"`{re.escape(tool)}`", body) for tool in WORK_IQ_TOOLS):
            fail(f"{skill_path} 必須明確引用 Cowork 內建 Work IQ MCP tool")
        if skill_name in names:
            fail(f"Skill name 重複：{skill_name}")
        names.add(str(skill_name))

    actual_skill_dirs = {path.name for path in (package / "skills").iterdir() if path.is_dir()}
    if actual_skill_dirs != names:
        fail(f"skills 目錄與 manifest 不一致：{sorted(actual_skill_dirs ^ names)}")

    validate_prompts(package, len(skills))
    validate_evals(package, names)
    if len(sys.argv) == 3:
        validate_zip(package, Path(sys.argv[2]), names)

    print(f"PASS: {package} 包含 {len(skills)} 個完整繁中 Skills 與 {len(skills)} 張 Prompt Cards")


if __name__ == "__main__":
    main()
