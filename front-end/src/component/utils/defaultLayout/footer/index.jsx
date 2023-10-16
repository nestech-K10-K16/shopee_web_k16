import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { Input } from "component/common";
import { PATHNAME_LIST } from "router/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="border border-solid border-bright-gray mb-4"></div>

      <div className="footer-bottom flex justify-between">
        <div className="footer-bottom__left-side">
          <div className="flex gap-6 mb-8">
            <Link className="heading-05" to={PATHNAME_LIST.CONTACT}>
              CONTACT
            </Link>
            <Link className="heading-05">TERMS OF SERVICES</Link>
            <Link className="heading-05">SHIPPING AND RETURNS</Link>
          </div>

          <Link className="heading-05" to={PATHNAME_LIST.PRIVACY}>
            © 2021 Shelly. Terms of use and privacy policy.
          </Link>
        </div>

        <div className="footer-bottom__right-side">
          <div className="w-80 mb-4">
            <Input
              className="heading-05 w-full pr-4"
              placeholder="Give an email, get the newsletter."
            ></Input>
            <button className="text-dark-silver hover:text-black-1 -ml-4">
              <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
            </button>
          </div>

          <div className="flex justify-end gap-8">
            <Link>
              <FontAwesomeIcon icon="fa-brands fa-linkedin-in" size="lg" />
            </Link>
            <Link>
              <FontAwesomeIcon icon="fa-brands fa-facebook-f" size="lg" />
            </Link>
            <Link>
              <FontAwesomeIcon icon="fa-brands fa-instagram" size="lg" />
            </Link>
            <Link>
              <FontAwesomeIcon icon="fa-brands fa-twitter" size="lg" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
