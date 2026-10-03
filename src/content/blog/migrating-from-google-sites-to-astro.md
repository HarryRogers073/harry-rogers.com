---
title: "Outgrowing Google Sites: Migrating My Engineering Portfolio to Astro and Vercel"
description: "Why I traded a WYSIWYG website builder for a Git-driven, statically generated developer portfolio with automated CI/CD and interactive hardware emulators."
date: 2026-10-03
tags: ["Web Dev", "Astro", "Vercel", "Portfolio", "Engineering"]
draft: false
---

For several years, my personal website at `www.harry-rogers.com` lived on Google Sites. It served its purpose well as a quick way to host my dissertation write-ups and CV links without worrying about hosting maintenance.

However, as my engineering work grew—spanning FPGA digital verification frameworks, hardware-in-the-loop testbeds, and custom embedded systems—Google Sites began feeling limiting. I wanted a platform that reflected how I actually build software:

1. **Version Controlled with Git:** Every project write-up, blog post, and asset change should be a tracked commit with clear history and peer-reviewable pull requests.
2. **Modern Developer Pipeline:** Automated preview URLs on Vercel for every branch, link checkers, and type safety with TypeScript.
3. **Pure Web Performance:** No bulky CMS JavaScript overhead, instant page loads, and zero-runtime static HTML.
4. **Rich Interactive Demos:** Native support for interactive terminal emulators, oscilloscopes, and Mermaid system architecture diagrams.

## Why Astro?

Astro proved to be the ideal fit:
- **Content Collections:** Strict TypeScript schemas validate all frontmatter for my engineering projects. If a date is missing or a tag is malformed, the build fails at CI rather than breaking in production.
- **Island Architecture:** Interactive elements (like the retro terminal or waveform canvas) load JavaScript only when needed, while the rest of the site remains zero-JS static HTML.
- **Clean Markdown / MDX:** Project documentation can be written naturally in Markdown with embedded code snippets and syntax highlighting.

## The Result

The site is now entirely hosted on Vercel, decoupled from Google Sites, and connected directly to my personal GitHub account (`HarryRogers073`). All legacy URLs cleanly 301-redirect to their new canonical routes, preserving search engine ranking and external bookmarks.
