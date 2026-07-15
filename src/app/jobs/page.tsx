import { getJobsPage } from "@/lib/api/jobs";
import "./styles.scss";
import { SavedJobsProvider } from "@/contexts/SavedJobsContext";
import { JobsBoard } from "./JobsBoard";

export const revalidate = 300;

export default async function JobsPage() {
  const initial = await getJobsPage({ page: 1 });

  return (
    <SavedJobsProvider>
      <JobsBoard initialJobs={initial.jobs} initialHasNextPage={initial.hasNextPage} />
    </SavedJobsProvider>
  );
}
