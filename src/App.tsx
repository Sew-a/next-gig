import { lazy, Suspense } from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import LayoutWrapper from "@/src/components/LayoutWrapper";

const Home = lazy(() => import("@/src/pages/home/page"));
const Work = lazy(() => import("@/src/pages/work/page"));
const FormBuilder = lazy(() => import("@/src/pages/work/form-builder/page"));
const AiAgents = lazy(() => import("@/src/pages/work/ai-agents/page"));
const Contact = lazy(() => import("@/src/pages/contact/page"));
const Resume = lazy(() => import("@/src/pages/resume/page"));
const Playground = lazy(() => import("@/src/pages/playground/page"));
const JobsPage = lazy(() => import("@/src/pages/jobs/page"));
const NotFound = lazy(() => import("@/src/pages/NotFound"));

function OldProjectRedirect() {
  const { slug } = useParams();
  return <Navigate to={`/work/${slug}`} replace />;
}

export default function App() {
  return (
    <LayoutWrapper>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/form-builder" element={<FormBuilder />} />
          <Route path="/work/ai-agents" element={<AiAgents />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/projects" element={<Navigate to="/work" replace />} />
          <Route path="/projects/:slug" element={<OldProjectRedirect />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </LayoutWrapper>
  );
}
