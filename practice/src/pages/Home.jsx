import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/product.js";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <span className="eyebrow">
            YOUR AUTOMOTIVE PARTS PARTNER
          </span>

          <h1>
            Quality Parts.
            <br />
            <span>Better Performance.</span>
          </h1>

          <p>
            Welcome to Rama Auto Parts. Explore automotive
            components, maintenance essentials, and information
            to help keep your vehicle running smoothly.
          </p>

          <div className="hero-actions">
            <a href="#products" className="btn btn-primary">
              Explore Parts
            </a>

            <Link to="/about" className="btn btn-outline">
              About Our Business
            </Link>
          </div>
        </div>
      </section>

      <section id="products" className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">OUR CATEGORIES</span>
            <h2>Explore Auto Parts</h2>
            <p>
              Discover components and maintenance essentials
              for your automotive needs.
            </p>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Looking for the right auto part?</h2>
          <p>
            Contact our team to ask about parts and availability.
          </p>
          <Link to="/about" className="btn btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;