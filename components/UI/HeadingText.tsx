import React from "react";
import "./styles.scss";

interface HeadingProps {
  title: string;
  label?: string;
  variant?: "maelstrom" | "portfolio";
}

export default function HeadingText({
  title,
  label,
}: HeadingProps) {

  return (
    <div className="section-head">
      {label && <span className="section-label">{label}</span>}
      <h2 className="section-title">{title}</h2>
    </div>
  );
}
