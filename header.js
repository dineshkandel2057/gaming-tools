/* SystemFit PC shared header */
(function () {
  "use strict";

  const current =
    (location.pathname.split("/").pop() || "index.html").toLowerCase();

  const isHome = current === "" || current === "index.html";
  const isGuides = current === "guides.html";
  const isContact = current === "contact.html";

  const headerCSS = `
    html,
body {
  scrollbar-width: thin;
  scrollbar-color: rgba(145,126,255,.72) rgba(9,12,20,.45);
}

html::-webkit-scrollbar,
body::-webkit-scrollbar {
  width: 9px;
}

html::-webkit-scrollbar-track,
body::-webkit-scrollbar-track {
  background: rgba(9,12,20,.45);
}

html::-webkit-scrollbar-thumb,
body::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #a892ff, #69caff);
  border: 2px solid rgba(9,12,20,.45);
  border-radius: 999px;
}

html::-webkit-scrollbar-thumb:hover,
body::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #b9a9ff, #82d6ff);
}

    .sfp-scroll-progress {
      position: fixed;
      top: 0;
      left: 0;
      width: 0%;
      height: 3px;
      z-index: 2147483647;
      pointer-events: none;
      background: linear-gradient(90deg, #a892ff, #69caff);
      box-shadow: 0 0 12px rgba(105,202,255,.28);
      transform-origin: left center;
      transition: width .08s linear;
    }

    @media(prefers-reduced-motion:reduce) {
      .sfp-scroll-progress {
        transition: none;
      }
    }


    body > footer {
      max-width: 1180px;
      margin: 0 auto;
      padding: 26px 22px 30px;
      border-top: 1px solid rgba(157,174,204,.16);
      color: #8895aa;
      font-size: 12px;
      line-height: 1.6;
      text-align: center;
    }

    body > footer p {
      margin: 0;
    }

    body > footer p + p {
      margin-top: 7px;
    }

    body > footer a {
      color: #a892ff;
      text-decoration: none;
      transition: color .2s ease;
    }

    body > footer a:hover {
      color: #fff;
    }

    @media(max-width:800px) {
      body > footer {
        padding-left: 15px;
        padding-right: 15px;
      }
    }

    .sfp-site-header {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: rgba(9,12,20,.76);
      border-bottom: 1px solid rgba(157,174,204,.16);
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
    }

    .sfp-nav {
      max-width: 1180px;
      min-height: 76px;
      margin: auto;
      padding: 0 22px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .sfp-brand {
      display: inline-flex;
      align-items: center;
      gap: 9px;
      color: #f5f7fc;
      text-decoration: none;
      line-height: 1;
      white-space: nowrap;
    }

    .sfp-monogram {
      width: 36px;
      height: 36px;
      display: grid;
      place-items: center;
      border: 1px solid rgba(159,142,255,.38);
      border-radius: 12px;
      background: linear-gradient(
        145deg,
        rgba(119,94,255,.3),
        rgba(63,179,231,.15)
      );
      box-shadow:
        inset 0 1px 0 rgba(255,255,255,.12),
        0 5px 18px rgba(73,62,170,.16);
      font: 800 12px/1 "Space Grotesk","DM Sans",sans-serif;
      letter-spacing: -.09em;
      color: #f8f7ff;
    }

    .sfp-monogram span {
      color: #86dcff;
    }

    .sfp-wordmark {
      display: inline-flex;
      align-items: center;
      font: 700 21px/1 "Space Grotesk","DM Sans",sans-serif;
      letter-spacing: -.055em;
      color: #f5f7fc;
    }

    .sfp-fit {
      margin-left: 4px;
      background: linear-gradient(100deg,#a892ff,#69caff);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }

    .sfp-pc {
      padding: 4px 6px;
      border: 1px solid rgba(157,174,204,.2);
      border-radius: 6px;
      background: rgba(255,255,255,.03);
      font: 700 10px/1 "Space Grotesk","DM Sans",sans-serif;
      letter-spacing: .05em;
      color: #bfc9da;
    }

    .sfp-main-nav {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .sfp-main-nav > a,
    .sfp-tools-summary {
      color: #aab5c8;
      padding: 9px 13px;
      border: 1px solid transparent;
      border-radius: 9px;
      font: 500 14px/1.4 "DM Sans",Inter,ui-sans-serif,system-ui,
        -apple-system,"Segoe UI",sans-serif;
      text-decoration: none;
      transition:
        background .2s,
        border-color .2s,
        color .2s;
    }

    .sfp-main-nav > a:hover,
    .sfp-main-nav > a.sfp-active,
    .sfp-tools-summary:hover,
    .sfp-tools[open] .sfp-tools-summary {
      color: #fff;
      background: rgba(126,105,255,.14);
      border-color: rgba(157,139,255,.2);
    }

    .sfp-tools {
      position: relative;
    }

    .sfp-tools-summary {
      display: flex;
      align-items: center;
      gap: 8px;
      list-style: none;
      cursor: pointer;
      user-select: none;
    }

    .sfp-tools-summary::-webkit-details-marker {
      display: none;
    }

    .sfp-tools-summary:after {
      content: "";
      width: 7px;
      height: 7px;
      border-right: 1.5px solid currentColor;
      border-bottom: 1.5px solid currentColor;
      transform: rotate(45deg) translateY(-2px);
      transition: transform .18s;
    }

    .sfp-tools[open] .sfp-tools-summary:after {
      transform: rotate(225deg) translate(-1px,-1px);
    }

    .sfp-tool-menu {
      position: absolute;
      z-index: 1001;
      top: calc(100% + 12px);
      right: 0;
      width: min(410px,calc(100vw - 28px));
      max-height: min(70vh,620px);
      overflow: auto;
      padding: 12px;
      border: 1px solid rgba(157,174,204,.22);
      border-radius: 18px;
      background: linear-gradient(145deg,rgba(24,31,49,.98),rgba(10,15,26,.98));
      box-shadow: 0 28px 80px rgba(0,0,0,.52),inset 0 1px 0 rgba(255,255,255,.045);
      backdrop-filter: blur(22px);
      -webkit-backdrop-filter: blur(22px);
      transform-origin: top right;
      animation: sfp-tools-expand 190ms cubic-bezier(.2,.75,.2,1) both;
    }

    @keyframes sfp-tools-expand {
      from {
        opacity: 0;
        transform: translateY(-9px) scale(.975);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    .sfp-tools.sfp-closing .sfp-tool-menu {
      animation: sfp-tools-collapse 150ms cubic-bezier(.4,0,.8,.5) both;
    }

    @keyframes sfp-tools-collapse {
      from {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
      to {
        opacity: 0;
        transform: translateY(-6px) scale(.985);
      }
    }

    .sfp-menu-label {
      padding: 8px 10px 6px;
      color: #8f9db5;
      font: 800 10px/1.3 "DM Sans",sans-serif;
      letter-spacing: .11em;
      text-transform: uppercase;
    }

        .sfp-tool-item {
      display: flex;
      align-items: center;
      gap: 13px;
      padding: 12px;
      min-height: 70px;
      border: 1px solid transparent;
      border-radius: 14px;
      color: #edf1f9;
      text-decoration: none;
      transition:
        background .18s,
        border-color .18s;
    }

    .sfp-tool-item:hover,
    .sfp-tool-item:focus-visible {
      background: linear-gradient(100deg,rgba(118,95,255,.16),rgba(68,168,226,.08));
      border-color: rgba(151,132,255,.3);
      box-shadow: 0 10px 24px rgba(0,0,0,.16);
      transform: translateY(-1px);
      outline: none;
    }

    .sfp-tool-item.current {
      background: linear-gradient(
        110deg,
        rgba(118,95,255,.12),
        rgba(66,157,210,.07)
      );
      border-color: rgba(142,128,239,.17);
    }

    .sfp-tool-item > span:nth-child(2) {
      min-width: 0;
      flex: 1;
    }

    .sfp-tool-icon svg {
      width: 25px;
      height: 25px;
      display: block;
    }

    .sfp-tool-icon {
      width: 44px;
      height: 44px;
      flex: 0 0 44px;
      display: grid;
      place-items: center;
      border-radius: 13px;
      border: 1px solid rgba(255,255,255,.07);
      box-shadow: inset 0 1px 0 rgba(255,255,255,.06);
      background: rgba(255,255,255,.06);
      color: #b6c2d8;
      font: 700 10px "Space Grotesk",sans-serif;
    }

    .sfp-tool-item b {
      display: block;
      font-size: 14px;
      line-height: 1.35;
      font-weight: 750;
      letter-spacing: -.01em;
      color: #f5f7fc;
    }

    .sfp-tool-item small {
      display: block;
      margin-top: 4px;
      color: #9eabc0;
      font-size: 11px;
      line-height: 1.4;
    }

    .sfp-arrow {
      color: #9d8cff;
      font-size: 15px;
    }

        .sfp-cpu {
      background: rgba(137,111,255,.16);
      color: #c2adff;
    }

    .sfp-fps {
      background: rgba(72,182,255,.12);
      color: #77cbff;
    }

    .sfp-build {
      background: rgba(68,212,150,.12);
      color: #71e5b0;
    }

                @media(max-width:800px) {
      .sfp-nav {
        min-height: auto;
        padding: 15px;
        flex-direction: column;
        gap: 10px;
      }

      .sfp-main-nav {
        flex-wrap: wrap;
        justify-content: center;
      }

      .sfp-brand {
        gap: 7px;
      }

      .sfp-monogram {
        width: 32px;
        height: 32px;
        border-radius: 10px;
      }

      .sfp-wordmark {
        font-size: 19px;
      }

      .sfp-tools {
        width: max-content;
      }

      .sfp-tool-menu {
        right: 0;
        width: min(410px,calc(100vw - 20px));
      }
    }

    @media(prefers-reduced-motion:reduce) {
      .sfp-tool-menu,
      .sfp-tools.sfp-closing .sfp-tool-menu,
      .sfp-tools-summary:after {
        animation: none;
        transition: none;
      }
    }
  `;

  function toolLink(
    href,
    iconClass,
    icon,
    title,
    desc,
    currentTool
  ) {
    return `
      <a class="sfp-tool-item${currentTool ? " current" : ""}"
         href="${href}">
        <span class="sfp-tool-icon ${iconClass}"
              aria-hidden="true">${icon}</span>
        <span>
          <b>${title}</b>
          <small>${desc}</small>
        </span>
        <span class="sfp-arrow" aria-hidden="true">↗</span>
      </a>`;
  }

  const markup = `
      <div class="sfp-scroll-progress" id="sfpScrollProgress" aria-hidden="true"></div>
    <header class="sfp-site-header">
      <div class="sfp-nav">

        <a class="sfp-brand"
           href="index.html#home"
           aria-label="SystemFit PC home">

          <span class="sfp-monogram" aria-hidden="true">
            S<span>F</span>
          </span>

          <span class="sfp-wordmark">
            <span>System</span>
            <span class="sfp-fit">Fit</span>
          </span>

          <span class="sfp-pc">PC</span>

        </a>

        <nav class="sfp-main-nav" aria-label="Main navigation">

          <a href="index.html#home"
             class="${isHome ? "sfp-active" : ""}">
            Home
          </a>

          <details class="sfp-tools" id="sfpTools">

            <summary class="sfp-tools-summary"
                     aria-label="Open tools menu">
              Tools
            </summary>

            <div class="sfp-tool-menu" aria-label="Tools">

              <p class="sfp-menu-label">
                PC Tools
              </p>

              ${toolLink(
                "bottleneck.html",
                "sfp-cpu",
                `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2.5" stroke="currentColor" stroke-width="1.7"/><rect x="9" y="9" width="6" height="6" rx="1.2" fill="currentColor" opacity=".35" stroke="currentColor" stroke-width="1.4"/><path d="M9 2.8v2.4M12 2.8v2.4M15 2.8v2.4M9 18.8v2.4M12 18.8v2.4M15 18.8v2.4M2.8 9h2.4M2.8 12h2.4M2.8 15h2.4M18.8 9h2.4M18.8 12h2.4M18.8 15h2.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
                "CPU &amp; GPU Bottleneck",
                "Compare your components",
                current === "bottleneck.html"
              )}

              ${toolLink(
                "build-planner.html",
                "sfp-build",
                `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m8.4 5.2 3.1 3.1 2.2-2.2-3.1-3.1a5.2 5.2 0 0 0-6.1 6.1l3.2-1 3.6 3.6-4.9 4.9a2.1 2.1 0 1 0 3 3l4.9-4.9 3.6 3.6-1 3.2a5.2 5.2 0 0 0 6.1-6.1l-3.1-3.1-2.2 2.2 3.1 3.1" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
                "PC Build Planner",
                "Check component fit and power",
                current === "build-planner.html"
              )}

              ${toolLink(
                "gpu-comparison.html",
                "sfp-compare",
                `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="6" width="17" height="12" rx="2" stroke="currentColor" stroke-width="1.7"/><circle cx="9" cy="12" r="3" stroke="currentColor" stroke-width="1.5"/><circle cx="15" cy="12" r="3" stroke="currentColor" stroke-width="1.5"/><path d="M20 10h2M20 14h2M6 18v2M9 18v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
                "GPU Comparison",
                "Compare up to five graphics cards",
                current === "gpu-comparison.html"
              )}

              ${toolLink(
                "fps-calculator.html",
                "sfp-fps",
                `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 17V7M4 7h8M4 12h7M14 17V7h6M14 7h7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="m8 20 2.2-2.4L12 19l2.2-2.4L16 18l2.2-2.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".55"/></svg>`,
                "FPS Calculator",
                "Estimate performance",
                current === "fps-calculator.html"
              )}

            </div>
          </details>

          <a href="guides.html"
             class="${isGuides ? "sfp-active" : ""}">
            Guides
          </a>

          <a href="index.html#about">
            About
          </a>

          <a href="contact.html"
             class="${isContact ? "sfp-active" : ""}">
            Contact
          </a>

        </nav>
      </div>
    </header>
  `;

  function init() {
    const host = document.getElementById("site-header");

    if (!host) return;

    const style = document.createElement("style");
    style.id = "sfp-header-style";
    style.textContent = headerCSS;
    document.head.appendChild(style);

    host.outerHTML = markup;

    // Use the selected high-resolution transparent favicon artwork.
    document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"]').forEach((link) => link.remove());

    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.type = "image/png";
    favicon.href = "systemfit-favicon.png";
    document.head.appendChild(favicon);

    const progress = document.getElementById("sfpScrollProgress");

    // Keep the reading-progress bar outside <body> so page-level
    // body transforms/animations cannot trap or distort position:fixed.
    if (progress) {
      document.documentElement.appendChild(progress);
    }

    const updateScrollProgress = () => {
      if (!progress) return;

      const scrollTop =
        window.scrollY || document.documentElement.scrollTop;

      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const percent = scrollHeight > 0
        ? Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100))
        : 0;

      progress.style.width = percent + "%";
    };

    let progressTicking = false;

    const requestProgressUpdate = () => {
      if (progressTicking) return;

      progressTicking = true;

      requestAnimationFrame(() => {
        updateScrollProgress();
        progressTicking = false;
      });
    };

    window.addEventListener("scroll", requestProgressUpdate, {
      passive: true
    });

    window.addEventListener("resize", requestProgressUpdate);

    updateScrollProgress();

    // Global scroll-reveal: applies a subtle entrance animation to page sections
    // without overriding pages that already define their own reveal/accordion motion.
    const globalRevealStyle = document.createElement("style");
    globalRevealStyle.id = "sfp-global-scroll-reveal";
    globalRevealStyle.textContent = `
      body.sfp-reveal-ready main section:not(.reveal):not(.accordion),
      body.sfp-reveal-ready main > article:not(.reveal),
      body.sfp-reveal-ready main > .card:not(.reveal),
      body.sfp-reveal-ready main > .panel:not(.reveal),
      body.sfp-reveal-ready main > .reference-links:not(.reveal) {
        opacity: 0;
        transform: translateY(24px);
        filter: blur(4px);
        transition: opacity .62s ease, transform .62s cubic-bezier(.2,.7,.2,1), filter .62s ease;
      }

      body.sfp-reveal-ready main section.sfp-reveal-visible,
      body.sfp-reveal-ready main > article.sfp-reveal-visible,
      body.sfp-reveal-ready main > .card.sfp-reveal-visible,
      body.sfp-reveal-ready main > .panel.sfp-reveal-visible,
      body.sfp-reveal-ready main > .reference-links.sfp-reveal-visible {
        opacity: 1;
        transform: translateY(0);
        filter: blur(0);
      }

      @media(prefers-reduced-motion:reduce) {
        body.sfp-reveal-ready main section:not(.reveal):not(.accordion),
        body.sfp-reveal-ready main > article:not(.reveal),
        body.sfp-reveal-ready main > .card:not(.reveal),
        body.sfp-reveal-ready main > .panel:not(.reveal),
        body.sfp-reveal-ready main > .reference-links:not(.reveal) {
          opacity: 1;
          transform: none;
          filter: none;
          transition: none;
        }
      }
    `;
    document.head.appendChild(globalRevealStyle);

    const globalRevealItems = [...document.querySelectorAll(
      "main section:not(.reveal):not(.accordion), main > article:not(.reveal), main > .card:not(.reveal), main > .panel:not(.reveal), main > .reference-links:not(.reveal)"
    )];

    const revealAll = () => globalRevealItems.forEach((item) => item.classList.add("sfp-reveal-visible"));

    if (globalRevealItems.length) {
      document.body.classList.add("sfp-reveal-ready");

      if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        const revealObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("sfp-reveal-visible");
              revealObserver.unobserve(entry.target);
            }
          });
        }, { threshold: 0.08, rootMargin: "0px 0px -35px 0px" });

        globalRevealItems.forEach((item) => revealObserver.observe(item));
      } else {
        revealAll();
      }
    }

    const dropdown = document.getElementById("sfpTools");

    if (!dropdown) return;

    const summary = dropdown.querySelector("summary");

    let pinned = false;
    let closeTimer;
    const closeDelay = 210;

    const cancelClose = () => {
      clearTimeout(closeTimer);
      dropdown.classList.remove("sfp-closing");
    };

    const closeMenu = () => {
      cancelClose();

      if (!dropdown.open) return;

      dropdown.classList.add("sfp-closing");

      closeTimer = setTimeout(() => {
        dropdown.open = false;
        dropdown.classList.remove("sfp-closing");
      }, 150);
    };

    dropdown.addEventListener("pointerenter", () => {
      cancelClose();

      if (!pinned) {
        dropdown.open = true;
      }
    });

    dropdown.addEventListener("pointerleave", () => {
      if (!pinned) {
        closeTimer = setTimeout(closeMenu, closeDelay);
      }
    });

    summary.addEventListener("click", (event) => {
      event.preventDefault();

      cancelClose();

      if (pinned) {
        pinned = false;
        closeMenu();
      } else {
        pinned = true;
        dropdown.open = true;
      }
    });

    document.addEventListener("pointerdown", (event) => {
      if (!dropdown.contains(event.target)) {
        pinned = false;
        closeMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && dropdown.open) {
        pinned = false;
        closeMenu();
        summary.focus();
      }
    });

    dropdown.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        pinned = false;
        closeMenu();
      });
    });

    dropdown.addEventListener("focusout", (event) => {
      if (!dropdown.contains(event.relatedTarget) && !pinned) {
        closeMenu();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
