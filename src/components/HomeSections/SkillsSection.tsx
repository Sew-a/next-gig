import { HeadingText, FadeIn } from "@/src/components/UI";
import { TECH_ICONS } from "./constants";

export function SkillsSection() {
  return (
    <FadeIn delay={0.2}>
      <section className="skills">
        <HeadingText title="Technologies I work with" label="// SKILLS" />
        <div className="skills__icon-grid">
          {TECH_ICONS.map(({ name, Icon }) => (
            <span
              key={name}
              className="tech-icon-cell"
              title={name}
              role="img"
              aria-label={name}
            >
              <Icon size={36} />
            </span>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}