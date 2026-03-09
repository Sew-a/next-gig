"use client";
import { useCounterStore } from "../../store/store";

export default function AppList() {
  const count = useCounterStore((state) => state.count);
  return <div></div>;
}
