# Page and component recipes

Read the relevant section. Preserve existing functionality and use the target framework's working components.

## Project homepage

Compact plum masthead, project identity, a few task-oriented links, clear current location. Follow with context label, direct title, short orientation, and primary action. Use a split hero only when the aside adds useful context/evidence. Put status or next steps in ruled rows; reserve cards for discrete destinations. The official homepage is fully dark; the default starter deliberately uses a light reading area.

## Rules and reference

Top-level categories, available search, breadcrumbs where helpful, hierarchical rail, modest title and orientation, then reference content. Keep exact identifiers in their own table column and retain stable anchors. Expose repository/source links. On narrow screens put the rail into normal flow as a keyboard-operable disclosure. Scroll wide tables within their container, not the whole page. Do not turn a glossary into decorative cards or hide comparison fields.

## Research and evidence

Lead with a question/finding, serif title, thin rules, and concise finding aside. Put dates, units, denominators, scope, and limitations near the results they qualify. Charts need stable scales, explicit labels, tabular numerals, and accessible data/text alternatives. Use color plus words for categories. Preserve the actual treatment of unknown data rather than borrowing a source's data definitions.

Evidence explorers need labeled filters, result count, reset, and an honest empty state. Use semantic disclosures for citations/reasoning. Styling must not change the analysis, sorting, or filter meanings.

## Report reader

Quiet header; publication identifier/date; restrained title; author/source metadata and PDF/source links. Align a bounded, independently scrollable sticky contents rail with a narrow article. Keep headings/anchors stable. Start at 1.125rem prose with comfortable line height. Preserve footnote links, captions, and publication structure. Distinguish a web edition or commentary from the primary source where applicable. Maintain useful print output.

The reader dark palette is CSS-backed. System-theme handling and persistence belong to the target application; the specimen selector only demonstrates token changes.

## Working paper and workbook

Warm paper and serif prose, sans-serif labels and controls. Number steps and describe each output. Distinguish quotations, interpretation, cautions, and editable answers. Colored quotation borders need textual source labels and citations. Use fieldsets/legends, labels, hints, and resizable textareas. Explain saving truthfully. Add persistence/import/export only when required by the project. Preserve entries while restyling. Print full answers instead of clipped textarea viewports.

## Radiance and community

Large central statement with a deliberate emphasis line, audience-specific actions, and roomy supporting content. Rename source audience labels to suit the project. Prioritize participation before a community feed, then curated dated updates with source trails. Use real supplied content, not invented activity/metrics. Landscape art is optional; the page must work without animation, and reduced-motion preferences apply. Retain licensing with copied assets.

## Starter integration

The bundle is framework-neutral, dependency-free, and scoped. Load the CSS and place `data-fr-theme="research"` (or another variant) on a wrapper. Use `fr-` classes or translate their semantic tokens into existing components. Reader/Radiance dark tokens require `data-fr-mode="dark"` on that same wrapper.

| Class | Purpose |
| --- | --- |
| `fr-container`, `fr-measure` | Wide page container and readable prose width |
| `fr-masthead`, `fr-header-inner`, `fr-brand`, `fr-nav` | Header shell |
| `fr-hero`, `fr-aside`, `fr-eyebrow`, `fr-lead` | Split introduction and context |
| `fr-reader-grid`, `fr-toc` | Contents rail and article |
| `fr-section`, `fr-actions`, `fr-button` | Sections and actions |
| `fr-callout`, `fr-badge` | Labeled context/status |
| `fr-table-scroll`, `fr-table`, `fr-numeric` | Semantic tabular evidence |
| `fr-field`, `fr-input`, `fr-hint` | Labeled inputs |

The specimen deliberately presents the same components across variants so colors/type can be compared. It is not a universal page template. It uses no remote fonts or artwork; for final fidelity load only the selected permitted fonts through the project's normal pipeline. Do not copy specimen evidence/content into real projects.

## Review criteria

- Inspect about 1440px, 768px, and 390px, with long titles, navigation labels, and real data. Check very narrow/reflow layouts when relevant. Only explicit data regions should scroll sideways.
- Tab through skip link, navigation, filters, disclosures, and actions. Ensure visible focus and unobscured focused content. Use buttons for actions and links for navigation.
- Target 4.5:1 normal text, 3:1 large text, and 3:1 necessary boundaries/focus indicators. Check all shipped themes and states. A palette check is not an accessibility certification.
- Verify relevant empty, loading, error, disabled, and selected states. Do not add fake search, sorting, or downloads.
- Confirm anchors, source links, table headings/captions, form labels, appropriate print behavior, and reduced-motion support. Run the project's relevant existing checks.
- Report applied patterns, deliberate adaptations, checks actually performed, and gaps.
