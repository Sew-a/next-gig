import React from "react";

import type { ImageTypeProps } from "@/types/types";
import Image from "next/image";

export default function ImageItem({ id, url, type, name }: ImageTypeProps) {
  return (
    <div>
      <Image src={url} alt={name} width={300} height={250} />
      <p>{name}</p>
      <p>{type}</p>
    </div>
  );
}
