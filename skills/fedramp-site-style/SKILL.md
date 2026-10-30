---
name: fedramp-site-style
description: Apply a FedRAMP-inspired visual style to project websites, documentation, research dashboards, reports, and workbooks using FedRAMP.gov, FedRAMP's rules repository, and Pete's reference sites. Use when the user asks for this design language; this is a website design skill, not a FedRAMP compliance assessment or a prose-only writing style.
---

# FedRAMP Site Style

Create clear, credible, useful project sites with FedRAMP's visual identity cues and Pete's evidence-oriented layouts. Preserve the target project's purpose, content, stack, routes, and working interactions.

## Choose a coherent direction

Read [the design foundation](references/DESIGN.md) for source-backed color, type, and layout guidance. Honor an explicit reference or preference first; otherwise choose by the page's task.

| Variant | Use for | Primary influence |
| --- | --- | --- |
| `project` — default | Project homepages and service hubs | FedRAMP.gov plum masthead and warm actions, paired with a light reading surface |
| `reference` | Rules, glossaries, technical documentation | FedRAMP 2026 / trigrams: compact hierarchy, navigation, tables |
| `research` | Findings, evidence explorers, dashboards | Marketplace SMB: editorial serif title, restrained charts, visible methodology |
| `reader` | Publications and long reports | PDFtoWeb: quiet green palette, narrow reading column, contents rail, sources |
| `workbook` | Working papers and decision worksheets | A–130 proposal: warm paper, serif prose, numbered steps, evidence and fields |
| `radiance` | Expressive landing pages or community concepts | Radiance / Open House: plum, violet, warm accents, distinct audience paths |

The default is an original synthesis, not an official theme. Use one primary variant per page and a shared shell across related pages. Borrow functional patterns when useful without accumulating unrelated palettes and typefaces. A reference table does not need a promotional hero. Radiance's landscape and motion are optional.

## Apply to the project

1. Inspect the existing site, local instructions, theme system, framework, and representative screens. Determine whether the request changes palette, typography, shell, content layout, or specific components. Preserve explicitly requested brand elements and scope.
2. Select a variant and briefly state the direction. Use this source snapshot without re-crawling every reference. Browse current sources when asked for today's design, an exact match, or details the snapshot cannot support.
3. Map semantic tokens into the existing theme. [fedramp-theme.css](assets/fedramp-theme.css) is an original, scoped starter: copy relevant pieces or translate them into existing CSS variables, utility configuration, or components. Do not introduce a framework solely for this style.
4. Read the relevant section of [component and layout recipes](references/patterns.md). Treat hierarchy, source trails, and navigation as design elements. Connect controls to actual data and state; style-only work does not authorize a new backend or changed data definitions.
5. Review the rendered result at desktop and narrow mobile widths with long titles and dense content. Check focus, links, disclosures, contrast, and relevant filter/form states. Run existing appropriate build/check commands, fix regressions, and report verification gaps.

## Design rules that matter

- Use context/edition label, clear title, short orientation, task or evidence content, then deeper sources. Prefer meaningful sections and ruled rows to a wall of floating cards.
- Keep prose around 65–75 characters per line; let tables and charts use a wider container. Use tabular numerals and explicit units. Avoid shrinking body text to fit more content.
- Distinguish findings, quotations, proposals, official sources, and editable work. Preserve dates, citations, denominators, qualifications, and source identifiers.
- Keep the project's identity. Do not add the FedRAMP logo, GSA seal, government banner, certification marks, or official status claims merely to achieve the look. Preserve legitimate existing official branding when appropriate. Check provenance before reusing external art or fonts.
- Retain visible keyboard focus even though an inherited source stylesheet removes it. The starter also adjusts the warm action color for readable white labels. Do not reproduce a source defect for fidelity.
- Default to a readable light theme unless the project/user specifies otherwise. Reader and Radiance include dark token overrides; other dark variants require deliberate design and verification, not an invert filter.
- Follow the project's font-loading policy. Named font stacks do not download fonts. Self-host permitted font files with their licenses when needed; disclose fallbacks for exact-match requests.

## Resources and handoff

- [DESIGN.md](references/DESIGN.md): observed sources, exact values, proposed defaults, and capture limits.
- [patterns.md](references/patterns.md): page recipes, responsive behavior, and review criteria.
- [fedramp-theme.css](assets/fedramp-theme.css): scoped tokens and components. Place `data-fr-theme="project"` or another listed variant on a wrapper. Classes use `fr-`; unrelated markup is not automatically restyled.
- [preview.html](assets/preview.html): offline component specimen with a working variant picker and evidence filter. It compares tokens/components, not every full-page recipe. Optional dark previews exist for reader and Radiance. Open directly or serve the assets directory locally.

Report the direction, meaningful changes, checks, and limitations. Do not claim pixel-perfect fidelity, accessibility certification, or FedRAMP compliance from applying this style.
