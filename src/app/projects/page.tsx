import Grid from "@/src/components/Grid";
import Testimonials from "@/src/components/Testimonials";
import { getGalleryImages } from "@/src/utils/gallery";
import "../../styles.scss";

// Metadata for SEO and social sharing
import type { Metadata } from "next";
import ExpertiseSection from "@/components/ExpertiseSection/ExpertiseSection";
export const metadata: Metadata = {
  title: "Work Gallery — Sevak Avetisyan",
  description: "Explore my portfolio of frontend engineering projects.",
  openGraph: {
    title: "Work Gallery — Sevak Avetisyan",
    description: "Explore my portfolio of frontend engineering projects.",
  },
};

export default function Work() {
  const images = getGalleryImages();

  return (
    <div className="pages-spacing">
      <ExpertiseSection />
      <Grid images={images} />
      <Testimonials />
    </div>
  );
}
