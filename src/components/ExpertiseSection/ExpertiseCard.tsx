import type { ExpertiseItem } from "./types";

interface ExpertiseCardProps {
  expertise: ExpertiseItem;
}

export default function ExpertiseCard({ expertise }: ExpertiseCardProps) {
  return (
    <div className={`expertise-card expertise-card--${expertise.variant}`}>
      <div className="expertise-card__body">
        <div className="expertise-icon">
          <expertise.icon size={40} strokeWidth={1.5} />
        </div>
        <h3>{expertise.title}</h3>
        <p className="expertise-desc">{expertise.desc}</p>
        <ul className="expertise-emphasis">
          {expertise.emphasis.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="expertise-card__skills">
        <span className="expertise-skills-label">Skills & Tools</span>
        <div className="expertise-skills-list">
          {expertise.skills.map((skill) => (
            <span key={skill} className="expertise-skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}