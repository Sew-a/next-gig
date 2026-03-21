import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const musicDirectory = path.join(process.cwd(), "public", "music");

  try {
    const filenames = fs.readdirSync(musicDirectory);

    const music = filenames
      .filter((name) => /\.(mp3|wav|ogg|m4a|flac)$/i.test(name))
      .map((name) => {
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
    return NextResponse.json(
      {
        message:
          "Error reading music directory. Make sure the `public/music` directory exists and contains audio files.",
      },
      { status: 500 },
    );
  }
}
