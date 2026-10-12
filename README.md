# Dr. Firdous Shaikh — Official Clinic Website

A high-performance, accessible, and compliant static website for **Dr. Firdous Shaikh** (Consultant Diabetologist, Thyroid & Metabolic Specialist, Mumbai).

Built in accordance with **Indian Medical Council (NMC & MMC)** professional conduct standards and strict technical constraints: **plain HTML5, vanilla CSS3, and minimal vanilla JavaScript only** with **zero build steps, zero Node.js / npm dependencies, and zero external runtime CDNs**.

---

## 1. Architecture & Design Principles

- **Zero Build Tooling:** All pages are written directly as static HTML files. No bundlers, no npm, no preprocessors.
- **Full Crawlability & JS-Independent Navigation:** Header, footer, and mobile bottom bar are coded directly into every HTML file. The entire site remains readable, functional, and accessible even with JavaScript completely disabled.
- **Strict Relative Pathing:** All internal stylesheet, script, image, and page links use folder-depth relative paths (`assets/...`, `../assets/...`, `../../assets/...`). The site operates identically when served from a GitHub Pages subpath (e.g. `https://ompatil5.github.io/Dr/`) or at the root of a custom domain.
- **No `<base href>`:** Relative paths are explicitly used without `<base href>` to ensure in-page `#anchor` links and skip links function without breaking.
- **Medical Compliance:** Strictly devoid of testimonials, outcome claims, promotional superlatives ("best", "top", "leading", "No. 1"), commercial guarantees, and institutional logos. Uses "remission" instead of "reversal" in clinical body copy and includes the statutory medical disclaimer on every page.
- **Searchable Placeholders:** Missing clinic values (addresses, consultation hours, phone numbers) are represented as `<span class="todo">TO CONFIRM: ...</span>` (styled as a high-visibility yellow chip) and documented in `PLACEHOLDERS.md`.

---

## 2. Directory Structure

```text
Project/
├── index.html                                    # Home (Physician schema, credentials, overview)
├── 404.html                                      # Custom 404 error page
├── sitemap.xml                                   # Hand-written XML sitemap (19 canonical URLs)
├── robots.txt                                    # Robots directive pointing to sitemap
├── PLACEHOLDERS.md                               # Hand-written catalog of all .todo chips
├── OPEN_QUESTIONS.md                             # Outstanding clinical & profile questions
├── README.md                                     # Project architecture & documentation
├── CHANGELOG.md                                  # Phase-by-phase implementation log & QA report
│
├── about/                                        # About Dr. Firdous Shaikh (bio, credentials, timeline)
│   └── index.html
├── diabetes-treatment-mumbai/                    # Diabetes clinical focus & care pathways
│   └── index.html
├── thyroid-specialist-mumbai/                     # Thyroid treatment, hypothyroidism & nodules
│   └── index.html
├── obesity-treatment-mumbai/                     # Medical weight management & metabolic health
│   └── index.html
├── pcos-gestational-diabetes-mumbai/             # Women's metabolic health & DAWN Foundation
│   └── index.html
├── consultations/                                # In-clinic & online consultation details
│   └── index.html
├── research-publications/                        # Indexed papers, conferences, peer review & filter
│   └── index.html
├── community-awareness/                          # Screening camps, police drives & awards
│   └── index.html
├── books-patient-education/                      # Authored books, book chapters & patient guides
│   └── index.html
├── faqs/                                         # 6 Common clinical questions & FAQPage schema
│   └── index.html
├── contact/                                      # Clinic address, inquiry form with honeypot
│   └── index.html
├── privacy-policy/                               # Medical confidentiality & data practices
│   └── index.html
│
├── blog/                                         # Patient articles & clinical guides index
│   ├── index.html
│   ├── what-does-hba1c-7-mean/index.html         # Post 1: HbA1c 7% explained (BlogPosting schema)
│   ├── type-2-diabetes-remission/index.html      # Post 2: T2D remission & DiRECT trial
│   ├── borderline-thyroid-tsh/index.html         # Post 3: Borderline TSH & subclinical hypo
│   ├── gestational-diabetes-guide/index.html     # Post 4: Gestational diabetes care & nutrition
│   └── diabetes-ramadan-fasting-guide/index.html # Post 5: Ramadan fasting risk & guidelines
│
├── assets/
│   ├── css/
│   │   ├── tokens.css                            # CSS variables (colors, typography, spacing)
│   │   ├── base.css                              # Reset, base typography, .todo chips
│   │   └── components.css                        # Header, nav drawer, buttons, cards, mobile bar
│   ├── js/
│   │   ├── nav.js                                # Accessible mobile navigation drawer & dropdowns
│   │   ├── research-filter.js                    # Research pill filter (year & theme)
│   │   └── booking-form.js                       # Form validation, honeypot & submission UX
│   ├── fonts/                                    # Self-hosted WOFF2 files (Inter & Fraunces)
│   └── img/                                      # Optimized WebP images (<180 KB each)
│
└── [Redirect Stubs]                              # 12 backward-compatible 301-equivalent HTML stubs
    ├── about.html                                -> about/
    ├── services.html                             -> diabetes-treatment-mumbai/
    ├── contact.html                              -> contact/
    ├── academic-presentations.html               -> research-publications/
    ├── academic-institute.html                   -> about/
    ├── educational.html                          -> books-patient-education/
    ├── ebooks.html                               -> books-patient-education/
    ├── blogs.html                                -> blog/
    ├── ngo-charity.html                          -> community-awareness/
    ├── community-practice.html                   -> community-awareness/
    ├── events.html                               -> community-awareness/
    └── gallery.html                              -> community-awareness/
```

---

## 3. Custom Domain Migration (Single Find-and-Replace)

All canonical tags, Open Graph meta tags, JSON-LD schemas, and `sitemap.xml` entries currently use:
```text
https://ompatil5.github.io/Dr/
```

When a custom domain is acquired (e.g., `https://drfirdousshaikh.com/`):
1. Perform a project-wide find-and-replace:
   - Search: `https://ompatil5.github.io/Dr/`
   - Replace: `https://drfirdousshaikh.com/`
2. Add a `CNAME` file at the root containing the custom domain (e.g. `drfirdousshaikh.com`).
3. No relative internal links or asset paths need modification.

---

## 4. Serving Locally

Since this repository contains pure static files, it can be tested locally using any standard HTTP server without compilation:

```powershell
# Using Python:
python -m http.server 8000

# Or using PHP:
php -S localhost:8000

# Or simply open index.html directly in any web browser
```
Navigate to `http://localhost:8000/` in your browser.
