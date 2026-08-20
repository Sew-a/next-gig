import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  /** pixel distance travelled while the element scrolls out of view */
  speed?: number;
}

export default function Parallax({
  children,
  className,
  speed = 40,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, speed]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
