export const HERO_DATA = {
  tag: "// FRONT-END ENGINEER",
  name: "I'm Sev",
  title: "Front-end",
  accent: "Engineer",
  summary:
    "Senior Frontend Engineer with 5+ years building large-scale React and TypeScript applications, micro-frontends, and shared frontend platforms. Promoted twice at Picsart while engineering infrastructure adopted across products serving 150M+ users. Passionate about scalable architecture, frontend performance, and developer experience.",
  aboutText:
    "Specialized in architecting federated module systems and enterprise-scale component libraries 5+ years of experience leveraging React, Next.js, and GraphQL to build robust, accessible web ecosystems. Proven ability to reduce production overhead, mentor teams on modular architecture, and deliver high-performance internal tools that serve organization-wide needs.",
  email: "sevavetisyan97@gmail.com",
  phone: "+37441080497",
  linkedin: "https://www.linkedin.com/in/sevak-avetisyan-6122411b2/",
};

export const PORTFOLIO = [
  {
    title: "Editor Files",
    image: "https://res.cloudinary.com/dlggumsot/image/upload/v1779292518/MyProject3_yzfsbw.png",
  },
  {
    title: "AI Agents Hub",
    image: "https://res.cloudinary.com/dlggumsot/image/upload/v1783354442/Screenshot_2026-07-06_193857_ubcvpw.webp",
  },
];

export const AI_SUMMARY = {
  title: "AI Agents & Prompt Engineering Hub",
  description:
    "Built a comprehensive educational platform covering prompt engineering, AI agents, RAG, and practical LLM workflows. The site serves as a curated knowledge hub with interactive prompt libraries, reusable patterns, and real-world examples for ChatGPT, Claude, Gemini, and other LLMs.",
  link: "https://ai-agents.sevavetisyan97.workers.dev",
  repo: "https://github.com/Sew-a/AI-Agents",
  highlights: [
    "Prompt Engineering guide covering 9 techniques from zero-shot to Reflexion with copyable examples",
    "AI Agents deep-dive on planning, tools, memory, and agent vs workflow architecture",
    "RAG & Grounding section explaining how to ground LLMs in external knowledge",
    "Open Source AI Tools showcase featuring n8n, Appflowy, Ollama, Fooocus, and Whisper",
    "Dark/Light mode, search functionality, and structured learning path from basics to context engineering",
  ],
};

export const EXPERIENCE = [
  {
    company: "Picsart",
    location: "Yerevan, Armenia",
    period: "May 2021 – Feb 2026",
    roles: [
      {
        title: "Frontend Engineer II",
        period: "Feb 2025 – Feb 2026",
        achievements: [
          "Eliminated 20 hours/sprint of duplicated integration work across 2 products by architecting a File System library, aligning 3 team leads on a shared interface contract.",
          "Removed a manual, per-team file-transfer workflow platform-wide by proposing, architecting, and deploying a universal Google Picker micro app, consolidating 4 teams' duplicate Google Drive integrations.",
          "Cut implementation time for a cross-project commenting micro-frontend from an 8-week baseline to 3 weeks by designing the component architecture and applying AI-assisted development (Cursor + Claude) to accelerate API integration, enabling an earlier product launch.",
          "Enabled 5+ product teams to ship independently across a ~150M-user platform by delivering 5+ production micro-frontend applications and consolidating them into a single federated shell.",
          "Reduced core editor production bugs by 9.3% by running systematic live-environment triage to find root causes directly in production, cutting mean time to resolution.",
          "Improved platform-wide LCP by 20% by building a standalone micro-frontend preview engine with lazy asset hydration, replacing 3 inconsistent per-product implementations."
        ]
      },
      {
        title: "Frontend Engineer I",
        period: "Apr 2022 – Feb 2025",
        achievements: [
          "Caught 3 regression classes before they reached production by establishing Jest unit testing from 0% to 85%+ coverage across core repositories, including the landings project and cloud library system.",
          "Brought WCAG 2.1 AA compliance and keyboard navigation to components that were failing automated accessibility audits, building accessible component libraries and a standardized tabs system with design.",
          "Unblocked cross-team component adoption by introducing Storybook to a previously opaque UI library, documenting and auditing 20+ components.",
          "Cut onboarding ramp-up for 2 incoming engineers by building and maintaining the shared component library and logic layer underpinning the Drive project."
        ]
      },
      {
        title: "UI Engineer",
        period: "May 2021 – Apr 2022",
        achievements: [
          "Drove organic acquisition for a 150M-user platform by delivering 20+ marketing landing pages scoring 90+ on Lighthouse for Performance and Accessibility.",
          "Ensured high availability for downstream SDK consumers by optimizing data delivery pipelines and standardizing API responses."
        ]
      }
    ]
  },
  {
    company: "JoinToHire",
    location: "Yerevan, Armenia",
    period: "Nov 2020 – May 2021",
    roles: [
      {
        title: "Frontend Engineer",
        period: "Nov 2020 – May 2021",
        achievements: [
          "Improved SEO-driven organic acquisition by building 3 marketing landing pages scoring 90+ on Lighthouse, using lazy loading, image compression, and critical-path CSS extraction.",
          "Cut new-page build time in half by migrating the codebase from vanilla JS to React, reducing time-to-interactive by 30% and enabling component reuse."
        ]
      }
    ]
  }
];


export const SKILL_CATEGORIES = [
  { cat: "Languages & Core Web", items: ["JavaScript", "TypeScript", "HTML", "GraphQL"] },
  { cat: "Frameworks & Platforms", items: ["React", "Next.js"] },
  { cat: "State Management", items: ["Context", "Redux", "Zustand"] },
  { cat: "Styling & Design", items: ["CSS", "SASS", "Tailwind", "JSS", "Styled Components"] },
  { cat: "Testing & QA", items: ["JEST", "Storybook"] },
  { cat: "DevOps & Build", items: ["Git", "Docker", "Webpack", "CI/CD"] },
  { cat: "AI-Enhanced Dev", items: ["Claude", "Cursor", "Copilot"] },
  { cat: "Game Development", items: ["Unity", "C#", "Blender", "Pixel Art programs"] },
];