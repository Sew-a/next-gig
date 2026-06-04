import { useEffect, useRef, useState } from "react";

interface ScrollRevealOptions {
  threshold?: number; // 0–1, how much of element must be visible
  rootMargin?: string; // e.g. '0px 0px -80px 0px' triggers earlier
  once?: boolean; // default true — won't re-trigger after reveal
}

export default function useScrollReveal<T extends HTMLDivElement>(
  options?: ScrollRevealOptions,
) {
  const {
    threshold = 0.45,
    rootMargin = "0px 0px -60px 0px",
    once = false,
  } = options || {};
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}
