import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobile = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const closeMobile = () => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">

        {/* Logo */}
        <Link to="/" className="logo">
          NOVA<span>.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className={`nav-links ${isMobileOpen ? "open" : ""}`}>
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
            onClick={closeMobile}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
            onClick={closeMobile}
          >
            About Us
          </Link>

          <Link
            to="/projects"
            className={location.pathname === "/projects" ? "active" : ""}
            onClick={closeMobile}
          >
            Project
          </Link>

          {/* Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => toggleDropdown("pages")}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <button className="dropdown-toggle">
              Pages ▾
            </button>

            {activeDropdown === "pages" && (
              <div className="dropdown-menu">
                <Link to="/services" className="dropdown-item" onClick={closeMobile}>
                  Service
                </Link>
                <Link to="/service-details" className="dropdown-item" onClick={closeMobile}>
                  Service Details
                </Link>
                <Link to="/team" className="dropdown-item" onClick={closeMobile}>
                  Team
                </Link>
                <Link to="/team-details" className="dropdown-item" onClick={closeMobile}>
                  Team Details
                </Link>
                <Link to="/pricing" className="dropdown-item" onClick={closeMobile}>
                  Pricing Table
                </Link>
                <Link to="/testimonials" className="dropdown-item" onClick={closeMobile}>
                  Testimonial
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/blog"
            className={location.pathname === "/blog" ? "active" : ""}
            onClick={closeMobile}
          >
            Blog
          </Link>

          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
            onClick={closeMobile}
          >
            Contact Us
          </Link>
        </nav>

        {/* CTA */}
        <div className="cta-group">
          <Link to="/contact" className="lets-talk-btn">
            LET’S TALK
          </Link>

          <button className="arrow-btn" aria-label="Open">
            →
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={toggleMobile}>
          {isMobileOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;
