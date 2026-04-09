"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import * as THREE from "three";
import { Action, CHARACTER_CONFIG } from "./characterConstants";
import { useCharacterLogic } from "./useCharacterLogic";
import { Keyboard, MousePointer2, MoveVertical } from "lucide-react";

interface CharacterProps {
  isRunning: boolean;
  currentAction: Action;
  onActionComplete: () => void;
  onLoad: () => void;
}

function Character({ isRunning, currentAction, onActionComplete, onLoad }: CharacterProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const textureLoader = useMemo(() => new THREE.TextureLoader(), []);

  const [textures, setTextures] = useState<Partial<Record<Action, THREE.Texture[]>>>({});
  const [loaded, setLoaded] = useState(false);
  const [aspectRatio, setAspectRatio] = useState(1);

  const frameRef = useRef(0);
  const timeRef = useRef(0);
  const prevAction = useRef<Action>(currentAction);

  useEffect(() => {
    const loadTextures = async () => {
      const loadTex = (path: string) =>
        new Promise<THREE.Texture | null>((resolve) => {
          textureLoader.load(
            path, 
            (tex) => {
              tex.magFilter = THREE.NearestFilter;
              tex.minFilter = THREE.NearestFilter;
              resolve(tex);
            },
            undefined,
            () => {
              console.warn(`Failed to load texture: ${path}`);
              resolve(null);
            }
          );
        });

      const loadedTextures: Partial<Record<Action, THREE.Texture[]>> = {};

      const loadPromises = Object.entries(CHARACTER_CONFIG).map(
        async ([action, config]) => {
          const texs = await Promise.all(config.frames.map(loadTex));
          loadedTextures[action as Action] = texs.filter((t): t is THREE.Texture => t !== null);
        }
      );

      await Promise.all(loadPromises);

      // Set initial aspect ratio from idle
      if (loadedTextures.idle && loadedTextures.idle.length > 0) {
        const img = loadedTextures.idle[0].image;
        if (img instanceof HTMLImageElement) {
          setAspectRatio(img.width / img.height);
        }
      }

      setTextures(loadedTextures);
      setLoaded(true);
      onLoad();
    };

    loadTextures();
  }, [textureLoader, onLoad]);

  useFrame((state, delta) => {
    if (!loaded) return;

    // Determine target action
    let targetAction: Action = currentAction;
    if (targetAction === "idle" && isRunning) {
      targetAction = "run";
    }

    // Reset frame if action changed
    if (prevAction.current !== targetAction) {
      frameRef.current = 0;
      timeRef.current = 0;
      prevAction.current = targetAction;
    }

    timeRef.current += delta;

    const config = CHARACTER_CONFIG[targetAction];
    const fps = config.fps;
    const interval = 1 / fps;

    if (timeRef.current >= interval) {
      timeRef.current = 0;
      const currentFrames = textures[targetAction];

      if (currentFrames && currentFrames.length > 0) {
        const nextFrame = frameRef.current + 1;

        if (config.isOneShot && nextFrame >= currentFrames.length) {
          onActionComplete();
        } else if (config.freezeOnEnd && nextFrame >= currentFrames.length) {
          frameRef.current = currentFrames.length - 1;
        } else {
          frameRef.current = nextFrame % currentFrames.length;
        }

        if (meshRef.current) {
          const mat = meshRef.current.material as THREE.MeshBasicMaterial;
          const tex = currentFrames[frameRef.current];
          mat.map = tex;
          mat.needsUpdate = true;

          const img = tex.image;
          if (img instanceof HTMLImageElement) {
            const newAspect = img.width / img.height;
            meshRef.current.scale.set(newAspect * 3, 3, 1);
          }
        }
      }
    }
  });

  if (!loaded) return null;

  return (
    <mesh ref={meshRef} scale={[aspectRatio * 3, 3, 1]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial transparent side={THREE.DoubleSide} />
    </mesh>
  );
}

export default function CharacterAnimation() {
  const { isRunning, currentAction, handleActionComplete } = useCharacterLogic();
  const [isReady, setIsReady] = useState(false);

  const handleLoaded = useCallback(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 1500);
  }, []);

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
