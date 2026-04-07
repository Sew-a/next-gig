import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
  if (process.env.NEXT_RUNTIME === "edge") {
    return NextResponse.json([
      { id: crypto.randomUUID(), name: "Sample Track", url: "/music/sample.mp3", type: "audio/mpeg" },
    ]);
  }

  const path = require("path");
  const fs = require("fs");
  const musicDirectory = path.join(process.cwd(), "public", "music");

  try {
    if (!fs.existsSync(musicDirectory)) return NextResponse.json([]);
    const filenames = fs.readdirSync(musicDirectory);

    const music = filenames
      .filter((name: string) => /\.(mp3|wav|ogg|m4a|flac)$/i.test(name))
      .map((name: string) => {
        const extension = name.split(".").pop() || "";
        return {
          id: crypto.randomUUID(),
          name: name.replace(/\.[^/.]+$/, ""),
          url: `/music/${name}`,
          type: `audio/${extension}`,
        };
      });

    return NextResponse.json(music);
  } catch (error) {
    console.error("Error reading music directory:", error);
    return NextResponse.json([]);
  }
}
