import {
  HERO_DATA,
  EXPERIENCE,
  SKILL_CATEGORIES,
  PORTFOLIO,
} from "@/data/portfolioData";
import { HeadingText, ActionButton, FadeIn } from "@/components/UI";
import { ACTION_BUTTON_TYPE } from "@/components/types";
import "./styles.scss";

export default function Homepage() {
  return (
    <main className="portfolio-home">
      {/* ─── HERO ─── */}
      <FadeIn>
        <section className="hero">
          <div className="hero__left">
            <span className="hero__tag">{HERO_DATA.tag}</span>
            <h1 className="hero__heading">
              {HERO_DATA.name}
              <br />
              {HERO_DATA.title}
              <br />
              <span className="hero__accent">{HERO_DATA.accent}</span>
            </h1>
            <p className="hero__sub">{HERO_DATA.summary}</p>
            <div className="hero__cta">
              <ActionButton
                title="Get in touch →"
                link="/contact"
                buttonType={ACTION_BUTTON_TYPE.PRIMARY}
              />
              <ActionButton
                title="See my work"
                link="/work"
                buttonType={ACTION_BUTTON_TYPE.GHOST}
              />
            </div>
          </div>
          <div className="hero__right">
            <div className="hero__about">
              <HeadingText title="Summary" label="// RECOGNITION" />
              <p>{HERO_DATA.aboutText}</p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ─── PORTFOLIO ─── */}
      <FadeIn delay={0.1}>
        <section className="portfolio" id="portfolio">
          <div className="portfolio__content">
            <div className="portfolio__grid">
              {PORTFOLIO.map((project, index) => (
                <div key={index} className="portfolio__item">
                  <img src={project.image} alt={project.title} />
                  <div className="portfolio__overlay">
                    <span>{project.title}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="portfolio__header">
              <span className="portfolio__label">// COLLECTIONS</span>
              <h2 className="portfolio__title">PROJECTS</h2>
              <p className="portfolio__desc">
                Brief History of what, where and how I worked, All that I have recollected is in my gallery.
              </p>
              <ActionButton
                title="View Gallery →"
                link="/work"
                buttonType={ACTION_BUTTON_TYPE.GHOST}
                className="portfolio__cta"
              />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ─── EXPERIENCE ─── */}
      <FadeIn delay={0.2}>
        <section className="experience" id="experience">
          <div className="experience__header">
            <h2 className="experience__title">WORK EXPERIENCE</h2>
            <div className="experience__line-top"></div>
          </div>

          <div className="experience__timeline">
            <div className="experience__center-line"></div>
            {EXPERIENCE.map((exp, index) => (
              <div key={index} className={`experience__item ${index % 2 === 0 ? "left" : "right"}`}>
                <div className="experience__connector"></div>
                <div className="experience__card">
                  <div className="experience__card-header">
                    <h3 className="experience__company">{exp.company}</h3>
                    <span className="experience__role">{exp.role}</span>
                    <span className="experience__period">{exp.period}</span>
                  </div>
                  <ul className="experience__achievements">
                    {exp.achievements.slice(0, 6).map((achievement, aIndex) => (
                      <li key={aIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* ─── SKILLS ─── */}
      <FadeIn delay={0.2}>
        <section className="skills">
          <HeadingText
            title="Technologies I work with"
            label="// SKILLS"
          />
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
    </main>
  );
}
