"use client";
import { lazy } from "react";

const LazyImageItems = lazy(() => import("@/components/ImageItems"));
// const LazyMusicPlayer = lazy(() => import("@/components/MusicPlayer"));
const BandSections = lazy(() => import("@/components/BandSections"));

export default function NextGigPage() {
  return (
    <>
      <BandSections />
      <LazyImageItems />
      {/* <LazyMusicPlayer /> */}
    </>
  );
}
