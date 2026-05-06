# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Yamesa waitlist landing page — a single-page Next.js site promoting the Yamesa curated music discovery platform. Sections scroll vertically: Hero → About → Waitlist → Team → Footer.

## Commands

```bash
npm run dev      # Start dev server (Next.js with Turbopack)
npm run build    # Production build
npm run start    # Serve production build
```

No linting, formatting, or test commands are configured.

## Tech Stack

- **Next.js 16.1.6** (App Router, Turbopack)
- **React 19** with TypeScript strict mode
- **Tailwind CSS v4** via `@tailwindcss/postcss` — uses the new `@theme inline` syntax in `globals.css` for design tokens (no `tailwind.config.js`)
- **GSAP** (ScrollTrigger + SplitText) for the About section's scroll-reveal text animation
- **Path alias:** `@/*` → `./src/*`

## Architecture

All components are client components (`"use client"`) since they use hooks for interactivity.

`src/app/page.tsx` composes five section components in order:
- `Hero` — Parallax scroll effect with a "traveling bust" image that moves and fades via raw `requestAnimationFrame` + scroll listener (no GSAP)
- `About` — GSAP SplitText lines revealed on scroll via `backgroundPositionX` animation
- `Waitlist` — Email form with listener/creator role toggle (form submission is stub — no backend)
- `Team` — Desktop: expandable pill cards on hover; Mobile: stacked cards
- `Footer` — Live clock (Mumbai time), newsletter form (stub), nav links

## Design System

Defined in `src/app/globals.css` via `@theme inline`:
- Background: `#0A0A0A`, Foreground: `#F5F1E8`, Accent: `#C9A36A`
- Fonts: Inter (`--font-sans`) for body, Playfair Display (`--font-display`) for headings
- Dark theme throughout — all sections use `bg-black` with white/opacity text

## Key Patterns

- Scroll animations use two approaches: GSAP ScrollTrigger (About) and manual RAF-based parallax (Hero). Don't mix — use the same approach already in use when editing a section.
- The `.about-line` class in `globals.css` drives the text-reveal effect via `background-clip: text` and `background-position-x` animation.
- Forms have no backend integration yet — they just toggle a "submitted" state locally.
- Images are in `public/` and referenced directly by path. Team member photos follow the pattern `/{name}-img.jpeg`.
