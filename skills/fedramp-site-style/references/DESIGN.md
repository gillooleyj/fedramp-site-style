# FedRAMP project design foundation

## Evidence and scope

Reviewed October 30, 2026. All six supplied URLs were fetched with Firecrawl (`maxAge: 0`, full-page capture requested at 1440 × 1000). Live browser screenshots of each and the linked Radiance landing were visually inspected at 1280 × 720. The browser used system dark mode where supported; light-theme extraction was checked against source CSS where available. Mobile behavior was not exhaustively exercised; responsive observations below come from CSS.

This synthesis is not an official FedRAMP design standard. Source styles change; revalidate upstream for a current or exact match. Source policy statements, metrics, and illustrative claims are not reusable design content.

## Reference map

| Source | Observed contribution | Reuse boundary |
| --- | --- | --- |
| [FedRAMP.gov](https://www.fedramp.gov/) | Deep plum full-page surface, Source Sans Pro Web, white headings, warm actions, prominent metrics, updates and events | Borrow shell and hierarchy; preserve target identity and real data |
| [2026 trigrams](https://preview.fedramp.gov/2026/trigrams/) | Global tabs/search, hierarchical left rail, breadcrumbs, serif heading, ruled table, repository link | Compact documentation, exact identifiers and source access |
| [Marketplace SMB](https://pete-wai.github.io/marketplace-smb/) | Off-white, large serif question headline, split finding summary, thin dividers, green/blue charts, evidence disclosures | Keep methodology and uncertainty near findings |
| [PDFtoWeb report](https://pete-wai.github.io/pdftoweb/reports/nist-ir-8547/) | Quiet green themes, sans-serif report and prose, persistent contents rail, metadata and source/PDF links | Preserve publication structure and citations |
| [A–130 working paper](https://pete-wai.github.io/fedramp-a130/proposed-fedramp-use/index.html) | Cream paper, Georgia prose, Arial navigation, fixed rail, numbered steps, tinted quotations and workbook fields | Distinguish authority, analysis, and user answers |
| [Concept index](https://pete-wai.github.io/fedramp-design-concepts/) and [Radiance / Open House](https://pete-wai.github.io/fedramp-design-concepts/i13-open-house/) | Public Sans index; Source Sans Pro Web landing; large centered statement, two audience paths, sunrise/mountains, plum/violet/peach, themes and motion options | Expressive mode; borrow audience structure before artwork |

## GitHub evidence

Inspected repository tree revisions and pinned source files:

- [FedRAMP/2026 extra.css](https://github.com/FedRAMP/2026/blob/8404168e6c150b40e4d0e45152d18965ab27e001/overrides/stylesheets/extra.css) and [zensical.toml](https://github.com/FedRAMP/2026/blob/8404168e6c150b40e4d0e45152d18965ab27e001/zensical.toml): custom headings/grid and Zensical navigation, search, and themes. This is the official rules-site repository, not a verified checkout of the main homepage.
- [Marketplace SMB app.css](https://github.com/pete-wai/marketplace-smb/blob/4689e9cfc4f83ea75f1d3707f1d4fc0fef34e99a/src/app.css).
- [PDFtoWeb global.css](https://github.com/pete-wai/pdftoweb/blob/71e141f94da1eee0f252b6f18eef4cd895302ce6/src/styles/global.css).
- [A–130 report.css](https://github.com/pete-wai/fedramp-a130/blob/7f8f03d56d58b549f25ef2ae1073faca0998b91a/site/proposed-fedramp-use/report.css).
- [Concept index style.css](https://github.com/pete-wai/fedramp-design-concepts/blob/84d18aff68506a8d3861f9a8c6926475c5009e2e/style.css) and [Radiance base styles](https://github.com/pete-wai/fedramp-design-concepts/blob/84d18aff68506a8d3861f9a8c6926475c5009e2e/prototype/src/lib/styles/i12-base.css). The current collection is iteration 13; maintained filenames still contain earlier iteration numbers.
- [Concept notices](https://github.com/pete-wai/fedramp-design-concepts/blob/84d18aff68506a8d3861f9a8c6926475c5009e2e/NOTICES.md) identify prototype content and inherited asset licenses.

No full upstream stylesheet or artwork is bundled. Starter CSS is newly authored from observations and semantic color values.

## Source colors

CSS-backed unless labeled otherwise. Homepage colors are live branding extraction with the body background also verified in the browser; extracted component roles may vary by state. Rules light colors are live extraction.

| Family | Background / surface | Text / muted | Link or action | Border |
| --- | --- | --- | --- | --- |
| Homepage | `#2d1a39` | `#ffffff` | Primary candidate `#6e164e`; warm accent candidate `#ce4929` | Context dependent |
| Rules, light | `#ffffff` | `#212121` | `#4051b5` | Neutral thin lines |
| Research | `#fafaf6` / `#ffffff` | `#172b40` / `#526272` | `#245d84`; chart green `#21695a`, comparison `#4e6583` | `#d5dcd9` |
| Reader, light | `#f7f8f5` / `#ffffff` | `#203630` / `#65756e` | `#306c5a` | `#dce3db` |
| Reader, dark | `#17211e` / `#202c27` | `#e0e8de` / `#a6b7ad` | `#a8d2b9` | `#37473f` |
| Workbook | `#fbf8f0` | `#202b30` / `#4d5c62` | `#164f6b` | `#bfc5c2` |
| Radiance, light | `#fcfbff` / `#f0eafa` | `#271438` / `#63596b` | Violet `#6630c7`; provider `#9e3e0a`; agency `#343a9b` | `#d7cbe3` |
| Radiance, dark | `#190e26` / `#2b193d` | `#faf5ff` / `#c6b9d3` | Violet `#c09cff`; provider `#ffb77b`; agency `#b6c4ff` | `#563b70` |

Do not mistake the scraper's smallest paragraph for body copy. PDFtoWeb's CSS sets report prose at 1.125rem/1.75; tiny metadata is not its body size. The A–130 CSS confirms Georgia prose even though automatic branding disagreed about font roles.

## Typography and geometry

| Source | CSS-observed choice |
| --- | --- |
| Rules | Merriweather headings; Inter body and JetBrains Mono code in live styles. Custom h1 1.5rem within source root sizing; grid max 1440px |
| Research | Source Serif 4 h1/h2, Source Sans 3 body. h1 clamp(2.6rem, 5.4vw, 5rem), weight 400, max 18ch. Container 1280px, gutters 40px; hero 1.2fr/.8fr, gap 60px; stacks at 850px |
| Reader | Inter. 230px contents rail, 4.5rem gap, 760px reading column (790px above 1550px). Prose 1.125rem/1.75; title clamp(2.2rem, 3.5vw, 3.3rem); mobile rules at 760px |
| Workbook | 18px root; Georgia at 1.65 line height, Arial utilities. Rail 17rem, 14rem at 1050px, static at 760px. Title up to 3.75rem; prose max 73ch |
| Radiance | Source Sans Pro Web landing; index alias `Public` loads Public Sans. Landing h1 clamp(3.4rem, 6.8vw, 7.4rem); audience actions have 16px radii and tinted backgrounds |

Root sizing and media queries affect computed pixels. Adopt proportions instead of accidental device-specific values. Do not load every family on one project.

## Proposed starter defaults

These are synthesis choices, not official specifications:

- Plum masthead `#2d1a39`, warm near-white body `#fafaf8`, ink `#271438`, muted `#62596a`, plum links `#6e164e`.
- Warm action `#a13c21` with white text, darkened from the observed orange for readable labels. A two-tone keyboard-focus ring stays visible across surfaces.
- Source Sans 3 body/headings or compatible project font; 17px base and 1.6 line height; h1 2.5–4.5rem. This differs from the homepage's Source Sans Pro Web face.
- 80rem container, 1.125–3rem fluid gutters, 70ch reading measure; spacing 4, 8, 12, 16, 24, 32, 48, 64, 96px.
- 4px controls, modest content radii, thin rules, minimal shadows. Radiance explicitly increases scale and rounding.
- 16rem rail, moving into normal flow around 56rem. Fit the breakpoint to actual content.

Semantic tokens distinguish decorative borders (`--fr-rule`) from necessary control boundaries (`--fr-control-border`). Status uses text as well as color. Starter metadata is enlarged from some source examples. Dark overrides are supplied only for reader and Radiance.

## Imagery and assets

- [Official inverse logo](https://www.fedramp.gov/fedramp-logo-inverse.svg): homepage identity; reference only, not bundled.
- [Rules logo](https://preview.fedramp.gov/2026/assets/fr-only-logo-black.png): documentation identity; reference only, not bundled.
- [Concept landing preview](https://pete-wai.github.io/fedramp-design-concepts/overview-assets/landing-light.png): index illustration. It did not finish loading in the browser index capture; the linked landing was inspected directly.
- Sunrise/mountain composition on [Radiance](https://pete-wai.github.io/fedramp-design-concepts/i13-open-house/): optional inspiration; no upstream image or SVG copied.

Prefer typography, dividers, and meaningful diagrams for ordinary project sites. Do not hotlink logos/art as a styling shortcut. Font declarations are evidence, not packaged binaries. The local specimen works offline with system fallbacks.

## Limits

Screenshots were inspected in tool output, not saved as permanent bundle assets; ephemeral media URLs are omitted. Pinned CSS links provide durable provenance. Source interaction/accessibility behavior was not exhaustively tested. The specimen demonstrates the starter components, not exact reconstruction of all source pages. Prototype statements are not current-policy evidence.
