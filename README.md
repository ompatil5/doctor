# Dr. Firdous Shaikh — Official Clinic Website

A high-performance, accessible, and compliant static website for **Dr. Firdous Shaikh** (Diabetologist, Thyroid and Weight Management Physician, Mumbai).

Built in accordance with **Indian Medical Council (NMC & MMC)** professional conduct standards and strict technical constraints: **plain HTML5, vanilla CSS3, and minimal vanilla JavaScript only** with **zero build steps, zero Node.js / npm dependencies, and zero external runtime CDNs**.

---

## 1. Architecture & Design Principles

- **Zero Build Tooling:** All pages are written directly as static HTML files. No bundlers, no npm runtime dependencies, no preprocessors.
- **Full Crawlability & JS-Independent Navigation:** Header, footer, and mobile bottom bar are coded directly into every HTML file. The entire site remains readable, functional, and accessible even with JavaScript completely disabled.
- **Clean Folder URLs:** Internal navigation points cleanly to directories (e.g. `about/`, `contact/`, `diabetes-treatment-mumbai/`) with standard `index.html` entry points.
- **Custom Domain Migration Note:** All canonical tags, Open Graph meta tags, XML sitemaps, and JSON-LD schemas currently point to the live GitHub Pages hosting URL: `https://ompatil5.github.io/doctor/`. When the client's custom domain is connected, a single global find-and-replace from `https://ompatil5.github.io/doctor/` to `https://<your-custom-domain>/` will update the entire site.
- **Colour Palette (White, Gold & Green):**
  - Main background: `#FFFFFF` (dominant white)
  - Soft surface: `#FAF6EA` (faint gold tint)
  - Typography ink: `#1B2A22` (primary body) & `#4B5C52` (muted text)
  - Dark Green: `#14452F` (header, footer, headings)
  - Mid Green: `#1F6B47` (links, secondary buttons, icons)
  - Light Green: `#E7F1EB` (chips, cards)
  - Gold: `#D4AF37` (primary button background, borders, thin accents) & `#C29E2C` (hover)
  - Border line: `#E6E2D5`
  - High-contrast rule: Gold text is strictly prohibited on white backgrounds; gold text is only permitted on dark green backgrounds. Primary buttons feature dark green text on gold for WCAG AA contrast.
- **Medical Compliance:** Strictly devoid of testimonials, outcome claims, promotional superlatives ("best", "top", "leading", "No. 1"), commercial guarantees, and institutional logos. Uses "remission" instead of "reversal" in clinical body copy and includes the statutory medical disclaimer on every page.
- **Third-Person Editorial Style:** All copy is written in third person referencing *"Dr. Firdous Shaikh"* on first mention and *"Dr. Shaikh"* subsequently, avoiding gendered pronouns (*she/her/he/his*) until client confirmation.
- **Practice Locations:**
  - **Jyoti Clinic:** Hill-N-Dale Building, 3rd Floor, Hill Road, Near Bandra Police Station, Above Abhudhaya Bank, Bandra (West), Mumbai 400050. Timings: Monday/Wednesday/Friday 6pm to 9pm.
  - **Niramay Diabetes Centre:** Evershine Maternity and Nursing Home, A/ Sundaram, Dharti Building, 002, Bharti Nagar, Mira Road East, Mira Bhayandar, Maharashtra 401107. Timings: Tuesday/Saturday 10am to 5pm.
  - **Appointments:** +91 99305 61774.

---

## 2. Directory Structure

```text
Project/
├── index.html                                    # Home (Physician schema, credentials, overview)
├── 404.html                                      # Custom 404 error page
├── sitemap.xml                                   # XML sitemap (20 canonical URLs including DAWN)
├── robots.txt                                    # Robots directive pointing to sitemap
├── PLACEHOLDERS.md                               # Catalog of all .todo chips
├── OPEN_QUESTIONS.md                             # Outstanding clinical questions & proposals
├── README.md                                     # Project architecture & documentation
├── CHANGELOG.md                                  # Phase implementation log & proofreading diffs
│
├── about/                                        # About Dr. Firdous Shaikh (bio, timeline)
├── diabetes-treatment-mumbai/                    # Diabetes clinical focus & care pathways
├── thyroid-specialist-mumbai/                     # Thyroid treatment, hypothyroidism & nodules
├── obesity-treatment-mumbai/                     # Medical weight management & metabolic health
├── pcos-gestational-diabetes-mumbai/             # Women's Health and Mental Health
├── dawn-foundation/                              # DAWN Foundation (Diabetes and Women's Network)
├── consultations/                                # In-clinic (2 clinics) & online consultations
├── research-publications/                        # Structured publication list, photos & peer review
├── community-awareness/                          # Screening camps & public health initiatives
├── books-patient-education/                      # Authored books & patient guides
├── faqs/                                         # Frequently Asked Questions & FAQPage schema
├── contact/                                      # Clinic details, Google Maps links & booking form
├── gallery/                                      # Photo & Event Gallery with modal lightbox
├── privacy-policy/                               # Medical confidentiality & data practices
│
├── blog/                                         # Patient articles index
│   ├── what-does-hba1c-7-mean/                   # Post 1: HbA1c 7% explained
│   ├── type-2-diabetes-remission/                # Post 2: T2D remission & DiRECT
│   ├── borderline-thyroid-tsh/                   # Post 3: Borderline TSH
│   ├── gestational-diabetes-guide/               # Post 4: Gestational diabetes
│   └── diabetes-ramadan-fasting-guide/           # Post 5: Ramadan fasting
│
└── assets/
    ├── css/                                      # tokens.css, base.css, components.css
    ├── js/                                       # nav.js, gallery-data.js, gallery.js, research-filter.js, booking-form.js
    ├── img/                                      # Responsive WebP photography
    └── fonts/                                    # Self-hosted WOFF2 fonts (Inter & Fraunces)
```

---

## 3. Local Development

To view the website locally, use any static web server (such as Python's built-in HTTP server):

```bash
# From within the Project directory
python -m http.server 8000
```

Then open `http://localhost:8000` in your web browser.
