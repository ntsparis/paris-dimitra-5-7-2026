# CLAUDE.md — Παρασκευάς & Δήμητρα Wedding Page

## Project Overview

A single-page Greek wedding invitation website for **Παρασκευάς Ντσούνος** and **Δήμητρα Κωστάκη**, wedding date **5 Ιουλίου 2026**, Λάρισα, Ελλάδα.

All user-facing text is in **Greek**. Keep it that way — never switch to English in content.

## Stack

- Pure HTML/CSS/JS — no frameworks, no build step, no dependencies
- **Single file: `index.html`** — everything (styles, markup, scripts) lives here
- One long scrollable page divided into named `<section>` / `<div>` blocks
- Google Fonts: Cormorant Garamond, EB Garamond, Cinzel

## Design Language

### Tone
Elegant, romantic, minimal. Think luxury stationery — not flashy, not playful.

### Color Palette (CSS variables in `:root`)
| Variable | Hex | Use |
|---|---|---|
| `--coral` | `#E07A5F` | Primary accent, headings, tags |
| `--peach` | `#F2A07B` | Secondary accent |
| `--blush` | `#F5C4A8` | Borders, dividers |
| `--blush-light` | `#FAE5D6` | Backgrounds, placeholders |
| `--sage` | `#8B9E7A` | Timeline dots, botanical accents |
| `--sage-light` | `#C5D4BC` | Sage highlights |
| `--cream` | `#FDF6F0` | Primary background |
| `--cream2` | `#F7EDE4` | Alternating section background |
| `--dark` | `#3A2820` | Primary text |
| `--mid` | `#7A5A4A` | Body text, subtitles |
| `--lt` | `#A0806A` | Muted labels, secondary info |

Never introduce new colors without fitting them into this warm, muted palette.

### Typography
- **Cinzel** — section tags, labels, nav links (uppercase, tracked)
- **Cormorant Garamond** — headings, hero names, large display text (italic, light weight)
- **EB Garamond** — body text (italic, fluid)

Font sizes should use `clamp()` for responsive scaling. Never hardcode px sizes for headings.

### Animations & Interactions
All scroll-triggered animations use the `.reveal`, `.reveal-left`, `.reveal-right` classes with `IntersectionObserver`. Delay classes `.d1`–`.d5` stagger children.

Rules:
- Entrance animations: `opacity 0 → 1` + `translateY/X` easing with `cubic-bezier(.4,0,.2,1)`
- Duration: ~0.85–0.9s, never faster than 0.6s
- Hero elements animate on load via CSS `@keyframes fadeUp` / `fadeIn` with `animation-fill-mode: forwards`
- Hover transitions: `0.25–0.35s ease` — subtle lifts, color shifts, glow rings
- Parallax: hero background shifts on scroll via JS (`translateY`)
- Countdown: live JS ticker updating every second

Never use JS animation libraries. Keep everything CSS + vanilla JS.

## Layout Conventions

- Sections alternate between `--cream` and `--cream2` backgrounds
- Max content width: `780px` centered (`.section`), `960px` for photo splits
- Sections separated by `.full-div` gradient dividers
- Mobile breakpoints: `720px` (nav), `600px` (grid collapses), `540px` (timeline)
- Nav is fixed, 60px height, blurred backdrop

## Key Sections (in order)

1. **#home** — Hero with names, date, parallax background, corner SVG botanicals, scroll cue
2. **#couple-photo** — Split grid: photo left, text right
3. **#countdown** — Live countdown to 5 Ιουλίου 2026 19:50
4. **#story** — 4-card story grid (2020, 2022, 2025, 2026)
5. **#families** — Two-column family names (νύφη / γαμπρός)
6. **#koumparos** — Κουμπάρα: Δέσποινα Τόκα
7. **#program** — Alternating timeline with dots
8. **#ceremony** — Church: Ιερός Ναός Προφήτη Ηλία, 19:50, embedded map
9. **#reception** — Venue: Κτήμα Έλενα, Αμπελώνας, ~21:00, embedded map
10. **#qa** — Dark background Q&A grid
11. **footer** — Names, divider, closing message

## Important Details

- Wedding datetime: `2026-07-05T19:50:00` (used in countdown JS)
- Church coordinates: `39.6241144, 22.412569`
- Reception: Κτήμα Έλενα, Αμπελώνας, Λάρισα
- Κουμπάρα: Δέσποινα Τόκα
- Bride's parents: Χρήστος Κωστάκης & Αγλαΐα Παναστασίου
- Groom's parents: Αχιλλέας Ντσούνος & Μαρία Παππά

## Do / Don't

**Do:**
- Keep all content in Greek
- Use the existing CSS variable system — never hardcode colors
- Respect the elegant, serif-heavy typographic hierarchy
- Add `reveal` / `reveal-left` / `reveal-right` + delay classes to any new content blocks
- Use `clamp()` for responsive font sizes
- Test on mobile — grids must collapse gracefully

**Don't:**
- Introduce JS libraries or CSS frameworks
- Add emojis (the `✿` petal is intentional and part of the design system)
- Use bright, saturated, or cool colors
- Add sans-serif fonts
- Break the single-file structure unless explicitly asked
