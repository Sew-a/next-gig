"use client";
import { motion } from "framer-motion";
import { FolderOpen, Code2 } from "lucide-react";
import Image from "@/src/components/Image";
import type { FeaturedItem } from "@/src/data/portfolioData";
import "./styles.scss";

const reveal = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const },
};

export default function GridCard({ item }: { item: FeaturedItem }) {
  const inner = (
    <>
      <div className="window">
        <div className="window__bar">
          <span className="window__dot window__dot--red" />
          <span className="window__dot window__dot--yellow" />
          <span className="window__dot window__dot--green" />
          <span className="window__title">
            <Code2 size={12} /> {item.slug}.dev
          </span>
        </div>
        <div className="window__body">
          <Image
            src={item.image}
            alt={item.title}
            width={720}
            height={450}
            className="window__shot"
          />
          <div className="window__glow" />
        </div>
      </div>
      <div className="grid-card__caption">
        <h3>{item.title}</h3>
        <p>{item.tagline}</p>
      </div>
    </>
  );

  const style = { "--project-accent": item.accent } as React.CSSProperties;

  if (item.href) {
    return (
      <motion.div
        className="grid-card"
        style={style}
        {...reveal}
      >
        {inner}
      </motion.div>
    );
  }

  return (
    <motion.div className="grid-card grid-card--soon" style={style} {...reveal}>
      {inner}
    </motion.div>
  );
}
