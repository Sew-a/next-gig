import Image from "@/src/components/Image";
import {
  HERO_DATA,
  SKILL_CATEGORIES,
  PORTFOLIO,
} from "@/src/data/portfolioData";
import { HeadingText, ActionButton, FadeIn } from "@/src/components/UI";
import { ACTION_BUTTON_TYPE } from "@/src/components/types";
import ExperienceTabs from "@/src/components/ExperienceTabs";
import "../styles.scss";

export default function Homepage() {
  return (
    <main className="portfolio-home">
      <FadeIn>
        <section className="hero">
          <div className="hero__content">
            <div className="hero__main">
              <Image
                src="https://res.cloudinary.com/dlggumsot/image/upload/v1779374511/portfolio_pic_t03lkt.jpg"
                alt="sevak_avetisyan"
                className="hero__portfolio-pic"
                width={150}
                height={150}
              />
              <div className="hero__text">
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
            </div>
          </div>
        </section>
      </FadeIn>
      {/* ─── EXPERIENCE ─── */}
      <FadeIn delay={0.1}>
        <section className="experience" id="experience">
          <div className="experience__header">
            <h2 className="experience__title">WORK EXPERIENCE</h2>
            <div className="experience__line-top"></div>
          </div>
          <ExperienceTabs />
        </section>
      </FadeIn>

      {/* ─── SKILLS ─── */}
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

      {/* ─── PROJECTS ─── */}
      <FadeIn delay={0.2}>
        <section className="portfolio" id="portfolio">
          <div className="portfolio__content">
            <div className="portfolio__grid">
              {PORTFOLIO.map((project, index) => (
                <div key={index} className="portfolio__item">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={220}
                    height={280}
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
                  Picker integrations, and the creative milestones I've
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
    </main>
  );
}
