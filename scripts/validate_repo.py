#!/usr/bin/env python3
"""Repository-wide validation for Microsoft 365 Copilot Cowork plugins."""

from __future__ import annotations

import json
import re
import subprocess
import uuid
from pathlib import Path
from typing import Any

import yaml
from PIL import Image

from prompt_cards import sync_cards, validate_cards


ROOT = Path(__file__).resolve().parent.parent
PLUGINS_ROOT = ROOT / "plugins"
SKILL_NAME_RE = re.compile(r"^[a-z0-9]+(?:-[a-z0-9]+)*$")
PLUGIN_NAME_RE = re.compile(r"^[a-z0-9]+(?:-[a-z0-9]+)*-cowork$")
SEMVER_RE = re.compile(r"^\d+\.\d+\.\d+$")
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
    "agentConnectors",
}


def parse_frontmatter(path: Path) -> tuple[dict[str, Any], str]:
    text = path.read_text(encoding="utf-8")
    if not text.startswith("---\n"):
        raise ValueError(f"{path}: missing YAML frontmatter")
    parts = text.split("---", 2)
    if len(parts) != 3:
        raise ValueError(f"{path}: invalid YAML frontmatter delimiters")
    data = yaml.safe_load(parts[1])
    if not isinstance(data, dict):
        raise ValueError(f"{path}: frontmatter must be an object")
    return data, parts[2].strip()


def validate_eval_contracts(
    plugin_dir: Path,
    plugin_ids: set[str],
    skill_names: set[str],
    manifest_version: str,
) -> list[str]:
    errors: list[str] = []
    plugin_id = plugin_dir.name
    try:
        cards_data = yaml.safe_load(
            (plugin_dir / "prompts" / "prompt-cards.yaml").read_text(encoding="utf-8")
        )
        cards = cards_data["cards"]
        card_prompts = {str(card["skill"]): str(card["prompt"]).strip() for card in cards}
    except Exception as exc:  # noqa: BLE001
        return [f"{plugin_dir}: cannot load Prompt Cards for eval validation: {exc}"]

    routing_path = plugin_dir / "evals" / "routing.json"
    try:
        routing = json.loads(routing_path.read_text(encoding="utf-8"))
        if routing.get("suite") != f"{plugin_id}-{manifest_version}-routing":
            errors.append(f"{routing_path}: suite must match Plugin id and version")
        if routing.get("locale") != "zh-TW":
            errors.append(f"{routing_path}: locale must be zh-TW")
        positive = routing.get("positive")
        if not isinstance(positive, list):
            errors.append(f"{routing_path}: positive must be a list")
            positive = []
        positive_ids = [str(case.get("id", "")) for case in positive if isinstance(case, dict)]
        if len(positive_ids) != len(set(positive_ids)) or set(positive_ids) != skill_names:
            errors.append(f"{routing_path}: positive cases must cover every Skill exactly once")
        for case in positive:
            if not isinstance(case, dict):
                errors.append(f"{routing_path}: positive case must be an object")
                continue
            case_id = str(case.get("id", ""))
            if case.get("expected_skill") != case_id:
                errors.append(f"{routing_path}: {case_id} expected_skill must equal case id")
            if str(case.get("prompt", "")).strip() != card_prompts.get(case_id):
                errors.append(f"{routing_path}: {case_id} prompt must match its Prompt Card")
        negative = routing.get("negative")
        if not isinstance(negative, list) or len(negative) < 3:
            errors.append(f"{routing_path}: at least three cross-Plugin negative cases are required")
            negative = []
        for index, case in enumerate(negative, start=1):
            if not isinstance(case, dict):
                errors.append(f"{routing_path}: negative case {index} must be an object")
                continue
            if len(str(case.get("prompt", "")).strip()) < 10:
                errors.append(f"{routing_path}: negative case {index} prompt is too short")
            if case.get("must_not_route_to") != plugin_id:
                errors.append(f"{routing_path}: negative case {index} must_not_route_to must be {plugin_id}")
            expected_plugin = str(case.get("expected_plugin", ""))
            if expected_plugin not in plugin_ids - {plugin_id}:
                errors.append(f"{routing_path}: negative case {index} references unknown target Plugin")
    except Exception as exc:  # noqa: BLE001
        errors.append(f"{routing_path}: {exc}")

    behavior_path = plugin_dir / "evals" / "behavior.json"
    try:
        behavior = json.loads(behavior_path.read_text(encoding="utf-8"))
        if behavior.get("suite") != f"{plugin_id}-{manifest_version}-behavior":
            errors.append(f"{behavior_path}: suite must match Plugin id and version")
        cases = behavior.get("cases")
        if not isinstance(cases, list) or len(cases) < 8:
            errors.append(f"{behavior_path}: at least eight behavior cases are required")
            cases = []
        case_ids = [str(case.get("id", "")) for case in cases if isinstance(case, dict)]
        if not all(case_ids) or len(case_ids) != len(set(case_ids)):
            errors.append(f"{behavior_path}: behavior case ids must be unique and non-empty")
        for case in cases:
            if not isinstance(case, dict):
                errors.append(f"{behavior_path}: behavior case must be an object")
                continue
            case_id = str(case.get("id", ""))
            if case.get("skill") not in skill_names:
                errors.append(f"{behavior_path}: {case_id} references unknown Skill")
            if len(str(case.get("input", "")).strip()) < 10:
                errors.append(f"{behavior_path}: {case_id} input is too short")
            expected = case.get("expected")
            if not isinstance(expected, list) or len(expected) < 3 or not all(str(item).strip() for item in expected):
                errors.append(f"{behavior_path}: {case_id} needs at least three expected behaviors")
    except Exception as exc:  # noqa: BLE001
        errors.append(f"{behavior_path}: {exc}")

    checklist_path = plugin_dir / "evals" / "tenant-checklist.md"
    try:
        checklist = re.sub(r"\s+", " ", checklist_path.read_text(encoding="utf-8")).lower()
        checklist_concepts = {
            "sideload": ("sideload", "install", "安裝"),
            "routing": ("routing", "routes", "route to", "路由"),
            "permission": ("permission", "權限"),
            "approval": ("approval", "confirmation", "核准", "確認"),
            "readback": ("read back", "readback", "讀回"),
        }
        for concept, terms in checklist_concepts.items():
            if not any(term in checklist for term in terms):
                errors.append(f"{checklist_path}: missing {concept} acceptance check")
    except Exception as exc:  # noqa: BLE001
        errors.append(f"{checklist_path}: {exc}")
    return errors


