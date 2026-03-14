# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static personal portfolio site for Tomer Atia, deployed via GitHub Pages at https://tomeratia.github.io. No build system, bundler, or package manager — just vanilla HTML/CSS/JS served directly.

## Stack

- **HTML** (`index.html`) — single-page layout with sections: Home/Hero, About, Projects, Contact
- **CSS** (`styles.css`) — custom styles on top of Bootstrap 5.3.3 (loaded via CDN)
- **JS** (`script.js`) — Bootstrap form validation and scroll-based active nav highlighting
- **Icons**: Bootstrap Icons 1.11.3 (CDN)
- **Contact form**: Formspree (`formspree.io/f/xaqbzkny`)

## Development

Open `index.html` in a browser — no build step needed. For live reload, use any static file server (e.g., `python3 -m http.server`).

## Architecture Notes

- CSS uses custom properties (`:root` variables) for theming colors, shadows, and borders
- Badge styling uses class names matching technology names (`.python`, `.sql`, `.linux`, `.git`) for color coding
- Project cards are in a Bootstrap tab panel structure (currently single tab "Projects")
- Images in `assets/` are used for profile photo and project card thumbnails (fixed 200px height, `object-fit: cover`)
- Comments in CSS and JS are in Hebrew
