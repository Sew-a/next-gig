export interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: string;
}

export function getGalleryImages(): GalleryImage[] {
  return [
    { id: '1', src: 'https://res.cloudinary.com/dlggumsot/image/upload/v1779292519/MyProject1_ejkm8z.png', title: 'Editor Project', category: 'Work' },
    { id: '6', src: 'https://res.cloudinary.com/dlggumsot/image/upload/v1779292519/MyProject6_xzhrew.png', title: 'Brandkit', category: 'Work' },
    { id: '3', src: 'https://res.cloudinary.com/dlggumsot/image/upload/v1779292518/MyProject3_yzfsbw.png', title: 'Files System', category: 'Cloud Project' },
    { id: '4', src: 'https://res.cloudinary.com/dlggumsot/image/upload/v1779292518/MyProject4_n7jzw4.jpg', title: 'Gegham birthday', category: 'Work' },
    { id: '2', src: 'https://res.cloudinary.com/dlggumsot/image/upload/v1779292516/MyProject2_dvlxy8.png', title: 'Google Picker', category: 'Work' },
    { id: '5', src: 'https://res.cloudinary.com/dlggumsot/image/upload/v1779292519/MyProject5_hyiqt1.png', title: 'File Action', category: 'Work' },
    { id: '7', src: 'https://res.cloudinary.com/dlggumsot/image/upload/v1779292521/MyProject7_jigm9j.jpg', title: 'My Artwork', category: 'Drawing a book' },
    { id: '8', src: 'https://res.cloudinary.com/dlggumsot/image/upload/v1779292550/MyProject8_oua6ww.jpg', title: 'Team Building', category: 'Work' },
  ];
}