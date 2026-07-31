import {
  HeroSection,
  FeaturedWorkSection,
  ExperienceSection,
  SkillsSection,
} from "@/src/components/HomeSections";
import "../styles.scss";

export default function Homepage() {
  return (
    <main className="portfolio-home">
      <HeroSection />
      <FeaturedWorkSection />
      <ExperienceSection />
      <SkillsSection />
    </main>
  );
}
