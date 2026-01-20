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

  // Dropdown handlers with delay tolerance
  const openDropdown = () => {
    setActiveDropdown("pages");
  };

  const closeDropdown = () => {
    setTimeout(() => setActiveDropdown(null), 150); // 150ms delay forgives quick mouse moves
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">

        {/* Logo */}
        <Link to="/" className="logo">
          NOVA 4<span>.</span>
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

          {/* Fixed Dropdown */}
          <div className="dropdown">
            <button
              className="dropdown-toggle"
              onClick={() =>
                activeDropdown === "pages"
                  ? setActiveDropdown(null)
                  : setActiveDropdown("pages")
              }
            >
              Pages ▾
            </button>

            {activeDropdown === "pages" && (
              <div 
                className="dropdown-menu"
                onMouseEnter={openDropdown}  // ✅ Keeps open on menu hover
                onMouseLeave={closeDropdown} // ✅ Closes only after leaving entire menu
              >
                <Link
                  to="/services"
                  className="dropdown-item"
                  onClick={closeMobile}
                >
                  Services
                </Link>

                <Link
                  to="/blog-preview"
                  className="dropdown-item"
                  onClick={closeMobile}
                >
                  Blog
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/pricing"
            className={location.pathname === "/pricing" ? "active" : ""}
            onClick={closeMobile}
          >
            Pricing
          </Link>

          <Link
            to="/contactPage"
            className={location.pathname === "/contactPage" ? "active" : ""}
            onClick={closeMobile}
          >
            Contact Us
          </Link>
        </nav>

        {/* CTA */}
        <div className="cta-group">
          <Link to="/contact" className="lets-talk-btn">
            LET'S TALK
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
