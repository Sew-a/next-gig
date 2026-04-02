# Portfolio Project Documentation

## Project Overview
This project is a high-end personal portfolio website built with **Next.js**, **TypeScript**, and **SCSS**. It features a unique dual-mode experience, allowing users to switch between a sleek modern landing page ("Primary Mode") and a developer-centric interface mirroring an Integrated Development Environment ("IDE Mode").

---

## Core Features & Implementation

### 1. Dual-Mode Interface Architecture
- **Primary Mode**: A high-fidelity, visually stunning landing page with sections for Projects, Experience, and Skills.
- **IDE Mode**: A fully functional VS Code-like interface featuring:
  - **Sidebar Navigation**: A file explorer with active tab highlighting.
  - **Code Editor**: A high-performance syntax-highlighted code viewer.
  - **Integrated Terminal**: A terminal-style status/logging system with state management via custom hooks.
  - **Seamless Transitions**: Powered by `framer-motion` for fluid OS-like animations.

### 2. Design System & Aesthetics
- **Premium UI**: Uses a sophisticated dark-themed palette with vibrant purple (`#d494ff`) accents.
- **Glassmorphism**: Integrated across various components for a state-of-the-art look.
- **Micro-animations**: Hover effects, scroll-triggered fade-ins (`FadeIn` component), and interactive project cards.
- **Custom Typography**: Leverages 'Advent Pro' and 'Poppins' for a modern, distinct architectural feel.

### 3. Key Components
- **Portfolio/Projects Section**: A modern grid displaying projects with high-quality images sourced directly from the `public/gallery`.
- **Work Experience Section**: A custom-designed vertical timeline with numerical checkpoints (01, 02, 03) and connecting line logic.
- **BandSections Component**: A specialized "About" section refined to highlight core personal and professional identity.
- **Reusable UI Library**: Specialized components like `HeadingText` and `ActionButton` ensure design consistency across the site.

### 4. Technical Stack
- **Framework**: Next.js 15+ with App Router.
- **Language**: TypeScript for robust type safety and improved developer experience.
- **Styling**: Vanilla SCSS with a comprehensive design system utilizing variables and mixins for scaleable styling.
- **Animations**: Framer Motion for complex transition orchestration.
- **Icons**: Lucide-React for crisp, consistent iconography.

---

## Recent Work & Refactoring
- **Gallery Integration**: Successfully mapped the `public/gallery` folder to the portfolio grid, optimizing asset delivery.
- **Layout Optimization**: Refactored the `IdeLayout` to ensure full-height sidebars and consistent state management across different views.
- **SCSS Modernization**: Migrated inline styles to dedicated SCSS modules to adhere to best practices and improve maintainability.
- **Content Centralization**: Moved all portfolio-related content into structured data files (`data/portfolioData.ts`) for easy updates.

---

## Future Roadmap
- Integration of a live contact form with server actions.
- Enhanced terminal interactivity for a truly immersive developer experience.
- More project case studies with detailed technical breakdowns.

---
*Created by [Sevak Avetisyan](https://www.linkedin.com/in/sevak-avetisyan-6122411b2/)*
