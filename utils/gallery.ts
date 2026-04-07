export interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: string;
}

export function getGalleryImages(): GalleryImage[] {
  return [
    { id: '1', src: '/gallery/ComixZone_01.png', title: 'Comix Zone 1', category: 'Work' },
    { id: '2', src: '/gallery/ComixZone_03.png', title: 'Comix Zone 2', category: 'Work' },
    { id: '3', src: '/gallery/ComixZone_05.png', title: 'Comix Zone 3', category: 'Work' },
  ];
}

export function getGalleryImagesNode(): GalleryImage[] {
  const galleryDir = require('path').join(process.cwd(), 'public/gallery');
  
  try {
    const fs = require('fs');
    const files = fs.readdirSync(galleryDir);
    
    return files
      .filter((file: string) => /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(file))
      .map((file: string, index: number) => ({
        id: (index + 1).toString(),
        src: `/gallery/${file}`,
        title: file.split('.')[0].replace(/[-_]/g, ' '),
        category: 'Work'
      }));
  } catch (error) {
    console.error('Error reading gallery directory:', error);
    return [];
  }
}
