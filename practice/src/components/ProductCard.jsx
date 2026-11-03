function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-icon" aria-hidden="true">
        {product.icon}
      </div>

      <span className="product-category">
        {product.category}
      </span>

      <h3>{product.name}</h3>
      <p>{product.description}</p>
    </article>
  );
}

export default ProductCard;