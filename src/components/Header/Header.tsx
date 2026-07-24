"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { routeNames } from "@/src/routes/mainRoutes";
import { useAppContext } from "@/src/contexts/appContext";
import { Menu, X, Sun, Moon } from "lucide-react";
import "./styles.scss";

export default function Header() {
  const pathname = usePathname();
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
    <header className={`header ${isScrolled ? "header--scrolled" : ""} ${isOpen ? "header--menu-open" : ""}`}>
      <div className="header__inner">
        <nav className={`header__nav ${isOpen ? "header__nav--open" : ""}`}>
          {routeNames.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={`header__nav-link ${pathname === route.path ? "active" : ""}`}
            >
              {route.name}
            </Link>
          ))}
        </nav>

        <div className="header__controls">
          <button
            className="header__theme-toggle"
            onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <span className="header__theme-icon">
              {theme === "dark" ? <Moon size={14} /> : <Sun size={14} />}
            </span>
            <span className="header__theme-track">
              <span className="header__theme-thumb" />
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
