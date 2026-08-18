# Heber Alvarez Portfolio

A bilingual portfolio for Frontend Engineer Heber Alvarez, designed as an interactive two-sheet folder.

**Live site:** [heber-alvarez-portfolio.vercel.app](https://heber-alvarez-portfolio.vercel.app/)

## Why a two-sheet folder?

The interface treats every section as a small editorial spread. On desktop, content is presented across two facing pages with a visual spine. On mobile, the same pages become two stacked sheets with natural document scrolling, preserving the visual identity without sacrificing usability.

## Features

- Two-page folder interface on desktop
- Two-sheet vertical layout on mobile
- English and Spanish content with persistent language preference
- Accessible tab navigation and keyboard support
- Reduced-motion support
- Professional case studies with clear confidentiality labels
- Downloadable CV and verified contact links
- Open Graph, sitemap, robots and structured profile metadata

## Selected work

- Design System & AI-Ready Dashboards - private professional case study
- Satellite Imagery & Voronoi Map - private professional case study
- [`@isettingkit/business-rules`](https://www.npmjs.com/package/@isettingkit/business-rules) - public npm package
- [AWS CDK Networking Lab](https://github.com/heber59/aws-cdk-networking-lab) - infrastructure as code and CI/CD
- [Stock AI Prediction Backend](https://github.com/heber59/stockAiBackend) - FastAPI and XGBoost pipeline
- Interactive Portfolio Folder - this open-source project

Private case studies intentionally exclude client names, screenshots, source code and unverifiable metrics.

## Tech stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide icons
- Vercel

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Checks

```bash
pnpm lint
pnpm build
```

## Project structure

```text
app/
  layout.tsx
  page.tsx
  globals.css
  opengraph-image.tsx
  robots.ts
  sitemap.ts
components/
  Folder.tsx
  PageView.tsx
  Tabs.tsx
  LanguageSwitcher.tsx
  sections/
context/
  LanguageContext.tsx
utils/
  copy/
public/
  assets/
app/cv/
  route.ts
```

## Accessibility

- A skip link provides direct access to the portfolio content.
- Tabs support keyboard navigation using arrow, Home and End keys.
- Selected language and tabs expose their current state to assistive technology.
- Animations respect `prefers-reduced-motion`.
- Mobile content uses natural page scrolling and avoids fixed viewport heights.

## Contact

- [LinkedIn](https://www.linkedin.com/in/heber-santiago-alvarez-rincon-799427230/)
- [GitHub](https://github.com/heber59)
- [npm](https://www.npmjs.com/package/@isettingkit/business-rules)
- [Email](mailto:hesan0308@gmail.com)

## License

MIT

