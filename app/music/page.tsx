import type { Metadata } from "next";

// const LazyImageItems = lazy(() => import("@/components/ImageItems"));
// const LazyMusicPlayer = lazy(() => import("@/components/MusicPlayer"));
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
      {/* <LazyImageItems /> */}
      {/* <LazyMusicPlayer /> */}
    </div>
  );
}
