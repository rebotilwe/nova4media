import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa"; // removed unused icons
import logo from "../../assets/images/logo5.jpg";
import { SiTiktok, SiYoutube } from "react-icons/si"; // TikTok and YouTube icons
function Footer() {
  return (
    <footer className="footer">
      {/* Floating particles */}
      <div className="footer-particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`
          }} />
        ))}
      </div>

      {/* Overlay */}
      <div className="footer-overlay"></div>

      <div className="container footer-grid">

        {/* Brand */}
        <div className="footer-brand">
          <img src={logo} alt="Nova4Media Logo" className="footer-logo-img" />
          <p>
            Capturing moments that matter. We create visual stories through
            professional photography and creative storytelling.
          </p>

          <div className="footer-socials">
  <a 
    href="https://www.facebook.com/profile.php?id=100093254215121" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaFacebookF />
  </a>
  <a 
    href="https://www.instagram.com/nova4media/" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaInstagram />
  </a>
  <a 
    href="https://www.tiktok.com/@nova4mediasa" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <SiTiktok />
  </a>
  <a 
    href="https://www.youtube.com/@nova4media" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <SiYoutube />
  </a>
</div>

        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/blog-preview">Blog</a></li>
            <li><a href="/contactPage">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li>Wedding Photography</li>
            <li>Portrait Photography</li>
            <li>Event Coverage</li>
            <li>Commercial Shoots</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h4>Contact</h4>
          <ul>
            <li>📍 123 Nova Street, Northcliff, Johannesburg, South Africa</li>
            <li>📞 +27 78 152 6754</li>
            <li>✉️ info@nova4media.co.za</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Nova4Media. All rights reserved. 
          <span className="divider">|</span>
          Developed by{" "}
          <a
            href="https://afribizconnect.co.za"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-dev"
          >
            Afribiz Connect
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
