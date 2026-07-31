export const HERO_DATA = {
  tag: "// FRONT-END ENGINEER",
  name: "I'm Sev",
  title: "Front-end",
  accent: "Engineer",
  summary:
    "Senior Frontend Engineer with 5+ years shipping large-scale React & TypeScript systems at Picsart — a 150M+ user creative platform. Promoted twice while architecting micro-frontends, a federated module shell, and shared frontend platforms used across 5+ product teams. I blend deep frontend architecture with AI-assisted delivery, real-time systems, and a designer's eye for polish.",
  aboutText:
    "Specialized in architecting federated module systems and enterprise-scale component libraries. 5+ years of experience leveraging React, Next.js, and GraphQL to build robust, accessible web ecosystems. Proven ability to reduce production overhead, mentor teams on modular architecture, and deliver high-performance internal tools that serve organization-wide needs.",
  email: "sevavetisyan97@gmail.com",
  phone: "+37441080497",
  linkedin: "https://www.linkedin.com/in/sevak-avetisyan-6122411b2/",
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  description: string;
  role: string;
  year: string;
  status: string;
  image: string;
  imageAlt: string;
  accent: string;
  icon: string;
  links: { live?: string; repo: string };
  techStack: string[];
  highlights: string[];
  architecture: { title: string; desc: string }[];
  features: { title: string; desc: string }[];
  screenshots?: { src: string; title: string }[];
};

