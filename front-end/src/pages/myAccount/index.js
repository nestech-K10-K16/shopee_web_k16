import Button from "../../component/common/button";
import Input from "../../component/common/input";
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

  const [tabIndex, setTabIndex] = useState(0);

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

  const onSelectSwitch = () => {};

  return (
    <main>
      <section id="my-account">
        <div className="my-account__content">
          <p className="heading-01 mb-5">My account</p>

          <Tabs selectedIndex={tabIndex} onSelect={(e) => setTabIndex(e)}>
            <TabList
              className="my-account__content__switch 
                         d-flex list-unstyled mb-5"
              onSelect={onSelectSwitch}
            >
              <Tab className="my-account__content__switch-login heading-03">
                Login
              </Tab>
              <Tab className="my-account__content__switch-register heading-03">
                Register
              </Tab>
            </TabList>

            <TabPanel className="my-account__content__login">
              <form className="d-flex flex-column">
                <p className="text-danger">{message}</p>

                <Input
                  className="heading-05 mb-2"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => onChangeEmail(e)}
                ></Input>

                <Input
                  className="heading-05 mb-3"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => onChangePassword(e)}
                ></Input>

                <div
                  className="my-account__content__sign-in__remember-me
                             d-flex align-items-center mb-4"
                >
                  <input className="heading-05 me-3" type="checkbox" />
                  Remember me
                </div>

                <Button
                  className="body-large mb-3"
                  text="SIGN IN"
                  href={homePage}
                  onClick={onClickButtonLogin}
                ></Button>

                <a
                  className="my-account__content__sign-in__forgot-password
                             heading-05 text-black text-decoration-none"
                  href={PATH_NAME.RESET_PASSWORD}
                >
                  <p>Have you forgotten your password</p>
                </a>
              </form>
            </TabPanel>

            <TabPanel className="my-account__content__register">
              <form className="my-account__user d-flex flex-column">
                <p className="text-danger">{message}</p>

                <Input
                  className="heading-05 mb-2"
                  placeholder="Full name"
                  value={fullName}
                  onChange={(e) => onChangeFullName(e)}
                ></Input>

                <Input
                  className="heading-05 mb-2"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => onChangeEmail(e)}
                ></Input>

                <Input
                  className="heading-05 mb-2"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => onChangePassword(e)}
                ></Input>

                <Input
                  className="heading-05 mb-4"
                  type="password"
                  placeholder="Enter the password"
                  value={rePassword}
                  onChange={(e) => onChangeRePassword(e)}
                ></Input>

                <Button
                  className="body-large"
                  text="SIGN UP"
                  href={homePage}
                  onClick={onClickButtonRegister}
                ></Button>
              </form>
            </TabPanel>
          </Tabs>
        </div>
      </section>
    </main>
  );
};

export default MyAccount;
