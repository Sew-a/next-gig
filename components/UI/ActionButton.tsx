"use client";

import { ACTION_BUTTON_TYPE } from "../types";
import "./styles.scss";

type ButtonProps = {
  title: string;
  onClick: () => void;
  buttonType: ACTION_BUTTON_TYPE;
};

export default function ActionButton({
  title,
  onClick,
  buttonType,
}: ButtonProps) {
  return (
    <button onClick={onClick} className={`action-button ${buttonType}`}>
      {title}
    </button>
  );
}