export const PROJECTS: Project[] = [
  {
    slug: "form-builder",
    title: "Collaborative Form Builder",
    tagline: "Google-Forms-style builder with real-time multiplayer editing",
    summary:
      "A full-stack, real-time collaborative drag & drop form builder. Multiple users edit the same form simultaneously — presence, live field sync, nested sections — then publish to a shareable public link and review responses.",
    description:
      "Built from scratch as a single deployable application: a React + Next.js frontend, Express REST API, and a Socket.io real-time layer all running in one Node process. The drag & drop canvas follows the Webflow-style 3-panel pattern (field palette → canvas → contextual property panel), and every edit syncs live to collaborators over WebSockets with debounced auto-save to MongoDB. It is the kind of product engineers use daily, rebuilt end-to-end — the differentiator is genuine multi-user collaboration rather than typical CRUD demos.",
    role: "Creator · Designer · Full-stack Engineer",
    year: "2026",
    status: "Active",
    image:
      "https://res.cloudinary.com/dlggumsot/image/upload/v1785505427/Screenshot_2026-07-31_173129_qoohga.webp",
    imageAlt: "Collaborative Form Builder interface",
    accent: "#00f0ff",
    icon: "ClipboardList",
    links: {
      repo: "https://github.com/Sew-a/form-builder",
    },
    techStack: [
      "Next.js",
      "React 18",
      "TypeScript",
      "Express",
      "Socket.io",
      "MongoDB / Mongoose",
      "Zustand",
      "@dnd-kit",
      "Zod",
      "Tailwind CSS",
      "Jest",
    ],
    highlights: [
      "Real-time collaboration — live presence + field sync over Socket.io rooms",
      "11 field types incl. nested 'section' containers with cross-container drag & drop",
      "Optimistic UI with debounced auto-save; last-write-wins conflict handling",
      "Shared Zod schemas between client & server so contracts never drift",
      "Public publish flow + owner-only responses table",
    ],
    architecture: [
      {
        title: "Single-process monolith",
        desc: "Custom Node HTTP server mounts Express for /api/*, falls through to the Next.js request handler, and attaches Socket.io to the same port — one deployable unit that makes WebSockets first-class.",
      },
      {
        title: "Flat fields + parentId",
        desc: "Fields live in a flat array with parentId for nesting, the standard @dnd-kit pattern. Reorders and moves become tiny targeted DB updates and minimal socket diffs.",
      },
      {
        title: "Optimistic UI → server authority",
        desc: "Edits update the Zustand store instantly, persist to MongoDB (debounced), then broadcast to room peers. Sender is not echoed, avoiding loops.",
      },
      {
        title: "Shared contracts",
        desc: "Zod schemas, types, field-type lists, and SOCKET_EVENTS all live in shared/types.ts, imported by both client and server so validation rules cannot drift.",
      },
    ],
    features: [
      {
        title: "Drag & drop canvas",
        desc: "3-panel Webflow-style builder with palette, canvas, and contextual property panel. Keyboard-sortable, DragOverlay preview, click-to-add fallback.",
      },
      {
        title: "Real-time collaboration",
        desc: "Socket.io rooms keyed by form id with live presence list and instant sync of add, update, reorder, move, and delete events.",
      },
      {
        title: "Nested sections",
        desc: "Sections are real containers; fields can be dragged in and out, nesting capped at one level, with children promoted on delete.",
      },
      {
        title: "Rich field properties",
        desc: "Labels, placeholders, validation bounds, required toggles, options, and appearance controls (colors, radius, width, font size) per field.",
      },
      {
        title: "Auth & accounts",
        desc: "JWT in httpOnly cookie, bcrypt hashing, avatar upload with client-side compression, password change, and account deletion that cascades.",
      },
      {
        title: "Publish & responses",
        desc: "Anyone can fill a published form without an account; owners and collaborators review structured responses in a table.",
      },
    ],
  },
  {
    slug: "ai-agents",
    title: "AI Agents & Prompt Engineering Hub",
    tagline: "A practical LLM knowledge platform — prompts, agents & RAG made copyable",
    summary:
      "A curated educational platform teaching prompt engineering, AI agents, RAG, and reusable agent workflows — with copyable examples for ChatGPT, Claude, Gemini, and more. Served statically to thousands, built with Next.js 16 + React Compiler.",
    description:
      "A knowledge hub built around the idea of 'using LLMs like a daily thinking system, not just a chat box.' It covers 9 prompt techniques, the three pillars of AI agents, a deep RAG explainer, 24 copyable library prompts across 8 categories, free-agent tool comparisons, and reusable workflow patterns. The repo is also an experimentation lab: multi-agent skill prompt files, agent-orchestration workflows, and a browser game built by AI agents.",
    role: "Creator · Writer · Engineer",
    year: "2026",
    status: "Live",
    image:
      "https://res.cloudinary.com/dlggumsot/image/upload/v1783354442/Screenshot_2026-07-06_193842_qqp0jb.webp",
    imageAlt: "AI Agents Hub prompts page",
    accent: "#a855f7",
    icon: "Bot",
    links: {
      live: "https://ai-agents.sevavetisyan97.workers.dev",
      repo: "https://github.com/Sew-a/AI-Agents",
    },
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "React Compiler",
      "CSS Modules",
      "Cloudflare Pages/Workers",
      "OpenNext",
    ],
    highlights: [
      "9 prompt techniques with copyable examples, from zero-shot to Reflexion",
      "AI agents deep-dive: planning, tools, memory, workflows vs agents",
      "RAG & grounding pipeline explained end-to-end (chunking → embeddings → retrieval)",
      "24-prompt library across 8 categories with one-click copy",
      "Static, server-rendered, zero runtime fetching — deployable anywhere",
    ],
    architecture: [
      {
        title: "Typed data modules instead of a CMS",
        desc: "All content lives in strongly typed TS data modules (Technique, AgentWorkflow, LibraryItem…) rendered by server components. The whole site is static and trivially deployable.",
      },
      {
        title: "Server components by default",
        desc: "Only two client components carry real interactivity — library tabs and copy-to-clipboard. Everything else is rendered on the server.",
      },
      {
        title: "Edge deployment",
        desc: "Next.js 16 App Router compiled to Cloudflare Workers via OpenNext + wrangler, with immutable static cache headers and a self-referencing service binding.",
      },
      {
        title: "Token-driven design system",
        desc: "CSS custom properties define the entire dark purple/indigo theme; monospace for prompt blocks, gradient accent headings, staggered entrance animations.",
      },
    ],
    features: [
      {
        title: "Learning guides",
        desc: "Basics, 9 techniques, agents, RAG, and a 6-step learning path — each with how-to steps and a copyable example.",
      },
      {
        title: "Prompt library",
        desc: "24 prompts in 8 categories (Design, Dev, Marketing, Education, Analytics, Reasoning, Agents, Study) with use-case notes.",
      },
      {
        title: "Agent workflows",
        desc: "Prompt contracts, planner→builder→reviewer, agent chatrooms, stochastic consensus, and self-modifying rules engines.",
      },
      {
        title: "Tool comparisons",
        desc: "9 free open-source AI coding tools compared by type, license, self-host capability, and stars, with copyable install commands.",
      },
      {
        title: "Copy-to-clipboard everywhere",
        desc: "Robust Clipboard API with a hidden-textarea execCommand fallback and instant 'Copied!' feedback on every prompt.",
      },
      {
        title: "Experimentation lab",
        desc: "Repo also contains multi-agent skill prompt files, orchestration docs (Claude planner + Codex builder + Gemini researcher), and a browser game.",
      },
    ],
  },
];

