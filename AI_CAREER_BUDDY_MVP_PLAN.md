# AI Career Buddy for TechMinded Lawyers

## 1) Refined Product Vision

### Problem
Law students and lawyers (especially in African markets) are hearing that AI will change legal work, but they do not know:
- which careers are growing,
- where their strengths fit,
- and what practical next steps to take.

### Product promise
**AI Career Buddy** is a guided career discovery assistant that helps legal professionals identify future-relevant legal career paths, with a strong AI-and-tech lens but without forcing everyone into pure tech roles.

It blends:
- **Ikigai** (love, strengths, market need, values),
- **legal domain opportunities** (tech and non-tech sectors), and
- **local reality** (African legal markets + global opportunities).

### Target users
- Primary: Law students (300–500 level equivalent), recent law graduates, junior associates.
- Secondary: Mid-career lawyers considering transition or specialization.

### Core jobs-to-be-done
1. “Help me understand what kind of legal work fits me in the AI era.”
2. “Show me realistic options I can pursue from where I am.”
3. “Tell me what to learn next, in practical terms.”

### Key product principles
- **Guided, not overwhelming**: short structured question flow.
- **Actionable outputs**: concrete paths + skill roadmap.
- **Context-aware**: recommendations suitable for African ecosystems and globally transferable skills.
- **Inclusive of non-tech sectors**: e.g., energy or maritime law where tech is an enabler.

### Success criteria (early)
- User completes flow in <10 minutes.
- User receives 2–4 recommendations with “why fit” and “next skills.”
- User says “this feels accurate” (self-rated relevance >=4/5).
- User takes at least one action (save roadmap, click learning resources, or book mentoring call).

---

## 2) Question Flow Design (Step-by-Step)

Keep this to **15–20 questions max**, grouped into short sections.

### Step 0: Onboarding & framing
1. **Profile basics**: student / graduate / practicing lawyer; years of experience.
2. **Location context**: country, region, and preferred work market (local, pan-African, global/remote).
3. **Goal horizon**: immediate internship/job, 1–2 year specialization, long-term transition.

### Step 1: What they enjoy (Ikigai: love)
4. Which tasks do you enjoy most? (research, drafting, advocacy, negotiation, strategy, teaching, operations, product collaboration).
5. Which work environments energize you? (courtroom, firm, in-house, startup, policy/public sector, remote-first).
6. Which topics interest you most? (AI governance, fintech, privacy, dispute resolution, climate/energy, maritime, IP, tax, compliance, etc.).

### Step 2: What they are naturally good at (Ikigai: strengths)
7. Self-rating of strengths (1–5): analytical reasoning, writing, speaking, stakeholder management, commercial thinking, technical curiosity.
8. Evidence prompt: “Share one project/case where you performed strongly.”
9. Work-style strengths: independent deep work vs collaborative fast-paced teams.

### Step 3: What problems they care about (Ikigai: world needs)
10. Which impact areas matter most? (financial inclusion, consumer protection, government accountability, climate resilience, cross-border trade, SME growth, digital rights).
11. Which populations do you most want to serve? (startups, corporates, public institutions, NGOs, underserved communities, creators).
12. Preference for direct client impact vs systems/policy impact.

### Step 4: Values and constraints
13. Priorities ranking: income growth, social impact, stability, prestige, flexibility, geographic mobility.
14. Risk appetite: conservative / balanced / entrepreneurial.
15. Practical constraints: budget for learning, available hours per week, internet/device reliability, language constraints.

### Step 5: Tech orientation and readiness
16. Comfort with technology tools (low/medium/high).
17. Interest in learning tech-adjacent skills (data literacy, no-code automation, AI prompting, product basics).
18. Preference: remain legal specialist, hybrid legal+tech role, or broader business role.

### Step 6: Output calibration
19. Select preferred output style: conservative recommendations vs stretch recommendations.
20. Optional: upload CV or LinkedIn for better personalization (MVP can skip upload).

### Output generation logic
- Score each candidate path across 4 dimensions:
  1. Enjoyment fit,
  2. Strength fit,
  3. Impact/value fit,
  4. Feasibility (based on constraints and readiness).
- Return top **2–4 paths** with short confidence levels.
- For each path provide:
  - Why it fits the user profile,
  - Typical entry routes,
  - 3–5 skills to learn next,
  - 30/60/90-day action plan.

---

## 3) Example Career Paths for Lawyers in the AI/Tech Age

Include both tech-native and tech-enabled traditional sectors.

### A. Tech-native legal paths
1. **AI Governance & AI Policy Lawyer**
   - Works on AI compliance, risk frameworks, algorithmic accountability, policy advisory.
2. **Data Protection & Privacy Counsel**
   - Advises on data governance, cross-border transfers, privacy-by-design.
