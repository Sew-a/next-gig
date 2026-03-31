"use client";
import { createContext, useContext, useMemo, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { ApolloProvider } from '@apollo/client/react';
import { AppContextType, ImageItemProps } from "@/types";

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [imageFiles, setImageFiles] = useState<ImageItemProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isIdeMode, setIsIdeMode] = useState<boolean>(false);
  const [currentFile, setCurrentFile] = useState<string>("AboutMe.tsx");
  const [queryClient] = useState(() => new QueryClient());

  const client = new ApolloClient({
    link: new HttpLink({
      uri: 'http://localhost:4000',
    }),
    cache: new InMemoryCache(),
  });
  
  const value = useMemo(
    () => ({
      imageFiles,
      setImageFiles,
      isLoading,
      setIsLoading,
      isIdeMode,
      setIsIdeMode,
      currentFile,
      setCurrentFile,
    }),
    [imageFiles, isLoading, isIdeMode, currentFile],
  );

  return (
    <ApolloProvider client={client}>
      <QueryClientProvider client={queryClient}>
        <AppContext.Provider value={{ ...value }}>{children}</AppContext.Provider>
      </QueryClientProvider>
    </ApolloProvider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
