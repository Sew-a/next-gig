import Grid from "@/components/Grid";
import Testimonials from "@/components/Testimonials";
import { getGalleryImages } from "@/utils/gallery";
import "../styles.scss";

// Metadata for SEO and social sharing
import type { Metadata } from "next";
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
      <Grid images={images} />
      <Testimonials />
    </div>
  );
}
