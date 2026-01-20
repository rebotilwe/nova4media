import React from "react";
import { Link } from "react-router-dom";
import "./Pricing.css";

function Pricing() {
  const pricingPlans = [
    {
      id: 1,
      title: "Photography Basic",
      price: "R2,500",
      features: ["2 Hours Coverage", "20 Edited Photos", "Online Gallery"],
    },
    {
      id: 2,
      title: "Photography Pro",
      price: "R4,800",
      features: ["4 Hours Coverage", "45 Edited Photos", "Online Gallery + Prints"],
    },
    {
      id: 3,
      title: "Videography Package",
      price: "R6,500",
      features: ["4 Hours Shoot", "Full Edited Video", "Highlight Teaser"],
    },
    {
      id: 4,
      title: "Premium Combo",
      price: "R9,000",
      features: ["Photography + Videography", "6 Hours Coverage", "Online Gallery + Full Video"],
    },
  ];

  return (
    <section className="pricing-page">
      <div className="pricing-container">

        {/* Floating Shapes */}
        <div className="floating-shape shape1"></div>
        <div className="floating-shape shape2"></div>
        <div className="floating-shape shape3"></div>

        {/* Header */}
        <div className="pricing-header">
          <h2>
            Our <span>Pricing</span>
          </h2>
          <p>
            Premium photography & videography services designed to capture every moment in style.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className="pricing-card">
              <h3>{plan.title}</h3>
              <div className="price">{plan.price}</div>
              <ul className="features">
                {plan.features.map((feat, idx) => (
                  <li key={idx}>{feat}</li>
                ))}
              </ul>
              {/* Link button to contactPage */}
              <Link to="/contactPage" className="contact-btn">
                Contact Us
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
