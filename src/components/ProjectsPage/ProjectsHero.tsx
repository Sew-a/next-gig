"use client";
import { motion } from "framer-motion";
import Parallax from "@/src/components/Parallax";
import "./styles.scss";

const HERO_IMAGE =
  "https://res.cloudinary.com/dlggumsot/image/upload/v1785506072/ENiK5-pUcAAd0Tt_jomyao.webp";

export default function ProjectsHero() {
  return (
    <section className="projects-hero">
      <div className="projects-hero__bg-wrap">
        <Parallax speed={90} className="projects-hero__bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={HERO_IMAGE} alt="Sevak Avetisyan work backdrop" />
        </Parallax>
      </div>
      <div className="projects-hero__overlay" />
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
