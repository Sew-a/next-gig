import { PROJECTS } from "@/src/data/portfolioData";
import ProjectCard from "@/src/components/ProjectCard";
import { HeadingText } from "@/src/components/UI";
import "./styles.scss";

export default function FeaturedProjects() {
  return (
    <section className="page-projects">
      <div className="page-projects__head">
        <HeadingText title="Work / Projects" label="// CASE STUDIES" />
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
