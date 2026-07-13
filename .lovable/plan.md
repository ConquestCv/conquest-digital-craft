# Virtual Executive Assistant Re-Tailor

Pivot the whole public site (the Web2/Real-World side — Web3 stays hidden) from the **Customer Experience Specialist** narrative to the new **Virtual Executive Assistant / EA-to-CEO** positioning from the uploaded CV. Only edit what needs editing — layout, design system, animations, components, structure all stay.

---

## 1. Header logo swap
`src/components/layout/Header.tsx`
- Replace the `CQ` text badge with a small circular avatar using the existing `src/assets/conquest-profile.jpg`.
- Keep the same size (~28px), rounded-full, object-cover, with a thin border so it reads as a logo mark.
- Wordmark next to it stays "Aisiri Conquest".

## 2. HomePage — `src/pages/HomePage.tsx`
- **Eyebrow / availability badge:** "Available now · Aligned to PST / MST / EST / CST"
- **H1:** `Virtual Executive Assistant.` + sub-line `Calm ops for busy founders.`
- **Sub-paragraph:** rewrite around: 2–3 yrs supporting executives — calendar & inbox triage, call-note synthesis, action-item tracking, client/coaching follow-ups, and clean documentation. Discreet, organized, deadline-driven.
- **Channels strip → "Support Stack" strip:** Calendar & Inbox · Notes & Action Items · CRM & Trackers
- **Stats (4):**
  - `60–80+` Daily Records Handled
  - `2–3 yrs` Executive Support
  - `100%` Deadline Visibility
  - `4 TZ` PST · MST · EST · CST
- **Floating KPI card on profile:** Inbox triage, Action items captured, Deadlines tracked.
- **Pillars (3) rewrite:**
  1. *Priorities, protected.* — calendar discipline, inbox triage, meeting prep so the CEO's focus stays on high-leverage work.
  2. *Notes → action items.* — call transcripts, coaching sessions and webinars turned into tracked next steps, owners and deadlines.
  3. *Operational clarity.* — Google Drive hygiene, CRM updates, SOP-aligned trackers so nothing slips between people or weeks.
- **Tech setup strip:** keep the hardware/connection/power rows; update Availability to "Full or part-time · PST/MST/EST/CST aligned" and Workspace copy to "Private home office · executive-grade discretion".
- **CTA section:** copy refit ("Need a steady second brain for your week?" / "Send a brief — calendar load, inbox volume, tooling — I'll come back with a clear support plan.").

## 3. AboutPage — `src/pages/AboutPage.tsx`
Rewrite narrative around the EA story: structured, discreet, deadline-driven; experience supporting executive ops, client/coaching workflows, and webinar/event follow-ups. Update any "support agent / QA score" language to EA-flavored equivalents (accuracy, follow-through, discretion). Preserve sections, cards, layout.

## 4. ExperiencePage — `src/pages/ExperiencePage.tsx`
Replace the three roles with CV versions, keeping the same card structure, tag pills, and timeline:

1. **Outsource Global — Virtual Assistant & Remote Operations Support** · Nov 2024 – Mar 2026 · Remote
   - Executive calendar/inbox support, document prep, spreadsheet updates, task tracking.
   - Synthesized messages/notes into action items + pending priorities for managers.
   - 60–80+ daily records across CRM and shared workspaces with strong data accuracy.
   - Built reports, trackers, meeting notes & workflow summaries in Sheets/Excel.
   - Coordinated reminders & follow-ups so deadlines and client requests didn't slip.
   - Tags: `Calendar & Inbox`, `Action Items`, `Sheets/Excel`, `CRM`

2. **Turing — Customer Service Rep · Account Documentation Support** · Sept 2023 – Jul 2024 · Remote
   - Documented client interactions, updated CRM, escalated cleanly.
   - Verified customer details and maintained accurate interaction histories.
   - Built response templates and resolution notes for consistency.
   - Tags: `CRM Hygiene`, `Documentation`, `Templates`

3. **Flutterwave — Operations & Administrative Support Intern (Paid)** · Jan 2023 – Jul 2023 · Remote · Internship
   - Data entry, online research, digital file organization, task tracking, basic reporting.
   - Built Sheets trackers for clients, workflow progress, follow-ups.
   - Prepared meeting notes & internal summaries for cross-team visibility.
   - Tags: `Operations`, `Sheets`, `Documentation`

Page header copy updates accordingly ("Two-plus years supporting executives and remote ops…").

## 5. SkillsPage — `src/pages/SkillsPage.tsx`
Rebuild skill categories to map to the CV's Core Skills:
- **Executive Support** — Calendar Mgmt, Inbox Prioritization, Meeting Prep, Action-Item Tracking, Reminders & Follow-ups
- **CEO Operations** — Call/Transcript Review, Note Synthesis, Deadline Tracking, Strategic Task Visibility
- **Client & Coaching Support** — Coaching-Call Notes, Client Updates, Webinar/Masterclass Follow-ups, Lead Nurturing, Professional Correspondence
- **Digital Organization** — Google Drive, Document Control, CRM Updates, Spreadsheet Trackers, SOP Compliance, Reporting
- **Tools & Platforms** — Google Workspace, Microsoft Excel, Zoom, Slack, Trello, Notion, Salesforce, HubSpot, Zendesk, AI productivity tools
Update the LiquidMeter / proficiency values to sensible EA levels (e.g., Calendar/Inbox 95, Notes/Action Items 95, CRM 90, Sheets/Excel 90, etc.). Replace any "voice / AHT / FCR" copy.

## 6. EducationPage — `src/pages/EducationPage.tsx`
- Education: `BSc — Lasustech (In Progress)`, `HND — Yaba College of Technology, Lagos`, `ND — Lagos State Polytechnic`.
- Certifications (replace with CV list):
  - Remote Operations & Virtual Assistance Mastery
  - Digital Workplace Productivity & CRM Essentials
  - Advanced Administrative Support Foundations
  - Customer Support & Email Handling Essentials

## 7. ContactPage — `src/pages/ContactPage.tsx`
- Update headline/sub copy to EA tone ("Bring on a calm, discreet second brain…").
- Phone numbers from CV: `+234 704 916 3089`, `+234 707 985 2097`. Email stays `conquestaisiri@gmail.com`.
- Reframe any "support shifts" mention as "Aligned to PST / MST / EST / CST business hours".

## 8. Footer + global meta
- `src/components/layout/Footer.tsx`: tagline → "Virtual Executive Assistant · Lagos → Remote-first".
- `index.html`: update `<meta name="description">`, OG & Twitter titles/descriptions to the new VA positioning. Keep `<title>` as `Conquest CV`.

## 9. Out of scope (explicitly)
- No layout, design-token, color, animation, or routing changes.
- Web3 routes stay hidden exactly as they are now.
- No backend, no new dependencies.
- Static HTML mirror in `public/HTML Website/` not touched unless you ask.

---

### Technical notes
- All edits are localized to the files listed above — search-and-replace style, not rewrites.
- Profile image reused from existing `@/assets/conquest-profile.jpg`; no new asset upload needed.
- Numbers in the floating KPI card and stats bar are grounded in the CV (60–80+ records, 2–3 yrs, TZ coverage) — no inflated metrics.
