'use client';
import { useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HeadingText } from '../UI';
import { useWindowSize } from '@/hooks/useWindowSize';
import { getGalleryImages, type GalleryImage } from '@/utils/gallery';
import './styles.scss';
import { useQuery } from '@tanstack/react-query';
import { useImagePopup } from '@/hooks/useImagePopup';
import { EXPERTISE_DATA } from './constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
} as any;

export default function Grid() {
  const { width } = useWindowSize();
  const { openPopup, PopupPreview } = useImagePopup();

  const columnsCount = useMemo(() => {
    if (width === 0) return 4;
    if (width >= 1200) return 4;
    if (width >= 764) return 3;
    return 2;
  }, [width]);

  const { data: galleryData, isLoading } = useQuery<GalleryImage[]>({
    queryKey: ["gallery"],
    queryFn: async () => {
      const response = getGalleryImages();
      return response;
    },
  });

  if (isLoading) {
    return (
      <section className="grid-section">
        <div className="grid-loading">Loading Gallery...</div>
      </section>
    );
  }

  const columns = Array.from({ length: columnsCount }, () => [] as GalleryImage[]);
  (galleryData || []).forEach((item, index) => {
    columns[index % columnsCount].push(item);
  });

  return (
    <>
      <div className="expertise-section">
        <HeadingText title="My Expertise" label="// SERVICES" />
        <div className="expertise-grid">
          {EXPERTISE_DATA.map((expertise, index) => (
            <div className="expertise-card" key={index}>
              <div className="expertise-icon">
                <expertise.icon size={40} strokeWidth={1.5} />
              </div>
              <h3>{expertise.title}</h3>
              <p className="expertise-desc">{expertise.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <HeadingText title="Work Gallery" label="// PORTFOLIO" />
      <motion.div
        className="masonry-grid"
        style={{ '--col-count': columnsCount } as any}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {columns.map((col, i) => (
          <div key={i} className="masonry-column">
            {col.map((item) => (
              <motion.div
                key={item.id}
                className="masonry-item"
                variants={itemVariants}
                onClick={() => openPopup(item.src, item.title)}
              >
                <div className="masonry-content">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={600}
                    height={800}
                    className="masonry-image"
                    sizes={`(max-width: 480px) 100vw, (max-width: 764px) 50vw, (max-width: 1200px) 33vw, 25vw`}
                  />
                  <div className="masonry-overlay">
                    <div className="overlay-info">
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </motion.div>
      <PopupPreview />
    </>
  );
}
