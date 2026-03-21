import React from "react";

import "./styles.scss";

export default function HeadingText({ title }: { title: string }) {
  return (
    <div className="heading-text">
      <div className="border-top" />
      <div className="border-right" />
      <h2 className="shadow-dance-text">{title}</h2>
    </div>
  );
}
