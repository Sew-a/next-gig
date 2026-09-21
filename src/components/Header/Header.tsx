import { Link } from "react-router-dom";
import { useAppContext } from "@/src/contexts/appContext";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useHeaderState } from "./useHeaderState";
import { headerRoutes, HEADER_BRAND } from "./constants";
import "./styles.scss";

export default function Header() {
  const { pathname, isOpen, isScrolled, toggleMenu } = useHeaderState();
  const { theme, setTheme } = useAppContext();

  return (
    <header
      className={`header ${isScrolled ? "header--scrolled" : ""} ${isOpen ? "header--menu-open" : ""}`}
    >
      <div className="header__inner">
        <div className="header__logo">{HEADER_BRAND}</div>
        <nav className={`header__nav ${isOpen ? "header__nav--open" : ""}`}>
          {headerRoutes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className={`header__nav-link ${pathname === route.path ? "active" : ""}`}
            >
              {route.name}
            </Link>
          ))}
        </nav>

        <div className="header__controls">
          <button
            className="header__theme-toggle"
            onClick={() =>
              setTheme((prev) => (prev === "dark" ? "light" : "dark"))
            }
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <span className="header__theme-icon">
              {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
            </span>
          </button>
        </div>

        <button
          className="header__menu-btn"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}