"use client";
import { lazy } from "react";

// const LazyImageItems = lazy(() => import("@/components/ImageItems"));
// const LazyMusicPlayer = lazy(() => import("@/components/MusicPlayer"));
const BandSections = lazy(() => import("@/components/BandSections"));
import "../styles.scss";

export default function NextGigPage() {
  return (
    <div className="pages-spacing">
      <BandSections />
      {/* <LazyImageItems /> */}
      {/* <LazyMusicPlayer /> */}
    </div>
  );
}
