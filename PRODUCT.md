# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary: women looking for a strength coach.** All levels, from never-been-to-a-gym beginners to people who already train and want to train more mindfully. In person in Tallinn and online. They arrive curious, often on a phone from Instagram, and need to trust Brit enough to send a DM.
- **Secondary: companies.** Coliving, hospitality, wellness and lifestyle brands looking for freelance community management, events, social media, content or hosting. They need to see real work quickly. Brit is no longer actively looking for a full-time job, so the site does not pitch to hiring managers.
- **Also:** podcast listeners and people inviting Brit to speak or host.

## Product Purpose

Brit Suurraid's personal site, in English (`/`) and Estonian (`/et/`). Its main job is to turn visitors into coaching clients via the waitlist, and to make Brit read first as a strength coach and personal trainer. Its second job is to show companies what she does as a community builder, host and content creator.

Success: a visitor who wants a coach joins the waitlist (Instagram DM to @britigatrennis, "waitlist") or follows her fitness Instagram; a company gets in touch.

## Positioning

"I give people a reason to show up." Brit is one person who has built a community from scratch (Stay Larsen), led a newsroom team (tv3.ee, five years, awarded twice), hosts a podcast (Toss väljas), and has lifted for ten years and is now a certified International Personal Trainer. The coaching is friendly and sustainable, not drill-sergeant; the community work is human first, with AI handling the repetitive parts.

## Operating Context

- Contact runs through Instagram DM, LinkedIn and email. No forms, no booking system, no backend.
- Two Instagram accounts: **@britigatrennis** is fitness and coaching only (the waitlist DM goes here); **@britsuurraid** is her personal account for general contact.
- Coaching waitlist is an Instagram DM to @britigatrennis with the word "waitlist".
- Visitors often come from Instagram on mobile; employers often come from LinkedIn or a CV link on desktop.
- Public CVs (EN and ET, no phone number) are linked from the site and built from templates in `private/cv/`.

## Capabilities and Constraints

- Static site on GitHub Pages: plain HTML, one `styles.css`, one `main.js`. No build step, no dependencies.
- EN and ET pages must stay in sync. Language routing: browser language on first visit, saved EN/ET choice wins after that, a direct `/et/` link is never redirected.
- `private/` is gitignored and never published (questionnaire answers, CV source, notes).
- Placeholders are marked `class="todo"`.
- Brit is a certified International Personal Trainer (Intensive PT, 2026). Coaching runs from November 2026.

## Brand Commitments

- Name: Brit Suurraid. Line: "I give people a reason to show up."
- Voice: hilarious, friendly, dedicated. Warm, plain, a little funny. First person.
- Brit loves pastels (pink, butter yellow) and hates neon. Binding.
- "Human touch, AI-assisted" describes workflows she actually runs; keep claims to what she can demonstrate.
- Coaching voice, from Brit's own text: a guide to a healthier lifestyle; a safe, supportive, judgment-free space; no extremes, exhaustion or restriction; training is about fuelling and respecting your body, not punishing it. She says "licensed personal trainer" (IntensivePT, EQF Level 4).
- Brit shares her own experience of anorexia, depression and anxiety in the coaching section, in her words. Keep it in her words and in that section only: never use it as a headline, hook, ticker item or marketing claim, and never add before/after framing, body-shape promises or weight-loss language.

## Evidence on Hand

- Photos in `assets/`: gym portrait (`brit-coach-portrait.webp`) and pull-up bar shot (`brit-pullup.webp`), forest portrait, two Stay Larsen sofa shots, community events (long table, ping-pong, Christmas market, Aegviidu trip), `og.jpg`.
- Public CVs: `assets/Brit-Suurraid-CV-public.pdf`, `assets/Brit-Suurraid-CV-ET-public.pdf`.
- Usable numbers: TV3 (5 years, awarded twice, 100+ video interviews, team of five), Toss väljas (30k+ plays, 3 episodes), Miks me oleme idioodid? (69 episodes, 100k+ plays, #1 on Spotify more than once), 10 years of lifting, 4 sessions a week.
- Freelance clients can be named, but there are no result numbers for them.
- **Do not publish or invent:**
  - Stay Larsen numbers (attendance, budget, rooms, buildings). Describe what Brit did instead.
  - Testimonials, client results, or coaching pricing. None exist yet.
  - Phone number, home address, salary, or reference names.
  - The topic of her biggest TV3 story.

## Product Principles

1. Brit is a strength coach first. Coaching is the main call to action; everything else builds trust for it or serves the second audience.
2. Show, don't claim: real photos, real roles, real numbers only where they're cleared.
3. Every contact path is one tap to a real person. No forms.
4. Two languages, one site: never ship a change to one without the other.
5. Warm and funny, never salesy or loud.

## Accessibility & Inclusion

No product-specific requirement established beyond standard web accessibility. Estonian and English are equal first-class languages.
