"use client";
import { PROJECTS } from "@/src/data/portfolioData";
import ProjectCard from "@/src/components/ProjectCard";
import { HeadingText } from "@/src/components/UI";
import "./styles.scss";

export default function FeaturedProjects() {
  return (
    <section className="page-projects">
      <div className="page-projects__head">
        <HeadingText title="Selected Work" label="// CASE STUDIES" />
        <p className="page-projects__intro">
          Deep-dives into the systems I architected — architecture, the
          reasoning behind key decisions, and what each one shipped.
        </p>
      </div>
      <div className="page-projects__list">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            reverse={index % 2 === 1}
            detailed
          />
        ))}
      </div>
    </section>
  );
}
