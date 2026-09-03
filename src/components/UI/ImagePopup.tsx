import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import "./ImagePopup.scss";

interface ImagePopupProps {
  src: string;
  alt: string;
  onClose: () => void;
}

const ImagePopup: React.FC<ImagePopupProps> = ({ src, alt, onClose }) => {

  // Close on Esc key and lock page scroll while the popup is open
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const prevBodyOverflow = document.body.style.overflow;
    const prevDocOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevDocOverflow;
    };
  }, [onClose]);

  // Render through a portal to document.body so position: fixed works against
  // the viewport (ancestors with filter/transform break fixed positioning).
  return createPortal(
    <motion.div
      className="image-popup-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="popup-blur-bg" />
      <motion.div
        className="image-popup-container"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="popup-close-btn" onClick={onClose} aria-label="Close popup">
          <X size={24} />
        </button>

        <div className="popup-image-wrapper">
          <img
            src={src}
            alt={alt}
            width={800}
            height={600}
            className="popup-image"
            sizes="90vw"
          />
        </div>

        {alt && <div className="popup-caption">{alt}</div>}
      </motion.div>
    </motion.div>,
    document.body,
  );
};

export default ImagePopup;
