
export default function LoadingJobsPage() {
  return (
    <div className="jobs-skeleton" aria-busy="true" aria-label="Loading jobs">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="jobs-skeleton__card" />
      ))}
    </div>
  );
}
