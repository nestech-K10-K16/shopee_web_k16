import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../configs/fontIcon";
import "./contact.css";

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
      <div className="Shoppe__contact-lastPage">
        <div className="Shoppe__contact-copyright">
          <p>
            <span>© 2021 Shelly.</span> Terms of use <span> and </span>
            privacy policy.
          </p>
        </div>
        <div className="Shoppe__contact-icon">
          <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
          <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
          <FontAwesomeIcon icon="fa-brands fa-instagram" />
          <FontAwesomeIcon icon="fa-brands fa-twitter" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
