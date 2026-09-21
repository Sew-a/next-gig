import { useEffect, useRef, useState } from "react";
import { createRoot, type Root } from "react-dom/client";
import { loadRemoteModule } from "@/src/pages/demos/federation";
import type { LoadStatus } from "@/src/pages/demos/types";

export function useRemoteComponent(moduleId: string) {
  const [status, setStatus] = useState<LoadStatus>("loading");
  const [error, setError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<Root | null>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const RemoteComponent = await loadRemoteModule(moduleId);
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
  }, [moduleId]);

  return { containerRef, status, error };
}