import { motion } from "framer-motion";
import {
  ClipboardList,
  Bot,
  ArrowLeft,
  ArrowUpRight,
  Layers,
  Boxes,
  CheckCircle2,
  Rocket,
  Wrench,
  Globe,
  FolderOpen,
} from "lucide-react";
import { Link } from "react-router-dom";
import { PROJECTS } from "@/src/data/portfolioData";
import { paths } from "@/src/routes/mainRoutes";
import Image from "@/src/components/Image";
import Parallax from "@/src/components/Parallax";
import { HeadingText, ActionButton } from "@/src/components/UI";
import { ACTION_BUTTON_TYPE } from "@/src/components/types";
import "./styles.scss";

const ICONS: Record<string, typeof ClipboardList> = {
  ClipboardList,
  Bot,
};

const FEATURE_ICONS = [
  Layers,
  Boxes,
  Rocket,
  Wrench,
  Globe,
  FolderOpen,
  Boxes,
  Rocket,
];

interface ProjectDetailProps {
  slug: string;
}

export default function ProjectDetail({ slug }: ProjectDetailProps) {
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="project-detail project-detail--missing">
        <HeadingText title="Project not found" label="// 404" />
        <ActionButton
          title="← Back to work"
          link={paths.work}
          buttonType={ACTION_BUTTON_TYPE.GHOST}
        />
      </section>
    );
  }

  const Icon = ICONS[project.icon] || FolderOpen;

  return (
    <section
      className="project-detail"
      style={{ "--project-accent": project.accent } as React.CSSProperties}
    >
      <div className="project-detail__back">
        <Link to={paths.work}>
          <ArrowLeft size={16} /> All work
        </Link>
      </div>

      <motion.header
        className="project-detail__hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <div className="project-detail__icon" aria-hidden="true">
          <Icon size={34} strokeWidth={1.5} />
        </div>
        <div className="project-detail__meta">
          <span>{project.role}</span>
          <span>{project.year}</span>
          <span>{project.status}</span>
        </div>
        <h1 className="project-detail__title">{project.title}</h1>
        <p className="project-detail__tagline">{project.tagline}</p>
        <p className="project-detail__summary">{project.summary}</p>

        <div className="project-detail__tech">
          {project.techStack.map((tech) => (
            <span key={tech} className="project-detail__chip">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-detail__links">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="project-detail__link project-detail__link--primary"
            >
              Visit live site <ArrowUpRight size={16} />
            </a>
          )}
          <a
            href={project.links.repo}
            target="_blank"
            rel="noreferrer"
            className="project-detail__link"
          >
            View source code <ArrowUpRight size={16} />
          </a>
        </div>
      </motion.header>

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

      <div className="project-detail__overview">
        <HeadingText title="Overview" label="// THE PROJECT" />
        <motion.p
          className="project-detail__desc"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          {project.description}
        </motion.p>
      </div>

      <div className="project-detail__architecture">
        <HeadingText title="Architecture & decisions" label="// HOW IT WORKS" />
        <div className="project-detail__arch-grid">
          {project.architecture.map((item, index) => (
            <motion.div
              key={item.title}
              className="project-detail__arch-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <span className="project-detail__arch-num">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="project-detail__features">
        <HeadingText title="Features" label="// CAPABILITIES" />
        <div className="project-detail__feature-grid">
          {project.features.map((feature, index) => {
            const FeatureIcon = FEATURE_ICONS[index % FEATURE_ICONS.length];
            return (
              <motion.div
                key={feature.title}
                className="project-detail__feature-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              >
                <div className="project-detail__feature-icon">
                  <FeatureIcon size={20} strokeWidth={1.6} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="project-detail__highlights">
        <HeadingText title="Highlights" label="// KEY POINTS" />
        <ul className="project-detail__highlight-list">
          {project.highlights.map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
            >
              <CheckCircle2 size={17} className="project-detail__check" />
              {item}
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="project-detail__cta">
        <p>Like what you see? Let&apos;s build something together.</p>
        <ActionButton
          title="Get in touch →"
          link={paths.contact}
          buttonType={ACTION_BUTTON_TYPE.PRIMARY}
        />
        <ActionButton
          title="← Back to work"
          link={paths.work}
          buttonType={ACTION_BUTTON_TYPE.GHOST}
        />
      </div>
    </section>
  );
}
