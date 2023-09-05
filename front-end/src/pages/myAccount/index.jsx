import { React, useState } from "react";
import "./index.scss";
import { Button, Input } from "component/common";
import { validateEmail, validatePassword } from "utils";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import { TYPE_BUTTON } from "constants/common";

const MyAccount = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [message, setMessage] = useState("");

  const [homePage, setHomePage] = useState("");

  const [tabIndex, setTabIndex] = useState(0);

  const onClickButtonLogin = () => {
    if (!validateEmail(email)) {
      setMessage("email không hợp lệ");
    }

    if (!validatePassword(password)) {
      setMessage("password không hợp lệ");
      return;
    }
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
  };

  const tab = ["Login", "Register"];

  return (
    <section id="my-account">
      <div className="my-account__content">
        <p className="heading-01 mb-5">My account</p>

        <Tabs selectedIndex={tabIndex} onSelect={(e) => setTabIndex(e)}>
          <TabList className="my-account__content__switch heading-03 flex mb-8">
            {tab?.map((item, index) => {
              return (
                <Tab
                  className={tabIndex === index ? "tab-active" : ""}
                  key={index}
                >
                  <Link className="text-black-1">{item}</Link>
                </Tab>
              );
            })}
          </TabList>

          <TabPanel className="my-account__content__login flex flex-col ">
            <p className="text-rusty-red">{message}</p>

            <Input
              className="heading-05 mb-3"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Input>

            <Input
              className="heading-05 mb-3"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Input>

            <span className="flex items-center mb-8">
              <input className="heading-05 me-3" type="checkbox" />
              Remember me
            </span>

            <Button
              className="black body-large mb-3"
              type={TYPE_BUTTON.LINK}
              to={homePage}
              onClick={onClickButtonLogin}
            >
              SIGN IN
            </Button>

            <Link className="heading-05">Have you forgotten your password</Link>
          </TabPanel>

          <TabPanel className="my-account__content__register flex flex-col">
            <p className="text-rusty-red">{message}</p>

            <Input
              className="heading-05 mb-2"
              placeholder="Full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            ></Input>

            <Input
              className="heading-05 mb-2"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Input>

            <Input
              className="heading-05 mb-2"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Input>

            <Input
              className="heading-05 mb-8"
              type="password"
              placeholder="Enter the password"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
            ></Input>

            <Button
              className="black body-large"
              type={TYPE_BUTTON.LINK}
              to={homePage}
              onClick={onClickButtonRegister}
            >
              SIGN UP
            </Button>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default MyAccount;
