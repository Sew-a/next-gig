import { EXPERIENCE } from "@/src/data/portfolioData";
import TimelineCompany from "./TimelineCompany";
import "./styles.scss";

export default function ExperienceTimeline() {
  return (
    <ol className="experience-timeline">
      {EXPERIENCE.map((company, index) => (
        <TimelineCompany key={company.company} company={company} index={index} />
      ))}
    </ol>
  );
}