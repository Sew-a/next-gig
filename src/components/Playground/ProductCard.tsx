import type { Product } from "./types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product">
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
  );
}