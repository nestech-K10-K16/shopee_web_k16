import { PATH_NAME } from "../../constants/common";
import "./index.css";

import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const MyAccount = () => {
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

  const onClickButtonLogin = () => {
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
      setMessage("password của bạn phải hơn 6 kí tự và nhỏ hơn 20 kí tự");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setMessage("yêu cầu password của bạn phải có chữ viết hoa");
      return;
    }

    if (!/[0-9]/.test(password)) {
      setMessage("yêu cầu password của bạn phải có số");
      return;
    }

    if (!/[^a-zA-Z\d]/.test(password)) {
      setMessage("yêu cầu password của bạn phải có kí tự đặc biệt");
      return;
    }

    setHomePage(PATH_NAME.HOME);
  };

  const onClickButtonRegister = () => {
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

    if (email.length > 6 && email.length < 20) {
      setMessage("password của bạn phải hơn 6 kí tự và nhỏ hơn 20 kí tự");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setMessage("yêu cầu password của bạn phải có chữ viết hoa");
      return;
    }

    if (!/[0-9]/.test(password)) {
      setMessage("yêu cầu password của bạn phải có số");
      return;
    }

    if (!/[^a-zA-Z\d]/.test(password)) {
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

    if (!/[A-Z]/.test(rePassword)) {
      setMessage("yêu cầu nhập lại password của bạn phải có chữ viết hoa");
      return;
    }

    if (!/[0-9]/.test(rePassword)) {
      setMessage("yêu cầu nhập lại password của bạn phải có số");
      return;
    }

    if (!/[^a-zA-Z\d]/.test(rePassword)) {
      setMessage("yêu cầu nhập lại password của bạn phải có kí tự đặc biệt");
      return;
    }

    setHomePage(PATH_NAME.HOME);
  };

  return (
    <main>
      <section id="my-account">
        <div className="my-account__content">
          <p className="heading-01 margin-bottom-4rem">My account</p>

          <Tabs>
            <TabList
              className="my-account__content__switch 
                         d-flex list-unstyled margin-bottom-4rem
                         background-color-bright-gray-border-radius-10px"
            >
              <Tab className="ok"> 
                <button
                  className="my-account__content__switch-login heading-03
                             border-5px-solid-bright-gray-background-color-bright-gray-padding-0-8rem-3-8rem-border-radius-10px"
                >
                  Login
                </button>
              </Tab>
              <Tab className="my-account__content__switch-register">
                <button
                  className="heading-03 
                             border-5px-solid-bright-gray-background-color-bright-gray-padding-0-8rem-3-8rem-border-radius-10px"
                >
                  Register
                </button>
              </Tab>
            </TabList>

            <TabPanel className="my-account__content__login">
              <form className="d-flex flex-column">
                <p className="text-danger">{message}</p>

                <input
                  className="my-account__content__sign-in__account 
                             heading-05 margin-bottom-1rem
                             border-0-5px-solid-bright-gray-outline-none-border-top-0-border-left-0-border-right-0-height-3rem "
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => onChangeEmail(e)}
                ></input>

                <input
                  className="my-account__content__sign-in__password 
                             heading-05 margin-bottom-1rem
                             border-0-5px-solid-bright-gray-outline-none-border-top-0-border-left-0-border-right-0-height-3rem"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => onChangePassword(e)}
                ></input>

                <div
                  className="my-account__content__sign-in__remember-me
                             d-flex align-items-center margin-bottom-2rem"
                >
                  <input
                    className="heading-05 margin-right-0-5rem"
                    type="checkbox"
                  />
                  Remember me
                </div>

                <a
                  className="my-account__content__user-login
                             body-large margin-bottom-1rem
                             background-color-black-color-white-text-decoration-none-padding-1rem-4rem-border-radius-10px"
                  href={homePage}
                  onClick={onClickButtonLogin}
                >
                  SIGN IN
                </a>

                <a
                  className="my-account__content__sign-in__forgot-password
                             heading-05 text-black text-decoration-none"
                  href="/reset-password"
                >
                  <p>Have you forgotten your password</p>
                </a>
              </form>
            </TabPanel>

            <TabPanel className="my-account__content__register">
              <form
                className="my-account__user
                           d-flex flex-column"
              >
                <p className="text-danger">{message}</p>

                <input
                  className="heading-05 margin-bottom-0-5rem
                            border-0-5px-solid-bright-gray-outline-none-border-top-0-border-left-0-border-right-0-height-3rem"
                  type="text"
                  placeholder="Full name"
                  value={fullName}
                  onChange={(e) => onChangeFullName(e)}
                ></input>

                <input
                  className="heading-05 margin-bottom-0-5rem
                            border-0-5px-solid-bright-gray-outline-none-border-top-0-border-left-0-border-right-0-height-3rem"
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => onChangeEmail(e)}
                ></input>

                <input
                  className="heading-05 margin-bottom-0-5rem
                            border-0-5px-solid-bright-gray-outline-none-border-top-0-border-left-0-border-right-0-height-3rem"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => onChangePassword(e)}
                ></input>

                <input
                  className="heading-05 margin-bottom-2rem
                            border-0-5px-solid-bright-gray-outline-none-border-top-0-border-left-0-border-right-0-height-3rem"
                  type="password"
                  placeholder="Enter the password"
                  onChange={(e) => onChangeRePassword(e)}
                ></input>

                <a
                  className="body-large 
                            background-color-black-color-white-text-decoration-none-padding-1rem-4rem-border-radius-10px"
                  href={homePage}
                  onClick={onClickButtonRegister}
                >
                  SIGN UP
                </a>
              </form>
            </TabPanel>
          </Tabs>
        </div>
      </section>
    </main>
  );
};

export default MyAccount;
