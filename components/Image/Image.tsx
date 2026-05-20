import React from "react";

const CLOUDINARY_BASE = "https://res.cloudinary.com/dlggumsot/image/upload";

function getOptimizedUrl(src: string): string {
  if (src.startsWith(CLOUDINARY_BASE)) {
    return src.replace(`${CLOUDINARY_BASE}/`, `${CLOUDINARY_BASE}/q_auto,f_auto/`);
  }
  return src;
}

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  style?: React.CSSProperties;
  optimized?: boolean;
  priority?: boolean;
  sizes?: string;
  loading?: "lazy" | "eager";
}

export default function Image({
  src,
  alt,
  width,
  height,
  fill,
  className,
  style,
  optimized = true,
  priority,
  sizes,
  loading,
}: ImageProps) {
  const imgSrc = optimized ? getOptimizedUrl(src) : src;

  const imgStyle: React.CSSProperties = {
    ...(fill ? { objectFit: "cover", width: "100%", height: "100%" } : {}),
    ...style,
  };

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={imgSrc}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      className={className}
      style={imgStyle}
      loading={loading ?? (priority ? "eager" : "lazy")}
      fetchPriority={priority ? "high" : undefined}
      sizes={sizes}
    />
  );
}
