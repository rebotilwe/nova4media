import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "auto";
  }, [isMobileOpen]);

  const toggleMobile = () => {
    setIsMobileOpen(!isMobileOpen);
    if (!isMobileOpen) setActiveDropdown(null);
  };

  const closeMobile = () => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <Link to="/" className="logo" onClick={closeMobile}>
          NOVA 4<span>.</span>
        </Link>

        <nav className={`nav-links ${isMobileOpen ? "open" : ""}`}>
          <Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={closeMobile}>Home</Link>
          <Link to="/about" className={location.pathname === "/about" ? "active" : ""} onClick={closeMobile}>About Us</Link>
          <Link to="/projects" className={location.pathname === "/projects" ? "active" : ""} onClick={closeMobile}>Projects</Link>

          <div className="dropdown">
            <button
              className="dropdown-toggle"
              onClick={() => setActiveDropdown(activeDropdown === "pages" ? null : "pages")}
            >
              Pages ▾
            </button>

            <div className={`dropdown-menu ${activeDropdown === "pages" ? "open" : ""}`}>
              <Link to="/services" className="dropdown-item" onClick={closeMobile}>Services</Link>
              <Link to="/blog-preview" className="dropdown-item" onClick={closeMobile}>Blog</Link>
            </div>
          </div>

          <Link to="/pricing" className={location.pathname === "/pricing" ? "active" : ""} onClick={closeMobile}>Pricing</Link>
          <Link to="/contactPage" className={location.pathname === "/contactPage" ? "active" : ""} onClick={closeMobile}>Contact Us</Link>
        </nav>

        <div className="cta-group">
          <Link to="/contact" className="lets-talk-btn">LET'S TALK</Link>
          <button className="arrow-btn" aria-label="Open">→</button>
        </div>

        <button className="mobile-toggle" onClick={toggleMobile} aria-label="Toggle Menu">
          {isMobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
