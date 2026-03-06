# Agustin Roel Portfolio - CLAUDE.md Guidelines

## Project Architecture & Tech Stack

- Frontend Framework: **Angular 18** (Standalone Components, Signals).
- Styling: **Tailwind CSS v3** (Utility-first, heavily customized with semantic colors, Aurora UI globals, and Glassmorphism utilities).
- UI Philosophy: **Bento Box Grids**, **Glassmorphism**, and **Aurora Backgrounds**. Prioritize premium, smooth, micro-animated aesthetics at all times. All additions must maintain this 10/10 quality standard.
- Internationalization: **ngx-translate**.
- Serverless Backend: **Vercel Serverless Functions** (`api/gemini.js` - handles Gemini streaming responses and hides the API Key).

## Development Workflow

- Package Manager: `npm`
- Auto-formatting: Keep HTML templates strictly formatted with 2-space indentation.
- Core Run commands:
  - Start local dev server: `npm start` or `npm run dev`
  - Build for production: `npm run build`
- Version Control: Feature work happens in `experimental` or `feature/*` branches. Merges go to `dev` for staging, and `main` triggers production deployments on Vercel.

## Coding Standards & Style

- **TypeScript**: Strict typing preferred. Avoid `any`. Use Interfaces for data models.
- **Angular**: Default to `ChangeDetectionStrategy.OnPush`. Use the new control flow syntax (`@if`, `@for`). Keep components granular.
- **Tailwind**: Do not add bloated third-party UI libraries (like Angular Material or Bootstrap). Everything is custom-styled with Tailwind. Use CSS variables defined in `src/styles.css` for theming.
- **Accessibility (A11y)**: All interactive elements must have `:focus-visible` outlines. Decorative SVGs must have `aria-hidden="true"`. Images must have `alt` text. Use `loading="lazy"` on below-the-fold media.
- **Performance**: Limit third-party script loads. Maximize Core Web Vitals (LCP, CLS, INP) scores.
- **Theme Support**: Every component must look perfect in both Dark and Light modes. Rely on `.dark` class overrides or `bg-bg-primary` variables.

## Important Context

This is a personal portfolio functioning as an interactive presentation card for a Senior Frontend Developer/Architect. The code must be clean, maintainable, and exemplary.
The site includes a Google Gemini Assistant (`GeminiService`) loaded with a custom system instruction. Do not expose `GEMINI_API_KEY` on the client. It is managed via Vercel Edge environment variables.
