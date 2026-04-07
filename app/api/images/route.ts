import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: Request) {
  return NextResponse.json([
    { id: crypto.randomUUID(), name: 'Game Design', url: '/assets/Game_web.jpg', type: 'image/jpeg' },
    { id: crypto.randomUUID(), name: 'Lies of P', url: '/assets/Lies.jpeg', type: 'image/jpeg' },
    { id: crypto.randomUUID(), name: 'Nier Automata', url: '/assets/Neir.jpg', type: 'image/jpeg' },
    { id: crypto.randomUUID(), name: 'Resident Evil', url: '/assets/Resident_evil.jpg', type: 'image/jpeg' },
  ]);
}


export async function POST(request: Request) {
  return NextResponse.json({ message: 'Not implemented' }, { status: 501 });
}

export async function DELETE(request: Request) {
  return NextResponse.json({ message: 'Not implemented' }, { status: 501 });
}