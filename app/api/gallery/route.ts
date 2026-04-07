import { NextResponse } from 'next/server';
import { getGalleryImages, getGalleryImagesNode } from '@/utils/gallery';

export const runtime = 'edge';

export async function GET() {
  try {
    const images = process.env.NEXT_RUNTIME === 'edge' 
      ? getGalleryImages() 
      : getGalleryImagesNode();
    return NextResponse.json(images);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch gallery' }, { status: 500 });
  }
}
