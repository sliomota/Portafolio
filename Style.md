# Style.md

Code and UI style rules for this portfolio. Follow these when adding or editing components.

## File naming

- Feature components: **lowercase, no separators** — `proyectscard.tsx`, `mainlayout.tsx`, `experiencesection.tsx`. Do not introduce PascalCase filenames.
- shadcn/ui primitives in `src/components/ui/` keep the registry's kebab-case names (`navigation-menu.tsx`).

## Two component styles — keep them separate

1. **`src/components/ui/*` (shadcn primitives):** `function ComponentName()` declarations, `data-slot` attributes, `React.ComponentProps<"tag">` + `VariantProps` for props, `cva` for variants. Treat as vendored.
2. **`src/components/*` (feature sections):** arrow functions `export const Section = () => (...)`, `<>...</>` fragment shorthand, props via a local `interface`.

## Exports

- Feature sections: named export `export const X = () => {}`.
- `header.tsx` is the only `export default`. Don't add more.
- shadcn primitives: named exports at the bottom of the file.

## Props interfaces

- Feature components: declare a local interface, **PascalCase** (`interface ProjectCardProps`). The codebase has a lowercase `experienceProp` — that's a slip, don't propagate it.
- shadcn primitives: use `React.ComponentProps<...>` + `VariantProps`, no custom interfaces.

## Imports

- `verbatimModuleSyntax` is on → always `import type` for type-only imports.
- Order: external packages → `@/...` aliases → relative imports.
- Use `@/components/ui/...`, `@/lib/utils` for cross-folder imports; relative `./` is fine within the same folder.

## Styling

- Tailwind v4. Theme tokens are CSS variables in `src/index.css` (`:root` light, `.dark` dark, oklch). Prefer **semantic tokens** (`bg-background`, `text-foreground`, `bg-card`, `text-primary`, `text-muted-foreground`, `border-border`) over hardcoded colors.
- Merge classes with `cn()` from `@/lib/utils`; never string-concatenate Tailwind classes conditionally.
- Section wrappers: `<section className="sections">` with `<h3 className="subtitle">` heading. Inline widths use `w-4/5 md:w-3/5 mx-auto`.
- Shadows: `shadow-md` (header, hero), `shadow-lg` (cards), `shadow-xl` (placeholder cards).
- Radii: `rounded-md` for sections/cards, `rounded-full` for avatars and badges.
- Spacing scale used in the repo: `p-2`, `p-4`, `p-5`, `gap-1`–`gap-5`, `my-5`. Stick to it.

## Icons

- Brand icons (GitHub, LinkedIn, external link): `react-icons` (`FiGithub`, `FaLinkedinIn`, `RxExternalLink`).
- UI icons: `lucide-react` (e.g., `ChevronDownIcon`). shadcn defaults to lucide.
- Size icons with the `size-*` utility (`size-5`), not `width`/`height`.

## Content

- All user-facing copy is **Spanish** (Español). Section titles: "Sobre mi", "Proyectos", "Experiencia".
- In JSX text, escape parentheses/braces with HTML entities (`&#40;`, `&#41;`) or wrap fragments in `{" "}` to avoid trailing-space trim warnings.

## Don't

- No `useMemo` / `useCallback` / `React.memo` — the React Compiler handles memoization automatically.
- No hardcoded color values in components — use the CSS-variable tokens.
- No `tailwind.config.js` — theme edits go in `src/index.css`.
- No PascalCase component filenames.
