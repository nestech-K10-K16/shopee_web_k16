import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../configs/fontIcon";
import "./footer.css";

const Footer = () => {
  return (
    <div className="Shoppe__contact">
      <div className="Shoppe__contact-content">
        <div className="Shoppe__contact-links-1">
          <h4>CONTACT</h4>
          <h4>TERMS OF SERVICES</h4>
          <h4>SHIPPING AND RETURNS</h4>
        </div>
        <div className="Shoppe__contact-links-2">
          <input
            type="email"
            placeholder="Give an email, get the newsletter."
          ></input>
          <FontAwesomeIcon className="icon" icon="fa-solid fa-arrow-right" />
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
