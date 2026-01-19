import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        {/* Brand */}
        <div className="footer-brand">
          <h3 className="footer-logo">Nova4Media</h3>
          <p>
            Capturing moments that matter. We create visual stories through
            professional photography and creative storytelling.
          </p>

          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
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
            <li>📞+27 78 152 6754</li>
            <li>✉️ info@nova4media.co.za</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Photia Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
