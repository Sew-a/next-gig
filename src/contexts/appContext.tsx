"use client";
import { createContext, useContext, useMemo, useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { AppContextType, ImageItemProps, Theme } from "@/src/contexts/types";

export const AppContext = createContext<AppContextType | undefined>(undefined);

const applyThemeClass = (theme: Theme) => {
  if (typeof window === "undefined") return;
  localStorage.setItem("theme", theme);
  const wrapper = document.querySelector(".main-theme-wrapper");
  if (wrapper) {
    wrapper.classList.toggle("light-theme", theme === "light");
  }
};

const readSavedTheme = (): Theme => {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [imageFiles, setImageFiles] = useState<ImageItemProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isIdeMode, setIsIdeMode] = useState<boolean>(false);
  const [currentFile, setCurrentFile] = useState<string>("AboutMe.tsx");
  const [isHacked, setIsHacked] = useState<boolean>(false);
  const [theme, setTheme] = useState<Theme>("dark");
  const [hydrated, setHydrated] = useState(false);
  const [queryClient] = useState(() => new QueryClient());

  useEffect(() => {
    const saved = readSavedTheme();
    setHydrated(true);
    if (saved !== theme) {
      setTheme(saved);
    } else {
      applyThemeClass(saved);
    }
  }, []);

  useEffect(() => {
    if (hydrated) {
      applyThemeClass(theme);
    }
  }, [theme, hydrated]);

  const client = useMemo(
    () =>
      new ApolloClient({
        link: new HttpLink({
          uri: "http://localhost:4000",
        }),
        cache: new InMemoryCache(),
      }),
    []
  );

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
      isHacked,
      setIsHacked,
      theme,
      setTheme,
    }),
    [imageFiles, isLoading, isIdeMode, currentFile, isHacked, theme],
  );

  return (
    <ApolloProvider client={client}>
      <QueryClientProvider client={queryClient}>
        <AppContext.Provider value={value}>
          {children}
        </AppContext.Provider>
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
