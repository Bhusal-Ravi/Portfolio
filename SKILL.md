# Design & UX Skill — Page Design

## Purpose
Provide a repeatable, workspace-scoped workflow for designing and validating page-level design and UX decisions for this portfolio site.

## When to use
- New page or major redesign
- Polishing visual/audio/interaction details
- Preparing a page for accessibility and responsive QA

## Inputs
- Target page URL or component path
- Content outline or copy (headings, CTAs, images)
- Brand tokens (colors, fonts, spacing) or `src/index.css` / Tailwind config
- Analytics or user goals (optional)

## Outputs
- Wireframe (sketch or Figma link) or simple HTML prototype
- Style decisions and component list
- Accessibility and performance checklist with measured results
- Suggested implementation notes for dev (breakpoints, assets, animations)

## Step-by-step workflow
1. Discovery
   - Clarify goal and primary CTA for the page.
   - Identify target audience and success metrics (clicks, conversions, time-on-page).
2. Content audit
   - List headings, paragraphs, media, and CTAs. Prioritize content for mobile-first layout.
3. Layout & wireframe
   - Create a low-fidelity wireframe (paper, Figma, or coded prototype).
   - Decide layout pattern (single column, two-column, hero + grid, etc.).
4. Visual design
   - Apply brand tokens: typography scale, color palette, spacing.
   - Define interactive states (hover, focus, pressed) and micro-interactions.
5. Accessibility review
   - Check semantics (heading order, landmarks), keyboard focus, and ARIA when needed.
   - Validate color contrast and provide text alternatives for media.
6. Responsive behavior
   - Define breakpoints and layout changes; prefer mobile-first CSS.
   - Ensure images/video use responsive formats (webp, AVIF, srcset) and appropriate sizes.
7. Performance & asset optimization
   - Optimize images, lazy-load below-the-fold media, and minimize JS.
   - Measure with Lighthouse; record scores and target improvements.
8. Prototype & test
   - Build a lightweight prototype and run basic user tests (3–5 users) or heuristics evaluation.
   - Collect feedback and iterate.
9. Handoff & implementation notes
   - Export assets, document component props/variants, list animations with durations, and provide code snippets or CSS classes.

## Decision points and branching logic
- Framework: If Tailwind or existing CSS is present, prefer utility-driven approach; otherwise propose scoped CSS modules.
- Hero complexity: Use video only if it adds value; prefer poster images and autoplay-muted loop only for decorative motion.
- Performance vs fidelity: For high-traffic pages, prefer static assets and minimal JS.
- Accessibility tradeoffs: If an animation reduces clarity or focus, provide a reduced-motion alternative.

## Quality criteria / Acceptance checklist
- Content: Primary CTA present and visible above the fold on small screens.
- Accessibility: All interactive elements keyboard reachable; text meets WCAG AA contrast.
- Responsive: Layout adapts at defined breakpoints without overlap or horizontal scroll.
- Performance: Lighthouse PWA/Performance >= 80 (aim), FCP under 1.5s on mobile emulation.
- SEO & semantics: Proper heading order and meta content present.
- Visual polish: Consistent spacing, aligned baselines, and predictable interactions.

## Example prompts to invoke this skill
- "Design & UX: Improve the About section for mobile-first readability." 
- "Design & UX: Wireframe and accessibility checklist for the Projects page." 
- "Design & UX: Reduce hero load time and propose responsive image strategy."

## Ambiguities to clarify with the owner
- Preferred design tool (Figma, Sketch, code prototypes).
- Brand tokens location (Tailwind config, CSS file, or design spec).
- Any mandatory third-party integrations or analytics goals.

## Iteration guidance
1. Draft wireframe and iterate quickly with 2–3 rounds of feedback.
2. After implementation, run accessibility and performance audits and record results.
3. Keep the SKILL updated with any local conventions (React component patterns, Tailwind utility classes or naming conventions).

## Where to store outputs
- Small prototypes, screenshots, and audit results: `/design/` (create if missing).
- Implementation notes: Link the page's component file under `/src/` in the PR description.

---
Notes: This skill is workspace-scoped and intended to be lightweight — adapt steps when working on smaller tweaks versus full redesigns.