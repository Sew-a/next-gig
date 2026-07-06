export interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: string;
  width: number;
  height: number;
}

export function getGalleryImages(): GalleryImage[] {
  return [
    { id: '1', src: 'https://res.cloudinary.com/dlggumsot/image/upload/v1779292519/MyProject1_ejkm8z.png', title: 'Editor Project', category: 'Work', width: 600, height: 400 },
    { id: '6', src: 'https://res.cloudinary.com/dlggumsot/image/upload/v1779292519/MyProject6_xzhrew.png', title: 'Brandkit', category: 'Work', width: 600, height: 400 },
    { id: '3', src: 'https://res.cloudinary.com/dlggumsot/image/upload/v1779292518/MyProject3_yzfsbw.png', title: 'Files System', category: 'Cloud Project', width: 600, height: 400 },
    { id: '4', src: 'https://res.cloudinary.com/dlggumsot/image/upload/v1779292518/MyProject4_n7jzw4.jpg', title: 'Gegham birthday', category: 'Work', width: 600, height: 800 },
    { id: '2', src: 'https://res.cloudinary.com/dlggumsot/image/upload/v1779292516/MyProject2_dvlxy8.png', title: 'Google Picker', category: 'Work', width: 600, height: 400 },
    { id: '5', src: 'https://res.cloudinary.com/dlggumsot/image/upload/v1779292519/MyProject5_hyiqt1.png', title: 'File Action', category: 'Work', width: 600, height: 400 },
    { id: '7', src: 'https://res.cloudinary.com/dlggumsot/image/upload/v1779292521/MyProject7_jigm9j.jpg', title: 'My Artwork', category: 'Drawing a book', width: 600, height: 750 },
    { id: '8', src: 'https://res.cloudinary.com/dlggumsot/image/upload/v1779292550/MyProject8_oua6ww.jpg', title: 'Team Building', category: 'Work', width: 600, height: 400 },
    { id: '9', src: 'https://res.cloudinary.com/dlggumsot/image/upload/v1782209157/IMG20260616175745_nlv53i.webp', title: 'Live Moment', category: 'Work', width: 600, height: 400 },
    { id: '10', src: 'https://res.cloudinary.com/dlggumsot/image/upload/v1782203152/5296787088474840984_skkoad.webp', title: 'The Crowd', category: 'Work', width: 600, height: 400 },
    { id: '11', src: 'https://res.cloudinary.com/dlggumsot/image/upload/v1783354442/Screenshot_2026-07-06_193857_ubcvpw.webp', title: 'AI Agents Website', category: 'AI', width: 600, height: 400 },
    { id: '12', src: 'https://res.cloudinary.com/dlggumsot/image/upload/v1783354442/Screenshot_2026-07-06_193842_qqp0jb.webp', title: 'AI Agents Wesite prompts', category: 'AI', width: 600, height: 400 },
  ];
}