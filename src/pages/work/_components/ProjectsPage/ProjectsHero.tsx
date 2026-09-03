import { motion } from "framer-motion";
import Parallax from "@/src/components/Parallax";
import "./styles.scss";

export default function ProjectsHero() {
  return (
    <section className="projects-hero">
      <div className="projects-hero__grid-dots" aria-hidden="true" />
      <div className="projects-hero__glow" aria-hidden="true" />
      <div className="projects-hero__content">
        <motion.span
          className="projects-hero__label"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {`// SELECTED WORK`}
        </motion.span>
        <motion.h1
          className="projects-hero__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          Work<span className="projects-hero__dot">.</span>
        </motion.h1>
        <motion.p
          className="projects-hero__lead"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Full-stack systems, micro-frontends, and AI platforms — designed,
          architected, and shipped end-to-end.
        </motion.p>
      </div>
      <div className="projects-hero__fade" />
    </section>
  );
}
