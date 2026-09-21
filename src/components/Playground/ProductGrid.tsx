import type { Product } from "./types";
import ProductCard from "./ProductCard";
import { LOADING_LABEL, NO_RESULTS_LABEL } from "./constants";

interface ProductGridProps {
  products: Product[];
  activeSearch: string;
  isLoading: boolean;
  error: unknown;
}

function formatError(error: unknown): string {
  if (error instanceof Error) return error.message;
  return "Something went wrong while loading products.";
}

export default function ProductGrid({
  products,
  activeSearch,
  isLoading,
  error,
}: ProductGridProps) {
  return (
    <div className="products-grid">
      {isLoading ? (
        <div className="loading">{LOADING_LABEL}</div>
      ) : error ? (
        <div className="error">Error: {formatError(error)}</div>
      ) : products.length === 0 ? (
        <div className="loading">{NO_RESULTS_LABEL(activeSearch)}</div>
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
}