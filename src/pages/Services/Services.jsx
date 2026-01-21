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
      <div className="animated-gradient-bg"></div>
      <div className="floating-elements-services">
        <span className="float-circle circle-1"></span>
        <span className="float-circle circle-2"></span>
        <span className="float-circle circle-3"></span>
      </div>

      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Best Services</span>
          <h2 className="section-title">What We Offer</h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-number-circle">
                <span className="service-number">{service.number}</span>
              </div>
              <div className="service-icon">{service.icon}</div>
              <h4 className="service-title">{service.title}</h4>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
