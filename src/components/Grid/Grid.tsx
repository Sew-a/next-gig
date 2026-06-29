"use client";
import { useMemo } from "react";
import Image from "@/src/components/Image";
import { HeadingText } from "../UI";
import { useWindowSize } from "@/src/hooks/useWindowSize";
import type { GalleryImage } from "@/src/utils/gallery";
import "./styles.scss";
import { useImagePopup } from "@/src/hooks/useImagePopup";

interface GridProps {
  images: GalleryImage[];
}

export default function Grid({ images }: GridProps) {
  const { width } = useWindowSize();
  const { openPopup, PopupPreview } = useImagePopup();

  const columnsCount = useMemo(() => {
    if (width === 0) return 4;
    if (width >= 1200) return 4;
    if (width >= 764) return 3;
    return 2;
  }, [width]);

  const columns = Array.from(
    { length: columnsCount },
    () => [] as GalleryImage[],
  );
  images.forEach((item, index) => {
    columns[index % columnsCount].push(item);
  });

  return (
    <>
      <div className="grid-wrapper">
        <HeadingText title="Work Gallery" label="// PORTFOLIO" />
        <div
          className="masonry-grid"
          style={{ "--col-count": columnsCount } as React.CSSProperties}
        >
          {columns.map((col, i) => (
            <div key={i} className="masonry-column">
              {col.map((item) => (
                <div
                  key={item.id}
                  className="masonry-item"
                  onClick={() => openPopup(item.src, item.title)}
                >
                  <div className="masonry-content">
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={item.width}
                      className="masonry-image"
                      sizes={`(max-width: 480px) 100vw, (max-width: 764px) 50vw, (max-width: 1200px) 33vw, 25vw`}
                    />
                    <div className="masonry-overlay">
                      <div className="overlay-info">
                        <h3>{item.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <PopupPreview />
    </>
  );
}
