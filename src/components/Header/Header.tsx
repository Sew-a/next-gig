import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { routeNames, paths } from "@/src/routes/mainRoutes";
import { useAppContext } from "@/src/contexts/appContext";
import { Menu, X, Sun, Moon } from "lucide-react";
import "./styles.scss";

const headerRoutes = routeNames.filter((r) => r.path !== paths.resume);

export default function Header() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isIdeMode, setIsIdeMode, theme, setTheme } = useAppContext();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  return (
    <header
      className={`header ${isScrolled ? "header--scrolled" : ""} ${isOpen ? "header--menu-open" : ""}`}
    >
      <div className="header__inner">
        <div className="header__logo">Sev</div>
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

          <button
            onClick={() => setIsIdeMode((prev) => !prev)}
            className={`header__ide-btn ${isIdeMode ? "active" : ""}`}
          >
            {isIdeMode ? "SITE MODE" : "IDE Mode"}
          </button>
        </div>

        <button
          className="header__menu-btn"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
