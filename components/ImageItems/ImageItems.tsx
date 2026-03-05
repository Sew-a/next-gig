"use client";

import { useAppContext } from "@/contexts/appContext";
import ImageItem from "../ImageItem";

import "./styles.scss";

export default function ImageItems() {
  const { imageFiles, setImageFiles } = useAppContext();

  console.log("ImageItems imageFiles:", imageFiles);
  return (
    <div className="image-items">
      {imageFiles.map((image) => (
        <ImageItem
          key={image.id}
          id={image.id}
          url={image.url}
          type={image.type}
          name={image.name}
        />
      ))}
    </div>
  );
}
