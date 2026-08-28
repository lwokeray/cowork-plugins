---
name: proposal-document-inventory
description: |
  Inventories the files, attachments, versions, formats, and readability of one proposal package.
  Use when the user asks to list RFP files, check attachments, identify the latest version, assess document completeness, or prepare a document register. Skip when the task is to extract requirements, write answers, review risk, or make a bid decision.
license: Proprietary
metadata:
  author: CloudRiches Service
  version: "1.2"
---

# Proposal Document Inventory

## Single responsibility

Create only a document register for the current pursuit. Do not interpret requirements or summarize the content of the documents.

## Required inputs

Use the files, links, filenames, metadata, and user-provided version information for one `pursuit_id`. Record file name, file type, file size when available, version/date, language, source, access status, page count when available, and whether OCR/table extraction is likely required.

## Steps

1. Confirm the `pursuit_id` and define the package boundary. Do not mix files from another customer or opportunity.
2. List every supplied document and attachment, including referenced but missing files.
3. Identify duplicate, superseded, corrupted, password-protected, inaccessible, or ambiguous-version files.
4. Check whether each file is readable and whether tables, scanned pages, images, appendices, or embedded links require special handling.
5. Mark the authoritative file/version only when the source explicitly establishes it. Otherwise record `Authority not established`.
6. Hand off the register to requirement extraction. Do not perform extraction in this skill.

## Output contract

Return a `Document Inventory` table with `pursuit_id`, `artifact_version`, `document_id`, `filename`, `type`, `version/date`, `language`, `source`, `access`, `pages`, `readability`, `extraction_notes`, and `authority_status`. Add `Missing referenced files`, `Version conflicts`, and `Next action` sections.

## Stop conditions

Stop with `Needs files` when no document or link is supplied. Stop with `Version conflict` when two files could both be authoritative. Do not select a latest version merely because its filename contains a larger number.