export type FeaturedItem = {
  slug: string;
  title: string;
  tagline: string;
  image: string;
  accent: string;
  href?: string;
  comingSoon?: boolean;
};

export const FEATURED_WORK: FeaturedItem[] = [
  {
    slug: "form-builder",
    title: "Collaborative Form Builder",
    tagline: "Real-time multiplayer drag & drop form builder",
    image: 'https://res.cloudinary.com/dlggumsot/image/upload/v1785505427/Screenshot_2026-07-31_173129_qoohga.webp',
    accent: "#00f0ff",
    href: "/work/form-builder",
  },
  {
    slug: "ai-agents",
    title: "AI Agents & Prompt Engineering Hub",
    tagline: "Prompt engineering, agents & RAG made copyable",
    image: PROJECTS[1].image,
    accent: "#a855f7",
    href: "/work/ai-agents",
  },
  {
    slug: "Google Picker micro-frontend",
    title: "Google Picker micro-frontend",
    tagline: "Google Drive file picker embedded as micro-frontend",
    image: "https://res.cloudinary.com/dlggumsot/image/upload/v1779292516/MyProject2_dvlxy8.png",
    accent: "#00f0ff",
    comingSoon: true,
  },
  {
    slug: "file-system",
    title: "File System & Tree View",
    tagline: "WCAG-ready component library with design tokens",
    image: "https://res.cloudinary.com/dlggumsot/image/upload/v1779292518/MyProject3_yzfsbw.png",
    accent: "#a855f7",
    comingSoon: true,
  },
  {
    slug: "Game Project",
    title: "Game",
    tagline: "Multiplayer editing over WebSockets",
    image: "https://res.cloudinary.com/dlggumsot/image/upload/v1782209157/IMG20260616175745_nlv53i.webp",
    accent: "#4ade80",
    comingSoon: true,
  },
];

export const EXPERIENCE = [
  {
    company: "Picsart",
    location: "Yerevan, Armenia",
    period: "May 2021 – Feb 2026",
    companySummary:
      "One of the world's largest creative platforms with 150M+ monthly active users.",
    roles: [
      {
        title: "Frontend Engineer II",
        period: "Feb 2025 – Feb 2026",
        achievements: [
          "Architected a shared File System library adopted across 2 products, eliminating 20 hours of duplicated integration work per sprint and aligning 3 team leads on a single interface contract.",
          "Owned the design, architecture, and rollout of a universal Google Picker micro-app, consolidating 4 teams' duplicate Google Drive integrations and removing a manual, per-team file-transfer workflow platform-wide.",
          "Cut delivery time for a cross-project commenting micro-frontend from an 8-week baseline to 3 weeks by designing the component architecture and driving AI-assisted development (Cursor + Claude) for API integration — enabling an earlier product launch.",
          "Enabled 5+ product teams to ship independently on a ~150M-user platform by delivering 5+ production micro-frontend applications and consolidating them into a single federated shell.",
          "Reduced core editor production bugs by 9.3% by running systematic live-environment triage to root-cause issues directly in production, cutting mean time to resolution.",
          "Improved platform-wide LCP by 20% by building a standalone micro-frontend preview engine with lazy asset hydration, replacing 3 inconsistent per-product implementations.",
        ],
      },
      {
        title: "Frontend Engineer I",
        period: "Apr 2022 – Feb 2025",
        achievements: [
          "Championed test engineering across core repositories, taking Jest unit coverage from 0% to 85%+ and catching 3 regression classes before they ever reached production.",
          "Drove WCAG 2.1 AA accessibility and full keyboard navigation into components failing automated audits, building accessible component libraries and a standardized tabs system with design.",
          "Unblocked cross-team adoption by introducing Storybook to an opaque UI library, documenting and auditing 20+ components.",
          "Cut onboarding ramp-up for 2 incoming engineers by owning the shared component library and logic layer underpinning the Drive project.",
        ],
      },
      {
        title: "UI Engineer",
        period: "May 2021 – Apr 2022",
        achievements: [
          "Drove organic acquisition for a 150M-user platform by shipping 20+ marketing landing pages scoring 90+ on Lighthouse for both Performance and Accessibility.",
          "Hardened availability for downstream SDK consumers by optimizing data delivery pipelines and standardizing API responses.",
        ],
      },
    ],
  },
  {
    company: "JoinToHire",
    location: "Yerevan, Armenia",
    period: "Nov 2020 – May 2021",
    companySummary:
      "Fast-growing hiring platform where I owned marketing pages and performance.",
    roles: [
      {
        title: "Frontend Engineer",
        period: "Nov 2020 – May 2021",
        achievements: [
          "Improved SEO-driven organic acquisition by building 3 marketing landing pages scoring 90+ on Lighthouse through lazy loading, image compression, and critical-path CSS extraction.",
          "Halved new-page build time by migrating the codebase from vanilla JS to React, cutting time-to-interactive by 30% and unlocking component reuse.",
        ],
      },
    ],
  },
];

