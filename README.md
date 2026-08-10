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
| `bun run lint`      | Run ESLint                                |
| `bun run typecheck` | Run the TypeScript compiler (no emit)     |
| `bun run test`      | Run the test suite                        |

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
