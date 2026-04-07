export interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: string;
}

export function getGalleryImages(): GalleryImage[] {
  return [
    { id: '1', src: '/gallery/MyProject1.png', title: 'Interactive Portfolio', category: 'Work' },
    { id: '2', src: '/gallery/MyProject2.png', title: 'E-commerce Dashboard', category: 'Work' },
    { id: '3', src: '/gallery/MyProject3.png', title: 'Social Media App', category: 'Work' },
    { id: '4', src: '/gallery/IMG_6829.jpg', title: 'Studio Session', category: 'Work' },
    { id: '5', src: '/gallery/IMG20250320211553.jpg', title: 'Live Performance', category: 'Work' },
    { id: '6', src: '/gallery/noa.png', title: 'Digital Art', category: 'Work' },
  ];
}

export function getGalleryImagesNode(): GalleryImage[] {
  // Use a dynamic check to prevent static analysis from failing in Edge runtime
  if (typeof process !== 'undefined' && process.env.NEXT_RUNTIME !== 'edge') {
    try {
      const path = require('path');
      const fs = require('fs');
      const galleryDir = path.join(process.cwd(), 'public/gallery');
      
      if (fs.existsSync(galleryDir)) {
        const files = fs.readdirSync(galleryDir);
        return files
          .filter((file: string) => /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(file))
          .map((file: string, index: number) => ({
            id: (index + 100).toString(),
            src: `/gallery/${file}`,
            title: file.split('.')[0].replace(/[-_]/g, ' '),
            category: 'Work'
          }));
      }
    } catch (error) {
      console.error('Error reading gallery directory:', error);
    }
  }
  return [];
}

