import { useEffect, useRef, useState } from "react";

type IntersectionProps = IntersectionObserverInit;

export function useIntersectionObserver<T extends Element>(
  options: IntersectionProps,
) {
  const elementRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = elementRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return { elementRef, isVisible } as const;
}
