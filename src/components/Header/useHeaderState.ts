import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SCROLL_THRESHOLD } from "./constants";

export function useHeaderState() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return { pathname, isOpen, isScrolled, toggleMenu };
}