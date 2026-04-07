import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: Request) {
  // Edge runtime doesn't have access to the filesystem
  if (process.env.NEXT_RUNTIME === 'edge') {
    return NextResponse.json([
      { id: crypto.randomUUID(), name: 'ComixZone_01', url: '/assets/ComixZone_01.png', type: 'image/png' },
      { id: crypto.randomUUID(), name: 'ComixZone_03', url: '/assets/ComixZone_03.png', type: 'image/png' },
    ]);
  }

  const path = require('path');
  const fs = require('fs');
  const imagesDirectory = path.join(process.cwd(), 'public', 'assets');

  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q')?.toLowerCase() || '';

  try {
    if (!fs.existsSync(imagesDirectory)) return NextResponse.json([]);
    const filenames = fs.readdirSync(imagesDirectory);

    let images = filenames
      .filter((name: string) => /\.(jpg|jpeg|png|gif|svg|webp)$/i.test(name))
      .map((name: string) => {
        const extension = name.split('.').pop() || '';
        return {
          id: crypto.randomUUID(),
          name: name.replace(/\.[^/.]+$/, ''),
          url: `/assets/${name}`,
          type: `image/${extension}`,
        };
      });

    if (q) {
      images = images.filter((img: any) => img.name.toLowerCase().includes(q));
    }

    return NextResponse.json(images);
  } catch (error) {
    console.error('Error reading images directory:', error);
    return NextResponse.json([]);
  }
}

export async function POST(request: Request) {
  if (process.env.NEXT_RUNTIME === 'edge') {
    return NextResponse.json({ message: 'Upload not supported in Edge Runtime' }, { status: 501 });
  }
  return NextResponse.json({ message: 'Not implemented' }, { status: 501 });
}

export async function DELETE(request: Request) {
  if (process.env.NEXT_RUNTIME === 'edge') {
    return NextResponse.json({ message: 'Delete not supported in Edge Runtime' }, { status: 501 });
  }
  return NextResponse.json({ message: 'Not implemented' }, { status: 501 });
}