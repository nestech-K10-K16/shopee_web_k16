import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import {
  emailValidator,
  passwordValidator,
} from "../../components/regex/regexValidator";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "./myAccount.css";
import Footer from "../../components/footer/Footer";

// import axios from "axios";

const MyAccount = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const handleChange = (index) => {
    setTabIndex(index);
  };

  const history = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    if (localStorage.getItem("auth")) history.push("/default-layout");
  });

  const formSubmitter = (e) => {
    e.preventDefault();
    setSuccessMsg("");
    if (!emailValidator(email))
      return setErrorMsg("Please enter valid email id");

    if (!passwordValidator(password))
      return setErrorMsg(
        "Password should have minimum 8 character with the combination of uppercase, lowercase, numbers and special characters"
      );
    if (email !== "perfect@123.com" || password !== "Perfect@123")
      return setErrorMsg("Invalid email or password");

    history("/default-layout");
    // localStorage.setItem("auth", true);
  };

  return (
    <>
      <div className="Shoppe__myAccount section__padding">
        <form onSubmit={formSubmitter}>
          <h1>My account</h1>
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList selectedIndex={tabIndex} onSelect={handleChange}>
              <div className="Shoppe__myAccount-container">
                <Tab value={1}>
                  <div className="Shoppe__myAccount-login">Sign in</div>
                </Tab>
                <Tab value={2}>
                  <div className="Shoppe__myAccount-register">Register</div>
                </Tab>
              </div>
            </TabList>
            <TabPanel value={1}>
              {errorMsg.length > 0 && (
                <div
                  style={{
                    marginBottom: "10px",
                    color: "red",
                    width: "550px ",
                  }}
                >
                  {errorMsg}
                </div>
              )}
              {successMsg.length > 0 && (
                <div style={{ marginBottom: "10px", color: "green" }}>
                  {successMsg}
                </div>
              )}

              <div data-validate="email is required" className="fill-email">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div
                className="fill-password"
                data-validate="Password is required"
              >
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="remember">
                <input className="checkbox" type="checkbox" />
                <label>Remember me</label>
              </div>
              <button type="submit" className="btn">
                Sign In
              </button>
              <h5>
                <Link to="/ResetPassword">
                  Have you forgotten your password?
                </Link>
              </h5>
            </TabPanel>
            <TabPanel value={2} className={tabIndex === 2 ? "tabIndex" : ""}>
              <div className="fill-username">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div data-validate="email is required" className="fill-email">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div
                className="fill-password"
                data-validate="Password is required"
              >
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="remember">
                <input className="checkbox" type="checkbox" />
                <label>Remember me</label>
              </div>
              <button type="submit" className="btn">
                Register
              </button>
            </TabPanel>
          </Tabs>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default MyAccount;
