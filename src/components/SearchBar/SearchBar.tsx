"use client";
import { useState } from "react";
import { SearchBarProps } from "./types";
import "./styles.scss";

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  const suggestions = [
    "Three.js",
    "Shader",
    "Particles",
    "WebGL",
    "Animation",
  ];

  const handleSearch = (term: string) => {
    setValue(term);
    setShow(false);
    onSearch?.(term);
  };

  return (
    <div className="search-bar-section">
      <div className="search-bar">
        <input
          className="search-input"
          placeholder="Search topics..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setShow(true)}
          onBlur={() => setTimeout(() => setShow(false), 200)}
        />
        {show && (
          <ul className="list-of-suggestions">
            {suggestions
              .filter((s) => s.toLowerCase().includes(value.toLowerCase()))
              .map((s) => (
                <li key={s} onMouseDown={() => handleSearch(s)}>
                  {s}
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
}
