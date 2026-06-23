"use client";
import { useAppContext } from "@/src/contexts/appContext";
import { useWindowSize } from "@/src/hooks/useWindowSize";

const VersionSwitcher = () => {
  const { isIdeMode, setIsIdeMode } = useAppContext();
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
    </div>
  );
};

export default VersionSwitcher;
