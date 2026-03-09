import React from "react";

import "./styles.scss";

export default function HeadingText({ title }: { title: string }) {
  return (
    <div className="heading-text">
      <h2>{title}</h2>
    </div>
  );
}
