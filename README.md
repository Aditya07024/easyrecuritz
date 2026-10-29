# Easy Recruiitz 365

A recruitment website built with **React 19**, **React Router 7** and **Vite**, focused on UI/UX, accessibility and responsive design.

## Features
- **Job search** (`/jobs`): keyword / location / field search, job-type filters, sorting, URL-synced state (shareable links), saved jobs (localStorage) and an accessible detail drawer (focus trap, Esc to close, deep links via `?job=`).
- **Homepage**: hero with integrated search, stats, featured roles, audience split, services, approach, commitments, animated FAQ and a validated contact form.
- **Accessibility**: skip link, visible focus states, ARIA on menu/accordion/dialog/forms, `prefers-reduced-motion` support, AA colour contrast (0 axe-core violations on all routes).
- **Responsive**: mobile menu with scrim, 16px inputs (no iOS zoom), no horizontal scroll at 390px.
- **Polish**: scroll-reveal animations, count-up stats, 404 page, SEO / Open Graph tags.

## Getting started
```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview
```

## Structure
```
src/
  components/   Layout (header, footer, scroll manager), ui helpers (useReveal, CountUp)
  data/         jobs.js — sample vacancies & categories
  pages/        HomePage + sections, JobsPage, AboutPage, NotFound
  styles.css    base design system
  ui.css        refinements, new components, accessibility & contrast pass
```

## Before going live
- `src/data/jobs.js` holds **sample** vacancies — replace with real data or an API.
- The contact form simulates sending; wire `submit()` in `src/pages/Contact.jsx` to your backend / email service.
