"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Music, Users, Info, Play, ChevronRight } from 'lucide-react';
import { BAND_MEMBERS, BAND_TRACKS } from '@/data/bandData';
import "./styles.scss";

const BandSections = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="band-sections">

      {/* ─── HERO SECTION (UI DESIGN INSPIRED) ─── */}
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
            Afterparty
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
        <div className="scroll-indicator">
          <div className="scroll-line" />
          <div className="scroll-dot" />
        </div>
      </section>

      <div className="band-content-wrapper">

        {/* ─── ABOUT & INFO GRID (Beautiful Blocks) ─── */}
        <section className="band-grid-section">
          <motion.div
            className="grid-container"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Block 1: The Bio */}
            <motion.div className="grid-block grid-block--large info-block" variants={itemVariants}>
              <div className="block-icon"><Info size={24} /></div>
              <h2>THE LEGACY</h2>
              <p>
                Founded in the underground scenes of 1998, we've carved a path through alternative rock history.
                Our sound is a raw blend of post-punk energy and cinematic soundscapes that tell the stories of the night.
              </p>
              <div className="block-footer">EST. 1998 / NYC</div>
            </motion.div>

            {/* Block 2: The Vision */}
            <motion.div className="grid-block vision-block" variants={itemVariants}>
              <h3>THE VISION</h3>
              <p>Creating music that feels like a shared secret between us and the listener.</p>
            </motion.div>

            {/* Block 3: Members List (One-line) */}
            <motion.div className="grid-block grid-block--wide members-block" variants={itemVariants}>
              <div className="block-header">
                <Users size={20} />
                <span>MEET THE LINEUP</span>
              </div>
              <div className="members-row">
                {BAND_MEMBERS.map((member, i) => (
                  <div key={i} className="member-item">
                    <span className="name">{member.name}</span>
                    <span className="separator">/</span>
                    <span className="role">{member.role}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Block 4: Songs & Tracks */}
            <motion.div className="grid-block grid-block--tall tracks-block" variants={itemVariants}>
              <div className="block-header">
                <Music size={20} />
                <span>ALBUM TRACKS</span>
              </div>
              <div className="song-track-list">
                {BAND_TRACKS.map((track, i) => (
                  <div key={i} className="song-item">
                    <div className="song-play"><Play size={12} fill="currentColor" /></div>
                    <span className="song-name">{track.name}</span>
                    <span className="song-duration">{track.duration}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Block 5: Quote/Stat */}
            <motion.div className="grid-block quote-block" variants={itemVariants}>
              <div className="quote-mark">"</div>
              <p>We don't just play music, we curate an atmosphere where time stands still.</p>
            </motion.div>

          </motion.div>
        </section>

      </div>
    </div>
  );
};

export default BandSections;