"use client";
import { AppContextType, ImageItemProps } from "@/types";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [imageFiles, setImageFiles] = useState<ImageItemProps[]>([]);
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

  // Memoize the value to prevent unnecessary re-renders of consumers
  const value = useMemo(
    () => ({
      imageFiles,
      setImageFiles,
      isLoading,
      setIsLoading,
    }),
    [imageFiles, isLoading],
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
