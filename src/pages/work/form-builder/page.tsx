import ProjectDetail from "../_components/ProjectDetail/ProjectDetail";
import { PROJECTS } from "@/src/data/portfolioData";
import Seo from "@/src/components/Seo";
import "../../../styles.scss";

const project = PROJECTS.find((p) => p.slug === "form-builder");

export default function FormBuilder() {
  return (
    <div className="pages-spacing">
      <Seo
        title="Collaborative Form Builder — Sevak Avetisyan"
        description="Case study of a full-stack real-time collaborative form builder — Next.js, Express, Socket.io, MongoDB."
      />
      <ProjectDetail slug={project?.slug ?? "form-builder"} />
    </div>
  );
}
