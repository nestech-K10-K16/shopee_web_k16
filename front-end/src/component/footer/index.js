import React from "react";
import "./index.css";

const index = () => {
  return (
    <footer id="footer">
      <div className=" footer-top border-0-5px-solid-black"></div>

      <div className="footer-bottom">
        <div className="footer-bottom__left-side">
          <div className="display-flex">
            <p className="heading-05 margin-right-2rem">CONTACT</p>
            <p className="heading-05 margin-right-2rem">TERMS OF SERVICES</p>
            <p className="heading-05 margin-right-2rem">SHIPPING AND RETURNS</p>
          </div>

          <p className="heading-05">
            © 2021 Shelly. Terms of use and privacy policy.
          </p>
        </div>

        <div className="footer-bottom__right-side">
          <div className="footer-bottom__right-side__title">
            <p>Give an email, get the newsletter.</p>

            <i class="fa-solid fa-arrow-right"></i>
          </div>

          <div className="footer-bottom__right-side__line-2 border-0-5px-solid-black"></div>

          <div className="footer-bottom__right-side__contact-list">
            <a>
              <i class="fa-brands fa-linkedin-in"></i>
            </a>

            <a>
              <i class="fa-brands fa-facebook-f"></i>
            </a>

            <a>
              <i class="fa-brands fa-instagram"></i>
            </a>

            <a>
              <i class="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
