#!/usr/bin/env python3
"""Static checks for the skills-only Copilot Cowork package."""

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
    "create_entity",
    "update_entity",
    "delete_entity",
    "do_action",
    "call_function",
    "list_agents",
    "get_schema",
    "search_paths",
}


def fail(message: str) -> None:
    print(f"FAIL: {message}")
    raise SystemExit(1)


def frontmatter(text: str, path: Path) -> dict[str, object]:
    if not text.startswith("---\n"):
        fail(f"{path} has no YAML frontmatter")
    match = re.match(r"^---\n(.*?)\n---\n", text, re.DOTALL)
    if not match:
        fail(f"{path} has unclosed YAML frontmatter")
    try:
        parsed = yaml.safe_load(match.group(1))
    except yaml.YAMLError as error:
        fail(f"{path} has invalid YAML frontmatter: {error}")
    if not isinstance(parsed, dict):
        fail(f"{path} frontmatter must be a mapping")
    return parsed


def png_size(path: Path) -> tuple[int, int]:
    with path.open("rb") as image:
        header = image.read(24)
    if header[:8] != b"\x89PNG\r\n\x1a\n" or header[12:16] != b"IHDR":
        fail(f"{path} is not a PNG with an IHDR header")
    return struct.unpack(">II", header[16:24])


def validate_deployment_zip(package: Path, archive_path: Path, expected_skills: set[str]) -> None:
    if not archive_path.is_file():
        fail(f"deployment archive is missing: {archive_path}")
    with zipfile.ZipFile(archive_path) as archive:
        names = set(archive.namelist())
        required = {"manifest.json", "color.png", "outline.png"}
        missing = required - names
        if missing:
            fail(f"deployment archive is missing root entries: {', '.join(sorted(missing))}")
        if any(name.startswith("sales-cowork/") for name in names):
            fail("deployment archive must not contain an enclosing sales-cowork directory")
        expected = {f"skills/{skill}/SKILL.md" for skill in expected_skills}
        if not expected.issubset(names):
            fail("deployment archive does not contain every manifest skill")
        allowed = required | {"skills/"} | expected | {f"skills/{skill}/" for skill in expected_skills}
        unexpected = names - allowed
        if unexpected:
            fail(f"deployment archive has unexpected entries: {', '.join(sorted(unexpected))}")
        expected_files = {"manifest.json", "color.png", "outline.png"} | expected
        for entry in expected_files:
            source_path = package / entry
            if archive.read(entry) != source_path.read_bytes():
                fail(f"deployment archive content is stale or mismatched: {entry}")


def main() -> None:
    if len(sys.argv) not in (1, 2, 3):
        fail("usage: validate_package.py [package-directory] [deployment-zip]")
    package = Path(sys.argv[1] if len(sys.argv) >= 2 else "sales-cowork")
    manifest_path = package / "manifest.json"
    if not manifest_path.is_file():
        fail("manifest.json is missing")
    manifest = json.loads(manifest_path.read_text(encoding="utf-8"))

    required = {"$schema", "manifestVersion", "version", "id", "developer", "name", "description", "icons", "accentColor", "agentSkills"}
    unknown = set(manifest) - required
    if unknown:
        fail(f"unsupported manifest root fields: {', '.join(sorted(unknown))}")
    if manifest["manifestVersion"] != "1.28":
        fail("manifestVersion must be 1.28")
    if not re.fullmatch(r"[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}", manifest["id"]):
        fail("manifest id must be a lowercase GUID")
    if not re.fullmatch(r"#[0-9A-Fa-f]{6}", manifest["accentColor"]):
        fail("accentColor must be a hex color")
    if len(manifest["name"]["short"]) > 30:
        fail("short name must be 30 characters or fewer")
    if len(manifest["description"]["short"]) > 80:
        fail("short description must be 80 characters or fewer")

    for icon, expected_size in (("color.png", (192, 192)), ("outline.png", (32, 32))):
        icon_path = package / icon
        if not icon_path.is_file():
            fail(f"{icon} is missing")
        if png_size(icon_path) != expected_size:
            fail(f"{icon} must be {expected_size[0]}×{expected_size[1]} pixels")

    skills = manifest["agentSkills"]
    if not skills:
        fail("agentSkills must not be empty")
    if len(skills) > 20:
        fail("agentSkills can contain at most 20 entries")
    folders: set[str] = set()
    skill_names: set[str] = set()
    for entry in skills:
        if set(entry) != {"folder"}:
            fail("each agentSkills entry must contain only folder")
        folder = entry.get("folder", "")
        if not isinstance(folder, str) or not folder.startswith("./skills/") or len(folder) > 256:
            fail(f"invalid skill folder: {folder}")
        if folder in folders:
            fail(f"duplicate skill folder: {folder}")
        folders.add(folder)
        skill_dir = package / folder.removeprefix("./")
        skill_path = skill_dir / "SKILL.md"
        if not skill_path.is_file():
            fail(f"missing {skill_path}")
        body = skill_path.read_text(encoding="utf-8")
        metadata = frontmatter(body, skill_path)
        skill_name = metadata.get("name")
        description = metadata.get("description")
        skill_metadata = metadata.get("metadata")
        if skill_name != skill_dir.name:
            fail(f"{skill_path} name must equal folder name")
        if not isinstance(skill_name, str) or not 1 <= len(skill_name) <= 64:
            fail(f"{skill_path} name must contain 1 to 64 characters")
        if not re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*", skill_name):
            fail(f"{skill_path} has invalid kebab-case skill name")
        if not isinstance(description, str) or not 1 <= len(description.strip()) <= 1024:
            fail(f"{skill_path} description must contain 1 to 1024 characters")
        if not isinstance(skill_metadata, dict):
            fail(f"{skill_path} metadata must be a mapping")
        if skill_metadata.get("version") != manifest["version"]:
            fail(f"{skill_path} version must match manifest version")
        referenced_tools = {
            tool for tool in WORK_IQ_TOOLS if re.search(rf"`{re.escape(tool)}`", body)
        }
        if not referenced_tools:
            fail(f"{skill_path} must explicitly reference at least one built-in Work IQ MCP tool")
        if skill_name in skill_names:
            fail(f"duplicate skill name: {skill_name}")
        skill_names.add(skill_name)

    if len(sys.argv) == 3:
        validate_deployment_zip(package, Path(sys.argv[2]), skill_names)

    print(f"PASS: {package} has {len(skills)} valid skill entries and required package files")


if __name__ == "__main__":
    main()
