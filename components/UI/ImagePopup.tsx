"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import "./ImagePopup.scss";

interface ImagePopupProps {
  src: string;
  alt: string;
  onClose: () => void;
}

const ImagePopup: React.FC<ImagePopupProps> = ({ src, alt, onClose }) => {
  
  // Close on Esc key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    // Prevent scrolling when popup is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <AnimatePresence>
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
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
        >
          <button className="popup-close-btn" onClick={onClose} aria-label="Close popup">
            <X size={24} />
          </button>
          
          <div className="popup-image-wrapper">
            <Image 
              src={src} 
              alt={alt} 
              fill
              className="popup-image"
              priority
              sizes="90vw"
            />
          </div>
          
          {alt && <div className="popup-caption">{alt}</div>}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImagePopup;
