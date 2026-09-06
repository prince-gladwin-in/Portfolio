# Prince Gladwin Tudu — Accessible Portfolio

A complete, multi-page personal portfolio for **Prince Gladwin Tudu**
(digital marketing · social media · product analysis), built on the accessible,
semantic framework from Task 1. The persona, projects, skills, education, and
contact details come from Prince's resume; the structure is unchanged so it
still targets a Lighthouse Accessibility + SEO score of 100.

Built to the original brief:

> **HTML5 Semantic Structure & Accessibility** — Build a multi-page personal
> portfolio website adhering strictly to modern semantic HTML5 standards and
> WCAG accessibility guidelines. Target: **100** on Lighthouse Accessibility
> and SEO audits.

This is a *learning reference*. Every file is heavily commented, and the
comments that explain an accessibility or SEO decision are tagged
`✎ a11y` or `✎ SEO` so you can find and understand them quickly.

---

## What's in the folder

```
portfolio/
├─ index.html        Home  (study the full SEO <head> here first)
├─ about.html        About (skills, background)
├─ projects.html     Projects (uses <article>, <figure>/<figcaption>)
├─ contact.html      Contact (the accessible, tab-navigable form)
├─ css/
│  └─ styles.css     One commented stylesheet (contrast, focus, motion)
├─ assets/           Self-contained SVG images (logo, avatar, thumbnails)
├─ robots.txt        Lets crawlers index the site
├─ sitemap.xml       Lists all pages for search engines
└─ README.md         This guide
```

---

## How to open and run it

**Quickest:** double-click `index.html` — it opens in your browser and works
because there are no external dependencies.

**Recommended (behaves like a real server):** from inside the `portfolio`
folder run one of these, then visit the printed URL:

```bash
# Python 3
python -m http.server 8000

# or Node
npx serve
```

## How to run the Lighthouse audit (the grade)

1. Open the site in **Google Chrome**.
2. Press **F12** to open DevTools, then click the **Lighthouse** tab.
3. Tick **Accessibility** and **SEO** (you can leave the others on too).
4. Choose **Navigation** mode and click **Analyze page load**.
5. Read the report — each metric that isn't perfect tells you exactly what to
   fix. Run it on **every page**, not just the home page.

Tip: run it in an **Incognito window** so browser extensions don't skew the
score. Test each of the four pages individually.

---

## Where each brief requirement lives

| Requirement | Where to look |
|---|---|
| Semantic tags (`header`, `nav`, `main`, `footer`, `section`, `article`, `figure`) | Every page; `projects.html` for `article` + `figure`/`figcaption` |
| ARIA labels and roles | `aria-label` on each `<nav>`, `aria-current="page"`, `aria-labelledby` on sections, `aria-describedby` on form fields |
| SEO-friendly meta tags | `<head>` of every page — `title`, `description`, `canonical`, Open Graph, `viewport`, `lang` |
| Accessible, tab-navigable contact form | `contact.html` — labels, `fieldset`/`legend`, `required`, hints, real submit button |

---

## The accessibility checklist this build satisfies (Lighthouse a11y → 100)

- `lang="en"` on every `<html>` element.
- Exactly one `<main>` and one `<h1>` per page; headings never skip a level.
- All meaningful images have descriptive `alt`; decorative images use `alt=""`.
- Colour contrast clears WCAG AA (body ≥ 4.5:1, large text/UI ≥ 3:1).
- Visible keyboard focus on every interactive element (`:focus-visible`).
- A "Skip to main content" link as the first tab stop.
- Every form control has a programmatically associated `<label>`.
- The viewport meta does **not** disable pinch-zoom.
- Tap targets are at least 44px tall.
- `prefers-reduced-motion` is respected.
- Status/meaning is never conveyed by colour alone (e.g. the current nav link
  is bold + underlined, not just tinted).

## The SEO checklist this build satisfies (Lighthouse SEO → 100)

- Unique, descriptive `<title>` on each page.
- Unique `<meta name="description">` on each page.
- Valid `<html lang>` and a mobile `viewport` tag.
- All links are crawlable (`<a href="...">`) with descriptive text — no bare
  "click here" or three identical "Read more" links.
- `robots.txt` present and not blocking indexing.
- `sitemap.xml` listing all pages.
- Legible base font size (16px) and adequate tap targets.
- Canonical URLs to avoid duplicate-content issues.

---

## Finishing touches before you publish

1. **Update the domain.** Search-and-replace `https://princetudu.example`
   in the `<head>` tags, `robots.txt`, and `sitemap.xml` with your real URL.
2. **Swap the images.** The SVGs in `assets/` are placeholders (the project
   previews and the `avatar.svg` portrait). Keep the `alt` text meaningful when
   you replace them. For real social-media sharing, replace `og-cover.svg`
   with a 1200×630 **PNG or JPG** photo.
3. **Add your links.** The resume mentions LinkedIn and GitHub — add those as
   links in the header or footer when you have the URLs.
4. **Wire up the form.** `action="#"` is a placeholder. Point it at a form
   backend (Formspree, Netlify Forms, or your own server) so messages reach
   your inbox.

## Going further (optional polish)

The brief asks for a "semantic skeleton", so this build stays HTML/CSS-only and
uses the browser's **native** form validation — that is a fully accessible
baseline with zero JavaScript. When you're ready to enhance it, the comment
block at the bottom of the form in `contact.html` shows the ARIA pattern for
custom, announced error messages (`aria-invalid`, `aria-describedby`, and a
`role="alert"` summary).
