// ServicesSection.jsx
import React from 'react';
import './ServicesSection.css';

const services = [
  {
    id: 1,
    icon: "📷",
    title: "Professional Photography",
    description: "High-quality photography for weddings, events, portraits, and commercial projects.",
    features: ["4K Resolution", "Professional Editing", "Fast Delivery"],
    hoverColor: "#4a6fa8"
  },
  {
    id: 2,
    icon: "🎬",
    title: "Video Production",
    description: "Cinematic video production and editing for commercials, events, and social media.",
    features: ["4K/8K Video", "Drone Footage", "Color Grading"],
    hoverColor: "#e74c3c"
  },
  {
    id: 3,
    icon: "✨",
    title: "Photo Editing",
    description: "Professional photo retouching, color correction, and creative editing services.",
    features: ["Retouching", "Color Correction", "Background Removal"],
    hoverColor: "#2ecc71"
  },
  {
    id: 4,
    icon: "🎨",
    title: "Creative Direction",
    description: "Complete creative direction for shoots, campaigns, and brand storytelling.",
    features: ["Concept Development", "Art Direction", "Style Guides"],
    hoverColor: "#9b59b6"
  }
];

const ServicesSection = React.forwardRef((props, ref) => {
  return (
    <section className="services-section" ref={ref}>
      <div className="services-container">
        {/* Left Column - Headline */}
        <div className="services-header">
          <div className="section-label">
            <span className="label-number">01</span>
            <span className="label-text">SERVICES</span>
          </div>
          <h2 className="services-title">
            Transform Your Vision Into
            <span className="title-highlight"> Visual Masterpieces</span>
          </h2>
          <p className="services-description">
            We blend creativity with technology to deliver stunning visual content 
            that captivates audiences and elevates brands.
          </p>
        </div>

        {/* Right Column - Services Cards */}
        <div className="services-grid">
          {services.map((service) => (
            <div 
              key={service.id}
              className="service-card"
              style={{ '--hover-color': service.hoverColor }}
            >
              <div className="card-icon">{service.icon}</div>
              
              <h3 className="card-title">{service.title}</h3>
              
              <p className="card-description">{service.description}</p>
              
              <div className="card-features">
                {service.features.map((feature, index) => (
                  <span key={index} className="feature-tag">{feature}</span>
                ))}
              </div>
              
              <div className="card-footer">
                <button className="service-cta">
                  <span>Learn More</span>
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </button>
                <div className="card-index">0{service.id}</div>
              </div>
              
              {/* Hover Effect Elements */}
              <div className="card-hover-bg"></div>
              <div className="card-sparkles">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="sparkle"></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default ServicesSection;