import {
  HeroSection,
  AiWorkSection,
  ExperienceSection,
  SkillsSection,
  ProjectsSection,
} from "@/src/components/HomeSections";
import "../styles.scss";

export default function Homepage() {
  return (
    <main className="portfolio-home">
      <HeroSection />
      <AiWorkSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
    </main>
  );
}
