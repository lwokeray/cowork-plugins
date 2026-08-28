"""Validate a Microsoft 365 Copilot Cowork skills-only plugin package."""

from __future__ import annotations

import argparse
import json
import re
import sys
import uuid
from pathlib import Path
from typing import Any

from PIL import Image


SKILL_NAME_RE = re.compile(r"^[a-z0-9]+(?:-[a-z0-9]+)*$")
FORBIDDEN_TERMS = (
    "ServiceNow",
    "Jira",
    "Confluence",
    "Okta",
    "CMDB",
    "password reset",
    "endpoint remediation",
    "production restart",
)
NEGATION_MARKERS = (
    "do not",
    "don't",
    "does not",
    "doesn't",
    "never",
    "no ",
    "without",
    "not ",
    "excluded",
    "exclude",
)
ALLOWED_MANIFEST_KEYS = {
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


def _read_frontmatter(path: Path) -> tuple[dict[str, str], list[str]]:
    errors: list[str] = []
    text = path.read_text(encoding="utf-8")
    if not text.startswith("---\n"):
        return {}, [f"{path}: missing YAML frontmatter opening delimiter"]
    parts = text.split("---", 2)
    if len(parts) < 3:
        return {}, [f"{path}: missing YAML frontmatter closing delimiter"]
    fields: dict[str, str] = {}
    for line in parts[1].splitlines():
        if not line.strip() or line.lstrip().startswith("#"):
            continue
        # Parse only top-level fields. Indented lines are block-scalar
        # continuations (for description: >-) or nested metadata.
        if line[:1].isspace():
            continue
        if ":" not in line:
            errors.append(f"{path}: invalid frontmatter line: {line}")
            continue
        key, value = line.split(":", 1)
        fields[key.strip()] = value.strip().strip('"')
    for required in ("name", "description"):
        if not fields.get(required):
            errors.append(f"{path}: missing frontmatter field {required}")
    return fields, errors


def _validate_icon(path: Path, expected: tuple[int, int], errors: list[str]) -> None:
    if not path.exists():
        errors.append(f"missing icon: {path.name}")
        return
    try:
        with Image.open(path) as image:
            if image.format != "PNG":
                errors.append(f"{path}: icon must be PNG")
            if image.size != expected:
                errors.append(f"{path}: expected {expected[0]}x{expected[1]}, found {image.size[0]}x{image.size[1]}")
    except Exception as exc:  # pragma: no cover - defensive boundary
        errors.append(f"{path}: cannot read icon: {exc}")


def validate_package(package_dir: Path) -> list[str]:
    errors: list[str] = []
    package_dir = package_dir.resolve()
    manifest_path = package_dir / "manifest.json"
    if not manifest_path.exists():
        return [f"missing manifest: {manifest_path}"]

    try:
        manifest: dict[str, Any] = json.loads(manifest_path.read_text(encoding="utf-8"))
    except json.JSONDecodeError as exc:
        return [f"manifest.json: invalid JSON: {exc}"]

    unexpected = set(manifest) - ALLOWED_MANIFEST_KEYS
    if unexpected:
        errors.append(f"manifest.json: unsupported root properties: {', '.join(sorted(unexpected))}")
    if manifest.get("manifestVersion") != "1.28":
        errors.append("manifest.json: manifestVersion must be 1.28")
    if not isinstance(manifest.get("version"), str) or not manifest["version"]:
        errors.append("manifest.json: version must be a non-empty string")
    try:
        uuid.UUID(str(manifest.get("id")))
    except (ValueError, AttributeError, TypeError):
        errors.append("manifest.json: id must be a valid GUID")

    developer = manifest.get("developer")
    if not isinstance(developer, dict):
        errors.append("manifest.json: developer must be an object")
    else:
        for field in ("name", "websiteUrl", "privacyUrl", "termsOfUseUrl"):
            if not developer.get(field):
                errors.append(f"manifest.json: developer.{field} is required")

    icons = manifest.get("icons")
    if not isinstance(icons, dict):
        errors.append("manifest.json: icons must be an object")
    else:
        if icons.get("color") != "color.png":
            errors.append("manifest.json: icons.color must be color.png")
        if icons.get("outline") != "outline.png":
            errors.append("manifest.json: icons.outline must be outline.png")
    _validate_icon(package_dir / "color.png", (192, 192), errors)
    _validate_icon(package_dir / "outline.png", (32, 32), errors)

    if "agentConnectors" in manifest:
        errors.append("manifest.json: skills-only package must not declare agentConnectors")

    skills = manifest.get("agentSkills")
    if not isinstance(skills, list) or not skills:
        errors.append("manifest.json: agentSkills must be a non-empty array")
        skills = []
    if len(skills) > 20:
        errors.append("manifest.json: agentSkills cannot contain more than 20 entries")

    seen_folders: set[str] = set()
    for index, entry in enumerate(skills):
        if not isinstance(entry, dict) or not isinstance(entry.get("folder"), str):
            errors.append(f"manifest.json: agentSkills[{index}].folder is required")
            continue
        folder = entry["folder"]
        if not folder.startswith("./") or ".." in Path(folder).parts:
            errors.append(f"manifest.json: agentSkills[{index}].folder must be a safe package-relative path")
            continue
        if folder in seen_folders:
            errors.append(f"manifest.json: duplicate skill folder: {folder}")
            continue
        seen_folders.add(folder)
        skill_dir = package_dir / folder[2:]
        skill_file = skill_dir / "SKILL.md"
        if not skill_file.exists():
            errors.append(f"{folder}: missing SKILL.md")
            continue
        fields, frontmatter_errors = _read_frontmatter(skill_file)
        errors.extend(frontmatter_errors)
        skill_name = fields.get("name", "")
        if skill_name != skill_dir.name:
            errors.append(f"{skill_file}: name must match folder name {skill_dir.name}")
        if skill_name and not SKILL_NAME_RE.fullmatch(skill_name):
            errors.append(f"{skill_file}: name must be kebab-case")
        if fields.get("description", "") and len(fields["description"]) > 1024:
            errors.append(f"{skill_file}: description exceeds 1024 characters")

    for path in package_dir.rglob("*"):
        if not path.is_file() or ".git" in path.parts:
            continue
        try:
            text = path.read_text(encoding="utf-8")
        except UnicodeDecodeError:
            continue
        for line in text.splitlines():
            normalized = line.casefold()
            for term in FORBIDDEN_TERMS:
                position = normalized.find(term.casefold())
                if position < 0:
                    continue
                context = normalized[max(0, position - 80): position + len(term) + 80]
                if any(marker in context for marker in NEGATION_MARKERS):
                    continue
                errors.append(f"forbidden scope term {term!r} found in {path.relative_to(package_dir)}")

    return errors


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("package", type=Path, help="package directory to validate")
    args = parser.parse_args()
    errors = validate_package(args.package)
    if errors:
        print("Plugin validation failed:", file=sys.stderr)
        for error in errors:
            print(f"- {error}", file=sys.stderr)
        return 1
    print(f"Plugin validation passed: {args.package.resolve()}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
