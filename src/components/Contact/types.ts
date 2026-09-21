import type { ComponentType } from "react";

export interface FormState {
  name: string;
  email: string;
  message: string;
}

export type SubmitStatus = "idle" | "loading" | "success" | "error";

export type SocialIcon = ComponentType<{ size?: number | string }>;

export interface SocialLink {
  label: string;
  value: string;
  href: string;
  icon: SocialIcon;
}

export interface ContactResponse {
  ok?: boolean;
  error?: string;
}