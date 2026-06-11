# Manjit.gupta — Personal Portfolio

A dark minimal developer portfolio built with Next.js 14, Tailwind CSS, and React Icons.

![Portfolio Preview](https://img.shields.io/badge/status-live-brightgreen?style=flat-square)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat-square&logo=tailwindcss)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + CSS Variables |
| Icons | React Icons |
| Fonts | Syne · DM Sans · Space Mono (via next/font) |
| Deployment | Vercel |

---

## Features

- **Scramble text effect** — name unscrambles on page load
- **Typewriter animation** — cycling roles with delete/type effect
- **Animated dot grid** — canvas-based background, GPU-friendly
- **Bento project grid** — featured project + smaller cards
- **Zigzag timeline** — alternating left/right journey entries
- **Icon skill grid** — brand-colored tech icons with hover glow
- **Custom text selection** — lime green highlight matching accent
- **Fully responsive** — mobile-first with CSS media queries
- **Zero scroll lag** — IntersectionObserver, no scroll listeners

---

## Sections

```
Hero          → Scramble name, typewriter role, code block
About         → Bio, stats, tech stack icons by category
Projects      → Bento grid with featured card
Journey       → Zigzag vertical timeline
Contact       → Email copy button + social links
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Fonts, metadata, navbar, footer
│   ├── page.tsx            # All sections composed here
│   └── globals.css         # CSS variables + base styles
│
├── components/
│   ├── navbar.tsx
│   ├── footer.tsx
│   └── sections/
│       ├── hero.tsx
│       ├── about.tsx
│       ├── projects.tsx
│       ├── experience.tsx
│       └── contact.tsx
```

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/Manjit-gupta/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run locally
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

---

## Design System

```css
--bg-primary:   #0a0a0a    /* main background */
--bg-surface:   #111111    /* cards, sections */
--accent:       #a3e635    /* lime green accent */
--text-primary: #f0f0f0    /* headings */
--text-secondary:#888888   /* body text */
--font-heading: 'Syne'     /* bold display font */
--font-body:    'DM Sans'  /* readable body font */
--font-mono:    'Space Mono' /* code, labels, tags */
```

---

## Connect

- **Email** — manjitkumar7667693313@gmail.com
- **GitHub** — [Manjit-gupta](https://github.com/Manjit-gupta?tab=repositories)
- **LinkedIn** — [Manjit Gupta](https://www.linkedin.com/in/manjit-gupta-02b8b7296/)
- **Twitter** — [@ManjitGupta1821](https://x.com/ManjitGupta1821)

---

Built by **Manjit gupta** · 2026