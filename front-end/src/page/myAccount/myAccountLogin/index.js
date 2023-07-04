import "./index.css";
import { useState } from "react";

const MyAccoutLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [homePage, setHomePage] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onClickButton = () => {
    setHomePage("#");

    //email
    if (!email) {
      setMessage("yêu cầu nhập email");
      return;
    }

    if (!email.includes("@")) {
      setMessage("email phải có kí tự @");
      return;
    }
    if (email.length > 50) {
      setMessage("email của bạn không được quá 50 kí tự");
      return;
    }

    //password
    if (!password) {
      setMessage("yêu cầu nhập password");
      return;
    }

    if (email.length > 6 && email.length < 20) {
      setMessage("password của bạn phải hơn 6 kí và nhỏ hơn 20 kí tự");
      return;
    }

    if (!password.match(/[A-Z]/)) {
      setMessage("yêu cầu password của bạn phải có chữ viết hoa");
      return;
    }

    if (!password.match(/\d/)) {
      setMessage("yêu cầu password của bạn phải có số");
      return;
    }

    if (!password.match(/[^a-zA-Z\d]/)) {
      setMessage("yêu cầu password của bạn phải có kí tự đặc biệt");
      return;
    }

    setHomePage("/home");
  };

  return (
    <main>
      <section id="my-account">
        <div className="my-account__content">
          <p
            className="heading-01 margin-bottom-4rem"
          >
            My account
          </p>

          <div
            className="my-account__content__switch
                       display-flex
                       background-color-bright-gray-border-radius-10px
                       margin-bottom-5rem"
          >
            <a
              className="my-account__content__switch-sign-in
                         border-5px-solid-bright-gray-background-color-white-padding-0-8rem-3-8rem-border-radius-6px
                         color-black-text-decoration-none"
              href="/my-account-login"
            >
              <p className="heading-03">Sign in</p>
            </a>

            <a
              className="my-account__content__switch-register
                         border-5px-solid-bright-gray-background-color-bright-gray-padding-0-8rem-3-8rem-border-radius-6px
                         color-black-text-decoration-none"
              href="/my-account-register"
            >
              <p className="heading-03">Register</p>
            </a>
          </div>

          <form
            className="my-account__content__user
                       display-flex-flex-direction-column"
          >
            <p className="color-red">{message}</p>

            <input
              className="my-account__content__user-account 
                         border-0-5px-solid-bright-gray-outline-none-border-top-0-border-left-0-border-right-0-height-3rem
                         margin-bottom-0-5rem"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => onChangeEmail(e)}
            ></input>

            <input
              className="my-account__content__user-password 
                         border-0-5px-solid-bright-gray-outline-none-border-top-0-border-left-0-border-right-0-height-3rem
                         margin-bottom-1rem"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => onChangePassword(e)}
            ></input>

            <div
              className="my-account__content__user-remember-me
                         display-flex
                         margin-bottom-3rem"
            >
              <input className="margin-right-0-5rem" type="checkbox" />
              <p>Remember me</p>
            </div>

            <a
              className="my-account__content__user-login
                         background-color-black-color-white-text-decoration-none-padding-1rem-4rem-border-radius-6px
                         color-black-text-decoration-none
                         margin-bottom-1rem"
              href={homePage}
              onClick={onClickButton}
            >
              <p>SIGN IN</p>
            </a>

            <a
              className="my-account__content__user-forgot-password
                         color-black-text-decoration-none"
              href="/reset-password"
            >
              <p>Have you forgotten your password</p>
            </a>
          </form>
        </div>
      </section>
    </main>
  );
};

export default MyAccoutLogin;
