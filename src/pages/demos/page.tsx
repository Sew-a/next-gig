import { memo, useCallback, useEffect, useRef, useState } from "react";
import type { ComponentType, CSSProperties } from "react";
import { createRoot, type Root } from "react-dom/client";
import { getInstance, init } from "@module-federation/runtime";
import { motion } from "framer-motion";
import Seo from "@/src/components/Seo";
import "./styles.scss";

const FEDERATION_NAME = "main_app";
const REMOTE_NAME = "demos";
const REMOTE_ENTRY =
  import.meta.env.VITE_REMOTE_DEMOS_URL ?? "http://localhost:3001/remoteEntry.js";
const REMOTE_MODULE = "demos/DemosApp";

const FEDERATION_OPTIONS = {
  name: FEDERATION_NAME,
  remotes: [
    {
      name: REMOTE_NAME,
      type: "module" as const,
      entry: REMOTE_ENTRY,
    },
  ],
};

type LoadStatus = "idle" | "loading" | "loaded" | "error";

interface DemoProject {
  id: string;
  title: string;
  description: string;
  accent?: string;
}

const DEMOS: DemoProject[] = [
  {
    id: "micro-frontend",
    title: "Micro Frontend Demo",
    description:
      "A standalone micro frontend app loaded via Module Federation. Click to launch the remote app.",
    accent: "#00f0ff",
  },
];

function getRuntime() {
  return (
    getInstance((instance) => instance.options.name === FEDERATION_NAME) ??
    init(FEDERATION_OPTIONS)
  );
}

// Reuse getRuntime() so the instance is created with the expected
// remote/shared options exactly once.
let demosRuntime: ReturnType<typeof getRuntime> | null = null;
function getDemosRuntime() {
  if (!demosRuntime) {
    demosRuntime = getRuntime();
  }
  return demosRuntime;
}

async function loadRemoteModule(id: string) {
  const instance = getDemosRuntime();
  const mod = await instance.loadRemote<{ default: ComponentType }>(id);
  if (!mod?.default) {
    throw new Error(`Remote module '${id}' has no default export.`);
  }
  return mod.default;
}

function RemoteLoader({ project }: { project: DemoProject }) {
  const [status, setStatus] = useState<LoadStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<Root | null>(null);
  const unmountedRef = useRef(false);

  useEffect(() => {
    unmountedRef.current = false;
    return () => {
      unmountedRef.current = true;
      rootRef.current?.unmount();
      rootRef.current = null;
    };
  }, []);

  const launch = useCallback(async () => {
    if (status === "loaded" || status === "loading") return;
    setStatus("loading");
    setError(null);

    try {
      const RemoteComponent = await loadRemoteModule(REMOTE_MODULE);
      if (unmountedRef.current) return;

      const container = containerRef.current;
      if (!container) throw new Error("Remote container not mounted.");

      container.innerHTML = "";

      if (!rootRef.current) {
        rootRef.current = createRoot(container);
      }
      rootRef.current.render(<RemoteComponent />);
      setStatus("loaded");
    } catch (err) {
      if (unmountedRef.current) return;
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong while loading the demo.",
      );
    }
  }, [status]);

  return (
    <div
      className="demo-card"
      style={
        {
          "--project-accent": project.accent,
        } as CSSProperties
      }
    >
      <div className="demo-card__header">
        <h3 className="demo-card__title">{project.title}</h3>
      </div>
      <p className="demo-card__desc">{project.description}</p>

      {status === "idle" && (
        <button className="demo-card__launch" onClick={launch} type="button">
          Launch Demo
        </button>
      )}

      {status === "loading" && (
        <div className="demo-card__status">
          <div className="demo-card__spinner" />
          <span>Loading...</span>
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
        ref={containerRef}
        className="demo-card__remote"
        style={{ display: status === "loaded" ? "block" : "none" }}
      />
    </div>
  );
}

const MemoizedRemoteLoader = memo(RemoteLoader);

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
            <h1 className="demos-page__title">My Demos</h1>
            <p className="demos-page__lead">
              Interactive experiments and micro frontend showcases.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="demos-page__section">
        <div className="demos-page__grid">
          {DEMOS.map((project) => (
            <MemoizedRemoteLoader key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
