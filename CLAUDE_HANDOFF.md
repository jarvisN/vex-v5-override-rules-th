# Claude Handoff: VEX V5RC Override Thai Website

## Goal

Build a better public website for the Thai version of the VEX V5 Robotics Competition Override Game Manual.

The user’s actual request is **not** a summary site. They want a website that feels close to the PDF/manual experience and contains a **full Thai translation page by page**.

The user has stated that they have permission to publish the translated version publicly.

## Current Public Site

- Public URL: https://jarvisn.github.io/vex-v5-override-rules-th/
- Repository: https://github.com/jarvisN/vex-v5-override-rules-th
- Local repo: `F:\nonnyGIT\vex-v5-override-rules-th`
- Source PDF: `C:\Users\User\Downloads\v5rc-override-0.1.2.pdf`

## Current State

The current site is functional but not good enough visually or UX-wise.

It contains:

- `site/index.html` - current manual-style static page
- `site/styles.css` - current styling
- `site/app.js` - rendering, search, score calculator, page renderer
- `site/fullTranslation.js` - full Thai translation data, 131 pages
- `site/pageData.js` - page metadata and rule codes
- `tools/translate_pdf_pages.py` - extraction/translation pipeline used to generate `fullTranslation.js`

The latest deployed version has:

- Full Thai translation for all 131 PDF pages
- Page-by-page reader
- Search by page, section, translated text, and rule code
- Collapsible rule digest per page

However, the user is disappointed because the design and reading experience still feel like an incremental patch on the earlier summary/manual mockup rather than a polished PDF-like web product.

## What To Improve

Prioritize the website experience, not the translation pipeline.

Suggested direction:

1. Make the first screen clearly a full Thai translated manual, not a generic cover.
2. Build a strong reading UI:
   - left page/section navigator
   - center translated page
   - right quick rule/page metadata panel or glossary
   - page jump input
   - section filters
   - search with highlighted matches
3. Make each translated page look like a clean manual page:
   - page number
   - section name
   - translated body text
   - rule code chips
   - optional collapsed notes
4. Keep `fullTranslation.js` as the translation source unless regenerating it.
5. Improve mobile layout so it is actually readable, not just technically responsive.
6. Remove or de-emphasize old “summary” feeling. The primary artifact must be the full translation.

## Important User Feedback

The user explicitly objected to summary/paraphrase:

- “ฉันให้แปลทุกหน้าไม่ใช่สรุปแต่ละหน้าไม่ใช่เหรอ”
- They want full page translation, not page summaries.
- They later said they had permission to publish the translated version publicly.

Do not repeat the earlier mistake of replacing “translation” with “summary” unless the user asks for a summary.

## Run Locally

```powershell
Set-Location F:\nonnyGIT\vex-v5-override-rules-th
python -m http.server 8080 -d site
```

Open:

```text
http://127.0.0.1:8080/
```

Syntax check:

```powershell
node --check site\app.js
```

## Deploy

This repo uses GitHub Pages via Actions:

```powershell
Set-Location F:\nonnyGIT\vex-v5-override-rules-th
git add -- .
git commit -m "Improve translated manual website"
git push origin main
```

GitHub Actions workflow:

```text
.github/workflows/deploy-pages.yml
```

## Translation Notes

`site/fullTranslation.js` was generated from the PDF using `tools/translate_pdf_pages.py`.

The translation was machine-generated and lightly post-processed for some VEX terms. It is full-page Thai text, but it still needs human proofreading for competition-grade accuracy, especially terms like:

- Alliance
- Field Element
- Scoring Object
- Autonomous Period
- Driver Controlled Period
- Head Referee
- Robot Skills Match
- VEX U / VURC

If rebuilding the translation, keep the page count at 131 and verify:

```powershell
Select-String -Path site\fullTranslation.js -Pattern '"page"' | Measure-Object
```

Expected: `131`

## Current Verification

Last verified:

- `node --check site\app.js` passed
- GitHub Pages deployed successfully
- `https://jarvisn.github.io/vex-v5-override-rules-th/fullTranslation.js` returned HTTP 200
- `fullTranslation.js` contained 131 translated pages

## Recommended Rewrite Strategy

Use the current data files and rebuild the frontend around them.

Keep:

- `site/fullTranslation.js`
- `site/pageData.js`
- deployment workflow

Replace or heavily refactor:

- `site/index.html`
- `site/styles.css`
- `site/app.js`

Target: a polished Thai translated manual reader, not a dashboard and not a marketing page.
