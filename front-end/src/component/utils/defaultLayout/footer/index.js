import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { Input } from "component/common";
import { PATHNAME_LIST } from "router/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <section id="footer">
        <div className="footer-top border-0-5px-solid-bright-gray mb-4"></div>

        <div className="footer-bottom d-flex justify-content-between">
          <div className="footer-bottom__left-side">
            <div className="d-flex mb-5">
              <Link
                className="heading-05 text-dark-silver text-decoration-none me-3"
                to={PATHNAME_LIST.CONTACT}
              >
                CONTACT
              </Link>

              <Link className="heading-05 text-dark-silver text-decoration-none me-3">
                TERMS OF SERVICES
              </Link>

              <Link className="heading-05 text-dark-silver text-decoration-none">
                SHIPPING AND RETURNS
              </Link>
            </div>

            <Link
              className="heading-05 text-dark-silver text-decoration-none"
              to={PATHNAME_LIST.PRIVACY}
            >
              © 2021 Shelly. Terms of use and privacy policy.
            </Link>
          </div>

          <div className="footer-bottom__right-side">
            <div className="footer-bottom__right-side__give-email d-flex align-items-center mb-4">
              <Input
                className="heading-05 w-100"
                placeholder="Give an email, get the newsletter."
              ></Input>

              <a className="text-dark-silver" href="/">
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>

            <div className="footer-bottom__right-side__contact d-flex justify-content-end">
              <Link className="text-dark-silver">
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </Link>

              <Link className="text-dark-silver ms-4">
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </Link>

              <Link className="text-dark-silver ms-4">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </Link>

              <Link className="text-dark-silver ms-4">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
