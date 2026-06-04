import type { Metadata } from "next";
import BandSections from "@/components/BandSections";
import "../styles.scss";

export const metadata: Metadata = {
  title: "Music — Sevak Avetisyan",
  description:
    "Discover my musical journey, including my band and upcoming gigs.",
  openGraph: {
    title: "Music — Sevak Avetisyan",
    description:
      "Discover my musical journey, including my band and upcoming gigs.",
  },
};

export default function NextGigPage() {
  return (
    <div className="pages-spacing">
      <BandSections />
    </div>
  );
}
