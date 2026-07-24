"use client";
import Image from "@/src/components/Image";
import {
  HERO_DATA,
  SKILL_CATEGORIES,
  PORTFOLIO,
  AI_SUMMARY,
} from "@/src/data/portfolioData";
import { HeadingText, ActionButton, FadeIn } from "@/src/components/UI";
import { ACTION_BUTTON_TYPE } from "@/src/components/types";
import ExperienceTabs from "@/src/components/ExperienceTabs";

export function HeroSection() {
  return (
    <FadeIn>
      <section className="hero">
        <div className="hero__content hero__content--centered">
          <h1 className="hero__heading">
            {HERO_DATA.name}
            <br />
            {HERO_DATA.title} <span className="hero__accent">{HERO_DATA.accent}</span>
          </h1>
          {HERO_DATA.summary && (
            <p className="hero__sub">{HERO_DATA.summary}</p>
          )}
          <div className="hero__cta">
            <ActionButton
              title="My Experience"
              link="#experience"
              buttonType={ACTION_BUTTON_TYPE.PRIMARY}
            />
            <ActionButton
              title="My work"
              link="/projects"
              buttonType={ACTION_BUTTON_TYPE.GHOST}
            />
          </div>
        </div>
      </section>
    </FadeIn>
  );
}

export function AiWorkSection() {
  return (
    <FadeIn delay={0.1}>
      <section className="ai-work">
        <HeadingText title={AI_SUMMARY.title} label="// AI & AGENTS" />
        <div className="ai-work__card">
          <p className="ai-work__desc">{AI_SUMMARY.description}</p>
          <ul className="ai-work__highlights">
            {AI_SUMMARY.highlights.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <div className="ai-work__links">
            <ActionButton
              title="Visit Website →"
              link={AI_SUMMARY.link}
              buttonType={ACTION_BUTTON_TYPE.PRIMARY}
            />
            <ActionButton
              title="View Source →"
              link={AI_SUMMARY.repo}
              buttonType={ACTION_BUTTON_TYPE.GHOST}
            />
          </div>
        </div>
      </section>
    </FadeIn>
  );
}

export function ExperienceSection() {
  return (
    <FadeIn delay={0.1}>
      <section className="experience" id="experience">
        <div className="experience__header">
          <h2 className="experience__title">WORK EXPERIENCE</h2>
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

export function ProjectsSection() {
  return (
    <FadeIn delay={0.2}>
      <section className="portfolio" id="portfolio">
        <div className="portfolio__content">
          <div className="portfolio__grid">
            {PORTFOLIO.map((project, index) => (
              <div key={index} className="portfolio__item">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={364}
                  height={300}
                />
                <div className="portfolio__overlay">
                  <span>{project.title}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="portfolio__header">
            <span className="portfolio__label">COLLECTIONS</span>
            <h2 className="portfolio__title">PROJECTS</h2>
            <div className="portfolio__desc-card">
              <p className="portfolio__desc">
                A curated exhibition of my professional journey — featuring
                micro-frontend architectures, FileSystem libraries, Google
                Picker integrations, and the creative milestones I&apos;ve
                achieved along the way.
              </p>
              <ActionButton
                title="View Full Gallery →"
                link="/projects"
                buttonType={ACTION_BUTTON_TYPE.GHOST}
                className="portfolio__cta"
              />
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
