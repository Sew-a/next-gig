import { useState, useEffect, useRef } from "react";
import { Action } from "./characterConstants";

export function useCharacterLogic() {
  const [isRunning, setIsRunning] = useState(false);
  const [currentAction, setCurrentAction] = useState<Action>("idle");
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const keysPressed = useRef<Set<string>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setIsRunning(true);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        if (keysPressed.current.size === 0) {
          setIsRunning(false);
        }
      }, 250);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      // Movement keys
      if (["a", "d", "arrowleft", "arrowright"].includes(key)) {
        keysPressed.current.add(key);
        setIsRunning(true);
      }
      // Action keys
      if (key === " ") {
        e.preventDefault();
        setCurrentAction("jump");
      }
      // Kick is currently disabled as per request
      /* 
      if (key === "f") {
        setCurrentAction("kick");
      }
      */
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (["a", "d", "arrowleft", "arrowright"].includes(key)) {
        keysPressed.current.delete(key);
        if (keysPressed.current.size === 0) {
          setIsRunning(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, true);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  const handleActionComplete = () => {
    setCurrentAction("idle");
  };

  const triggerKick = () => {
    // Commented out as per request
    // setCurrentAction("kick");
  };

  return {
    isRunning,
    currentAction,
    handleActionComplete,
    triggerKick,
  };
}
