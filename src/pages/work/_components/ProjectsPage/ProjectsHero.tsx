import { motion } from "framer-motion";
import Parallax from "@/src/components/Parallax";
import "./styles.scss";

const HERO_BASE = "https://res.cloudinary.com/dlggumsot/image/upload";
const HERO_ID = "v1785506072/ENiK5-pUcAAd0Tt_jomyao.webp";
const HERO_SRC = `${HERO_BASE}/f_auto,q_auto,w_1920/${HERO_ID}`;
const HERO_SRCSET = [
  { w: 480, url: `${HERO_BASE}/f_auto,q_auto,w_480/${HERO_ID}` },
  { w: 768, url: `${HERO_BASE}/f_auto,q_auto,w_768/${HERO_ID}` },
  { w: 1280, url: `${HERO_BASE}/f_auto,q_auto,w_1280/${HERO_ID}` },
  { w: 1920, url: `${HERO_BASE}/f_auto,q_auto,w_1920/${HERO_ID}` },
];

export default function ProjectsHero() {
  return (
    <section className="projects-hero">
      <div className="projects-hero__bg-wrap">
        <Parallax speed={90} className="projects-hero__bg">
          <img
            src={HERO_SRC}
            srcSet={HERO_SRCSET.map((s) => `${s.url} ${s.w}w`).join(", ")}
            sizes="100vw"
            alt="Sevak Avetisyan work backdrop"
            width="1920"
            height="1080"
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
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
