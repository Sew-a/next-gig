import Image from "@/src/components/Image";
import type { GalleryImage } from "@/src/utils/gallery";
import { GRID_IMAGE_SIZES } from "./constants";

interface GridItemProps {
  item: GalleryImage;
  onOpen: (src: string, title: string) => void;
}

export default function GridItem({ item, onOpen }: GridItemProps) {
  return (
    <div
      className="masonry-item"
      onClick={() => onOpen(item.src, item.title)}
    >
      <div className="masonry-content">
        <Image
          src={item.src}
          alt={item.title}
          width={item.width}
          className="masonry-image"
          sizes={GRID_IMAGE_SIZES}
        />
        <div className="masonry-overlay">
          <div className="overlay-info">
            <h3>{item.title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}