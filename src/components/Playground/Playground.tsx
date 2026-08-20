import { useEffect, useMemo, useState } from "react";
import "./styles.scss";
import { useQuery } from "@tanstack/react-query";
import { useDebouncedValue } from "@/src/hooks/useDebouncedValue";

const SEARCH_DELAY = 500;

type fetchedData = {
  id: number;
  title: string;
  price: number;
  description?: string;
  category?: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
}

export default function PlaygroundPage() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeSearch, setActiveSearch] = useState<string>("");
  const [searchResults, setSearchResults] = useState<fetchedData[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [suggestionsOpen, setSuggestionsOpen] = useState<boolean>(false);

  const { data, error, isLoading } = useQuery({
    queryKey: ["products-list"],
    queryFn: () =>
      fetch("https://fakestoreapi.com/products").then((res) => res.json()) as Promise<fetchedData[]>,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  const debouncedSearchTerm = useDebouncedValue(searchQuery, SEARCH_DELAY);

  const getSearchResults = (query: string): fetchedData[] => {
    const normalized = query.trim().toLowerCase();
    if (!normalized || !data) return [];

    const results = data.filter(
      (product: fetchedData) =>
        product.title.toLowerCase().includes(normalized) ||
        product.category?.toLowerCase().includes(normalized),
    );

    return results;
  };

  const suggestions = useMemo(
    () => (data ? getSearchResults(searchQuery).slice(0, 8) : []),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data, searchQuery],
  );

  const visibleProducts = useMemo(() => {
    if (!data) return [];
    if (!activeSearch) return data;
    return searchResults;
  }, [data, activeSearch, searchResults]);

  const runSearch = (query: string) => {
    const normalized = query.trim();
    setSearchQuery(normalized);
    setActiveSearch(normalized);
    setSearchResults(getSearchResults(normalized));
    setSuggestionsOpen(false);
    setActiveIndex(-1);
  };

  useEffect(() => {
    const normalized = debouncedSearchTerm.trim();
    if (!normalized) {
      setActiveSearch("");
      setSearchResults([]);
      return;
    }
    setActiveSearch(normalized);
    setSearchResults(getSearchResults(normalized));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setActiveIndex(-1);
    setSuggestionsOpen(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSuggestionsOpen(true);
      setActiveIndex((prev) => (prev + 1) % suggestions.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex(
        (prev) => (prev - 1 + suggestions.length) % suggestions.length,
      );
    } else if (e.key === "Enter") {
      if (activeIndex >= 0 && suggestions[activeIndex]) {
        runSearch(suggestions[activeIndex].title);
      } else {
        runSearch(searchQuery);
      }
    } else if (e.key === "Escape") {
      setSuggestionsOpen(false);
      setActiveIndex(-1);
    }
  };

  return (
    <section className="playground-section">
      <div className="search-wrapper">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={() => setSuggestionsOpen(true)}
            onBlur={() => setTimeout(() => setSuggestionsOpen(false), 150)}
            role="combobox"
            aria-autocomplete="list"
            aria-haspopup="listbox"
            aria-expanded={suggestionsOpen && suggestions.length > 0}
            aria-controls="search-suggestions"
            aria-activedescendant={
              activeIndex >= 0 ? `option-${activeIndex}` : undefined
            }
          />
          <button onClick={() => runSearch(searchQuery)}>
            Search
          </button>
        </div>

        {suggestionsOpen && suggestions.length > 0 && (
          <ul id="search-suggestions" role="listbox" className="suggestions">
            {suggestions.map((item: fetchedData, idx: number) => (
              <li
                key={item.id}
                id={`option-${idx}`}
                role="option"
                aria-selected={idx === activeIndex}
                className={idx === activeIndex ? "active" : ""}
                onMouseDown={(e) => {
                  e.preventDefault();
                  runSearch(item.title);
                }}
                onMouseEnter={() => setActiveIndex(idx)}
              >
                <span className="suggestion-title">{item.title}</span>
                <span className="suggestion-category">{item.category}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="products-grid">
        {isLoading ? (
          <div className="loading">Loading...</div>
        ) : error ? (
          <div className="error">Error: {error.message}</div>
        ) : visibleProducts.length === 0 ? (
          <div className="loading">
            No products found for &quot;{activeSearch}&quot;
          </div>
        ) : (
          visibleProducts.map((product: fetchedData) => (
            <div className="product" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p className="product-price">${product.price}</p>
              <p className="product-description">{product.description}</p>
              <div className="product-footer">
                <span className="category">{product.category}</span>
                <span className="rating">
                  Rating: {product.rating?.rate}
                  <span className="rating-count">
                    {" "}
                    ({product.rating?.count})
                  </span>
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
