"use client";
import { motion } from "framer-motion";
import { Music, Users } from "lucide-react";
import { BAND_MEMBERS, BAND_TRACKS } from "@/src/data/bandData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export function BandGrid() {
  return (
    <div className="band-content-wrapper">
      <section className="band-grid-section">
        <motion.div
          className="grid-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="grid-block grid-block--large info-block"
            variants={itemVariants}
          >
            <h2>THE BAND</h2>
            <p>
              Founded by 2 Vi and Sev, firstly formed as a cover band, then we
              started writing our own songs. Our sound is a raw blend of
              post-punk energy and cinematic soundscapes that tell the stories
              of our lives.
              <br />
              Later We found two more members, They were from other band so we
              kind of stole them.
              <br />
              We are Kickdown, and we are here to stay.
            </p>
            <div className="block-footer">EST. 2025 / YEREVAN</div>
          </motion.div>
          <motion.div
            className="grid-block grid-block--wide members-block"
            variants={itemVariants}
          >
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
          <motion.div
            className="grid-block grid-block--tall tracks-block"
            variants={itemVariants}
          >
            <div className="block-header">
              <Music size={20} />
              <span>ALBUM TRACKS</span>
            </div>
            <div className="song-track-list">
              {BAND_TRACKS.map((track, i) => (
                <div key={i} className="song-item">
                  <span className="song-name">{track.name}</span>
                  <span className="song-duration">{track.duration}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="grid-block quote-block"
            variants={itemVariants}
          >
            <p>
              We play music that feels right to us, and were not sure about
              our band name yet
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
