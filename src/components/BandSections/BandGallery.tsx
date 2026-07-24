"use client";
import { motion } from "framer-motion";
import { useImagePopup } from "@/src/hooks/useImagePopup";

const BAND_IMAGES = [
  { src: "https://res.cloudinary.com/dlggumsot/image/upload/v1782203153/5316837542000794535_s68prj.webp", title: "Studio Session" },
  { src: "https://res.cloudinary.com/dlggumsot/image/upload/v1782203153/5316837542000794556_qcbnjo.webp", title: "Live Energy" },
  { src: "https://res.cloudinary.com/dlggumsot/image/upload/v1782203152/5316837542000794501_lapxws.webp", title: "Behind the Scenes" },
  { src: "https://res.cloudinary.com/dlggumsot/image/upload/v1782203152/5316837542000794532_rercgo.webp", title: "Band Rehearsal" },
  { src: "https://res.cloudinary.com/dlggumsot/image/upload/v1782203152/5316837542000794512_a1pgdi.webp", title: "Night Show" },
  { src: "https://res.cloudinary.com/dlggumsot/image/upload/v1782203152/5296787088474840984_skkoad.webp", title: "The Crowd" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export function BandGallery() {
  const { openPopup, PopupPreview } = useImagePopup();

  return (
    <>
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
      <PopupPreview />
    </>
  );
}
