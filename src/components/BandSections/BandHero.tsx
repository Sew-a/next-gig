"use client";
import { motion } from "framer-motion";

export function BandHero() {
  return (
    <section className="band-hero">
      <div className="band-hero__overlay" />
      <nav className="band-hero__nav">
        <div className="logo">The Band</div>
      </nav>

      <div className="band-hero__center">
        <motion.h1
          className="brush-text"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          KICKDOWN?
        </motion.h1>
        <motion.div
          className="sub-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Is Coming
        </motion.div>
      </div>
    </section>
  );
}
