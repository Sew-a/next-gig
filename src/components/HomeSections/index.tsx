import type { ComponentType } from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiRedux,
  SiJavascript,
  SiTypescript,
  SiDocker,
  SiNextdotjs,
  SiGraphql,
  SiNodedotjs,
  SiHtml5,
  SiCss,
  SiStorybook,
} from "react-icons/si";
import { GiBearFace } from "react-icons/gi";
import { HERO_DATA } from "@/src/data/portfolioData";
import { HeadingText, ActionButton, FadeIn } from "@/src/components/UI";
import { ACTION_BUTTON_TYPE } from "@/src/components/types";
import { paths } from "@/src/routes/mainRoutes";
import ExperienceTimeline from "@/src/components/ExperienceTimeline";
import FeaturedGrid from "@/src/components/FeaturedGrid";
import Parallax from "@/src/components/Parallax";

export function HeroSection() {
  return (
    <FadeIn>
      <section className="hero">
        <div className="hero__grid-dots" aria-hidden="true" />
        <Parallax speed={-34} className="hero__parallax">
          <div className="hero__content hero__content--centered">
            <motion.span
              className="hero__tag"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              {HERO_DATA.tag}
            </motion.span>
            <motion.h1
              className="hero__heading"
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              {HERO_DATA.name}
              <br />
              {HERO_DATA.title}{" "}
              <span className="hero__accent">{HERO_DATA.accent}</span>
            </motion.h1>
            <motion.p
              className="hero__sub"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {HERO_DATA.summary}
            </motion.p>
            <motion.div
              className="hero__cta"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <ActionButton
                title="My Experience"
                link="#experience"
                buttonType={ACTION_BUTTON_TYPE.PRIMARY}
              />
              <ActionButton
                title="My work"
                link={paths.work}
                buttonType={ACTION_BUTTON_TYPE.GHOST}
              />
              <ActionButton
                title="Demos"
                link={paths.demos}
                buttonType={ACTION_BUTTON_TYPE.GHOST}
              />
            </motion.div>
          </div>
        </Parallax>
      </section>
    </FadeIn>
  );
}

export function FeaturedWorkSection() {
  return <FeaturedGrid />;
}

export function ExperienceSection() {
  return (
    <FadeIn delay={0.1}>
      <section className="experience" id="experience">
        <div className="experience__header">
          <div>
            <h2 className="experience__title">WORK EXPERIENCE</h2>
            <p className="experience__subtitle">
              5+ years · React · TypeScript · Micro-frontends
            </p>
          </div>
          <div className="experience__line-top"></div>
        </div>
        <ExperienceTimeline />
      </section>
    </FadeIn>
  );
}

const TECH_ICONS: { name: string; Icon: ComponentType<{ size?: number }> }[] = [
  { name: "React", Icon: SiReact },
  { name: "Redux", Icon: SiRedux },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Docker", Icon: SiDocker },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Zustand", Icon: GiBearFace },
  { name: "GraphQL", Icon: SiGraphql },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "HTML", Icon: SiHtml5 },
  { name: "CSS", Icon: SiCss },
  { name: "Storybook", Icon: SiStorybook },
];

export function SkillsSection() {
  return (
    <FadeIn delay={0.2}>
      <section className="skills">
        <HeadingText title="Technologies I work with" label="// SKILLS" />
        <div className="skills__icon-grid">
          {TECH_ICONS.map(({ name, Icon }) => (
            <span key={name} className="tech-icon-cell" title={name} role="img" aria-label={name}>
              <Icon size={36} />
            </span>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}
