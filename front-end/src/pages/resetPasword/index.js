import "./index.css";
import Button from "../../component/common/button";
import Input from "../../component/common/input";

const ResetPassword = () => {
  return (
    <main>
      <section id="reset-password">
        <div className="reset-password__content d-flex flex-column align-items-center">
          <p className="reset-password__content__heading heading-01 mb-5">
            Have you Forgotten Your Password ?
          </p>

          <div className="reset-password__content__title d-flex flex-column">
            <p className="heading-03 mb-5">
              If you've forgotten your password, enter your e-mail address and
              we'll send you an e-mail
            </p>

            <Input className="heading-05 mb-5" placeholder="Email" />

            <Button className="body-large" text="RESET PASSWORD"></Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResetPassword;
