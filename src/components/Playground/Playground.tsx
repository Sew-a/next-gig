import "./styles.scss";
import { useProductSearch } from "./useProductSearch";
import SearchBar from "./SearchBar";
import ProductGrid from "./ProductGrid";

export default function PlaygroundPage() {
  const {
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
  } = useProductSearch();

  return (
    <section className="playground-section">
      <SearchBar
        searchQuery={searchQuery}
        suggestions={suggestions}
        suggestionsOpen={suggestionsOpen}
        activeIndex={activeIndex}
        onInputChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onSearch={runSearch}
        onFocus={() => setSuggestionsOpen(true)}
        onBlur={() => setTimeout(() => setSuggestionsOpen(false), 150)}
        onSuggestionMouseDown={(title) => runSearch(title)}
        onSuggestionHover={setActiveIndex}
      />

      <ProductGrid
        products={visibleProducts}
        activeSearch={activeSearch}
        isLoading={isLoading}
        error={error}
      />
    </section>
  );
}