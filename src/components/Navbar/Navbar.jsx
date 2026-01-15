// components/Navbar/NavbarPremium.jsx
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiChevronDown, FiChevronUp, FiArrowRight, FiSearch, FiUser } from "react-icons/fi";
import "./Navbar.css";

function NavbarPremium() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobile = () => {
    setIsMobileOpen(!isMobileOpen);
    if (!isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMobile = () => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
    document.body.style.overflow = 'auto';
  };

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const pagesMenu = [
    { title: "Service", path: "/services" },
    { title: "Service Details", path: "/service-details" },
    { title: "Team", path: "/team" },
    { title: "Team Details", path: "/team-details" },
    { title: "Pricing Table", path: "/pricing" },
    { title: "Testimonial", path: "/testimonials" },
  ];

  return (
    <>
      <header className={`navbar-premium ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-premium-container">
          {/* Logo */}
          <Link to="/" className="logo-premium" onMouseEnter={() => setHoveredLink('logo')} onMouseLeave={() => setHoveredLink(null)}>
            <span className="logo-text">NOVA</span>
            <span className="logo-highlight">4</span>
            <span className="logo-text">MEDIA</span>
            <div className="logo-dot"></div>
          </Link>

          {/* Desktop Navigation */}
          <nav className={`nav-links-premium ${isMobileOpen ? "open" : ""}`} ref={dropdownRef}>
            <div className="nav-main-links">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About Us" },
                { path: "/projects", label: "Project" },
                { label: "Pages", hasDropdown: true },
                { path: "/blog", label: "Blog" },
                { path: "/contact", label: "Contact Us" },
              ].map((item) => (
                <div key={item.label} className="nav-item-wrapper">
                  {item.hasDropdown ? (
                    <button
                      className={`nav-link-premium ${activeDropdown === "pages" ? "active" : ""}`}
                      onMouseEnter={() => setActiveDropdown("pages")}
                      onClick={() => toggleDropdown("pages")}
                    >
                      {item.label}
                      <span className="dropdown-icon">
                        {activeDropdown === "pages" ? <FiChevronUp /> : <FiChevronDown />}
                      </span>
                      <div className="link-hover-effect"></div>
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className={`nav-link-premium ${location.pathname === item.path ? "active" : ""}`}
                      onClick={closeMobile}
                      onMouseEnter={() => setHoveredLink(item.label)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      {item.label}
                      <div className="link-hover-effect"></div>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Dropdown Menu */}
            {activeDropdown === "pages" && (
              <div className="dropdown-premium" onMouseEnter={() => setActiveDropdown("pages")} onMouseLeave={() => setActiveDropdown(null)}>
                <div className="dropdown-grid">
                  {pagesMenu.map((item) => (
                    <Link
                      key={item.title}
                      to={item.path}
                      className="dropdown-item-premium"
                      onClick={closeMobile}
                    >
                      <span className="dropdown-text">{item.title}</span>
                      <FiArrowRight className="dropdown-arrow" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </nav>

          {/* Right Side Actions */}
          <div className="nav-actions-premium">
            {/* Search Button */}
            <button 
              className="action-btn search-btn"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
            >
              <FiSearch />
            </button>

            {/* Account Button */}
            <button className="action-btn account-btn" aria-label="Account">
              <FiUser />
            </button>

            {/* Main CTA Button */}
            <Link to="/contact" className="lets-talk-btn-premium" onMouseEnter={() => setHoveredLink('cta')} onMouseLeave={() => setHoveredLink(null)}>
              <span className="btn-text">LET'S TALK</span>
              <div className="btn-arrow-wrapper">
                <FiArrowRight className="btn-arrow" />
              </div>
              <div className="btn-glow"></div>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="mobile-toggle-premium" onClick={toggleMobile} aria-label="Menu">
            {isMobileOpen ? (
              <FaTimes className="toggle-icon" />
            ) : (
              <>
                <span className="menu-line"></span>
                <span className="menu-line"></span>
                <span className="menu-line"></span>
              </>
            )}
          </button>
        </div>

        {/* Mobile Overlay Menu */}
        <div className={`mobile-overlay ${isMobileOpen ? "open" : ""}`}>
          <div className="mobile-menu">
            <div className="mobile-header">
              <div className="mobile-logo">NOVA<span>4</span>MEDIA</div>
              <button className="mobile-close" onClick={closeMobile}>
                <FaTimes />
              </button>
            </div>

            <div className="mobile-nav-links">
              <Link to="/" className="mobile-nav-link" onClick={closeMobile}>Home</Link>
              <Link to="/about" className="mobile-nav-link" onClick={closeMobile}>About Us</Link>
              <Link to="/projects" className="mobile-nav-link" onClick={closeMobile}>Project</Link>
              
              <div className="mobile-dropdown">
                <button className="mobile-dropdown-toggle" onClick={() => toggleDropdown("mobile-pages")}>
                  Pages
                  <FiChevronDown className={`dropdown-icon ${activeDropdown === "mobile-pages" ? "rotated" : ""}`} />
                </button>
                {activeDropdown === "mobile-pages" && (
                  <div className="mobile-dropdown-menu">
                    {pagesMenu.map((item) => (
                      <Link key={item.title} to={item.path} className="mobile-dropdown-item" onClick={closeMobile}>
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/blog" className="mobile-nav-link" onClick={closeMobile}>Blog</Link>
              <Link to="/contact" className="mobile-nav-link" onClick={closeMobile}>Contact Us</Link>
            </div>

            <div className="mobile-actions">
              <a href="tel:+1234567890" className="mobile-contact-link">
                <span className="contact-label">Call Us</span>
                <span className="contact-value">+123 456 7890</span>
              </a>
              <Link to="/contact" className="mobile-cta" onClick={closeMobile}>
                Get Started
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>

        {/* Search Overlay */}
        {searchOpen && (
          <div className="search-overlay">
            <div className="search-container">
              <button className="search-close" onClick={() => setSearchOpen(false)}>
                <FaTimes />
              </button>
              <div className="search-input-wrapper">
                <FiSearch className="search-icon" />
                <input 
                  type="text" 
                  className="search-input" 
                  placeholder="Search photography, services, portfolios..." 
                  autoFocus
                />
                <button className="search-submit">Search</button>
              </div>
              <div className="search-suggestions">
                <span className="suggestion-label">Trending:</span>
                <a href="#" className="suggestion">Wedding Photography</a>
                <a href="#" className="suggestion">Portrait Sessions</a>
                <a href="#" className="suggestion">Commercial Shoots</a>
                <a href="#" className="suggestion">Event Coverage</a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Background Blur when mobile menu is open */}
      {isMobileOpen && <div className="menu-backdrop" onClick={closeMobile}></div>}
    </>
  );
}

export default NavbarPremium;