#!/usr/bin/env python3
"""Regenerate the root README plugin catalog from catalog.yaml and manifests."""

from __future__ import annotations

import json
from pathlib import Path

import yaml


ROOT = Path(__file__).resolve().parent.parent
START = "<!-- PLUGIN_CATALOG:START -->"
END = "<!-- PLUGIN_CATALOG:END -->"


def main() -> int:
    catalog = yaml.safe_load((ROOT / "catalog.yaml").read_text(encoding="utf-8"))
    rows = [
        START,
        "| Plugin | Version | Skills | Status | Responsibility |",
        "|---|---:|---:|---|---|",
    ]
    for entry in catalog["plugins"]:
        plugin_dir = ROOT / entry["path"]
        manifest = json.loads((plugin_dir / "manifest.json").read_text(encoding="utf-8"))
        rows.append(
            f"| [`{entry['id']}`]({entry['path']}/) | {manifest['version']} | "
            f"{len(manifest['agentSkills'])} | {entry['status']} | {entry['responsibility']} |"
        )
    rows.append(END)
    replacement = "\n".join(rows)
    readme_path = ROOT / "README.md"
    text = readme_path.read_text(encoding="utf-8")
    before, remainder = text.split(START, 1)
    _, after = remainder.split(END, 1)
    readme_path.write_text(before + replacement + after, encoding="utf-8")
    print("PASS: README plugin catalog updated")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
