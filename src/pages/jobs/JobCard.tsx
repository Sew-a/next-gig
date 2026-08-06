"use client";
import { Job } from "@/types/job";
import { useSavedJobs } from "@/contexts/SavedJobsContext";

export function JobCard({ job }: { job: Job }) {
  const { isSaved, toggleJob } = useSavedJobs();
  const saved = isSaved(job.slug);

  return (
    <article className="job-card">
      <header className="job-card__header">
        <h3>{job.title}</h3>
        <button
          onClick={() => toggleJob(job)}
          aria-pressed={saved}
          aria-label={saved ? "Remove from saved jobs" : "Save this job"}
          className="job-card__save"
        >
          {saved ? "★ Saved" : "☆ Save"}
        </button>
      </header>
      <p className="job-card__company">
        {job.company_name} — {job.location}
        {job.remote && <span className="job-card__remote-badge"> · Remote</span>}
      </p>
      {job.tags.length > 0 && (
        <ul className="job-card__tags">
          {job.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      )}
      <a href={job.url} target="_blank" rel="noopener noreferrer">
        View listing →
      </a>
    </article>
  );
}
