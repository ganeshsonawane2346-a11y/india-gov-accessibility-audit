# India.gov.in accessibility baseline audit

**Target:** https://www.india.gov.in/  
**Audit type:** Preliminary public-page inspection and test plan  
**Prepared:** 15 November 2026  
**Status:** Preliminary — browser-based Lighthouse and keyboard test evidence still required.

## Method and evidence standard

The publicly indexed homepage content exposes a search input, a selector, a Search button, trending-search buttons, service statistics, information categories and online-service links. This is evidence of the controls/content being present in the rendered page, not proof that they fail accessibility requirements.

The five entries below are **verification candidates**, not confirmed defects. Do not report them as failures until the indicated test establishes a failure. Capture a screenshot, URL, timestamp, browser and exact steps for each confirmed issue.

## Findings register

| ID | Area / candidate issue | Evidence currently available | Priority (provisional) | Verification and remediation |
|---|---|---|---|---|
| A-01 | Search input and selector may lack programmatic labels | Homepage representation shows an input, selector and Search button. The text representation does not expose their computed accessible names. | High if missing | Inspect with browser accessibility tree and screen reader. Give each control a persistent visible `<label>` or appropriate accessible name; associate help/error text. |
| A-02 | Keyboard focus may be hard to see or focus order may be confusing | Interactive search and trending controls are present; no keyboard-only session has been recorded. | High if a core task is blocked | Use Tab/Shift+Tab through header, search, trending actions and service links. Ensure logical order, visible focus, no keyboard trap and operability without pointer. |
| A-03 | Text or controls may have insufficient contrast | Homepage includes text, buttons, links and visual elements; no measured foreground/background colour pairs are available from the text snapshot. | High for affected essential content | Measure actual rendered colours. Meet WCAG contrast thresholds: 4.5:1 for normal text, 3:1 for large text and 3:1 for relevant UI components/graphics. Fix tokens and states, not just one screenshot. |
| A-04 | Informative images may have missing or unhelpful text alternatives | Homepage representation includes image content; alternative text for each image is not exposed in the search result. | Medium; high for essential information | Inspect DOM `alt` values and screen-reader output. Use meaningful alternatives for informative images and empty `alt=""` for decorative images. |
| A-05 | Heading hierarchy and landmark structure may be inconsistent | Homepage content includes a primary “Online Services” heading and multiple content areas; complete DOM heading/landmark order is not established by the text snapshot. | Medium; high if navigation is materially impaired | Inspect headings and landmarks. Use one descriptive page-level H1, nested headings without skipped levels where practical, and semantic header/nav/main/footer landmarks. |

## What is verified vs not verified

### Verified from publicly available homepage content

- Search input, selector and Search button are exposed in the page's public text representation.
- Trending-search actions are exposed as buttons.
- The homepage exposes online-service and information-category content.
- The site is a citizen-facing portal with service-discovery content.

### Not yet verified

- Lighthouse accessibility score and individual audit failures.
- Keyboard focus order, focus visibility and keyboard traps.
- Actual contrast ratios.
- Computed accessible names and image alternative text.
- Complete DOM heading outline and landmark tree.
- Mobile/zoom behaviour and screen-reader usability.
- Any internal backend or deployment architecture.

## Lighthouse evidence capture

1. Open the target homepage in Chrome.
2. Open DevTools → Lighthouse.
3. Select Accessibility and Desktop; run the report.
4. Save the report as `docs/evidence/lighthouse-report.html`.
5. Save a screenshot of the score and failed audits as `docs/evidence/lighthouse-score.png`.
6. Record date, browser version, viewport, page URL and whether the page was logged in (normally public/no login).

A Lighthouse score is a snapshot, not a certification or complete WCAG conformance assessment.

## Keyboard-only test record

Record each item as Pass / Fail / Not tested, plus notes:

- [ ] First Tab reaches a useful skip link (if provided).
- [ ] Search field can be reached and has an announced name.
- [ ] Selector can be operated with keyboard.
- [ ] Trending-search buttons are reachable and activatable.
- [ ] Focus indicator remains visible.
- [ ] Focus order follows a meaningful reading/interaction order.
- [ ] No keyboard trap occurs.
- [ ] Dialogs/menus, if present, open and close accessibly.
- [ ] Main content can be reached without pointer use.

Store screenshots in `docs/evidence/` and update this report with reproducible steps.

## Remediation order

1. Blockers affecting essential navigation, search or service access.
2. Missing accessible names, keyboard access/focus, contrast failures.
3. Image alternatives and heading/landmark improvements.
4. Responsive/zoom checks, content quality and regression prevention.

## Sources

- National Portal of India: https://www.india.gov.in/
- GIGW 3.0: https://guidelines.india.gov.in/
- GIGW accessibility guidelines: https://guidelines.india.gov.in/accessibility-guidelines-and-attributes/
- WCAG 2.2: https://www.w3.org/TR/WCAG22/
- Lighthouse accessibility: https://developer.chrome.com/docs/lighthouse/accessibility/
