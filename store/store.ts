import {create} from "zustand";

type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
  doSomethingAsync: () => Promise<void>;
}

export const useCounterStore = create<CounterStore>((set) => {
  return {
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    doSomethingAsync: () => new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    }),
  };
});