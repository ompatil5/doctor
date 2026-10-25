# Open Questions for Dr. Firdous Shaikh

This document collects all open questions, proposed drafts, and items requiring client confirmation, updated for the final launch candidate. Please review and provide feedback so that the corresponding items and placeholders can be updated.

---

## 1. Home Page (`/`)

- [ ] **Hero Consultation / Book Button:** The Home hero currently features a primary "Consultations & Clinics" button leading directly to practice details. Please confirm whether it should also retain a secondary "Book a consultation" button.
- [ ] **Hero Portrait Note:** A handwritten note on the source photo mentioned "orange". Please confirm whether this meant an orange-background or orange-frame portrait; no orange styling was applied to preserve the approved white, gold, and dark green palette.
- [ ] **Seven Clinical Pillars & CKM Wording:** Please review the concise wording across the 7 clinical pillars (Type 1 Diabetes, Type 2 & Remission, Gestational Diabetes, Thyroid Disorders, Obesity & Metabolic Health, PCOS & Women's Endocrine Health, and Mental Wellbeing & Diabetes Distress) before launch.

---

## 2. About Dr. Shaikh (`/about/`)

- [ ] **Zhejiang University vs Zhengzhou University:** The resume lists Zhejiang University, whereas the audio recording mentioned Zhengzhou University. Please confirm the correct university name for the training listing.
- [ ] **BKC Covid Centre Factual Phrasing:** Please confirm the factual wording that BKC Dedicated Covid Health Centre was one of Mumbai's and India's largest Covid centres during the pandemic response.
- [ ] **Private Practice Start Year:** Please confirm whether private practice commenced in 2018 (per resume) or 2019 (per audio recording).
- [ ] **Emory University Credential:** Please confirm whether "Dip. Diab (Emory)" is an appropriate qualification abbreviation or if it should remain an advanced certificate as described in the resume body.
- [ ] **ATTD Recognition Claim:** The superlative claim "one of the first Indian women" regarding the ATTD award has not been published in compliance with NMC/MMC regulations. Please confirm whether verified documentation exists to support this mention.
- [ ] **LedBy Fellowship:** The About page includes a dedicated **Fellowships** section listing *Fellowship, Diabetes India (2025)*, *Fellowship, Indian Society of Chrono Medicine (2024)*, and *Fellow, LedBy*. Please confirm the year and full formal title for LedBy (e.g. Corporate Leaders Fellowship) without promotional phrasing.
- [ ] **ACP and UDF Membership Numbers:** Please confirm whether American College of Physicians (ACP) and United Diabetes Forum (UDF) membership numbers may be made public.
- [ ] **About Timeline (2023):** No entries in the resume are dated 2023 for the About timeline; please advise if a specific clinical or academic milestone should be added for 2023.

---

## 3. Conditions Pages (`/diabetes-treatment-mumbai/`, `/thyroid-specialist-mumbai/`, `/obesity-treatment-mumbai/`, `/pcos-gestational-diabetes-mumbai/`, `/mental-wellbeing-diabetes/`)

- [ ] **Diabetes Condition Cards Review:** Please review the concise clinical descriptions for Type 1, Type 2, Prediabetes, Gestational, LADA, MODY, stress-induced, and drug-induced diabetes, as well as complications pathways (foot care, diabetic retinopathy, nephropathy, neuropathy, and diabetes distress).
- [ ] **Thyroid Condition Cards Review:** Please review the concise clinical descriptions for hypothyroidism, hyperthyroidism, Hashimoto's thyroiditis, Graves' disease, thyroid nodules and goitre, subclinical hypothyroidism, and thyroid management during pregnancy.
- [ ] **Cardio-Kidney-Metabolic (CKM) Care Pathways:** Please review the clinical phrasing on the Obesity & Metabolic Health page, including the screening panel for blood pressure, lipid profile, kidney function (eGFR), and urine albumin-to-creatinine ratio (uACR).

---

## 4. DAWN Foundation (`/dawn-foundation/`)

- [ ] **Mission Statement & Women's Focus:** The DAWN mission statement from the approved source document (*"To establish an empathetic, accessible, and structured ecosystem for diabetes care..."*) does not explicitly mention women, despite the organisation's full title (*Diabetes and Women's Network*). Please confirm whether an explicit sentence on women's metabolic health should be added.
- [ ] **DAWN Telephone Number (98222 vs 98332):** Source documents list telephone number `+91 98222 93515`, whereas another note mentions `98332`. No telephone number is currently shown on the DAWN page to prevent unverified calls. Please confirm which telephone number, if any, may be published publicly.
- [ ] **DAWN Official Logo & Links:** If DAWN Foundation has an official logo mark, dedicated website, or social media handle, please provide the assets so they can be integrated.
- [ ] **mDDS Scale Citation (Objective 2):** Objective 2 references your published work on the Modified Diabetes Distress Scale for India (mDDS). Please provide the PubMed PMID or DOI link to link directly to the study.

---

## 5. Research & Publications (`/research-publications/`)

- [ ] **Selected Lectures & Society Sessions:** The full list of invited lectures was intentionally not published because many industry-sponsored sessions cannot be featured under NMC/MMC medical ethics guidelines. Please confirm the selected academic, university, and society sessions.
- [ ] **Two mDDS Journal Listings:** Two papers on the Modified Diabetes Distress Scale appear under different journal citations in the resume. Please confirm both publication citations.
- [ ] **Scholarly Profile Links:** Please provide the official PubMed author search URL and Google Scholar profile URL to activate the direct profile links.

---

## 6. Clinics, Consultations & Booking Form (`/consultations/`, `/contact/`)

- [ ] **Clinic Details & Bank Spelling:**
  - **Jyoti Clinic (Bandra West):** Hill-N-Dale Building, 3rd Floor, Hill Road, Near Bandra Police Station, Above Abhudhaya Bank, Bandra (West), Mumbai 400050. Timings: Monday/Wednesday/Friday 6pm to 9pm. (Please confirm bank spelling: "Above Abhudhaya Bank" vs "Above Abhyudaya Bank").
  - **Niramay Diabetes Centre (Mira Road East):** Evershine Maternity and Nursing Home, Bharti Nagar, Mira Road (E), Mira Bhayandar 401107. Timings: Tuesday/Saturday 10am to 5pm.
  - **Appointment Phone:** **+91 99305 61774** (`tel:+919930561774`).
- [ ] **Patient Enquiry Email & Form Endpoint:** The booking form currently uses a client-side mailto fallback addressed to `drfirdousshaikh@gmail.com`. Please confirm:
  1. A separate patient-enquiry email address if preferred over the public email.
  2. The preferred form backend service (Web3Forms or Formspree access key) to enable direct form submission without opening email clients.
- [ ] **Telehealth Logistics:** Please confirm:
  1. Preferred platform for video consultations (Google Meet, Zoom, WhatsApp Video).
  2. Payment methods accepted (UPI, Net Banking, international payment gateways).
  3. Eligible geographical regions for remote consultations.
  4. Follow-up and report-review policy.

---

## 7. Social Profiles (Facebook Activation)

- [ ] **Facebook Page URL:** Inactive comment slots (`<!-- FACEBOOK-SLOT -->`) are implemented across all page footers, the Contact page, and schema structured data. Please provide the official Facebook page URL so it can be uncommented and activated in a single update.

---

## 8. Photo Gallery (`/gallery/`)

- [ ] **Photos & Captions Review:** Please review the 27 curated photographs and factual captions in `/gallery/` and `GALLERY_CAPTIONS.md`. If additional photos from recent conferences or camps are desired, please supply them with descriptive filenames (no `new-photos/` folder was provided in the repository).

---

## 9. Books & Patient Education (`/books-patient-education/`)

- [ ] **Publisher & Purchase Links:** Please provide publisher names and official purchase or download links for *Path to Diabetes Mellitus Type 2 Remission* and *Footprints of Wellness*.
