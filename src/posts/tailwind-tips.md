---
title: 10 Tailwind CSS Tips That Saved Me Hours
description: Practical Tailwind patterns I use in every project, from arbitrary values to dark mode.
date: 2026-03-22
cover: https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200
tags: [tailwind, css, productivity]
---

# 10 Tailwind CSS Tips That Saved Me Hours

After two years of building with Tailwind, here are the patterns I reach for again and again.

## 1. Arbitrary values

When the design system doesn't have what you need, use square brackets:

```html
<div class="top-[117px] bg-[#1da1f2]">...</div>
```

## 2. Group hover

```html
<div class="group">
  <h3 class="group-hover:text-brand-500">Title</h3>
</div>
```

## 3. Dark mode the right way

Use `dark:` variants instead of toggling classes manually:

```html
<div class="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
  Adapts automatically
</div>
```

## 4. The `@apply` directive — use sparingly

```css
.btn-primary { @apply bg-brand-500 text-white px-4 py-2 rounded-lg; }
```

It's tempting, but stick to **utility-first** in your markup. Only extract to `@apply` when a pattern
is reused 5+ times.

## 5. Typography plugin

For markdown content, the typography plugin is a lifesaver:

```html
<article class="prose dark:prose-invert">{markdown}</article>
```

## 6. Container queries

Modern Tailwind supports container queries. Layout based on the container, not viewport:

```html
<div class="@container">
  <div class="@lg:grid-cols-2">...</div>
</div>
```

## 7. Animation utilities

```html
<div class="animate-pulse">Skeleton loader</div>
```

For custom animations, define them in `tailwind.config.js` under `theme.extend.animation`.

## 8. The `space-y-*` and `divide-y-*` utilities

```html
<ul class="space-y-3 divide-y divide-zinc-200">...</ul>
```

## 9. Responsive design first

Mobile-first is the default. Stack from smallest to largest:

```html
<div class="text-sm md:text-base lg:text-lg">Responsive</div>
```

## 10. Use Prettier with the Tailwind plugin

Auto-sorts your class names by convention. Set it up once, never think about it again.

That's it — happy styling!
