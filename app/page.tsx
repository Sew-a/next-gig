import {
  HERO_DATA,
  EXPERIENCE,
  SKILL_CATEGORIES,
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
            <div className="hero__card">
            </div>
            <div className="hero__about">
              <HeadingText title="ABOUT ME" label="// RECOGNITION" />
              <p>{HERO_DATA.aboutText}</p>
              <ActionButton
                title="LEARN MORE →"
                link="#experience"
                buttonType={ACTION_BUTTON_TYPE.GHOST}
                className="learn-more-btn"
              />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ─── EXPERIENCE ─── */}
      <FadeIn delay={0.2}>
        <section className="experience" id="experience">
          <HeadingText
            title="Companies I've worked with"
            label="// WORK EXPERIENCE"
          />

          <div className="timeline">
            {EXPERIENCE.map((exp, index) => (
              <div key={index} className="timeline__item">
                <div className="timeline__header">
                  <div>
                    <h3 className="timeline__company">{exp.company}</h3>
                    <span className="timeline__role">{exp.role}</span>
                  </div>
                  <span className="timeline__period">{exp.period}</span>
                </div>
                <ul className="timeline__achievements">
                  {exp.achievements.map((achievement, aIndex) => (
                    <li key={aIndex}>{achievement}</li>
                  ))}
                </ul>
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
