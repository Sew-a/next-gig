"use client";
import cloudinaryLoader from "@/src/lib/cloudinaryLoader";

export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  width?: number;
  height?: number;
};

export default function Image({
  src,
  width,
  height,
  alt,
  ...rest
}: ImageProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={cloudinaryLoader(src!, width, height)}
      width={width}
      height={height}
      alt={alt ?? "untitled_image"}
      {...rest}
    />
  );
}
