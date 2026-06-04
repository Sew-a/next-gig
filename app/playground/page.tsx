import type { Metadata } from "next";
import PlaygroundPage from "@/components/Playground/Playground";

export const metadata: Metadata = {
  title: "Playground — Sevak Avetisyan",
  description: "Experiment with interactive elements and creative coding.",
  openGraph: {
    title: "Playground — Sevak Avetisyan",
    description: "Experiment with interactive elements and creative coding.",
  },
};

export default function Playground() {
  return <PlaygroundPage />;
}
