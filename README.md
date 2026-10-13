# britsuurraid.com

Brit Suurraid's personal site: a single static page in English (`/`) and Estonian (`/et/`). No build step, no dependencies.

Positioning, in Brit's own words: **"I give people a reason to show up."** Community building leads, and strength coaching (in person and online) is the site's main call to action. The waitlist runs via Instagram DM.

The page reads like a community noticeboard:
- **Hero:** a "HELLO my name is" name tag on a taped polaroid.
- **What's on:** a ticker.
- **Two ways to work together:** pinned cards for coaching (Train with me) and companies (Build with me).
- **Community:** the Stay Larsen story, stat stickers, a long table whose 16 seats fill as you scroll, and polaroid photo slots.
- **Newsroom:** five years at TV3.
- **Coaching:** the offer, the PT certificate and her training log.
- **Podcast:** Toss väljas, plus the archive.
- **Freelance clients.**
- **Contact:** a flyer with tear-off strips. There's deliberately no form: contact goes through Instagram DM, LinkedIn or email, so the site stays fully static.
- **Fitness touches:** a floating heart-rate pill, a heartbeat line, a PT ring that fills as you scroll, and the training log.
- **Palette:** pastel pink (`--pink`), butter yellow (`--butter`) and deep plum. She loves pastels and hates neon. Use `--pink-deep` for pink text on light backgrounds.

## Files

```
index.html        English page (also the language router for first-time visitors)
et/index.html     Estonian page: keep it in sync with index.html
styles.css        all styles (tokens at the top)
main.js           animations, parallax, long-table seats, heart rate, language memory
assets/           images
favicon.svg, apple-touch-icon.png
404.html          "Wrong room" page for missing URLs (root-absolute paths)
sitemap.xml, robots.txt
assets/og.jpg     1200×630 social preview crop
CNAME             custom domain for GitHub Pages
.nojekyll         serve files as-is (skip Jekyll)
assets/*-public.pdf  public CVs, EN and ET (no phone number)
private/          questionnaire answers, CV source, ATS notes (gitignored, never published)
```

## Preview locally

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080 (and http://localhost:8080/et/).

## Fill in the placeholders

The few remaining placeholders have `class="todo"` and show a dashed pink underline. Find them all:

```bash
grep -n 'todo' index.html et/index.html
```

Before launch:
- **Photos.** Swap the four polaroid placeholders (`.pola .ph`) for her event photos (Halloween, Italian food night, Aegviidu, Instagram). A photo of her training and podcast cover art would lift the coaching and podcast sections too.
- **Coaching package.** Confirm the "What you get" list with Brit (marked `todo`).
- **Job title.** Confirm "tegevtoimetaja" is the right Estonian title for Executive Editor: `grep -n tegevtoimeta et/index.html`.
- **After November:** the site already treats the PT certificate as awarded; update the CV ("certifying in November 2026") once it lands.

## CV

Two templates in `private/cv/`, English (`cv.template.html`) and Estonian (`cv-et.template.html`): one column, real text, standard headings. `private/cv/build.sh` turns them into four PDFs:
- `private/cv/Brit-Suurraid-CV.pdf` and `Brit-Suurraid-CV-ET.pdf`, with her phone number, for applications.
- `assets/Brit-Suurraid-CV-public.pdf` and `assets/Brit-Suurraid-CV-ET-public.pdf`, without it, linked from the EN and ET pages.

After editing a template, rebuild everything (macOS with Chrome):

```bash
private/cv/build.sh
```

The AI and automation lines (CV skills, the "Human touch, AI-assisted" note on the site) describe workflows Brit should actually be running before the CV goes out, because interviewers will ask her to show one.

## Language behaviour

- **First visit to `/`:** the page checks the browser's language order. If Estonian comes before English, it redirects to `/et/`.
- **The EN/ET switch** saves the visitor's choice (`localStorage.lang`), and that choice always wins from then on. If storage is blocked, the switch still works: a visit that comes from another page on the site is never redirected.
- **A direct link to `/et/`** is never redirected.

## Deploy to GitHub Pages (free)

1. Create a **public** GitHub repo (free Pages needs public) and push this folder. `private/` stays out because of `.gitignore`.
   ```bash
   git init && git add . && git commit -m "Initial site"
   git branch -M main
   git remote add origin git@github.com:<user>/britsuurraid.com.git
   git push -u origin main
   ```
2. In the repo, go to **Settings → Pages**. Under **Source**, choose *Deploy from a branch*, then `main` / `/ (root)`.
3. Under **Custom domain**, enter `britsuurraid.com` and save. The `CNAME` file already contains it.
4. **DNS at GoDaddy** (the domain's current nameservers). It still has GoDaddy's parking records, which **must go**. If they stay, requests are split between GoDaddy and GitHub and HTTPS never gets issued.
   - Delete the `A @ Parked` record(s) (3.33.130.190 / 15.197.148.33) and turn off Domain Forwarding if it's on.
   - Change `CNAME www` from `@` to `<user>.github.io` (the account that owns the repo, without the repo name).
   - Add:

   | Type | Host | Value |
   |---|---|---|
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | AAAA | @ | 2606:50c0:8000::153 |
   | AAAA | @ | 2606:50c0:8001::153 |
   | AAAA | @ | 2606:50c0:8002::153 |
   | AAAA | @ | 2606:50c0:8003::153 |
   | CNAME | www | `<user>.github.io` |

   Don't add a wildcard `*` record. Check with `dig +short britsuurraid.com A`: it must return only the four 185.199.x.153 addresses.

5. Wait for "DNS check successful" in Settings → Pages, then tick **Enforce HTTPS**. The certificate can take up to 24 h. GitHub redirects `www` to the bare domain on its own.
6. Recommended: verify the domain under your GitHub account's **Settings → Pages → Verified domains**, so nobody else can claim it.

Every push to `main` redeploys within about a minute.
