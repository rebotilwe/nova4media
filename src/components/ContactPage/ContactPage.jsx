// components/ContactPage/ContactPage.jsx
import React from "react";
import "./ContactPage.css";

function ContactPage() {
  return (
    <section className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="hero-overlay">
          <h1>Let’s Create Something Incredible Together</h1>
          <p>
            Have a project in mind? Reach out for professional photography,
            videography, and creative media solutions.
          </p>
        </div>
        <div className="floating-shapes">
          <span className="shape circle"></span>
          <span className="shape triangle"></span>
          <span className="shape square"></span>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="contact-main container">
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send Message</h2>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Message" rows="6" required></textarea>
            </div>
            <button type="submit" className="primary-btn">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="contact-details">
          <h2>Contact Info</h2>
          <p><strong>Phone:</strong> +27 11 123 4567</p>
          <p><strong>Email:</strong> info@nova4media.co.za</p>
          <p><strong>Address:</strong> 123 Nova Street, Northcliff, Johannesburg, South Africa</p>
          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.012345678901!2d28.000000!3d-26.000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9579a123456789%3A0xabcdef1234567890!2sNorthcliff%2C%20Randburg%2C%20Johannesburg%2C%20South%20Africa!5e0!3m2!1sen!2s!4v1673456789012!5m2!1sen!2s"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Nova4Media Location"
        ></iframe>
      </div>
    </section>
  );
}

export default ContactPage;
