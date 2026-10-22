# Armon Damp Specialists

A marketing landing page for Armon Damp Specialists, a damp proofing, mould removal and property preservation company serving the South of England.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

## Overview

A website built for a UK damp and mould specialist, scaffolded with Google AI Studio and composed of reusable React section components. The page focuses on generating survey requests and building trust.

## Features

- Hero section with ratings highlight and a survey request form (name, email, phone, postcode)
- Top bar with trust points (guarantees, insurance, professional surveyors) and responsive navigation
- Trust badges, "what to expect" features and a "how it works" process section
- Call-to-action for a damp survey and estimate
- FAQ accordion
- Team section, services overview (damp proofing, mould remediation, condensation, timber preservation, roofing, structural and water damage, surveys) and service grid
- Testimonials section
- Dedicated section on Awaab's Law compliance for damp and mould
- Footer with contact details and quick links

## Tech Stack

- React 19 + TypeScript, built with Vite 6
- Tailwind CSS 4
- Motion (animations) and Lucide icons

## Getting Started

**Prerequisites:** Node.js 18+

```bash
git clone https://github.com/coderasraf/Armon-South.git
cd Armon-South
npm install
npm run dev      # http://localhost:3000
```

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server on port 3000 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Type-check with `tsc --noEmit` |

## Environment Variables

The AI Studio template exposes `GEMINI_API_KEY` (and `APP_URL`) through `vite.config.ts` / `.env.example`, but the current site does not call any AI APIs, so no variables are required to run it.

## Project Structure

```text
Armon-South/
├── index.html
├── src/
│   ├── App.tsx            # Page composition
│   ├── main.tsx
│   ├── index.css          # Tailwind and theme styles
│   └── components/        # Navbar, Hero, TrustBadges, Features, HowItWorks, CallToAction,
│                          # FAQ, AboutTeam, ServicesList, Testimonials, AwaabsLaw, ServiceGrid, Footer
├── vite.config.ts
└── package.json
```

## Author

Built by **Ashraf Siddik**, Shopify developer & CRO specialist.

- Website: [ashraf-siddik.com](https://ashraf-siddik.com)
- GitHub: [@coderasraf](https://github.com/coderasraf)
