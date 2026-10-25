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
├── sitemap.xml                                   # XML sitemap (23 canonical URLs including DAWN)
├── robots.txt                                    # Robots directive pointing to sitemap
├── README.md                                     # Project architecture & documentation
│
> [!NOTE]
> **Internal Project Notes:** Working notes, client questions, and implementation logs (`OPEN_QUESTIONS.md`, `PLACEHOLDERS.md`, `CHANGELOG.md`, `GALLERY_CAPTIONS.md`) are stored outside the public website repository in `../Doc/project-notes/`.
│
├── about/                                        # About Dr. Firdous Shaikh (bio, timeline)
├── diabetes-treatment-mumbai/                    # Diabetes clinical focus & care pathways
├── thyroid-specialist-mumbai/                     # Thyroid treatment, hypothyroidism & nodules
├── obesity-treatment-mumbai/                     # Medical weight management & metabolic health
├── pcos-gestational-diabetes-mumbai/             # Women's Health (PCOS, GDM, pregnancy care)
├── mental-wellbeing-diabetes/                    # Mental Wellbeing (Diabetes distress, support)
├── dawn-foundation/                              # DAWN Foundation (Diabetes and Women's Network)
├── collaboration/                                # Collaboration & Professional Inquiries
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

---

## 4. How to Edit Content & Add Blog Posts

- **Editing Existing Pages:** Each page is an `index.html` file within its respective directory. Open the file in any text editor, modify the content inside `<main id="main-content">`, and save.
- **Adding a New Blog Post:**
  1. Create a new folder inside `blog/` using hyphenated lowercase (e.g. `blog/managing-insulin-in-heat/`).
  2. Copy `blog/what-does-hba1c-7-mean/index.html` into the new folder as a template.
  3. Update `<title>`, `<meta name="description">`, `<link rel="canonical">`, and the MedicalWebPage JSON-LD schema.
  4. Write the article content using standard semantic HTML (`<h2>`, `<p>`, `<ul>`, `<div class="callout">`).
  5. Add an entry card linking to the new article on `blog/index.html`.
  6. Add the new URL `<loc>https://ompatil5.github.io/doctor/blog/your-post-slug/</loc>` to `sitemap.xml`.

---

## 5. Booking Form Delivery Setup

The appointment booking forms on `contact/index.html`, `consultations/index.html`, and `index.html` currently default to a client-side `mailto:` protocol addressed to `drfirdousshaikh@gmail.com`.

To enable direct, serverless form submissions without launching the visitor's mail client:
1. Sign up for a free or paid endpoint at **Web3Forms** (https://web3forms.com) or **Formspree** (https://formspree.io).
2. Open `assets/js/booking-form.js`.
3. Locate the configuration constant at the top of the file:
   ```javascript
   const FORM_ENDPOINT = '';
   ```
4. Paste your endpoint URL or access key:
   ```javascript
   const FORM_ENDPOINT = 'https://api.web3forms.com/submit'; // or your Formspree endpoint URL
   ```
5. Ensure your endpoint form fields include `name`, `phone`, `clinic`, `preferred_time`, and `reason`. Do NOT add secret credentials, API tokens, or SMTP passwords to this repository.

---

## 6. Activating the Facebook Link

An inactive slot is pre-configured across all page footers, `contact/index.html`, and `index.html` JSON-LD schema:
```html
<!-- FACEBOOK-SLOT: replace FB_URL with the real page URL and remove the comment markers <a href="FB_URL" target="_blank" rel="noopener noreferrer">Facebook</a> -->
```
To activate:
1. Perform a global search in the repository for `FACEBOOK-SLOT`.
2. Replace `FB_URL` with Dr. Shaikh's verified Facebook page URL (e.g. `https://www.facebook.com/drfirdousshaikh`).
3. Remove the HTML comment delimiters `<!--` and `-->` around the anchor element.

---

## 7. Custom Domain Migration Guide

When connecting a custom domain (e.g. `https://www.drfirdousshaikh.com`):
1. **GitHub Pages Custom Domain:** Add the custom domain in the repository's GitHub Settings > Pages > Custom domain, and enforce HTTPS.
2. **Find and Replace Canonical URLs:**
   - Find: `https://ompatil5.github.io/doctor/`
   - Replace: `https://www.drfirdousshaikh.com/` (or client's exact domain, preserving trailing slashes).
3. Update `sitemap.xml` and `robots.txt` with the new domain URL.
4. Verify all JSON-LD `@id` and `url` attributes match the new domain.
