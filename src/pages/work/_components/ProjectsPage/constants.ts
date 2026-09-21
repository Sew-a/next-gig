export const PROJECTS_HERO = {
  label: "// SELECTED WORK",
  title: "Work",
  dot: ".",
  lead: "Full-stack systems, micro-frontends, and AI platforms — designed, architected, and shipped end-to-end.",
};

export const PROJECTS_HERO_ANIMATIONS = {
  label: {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.15 },
  },
  title: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.75,
      delay: 0.25,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  },
  lead: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: 0.4 },
  },
};

export const PROJECTS_HEADING = {
  title: "Work / Projects",
  label: "// CASE STUDIES",
};