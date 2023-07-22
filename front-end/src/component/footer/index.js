import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <footer>
      <section id="footer">
        <div className="footer-top border-0-5px-solid-bright-gray margin-bottom-2rem"></div>

        <div className="footer-bottom d-flex justify-content-between">
          <div className="footer-bottom__left-side">
            <div className="footer-bottom__left-side__title d-flex margin-bottom-4rem">
              <a
                className="heading-05 text-black text-decoration-none margin-right-2rem"
                href="/contact"
              >
                CONTACT
              </a>

              <p className="heading-05 mb-0 margin-right-2rem">
                TERMS OF SERVICES
              </p>

              <p className="heading-05 mb-0 margin-right-2rem">
                SHIPPING AND RETURNS
              </p>
            </div>

            <p className="heading-05">
              © 2021 Shelly. Terms of use and privacy policy.
            </p>
          </div>

          <div className="footer-bottom__right-side">
            <div className="footer-bottom__right-side__give-email d-flex align-items-center margin-bottom-3rem">
              <input
                className="heading-05 border-0-5px-solid-bright-gray-outline-none-border-top-0-border-left-0-border-right-0-height-3rem w-100"
                type="text"
                placeholder="Give an email, get the newsletter."
              ></input>

              <a className="text-black" href="/">
                <i class="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>

            <div className="footer-bottom__right-side__contact d-flex justify-content-end">
              <a className="text-black margin-left-2rem" href="/">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>

              <a className="text-black margin-left-2rem" href="/">
                <i class="fa-brands fa-facebook-f"></i>
              </a>

              <a className="text-black margin-left-2rem" href="/">
                <i class="fa-brands fa-instagram"></i>
              </a>

              <a className="text-black margin-left-2rem" href="/">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
