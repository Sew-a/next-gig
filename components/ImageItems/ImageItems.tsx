"use client";
import { useCallback, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAppContext } from "@/contexts/appContext";
import ImageItem from "../ImageItem";

import "./styles.scss";
import useActions from "@/hooks/useActions";
import { ACTION_NAMES, ActionType } from "@/types";

export default function ImageItems() {
  const { imageFiles, setImageFiles } = useAppContext();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const addImage = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const { data, isLoading, error } = useQuery({
    queryKey: ["images"],
    queryFn: () => fetch("/api/images").then((res) => res.json()),
  });

  useEffect(() => {
    if (data) setImageFiles(data);
  }, [data, setImageFiles]);

  const { mutate } = useActions();

  const handleClick = (
    action: ActionType,
    id?: string,
    url?: string,
    event?: React.ChangeEvent<HTMLInputElement>,
  ) => {
    mutate({ action, id, url, event });
  };

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <div className="image-items">
        {imageFiles.map((image) => (
          <ImageItem
            key={image.id}
            id={image.id}
            url={image.url}
            type={image.type}
            name={image.name}
            handleClick={handleClick}
          />
        ))}
        <div className="add-image" onClick={addImage}>
          +
        </div>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          accept="image/*"
          onChange={(event) =>
            handleClick(ACTION_NAMES.UPLOAD, undefined, undefined, event)
          }
        />
      </div>
    </>
  );
}
