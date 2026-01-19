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
         +27 78 152 6754
        </span>

        <span className="contact-item">
          <FiMail />
         info@nova4media.co.za
        </span>
      </div>
    </div>
  );
}

export default ContactBar;
