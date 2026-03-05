"use client";

import { AppContextType, ImageTypeProps, UserType } from "@/types/types";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [imageFiles, setImageFiles] = useState<ImageTypeProps[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Getting Images from the API when the component mounts
  useEffect(() => {
    const loadInitialImages = async () => {
      const res = await fetch("/api/images");
      const data = await res.json();
      setImageFiles(data);
    };

    loadInitialImages();
  }, []);

  // const removeImage = (id: string) => {
  //   // Traditional React state update: filter out the one you don't want
  //   setImageFiles(prev => prev.filter(img => img.id !== id));
  // };
  // const addNewImage = (newImageData: ImageTypeProps) => {
  //   setImageFiles(prev => [...prev, newImageData]);
  // };

  console.log(" imageFiles:", imageFiles);
  // Memoize the value to prevent unnecessary re-renders of consumers
  const value = useMemo(
    () => ({
      users,
      setUsers,
      imageFiles,
      setImageFiles,
      isLoading,
      setIsLoading,
    }),
    [users, imageFiles, isLoading],
  );

  return (
    <AppContext.Provider value={{ ...value }}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
