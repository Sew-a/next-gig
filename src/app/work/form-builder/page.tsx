import type { Metadata } from "next";
import ProjectDetail from "../_components/ProjectDetail/ProjectDetail";
import { PROJECTS } from "@/src/data/portfolioData";
import "../../../styles.scss";

const project = PROJECTS.find((p) => p.slug === "form-builder");

export const metadata: Metadata = {
  title: "Collaborative Form Builder — Sevak Avetisyan",
  description:
    "Case study of a full-stack real-time collaborative form builder — Next.js, Express, Socket.io, MongoDB.",
  openGraph: {
    title: "Collaborative Form Builder — Sevak Avetisyan",
    description: "Real-time collaborative form builder case study.",
  },
};

export default function FormBuilder() {
  return (
    <div className="pages-spacing">
      <ProjectDetail slug={project?.slug ?? "form-builder"} />
    </div>
  );
}
