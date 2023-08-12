import React from "react";
import { DefaultLayout } from "components";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <DefaultLayout>
        <div className="Shoppe__contact">
          <div className="Shoppe__contact-container">
            <h1>Contact Us</h1>
            <h3>
              Say Hello send us your thoughts about our products or share your
              ideas with our Team!
            </h3>
            <div className="input-type">
              <div className="first">
                <input type="text" placeholder="First name" />
                <input type="email" placeholder="Email" />
              </div>
              <div className="last">
                <input type="text" placeholder="Last name" />
                <input type="text" placeholder="Subject" />
              </div>
            </div>
            <input className="message" type="text" placeholder="Message" />
          </div>
          <button className="button">SEND</button>
        </div>
      </DefaultLayout>
    </>
  );
};

export default Contact;
