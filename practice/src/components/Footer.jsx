import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div>
          <h2>Rama Auto Parts</h2>
          <p>Automotive parts and maintenance essentials.</p>
        </div>

        <nav aria-label="Footer navigation">
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>

      <div className="container footer-bottom">
        © {new Date().getFullYear()} Rama Auto Parts.
        All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;