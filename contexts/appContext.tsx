"use client";
import { AppContextType, ImageItemProps } from "@/types";
import { createContext, useContext, useMemo, useState } from "react";

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [imageFiles, setImageFiles] = useState<ImageItemProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
