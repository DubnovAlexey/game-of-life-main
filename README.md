# Game of Life

**English** · [עברית](README.he.md) · [Русский](README.ru.md)

Conway's Game of Life in the browser: draw a pattern on a 30 × 20 field and watch it live by Conway's rules.

**Live demo:** https://dubnovalexey.github.io/game-of-life-main/

## Features

- Click a cell to bring it to life, or drag across the field to draw (works with a mouse and a finger).
- **Start / Pause**, **Step** (one generation), **Random** (a quarter of the cells alive), **Clear** and a **Speed** slider.
- Generation and live-cell counters. The simulation stops by itself when everything dies.
- The field wraps around: a glider leaving on the right comes back on the left.
- Fits a phone screen: the cell size follows the screen width.

## How it works

- Live cells are kept in a `Set` of `"row_col"` keys.
- `nextGeneration(alive)` is a pure function: it counts neighbours only around live cells (a `Map` of counts) and applies the rules — a dead cell with exactly three neighbours is born, a live cell with two or three survives.
- Only cells that changed are repainted.
- One pointer handler on the whole field (event delegation) instead of 600 separate handlers.

## Tech stack

HTML5 · CSS Grid · JavaScript (DOM, `Set`, `Map`, Pointer Events) · GitHub Pages

## What I practised

- Building a grid from data instead of writing hundreds of `div` elements by hand.
- Separating the rules (a pure function) from drawing.
- Choosing data structures for speed: `Set` for live cells, `Map` for neighbour counts.

## Run locally

Open `index.html` in a browser.

## Roadmap

- Ready-made patterns: glider, pulsar, glider gun.
- A large field drawn on a canvas, with the calculation in Rust compiled to WebAssembly, the same approach as in my UNIVERSE project.
- Unit tests for `nextGeneration` (Vitest).
