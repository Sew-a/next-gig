import fs from 'fs';
import path from 'path';

export interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: string;
}

export function getGalleryImages(): GalleryImage[] {
  const galleryDir = path.join(process.cwd(), 'public/gallery');
  
  try {
    const files = fs.readdirSync(galleryDir);
    
    return files
      .filter(file => /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(file))
      .map((file, index) => ({
        id: (index + 1).toString(),
        src: `/gallery/${file}`,
        title: file.split('.')[0].replace(/[-_]/g, ' '),
        category: 'Work' // Default category
      }));
  } catch (error) {
    console.error('Error reading gallery directory:', error);
    return [];
  }
}
