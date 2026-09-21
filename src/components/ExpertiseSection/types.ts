import type { LucideIcon } from "lucide-react";

export interface ExpertiseItem {
  icon: LucideIcon;
  variant: "frontend" | "gamedev" | "ai";
  title: string;
  desc: string;
  emphasis: string[];
  skills: string[];
}