# Asror Qobulov — Portfolio

Modern personal portfolio built with **Vite + React + Tailwind CSS + Framer Motion**.
Multilingual (English, O'zbekcha, Русский), with dark/light mode and a markdown-powered blog.

## Features

- **Vite** — instant dev server, fast HMR
- **Tailwind CSS** with custom design tokens, gradients, glassmorphism
- **Framer Motion** page transitions, scroll animations, modal effects
- **Dark / Light mode** with system preference and localStorage persistence
- **i18n** — English, Uzbek, Russian
- **Markdown blog** — drop `.md` files into `src/posts/`, frontmatter supported
- **Fully responsive** — mobile, tablet, desktop
- **Working contact form** that delivers messages straight to a Telegram bot
- **SEO** — meta tags, Open Graph, Twitter cards
- **Lazy-loaded routes** — fast initial load

## Getting started

```bash
npm install
npm run dev      # development server
npm run build    # production build
npm run preview  # preview production build
```

## Environment variables

Copy `.env.example` to `.env` and add your Telegram bot credentials to enable the
contact form.

```bash
cp .env.example .env
```

How to get them:

1. Open [@BotFather](https://t.me/BotFather) on Telegram → `/newbot` → copy the **token**
2. Start a chat with your new bot and send `/start`
3. Open `https://api.telegram.org/bot<TOKEN>/getUpdates` in a browser — find `"chat":{"id":...}` and copy the **chat id**

Paste both into `.env`:

```env
VITE_TELEGRAM_BOT_TOKEN=123456:ABC...
VITE_TELEGRAM_CHAT_ID=987654321
```

> ⚠️ The token ends up in the client bundle. Use a dedicated bot for this form
> and don't reuse a token that has access to private channels.

## Project structure

```
src/
├── assets/         # images, resume PDF
├── components/     # reusable UI components
├── context/        # ThemeContext
├── data/           # profile, projects, posts loader
├── locales/        # en/uz/ru translation files
├── pages/          # route pages
├── posts/          # blog posts (markdown)
├── App.jsx
├── main.jsx
├── i18n.js
└── index.css       # Tailwind base + custom utilities
```

## Adding a blog post

Create a new file in `src/posts/your-slug.md`:

```markdown
---
title: Your post title
description: Short summary shown on the listing page
date: 2026-05-11
cover: https://example.com/cover.jpg
tags: [react, tutorial]
---

# Your content here

Markdown, GitHub-flavored. Code blocks, tables, images — all supported.
```

The post is automatically picked up and listed at `/blog`.

## License

MIT