export const SKILL_CATEGORIES = [
  { cat: "Languages & Core Web", items: ["JavaScript", "TypeScript", "HTML", "GraphQL"] },
  { cat: "Frameworks & Platforms", items: ["React", "Next.js", "Node.js"] },
  { cat: "Architecture", items: ["Micro-frontends", "Module Federation", "Design Systems",] },
  { cat: "State Management", items: ["Context", "Redux", "Zustand"] },
  { cat: "Styling & Design", items: ["CSS", "SASS", "Tailwind", "JSS", "Styled Components", "Framer Motion"] },
  { cat: "Testing & QA", items: ["Jest", "Storybook", "RTL"] },
  { cat: "DevOps & Build", items: ["Git", "Docker", "Webpack", "CI/CD", "Cloudflare"] },
  { cat: "AI-Enhanced Dev", items: ["Claude", "Cursor", "Copilot", "AI Agents", "Prompt Engineering"] },
  { cat: "Game Development", items: ["Unity", "C#", "Blender", "Pixel Art"] },
];

export const RESUME = {
  name: "Sevak Avetisyan",
  title: "Senior Frontend Engineer",
  headline:
    "Senior Frontend Engineer · React · TypeScript · Micro-frontends · AI-assisted delivery",
  email: "sevavetisyan97@gmail.com",
  phone: "+374 41 080 497",
  location: "Yerevan, Armenia",
  linkedin: "https://www.linkedin.com/in/sevak-avetisyan-6122411b2/",
  github: "https://github.com/Sew-a",
  summary:
    "Senior Frontend Engineer with 5+ years building large-scale React and TypeScript applications at Picsart, a 150M+ user platform. Promoted twice while architecting micro-frontend systems, a federated module shell, shared component libraries, and real-time web products. Known for quantified impact — 20% platform-wide LCP improvement, 9.3% reduction in production bugs, and 20+ hours of sprint work eliminated per week via shared frontend platforms. Comfortable leading architecture, mentoring engineers, and shipping with AI-assisted development.",
  skills: [
    "React",
    "TypeScript",
    "Next.js",
    "Micro-frontends",
    "Module Federation",
    "GraphQL",
    "Redux / Zustand / Context",
    "CSS / SASS / Tailwind",
    "Jest / Storybook",
    "Node.js",
    "Express",
    "Socket.io",
    "MongoDB",
    "Webpack",
    "Docker",
    "CI/CD",
    "Cloudflare Workers",
    "AI Agents / Prompt Engineering",
  ],
  education: {
    degree: "BSc, Computer Science",
    school: "Armenian National Polytechnic University",
    year: "2014 – 2018",
  },
  languages: [
    { name: "English", level: "Professional working proficiency" },
    { name: "Armenian", level: "Native" },
    { name: "Russian", level: "Professional working proficiency" },
  ],
};
