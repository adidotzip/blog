# adi's corner

A personal blog built with **Astro + Svelte**, with a Material 3-inspired palette, Markdown posts, Google Sans Rounded loaded from the upstream GitHub repository, and Material Symbols Rounded icons.

## Development

```sh
npm install
npm run dev
```

Build and preview:

```sh
npm run build
npm run preview
```

## Write a post

Create a Markdown file in `src/content/posts/`:

```md
---
title: "Your post title"
description: "A short summary shown on the home page."
pubDate: 2026-11-08
tags:
  - Development
draft: false
---

Your post content goes here. Markdown, code fences, links, lists, and blockquotes are supported.
```

Set `draft: true` to hide a post from the published site. Posts appear newest first; the filename becomes the URL slug.

## GitHub Pages

The project URL is configured as `https://adidotzip.github.io/blog/`. The workflow in `.github/workflows/deploy.yml` deploys pushes to `main`. In repository Settings → Pages, set **Source** to **GitHub Actions**.

## Fonts and icons

Google Sans Rounded is loaded from the upstream GitHub-hosted stylesheet, so no font files are stored in this repository. Material Symbols Rounded is loaded from Google Fonts.

Example icon:

```html
<span class="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
```
