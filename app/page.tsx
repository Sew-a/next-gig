"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ImageItems from "@/components/ImageItems";
import AppList from "@/components/AppList";
import { HeadingText } from "@/components/UI";
import { MAIN_PAGE_TITLE } from "@/constants";

const queryClient = new QueryClient();

export default function Homepage() {
  return (
    <QueryClientProvider client={queryClient}>
      <HeadingText title={MAIN_PAGE_TITLE} />
      <AppList />
      <ImageItems />
    </QueryClientProvider>
  );
}
