#!/usr/bin/env python3
"""Finance Cowork skills-only deployment package static validation."""

from __future__ import annotations

import json
import re
import struct
import sys
import zipfile
from pathlib import Path, PurePosixPath

import yaml


WORK_IQ_TOOLS = {
    "ask", "list_agents", "search_paths", "get_schema", "fetch",
    "create_entity", "update_entity", "delete_entity", "do_action", "call_function",
}

REQUIRED_SECTIONS = {
    "## Overview",
    "## When to Use",
    "## When NOT to Use",
    "## Quick Start",
    "## Core Instructions",
    "## Examples",
    "## Guardrails",
    "## Common Issues",
}

FORBIDDEN_PLACEHOLDERS = {
    "TODO", "FIXME", "TBD_CONTENT", "INSERT CONTENT", "LOREM IPSUM",
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


def skill_paths(manifest: dict[str, object], package: Path) -> dict[str, Path]:
    raw_skills = manifest.get("agentSkills")
    if not isinstance(raw_skills, list) or not 1 <= len(raw_skills) <= 20:
        fail("agentSkills 必須包含 1 至 20 個項目")

    result: dict[str, Path] = {}
    for entry in raw_skills:
        if not isinstance(entry, dict) or set(entry) != {"folder"}:
            fail("每個 agentSkills 項目只能包含 folder")
        folder = entry.get("folder")
        if not isinstance(folder, str) or not re.fullmatch(r"\./skills/[a-z0-9]+(?:-[a-z0-9]+)*", folder):
            fail(f"Skill folder 無效：{folder}")
        skill_id = folder.removeprefix("./skills/")
        if skill_id in result:
            fail(f"Skill folder 重複：{folder}")
        result[skill_id] = package / "skills" / skill_id / "SKILL.md"
    return result


def validate_manifest(manifest: dict[str, object], package: Path) -> dict[str, Path]:
    allowed_root = {
        "$schema", "manifestVersion", "version", "id", "developer", "name",
        "description", "icons", "accentColor", "agentSkills",
    }
    if unknown := set(manifest) - allowed_root:
        fail(f"manifest 包含不支援的根欄位：{', '.join(sorted(unknown))}")
    if manifest.get("$schema") != "https://developer.microsoft.com/json-schemas/teams/v1.28/MicrosoftTeams.schema.json":
        fail("manifest $schema 必須使用 Teams v1.28 schema")
    if manifest.get("manifestVersion") != "1.28":
        fail("manifestVersion 必須為 1.28")
    version = manifest.get("version")
    if not isinstance(version, str) or not re.fullmatch(r"\d+\.\d+\.\d+", version):
        fail("manifest version 必須是三段數字版本")
    manifest_id = manifest.get("id")
    if not isinstance(manifest_id, str) or not re.fullmatch(
        r"[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}", manifest_id
    ):
        fail("manifest id 必須為小寫 GUID")
    if not re.fullmatch(r"#[0-9A-Fa-f]{6}", str(manifest.get("accentColor", ""))):
        fail("accentColor 必須為六位 hex color")

    name = manifest.get("name")
    descriptions = manifest.get("description")
    icons = manifest.get("icons")
    if not isinstance(name, dict) or set(name) != {"short", "full"}:
        fail("manifest name 必須只包含 short 與 full")
    if not isinstance(name["short"], str) or not 1 <= len(name["short"]) <= 30:
        fail("short name 必須為 1 至 30 字元")
    if not isinstance(name["full"], str) or not 1 <= len(name["full"]) <= 100:
        fail("full name 必須為 1 至 100 字元")
    if not isinstance(descriptions, dict) or set(descriptions) != {"short", "full"}:
        fail("manifest description 必須只包含 short 與 full")
    if not isinstance(descriptions["short"], str) or not 1 <= len(descriptions["short"]) <= 80:
        fail("short description 必須為 1 至 80 字元")
    if not isinstance(descriptions["full"], str) or not 1 <= len(descriptions["full"]) <= 4000:
        fail("full description 必須為 1 至 4000 字元")
    if icons != {"color": "color.png", "outline": "outline.png"}:
        fail("icons 必須精確指向 color.png 與 outline.png")

    developer = manifest.get("developer")
    required_developer = {"name", "websiteUrl", "privacyUrl", "termsOfUseUrl"}
    if not isinstance(developer, dict) or set(developer) != required_developer:
        fail("developer 欄位不完整或包含非預期欄位")
    for field in required_developer - {"name"}:
        if not isinstance(developer[field], str) or not developer[field].startswith("https://"):
            fail(f"developer.{field} 必須是 HTTPS URL")

    for icon, expected in (("color.png", (192, 192)), ("outline.png", (32, 32))):
        path = package / icon
        if not path.is_file() or png_size(path) != expected:
            fail(f"{icon} 必須存在且尺寸為 {expected[0]}×{expected[1]}")
    return skill_paths(manifest, package)


def validate_skill(skill_id: str, path: Path, manifest_version: str) -> None:
    if not path.is_file():
        fail(f"缺少 {path}")
    text = path.read_text(encoding="utf-8")
    frontmatter = parse_frontmatter(text, path)
    if set(frontmatter) != {"name", "description", "metadata"}:
        fail(f"{path} frontmatter 必須只包含 name、description、metadata")
    if frontmatter.get("name") != skill_id:
        fail(f"{path} name 必須等於 folder name")
    description = frontmatter.get("description")
    if not isinstance(description, str) or not 1 <= len(description.strip()) <= 1024:
        fail(f"{path} description 必須為 1 至 1024 字元")
    if not re.search(r"[\u4e00-\u9fff]", description):
        fail(f"{path} description 必須包含繁體中文用途與排除條件")
    metadata = frontmatter.get("metadata")
    if not isinstance(metadata, dict) or set(metadata) != {"author", "version"}:
        fail(f"{path} metadata 必須只包含 author 與 version")
    if metadata.get("author") != "lwokeray" or metadata.get("version") != manifest_version:
        fail(f"{path} metadata author／version 與package不一致")

    headings = set(re.findall(r"^## .+$", text, re.MULTILINE))
    if missing := REQUIRED_SECTIONS - headings:
        fail(f"{path} 缺少必要章節：{', '.join(sorted(missing))}")
    if "### Available MCP Tools" not in text:
        fail(f"{path} 缺少 Available MCP Tools")
    if len(text.encode("utf-8")) < 6500:
        fail(f"{path} 內容過短，未達Monolithic Prompt Packing完整度")
    if not re.search(r"(?im)^###? .*Stop Conditions", text):
        fail(f"{path} 缺少Stop Conditions")
    if not re.search(r"(?im)^###? .*Output Contract", text):
        fail(f"{path} 缺少Output Contract")
    if not re.search(r"(?im)^###? .*User Communication and Completion Check", text):
        fail(f"{path} 缺少User Communication and Completion Check")
    for placeholder in FORBIDDEN_PLACEHOLDERS:
        if placeholder in text.upper():
            fail(f"{path} 包含未完成placeholder：{placeholder}")
    for required_tool in {"ask", "search_paths", "get_schema", "fetch"}:
        if f"`{required_tool}`" not in text:
            fail(f"{path} 未說明必要Work IQ工具：{required_tool}")


def validate_evals(package: Path, expected_skills: set[str]) -> None:
    path = package / "tests" / "skill-evals.json"
    if not path.is_file():
        fail("tests/skill-evals.json 不存在")
    payload = json.loads(path.read_text(encoding="utf-8"))
    if payload.get("locale") != "zh-TW" or payload.get("supported_app") != "Copilot Cowork":
        fail("Skill evals 必須限定 zh-TW 與 Copilot Cowork")
    evals = payload.get("evals")
    if not isinstance(evals, list):
        fail("Skill evals 必須為list")
    ids = {item.get("id") for item in evals if isinstance(item, dict)}
    if ids != expected_skills:
        fail(f"Skill eval IDs 與manifest不一致：{sorted(ids ^ expected_skills)}")
    for item in evals:
        if not isinstance(item.get("prompt"), str) or not item["prompt"].strip():
            fail(f"Skill eval {item.get('id')} 缺少prompt")
        expected = item.get("expected")
        if not isinstance(expected, list) or len(expected) < 3:
            fail(f"Skill eval {item.get('id')} expected behaviors不足")


def validate_archive(package: Path, archive_path: Path, skill_ids: set[str]) -> None:
    if not archive_path.is_file():
        fail(f"部署ZIP不存在：{archive_path}")
    required_files = {"manifest.json", "color.png", "outline.png"} | {
        f"skills/{skill_id}/SKILL.md" for skill_id in skill_ids
    }
    with zipfile.ZipFile(archive_path) as archive:
        file_names = {info.filename for info in archive.infolist() if not info.is_dir()}
        if file_names != required_files:
            missing = sorted(required_files - file_names)
            extra = sorted(file_names - required_files)
            fail(f"部署ZIP檔案不精確；missing={missing} extra={extra}")
        for name in file_names:
            path = PurePosixPath(name)
            if path.is_absolute() or ".." in path.parts or name.startswith("finance-cowork/"):
                fail(f"部署ZIP包含不安全或多餘外層路徑：{name}")
            if archive.read(name) != (package / name).read_bytes():
                fail(f"部署ZIP內容過期或與source不一致：{name}")


def main() -> None:
    if len(sys.argv) not in (1, 2, 3):
        fail("用法：validate_package.py [package-directory] [deployment-zip]")
    package = Path(sys.argv[1] if len(sys.argv) >= 2 else "finance-cowork")
    manifest_path = package / "manifest.json"
    if not manifest_path.is_file():
        fail("manifest.json 不存在")
    try:
        manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
    except (json.JSONDecodeError, UnicodeDecodeError) as error:
        fail(f"manifest.json 無效：{error}")
    if not isinstance(manifest, dict):
        fail("manifest root必須為object")

    paths = validate_manifest(manifest, package)
    for skill_id, path in paths.items():
        validate_skill(skill_id, path, str(manifest["version"]))
    validate_evals(package, set(paths))
    if len(sys.argv) == 3:
        validate_archive(package, Path(sys.argv[2]), set(paths))
    print(f"PASS: Finance Cowork {manifest['version']} — {len(paths)} skills validated")


if __name__ == "__main__":
    main()
