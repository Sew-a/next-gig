import { NextResponse } from 'next/server';
import { getGalleryImages } from '@/utils/gallery';

export const runtime = 'edge';

export async function GET() {
  try {
    const images = getGalleryImages();
    return NextResponse.json(images);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch gallery' }, { status: 500 });
  }
}
