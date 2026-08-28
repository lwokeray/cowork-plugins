import json
import unittest
from pathlib import Path
import zipfile

from scripts.validate_plugin import validate_package


ROOT = Path(__file__).resolve().parents[1]
PACKAGE = ROOT / "it-helpdesk-cowork"


class PluginValidationTests(unittest.TestCase):
    def test_valid_package_passes(self):
        errors = validate_package(PACKAGE)
        self.assertEqual(errors, [])

    def test_manifest_uses_only_skills_and_no_connectors(self):
        manifest = json.loads((PACKAGE / "manifest.json").read_text())
        self.assertIn("agentSkills", manifest)
        self.assertNotIn("agentConnectors", manifest)

    def test_every_skill_folder_matches_frontmatter_name(self):
        manifest = json.loads((PACKAGE / "manifest.json").read_text())
        folders = [entry["folder"] for entry in manifest["agentSkills"]]
        self.assertEqual(len(folders), len(set(folders)))
        for folder in folders:
            skill_dir = PACKAGE / folder.removeprefix("./")
            frontmatter = skill_dir.joinpath("SKILL.md").read_text().split("---", 2)[1]
            self.assertIn(f"name: {skill_dir.name}", frontmatter)

    def test_forbidden_external_system_scope_is_rejected(self):
        bad_file = PACKAGE / "skills" / "case-brief" / "references" / "should-not-exist.md"
        bad_file.parent.mkdir(parents=True, exist_ok=True)
        bad_file.write_text("Use ServiceNow to reset a password.")
        try:
            errors = validate_package(PACKAGE)
            self.assertTrue(any("forbidden" in error.lower() for error in errors))
        finally:
            bad_file.unlink()
            bad_file.parent.rmdir()

    def test_zip_contents_are_rooted_at_package_root(self):
        zip_path = ROOT / "dist" / "it-helpdesk-cowork.zip"
        if not zip_path.exists():
            self.skipTest("package zip is created by the packaging step")
        with zipfile.ZipFile(zip_path) as archive:
            names = set(archive.namelist())
        self.assertIn("manifest.json", names)
        self.assertIn("color.png", names)
        self.assertIn("outline.png", names)
        self.assertIn("skills/case-brief/SKILL.md", names)


if __name__ == "__main__":
    unittest.main()
