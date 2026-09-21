import { useMemo } from "react";
import type { GalleryImage } from "@/src/utils/gallery";

const COLUMN_BREAKPOINTS = [
  { minWidth: 1200, columns: 4 },
  { minWidth: 764, columns: 3 },
  { minWidth: 0, columns: 2 },
];

export function getColumnCount(width: number): number {
  if (width === 0) return 4;
  const match = COLUMN_BREAKPOINTS.find((bp) => width >= bp.minWidth);
  return match?.columns ?? 2;
}

export function useMasonryColumns(images: GalleryImage[], width: number) {
  return useMemo(() => {
    const columnsCount = getColumnCount(width);
    const columns: GalleryImage[][] = Array.from(
      { length: columnsCount },
      () => [],
    );
    images.forEach((item, index) => {
      columns[index % columnsCount].push(item);
    });
    return { columns, columnsCount };
  }, [images, width]);
}