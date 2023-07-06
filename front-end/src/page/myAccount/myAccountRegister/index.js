import "./index.css";
import { useState } from "react";

const MyAccoutRegister = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [message, setMessage] = useState("");
  const [homePage, setHomePage] = useState("");

  const onChangeFullName = (e) => {
    setFullName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeRePassword = (e) => {
    setRePassword(e.target.value);
  };

  const onClickButton = () => {
    setHomePage("#");

    //full name
    if (!fullName) {
      setMessage("yêu cầu nhập full name");
      return;
    }

    if (fullName.length > 50) {
      setMessage("full name của bạn không được quá 50 kí tự");
      return;
    }

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

    if (password.length > 6 && password.length < 20) {
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

    //re password
    if (!rePassword) {
      setMessage("yêu cầu nhập lại password");
      return;
    }

    if (rePassword.length > 6 && rePassword.length < 20) {
      setMessage("nhập lại password của bạn phải hơn 6 kí và nhỏ hơn 20 kí tự");
      return;
    }

    if (!rePassword.match(/[A-Z]/)) {
      setMessage("yêu cầu nhập lại password của bạn phải có chữ viết hoa");
      return;
    }

    if (!rePassword.match(/\d/)) {
      setMessage("yêu cầu nhập lại password của bạn phải có số");
      return;
    }

    if (!rePassword.test()) {
      setMessage("yêu cầu nhập lại password của bạn phải có kí tự đặc biệt");
      return;
    }

    setHomePage("/home");
  };

  return (
    <main>
      <section id="my-account">
        <div>
          <div>
            <p className="heading-01 margin-bottom-4rem">My account</p>
          </div>

          <div
            className="my-account__switch
                       background-color-bright-gray-border-radius-10px
                       display-flex
                       margin-bottom-5rem"
          >
            <a
              className="my-account__switch-sign-in
                         border-5px-solid-bright-gray-background-color-bright-gray-padding-0-8rem-3-8rem-border-radius-6px
                         color-black-text-decoration-none"
              href="/my-account-login"
            >
              <p className="heading-03 mb-0">Sign in</p>
            </a>

            <a
              className="my-account__switch-register
                         border-5px-solid-bright-gray-background-color-white-padding-0-8rem-3-8rem-border-radius-6px
                         color-black-text-decoration-none"
              href="/my-account-register"
            >
              <p className="heading-03 mb-0">Register</p>
            </a>
          </div>

          <form
            className="my-account__user
                           display-flex-flex-direction-column"
          >
            <p className="color-red">{message}</p>

            <input
              className="border-0-5px-solid-bright-gray-outline-none-border-top-0-border-left-0-border-right-0-height-3rem
                         margin-bottom-0-5rem"
              type="text"
              placeholder="Full name"
              value={fullName}
              onChange={(e) => onChangeFullName(e)}
            ></input>

            <input
              className="border-0-5px-solid-bright-gray-outline-none-border-top-0-border-left-0-border-right-0-height-3rem
                         margin-bottom-0-5rem"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => onChangeEmail(e)}
            ></input>

            <input
              className="border-0-5px-solid-bright-gray-outline-none-border-top-0-border-left-0-border-right-0-height-3rem
                         margin-bottom-0-5rem"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => onChangePassword(e)}
            ></input>

            <input
              className="border-0-5px-solid-bright-gray-outline-none-border-top-0-border-left-0-border-right-0-height-3rem
                         margin-bottom-2rem"
              type="password"
              placeholder="Enter the password"
              value={rePassword}
              onChange={(e) => onChangeRePassword(e)}
            ></input>

            <a
              className="background-color-black-color-white-text-decoration-none-padding-1rem-4rem-border-radius-6px"
              href={homePage}
              onClick={onClickButton}
            >
              <p className="mb-0">SIGN UP</p>
            </a>
          </form>
        </div>
      </section>
    </main>
  );
};

export default MyAccoutRegister;
