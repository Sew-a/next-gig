"use client";
import { CHARACTER_CONFIG, Action } from "@/src/utils/characterConstants";
import { useState, useEffect, useMemo } from "react";
import * as THREE from "three";

interface UseCharacterTexturesResult {
  textures: Partial<Record<Action, THREE.Texture[]>>;
  initialAspectRatio: number;
  loaded: boolean;
}

export function useCharacterTextures(
  onLoad: () => void,
): UseCharacterTexturesResult {
  const textureLoader = useMemo(() => new THREE.TextureLoader(), []);
  const [textures, setTextures] = useState<
    Partial<Record<Action, THREE.Texture[]>>
  >({});
  const [initialAspectRatio, setInitialAspectRatio] = useState(1);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
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
          },
        );
      });

    const load = async () => {
      const result: Partial<Record<Action, THREE.Texture[]>> = {};

      await Promise.all(
        Object.entries(CHARACTER_CONFIG).map(async ([action, config]) => {
          const loaded = await Promise.all(config.frames.map(loadTex));
          result[action as Action] = loaded.filter(
            (t): t is THREE.Texture => t !== null,
          );
        }),
      );

      const idleFrames = result.idle;
      if (idleFrames?.length) {
        const img = idleFrames[0].image;
        if (img instanceof HTMLImageElement) {
          setInitialAspectRatio(img.width / img.height);
        }
      }

      setTextures(result);
      setLoaded(true);
      onLoad();
    };

    load();
    // onLoad is intentionally excluded — it should be a stable ref from the parent
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textureLoader]);

  return { textures, initialAspectRatio, loaded };
}
