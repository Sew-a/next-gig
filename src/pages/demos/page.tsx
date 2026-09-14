import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Seo from "@/src/components/Seo";
import "./styles.scss";

interface DemoProject {
  id: string;
  title: string;
  description: string;
  remoteEntry: string;
  remoteModule: string;
  accent?: string;
}

const DEMOS: DemoProject[] = [
  {
    id: "micro-frontend",
    title: "Micro Frontend Demo",
    description:
      "A standalone micro frontend app loaded via Module Federation. Click to launch the remote app.",
    remoteEntry: "http://localhost:3001/remoteEntry.js",
    remoteModule: "demos/DemosApp",
    accent: "#00f0ff",
  },
];

function RemoteLoader({ project }: { project: DemoProject }) {
  const [status, setStatus] = useState<"idle" | "loading" | "loaded" | "error">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);

  const loadRemote = useCallback(async () => {
    if (status === "loaded" || status === "loading") return;
    setStatus("loading");
    setError(null);

    try {
      // Pre-warm the remote entry so the actual component load is instant
      await import(
        /* webpackIgnore: true */ /* @vite-ignore */ project.remoteEntry
      );
      const RemoteComponent = (
        await import(
          /* webpackIgnore: true */ /* @vite-ignore */ project.remoteModule
        )
      ).default;
      // Render into the container
      const container = document.getElementById(
        `remote-container-${project.id}`,
      );
      if (!container) throw new Error("Remote container not found");
      container.innerHTML = "";
      const root = document.createElement("div");
      container.appendChild(root);
      // We use a simple ReactDOM render here to avoid double Router context.
      // For a real app, expose a React component and render it with createRoot.
      const { createRoot } = await import("react-dom/client");
      createRoot(root).render(<RemoteComponent />);
      setStatus("loaded");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong while loading the demo.",
      );
    }
  }, [project, status]);

  return (
    <div
      className="demo-card"
      style={{ "--project-accent": project.accent } as React.CSSProperties}
    >
      <div className="demo-card__header">
        <h3 className="demo-card__title">{project.title}</h3>
      </div>
      <p className="demo-card__desc">{project.description}</p>

      {status === "idle" && (
        <button
          className="demo-card__launch"
          onClick={loadRemote}
          type="button"
        >
          Launch Demo
        </button>
      )}

      {status === "loading" && (
        <div className="demo-card__status">
          <div className="demo-card__spinner" />
          <span>Loading…</span>
        </div>
      )}

      {status === "error" && (
        <div className="demo-card__error">
          <p className="demo-card__error-title">Failed to load demo</p>
          <p className="demo-card__error-msg">{error}</p>
          <button
            className="demo-card__retry"
            onClick={() => {
              setStatus("idle");
              setError(null);
            }}
            type="button"
          >
            Retry
          </button>
        </div>
      )}

      <div
        id={`remote-container-${project.id}`}
        className="demo-card__remote"
        style={{ display: status === "loaded" ? "block" : "none" }}
      />
    </div>
  );
}

export default function DemosPage() {
  return (
    <main className="demos-page">
      <Seo
        title="Demos — Sevak Avetisyan"
        description="Interactive demos powered by micro frontends."
      />

      <section className="demos-page__banner">
        <div className="demos-page__banner-wrap">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <span className="demos-page__label">// Demo projects</span>
            <h1 className="demos-page__title">
              My Demos
            </h1>
            <p className="demos-page__lead">
              Interactive experiments and micro frontend showcases.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="demos-page__section">
        <div className="demos-page__grid">
          {DEMOS.map((project) => (
            <RemoteLoader key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
