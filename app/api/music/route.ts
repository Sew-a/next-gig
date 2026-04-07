import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { id: crypto.randomUUID(), name: "Sample Track", url: "/music/sample.mp3", type: "audio/mpeg" },
  ]);
}
