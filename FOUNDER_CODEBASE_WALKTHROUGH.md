# AI Career Buddy — Founder-Friendly Codebase Walkthrough

This document explains the **current state** of the repository in plain language.

## Quick truth first: what exists right now
Today, this repository is still at the **planning stage**.

- There is **no running web app yet**.
- There is **no frontend code** (no pages/forms/components).
- There is **no backend/API code**.
- There is **no database schema**.
- There is **one strategy document** (`AI_CAREER_BUDDY_MVP_PLAN.md`) that describes what to build.

So think of the project as a **blueprint**, not a built house yet.

---

## 1) What happens when a user starts the app?
### Current reality
Right now: **nothing happens**, because no app entry point exists yet.

There is no:
- sign-up page,
- onboarding screen,
- questionnaire UI,
- results page.

### Intended flow (from the blueprint)
The plan says a future user flow should be:
1. Open app.
2. Answer guided questions (15–20).
3. System scores fit against career pathways.
4. User gets 2–4 recommendations.
5. User sees skills + 30/60/90 day action plan.

This intended behavior is described in the plan doc but not implemented in code yet.

---

## 2) Where are the questions defined?
### Current reality
Questions are currently defined as **written content** in the planning document under:
- `## 2) Question Flow Design (Step-by-Step)`

These are product requirements, not executable logic yet.

### What this means
At this stage, questions are like a script in a playbook. They are **not yet connected** to:
- form fields,
- validation rules,
- saved responses,
- dynamic branching.

---

## 3) How are answers stored?
### Current reality
They are **not stored anywhere yet** because there is no app/database.

### Planned direction
The blueprint suggests using:
- Supabase/Postgres (coded MVP), or
- Airtable/Sheets (no-code MVP).

But no tables or data models exist in this repo yet.

---

## 4) How are career recommendations generated?
### Current reality
No recommendation engine exists yet in code.

### Planned logic (already designed)
The plan proposes scoring each path using 4 dimensions:
1. Enjoyment fit,
2. Strength fit,
3. Impact/value fit,
4. Feasibility fit.

Then return top 2–4 paths with:
- reasons for fit,
- skills to learn,
- action plan.

Important: this logic is currently **conceptual** (documented), not implemented.

---

## 5) What is missing for this to feel like a real product?
Here’s the practical founder checklist.

## A. Core product build (must-have)
1. **Questionnaire UI**
   - Multi-step form with progress bar and save/continue.
2. **Backend API**
   - Receives answers, validates them, computes scores.
3. **Database**
   - Users, sessions, responses, recommendations, feedback.
4. **Recommendation engine v1**
   - Rule-based weighted scorer tied to career profile metadata.
5. **Results page**
   - 2–4 recommendations with “why fit” and next skills.

## B. Product quality (to feel trustworthy)
6. **Career profile library**
   - Structured definitions for each role (entry routes, skills, market notes).
7. **Consistency controls for AI output**
   - Prompt templates + guardrails to avoid vague answers.
8. **Feedback loop**
   - “Was this useful?” + retraining/tuning process.
9. **Basic analytics**
   - Completion rate, drop-off step, recommendation usefulness.

## C. Founder/business essentials
10. **Landing page + clear value proposition**
11. **Pilot onboarding flow** (invite code or waitlist)
12. **Privacy terms + consent copy** (especially for career/personal data)
13. **Resource links by region** (Africa-first learning pathways)

---

## Recommended immediate next build order (simple)
If you want the fastest path from “idea” to “usable product”:

1. Build static questionnaire page from the 20 planned questions.
2. Save responses to a database table.
3. Implement a basic weighted scoring function.
4. Render top 3 career matches.
5. Add one-click PDF/share output.
6. Test with 10 users and refine scoring.

That gets you to a **real MVP** quickly.

---

## Non-technical summary in one sentence
You currently have a **strong product strategy document**, but not yet a working software product; the next step is to convert that plan into a simple questionnaire + scoring app with saved user data and results pages.
