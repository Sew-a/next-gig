"use client";
import { HeadingText } from "../UI";
import { EXPERTISE_DATA } from "./constants";
import "./styles.scss";

const ExpertiseSection = () => {
  return (
    <div className="grid-wrapper">
      <div className="expertise-section">
        <HeadingText title="My Expertise" label="// SERVICES" />
        <div className="expertise-grid">
          {EXPERTISE_DATA.map((expertise, index) => (
            <div
              className={`expertise-card expertise-card--${index === 0 ? "frontend" : index === 1 ? "gamedev" : "ai"}`}
              key={index}
            >
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;
