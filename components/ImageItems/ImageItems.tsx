"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAppContext } from "@/contexts/appContext";
import ImageItem from "../ImageItem";

import "./styles.scss";
import useActions from "@/hooks/useActions";
import { ACTION_NAMES, ActionType } from "@/contexts/types";
import SearchBar from "../SearchBar";

export default function ImageItems() {
  const { imageFiles, setImageFiles } = useAppContext();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [nameQuery, setNameQuery] = useState<string>("");

  // Handling Actions
  const { mutate } = useActions();

  const handleClick = (
    action: ActionType,
    id?: string,
    url?: string,
    event?: React.ChangeEvent<HTMLInputElement>,
  ) => {
    mutate({ action, id, url, event });
  };

  const addImage = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const { data: imageData } = useQuery({
    queryKey: ["images", nameQuery],
    queryFn: () => {
      return fetch(
        `/api/images${nameQuery ? `?q=${encodeURIComponent(nameQuery)}` : ""}`,
      ).then((res) => res.json());
    },
    staleTime: 30_000,
  });

  useEffect(() => {
    if (imageData) setImageFiles(imageData);
  }, [imageData, setImageFiles]);

  return (
    <>
      <SearchBar onSearch={(name) => setNameQuery(name)} />
      {
        <div className="image-items">
          {imageFiles?.map((image) => (
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
      }
    </>
  );
}
