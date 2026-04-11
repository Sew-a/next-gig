export interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: string;
}

export function getGalleryImages(): GalleryImage[] {
  return [
    { id: '1', src: '/gallery/MyProject1.png', title: 'Editor Project', category: 'Work' },
    { id: '2', src: '/gallery/MyProject2.png', title: 'Google Picker', category: 'Work' },
    { id: '3', src: '/gallery/MyProject3.png', title: 'Files System', category: 'Cloud Project' },
    { id: '4', src: '/gallery/MyProject4.jpg', title: 'Gegham birthday', category: 'Work' },
    { id: '5', src: '/gallery/MyProject5.png', title: 'File Action', category: 'Work' },
    { id: '6', src: '/gallery/MyProject6.png', title: 'Brandkit', category: 'Work' },
    { id: '7', src: '/gallery/MyProject7.jpg', title: 'My Artwork', category: 'Drawing a book' },
    { id: '8', src: '/gallery/MyProject8.jpg', title: 'Team Building', category: 'Work' },
    { id: '9', src: '/gallery/MyPorject9.jpg', title: 'Band Repetition', category: 'Music Project' },
  ];
}

