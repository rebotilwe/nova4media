// components/ContactBar/ContactBarPremium.jsx
import React, { useState, useEffect } from "react";
import { FiPhone, FiMail, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { IoLanguage } from "react-icons/io5";
import "./ContactBar.css";

function ContactBarPremium() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const languages = ["EN", "ES", "FR", "DE", "ZH"];

  return (
    <div className={`contact-bar-premium ${scrolled ? 'scrolled' : ''} ${isExpanded ? 'expanded' : ''}`}>
      <div className="contact-bar-container">
        {/* Promo Section with Animation */}
        <div className="promo-section">
          <div className="promo-marquee">
            <span className="promo-item">
              <span className="promo-badge">NEW</span>
              Explore traffic sources, page behavior
            </span>
            <span className="promo-item">
              <span className="promo-badge">HOT</span>
              Studio photography sessions available
            </span>
            <span className="promo-item">
              <span className="promo-badge">TRENDING</span>
              Book your 2026 wedding photography
            </span>
          </div>
        </div>

        {/* Contact & Language Section */}
        <div className="contact-language-section">
          {/* Language Selector */}
          <div className="language-selector">
            <button 
              className="language-btn"
              onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
            >
              <IoLanguage className="language-icon" />
              <span className="language-text">{selectedLanguage}</span>
              {showLanguageDropdown ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            
            {showLanguageDropdown && (
              <div className="language-dropdown">
                {languages.map(lang => (
                  <button
                    key={lang}
                    className={`language-option ${selectedLanguage === lang ? 'selected' : ''}`}
                    onClick={() => {
                      setSelectedLanguage(lang);
                      setShowLanguageDropdown(false);
                    }}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="divider"></div>

          {/* Contact Info with Icons */}
          <div className="contact-info">
            <a href="tel:+1234567890" className="contact-link">
              <div className="contact-icon-wrapper">
                <FiPhone className="contact-icon" />
              </div>
              <span className="contact-text">+123 456 7890</span>
            </a>
            
            <a href="mailto:needhelp@company.com" className="contact-link">
              <div className="contact-icon-wrapper">
                <FiMail className="contact-icon" />
              </div>
              <span className="contact-text">needhelp@company.com</span>
            </a>
          </div>

          {/* Expand/Collapse Button */}
          <button 
            className="expand-btn"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label={isExpanded ? "Collapse" : "Expand"}
          >
            {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
          </button>
        </div>

        {/* Additional Info (Shows when expanded) */}
        <div className="additional-info">
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">Studio Hours</span>
              <span className="info-value">Mon-Fri: 9AM-6PM</span>
            </div>
            <div className="info-item">
              <span className="info-label">Response Time</span>
              <span className="info-value">Within 2 hours</span>
            </div>
            <div className="info-item">
              <span className="info-label">Follow Us</span>
              <div className="social-icons">
                <a href="#" className="social-link">FB</a>
                <a href="#" className="social-link">IG</a>
                <a href="#" className="social-link">TW</a>
                <a href="#" className="social-link">YT</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactBarPremium;