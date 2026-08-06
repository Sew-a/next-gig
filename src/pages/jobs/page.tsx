import "./styles.scss";
import { SavedJobsProvider } from "@/contexts/SavedJobsContext";
import { JobsBoard } from "./JobsBoard";
import Seo from "@/src/components/Seo";

export default function JobsPage() {
  return (
    <>
      <Seo
        title="Remote Jobs — Sevak Avetisyan"
        description="Browse remote software engineering jobs aggregated from multiple job boards."
      />
      <SavedJobsProvider>
        <JobsBoard />
      </SavedJobsProvider>
    </>
  );
}
