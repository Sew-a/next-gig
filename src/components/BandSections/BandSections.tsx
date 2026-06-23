"use client";
import { motion } from "framer-motion";
import { Music, Users } from "lucide-react";
import { BAND_MEMBERS, BAND_TRACKS } from "@/src/data/bandData";
import { useImagePopup } from "@/src/hooks/useImagePopup";
import "./styles.scss";

const BAND_IMAGES = [
  { src: "https://res.cloudinary.com/dlggumsot/image/upload/v1782203153/5316837542000794535_s68prj.webp", title: "Studio Session" },
  { src: "https://res.cloudinary.com/dlggumsot/image/upload/v1782203153/5316837542000794556_qcbnjo.webp", title: "Live Energy" },
  { src: "https://res.cloudinary.com/dlggumsot/image/upload/v1782203152/5316837542000794501_lapxws.webp", title: "Behind the Scenes" },
  { src: "https://res.cloudinary.com/dlggumsot/image/upload/v1782203152/5316837542000794532_rercgo.webp", title: "Band Rehearsal" },
  { src: "https://res.cloudinary.com/dlggumsot/image/upload/v1782203152/5316837542000794512_a1pgdi.webp", title: "Night Show" },
  { src: "https://res.cloudinary.com/dlggumsot/image/upload/v1782203152/5296787088474840984_skkoad.webp", title: "The Crowd" },
];

const BandSections = () => {
  const { openPopup, PopupPreview } = useImagePopup();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
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

      <section className="band-gallery">
        <motion.div
          className="gallery-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {BAND_IMAGES.map((img, index) => (
            <motion.div
              key={index}
              className={`gallery-item gallery-item--${index % 2 === 0 ? 'cyan' : 'red'}`}
              variants={itemVariants}
              onClick={() => openPopup(img.src, img.title)}
            >
              <img src={img.src} alt={img.title} />
              <div className="gallery-overlay">
                <span>{img.title}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

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
                    {/* <div className="song-play"><Play size={12} fill="currentColor" /></div> */}
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
      <PopupPreview />
    </div>
  );
};

export default BandSections;
