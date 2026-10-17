# Project Placeholders & Items to Confirm

This document lists every `<span class="todo">` marker and non-rendered code slot present across the website of Dr. Firdous Shaikh, updated for **Change Request #3**.
Visible markers are styled on the page with a distinct amber pill chip (`.todo`) so they are immediately noticeable during preview and easily searchable in the codebase.

> [!IMPORTANT]
> In accordance with Indian Medical Council guidelines and client instructions, no contact numbers, addresses, timings, URLs, or biographical credentials have been invented.
> All placeholders listed below correspond to unconfirmed client details and are documented with specific open questions in `OPEN_QUESTIONS.md`.

---

## 1. Summary of Placeholders by Category

| Category | Placeholder Description | Files Affected |
| :--- | :--- | :--- |
| **Fellowships & Biography** | LedBy fellowship year and full formal title | `about/index.html` |
| **Social Links (Inactive Slot)** | Facebook page URL slot (`<!-- FACEBOOK-SLOT: ... -->` in footer, Contact page, JSON-LD; no visible chip) | Site-wide (footers, `contact/index.html`, `index.html`) |
| **Research Photos & Links** | Photos to be replaced by client; PubMed and Google Scholar profile URLs; PubMed link for mDDS paper | `research-publications/index.html`, `dawn-foundation/index.html` |
| **Online Consultations** | Telehealth platform, payment modes, eligible countries, follow-up policy | `consultations/index.html`, `faqs/index.html` |
| **Clinic Email** | Dedicated patient contact email address | `contact/index.html`, `privacy-policy/index.html` |
| **Books & Education** | Publisher names and purchase/download links for authored books | `books-patient-education/index.html` |
| **Legal / Privacy** | Formal legal review of privacy notice and controller email | `privacy-policy/index.html` |

---

## 2. File-by-File Inventory

### `about/index.html`
- **Line 260:** `<span class="todo">TO CONFIRM: LedBy fellowship year and full name</span>` &mdash; Fellowships section

### `contact/index.html`
- **Line 218:** `<span class="todo">TO CONFIRM: clinic email address</span>` &mdash; Clinic contact card
- **Line 236:** `<!-- FACEBOOK-SLOT: replace FB_URL with the real page URL and remove the comment markers <a href="FB_URL" target="_blank" rel="noopener noreferrer">Facebook</a> -->` &mdash; Online profiles card (no visible chip)

### `consultations/index.html`
- **Line 215:** `<span class="todo">TO CONFIRM: platform, payment method, which countries you can see patients in, follow-up policy</span>` &mdash; Online video consultation card

### `research-publications/index.html`
- **Line 178:** `<span class="todo">TO CONFIRM: PubMed author search URL</span>` &mdash; Scholarly index links
- **Line 181:** `<span class="todo">TO CONFIRM: Google Scholar profile URL</span>` &mdash; Scholarly index links
- **Line 251:** `<span class="todo">TO CONFIRM: photos to be replaced by client</span>` &mdash; Photographic showcase section

### `books-patient-education/index.html`
- **Line 190:** `<span class="todo">TO CONFIRM: publisher and purchase or download link</span>` &mdash; *Path to Diabetes Mellitus Type 2 Remission*
- **Line 204:** `<span class="todo">TO CONFIRM: publisher and purchase or download link</span>` &mdash; *Footprints of Wellness*

### `faqs/index.html`
- **Line 216:** `<span class="todo">TO CONFIRM: remote international consultation policy</span>` &mdash; International online consultation answer

### `privacy-policy/index.html`
- **Line 175:** `<span class="todo">TO CONFIRM: privacy policy legal review and data controller contact email</span>` &mdash; Legal notice
- **Line 213:** `<span class="todo">TO CONFIRM: privacy enquiry email address</span>` &mdash; Privacy contact

### Site-wide Footers & `index.html` Head
- `<!-- FACEBOOK-SLOT: replace FB_URL with the real page URL and remove the comment markers <a href="FB_URL" target="_blank" rel="noopener noreferrer">Facebook</a> -->` &mdash; Standardized slot in all page footers and in `index.html` adjacent to schema `sameAs`.
