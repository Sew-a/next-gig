export default function cloudinaryLoader(
  src: string,
  width?: number,
  height?: number,
): string {
  const base = "https://res.cloudinary.com/dlggumsot/image/upload";
  const params = ["f_auto", "q_auto"];
  if (width) params.push(`w_${width}`);
  if (height) params.push(`h_${height}`);

  const publicId = src.startsWith(base) ? src.replace(`${base}/`, "") : src;

  return `${base}/${params.join(",")}/${publicId}`;
}
