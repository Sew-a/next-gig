"use client";
import { lazy } from "react";

const LazyImageItems = lazy(() => import("@/components/ImageItems"));
const LazyMusicPlayer = lazy(() => import("@/components/MusicPlayer"));

export default function NextGigPage() {
  return (
    <>
      <LazyMusicPlayer />
      <LazyImageItems />
    </>
  );
}
