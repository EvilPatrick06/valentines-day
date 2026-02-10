# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static Valentine's Day webpage with a "Will you be my Valentine?" prompt. Features Yes/No buttons with interactive behavior and an auto-advancing image slideshow with confetti effects.

## Architecture

- **index.html** — Single page: heading, Yes/No buttons (in `.buttons` div), a hidden message div (`#message`), and a `.slideshow` with three images. The `<script>` tag is placed after all markup so the DOM is ready when JS runs.
- **script.js** — Two features:
  1. **Slideshow**: cycles `.slide` elements every 3s by toggling the `.active` class.
  2. **Button logic**: clicking No grows the Yes button; clicking Yes reveals the message, hides No, and launches confetti (100 dynamically created `.confetti` divs with randomized CSS animation).
- **styles.css** — Valentine's theme (red background, white text, Georgia serif font). Buttons are pill-shaped with hover states. Slideshow uses opacity transitions with absolute positioning. Confetti uses a `@keyframes fall` animation.
- **images/** — favicon.ico, image1-3.jpg

## ID Conventions

- Buttons: `#yes-button`, `#no-button` (in HTML)
- Message: `#message` with `.hidden` class toggled for visibility

## Known Issue

- `script.js` references `yes-btn`/`no-btn` but HTML uses `yes-button`/`no-button` — these IDs must match.

## Running

No build step. Open `index.html` directly in a browser or use any static file server (e.g., `npx serve`, VS Code Live Server).
