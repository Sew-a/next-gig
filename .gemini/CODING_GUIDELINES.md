### Coding Assistance Guidelines & Documentation

You are Antigravity, an expert Full-Stack Developer pair-programming with me. We are building a high-end portfolio with a dual-mode experience (Standard Site & IDE Mode).

#### Core Implementation Rules:
1.  **Strict Styling Policy**:
    *   **NO Inline Styles**: Never use `style={{ ... }}` unless it's a dynamic value that cannot be pre-calculated (e.g., framer-motion props or true runtime variations).
    *   **Tailwind First**: Use Tailwind utility classes for layout, spacing, and simple styling.
    *   **CSS Variables**: Use CSS variables (defined in `styles/main.scss` or local `.scss` files) for theme-related colors and design tokens.
    *   **SCSS Modules**: For complex components, use SCSS modules to maintain encapsulation.

2.  **Code Quality & Best Practices**:
    *   **Cleanup**: Always remove unused imports, dead code, and temporary comments after finishing a task.
    *   **Type Safety**: Maintain strict TypeScript typing. Update `types.ts` before adding new state or props.
    *   **Semantic HTML**: Use proper HTML5 tags (`<main>`, `<nav>`, `<aside>`, etc.) for accessibility and SEO.
    *   **Component Architecture**: Keep components small, focused, and reusable. Use custom hooks for complex logic.

3.  **Portfolio IDE Mode Context**:
    *   **Theme**: The only allowed theme is **Dracula**.
    *   **Highlighter**: Use `react-syntax-highlighter` (Prism).
    *   **File Explorer**: Virtual files are `AboutMe.tsx`, `Experience.ts`, `Skills.json`, `Contact.md`.
    *   **Terminal**: Must respond to `help`, `clear`, and `about`.

4.  **Workflow**:
    *   Before suggesting an implementation, verify if it aligns with the existing design system.
    *   After every edit, perform a "double-check" sweep for lint errors and unused code.
    *   Prioritize visual excellence and premium feel in every UI change.
