#!/usr/bin/env python3
"""Marketing Cowork skills-only package 靜態驗證。"""

from __future__ import annotations

import json
import re
import struct
import sys
import zipfile
from pathlib import Path

import yaml


WORK_IQ_TOOLS = {
    "ask",
    "fetch",
    "fetch_blob",
    "create_entity",
    "update_entity",
    "delete_entity",
    "do_action",
    "call_function",
    "list_agents",
    "get_schema",
    "search_paths",
}

REQUIRED_SECTIONS = {
    "## Overview",
    "## When to Use",
    "## When NOT to Use",
    "## Quick Start",
    "## Core Instructions",
    "## Output Format",
    "## Work IQ Tool Rules",
    "## Examples",
    "## Guardrails",
    "## Common Issues",
}

FORBIDDEN_PLACEHOLDERS = {
    "TODO",
    "TBD",
    "待補",
    "Lorem ipsum",
}


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
        expected = item.get("expected")
        if not isinstance(expected, list) or len(expected) < 3:
            fail(f"Skill eval {item.get('id')} 至少需要三項 expected behaviors")


def validate_zip(package: Path, archive_path: Path, expected_skills: set[str]) -> None:
    if not archive_path.is_file():
        fail(f"部署 ZIP 不存在：{archive_path}")
    with zipfile.ZipFile(archive_path) as archive:
        names = set(archive.namelist())
        required = {"manifest.json", "color.png", "outline.png"}
        expected = {f"skills/{skill}/SKILL.md" for skill in expected_skills}
        if missing := (required | expected) - names:
            fail(f"部署 ZIP 缺少項目：{', '.join(sorted(missing))}")
        if any(name.startswith("marketing-cowork/") for name in names):
            fail("部署 ZIP 不得包含外層 marketing-cowork 目錄")
        allowed = required | {"skills/"} | expected | {
            f"skills/{skill}/" for skill in expected_skills
        }
        if unexpected := names - allowed:
            fail(f"部署 ZIP 包含非預期項目：{', '.join(sorted(unexpected))}")
        for entry in required | expected:
            if archive.read(entry) != (package / entry).read_bytes():
                fail(f"部署 ZIP 內容過期或不一致：{entry}")