3. **Fintech/Payments Regulatory Lawyer**
   - Supports digital banking, mobile money, crypto policy interfaces, licensing.
4. **Product Counsel (Tech Company)**
   - Embedded with product/engineering teams to ship compliant products.
5. **Cybersecurity & Incident Response Counsel**
   - Handles breach response, cyber risk contracts, regulatory reporting.
6. **Legal Operations & LegalTech Specialist**
   - Improves legal workflows using automation, knowledge systems, AI tools.

### B. Adjacent hybrid paths
7. **Trust & Safety / Platform Policy Specialist**
   - Designs platform rules for harmful content, user safety, moderation governance.
8. **Regulatory Affairs Manager (Tech, HealthTech, InsurTech, AgriTech)**
   - Aligns product rollout with regulatory expectations.
9. **Contract Automation / CLM Specialist**
   - Builds scalable contract processes and playbooks.
10. **Policy Innovation Fellow / Advisor**
   - Works with regulators, think tanks, and civic innovation programs.

### C. Traditional sectors transformed by tech (important for your concept)
11. **Energy & Infrastructure Lawyer (Digital Grid + Climate Tech)**
   - Advises on power projects, clean energy contracts, carbon and climate compliance.
12. **Maritime & Trade Lawyer (Digitized Logistics + Port Tech)**
   - Handles smart shipping, digital trade documentation, cross-border risk.
13. **Agribusiness & Food Systems Lawyer (AgriTech-enabled)**
   - Supports land, contracts, IP, and financing in technology-enabled agriculture.
14. **Healthcare Regulatory Lawyer (Digital Health)**
   - Advises telemedicine, health data, procurement and compliance.

---

## 4) Simple MVP (What to Build First)

### MVP goal
Deliver reliable personalized recommendations in one session, then collect feedback.

### MVP scope (v1)
1. **Single guided questionnaire** (15–20 questions).
2. **Recommendation engine** (rules + weighted scoring, not complex ML).
3. **Results page** with 2–4 career paths.
4. **Per-path action plan** (skills + 30/60/90-day steps).
5. **Save/share report** (PDF or simple share link).
6. **Feedback capture** (“Was this useful?” + optional comments).

### What to postpone
- Full CV parsing,
- mentorship marketplace,
- live labor market API integrations,
- advanced adaptive interviewing,
- mobile app.

### MVP success metrics
- Completion rate,
- recommendation relevance score,
- % users taking a next action,
- repeat usage after 2–4 weeks.

---

## 5) Beginner-Friendly Tech Stack

Prioritize fast learning, low cost, and easy iteration.

### Option A (easiest no/low-code start)
- **Frontend**: Typeform or Tally for questionnaire.
- **Logic layer**: Airtable + Make/Zapier.
- **AI generation**: OpenAI API for explanation text.
- **Output**: Notion page or PDF generator.
- **Analytics**: Google Sheets + PostHog (optional).

Best if you want to validate demand in days, not weeks.

### Option B (simple coded MVP)
- **Frontend**: Next.js + Tailwind.
- **Backend/API**: Next.js API routes.
- **Database**: Supabase (Postgres + auth).
- **AI layer**: OpenAI API with structured prompts.
- **Deployment**: Vercel.
- **Monitoring**: PostHog + Sentry.

Best if you want control, branding, and a base to scale.

### Suggested stack for your case
Start with **Option B-lite**:
- Next.js + Supabase + OpenAI + Vercel.

Why:
- beginner-friendly tutorials,
- good African founder community support,
- can scale from MVP to real product.

---

## 6) Recommendation Format Template (What users should see)

For each recommended path:

1. **Career Path Name**
2. **Why this fits you** (based on their answers)
3. **What this role looks like day-to-day**
4. **Skills to learn next (3–5)**
5. **Entry opportunities in Africa + global remote equivalents**
6. **30/60/90-day plan**
7. **Confidence score + alternative path if market is tight**

---

## 7) Africa-First, Globally Relevant Design Notes

- Include country-specific legal/regulatory context prompts (where possible).
- Offer pathways that do not require immediate relocation.
- Highlight remote-friendly roles and cross-border opportunities.
- Curate learning resources with mixed bandwidth options (text-first, downloadable).
- Use practical examples from African sectors: fintech, telco, energy access, logistics, govtech.

---

## 8) Immediate Next 7-Day Build Plan

Day 1–2:
- Finalize question set and scoring weights.
- Define 12–15 starter career profiles.

Day 3–4:
- Build form + basic backend + scoring logic.
- Generate recommendation page.

Day 5:
- Add AI explanation layer and skill suggestions.

Day 6:
- Test with 10–15 users (law students + junior lawyers).

Day 7:
- Refine recommendations based on feedback and launch pilot.

