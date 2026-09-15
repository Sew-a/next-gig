import TimelineRole from "./TimelineRole";
import type { Company } from "./types";

type TimelineCompanyProps = {
  company: Company;
  index: number;
};

export default function TimelineCompany({ company, index }: TimelineCompanyProps) {
  return (
    <li className="experience-timeline__company">
      <div className="experience-timeline__rail">
        <span className="experience-timeline__badge" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="experience-timeline__content">
        <div className="experience-timeline__head">
          <h3>{company.company}</h3>
          <div className="experience-timeline__meta">
            {company.location && <span>{company.location}</span>}
            {company.location && <span className="experience-timeline__sep">·</span>}
            <span>{company.period}</span>
          </div>
        </div>
        {company.companySummary && (
          <p className="experience-timeline__summary">{company.companySummary}</p>
        )}
        <ol className="experience-timeline__roles">
          {company.roles.map((role) => (
            <TimelineRole key={role.title} role={role} />
          ))}
        </ol>
      </div>
    </li>
  );
}