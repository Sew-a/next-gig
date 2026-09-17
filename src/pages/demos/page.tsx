import { useEffect, useRef, useState } from "react";
import type { ComponentType } from "react";
import { createRoot, type Root } from "react-dom/client";
import { getInstance, init } from "@module-federation/runtime";
import { AnimatePresence, motion } from "framer-motion";
import Seo from "@/src/components/Seo";
import "./styles.scss";

const FEDERATION_NAME = "main_app";
const REMOTE_NAME = "demos";
const REMOTE_ENTRY =
  import.meta.env.VITE_REMOTE_DEMOS_URL ??
  "http://localhost:3001/remoteEntry.js";
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

type LoadStatus = "loading" | "loaded" | "error";

const CANVAS_TECHNOLOGIES = [
  "React",
  "TypeScript",
  "Vite",
  "Module Federation",
  "Konva.js",
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

function CanvasMiniapp() {
  const [status, setStatus] = useState<LoadStatus>("loading");
  const [error, setError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<Root | null>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const RemoteComponent = await loadRemoteModule(REMOTE_MODULE);
        if (cancelled) return;

        const container = containerRef.current;
        if (!container) throw new Error("Remote container not mounted.");

        rootRef.current = createRoot(container);
        rootRef.current.render(<RemoteComponent />);
        setStatus("loaded");
      } catch (err) {
        if (cancelled) return;
        setStatus("error");
        setError(
          err instanceof Error
            ? err.message
            : "Something went wrong while loading the miniapp.",
        );
      }
    })();

    return () => {
      cancelled = true;
      rootRef.current?.unmount();
      rootRef.current = null;
    };
  }, []);

  return (
    <div className="canvas-miniapp">
      <div className="canvas-miniapp__bar">
        <span className="canvas-miniapp__window-dot canvas-miniapp__window-dot--red" />
        <span className="canvas-miniapp__window-dot canvas-miniapp__window-dot--yellow" />
        <span className="canvas-miniapp__window-dot canvas-miniapp__window-dot--green" />
        <span className="canvas-miniapp__title">// Canvas Miniapp</span>
      </div>

      {status === "loading" && (
        <div className="canvas-miniapp__status">
          <div className="canvas-miniapp__spinner" />
          <span>Loading miniapp...</span>
        </div>
      )}

      {status === "error" && (
        <div className="canvas-miniapp__error">
          <p className="canvas-miniapp__error-title">Failed to load miniapp</p>
          <p className="canvas-miniapp__error-msg">{error}</p>
        </div>
      )}

      <div
        ref={containerRef}
        className="canvas-miniapp__body"
        style={{ display: status === "loaded" ? "block" : "none" }}
      />
    </div>
  );
}

export default function DemosPage() {
  const [miniappOpen, setMiniAppOpen] = useState(false);

  return (
    <main className="demos-page">
      <Seo
        title="Demos — Sevak Avetisyan"
        description="Interactive demos powered by micro frontends."
      />

      <AnimatePresence>
        {!miniappOpen && (
          <motion.section
            className="demos-page__banner"
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <div className="demos-page__banner-wrap">
              <motion.div
                className="demos-page__banner-copy"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <span className="demos-page__label">// Demo projects</span>
                <h1 className="demos-page__title">Canvas Miniapp</h1>
                <p className="demos-page__lead">
                  Draw shapes and text on an infinite canvas rendered with
                  Konva.js — shipped as a separate micro frontend and pulled in
                  at runtime via Webpack Module Federation, so it builds,
                  deploys, and scales independently from the host app.
                  <br />
                  <br />
                  It's still development in progress, but you can try it out.
                </p>

                <div className="demos-page__tech">
                  <span className="demos-page__tech-label">Technologies</span>
                  <div className="demos-page__tech-tags">
                    {CANVAS_TECHNOLOGIES.map((tech) => (
                      <span key={tech} className="demos-page__tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  className="demos-page__open"
                  type="button"
                  onClick={() => setMiniAppOpen(true)}
                >
                  Open Canvas Miniapp
                </button>
              </motion.div>

              <div className="demos-page__canvas-art" aria-hidden="true">
                <div className="canvas-art__window">
                  <div className="canvas-art__bar">
                    <span className="canvas-art__title">canvas.miniapp</span>
                  </div>
                  <div className="canvas-art__body">
                    <div className="canvas-art__toolbar" />
                    <div className="canvas-art__stage">
                      <div className="canvas-art__shape canvas-art__shape--circle" />
                      <div className="canvas-art__shape canvas-art__shape--square" />
                      <div className="canvas-art__shape canvas-art__shape--line" />
                    </div>
                    <div className="canvas-art__panel" />
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {miniappOpen && (
        <motion.section
          className="demos-page__miniapp"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <CanvasMiniapp />
        </motion.section>
      )}
    </main>
  );
}
