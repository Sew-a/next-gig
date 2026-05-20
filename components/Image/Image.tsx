"use client";
import NextImage from "next/image";
import type { ImageProps as NextImageProps } from "next/image";
import cloudinaryLoader from "@/lib/cloudinaryLoader";

// Re-export Next's ImageProps so consumers keep the same type contract
export type ImageProps = NextImageProps;

export default function Image(props: ImageProps) {
  return (
    <NextImage
      loader={cloudinaryLoader}
      {...props}
    />
  );
}