import "./index.css";
import Navbar from "../../../component/navbar";
import Footer from "../../../component/footer";
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
      <Navbar />

      <section id="my-account">
        <div>
          <div>
            <p className="heading-01">My account</p>
          </div>

          <div className="my-account__switch">
            <a className="my-account__switch-sign-in" href="/my-account-login">
              <p className="heading-03">Sign in</p>
            </a>

            <a className="my-account__switch-register" href="/my-account-register">
              <p className="heading-03">Register</p>
            </a>
          </div>

          <form className="my-account__user">
            <p className="color-red">{message}</p>

            <input
              className="my-account__user-account 
                         border-0-5px-solid-bright-gray-outline-none-border-top-0-border-left-0-border-right-0"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => onChangeEmail(e)}
            ></input>

            <input
              className="my-account__user-password 
                         border-0-5px-solid-bright-gray-outline-none-border-top-0-border-left-0-border-right-0"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => onChangePassword(e)}
            ></input>

            <div className="my-account__user-remember-me">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>

            <a
              className="my-account__user-login text-decoration-none"
              href={homePage}
              onClick={onClickButton}
            >
              <p>SIGN IN</p>
            </a>

            <a
              className="my-account__user-forgot-password"
              href="/reset-password"
            >
              <p>Have you forgotten your password</p>
            </a>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default MyAccoutLogin;
