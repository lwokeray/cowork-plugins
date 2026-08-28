#!/usr/bin/env python3
"""Static validation for the Proposal Cowork skills-only app package."""

from __future__ import annotations

import json
import re
import struct
import sys
import tempfile
import zipfile
from pathlib import Path


REQUIRED_MANIFEST_FIELDS = {
    "$schema", "manifestVersion", "version", "id", "developer", "name",
    "description", "icons", "accentColor", "agentSkills",
}
REQUIRED_SECTIONS = (
    "## Single responsibility",
    "## Required inputs",
    "## Steps",
    "## Output contract",
    "## Stop conditions",
)


def fail(message: str) -> None:
    print(f"FAIL: {message}")
    raise SystemExit(1)


def png_size(path: Path) -> tuple[int, int]:
    with path.open("rb") as image:
        header = image.read(24)
    if header[:8] != b"\x89PNG\r\n\x1a\n" or header[12:16] != b"IHDR":
        fail(f"{path} is not a PNG with an IHDR header")
    return struct.unpack(">II", header[16:24])


def package_root(path: Path) -> tuple[Path, tempfile.TemporaryDirectory[str] | None]:
    if path.is_dir():
        return path, None
    if not zipfile.is_zipfile(path):
        fail(f"{path} is neither a package directory nor a ZIP")
    temporary = tempfile.TemporaryDirectory()
    with zipfile.ZipFile(path) as archive:
        names = archive.namelist()
        top_level = {name.split("/", 1)[0] for name in names if name}
        required = {"manifest.json", "color.png", "outline.png", "skills"}
        if not required.issubset(top_level) or top_level - required:
            fail("deployment ZIP must contain only manifest.json, color.png, outline.png, and skills/ at its root")
        archive.extractall(temporary.name)
    return Path(temporary.name), temporary


def frontmatter_name(body: str) -> str | None:
    match = re.search(r"^name:\s*([^\n]+)$", body, re.MULTILINE)
    return match.group(1).strip().strip('"') if match else None


def validate(path: Path) -> None:
    root, temporary = package_root(path)
    try:
        manifest_path = root / "manifest.json"
        if not manifest_path.is_file():
            fail("manifest.json is missing")
        manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
        unknown = set(manifest) - REQUIRED_MANIFEST_FIELDS
        missing = REQUIRED_MANIFEST_FIELDS - set(manifest)
        if unknown or missing:
            fail(f"manifest fields invalid; unknown={sorted(unknown)}, missing={sorted(missing)}")
        if manifest["manifestVersion"] != "1.28":
            fail("manifestVersion must be 1.28")
        if not re.fullmatch(r"\d+\.\d+\.\d+", manifest["version"]):
            fail("manifest version must be semantic versioning")
        if not re.fullmatch(r"[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}", manifest["id"]):
            fail("manifest id must be a lowercase GUID")
        if len(manifest["name"]["short"]) > 30:
            fail("short name must be 30 characters or fewer")
        if len(manifest["description"]["short"]) > 80:
            fail("short description must be 80 characters or fewer")
        if not re.fullmatch(r"#[0-9A-Fa-f]{6}", manifest["accentColor"]):
            fail("accentColor must be a hex value")

        for icon, expected_size in (("color.png", (192, 192)), ("outline.png", (32, 32))):
            if png_size(root / icon) != expected_size:
                fail(f"{icon} must be {expected_size[0]}x{expected_size[1]}")

        entries = manifest["agentSkills"]
        if len(entries) != 18:
            fail("Proposal Cowork must declare exactly 18 agentSkills")
        folders = [entry.get("folder", "") for entry in entries]
        if len(set(folders)) != len(folders) or any(not folder.startswith("./skills/") for folder in folders):
            fail("agentSkills must contain unique ./skills/ folders")

        declared = {folder.removeprefix("./skills/") for folder in folders}
        found = {skill.parent.name for skill in (root / "skills").glob("*/SKILL.md")}
        if declared != found:
            fail(f"manifest skills and package skills differ; declared={sorted(declared)}, found={sorted(found)}")

        for skill_name in sorted(found):
            skill_path = root / "skills" / skill_name / "SKILL.md"
            body = skill_path.read_text(encoding="utf-8")
            if not body.startswith("---\n") or frontmatter_name(body) != skill_name:
                fail(f"{skill_path} must have matching YAML frontmatter name")
            if not re.search(r"^description:\s*[|>]", body, re.MULTILINE):
                fail(f"{skill_path} must have a routing description")
            for section in REQUIRED_SECTIONS:
                if section not in body:
                    fail(f"{skill_path} is missing {section}")
            if "pursuit_id" not in body or "artifact_version" not in body:
                fail(f"{skill_path} must preserve pursuit_id and artifact_version in its output contract")

        red_flag = (root / "skills" / "proposal-red-flag-review" / "SKILL.md").read_text(encoding="utf-8")
        if "asks to red-team" in red_flag:
            fail("red-flag routing must not overlap named Red Team review")
        print(f"PASS: {path} contains a valid 18-skill Proposal Cowork package")
    finally:
        if temporary:
            temporary.cleanup()


if __name__ == "__main__":
    if len(sys.argv) != 2:
        fail("usage: validate_package.py <package-directory-or-zip>")
    validate(Path(sys.argv[1]))
