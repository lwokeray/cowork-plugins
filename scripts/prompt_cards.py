#!/usr/bin/env python3
"""Validate canonical Prompt Cards and generate Markdown/CSV views."""

from __future__ import annotations

import argparse
import csv
import io
import json
import re
from pathlib import Path
from typing import Any

import yaml


CSV_FIELDS = [
    "Title",
    "Description",
    "Display Prompt",
    "Prompt Text",
    "Products",
    "Department",
    "Task Type",
    "Locale",
]

REQUIRED_FIELDS = {
    "id",
    "skill",
    "title",
    "description",
    "display_prompt",
    "prompt",
    "products",
    "department",
    "task_type",
    "locale",
}
ALLOWED_PRODUCTS = {"Copilot work", "Copilot web"}
LOCALE_RE = re.compile(r"^[a-z]{2}-[A-Z]{2}$")


def load_cards(plugin_dir: Path) -> list[dict[str, Any]]:
    path = plugin_dir / "prompts" / "prompt-cards.yaml"
    data = yaml.safe_load(path.read_text(encoding="utf-8"))
    if not isinstance(data, dict) or not isinstance(data.get("cards"), list):
        raise ValueError(f"{path}: root must contain a cards list")
    return data["cards"]


def validate_cards(plugin_dir: Path, skill_names: set[str]) -> list[str]:
    errors: list[str] = []
    try:
        cards = load_cards(plugin_dir)
    except Exception as exc:  # noqa: BLE001 - report all authoring errors together
        return [str(exc)]

    ids: set[str] = set()
    card_skills: list[str] = []
    for index, card in enumerate(cards, start=1):
        if not isinstance(card, dict):
            errors.append(f"{plugin_dir}: Prompt Card {index} must be an object")
            continue
        missing = REQUIRED_FIELDS - set(card)
        if missing:
            errors.append(f"{plugin_dir}: Prompt Card {index} missing {sorted(missing)}")
        card_id = str(card.get("id", "")).strip()
        skill = str(card.get("skill", "")).strip()
        if not card_id or card_id in ids:
            errors.append(f"{plugin_dir}: duplicate or empty Prompt Card id {card_id!r}")
        ids.add(card_id)
        card_skills.append(skill)
        if skill not in skill_names:
            errors.append(f"{plugin_dir}: Prompt Card {card_id} references unknown skill {skill}")
        if card_id != skill:
            errors.append(f"{plugin_dir}: Prompt Card id must equal skill name: {card_id} != {skill}")
        if not isinstance(card.get("products"), list) or not card.get("products"):
            errors.append(f"{plugin_dir}: Prompt Card {card_id} products must be a non-empty list")
        elif not set(map(str, card["products"])).issubset(ALLOWED_PRODUCTS):
            errors.append(f"{plugin_dir}: Prompt Card {card_id} has unsupported Products values")
        limits = {
            "title": 35,
            "display_prompt": 132,
            "prompt": 8000,
            "department": 120,
            "description": 200,
        }
        for field, limit in limits.items():
            value = str(card.get(field, "")).strip()
            if field in {"title", "display_prompt", "prompt"} and not value:
                errors.append(f"{plugin_dir}: Prompt Card {card_id} {field} is required")
            if len(value) > limit:
                errors.append(f"{plugin_dir}: Prompt Card {card_id} {field} exceeds {limit} characters")
        if not str(card.get("task_type", "")).strip():
            errors.append(f"{plugin_dir}: Prompt Card {card_id} task_type is required")
        if not LOCALE_RE.fullmatch(str(card.get("locale", ""))):
            errors.append(f"{plugin_dir}: Prompt Card {card_id} locale must use ll-CC format")
        prompt = str(card.get("prompt", "")).strip()
        if len(prompt) < 40:
            errors.append(f"{plugin_dir}: Prompt Card {card_id} prompt is too short")
        forbidden = ("search_paths", "get_schema", "create_entity", "update_entity", "do_action")
        if any(term in prompt for term in forbidden):
            errors.append(f"{plugin_dir}: Prompt Card {card_id} exposes internal tool names")

    if len(card_skills) != len(set(card_skills)):
        errors.append(f"{plugin_dir}: each skill must have exactly one Prompt Card")
    if set(card_skills) != skill_names:
        missing = sorted(skill_names - set(card_skills))
        extra = sorted(set(card_skills) - skill_names)
        errors.append(f"{plugin_dir}: Prompt Card coverage mismatch; missing={missing}, extra={extra}")
    return errors


def render_markdown(cards: list[dict[str, Any]], plugin_name: str) -> str:
    lines = [f"# {plugin_name} Prompt Cards", "", "此檔案由 `prompt-cards.yaml` 自動產生，請勿直接修改。", ""]
    for card in cards:
        lines.extend(
            [
                f"## {card['title']}",
                "",
                f"- Skill：`{card['skill']}`",
                f"- 顯示文字：{card['display_prompt']}",
                f"- Department：{card['department']}",
                f"- Task type：{card['task_type']}",
                f"- Locale：{card['locale']}",
                "",
                str(card["description"]).strip(),
                "",
                "**Prompt**",
                "",
                str(card["prompt"]).strip(),
                "",
            ]
        )
    return "\n".join(lines).rstrip() + "\n"


def render_csv(cards: list[dict[str, Any]]) -> str:
    stream = io.StringIO(newline="")
    writer = csv.DictWriter(stream, fieldnames=CSV_FIELDS, lineterminator="\n")
    writer.writeheader()
    for card in cards:
        writer.writerow(
            {
                "Title": card["title"],
                "Description": card["description"],
                "Display Prompt": card["display_prompt"],
                "Prompt Text": card["prompt"],
                "Products": ",".join(card["products"]),
                "Department": card["department"],
                "Task Type": card["task_type"],
                "Locale": card["locale"],
            }
        )
    return stream.getvalue()


def sync_cards(plugin_dir: Path, *, check: bool) -> list[str]:
    cards = load_cards(plugin_dir)
    manifest = json.loads((plugin_dir / "manifest.json").read_text(encoding="utf-8"))
    plugin_name = manifest["name"]["full"]
    expected = {
        plugin_dir / "prompts" / "prompt-cards.md": render_markdown(cards, plugin_name),
        plugin_dir / "prompts" / "prompt-cards.csv": render_csv(cards),
    }
    errors: list[str] = []
    for path, content in expected.items():
        if check:
            actual = path.read_text(encoding="utf-8-sig") if path.exists() else None
            if actual != content:
                errors.append(f"{path}: generated view is missing or out of date")
        else:
            path.parent.mkdir(parents=True, exist_ok=True)
            encoding = "utf-8-sig" if path.suffix == ".csv" else "utf-8"
            path.write_text(content, encoding=encoding)
    return errors


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("plugin", type=Path)
    parser.add_argument("--write", action="store_true", help="regenerate Markdown and CSV views")
    args = parser.parse_args()
    errors = sync_cards(args.plugin, check=not args.write)
    if errors:
        print("\n".join(f"ERROR: {error}" for error in errors))
        return 1
    print(f"PASS: Prompt Cards synchronized for {args.plugin}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
