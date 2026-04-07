

export interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: string;
}

export function getGalleryImages(): GalleryImage[] {
  // Edge runtime doesn't have access to the filesystem
  if (process.env.NEXT_RUNTIME === 'edge') {
    return [
      { id: '1', src: '/gallery/ComixZone_01.png', title: 'Comix Zone 1', category: 'Work' },
      { id: '2', src: '/gallery/ComixZone_03.png', title: 'Comix Zone 2', category: 'Work' },
      { id: '3', src: '/gallery/ComixZone_05.png', title: 'Comix Zone 3', category: 'Work' },
    ];
  }

  const galleryDir = require('path').join(process.cwd(), 'public/gallery');
  
  try {
    const fs = require('fs');
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
