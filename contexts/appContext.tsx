"use client";
import { AppContextType, ImageItemProps } from "@/types";
import { createContext, useContext, useMemo, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [imageFiles, setImageFiles] = useState<ImageItemProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [queryClient] = useState(() => new QueryClient());

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
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={{ ...value }}>{children}</AppContext.Provider>
    </QueryClientProvider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
