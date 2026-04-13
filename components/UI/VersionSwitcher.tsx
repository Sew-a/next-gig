"use client";
import { useAppContext } from "@/contexts/appContext";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Moon } from "lucide-react";

const VersionSwitcher = () => {
  const { isIdeMode, setIsIdeMode, setTheme } = useAppContext();
  const size = useWindowSize();
  const isMobile = size.width < 1099;

  return (
    <div className="version-switcher-container">
      {!isMobile && (
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
        <Moon size={24} />
      </button>
    </div>
  );
};

export default VersionSwitcher;

