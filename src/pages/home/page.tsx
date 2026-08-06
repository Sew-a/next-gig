import {
  HeroSection,
  FeaturedWorkSection,
  ExperienceSection,
  SkillsSection,
} from "@/src/components/HomeSections";
import Seo from "@/src/components/Seo";
import "../../styles.scss";

export default function Homepage() {
  return (
    <main className="portfolio-home">
      <Seo
        title="Sevak Avetisyan — Software Engineer"
        description="Portfolio of Sevak Avetisyan — Software Engineer specializing in React, Micro-frontends, and scalable component architectures."
      />
      <HeroSection />
      <FeaturedWorkSection />
      <ExperienceSection />
      <SkillsSection />
    </main>
  );
}
