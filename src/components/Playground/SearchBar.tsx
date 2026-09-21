import type { Product } from "./types";
import { SEARCH_BUTTON_LABEL, SEARCH_PLACEHOLDER } from "./constants";

interface SearchBarProps {
  searchQuery: string;
  suggestions: Product[];
  suggestionsOpen: boolean;
  activeIndex: number;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onSearch: (query: string) => void;
  onFocus: () => void;
  onBlur: () => void;
  onSuggestionMouseDown: (title: string) => void;
  onSuggestionHover: (index: number) => void;
}

export default function SearchBar({
  searchQuery,
  suggestions,
  suggestionsOpen,
  activeIndex,
  onInputChange,
  onKeyDown,
  onSearch,
  onFocus,
  onBlur,
  onSuggestionMouseDown,
  onSuggestionHover,
}: SearchBarProps) {
  return (
    <div className="search-wrapper">
      <div className="search-bar">
        <input
          type="text"
          placeholder={SEARCH_PLACEHOLDER}
          value={searchQuery}
          onChange={onInputChange}
          onKeyDown={onKeyDown}
          onFocus={onFocus}
          onBlur={onBlur}
          role="combobox"
          aria-autocomplete="list"
          aria-haspopup="listbox"
          aria-expanded={suggestionsOpen && suggestions.length > 0}
          aria-controls="search-suggestions"
          aria-activedescendant={activeIndex >= 0 ? `option-${activeIndex}` : undefined}
        />
        <button onClick={() => onSearch(searchQuery)}>
          {SEARCH_BUTTON_LABEL}
        </button>
      </div>

      {suggestionsOpen && suggestions.length > 0 && (
        <ul id="search-suggestions" role="listbox" className="suggestions">
          {suggestions.map((item, idx) => (
            <li
              key={item.id}
              id={`option-${idx}`}
              role="option"
              aria-selected={idx === activeIndex}
              className={idx === activeIndex ? "active" : ""}
              onMouseDown={(e) => {
                e.preventDefault();
                onSuggestionMouseDown(item.title);
              }}
              onMouseEnter={() => onSuggestionHover(idx)}
            >
              <span className="suggestion-title">{item.title}</span>
              <span className="suggestion-category">{item.category}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}