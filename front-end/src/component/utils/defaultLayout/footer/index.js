import "./index.css";
import Input from "../../../common/input";
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
              <a
                className="heading-05 text-dark-silver text-decoration-none me-3"
                href="/contact"
              >
                CONTACT
              </a>

              <a
                className="heading-05 text-dark-silver text-decoration-none me-3"
                href="/"
              >
                TERMS OF SERVICES
              </a>

              <a
                className="heading-05 text-dark-silver text-decoration-none"
                href="/"
              >
                SHIPPING AND RETURNS
              </a>
            </div>

            <a
              className="heading-05 text-dark-silver text-decoration-none"
              href="/"
            >
              © 2021 Shelly. Terms of use and privacy policy.
            </a>
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
              <a className="text-dark-silver" href="/">
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </a>

              <a className="text-dark-silver ms-4" href="/">
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>

              <a className="text-dark-silver ms-4" href="/">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>

              <a className="text-dark-silver ms-4" href="/">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
