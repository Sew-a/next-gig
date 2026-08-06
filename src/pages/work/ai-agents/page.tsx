import ProjectDetail from "../_components/ProjectDetail/ProjectDetail";
import { PROJECTS } from "@/src/data/portfolioData";
import Seo from "@/src/components/Seo";
import "../../../styles.scss";

const project = PROJECTS.find((p) => p.slug === "ai-agents");

export default function AiAgents() {
  return (
    <div className="pages-spacing">
      <Seo
        title="AI Agents & Prompt Engineering Hub — Sevak Avetisyan"
        description="Case study of an AI knowledge platform — Next.js 16, React Compiler, Cloudflare, 24-prompt library, agent workflows."
      />
      <ProjectDetail slug={project?.slug ?? "ai-agents"} />
    </div>
  );
}
