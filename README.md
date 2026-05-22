# Pine Counseling

> Academic Curator — International University Admissions Consulting

A pixel-perfect, production-ready Next.js 14 website for Pine Counseling, built from the Pativo Figma design system.

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion v11 |
| Fonts | Space Grotesk + DM Sans via `next/font/google` |
| Deploy | Vercel |

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deploy to Vercel

```bash
# Option A — Vercel CLI
npx vercel

# Option B — GitHub
# Push this repo to GitHub, then import at vercel.com/new
```

No environment variables required for the base site.

---

## Project Structure

```
pine-counseling/
├── app/
│   ├── globals.css       # Tailwind directives, ticker keyframe, global styles
│   ├── layout.tsx        # Root layout — fonts, metadata
│   └── page.tsx          # Home page — assembles all sections
├── components/
│   ├── Nav.tsx           # Sticky dark-green nav, mobile hamburger drawer
│   ├── Hero.tsx          # Full-height hero, parallax dot pattern, stats
│   ├── Ticker.tsx        # Infinite CSS-scroll university name ticker
│   ├── Services.tsx      # 3 service cards, staggered scroll entry
│   ├── Approach.tsx      # 3-step approach, 40/60 two-column layout
│   ├── Ecosystem.tsx     # 6 glass cards on dark parallax bg
│   ├── FounderQuote.tsx  # Centred founder quote with decorative mark
│   ├── CTABanner.tsx     # Dark-green CTA section
│   └── Footer.tsx        # 4-column responsive footer
├── lib/
│   └── tokens.ts         # All design tokens + copy arrays (single source of truth)
├── public/               # Static assets
├── tailwind.config.ts    # Tailwind theme with all design tokens
├── next.config.ts
├── postcss.config.js
└── tsconfig.json
```

---

## Design Tokens

All design tokens live in two files:

- **`lib/tokens.ts`** — TypeScript constants for colors, spacing, copy arrays
- **`tailwind.config.ts`** — Tailwind theme extension with the same token values

### Colors

| Token | Value | Usage |
|---|---|---|
| `brand` | `#2e4a3a` | Primary brand green |
| `bg-primary` | `#eae6dd` | Main background (warm cream) |
| `bg-secondary` | `#e4ece5` | Section alternate background |
| `text-primary` | `#1a1f1b` | Body text |
| `text-secondary` | `#4a514b` | Muted text |
| `text-on-dark` | `#eae6dd` | Text on brand-green backgrounds |
| `border-default` | `#d9d2c5` | Card and divider borders |

### Fonts

- **Space Grotesk** (Bold, SemiBold) → headings, stats, logo
- **DM Sans** (Regular, Medium, Bold) → body, labels, eyebrows

---

## Animations

All animations are implemented with **Framer Motion**:

| Animation | Implementation |
|---|---|
| Hero parallax dot pattern | `useScroll` + `useTransform` at 0.3× scroll speed |
| Ecosystem parallax pattern | Same, at 0.2× speed |
| Section text/heading entry | `whileInView`, `initial={{ opacity:0, y:30 }}`, `duration: 0.6s easeOut` |
| Staggered cards | `delay: index * 0.1` per card |
| Nav hamburger | `AnimatePresence` slide-down drawer |
| University ticker | Pure CSS `ticker-scroll` keyframe, 35s linear infinite |

---

## Customisation

### Update copy
Edit `lib/tokens.ts` — all headings, body text, service descriptions, and ecosystem card content are exported as typed arrays.

### Update colors
Edit both `lib/tokens.ts` → `colors` and `tailwind.config.ts` → `theme.extend.colors`.

### Add pages
Create new route files under `app/` following Next.js App Router conventions.

---

## Browser Support

Modern evergreen browsers (Chrome, Firefox, Safari, Edge). `backdrop-filter` glass cards degrade gracefully in older browsers (solid semi-transparent fill fallback via Tailwind).
