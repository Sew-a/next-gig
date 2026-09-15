import { useEffect, useRef, useState } from "react";

const INTERACTION_EVENTS: (keyof WindowEventMap)[] = [
  "scroll",
  "wheel",
  "touchstart",
  "keydown",
];

export default function useRevealWhenReached<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let interacted = false;
    let revealedRef = false;
    let raf = 0;
    let settleTimer = 0;

    const cleanup = () => {
      INTERACTION_EVENTS.forEach((event) =>
        window.removeEventListener(event, markInteracted),
      );
      window.removeEventListener("resize", scheduleCheck);
      window.clearTimeout(settleTimer);
      if (raf) cancelAnimationFrame(raf);
    };

    const check = () => {
      raf = 0;
      if (revealedRef) return;

      const rect = element.getBoundingClientRect();
      const fitsViewport =
        document.documentElement.scrollHeight <= window.innerHeight + 1;
      const reached = rect.top <= window.innerHeight && rect.bottom >= 0;

      if (reached && (interacted || fitsViewport)) {
        revealedRef = true;
        setRevealed(true);
        cleanup();
      }
    };

    const scheduleCheck = () => {
      if (!raf) raf = requestAnimationFrame(check);
    };

    const markInteracted = () => {
      interacted = true;
      scheduleCheck();
    };

    INTERACTION_EVENTS.forEach((event) =>
      window.addEventListener(event, markInteracted, { passive: true }),
    );
    window.addEventListener("resize", scheduleCheck);

    requestAnimationFrame(check);
    settleTimer = window.setTimeout(check, 120);

    return cleanup;
  }, []);

  return { ref, revealed };
}