def main() -> None:
    if len(sys.argv) not in (1, 2, 3):
        fail("用法：validate_package.py [package-directory] [deployment-zip]")
    package = Path(sys.argv[1] if len(sys.argv) >= 2 else "marketing-cowork")
    manifest_path = package / "manifest.json"
    if not manifest_path.is_file():
        fail("manifest.json 不存在")
    manifest = json.loads(manifest_path.read_text(encoding="utf-8"))

    allowed_root = {
        "$schema",
        "manifestVersion",
        "version",
        "id",
        "developer",
        "name",
        "description",
        "icons",
        "accentColor",
        "agentSkills",
    }
    if unknown := set(manifest) - allowed_root:
        fail(f"manifest 包含不支援的根欄位：{', '.join(sorted(unknown))}")
    if manifest.get("manifestVersion") != "1.28":
        fail("manifestVersion 必須為 1.28")
    if manifest.get("$schema") != "https://developer.microsoft.com/json-schemas/teams/v1.28/MicrosoftTeams.schema.json":
        fail("manifest schema 必須指向 Teams v1.28")
    if not re.fullmatch(
        r"[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}",
        str(manifest.get("id")),
    ):
        fail("manifest id 必須為小寫 GUID")
    if not re.fullmatch(r"#[0-9A-Fa-f]{6}", str(manifest.get("accentColor"))):
        fail("accentColor 必須為 hex color")
    if len(manifest["name"]["short"]) > 30:
        fail("short name 不得超過 30 字元")
    if len(manifest["name"]["full"]) > 100:
        fail("full name 不得超過 100 字元")
    if len(manifest["description"]["short"]) > 80:
        fail("short description 不得超過 80 字元")
    if len(manifest["description"]["full"]) > 4000:
        fail("full description 不得超過 4000 字元")

    for icon, expected in (("color.png", (192, 192)), ("outline.png", (32, 32))):
        path = package / icon
        if not path.is_file() or png_size(path) != expected:
            fail(f"{icon} 必須存在且尺寸為 {expected[0]}×{expected[1]}")

    skills = manifest.get("agentSkills")
    if not isinstance(skills, list) or not 1 <= len(skills) <= 20:
        fail("agentSkills 必須包含 1 至 20 個項目")

    folders: set[str] = set()
    names: set[str] = set()
    for entry in skills:
        if not isinstance(entry, dict) or set(entry) != {"folder"}:
            fail("每個 agentSkills 項目只能包含 folder")
        folder = entry.get("folder", "")
        if not isinstance(folder, str) or not folder.startswith("./skills/") or folder in folders:
            fail(f"Skill folder 無效或重複：{folder}")
        folders.add(folder)
        skill_dir = package / folder.removeprefix("./")
        skill_path = skill_dir / "SKILL.md"
        if not skill_path.is_file():
            fail(f"缺少 {skill_path}")
        if any(path.name != "SKILL.md" for path in skill_dir.iterdir() if path.is_file()):
            fail(f"{skill_dir} 必須採單檔平鋪，不得加入其他檔案")
        if any(path.is_dir() for path in skill_dir.iterdir()):
            fail(f"{skill_dir} 必須採 Monolithic Prompt Packing，不得依賴子目錄")

        body = skill_path.read_text(encoding="utf-8")
        frontmatter = parse_frontmatter(body, skill_path)
        skill_name = frontmatter.get("name")
        description = frontmatter.get("description")
        metadata = frontmatter.get("metadata")
        if skill_name != skill_dir.name or not re.fullmatch(
            r"[a-z0-9]+(?:-[a-z0-9]+)*", str(skill_name)
        ):
            fail(f"{skill_path} name 必須等於 kebab-case folder name")
        if (
            not isinstance(description, str)
            or not 1 <= len(description.strip()) <= 1024
            or not re.search(r"[\u4e00-\u9fff]", description)
        ):
            fail(f"{skill_path} description 必須是 1 至 1024 字元的繁體中文描述")
        if not isinstance(metadata, dict) or metadata.get("version") != manifest["version"]:
            fail(f"{skill_path} version 必須與 manifest 相同")
        if metadata.get("author") != "lwokeray":
            fail(f"{skill_path} author 必須為 lwokeray")

        headings = set(re.findall(r"^## .+$", body, re.MULTILINE))
        if missing_sections := REQUIRED_SECTIONS - headings:
            fail(f"{skill_path} 缺少完整章節：{', '.join(sorted(missing_sections))}")
        if len(body.encode("utf-8")) < 6500:
            fail(f"{skill_path} 內容過短，未達完整 Skill 規格")
        if not any(re.search(rf"`{re.escape(tool)}`", body) for tool in WORK_IQ_TOOLS):
            fail(f"{skill_path} 必須明確引用 Cowork 內建 Work IQ MCP tool")
        if not re.search(r"核准|approval|Approval", body):
            fail(f"{skill_path} 缺少核准邊界")
        if not re.search(r"未知|Unknown|unknown", body):
            fail(f"{skill_path} 缺少未知資訊處理")
        if placeholder := next((item for item in FORBIDDEN_PLACEHOLDERS if item in body), None):
            fail(f"{skill_path} 包含未完成 placeholder：{placeholder}")
        if skill_name in names:
            fail(f"Skill name 重複：{skill_name}")
        names.add(str(skill_name))

    skills_root = package / "skills"
    actual_skill_dirs = {path.name for path in skills_root.iterdir() if path.is_dir()}
    if actual_skill_dirs != names:
        fail(f"skills 目錄與 manifest 不一致：{sorted(actual_skill_dirs ^ names)}")
    if any(path.is_file() for path in skills_root.iterdir()):
        fail("skills 根目錄不得包含鬆散檔案")

    validate_evals(package, names)
    if len(sys.argv) == 3:
        validate_zip(package, Path(sys.argv[2]), names)

    print(f"PASS: {package} 包含 {len(skills)} 個完整單檔繁中 Marketing Skills")


if __name__ == "__main__":
    main()
