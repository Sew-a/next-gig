import { NextResponse } from 'next/server';

export const runtime = 'edge';

// stubbed search data; in a real app this might query a database
const SEARCH_DATA = [
  "Anastasia",
  "Liberation frequency",
  "Punks songs",
  "The Punks group article",
  "Punks related content",
  "Anichrist",
  "Anichrist songs",
  "Timothy Anichrist",
  "Chester Bennington",
  "Antro",
  "Sailor"
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q')?.toLowerCase() || '';

  let results = SEARCH_DATA;
  if (q) {
    results = results.filter((item) => item.toLowerCase().includes(q));
  }

  return NextResponse.json(results);
}

// POST is unused for now but left in place for future enhancements
export async function POST(request: Request) {
  return NextResponse.json({ message: 'Not implemented' }, { status: 501 });
}