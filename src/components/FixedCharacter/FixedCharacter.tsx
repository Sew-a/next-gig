"use client";
import dynamic from "next/dynamic";
import "./styles.scss";

const CharacterAnimation = dynamic(
  () => import("@/src/components/Sidebar/CharacterAnimation"),
  { ssr: false },
);

export default function FixedCharacter() {
  return (
    <div className="fixed-character">
      <CharacterAnimation />
    </div>
  );
}
