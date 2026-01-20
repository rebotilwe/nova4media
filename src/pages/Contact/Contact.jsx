// components/ContactSection/ContactSection.jsx
import React, { useEffect, useRef } from "react";
import "./Contact.css";

function ContactSection() {
  const sectionRef = useRef(null);
  const numberRefs = useRef([]);

  useEffect(() => {
    const animateValue = (element, start, end, duration) => {
      let startTimestamp = null;

      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value;

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");

          numberRefs.current.forEach((ref) => {
            if (ref) {
              const finalValue = parseInt(ref.dataset.count, 10);
              animateValue(ref, 0, finalValue, 1800);
            }
          });

          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="contact-cta-section">
      {/* Floating background */}
      <div className="floating-elements">
        <span className="floating-circle" />
        <span className="floating-circle" />
        <span className="floating-circle" />
      </div>

      <div className="particle-bg">
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className="particle" />
        ))}
      </div>

      <div className="container">
        <div className="cta-content">
          <div className="section-label">
            <span className="label-line" />
            <span className="label-text">READY TO START?</span>
          </div>

          <h2>
            Let's Create Something <span className="accent">Amazing</span> Together
          </h2>

          <p className="cta-description">
            Have a project in mind? Let's discuss how we can bring your vision to
            life with stunning photography and creative storytelling.
          </p>

          <div className="cta-buttons">
            <a href="/contactPage" className="btn-primary">
              Start a Project
              <span className="btn-sparkle">✨</span>
            </a>

            <a href="tel:+27 78 152 6754" className="btn-outline">
              Call Us Now
            </a>
          </div>
        </div>

        {/* Stats */}
        {/* <div className="cta-stats">
          {[
            { label: "Projects Completed", value: 150 },
            { label: "Happy Clients", value: 98 },
            { label: "Years Experience", value: 5 },
          ].map((stat, index) => (
            <div key={index} className="stat-item">
              <div
                className="stat-number"
                data-count={stat.value}
                ref={(el) => (numberRefs.current[index] = el)}
              >
                0
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}

export default ContactSection;
