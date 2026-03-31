import { useCallback, useEffect, useState } from "react";
import "./styles.scss";
import ActionButton from "../UI/ActionButton";
import { ACTION_BUTTON_TYPE } from "../types";
import { SearchBarProps } from "./types";

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([]);

  // debounced effect for suggestions and propagating term to parent
  useEffect(() => {
    const handler = setTimeout(async () => {
      if (searchTerm.length === 0) {
        setSearchSuggestions([]);
      } else {
        try {
          const res = await fetch(
            `/api/search?q=${encodeURIComponent(searchTerm)}`,
          );
          const data = (await res.json()) as string[];
          setSearchSuggestions(data);
        } catch (err) {
          console.error("Failed to fetch search suggestions", err);
          setSearchSuggestions([]);
        }
      }
    }, 300);

    return () => clearTimeout(handler);
  }, [searchTerm]);

  const handleSuggestionClick = useCallback(
    (suggestion: string) => {
      setSearchTerm(suggestion);
      onSearch(suggestion);
    },
    [onSearch],
  );

  const handleSearch = useCallback(() => {
    onSearch(searchTerm);
  }, [onSearch, searchTerm]);

  return (
    <section className="search-bar-section">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Start Typing"
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul className="list-of-suggestions">
          {searchSuggestions.slice(0, 7).map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      </div>
      <ActionButton
        buttonType={ACTION_BUTTON_TYPE.PRIMARY}
        title="Search..."
        onClick={handleSearch}
      />
    </section>
  );
};

export default SearchBar;
