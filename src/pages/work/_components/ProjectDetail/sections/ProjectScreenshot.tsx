import Image from "@/src/components/Image";
import Parallax from "@/src/components/Parallax";
import type { Project } from "@/src/data/portfolioData";

interface ProjectScreenshotProps {
  project: Project;
}

export default function ProjectScreenshot({ project }: ProjectScreenshotProps) {
  return (
    <div className="project-detail__shot-wrap">
      <Parallax speed={70} className="project-detail__shot-parallax">
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={1600}
          height={900}
          className="project-detail__shot"
        />
      </Parallax>
    </div>
  );
}