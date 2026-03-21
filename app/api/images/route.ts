import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
  // To be served publicly, images must be in the `public` folder.
  const imagesDirectory = path.join(process.cwd(), 'public', 'assets');

  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q')?.toLowerCase() || '';

  try {
    // Read filenames from the folder
    const filenames = fs.readdirSync(imagesDirectory);

    let images = filenames
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

    if (q) {
      images = images.filter((img) => img.name.toLowerCase().includes(q));
    }

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

// Handle image uploads
export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get('file') as File;

  if (!file) {
    return NextResponse.json({ message: 'No file provided' }, { status: 400 });
  }

  const imagesDirectory = path.join(process.cwd(), 'public', 'assets');

  // Ensure directory exists
  if (!fs.existsSync(imagesDirectory)) {
    fs.mkdirSync(imagesDirectory, { recursive: true });
  }

  // Generate unique filename to avoid conflicts
  const extension = file.name.split('.').pop() || '';
  const uniqueName = `${crypto.randomUUID()}.${extension}`;
  const filePath = path.join(imagesDirectory, uniqueName);

  // Write the file
  const buffer = Buffer.from(await file.arrayBuffer());
  fs.writeFileSync(filePath, buffer);

  // Create image object
  const image = {
    id: crypto.randomUUID(),
    name: file.name.replace(/\.[^/.]+$/, ''),
    url: `/assets/${uniqueName}`,
    type: file.type,
  };

  return NextResponse.json(image);
}

// Handle image deletion
export async function DELETE(request: Request) {
  const { url } = await request.json();

  if (!url) {
    return NextResponse.json({ message: 'No URL provided' }, { status: 400 });
  }

  // Extract filename from URL
  const filename = url.split('/').pop();
  if (!filename) {
    return NextResponse.json({ message: 'Invalid URL' }, { status: 400 });
  }

  const imagesDirectory = path.join(process.cwd(), 'public', 'assets');
  const filePath = path.join(imagesDirectory, filename);

  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      return NextResponse.json({ message: 'Image deleted successfully' });
    } else {
      return NextResponse.json({ message: 'Image not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error deleting image:', error);
    return NextResponse.json({ message: 'Error deleting image' }, { status: 500 });
  }
}