export const HERO_DATA = {
  tag: "// FRONT-END ENGINEER",
  name: "I'm Sev",
  title: "Front-end",
  accent: "Engineer",
  summary:
    "",
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
    title: "Brandkit Dashboard",
    image: "https://res.cloudinary.com/dlggumsot/image/upload/v1779292519/MyProject6_xzhrew.png",
  },
];

export const EXPERIENCE = [
  {
    company: "Picsart",
    location: "Yerevan",
    period: "May 2021 – Mar 2026",
    roles: [
      {
        title: "Software Engineer 2",
        achievements: [
          "Engineered a FileSystem as a Service library adopted across 2 products after aligning with 3 team leads on a shared interface contract. Standardised multimedia asset handling and eliminated 20 hours/sprint of duplicated integration work, freeing teams to focus on product features rather than infrastructure plumbing.",
          "Proposed, architected, and deployed a universal Google Picker micro app after identifying that 4 product teams were independently solving the same Google Drive integration problem; adoption across all Picsart platforms eliminated a manual file transfer workflow that had previously required dedicated engineering support per team.",
          "Designed the component architecture for a cross-project commenting micro frontend. Applied AI-assisted development (Cursor + Claude) to accelerate API integration, reducing implementation time from 8 weeks based on a comparable prior integration to 3 weeks, enabling an earlier product launch.",
          "Delivered 5+ production micro-frontend applications across all Picsart product surfaces (~150M users); consolidated shared runtime into a single federated shell that reduced cross team dependency blockers and allowed product teams to ship independently without coordinating on infrastructure releases.",
          "Reduced production bug volume 9.3% on the core editor through systematic live environment triage identifying root causes directly in production rather than waiting for staging reproduction, cutting mean time to resolution and preventing recurring issue classes.",
          "Developed a standalone micro-frontend preview engine that improved LCP by 20% through lazy asset hydration and prioritised render sequencing; adopted by all internal teams as the standard preview surface, replacing 3 inconsistent per product implementations.",
          "Identified a UX defect in the storage limit notification system the popup fired on every page visit due to absent remote config fallbacks proposed and implemented a once-per-day display strategy with local fallback defaults, reducing disruptive interruptions without requiring backend changes."
        ]
      },
      {
        title: "Software Engineer 1",
        achievements: [
          "Established greenfield unit testing using Jest across core repositories; built comprehensive test suites for the landings project and cloud library system from 0% to 80-90% coverage, catching 3 regression classes in the first post launch sprint that would otherwise have reached production.",
          "Built accessible component libraries for 2 core products in collaboration with design, integrating a standardised tabs system that brought keyboard navigation and WCAG 2.1 AA compliance to components previously failing automated accessibility audits.",
          "Introduced Storybook to an opaque, untestable UI library, documenting and auditing 20+ components to make them visible, testable, and consumable unblocking adoption across teams that previously had no way to inspect component behaviour without running the full app.",
          "Built and maintained the component library and shared logic layer underpinning the Drive project. Standardised patterns reduced new feature scaffolding time and cut onboarding ramp-up for 2 engineers joining mid-project."
        ]
      },
      {
        title: "UI Engineer",
        achievements: [
          "Delivered 20+ marketing landing pages achieving Lighthouse scores of 90+ across Performance and Accessibility; pages served as the primary organic acquisition surface for a platform with 150M users, with each percentage point of load-time improvement directly tied to SEO ranking targets.",
          "Optimized data delivery pipelines to support future SDK consumers, ensuring high availability and standardized API responses for downstream integrations."
        ]
      }
    ]
  },
  {
    company: "JoinToHire",
    location: "Yerevan",
    period: "Nov 2020 – May 2021",
    roles: [
      {
        title: "Front end Engineer",
        achievements: [
          "Built and optimised 3 marketing landing pages to Lighthouse performance scores above 90, applying lazy loading, image compression, and critical-path CSS extraction to support SEO-driven acquisition.",
          "Contributed to full codebase migration from vanilla JS to React, reducing time to interactive by 30% and enabling component reuse that cut estimated build time for new pages by half."
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