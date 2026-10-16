# 🧱 Wooden Blocks

A cozy wooden block puzzle game: drag pieces onto an 8×8 board, complete rows and columns to smash them, and clear 20 levels.

> **Built with vibe coding.** I made this entire game by describing what I wanted to an AI (Claude by Anthropic) in plain conversation. I did not write the code by hand: I described, tested, reported bugs and asked for changes until it felt right.

## Features

- 20 levels with rising difficulty and a new background (colors and textures) on every level
- Pause button, day/night mode, sound effects, ambient music and a sound on/off toggle
- Works in portrait and landscape on phones, tablets and desktop
- Installable PWA: add it to your home screen and play offline

## Play and install

A PWA must be served over **HTTPS** (or `localhost`). Upload the whole folder to any static host (GitHub Pages, Netlify, Cloudflare Pages, Vercel...) and open the URL.

- **Android / Chrome:** menu → *Install app*
- **iPhone / Safari:** Share → *Add to Home Screen*
- **Desktop Chrome / Edge:** install icon in the address bar

To test locally: `python3 -m http.server 8000` and open http://localhost:8000

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The whole game (HTML, CSS, JavaScript) |
| `manifest.webmanifest` | PWA name, colors and icons |
| `sw.js` | Service worker for offline play |
| `favicon.ico`, `icons/` | Favicon, home screen icons, maskable icon |

When you change any file, bump `V` in `sw.js` (for example `wooden-blocks-v2`) so players get the update.

## Credits

Game design and code: vibe coded with Claude. Icon: AI-generated artwork.
