import { useAppContext } from "@/src/contexts/appContext";
import { Sun, Moon } from "lucide-react";
import "./ThemeSwitcher.scss";

const VersionSwitcher = () => {
  const { theme, setTheme } = useAppContext();

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
    </div>
  );
};

export default VersionSwitcher;
