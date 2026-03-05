"use client";

import React from "react";
import { useCounterStore } from "../../store/store";

export default function AppList() {
  const count = useCounterStore((state) => state.count);
  return <div>AppList {count}</div>;
}
