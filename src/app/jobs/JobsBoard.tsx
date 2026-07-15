"use client";

import { useState } from "react";
import { Job } from "@/types/job";
import { useJobs } from "@/hooks/useJobs";
import { useDebouncedValue } from "@/hooks/useDebouncedValue";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { JobFilters } from "./JobFilters";
import { JobCard } from "./JobCard";

interface JobsBoardProps {
  initialJobs: Job[];
  initialHasNextPage: boolean;
}

export function JobsBoard({ initialJobs, initialHasNextPage }: JobsBoardProps) {
  const [searchInput, setSearchInput] = useState("");
  const debouncedSearch = useDebouncedValue(searchInput, 400);
  const [remoteOnly, setRemoteOnly] = useState(false);

  const { status, jobs, hasNextPage, fetchNextPage, retry } = useJobs({
    search: debouncedSearch,
    remoteOnly,
    initialJobs,
    initialHasNextPage,
  });

  const sentinelRef = useInfiniteScroll({
    onIntersect: fetchNextPage,
    enabled: status !== "loading" && status !== "loading-more" && hasNextPage,
  });

  return (
    <section className="jobs-board">
      <JobFilters
        search={searchInput}
        onSearchChange={setSearchInput}
        remoteOnly={remoteOnly}
        onRemoteOnlyChange={setRemoteOnly}
      />

      {status === "error" && (
        <div className="jobs-board__error" role="alert">
          <p>Couldn't load jobs right now.</p>
          <button onClick={retry}>Retry</button>
        </div>
      )}

      {status === "loading" ? (
        <p aria-live="polite">Loading jobs…</p>
      ) : jobs.length === 0 ? (
        <p aria-live="polite">No jobs match your filters.</p>
      ) : (
        <div className="jobs-board__grid">
          {jobs.map((job) => (
            <JobCard key={job.slug} job={job} />
          ))}
        </div>
      )}
      <div ref={sentinelRef} style={{ height: 1 }} aria-hidden="true" />

      {status === "loading-more" && <p aria-live="polite">Loading more jobs…</p>}
      {!hasNextPage && jobs.length > 0 && status === "success" && (
        <p className="jobs-board__end">You've reached the end of the list.</p>
      )}
    </section>
  );
}
