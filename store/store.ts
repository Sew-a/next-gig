import { UserType } from "@/types";
import {create} from "zustand";

type CounterStore = {
  count: number;
  doSomethingAsync: () => Promise<void>;

  // User states
  isAuthenticated: boolean;
  user: UserType | null;
  setUser: (user: UserType | null) => void;
}

export const useCounterStore = create<CounterStore>((set) => {
  return {
    count: 0,
    doSomethingAsync: () => new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    }),

    // User states
    isAuthenticated: false,
    user: null,
    setUser: (user) => set({user}),
  };
});