def validate_plugin(plugin_dir: Path, plugin_ids: set[str]) -> list[str]:
    errors: list[str] = []
    plugin_id = plugin_dir.name
    if not PLUGIN_NAME_RE.fullmatch(plugin_id):
        errors.append(f"{plugin_dir}: plugin directory must use <domain>-cowork")

    required_files = ["manifest.json", "color.png", "outline.png", "README.md", "CHANGELOG.md"]
    for name in required_files:
        if not (plugin_dir / name).is_file():
            errors.append(f"{plugin_dir}: missing {name}")

    try:
        manifest = json.loads((plugin_dir / "manifest.json").read_text(encoding="utf-8"))
    except Exception as exc:  # noqa: BLE001
        return errors + [f"{plugin_dir}/manifest.json: {exc}"]

    extra_keys = set(manifest) - ALLOWED_MANIFEST_KEYS
    if extra_keys:
        errors.append(f"{plugin_dir}: unsupported manifest keys {sorted(extra_keys)}")
    if manifest.get("manifestVersion") != "1.28":
        errors.append(f"{plugin_dir}: manifestVersion must be 1.28")
    if manifest.get("$schema") != "https://developer.microsoft.com/json-schemas/teams/v1.28/MicrosoftTeams.schema.json":
        errors.append(f"{plugin_dir}: incorrect v1.28 schema URL")
    try:
        uuid.UUID(str(manifest.get("id", "")))
    except ValueError:
        errors.append(f"{plugin_dir}: invalid manifest GUID")
    if not SEMVER_RE.fullmatch(str(manifest.get("version", ""))):
        errors.append(f"{plugin_dir}: version must use SemVer")
    if manifest.get("developer", {}).get("name") != "lwokeray":
        errors.append(f"{plugin_dir}: developer.name must be lwokeray")
    expected_base = f"https://github.com/lwokeray/cowork-plugins/blob/main/plugins/{plugin_id}/README.md"
    developer = manifest.get("developer", {})
    if developer.get("privacyUrl") != f"{expected_base}#privacy":
        errors.append(f"{plugin_dir}: privacyUrl does not target the plugin README")
    if developer.get("termsOfUseUrl") not in {f"{expected_base}#terms", f"{expected_base}#terms-of-use"}:
        errors.append(f"{plugin_dir}: termsOfUseUrl does not target the plugin README")

    entries = manifest.get("agentSkills")
    if not isinstance(entries, list) or not entries:
        errors.append(f"{plugin_dir}: agentSkills must be a non-empty list")
        entries = []
    if len(entries) > 20:
        errors.append(f"{plugin_dir}: package exceeds 20 Skill limit")
    declared = [str(entry.get("folder", "")).removeprefix("./") for entry in entries if isinstance(entry, dict)]
    if len(declared) != len(set(declared)):
        errors.append(f"{plugin_dir}: duplicate agentSkills folder")
    actual_paths = sorted((plugin_dir / "skills").glob("*/SKILL.md"))
    actual = {str(path.parent.relative_to(plugin_dir)).replace("\\", "/") for path in actual_paths}
    if set(declared) != actual:
        errors.append(f"{plugin_dir}: manifest/Skill mismatch; declared={sorted(declared)}, actual={sorted(actual)}")

    skill_names: set[str] = set()
    for path in actual_paths:
        try:
            frontmatter, body = parse_frontmatter(path)
        except Exception as exc:  # noqa: BLE001
            errors.append(str(exc))
            continue
        name = str(frontmatter.get("name", ""))
        description = str(frontmatter.get("description", ""))
        skill_names.add(name)
        if name != path.parent.name or not SKILL_NAME_RE.fullmatch(name):
            errors.append(f"{path}: frontmatter name must match kebab-case folder")
        if not 1 <= len(description) <= 1024:
            errors.append(f"{path}: description must contain 1-1024 characters")
        if frontmatter.get("license") != "MIT":
            errors.append(f"{path}: license must be MIT")
        metadata = frontmatter.get("metadata")
        if not isinstance(metadata, dict) or metadata.get("author") != "lwokeray":
            errors.append(f"{path}: metadata.author must be lwokeray")
        elif metadata.get("version") != manifest.get("version"):
            errors.append(f"{path}: metadata.version must match manifest version")
        if len(body) < 1500:
            errors.append(f"{path}: body is too short to be an executable Monolithic Skill")
        if len(re.findall(r"^##\s+", body, flags=re.MULTILINE)) < 5:
            errors.append(f"{path}: body needs at least five operational sections")
        guidance = re.sub(r"\s+", " ", f"{description}\n{body}").lower()
        concepts = {
            "use/skip boundary": ("適用", "use when", "when to use", "use for", "不適用"),
            "workflow": ("流程", "workflow", "pipeline", "core instructions", "核心指示", "quick start", "快速開始", "first 15 minutes"),
            "output": ("輸出", "output", "產出"),
            "stop/guardrail": ("停止", "stop", "guardrail", "邊界", "boundary", "不得", "never", "do not"),
        }
        for concept, terms in concepts.items():
            if not any(term.lower() in guidance for term in terms):
                errors.append(f"{path}: missing {concept} guidance")

    for icon_name, expected in (("color.png", (192, 192)), ("outline.png", (32, 32))):
        path = plugin_dir / icon_name
        try:
            with Image.open(path) as image:
                if image.format != "PNG" or image.size != expected:
                    errors.append(f"{path}: must be PNG {expected[0]}x{expected[1]}")
                rgba = image.convert("RGBA")
                alpha = rgba.getchannel("A")
                if alpha.getextrema() == (255, 255):
                    errors.append(f"{path}: icon must use transparency")
        except Exception as exc:  # noqa: BLE001
            errors.append(f"{path}: {exc}")

    errors.extend(validate_cards(plugin_dir, skill_names))
    errors.extend(sync_cards(plugin_dir, check=True))
    errors.extend(
        validate_eval_contracts(
            plugin_dir,
            plugin_ids,
            skill_names,
            str(manifest.get("version", "")),
        )
    )
    icon_source_path = plugin_dir / "assets" / "icon-source.yaml"
    if (plugin_dir / "assets" / "icon-generation-prompt.md").exists():
        errors.append(f"{plugin_dir}: legacy generated-icon prompt must be removed")
    if not icon_source_path.is_file():
        errors.append(f"{plugin_dir}: missing assets/icon-source.yaml")
    else:
        try:
            icon_source = yaml.safe_load(icon_source_path.read_text(encoding="utf-8"))
            required_source_fields = {
                "library", "repository", "commit", "license", "icon", "stem", "label",
                "color", "color_variant", "outline_variant",
            }
            if not isinstance(icon_source, dict) or not required_source_fields.issubset(icon_source):
                errors.append(f"{icon_source_path}: incomplete icon source metadata")
            elif icon_source.get("license") != "MIT":
                errors.append(f"{icon_source_path}: icon license must be recorded as MIT")
        except Exception as exc:  # noqa: BLE001
            errors.append(f"{icon_source_path}: {exc}")

    for path in (
        plugin_dir / "evals" / "routing.json",
        plugin_dir / "evals" / "behavior.json",
        plugin_dir / "evals" / "tenant-checklist.md",
    ):
        if not path.is_file():
            errors.append(f"{plugin_dir}: missing {path.relative_to(plugin_dir)}")
    return errors


