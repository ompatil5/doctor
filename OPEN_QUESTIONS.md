# Open Questions for Dr. Firdous Shaikh

This document collects all open questions, proposed drafts, and items requiring client confirmation, updated for **Change Request #3**. Please review and provide feedback so that the corresponding items and placeholders can be updated.

---

## 1. Biography, Degrees & Fellowships (Priority)

- [ ] The Home hero now has a Consultation button only. Please confirm whether it should also retain a Book button.
- [ ] The handwritten Home note may mean an orange-background or orange-frame portrait. Please confirm; no orange styling has been added because the approved palette is white, gold and green.
- [ ] Please review the CKM and hormonal-imbalance pillar wording before launch.


### For the doctor's review before launch

- [ ] Diabetes cards: Type 1, Type 2, Prediabetes, Gestational, LADA, MODY, stress-induced and drug-induced diabetes; complication cards for foot care, eye/retinopathy, kidney, nerves/neuropathy and emotional wellbeing/diabetes distress.
- [ ] Thyroid cards: underactive/hypothyroidism, overactive/hyperthyroidism, Hashimoto's thyroiditis, Graves' disease, thyroid nodules and goitre, subclinical hypothyroidism, and thyroid in pregnancy.
- [ ] Please review the Cardio-Kidney-Metabolic (CKM) wording on the Obesity page, including the checks for blood pressure, cholesterol, kidney function and urine protein.


- [ ] Please confirm Zhejiang University (the recording said Zhengzhou University) and the factual wording that BKC Dedicated Covid Health Centre was one of Mumbai and India's largest Covid centres.
- [ ] Please confirm Jyoti Clinic (Bandra West), Niramay Diabetes Centre (Mira Road East), and the year private practice began (resume says 2018; recording said 2019).
- [ ] Please confirm whether "Dip. Diab (Emory)" is an appropriate credential; it is not shown because the resume body describes an advanced certificate.
- [ ] Please confirm whether ACP and UDF membership numbers may be public, and whether LedBy may be described as a Corporate Leaders Fellowship without the "funded by Harvard University" wording.
- [ ] Nothing in the resume is dated 2023 for the About timeline; please advise if an entry should be added.
- [ ] The "one of the first Indian women" ATTD claim has not been published; please confirm only if supported.

- [ ] **Missing Biography Details:** In your message you noted that some biography details were not mentioned. All details from the source document (timeline from 2012 to 2025, registrations, memberships, and awards) have been published on `/about/`. Which biography details are missing? Please list:
  - Any other fellowships (full names and years)
  - Degrees and medical qualifications
  - Post-doctoral or specialized certificates
  - Institutional positions, past hospital appointments
  - Additional peer-reviewed publications and textbooks
  *(Note: Medical advertising regulations require verified source documentation; we cannot publish unlisted details without your confirmation.)*
- [ ] **LedBy Fellowship:** The About page includes a dedicated **Fellowships** section listing *Fellowship, Diabetes India (2025)*, *Fellowship, Indian Society of Chrono Medicine (2024)*, and *Fellow, LedBy*. Please confirm the year and full formal fellowship title for the LedBy fellowship so we can remove the `<span class="todo">` chip.

---

## 2. Facebook Profile URL

- [ ] Please confirm the appointment email for patient enquiries; the public address is currently also used by the mailto fallback, while a separate patient-enquiry address is preferred.
- [ ] Please confirm which DAWN telephone number, if any, may be published. No DAWN telephone is currently shown.
- [ ] Please send the selected photos with descriptive file names. No `new-photos/` folder was supplied.
- [ ] Please review the new concise condition-card explanations (diabetes and thyroid) and CKM wording before launch.

- [ ] **Facebook Page URL Needed:** You requested Facebook to be included on the site. An inactive link slot has been added in the exact required format next to LinkedIn and Instagram in the footer of every page, the Contact page, and the search engine structured data (`sameAs`):
  `<!-- FACEBOOK-SLOT: replace FB_URL with the real page URL and remove the comment markers <a href="FB_URL" target="_blank" rel="noopener noreferrer">Facebook</a> -->`
  Please provide your official Facebook page or professional profile URL so it can be activated in a single edit without rendering broken links or placeholder chips.

