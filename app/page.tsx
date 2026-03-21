"use client";
import { lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HeadingText } from "@/components/UI";

const queryClient = new QueryClient();

const LazyImageItems = lazy(() => import("@/components/ImageItems"));
const LazyMusicPlayer = lazy(() => import("@/components/MusicPlayer"));

export default function Homepage() {
  return (
    <QueryClientProvider client={queryClient}>
      <HeadingText title="New Noise" />
      <LazyMusicPlayer />
      <LazyImageItems />
    </QueryClientProvider>
  );
}
