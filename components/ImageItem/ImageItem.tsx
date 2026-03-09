import { ACTION_NAMES, type ImageItemProps } from "@/types";
import Image from "next/image";
import "./styles.scss";
import ActionButton from "../UI/ActionButton";
import { ACTION_BUTTON_TYPE } from "../types";

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
  return (
    <div className="image-container">
      <div className="image-holder">
        <Image src={url} alt={name} fill style={{ objectFit: "cover" }} />
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
