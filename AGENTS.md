# AGENTS.md

Single-page personal portfolio for Simón Lionello. UI copy is in Spanish.

## Stack

- React 19 + TypeScript ~5.9 + Vite 7
- Tailwind v4 via `@tailwindcss/vite`. **No `tailwind.config.js`** — theme is `@theme inline` + CSS vars (`:root` / `.dark`) in `src/index.css`, oklch color space.
- shadcn/ui (new-york, neutral base, CSS variables, lucide icons). Primitives live in `src/components/ui/`.
- React Compiler enabled (`babel-plugin-react-compiler` in `vite.config.ts`). Keep components pure; follow the Rules of React.
- Icons: `lucide-react` for UI, `react-icons` for brand logos.

## Commands

- `npm run dev` — Vite dev server
- `npm run build` — `tsc -b && vite build` (this also typechecks)
- `npm run lint` — `eslint .` (flat config)
- `npm run preview` — preview built output

No `typecheck` script. To typecheck without building: `npx tsc -b`. **No tests are configured.**

## Verify before finishing work

Run `npm run lint` and `npx tsc -b`. Both must pass. (Don't rely on `npm run build` alone if you only changed types.)

## Layout

- `src/App.tsx` — root. Composes `<Header>` then `<MainLayout>` with sections in fixed order: Hero → ExperienceSection → About → Proyects.
- `src/components/` — feature sections. Single-page anchor nav: `#about`, `#proyects`.
- `src/components/ui/` — shadcn/ui primitives, vendored. Add new ones with `npx shadcn@latest add <name>`. Don't hand-edit unless fixing a shadcn bug.
- `src/lib/utils.ts` — `cn()` (clsx + tailwind-merge). Always use it to merge Tailwind classes.
- `public/docs/SliomotaCv.pdf` — CV linked by the Hero download button. Keep the path.

## Quirks an agent would otherwise miss

- Path alias `@/*` → `./src/*` is set in **both** `tsconfig.json` (`paths`) and `vite.config.ts` (`resolve.alias`). Update both if it ever changes.
- `tsconfig.app.json` enables `verbatimModuleSyntax`, `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly`, `strict`. Use `import type` for type-only imports; never leave unused vars/params.
- Global CSS helpers in `src/index.css` `@layer base`: `.sections` (centered section wrapper) and `.subtitle` (section heading). Reuse these for new sections; don't reinvent the wrapper.
- `Proyects` is currently disabled with an "En proceso..." placeholder; `proyectscard.tsx` exists but is unused. Re-enable by uncommenting the map in `proyects.tsx`.
- Component exports are inconsistent: `header.tsx` is `export default`; every other section uses named `export const`. Match the file you're editing; prefer named exports for new sections.

## Commits

Conventional Commits on `main`: `feat:`, `fix:`, `chore:`, `refactor:`, `style:`. No branch/PR policy observed.

See `Style.md` for code and UI style rules.
