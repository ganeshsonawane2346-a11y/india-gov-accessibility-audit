# India.gov.in Accessibility Baseline & Repository Architecture Audit

A learning project that audits the public-facing National Portal of India and provides an accessible full-stack starter application. This repository is independent and is **not affiliated with or endorsed by the Government of India**.

## Scope and evidence rules

- Target website: https://www.india.gov.in/
- Standards reference: GIGW 3.0 and WCAG 2.2 (use WCAG 2.1 AA where the GIGW 3.0 text specifically references it).
- Public-page inspection can identify visible controls and content, but cannot establish the site's internal server architecture.
- No Lighthouse score, keyboard result, or confirmed defect is claimed until the relevant test is actually run.
- See [`docs/accessibility-audit.md`](docs/accessibility-audit.md) for the preliminary findings and evidence status.

## Architecture

```text
india-gov-accessibility-audit/
├── client/                 # React + Vite user interface
├── server/                 # Express API
├── docs/                   # Audit, architecture, evidence
├── tests/                  # Playwright browser tests
├── package.json            # npm workspaces and root scripts
└── .gitignore
```

## Requirements

- Node.js 20.19+ or 22.12+
- npm 10+
- Git

## Local setup

```bash
npm install
npm run dev
```

Vite runs the client at http://localhost:5173. The Express API runs at http://localhost:4000.

In another terminal:

```bash
npm run test
```

To run browser tests after installing Playwright browsers:

```bash
npx playwright install
npm run test:e2e
```

## First vertical feature slice: service directory

The first slice is intentionally small:

1. React renders an accessible service directory.
2. The client requests `GET /api/services`.
3. Express returns a small sample dataset.
4. The UI presents the results as semantic links/cards with headings.
5. Playwright checks that the page loads and the service list is visible.

The sample records are demonstration data, not a mirror or official feed from India.gov.in.

## Audit workflow

1. Open https://www.india.gov.in/ in Chrome.
2. Run Lighthouse with the Accessibility category selected; save the HTML report and screenshot.
3. Test keyboard-only navigation with Tab, Shift+Tab, Enter, Space and Escape.
4. Inspect accessible names, contrast, image alternatives, heading order and landmarks.
5. Update the evidence status and priority in `docs/accessibility-audit.md`.
6. Store screenshots in `docs/evidence/`. Do not include personal information in screenshots.

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start client and API |
| `npm run build` | Build client |
| `npm run test` | Run server/client unit tests |
| `npm run test:e2e` | Run Playwright browser tests |
| `npm run lint` | Run ESLint |

## Important limitations

This starter does not scrape India.gov.in, copy its branding, or call unofficial APIs. A public website's frontend does not reveal its complete backend, database, hosting, CMS, or deployment architecture. Those details are marked unknown unless supported by official documentation or verifiable technical evidence.
"# task-1" 
