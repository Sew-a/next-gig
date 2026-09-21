import type { ReactNode } from "react";

export interface ProjectDetailProps {
  slug: string;
}

export interface SectionHeading {
  title: string;
  label: string;
}

export interface ContentSectionProps {
  heading: SectionHeading;
  className: string;
  children: ReactNode;
}