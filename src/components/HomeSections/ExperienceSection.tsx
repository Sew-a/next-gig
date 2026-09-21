import { FadeIn } from "@/src/components/UI";
import ExperienceTimeline from "@/src/components/ExperienceTimeline";

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