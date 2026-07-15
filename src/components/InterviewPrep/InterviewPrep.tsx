import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
};

type Status = "idle" | "loading" | "success" | "error";

export function ProductBrowser() {
  const [products, setProducts] = useState<Product[]>([]);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    const controller = new AbortController();

    async function loadProducts() {
      try {
        setStatus("loading");

        const response = await fetch("/api/products", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Request failed");
        }

        const data: Product[] = await response.json();

        setProducts(data);
        setStatus("success");
      } catch (error) {
        if (!(error instanceof DOMException && error.name === "AbortError")) {
          setStatus("error");
        }
      }
    }

    loadProducts();

    return () => controller.abort();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="mx-auto max-w-6xl px-4 py-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Products</h1>
      </header>

      <div className="mb-6">
        <label
          htmlFor="product-search"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Search products
        </label>

        <input
          id="product-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="w-full rounded-md border border-slate-300 px-3 py-2"
          placeholder="Search by title"
        />
      </div>

      {status === "loading" && <p aria-live="polite">Loading products...</p>}

      {status === "error" && (
        <p role="alert" className="text-red-600">
          Could not load products.
        </p>
      )}

      {status === "success" && filteredProducts.length === 0 && (
        <p>No products match your search.</p>
      )}

      {status === "success" && filteredProducts.length > 0 && (
        <ul className="grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <li key={product.id}>
              <article className="h-full rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <img
                  src={product.image}
                  alt={product.title}
                  className="aspect-[4/3] w-full rounded-md object-contain"
                />

                <h2 className="mt-4 text-lg font-semibold text-slate-900">
                  {product.title}
                </h2>

                <p className="mt-1 text-sm text-slate-600">
                  {product.category}
                </p>

                <p className="mt-3 font-bold">${product.price.toFixed(2)}</p>

                <button
                  type="button"
                  className="mt-4 w-full rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Add to cart
                </button>
              </article>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}