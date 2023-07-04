import "./index.css";

const Contact = () => {
  return (
    <main>
      <section id="contact">
        <div className="contact__content">
          <div className="contact__content__heading">
            <p className="heading-01">Contact Us</p>

            <p className="heading-03">
              Say Hello send us your thoughts about our products or share your
              ideas with our Team!
            </p>
          </div>

          <form className="contact__content__info-customer">
            <div>
              <input
                className="border-0-5px-solid-bright-gray-outline-none-border-top-0-border-left-0-border-right-0"
                type="text"
                placeholder="First name"
              ></input>

              <input
                className="border-0-5px-solid-bright-gray-outline-none-border-top-0-border-left-0-border-right-0"
                type="text"
                placeholder="Last name"
              ></input>
            </div>

            <div>
              <input
                className="border-0-5px-solid-bright-gray-outline-none-border-top-0-border-left-0-border-right-0"
                type="text"
                placeholder="Email"
              ></input>

              <input
                className="border-0-5px-solid-bright-gray-outline-none-border-top-0-border-left-0-border-right-0"
                type="text"
                placeholder="Subject"
              ></input>
            </div>

            <input
              className="border-0-5px-solid-bright-gray-outline-none-border-top-0-border-left-0-border-right-0"
              type="text"
              placeholder="Message"
            ></input>

            <a
              className="background-color-black-color-white-text-decoration-none-padding-1rem-4rem-border-radius-6px"
              href="#"
            >
              SEND
            </a>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
