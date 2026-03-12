import { UserType } from "@/types";
import {create} from "zustand";

type storeDataProps = {
    imageSrc: string,
    name: string,
    article: string,
    relatedPics: string[],
}

type InitialStore = {
  storedData: storeDataProps[] | null;
  setStoredData: (data: storeDataProps[] | null) => void;
  doSomethingAsync: () => Promise<void>;

  // User states
  isAuthenticated: boolean;
  user: UserType | null;
  setUser: (user: UserType | null) => void;
}

export const useInitialStore = create<InitialStore>((set) => {
  return {
    doSomethingAsync: () => new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    }),

    // Initial state for storedData
    storedData: null,
    setStoredData: (data: storeDataProps[] | null) => set({storedData: data}),
    
    // User states
    isAuthenticated: false,
    user: null,
    setUser: (user: UserType | null) => set({user}),
  };
});