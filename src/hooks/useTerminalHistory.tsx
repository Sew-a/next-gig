"use client";
import { TERMINAL_RESPONSES } from "@/src/utils/terminalCom";
import { useState, useEffect } from "react";

const TERMINAL_STORAGE_KEY = "terminal_log";

export function useTerminalHistory() {
  const [history, setHistory] = useState<string[]>(() => {
    const saved = sessionStorage.getItem(TERMINAL_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [TERMINAL_RESPONSES.INITIAL];
  });

  useEffect(() => {
    if (history.length > 0) {
      sessionStorage.setItem(TERMINAL_STORAGE_KEY, JSON.stringify(history));
    }
  }, [history]);

  const push = (...lines: string[]) =>
    setHistory((prev) => [...prev, ...lines]);

  const clear = () => {
    setHistory([]);
    sessionStorage.removeItem(TERMINAL_STORAGE_KEY);
  };

  return { history, push, clear };
}
