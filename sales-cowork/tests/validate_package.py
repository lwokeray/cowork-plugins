#!/usr/bin/env python3
"""Static checks for the skills-only Copilot Cowork package."""

from __future__ import annotations

import json
import re
import struct
import sys
from pathlib import Path


def fail(message: str) -> None:
    print(f"FAIL: {message}")
    raise SystemExit(1)


def frontmatter_value(text: str, field: str) -> str | None:
    match = re.search(rf"^{re.escape(field)}:\s*([^\n]+)$", text, re.MULTILINE)
    return match.group(1).strip().strip('"') if match else None


def png_size(path: Path) -> tuple[int, int]:
    with path.open("rb") as image:
        header = image.read(24)
    if header[:8] != b"\x89PNG\r\n\x1a\n" or header[12:16] != b"IHDR":
        fail(f"{path} is not a PNG with an IHDR header")
    return struct.unpack(">II", header[16:24])


def main() -> None:
    package = Path(sys.argv[1] if len(sys.argv) == 2 else "sales-cowork")
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
    for entry in skills:
        folder = entry.get("folder", "")
        if not folder.startswith("./skills/"):
            fail(f"invalid skill folder: {folder}")
        skill_dir = package / folder.removeprefix("./")
        skill_path = skill_dir / "SKILL.md"
        if not skill_path.is_file():
            fail(f"missing {skill_path}")
        body = skill_path.read_text(encoding="utf-8")
        if not body.startswith("---\n"):
            fail(f"{skill_path} has no YAML frontmatter")
        skill_name = frontmatter_value(body, "name")
        if skill_name != skill_dir.name:
            fail(f"{skill_path} name must equal folder name")
        if not re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*", skill_name or ""):
            fail(f"{skill_path} has invalid kebab-case skill name")
        if not frontmatter_value(body, "description"):
            fail(f"{skill_path} has no description")

    print(f"PASS: {package} has {len(skills)} valid skill entries and required package files")


if __name__ == "__main__":
    main()
