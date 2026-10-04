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
      z-index: 2000;
      pointer-events: none;
      background: linear-gradient(90deg, #a892ff, #69caff);
      box-shadow: 0 0 12px rgba(105,202,255,.28);
      transform-origin: left center;      transition: width .08s linear;
    }

    @media(prefers-reduced-motion:reduce) {
      .sfp-scroll-progress {
        transition: none;
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
      width: min(355px,calc(100vw - 28px));
      max-height: min(70vh,560px);
      overflow: auto;
      padding: 10px;
      border: 1px solid rgba(157,174,204,.2);
      border-radius: 16px;
      background: rgba(13,18,29,.96);
      box-shadow: 0 24px 70px rgba(0,0,0,.48);
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

    .sfp-menu-label.planned {
      margin-top: 7px;
      border-top: 1px solid rgba(157,174,204,.12);
      padding-top: 14px;
    }

    .sfp-tool-item {
      display: flex;
      align-items: center;
      gap: 11px;
      padding: 10px;
      border: 1px solid transparent;
      border-radius: 11px;
      color: #edf1f9;
      text-decoration: none;
      transition:
        background .18s,
        border-color .18s;
    }

    .sfp-tool-item:hover,
    .sfp-tool-item:focus-visible {
      background: rgba(118,95,255,.13);
      border-color: rgba(151,132,255,.25);
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

    .sfp-tool-icon {
      width: 36px;
      height: 36px;
      flex: 0 0 36px;
      display: grid;
      place-items: center;
      border-radius: 10px;
      background: rgba(255,255,255,.06);
      color: #b6c2d8;
      font: 700 10px "Space Grotesk",sans-serif;
    }

    .sfp-tool-item b {
      display: block;
      font-size: 12px;
      line-height: 1.35;
      font-weight: 700;
    }

    .sfp-tool-item small {
      display: block;
      margin-top: 3px;
      color: #96a3b9;
      font-size: 10px;
      line-height: 1.3;
    }

    .sfp-arrow {
      color: #9d8cff;
      font-size: 15px;
    }

    .sfp-soon {
      padding: 4px 7px;
      border: 1px solid rgba(157,174,204,.13);
      border-radius: 999px;
      color: #8c99af;
      font-size: 9px;
      font-weight: 700;
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

    .sfp-upgrade {
      background: rgba(255,170,98,.12);
      color: #ffc080;
    }

    .sfp-compare {
      background: rgba(255,126,145,.12);
      color: #ff9baa;
    }

    .sfp-power {
      background: rgba(255,204,92,.12);
      color: #ffda7d;
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
                Available now
              </p>

              ${toolLink(
                "bottleneck.html",
                "sfp-cpu",
                "CPU",
                "CPU &amp; GPU Bottleneck",
                "Compare your components",
                current === "bottleneck.html"
              )}

              ${toolLink(
                "build-planner.html",
                "sfp-build",
                "PC",
                "PC Build Planner",
                "Check component fit and power",
                current === "build-planner.html"
              )}

              ${toolLink(
                "gpu-comparison.html",
                "sfp-compare",
                "GPU",
                "GPU Comparison",
                "Compare up to five graphics cards",
                current === "gpu-comparison.html"
              )}

              ${toolLink(
                "fps-calculator.html",
                "sfp-fps",
                "FPS",
                "FPS Calculator",
                "Estimate performance",
                current === "fps-calculator.html"
              )}

              <p class="sfp-menu-label planned">
                Coming soon
              </p>

              <div class="sfp-tool-item">
                <span class="sfp-tool-icon sfp-upgrade"
                      aria-hidden="true">↑</span>
                <span>
                  <b>Upgrade Planner</b>
                  <small>Find your next upgrade</small>
                </span>
                <span class="sfp-soon">Soon</span>
              </div>

              <div class="sfp-tool-item">
                <span class="sfp-tool-icon sfp-compare"
                      aria-hidden="true">↔</span>
                <span>
                  <b>CPU &amp; GPU Compare</b>
                  <small>Compare hardware directly</small>
                </span>
                <span class="sfp-soon">Soon</span>
              </div>

              <div class="sfp-tool-item">
                <span class="sfp-tool-icon sfp-power"
                      aria-hidden="true">W</span>
                <span>
                  <b>PSU Power Guide</b>
                  <small>Estimate power needs</small>
                </span>
                <span class="sfp-soon">Soon</span>
              </div>

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

const progress = document.getElementById("sfpScrollProgress");

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
