from __future__ import annotations

import csv
import io
import json
import sys
import tempfile
import unittest
import zipfile
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "scripts"))

from build_plugin import build  # noqa: E402
from validate_repo import main as validate_repo  # noqa: E402


class RepositoryToolsTest(unittest.TestCase):
    def plugin_dirs(self) -> list[Path]:
        return sorted(path.parent for path in (ROOT / "plugins").glob("*/manifest.json"))

    def test_repository_contract(self) -> None:
        self.assertEqual(validate_repo(), 0)

    def test_prompt_card_csv_contract(self) -> None:
        expected_header = [
            "Title",
            "Description",
            "Display Prompt",
            "Prompt Text",
            "Products",
            "Department",
            "Task Type",
            "Locale",
        ]
        for plugin_dir in self.plugin_dirs():
            manifest = json.loads((plugin_dir / "manifest.json").read_text(encoding="utf-8"))
            csv_bytes = (plugin_dir / "prompts" / "prompt-cards.csv").read_bytes()
            self.assertTrue(csv_bytes.startswith(b"\xef\xbb\xbf"), plugin_dir.name)
            rows = list(csv.reader(io.StringIO(csv_bytes.decode("utf-8-sig"))))
            self.assertEqual(rows[0], expected_header, plugin_dir.name)
            self.assertEqual(len(rows) - 1, len(manifest["agentSkills"]), plugin_dir.name)

    def test_builds_are_reproducible_and_deploy_only(self) -> None:
        allowed_roots = {"manifest.json", "color.png", "outline.png", "skills", "tools"}
        with tempfile.TemporaryDirectory() as first, tempfile.TemporaryDirectory() as second:
            for plugin_dir in self.plugin_dirs():
                first_zip, _ = build(plugin_dir, Path(first))
                second_zip, _ = build(plugin_dir, Path(second))
                self.assertEqual(first_zip.read_bytes(), second_zip.read_bytes(), plugin_dir.name)
                with zipfile.ZipFile(first_zip) as archive:
                    roots = {name.split("/", 1)[0] for name in archive.namelist() if name}
                self.assertLessEqual(roots, allowed_roots, plugin_dir.name)


if __name__ == "__main__":
    unittest.main()
