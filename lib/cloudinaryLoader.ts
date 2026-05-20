import { ImageLoaderProps } from "next/image";

export default function cloudinaryLoader({
  src,
  width,
  quality,
}: ImageLoaderProps): string {
  const base = "https://res.cloudinary.com/dlggumsot/image/upload";
  const params = `w_${width},q_${quality ?? "auto"},f_auto`;

  // Handle both full URLs and bare public IDs
  const publicId = src.startsWith(base) ? src.replace(`${base}/`, "") : src;

  return `${base}/${params}/${publicId}`;
}