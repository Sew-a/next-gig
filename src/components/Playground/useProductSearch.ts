import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDebouncedValue } from "@/src/hooks/useDebouncedValue";
import type { Product } from "./types";
import { MAX_SUGGESTIONS, PRODUCTS_API_URL, SEARCH_DELAY } from "./constants";

export function useProductSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSearch, setActiveSearch] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);

  const { data, error, isLoading } = useQuery({
    queryKey: ["products-list"],
    queryFn: () =>
      fetch(PRODUCTS_API_URL).then((res) => res.json()) as Promise<Product[]>,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  const debouncedSearchTerm = useDebouncedValue(searchQuery, SEARCH_DELAY);

  const filterProducts = (query: string): Product[] => {
    const normalized = query.trim().toLowerCase();
    if (!normalized || !data) return [];

    return data.filter(
      (product) =>
        product.title.toLowerCase().includes(normalized) ||
        product.category?.toLowerCase().includes(normalized),
    );
  };

  const suggestions = useMemo(
    () => (data ? filterProducts(searchQuery).slice(0, MAX_SUGGESTIONS) : []),
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
    setSearchResults(filterProducts(normalized));
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
    setSearchResults(filterProducts(normalized));
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

  return {
    searchQuery,
    activeSearch,
    activeIndex,
    suggestions,
    suggestionsOpen,
    visibleProducts,
    isLoading,
    error,
    handleInputChange,
    handleKeyDown,
    runSearch,
    setSuggestionsOpen,
    setActiveIndex,
  };
}