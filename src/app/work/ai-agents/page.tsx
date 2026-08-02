import type { Metadata } from "next";
import ProjectDetail from "../_components/ProjectDetail/ProjectDetail";
import { PROJECTS } from "@/src/data/portfolioData";
import "../../../styles.scss";

const project = PROJECTS.find((p) => p.slug === "ai-agents");

export const metadata: Metadata = {
  title: "AI Agents & Prompt Engineering Hub — Sevak Avetisyan",
  description:
    "Case study of an AI knowledge platform — Next.js 16, React Compiler, Cloudflare, 24-prompt library, agent workflows.",
  openGraph: {
    title: "AI Agents & Prompt Engineering Hub — Sevak Avetisyan",
    description: "AI agents and prompt engineering education platform case study.",
  },
};

export default function AiAgents() {
  return (
    <div className="pages-spacing">
      <ProjectDetail slug={project?.slug ?? "ai-agents"} />
    </div>
  );
}
