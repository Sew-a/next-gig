import { motion } from "framer-motion";
import { HERO_DATA, SKILL_CATEGORIES } from "@/src/data/portfolioData";
import { HeadingText, ActionButton, FadeIn } from "@/src/components/UI";
import { ACTION_BUTTON_TYPE } from "@/src/components/types";
import { paths } from "@/src/routes/mainRoutes";
import ExperienceTabs from "@/src/components/ExperienceTabs";
import FeaturedGrid from "@/src/components/FeaturedGrid";
import Parallax from "@/src/components/Parallax";

export function HeroSection() {
  return (
    <FadeIn>
      <section className="hero">
        <img
          className="hero__bg"
          src="https://res.cloudinary.com/dlggumsot/image/upload/f_auto,q_auto,w_1920/v1782203370/maxresdefault_mu3oiu.webp"
          srcSet="https://res.cloudinary.com/dlggumsot/image/upload/f_auto,q_auto,w_480/v1782203370/maxresdefault_mu3oiu.webp 480w,
                  https://res.cloudinary.com/dlggumsot/image/upload/f_auto,q_auto,w_768/v1782203370/maxresdefault_mu3oiu.webp 768w,
                  https://res.cloudinary.com/dlggumsot/image/upload/f_auto,q_auto,w_1280/v1782203370/maxresdefault_mu3oiu.webp 1280w,
                  https://res.cloudinary.com/dlggumsot/image/upload/f_auto,q_auto,w_1920/v1782203370/maxresdefault_mu3oiu.webp 1920w"
          sizes="100vw"
          alt=""
          width="1920"
          height="1080"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
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
                title="Résumé"
                link={paths.resume}
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
          <div className="experience__actions">
            <ActionButton
              title="Download Résumé"
              link={paths.resume}
              buttonType={ACTION_BUTTON_TYPE.PRIMARY}
            />
          </div>
          <div className="experience__line-top"></div>
        </div>
        <ExperienceTabs />
      </section>
    </FadeIn>
  );
}

export function SkillsSection() {
  return (
    <FadeIn delay={0.2}>
      <section className="skills">
        <HeadingText title="Technologies I work with" label="// SKILLS" />
        <div className="skills__grid">
          {SKILL_CATEGORIES.map((category, index) => (
            <div key={index} className="skill-card">
              <span className="skill-card__cat">{category.cat}</span>
              <div className="skill-card__tags">
                {category.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}
