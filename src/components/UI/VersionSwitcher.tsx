"use client";
import { useAppContext } from "@/src/contexts/appContext";
import { useWindowSize } from "@/src/hooks/useWindowSize";
import { Sun, Moon } from "lucide-react";
import "./ThemeSwitcher.scss";

const VersionSwitcher = () => {
  const { isIdeMode, setIsIdeMode, theme, setTheme } = useAppContext();
  const size = useWindowSize();
  const isMobile = size.width < 1099;

  return (
    <div className="version-switcher-container">
      <div className="theme-switcher">
        <button
          className="theme-switcher__toggle"
          onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          <span className="theme-switcher__icon">
            {theme === "dark" ? <Moon size={14} /> : <Sun size={14} />}
          </span>
          <span className="theme-switcher__track">
            <span className="theme-switcher__thumb" />
          </span>
        </button>
      </div>
      {!isMobile && (
        <button
          onClick={() => setIsIdeMode((prev) => !prev)}
          className="mode-switcher"
        >
          {isIdeMode ? "SITE MODE" : "IDE Mode"}
        </button>
      )}
    </div>
  );
};

export default VersionSwitcher;
