# SystemFit PC page standard

For every new public HTML page:

- Include `<div id="site-header"></div>` where the shared navigation belongs and load `header.js` once.
- Include `site-universal.css` after page-specific styles. It supplies the shared scrollbar, footer, and reveal styles independently of header initialization.
- Use one `<footer class="sfp-site-footer">` as a direct child of `<body>`. Keep page-specific footer wording inside it; do not create a second footer.
- Add `data-sfp-reveal` only to stable, non-interactive content blocks that may safely animate into view. Do not mark `main`, calculator forms, controls, results, menus, or elements that start hidden.
- Leave all content visible by default. The shared script may hide an individual marked item only after `IntersectionObserver` confirms it is below the viewport. If animation is unsupported, reduced motion is requested, or initialization fails, content stays visible.
- Do not add global opacity rules or selectors that hide page content before JavaScript initializes.

The shared header, reveal behavior, and page stylesheet live in `header.js` and `site-universal.css`. Keep this standard in force for future pages.
