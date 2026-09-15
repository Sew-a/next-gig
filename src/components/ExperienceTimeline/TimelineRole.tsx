import type { Role } from "./types";

export default function TimelineRole({ role }: { role: Role }) {
  return (
    <li className="experience-timeline__role">
      <div className="experience-timeline__role-head">
        <h4>{role.title}</h4>
        {role.period && (
          <span className="experience-timeline__role-period">{role.period}</span>
        )}
      </div>
      <ul className="experience-timeline__achievements">
        {role.achievements.map((achievement, i) => (
          <li key={i}>{achievement}</li>
        ))}
      </ul>
    </li>
  );
}