# OpenAI &ndash; Hugging Face Incident Timeline

An interactive, single-page visualization of the timeline of events described in
[*Two Months Inside OpenAI: A Timeline*](https://airiskexplorer.substack.com/p/two-months-inside-openai-a-timeline)
(AI Risk Explorer). Events are grouped into phases and rendered as a vertical
flowchart; each card expands to show more detail and links to the outlets that
reported it. The page is purely informational and presents no opinion or
analysis of its own.

## Tech stack

- [Bun](https://bun.sh) &ndash; runtime, package manager, bundler/dev server, and test runner
- React 19 + TypeScript (strict mode)
- Tailwind CSS v4
- [shadcn/ui](https://ui.shadcn.com) components

## Getting started

```bash
bun install
bun run dev
```

The dev server runs at [http://localhost:3000](http://localhost:3000) with hot reload.

## Scripts

| Command          | Description                              |
| ---------------- | ----------------------------------------- |
| `bun run dev`       | Start the local dev server with HMR       |
| `bun run build`     | Produce a production build in `./dist`    |
| `bun run lint`      | Check linting and formatting with Biome   |
| `bun run format`    | Apply Biome's formatting and safe lint fixes |
| `bun run typecheck` | Run the TypeScript compiler (no emit)     |
| `bun run test`      | Run the unit test suite                   |
| `bun run test:visual` | Run Playwright screenshot regression tests |

Visual regression baselines are platform-specific (filenames are suffixed
`-linux.png`) and must be generated in CI, not locally on macOS/Windows &mdash;
running `test:visual` locally will fail on a missing/mismatched baseline even
with no real regression. To update a baseline, push a commit, download the
`playwright-screenshots` artifact from the failed `Visual Regression` run, and
commit the updated PNG(s) from `tests/visual/timeline.spec.ts-snapshots/`.

## Project structure

```
src/
  components/       Timeline UI components
  components/ui/    shadcn/ui primitives
  data/             Timeline event data (events, phases, sources)
  lib/              Shared utilities
```

## Content

Event summaries are original paraphrases of the source article, with each
"Reported by" citation linking directly to the outlet's own coverage where a
confirmed URL is available.
