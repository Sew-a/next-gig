"use client";
import React, { useState, useCallback } from 'react';
import ImagePopup from '@/components/UI/ImagePopup';

interface PopupData {
  src: string;
  alt: string;
}

export function useImagePopup() {
  const [currentImage, setCurrentImage] = useState<PopupData | null>(null);

  const openPopup = useCallback((src: string, alt: string) => {
    setCurrentImage({ src, alt });
  }, []);

  const closePopup = useCallback(() => {
    setCurrentImage(null);
  }, []);

  const PopupPreview = () => (
    currentImage ? (
      <ImagePopup 
        src={currentImage.src} 
        alt={currentImage.alt} 
        onClose={closePopup} 
      />
    ) : null
  );

  return {
    openPopup,
    closePopup,
    PopupPreview,
    isOpen: !!currentImage
  };
}
