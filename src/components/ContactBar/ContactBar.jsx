// components/ContactBar/ContactBar.js
import React from "react";
import "./ContactBar.css";
import { FiPhone, FiMail } from "react-icons/fi";

function ContactBar() {
  return (
    <div className="contact-bar-wrapper">
      <div className="contact-pill">
        <span className="promo-text">
          Explore traffic sources, page behavior
        </span>

        <div className="divider" />

        <span className="contact-item">
          <FiPhone />
          +123 456 7890
        </span>

        <span className="contact-item">
          <FiMail />
          needhelp@company.com
        </span>
      </div>
    </div>
  );
}

export default ContactBar;