---

## 3. DAWN Foundation (Diabetes and Women's Network)

The dedicated page `/dawn-foundation/` has been completely rebuilt verbatim using your approved document (*"DAWN Vision, Mission and Objectives"*). Please confirm the following points:
- [ ] **Mission Statement & Women's Focus:** DAWN's mission as written in the approved document does not explicitly mention women or women's health (*"To establish an empathetic, accessible, and structured ecosystem for diabetes care..."*), whereas the organisation's full name is *Diabetes and Women's Network*. Is this intentional, or would you like a specific line on women's endocrine health added to the mission?
- [ ] **Contact Details Public Disclosure:** The document provides telephone number **+91 98222 93515** and email **drfirdousshaikh@gmail.com**. Please confirm whether these should be displayed publicly for international collaboration enquiries, and whether `drfirdousshaikh@gmail.com` is also intended as the general clinic appointment email.
- [ ] **DAWN Logo & Dedicated Web/Social Presence:** If DAWN Foundation has its own official logo mark, dedicated website, or social media handle, please provide the image and URL so we can incorporate them.
- [ ] **PubMed Reference for Objective 2:** Objective 2 references your published work on the Modified Diabetes Distress Scale (mDDS). Please provide the PubMed PMID or DOI link so we can link directly to the study.

---

## 4. Photo Gallery (`/gallery/`) & Image Review

A dedicated, responsive photo gallery has been launched at `/gallery/` with 27 curated photographs organized across three categories (*Conferences and Talks*, *Awards and Recognition*, and *Community Camps*), complete with thumbnail and high-resolution WebP formats, category filters, and an accessible modal lightbox.
- [ ] **Review Selected Photographs & Captions:** Please review the photos in `/gallery/` and the complete captions table in `GALLERY_CAPTIONS.md`. Per medical ethics standards, captions currently describe only verified, visible clinical presentations without unconfirmed names or dates.
- [ ] **Additional Photographs:** If you would like to include additional photographs from recent conferences or award ceremonies, please share the image files along with approved captions.

---

## 5. Clinics & Practice Locations

- [ ] **Appointment Phone & WhatsApp:** The confirmed appointment number for both Jyoti Clinic and Niramay Diabetes Centre is **+91 99305 61774**. In accordance with instructions, all direct WhatsApp links remain hidden until verified. Is this phone number registered and active on WhatsApp for patient appointment coordination?
- [ ] **Shetty Nursing Home:** You previously mentioned *"Shetty Nursing Home"*, but details were not on the card. Is this a third clinic location, or the building hosting an existing clinic? If separate, please share consultation days and timings.
- [ ] **Jyoti Clinic PIN Code & Bank Spelling:** The card states *"Mumbai - 50"*. We have used PIN **400050**. Please confirm if 400050 is correct, and confirm the building's bank spelling (*"Above Abhudhaya Bank"* vs *"Above Abhyudaya Bank"*).

---

## 6. Online Consultations & Telehealth Logistics

- [ ] **Telehealth Platform:** Which platform is used for remote consultations (e.g., Google Meet, Zoom, WhatsApp Video)?
- [ ] **Payment Methods:** How do patients complete payment (e.g., UPI, Net Banking, Razorpay / Stripe for international patients)?
- [ ] **Geographic Scope & International Patients:** Which states and countries do you consult remotely?
- [ ] **Follow-up Policy:** What is your policy for post-consultation report reviews and follow-up slots?

---

## 7. Direct Contact Email & Book Purchase Links

- [ ] **Clinic Email Address:** Please confirm the official patient-facing email address to replace `<span class="todo">TO CONFIRM: clinic email address</span>` on the Contact page.
- [ ] **Book Purchase/Download Links:** Please provide publisher names and purchase/download links for *Path to Diabetes Mellitus Type 2 Remission* and *Footprints of Wellness* on `/books-patient-education/`.
