import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: Request) {
  return NextResponse.json([
    { id: crypto.randomUUID(), name: 'ComixZone_01', url: '/assets/ComixZone_01.png', type: 'image/png' },
    { id: crypto.randomUUID(), name: 'ComixZone_03', url: '/assets/ComixZone_03.png', type: 'image/png' },
  ]);
}

export async function POST(request: Request) {
  return NextResponse.json({ message: 'Not implemented' }, { status: 501 });
}

export async function DELETE(request: Request) {
  return NextResponse.json({ message: 'Not implemented' }, { status: 501 });
}