import type { Metadata } from "next";
import ProjectsHero from "@/src/components/ProjectsPage/ProjectsHero";
import FeaturedProjects from "@/src/components/ProjectsPage/FeaturedProjects";
import Grid from "@/src/components/Grid";
import Testimonials from "@/src/components/Testimonials";
import ExpertiseSection from "@/src/components/ExpertiseSection/ExpertiseSection";
import { getGalleryImages } from "@/src/utils/gallery";
import "../../styles.scss";

export const metadata: Metadata = {
  title: "Work — Sevak Avetisyan",
  description:
    "Selected work of Sevak Avetisyan — collaborative form builder, AI agents platform, micro-frontends, and more.",
  openGraph: {
    title: "Work — Sevak Avetisyan",
    description:
      "Selected work of Sevak Avetisyan — collaborative form builder, AI agents platform, and more.",
  },
};

export default function Work() {
  const images = getGalleryImages();

  return (
    <div className="pages-spacing">
      <ProjectsHero />
      <FeaturedProjects />
      <ExpertiseSection />
      <Grid images={images} />
      <Testimonials />
    </div>
  );
}
