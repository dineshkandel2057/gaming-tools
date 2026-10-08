# SystemFit PC

SystemFit PC is a static web site containing PC gaming tools, hardware data, and gaming guides.

## Current tools

- Bottleneck Calculator
- FPS Calculator
- PC Build Planner
- GPU Comparison
- Upgrade Advisor
- Game Settings

## Shared data architecture

The calculators use centralized datasets so hardware and game selections stay consistent across the site:

- `hardware-data.js` — canonical CPU and GPU dataset
- `game-data.js` — canonical game catalog and FPS profiles
- `header.js` — shared site header/navigation and header-related behavior
- `site-universal.css` — shared site-wide styles such as scrollbar, footer, and reveal animation

Current canonical dataset sizes:

- 130 CPUs
- 113 GPUs
- 792 games
- 792 FPS profiles

## Site standards

See `AGENTS.md` for the current page and shared-component standards.

In particular, new public pages should use the shared header/footer infrastructure and should not duplicate calculator or hardware/game datasets.

## Deployment

The repository is deployed as a static site through Vercel.

Production site: https://systemfitpc.vercel.app/

## Repository

GitHub repository: https://github.com/dineshkandel2057/gaming-tools
