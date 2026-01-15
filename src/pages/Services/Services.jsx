// components/Services/Services.js - UPDATED
import React from 'react';
import './Services.css';

const services = [
  { number: "01", icon: "📸", title: "Wedding Photography", desc: "Capturing love stories with elegance and artistry." },
  { number: "02", icon: "🎨", title: "Portrait Photography", desc: "Personalized portraits that highlight personality and style." },
  { number: "03", icon: "🏞️", title: "Landscape Photography", desc: "Stunning visuals of natural and urban landscapes." },
  { number: "04", icon: "📂", title: "Event Photography", desc: "Documenting corporate and private events with excellence." },
];

function Services() {
return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Best Services</span>
          <h2 className="section-title">What We Offer</h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-number">{service.number}</div>
              <div className="service-icon">{service.icon}</div>
              <h4>{service.title}</h4>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;