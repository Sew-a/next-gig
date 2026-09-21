import { Monitor, Gamepad2, Bot } from 'lucide-react';
import type { ExpertiseItem } from './types';

export const EXPERTISE_HEADING = {
  title: "My Expertise",
  label: "// SERVICES",
};

export const EXPERTISE_DATA: ExpertiseItem[] = [
  {
    icon: Monitor,
    variant: "frontend",
    title: "Frontend Dev",
    desc: "Specialized in crafting pixel-perfect landing pages and responsive styling. Experienced in writing modern, clean code and seamlessly integrating dynamic animation libraries to build immersive, interactive user experiences.",
    emphasis: [
      "Engineered a FileSystem as a Service library adopted across 2 products",
      "Developed a universal Google Picker integration eliminating duplicate work across 4 teams",
      "Created 5+ production micro-frontend applications serving ~150M users"
    ],
    skills: ["React", "TypeScript", "Next.js", "GraphQL", "Redux", "Webpack", "Jest"]
  },
  {
    icon: Gamepad2,
    variant: "gamedev",
    title: "Game Dev",
    desc: "Practical experience in 2D game development using Unity and C#. Skilled in working with pixel art, creating smooth sprite animations, and implementing realistic game physics systems and mechanics.",
    emphasis: [
      "Developed a 2D platformer in Unity with custom physics and pixel art",
      "Currently working on a 3D first-person storytelling game"
    ],
    skills: ["C#", "Unity", "Blender"]
  },
  {
    icon: Bot,
    variant: "ai",
    title: "AI & Agentic AI",
    desc: "Built a comprehensive educational platform covering prompt engineering, AI agents, and practical LLM workflows. Experienced in designing agent architectures, prompt patterns, and self-hosted open-source AI tooling.",
    emphasis: [
      "Architected an AI Agents educational hub with prompt engineering, and agent workflow guides",
              "Implemented 9 prompt techniques from zero-shot to Reflexion with copyable examples",
      "Showcased 5 open-source AI tools including n8n, Ollama, and Whisper for self-hosted AI infrastructure"
    ],
    skills: ["Prompt Engineering", "AI Agents", "LLM Workflows", "Open Source AI"]
  }
];