import React from "react";
import "./index.css";

const index = () => {
  return (
    <footer>
      <section id="footer">
        <div>
          <div className="footer-top border-0-5px-solid-bright-gray"></div>

          <div className="footer-bottom">
            <div className="footer-bottom__left-side">
              <div className="display-flex margin-bottom-4rem">
                <a
                  className="heading-05 color-black-text-decoration-none margin-right-2rem"
                  href="/contact"
                >
                  CONTACT
                </a>
                <p className="heading-05 margin-right-2rem">
                  TERMS OF SERVICES
                </p>
                <p className="heading-05 margin-right-2rem">
                  SHIPPING AND RETURNS
                </p>
              </div>

              <p className="heading-05">
                © 2021 Shelly. Terms of use and privacy policy.
              </p>
            </div>

            <div className="footer-bottom__right-side">
              <div className="footer-bottom__right-side__title">
                <p className="margin-right-5rem">
                  Give an email, get the newsletter.
                </p>

                <i class="fa-solid fa-arrow-right"></i>
              </div>

              <div className="border-0-5px-solid-black margin-top-1-5rem margin-bottom-3rem"></div>

              <div className="footer-bottom__right-side__contact-list">
                <a className="margin-left-2rem">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>

                <a className="margin-left-2rem">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>

                <a className="margin-left-2rem">
                  <i class="fa-brands fa-instagram"></i>
                </a>

                <a className="margin-left-2rem">
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default index;
