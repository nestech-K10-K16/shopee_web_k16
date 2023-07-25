import "./index.css";
import Input from "../../../common/input";

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
                <i class="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>

            <div className="footer-bottom__right-side__contact d-flex justify-content-end">
              <a className="text-dark-silver" href="/">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>

              <a className="text-dark-silver ms-5" href="/">
                <i class="fa-brands fa-facebook-f"></i>
              </a>

              <a className="text-dark-silver ms-5" href="/">
                <i class="fa-brands fa-instagram"></i>
              </a>

              <a className="text-dark-silver ms-5" href="/">
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
