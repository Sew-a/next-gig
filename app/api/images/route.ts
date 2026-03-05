import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  // To be served publicly, images must be in the `public` folder.
  const imagesDirectory = path.join(process.cwd(), 'public', 'assets');

  try {
    // Read filenames from the folder
    const filenames = fs.readdirSync(imagesDirectory);

    const images = filenames
      // Filter out non-image files if any
      .filter((name) => /\.(jpg|jpeg|png|gif|svg|webp)$/i.test(name))
      .map((name) => {
        const extension = name.split('.').pop() || '';
        return {
          id: crypto.randomUUID(),
          name: name.replace(/\.[^/.]+$/, ''),
          url: `/assets/${name}`, // The URL should be relative to the domain root
          type: `image/${extension}`,
        };
      });

    return NextResponse.json(images);
  } catch (error) {
    console.error('Error reading images directory:', error);
    // If the directory doesn't exist or another error occurs, return a helpful error message.
    return NextResponse.json(
      { message: 'Error reading images directory. Make sure the `public/assets` directory exists and contains images.' },
      { status: 500 }
    );
  }
}