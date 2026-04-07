export type Action = "idle" | "run" | "kick" | "jump";

export interface ActionConfig {
  frames: string[];
  fps: number;
  isOneShot: boolean;
}

export const CHARACTER_CONFIG: Record<Action, ActionConfig> = {
  idle: {
    frames: [
      "/game/idle/ComixZone_10.png", "/game/idle/ComixZone_12.png",
      "/game/idle/ComixZone_14.png", "/game/idle/ComixZone_14.png", "/game/idle/ComixZone_12.png",
      "/game/idle/ComixZone_10.png"
    ],
    fps: 4,
    isOneShot: false,
  },
  run: {
    frames: [
      "/game/run/ComixZone_02.png", "/game/run/ComixZone_04.png", "/game/run/ComixZone_06.png",
      "/game/run/ComixZone_08.png", "/game/run/ComixZone_10.png", "/game/run/ComixZone_12.png",
      "/game/run/ComixZone_14.png", "/game/run/ComixZone_16.png", "/game/run/ComixZone_18.png",
      "/game/run/ComixZone_20.png"
    ],
    fps: 12,
    isOneShot: false,
  },
  kick: {
    frames: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"].map(f => `/game/kick/${f}`),
    fps: 10,
    isOneShot: true,
  },
  jump: {
    frames: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png", "12.png"].map(f => `/game/jump/${f}`),
    fps: 12,
    isOneShot: true,
  },
};
