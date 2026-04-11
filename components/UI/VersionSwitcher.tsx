"use client";
import { useAppContext } from "@/contexts/appContext";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useEffect, useState } from "react";

const VersionSwitcher = () => {
  const { isIdeMode, setIsIdeMode, setTheme } = useAppContext();
  const useSize = useWindowSize();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isIdeModeShown = mounted ? useSize?.width >= 900 : true;

  return (
    <div className="version-switcher-container">
      {isIdeModeShown && (
        <button
          onClick={() => setIsIdeMode((prev) => !prev)}
          className="mode-switcher"
          style={{ position: "static", top: "auto", right: "auto" }}
        >
          {isIdeMode ? "SITE MODE" : "IDE Mode"}
        </button>
      )}
      <button
        onClick={() =>
          setTheme((prev) =>
            prev === "default" ? "secondary-theme" : "default",
          )
        }
        className="mode-switcher theme-switcher"
        style={{ position: "static", top: "auto", right: "auto" }}
      >
        {"Switch Color"}
      </button>
    </div>
  );
};

export default VersionSwitcher;

