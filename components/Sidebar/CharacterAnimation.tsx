"use client";
import { Canvas } from "@react-three/fiber";
import { useCharacterLogic } from "./useCharacterLogic";
import { Keyboard, MousePointer2, MoveVertical } from "lucide-react";
import { Character } from "./Character";

export default function CharacterAnimation() {
  const { isRunning, currentAction, handleActionComplete, isReady, handleLoaded } =
    useCharacterLogic();
 
  return (
    <div className="character-section-wrapper">
      <div className={`character-icons ${isReady ? 'ready' : ''}`}>
        <div className="icon-item">
          <Keyboard size={14} />
          <span>Esc/Space</span>
        </div>
        <div className="icon-item">
          <MoveVertical size={14} />
          <span>Scroll</span>
        </div>
        <div className="icon-item">
          <MousePointer2 size={14} />
          <span>L/R Click</span>
        </div>
      </div>
      <div className={`character-animation-container ${isReady ? 'ready' : ''}`}>
        <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
          <Character
            isRunning={isRunning}
            currentAction={currentAction}
            onActionComplete={handleActionComplete}
            onLoad={handleLoaded}
          />
        </Canvas>
      </div>
    </div>
  );
}