import type { Metadata } from "next";
import AiShowcase from "@/src/components/AiShowcase/AiShowcase";
import "../../styles.scss";

export const metadata: Metadata = {
  title: "Agentic AI — Sevak Avetisyan",
  description: "AI Agents & Prompt Engineering educational platform showcase.",
  openGraph: {
    title: "Agentic AI — Sevak Avetisyan",
    description: "AI Agents & Prompt Engineering educational platform showcase.",
  },
};

const page = () => {
  return (
    <div className="pages-spacing">
      <AiShowcase />
    </div>
  );
};

export default page;
