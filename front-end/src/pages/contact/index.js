import "./index.css";
import Input from "../../component/input";
import Button from "../../component/button";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact__content d-flex flex-column align-items-center">
        <div className="contact__content__heading mb-5">
          <p className="heading-01 mb-3">Contact Us</p>

          <p className="heading-03">
            Say Hello send us your thoughts about our products or share your
            ideas with our Team!
          </p>
        </div>

        <form className="contact__content__info-customer d-flex flex-column mb-5">
          <div className="d-flex mb-4">
            <Input className="me-5" placeholder="First name"></Input>

            <Input className="ms-5" placeholder="Last name"></Input>
          </div>

          <div className="d-flex mb-4">
            <Input className="me-5" placeholder="Email"></Input>

            <Input className="ms-5" placeholder="Subject"></Input>
          </div>

          <Input className="w-100 mb-5" placeholder="Message"></Input>
        </form>

        <Button className="w-75" text="SEND"></Button>
      </div>
    </section>
  );
};

export default Contact;
