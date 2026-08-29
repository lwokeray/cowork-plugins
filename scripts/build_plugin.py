#!/usr/bin/env python3
"""Build a reproducible Cowork deployment ZIP from one plugin source directory."""

from __future__ import annotations

import argparse
import hashlib
import json
import zipfile
from pathlib import Path

from validate_repo import PLUGINS_ROOT, PLUGIN_NAME_RE, ROOT, validate_plugin


DEPLOY_ROOT_FILES = ("manifest.json", "color.png", "outline.png")


def package_files(plugin_dir: Path) -> list[tuple[Path, str]]:
    files = [(plugin_dir / name, name) for name in DEPLOY_ROOT_FILES]
    for folder in ("skills", "tools"):
        base = plugin_dir / folder
        if not base.exists():
            continue
        for path in sorted(item for item in base.rglob("*") if item.is_file() and not item.name.startswith(".")):
            files.append((path, str(path.relative_to(plugin_dir)).replace("\\", "/")))
    return files


def build(plugin_dir: Path, output_dir: Path) -> tuple[Path, Path]:
    plugin_ids = {path.parent.name for path in PLUGINS_ROOT.glob("*/manifest.json")}
    errors = validate_plugin(plugin_dir, plugin_ids)
    if errors:
        raise ValueError("\n".join(errors))
    manifest = json.loads((plugin_dir / "manifest.json").read_text(encoding="utf-8"))
    output_dir.mkdir(parents=True, exist_ok=True)
    zip_path = output_dir / f"{plugin_dir.name}-{manifest['version']}.zip"
    with zipfile.ZipFile(zip_path, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=9) as archive:
        for source, archive_name in package_files(plugin_dir):
            info = zipfile.ZipInfo(archive_name, date_time=(1980, 1, 1, 0, 0, 0))
            info.compress_type = zipfile.ZIP_DEFLATED
            info.external_attr = 0o100644 << 16
            archive.writestr(info, source.read_bytes())
    digest = hashlib.sha256(zip_path.read_bytes()).hexdigest()
    checksum_path = zip_path.with_suffix(".sha256")
    checksum_path.write_text(f"{digest}  {zip_path.name}\n", encoding="utf-8")
    return zip_path, checksum_path


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("plugin", help="plugin id under plugins/")
    parser.add_argument("--output", type=Path, default=ROOT / "build")
    args = parser.parse_args()
    if not PLUGIN_NAME_RE.fullmatch(args.plugin):
        print("ERROR: plugin must be a <domain>-cowork id")
        return 1
    plugin_dir = ROOT / "plugins" / args.plugin
    if not plugin_dir.is_dir():
        print(f"ERROR: unknown plugin {args.plugin}")
        return 1
    try:
        zip_path, checksum_path = build(plugin_dir, args.output)
    except Exception as exc:  # noqa: BLE001
        print(f"ERROR: {exc}")
        return 1
    print(zip_path)
    print(checksum_path)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
