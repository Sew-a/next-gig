import { ACTION_NAMES, type ImageItemProps } from "@/types";
import Image from "next/image";
import "./styles.scss";
import ActionButton from "../UI/ActionButton";
import { ACTION_BUTTON_TYPE } from "../types";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const imageActions = [
  ACTION_NAMES.OPEN,
  ACTION_NAMES.RENAME,
  ACTION_NAMES.DOWNLOAD,
  ACTION_NAMES.DELETE,
];

export default function ImageItem({
  id,
  url,
  type,
  name,
  handleClick,
}: ImageItemProps) {
  const { elementRef, isVisible } = useIntersectionObserver<HTMLDivElement>({
    rootMargin: "200px",
    threshold: 0.1,
  });

  return (
    <div ref={elementRef} className="image-container">
      <div className="image-holder">
        {isVisible ? (
          <Image
            src={url}
            alt={name}
            fill
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
        ) : (
          <div className="image-placeholder" aria-label="loading image" />
        )}
      </div>
      <div className="info-holder">
        <p>{name}</p>
        <p>{type}</p>
      </div>
      <div className="actions-list">
        {imageActions.map((action) => (
          <ActionButton
            key={crypto.randomUUID()}
            title={action}
            onClick={() => handleClick(action, id, url)}
            buttonType={ACTION_BUTTON_TYPE.ACTION}
          />
        ))}
      </div>
    </div>
  );
}
