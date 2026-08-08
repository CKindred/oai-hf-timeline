# Project: OpenAI-Hugging Face Incident Timeline  React Application
## Tech stack & constraints
- React 19 + TypeScript strict mode. No `any` types permitted.
- State: No additional state management packages/frameworks, just use vanilla React
- Styling: Tailwind CSS v4. Zero custom CSS files.
- Component libraries: shadcn/ui
- Runtime/testing/package manager etc: Bun used for everything
## Code conventions
- Components: use arrow functions.
- File names: PascalCase for components, camelCase for hooks/utils.
- Prefer composition over prop-drilling beyond 2 levels.
## Accessibility (non-negotiable)
- WCAG 2.2 AA compliance required on every component.
- Interactive elements: always `aria-label` or visible text label.
- Color contrast: minimum 4.5:1 for text, 3:1 for UI components.
## Security rules
- Never log PII to console or error tracking.
- API keys must come from environment variables only.
- Input sanitization required for all user-supplied data.
- Run `/security-review` before marking any PR ready.
## What "done" means
A task is not complete unless:
1. TypeScript compiles with zero errors.
2. All existing tests pass.
3. New functionality has test coverage.
4. Accessibility audit passes.
5. No new ESLint warnings.
