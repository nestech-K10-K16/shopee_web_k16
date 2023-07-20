import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../configs/fontIcon";
import "./footer.css";

const Footer = () => {
  return (
    <div className="Shoppe__contact">
      <div className="Shoppe__contact-content">
        <div className="Shoppe__contact-links-1">
          <h5>CONTACT</h5>
          <h5>TERMS OF SERVICES</h5>
          <h5>SHIPPING AND RETURNS</h5>
        </div>
        <div className="Shoppe__contact-links-2">
          <input
            type="email"
            placeholder="Give an email, get the newsletter."
          />
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

export default Footer;