def validate_catalog(plugin_dirs: list[Path]) -> list[str]:
    path = ROOT / "catalog.yaml"
    if not path.is_file():
        return ["catalog.yaml is missing"]
    data = yaml.safe_load(path.read_text(encoding="utf-8"))
    entries = data.get("plugins", []) if isinstance(data, dict) else []
    catalog_ids = {str(entry.get("id")) for entry in entries if isinstance(entry, dict)}
    actual_ids = {path.name for path in plugin_dirs}
    if catalog_ids != actual_ids:
        return [f"catalog/plugin mismatch; catalog={sorted(catalog_ids)}, actual={sorted(actual_ids)}"]
    return []


def main() -> int:
    errors: list[str] = []
    plugin_dirs = sorted(path.parent for path in PLUGINS_ROOT.glob("*/manifest.json"))
    if not plugin_dirs:
        errors.append("no plugins found under plugins/")
    plugin_ids = {path.name for path in plugin_dirs}
    for plugin_dir in plugin_dirs:
        errors.extend(validate_plugin(plugin_dir, plugin_ids))
    errors.extend(validate_catalog(plugin_dirs))

    tracked = subprocess.run(
        ["git", "ls-files", "*.zip"], cwd=ROOT, check=True, capture_output=True, text=True
    ).stdout.splitlines()
    if tracked:
        errors.append(f"deployment ZIP files must not be tracked: {tracked}")
    root_manifests = [path for path in ROOT.glob("*/manifest.json") if path.parent != PLUGINS_ROOT]
    if root_manifests:
        errors.append(f"plugin packages must live under plugins/: {root_manifests}")
    for old_path in ("proposal-cowork", "power-automate-mcp-selfhosted", "copilot-cowork-it", "linear-microsoft-pm-cowork"):
        if (ROOT / old_path).exists():
            errors.append(f"retired root path still exists: {old_path}")

    if errors:
        print("\n".join(f"ERROR: {error}" for error in errors))
        return 1
    print(f"PASS: {len(plugin_dirs)} Cowork plugins validated")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
