
# Landing Page Specification – IELTS Online Test Platform

## 1. Hero Section
**Goal:** Immediate value communication & conversion

### Content
- Headline: Real IELTS Practice. Real Human Scoring.
- Subheadline: Simulasi IELTS online dengan Writing & Speaking dinilai panelist berpengalaman.
- Primary CTA: Start IELTS Mock Test
- Secondary CTA: Try Practice Test

### UI Notes
- Background: #2E3452
- Headline text: #E8EBED
- CTA button: #C92A2A

---

## 2. Problem Section
**Goal:** User empathy & problem validation

### Content
- Mock test offline mahal & terbatas
- Jadwal tidak fleksibel
- AI scoring tidak akurat untuk Writing & Speaking

### UI Notes
- Background: #0C1014
- Text: #E8EBED
- Highlight: #F2C94C

---

## 3. How It Works
**Goal:** Explain flow simply

### Steps
1. Daftar & pilih tes
2. Kerjakan simulasi IELTS
3. Listening & Reading auto scoring
4. Writing & Speaking dinilai panelist
5. Skor & feedback dikirim ke akun

### UI Notes
- Background: #3E4F7B
- Step highlight: #F2C94C

---

## 4. Key Features
**Goal:** Value explanation

### Features
- Full IELTS Mock Test
- Practice per skill
- Human-reviewed Writing & Speaking
- Detailed band score & feedback
- Progress tracking

### UI Notes
- Card background: #3E4F7B
- Icons: #F2C94C

---

## 5. Why Human Scoring Matters
**Goal:** Differentiation

### Content
- Human scoring lebih akurat untuk Writing & Speaking
- Cocok untuk target band 6.5+
- Feedback lebih kontekstual

### UI Notes
- Background: #0C1014
- Positive highlight: #F2C94C

---

## 6. Sample Score & Feedback
**Goal:** Trust building

### Content
- Contoh band score Writing
- Contoh feedback Speaking
- Breakdown kriteria IELTS

### UI Notes
- Background: #3E4F7B
- Band score highlight: #F2C94C

---

## 7. Who Is This For
**Goal:** Audience segmentation

### Segments
- Mahasiswa (Study Abroad)
- Profesional (Kerja & Migrasi)
- Repeat IELTS Test Takers

### UI Notes
- Background: #2E3452
- Icon highlight: #F2C94C

---

## 8. Pricing Preview
**Goal:** Transparency & conversion

### Content
- Subscription bulanan
- Pay-per-test
- Add-on Writing / Speaking review

### UI Notes
- Background: #0C1014
- CTA: #C92A2A

---

## 9. FAQ
**Goal:** Reduce objections

### Questions
- Apakah ini IELTS resmi?
- Siapa yang menilai Writing & Speaking?
- Berapa lama hasil keluar?
- Bisa diakses dari mobile?

### UI Notes
- Background: #2E3452
- Accordion border: #6E7C96

---

## 10. Final CTA
**Goal:** Final conversion push

### Content
- Headline: Know Your Real IELTS Band Before the Real Test.
- CTA: Start IELTS Mock Test

### UI Notes
- Background: #2E3452
- CTA: #C92A2A

---

## 11. Footer
**Goal:** Legal & informational

### Content
- About
- Contact
- Terms & Privacy
- Disclaimer: This platform is not affiliated with IELTS™

### UI Notes
- Background: #0C1014
- Text: #AFB4BB


---

# Component Mapping (Next.js / React)

## Global Notes
- Framework: Next.js (App Router)
- Styling: Tailwind CSS
- Theme: Academic Dark Professional
- Color source of truth: Talkmate_id Color Palette

---

## Hero.tsx
**Purpose:** Above-the-fold value proposition & primary conversion

### Responsibilities
- Display main headline & subheadline
- Primary & secondary CTA
- Trust micro-copy (human scoring)

### Props
- headline: string
- subheadline: string
- primaryCtaLabel: string
- secondaryCtaLabel?: string

### UI Rules
- Background: #2E3452
- H1: text-4xl–5xl, color #E8EBED
- CTA Primary: bg-[#C92A2A], text-[#E8EBED]
- CTA Secondary: outline, border-[#6E7C96]

---

## HowItWorks.tsx
**Purpose:** Explain test flow clearly

### Responsibilities
- Render 3–5 sequential steps
- Icon + title + short description per step

### Props
- steps: { title: string; description: string }[]

### UI Rules
- Background: #3E4F7B
- Step number / icon: #F2C94C
- Card background: #2E3452

---

## Features.tsx
**Purpose:** Highlight core product value

### Responsibilities
- Render feature cards
- Support icon + title + description

### UI Rules
- Card background: #3E4F7B
- Icon highlight: #F2C94C
- Text primary: #E8EBED
- Text secondary: #AFB4BB

---

## Pricing.tsx
**Purpose:** Pricing transparency & conversion

### Responsibilities
- Display subscription & pay-per-test options
- Highlight recommended plan
- CTA to checkout / sign up

### Props
- plans: { name: string; price: string; features: string[]; highlighted?: boolean }[]

### UI Rules
- Background: #0C1014
- Highlighted card: bg-[#3E4F7B]
- Normal card: bg-[#2E3452]
- CTA button: bg-[#C92A2A]

---

## FAQ.tsx
**Purpose:** Reduce user objections

### Responsibilities
- Accordion list of Q&A
- Keyboard accessible

### Props
- items: { question: string; answer: string }[]

### UI Rules
- Background: #2E3452
- Accordion card: bg-[#3E4F7B]
- Border: #6E7C96
- Question text: #E8EBED
- Answer text: #AFB4BB

---

## FinalCTA.tsx
**Purpose:** Last conversion push

### Responsibilities
- Strong closing headline
- Single primary CTA

### UI Rules
- Background: #2E3452
- Headline: #E8EBED
- CTA: bg-[#C92A2A]

---

## Footer.tsx
**Purpose:** Legal & informational

### Responsibilities
- Navigation links
- Disclaimer text

### UI Rules
- Background: #0C1014
- Text: #AFB4BB
- Link hover: #F2C94C

---

## Suggested Folder Structure

```
/components
  /landing
    Hero.tsx
    HowItWorks.tsx
    Features.tsx
    Pricing.tsx
    FAQ.tsx
    FinalCTA.tsx
    Footer.tsx
```

---

## Engineering Notes
- All CTAs should be reusable Button component
- No animation heavier than hover/focus
- Avoid background images
- Ensure WCAG AA contrast compliance
