---
title: Framer Motion in 5 Minutes
description: The minimum you need to know to add delightful animations to your React app.
date: 2026-04-10
cover: https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200
tags: [framer-motion, react, animation]
---

# Framer Motion in 5 Minutes

Animations make UIs feel alive. **Framer Motion** is the easiest way to add them in React.

## Install

```bash
npm install framer-motion
```

## The `motion` component

Replace any HTML tag with its `motion` equivalent:

```jsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
>
  I fade in from below
</motion.div>
```

## Hover and tap

```jsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Press me
</motion.button>
```

## Scroll-triggered animations

```jsx
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>
  Visible when scrolled into view
</motion.div>
```

## AnimatePresence for exit animations

```jsx
import { AnimatePresence } from 'framer-motion';

<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Modal
    </motion.div>
  )}
</AnimatePresence>
```

## Layout animations

The magic prop — `layout` — automatically animates between layout changes:

```jsx
<motion.div layout>{children}</motion.div>
```

That's the 80/20. With these patterns you can build polished, professional animations in any React app.
