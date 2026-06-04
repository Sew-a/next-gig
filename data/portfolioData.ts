export const HERO_DATA = {
  tag: "// SOFTWARE ENGINEER",
  name: "Hello, I'm Sev",
  title: "Software",
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
    role: "Software Engineer 2",
    period: "02/2025 – 03/2026",
    achievements: [
      "Engineered a FileSystem as a Service library adopted across 2 products, standardising multimedia asset handling and eliminating 20 hours/sprint of duplicated integration work across teams.",
      "Architected and deployed a universal Google Picker micro app adopted by 4 product teams across all Picsart platforms, enabling self-serve Google Drive import/export and eliminating a manual file transfer workflow previously requiring engineering support.",
      "Designed the component architecture for a cross project commenting micro frontend; applied AI-assisted development to accelerate API integration, reducing implementation time from an estimated 8+ weeks to 3 weeks.",
      "Delivered 5+ production micro-frontend applications adopted across all Picsart product surfaces (~150M users), reducing inter team dependency blockers by consolidating shared runtime into a single federated shell.",
      "Reduced production bug volume by 9.3% for the core editor project by identifying and resolving critical issues within the live environment.",
      "Identified a UX defect in the storage limit notification system — the popup fired on every page visit due to absent remote config fallbacks. Proposed and implemented a once per-day display strategy with local fallback defaults, reducing disruptive interruptions without requiring backend changes.",
      "Spearheaded the development of accessible component libraries for 2 main company projects, integrating a standardized tabs system to guarantee WCAG compliance and smooth user navigation.",
      "Scaled development velocity by building and managing a comprehensive library of components and shared logic, serving as the technical foundation for the Drive project.",
   ],
  },
  {
    company: "JoinToHire",
    role: "Front end Engineer",
    period: "11/2020 – 05/2021",
    achievements: [
      "Built and optimised 3 marketing landing pages to Lighthouse performance scores above 90, applying lazy loading, image compression, and critical path CSS extraction to support SEO-driven acquisition.",
      "Collaborated with the team to migrate the existing website codebase to React, significantly improving performance and user interactivity.",
    ],
  },
  {
    company: "AITC",
    role: "Front-end Developer",
    period: "05/2019 – 10/2019",
    achievements: [
      "Contributed to a diverse range of projects: blogs, e-commerce platforms, online stores, and landing pages.",
      "Developed landing pages with high performance, SEO optimization, and accessibility.",
      "Developed high-speed performing AMP pages for mobile devices.",
    ],
  },
];

export const SKILL_CATEGORIES = [
  { cat: "Languages & Core Web", items: ["JavaScript", "TypeScript", "HTML", "GraphQL"] },
  { cat: "Frameworks & Platforms", items: ["React", "Next.js"] },
  { cat: "State Management", items: ["Context", "Redux", "Zustand"] },
  { cat: "Styling & Design", items: ["CSS", "SASS", "Tailwind", "JSS", "Styled Components"] },
  { cat: "Testing & QA", items: ["JEST", "Storybook"] },
  { cat: "DevOps & Build", items: ["Git", "Docker", "Webpack", "CI/CD"] },
  { cat: "AI-Enhanced Dev", items: ["Claude", "Cursor", "Copilot"] },
  { cat: "Game Development", items: ["Unity", "C#", "Pixel Art programs"] },
];