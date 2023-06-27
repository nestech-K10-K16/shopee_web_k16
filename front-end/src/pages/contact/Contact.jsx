import React from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div className="Shoppe__contact">
      <div className="Shoppe__contact-content">
        <div className="Shoppe__contact-links-1">
          <h5>CONTACT</h5>
          <h5>TERMS OF SERVICES</h5>
          <h5>SHIPPING AND RETURNS</h5>
        </div>
        <div className="Shoppe__contact-links-2">
          <h5>Give an email, get the newsletter.</h5>
          <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
