import React from "react";
import { Link } from "react-router-dom";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "./index.css";
import { DefaultLayout } from "components";
import useAuthForm from "components/common/useAuthForm/UseAuthForm";

const UserPage = () => {
  const {
    tabIndex,
    setTabIndex,
    handleChange,
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    errorMsg,
    successMsg,
    signInActive,
    registerActive,
    userChange,
    formSubmitter,
  } = useAuthForm();
  return (
    <>
      <div className="hover__navbar">
        <DefaultLayout>
          <div className="Shoppe__myAccount section__padding">
            <form onSubmit={formSubmitter}>
              <h1>My account</h1>
              <Tabs
                selectedIndex={tabIndex}
                onSelect={(index) => setTabIndex(index)}
              >
                <TabList selectedIndex={tabIndex} onSelect={handleChange}>
                  <div className="Shoppe__myAccount-container">
                    <Tab
                      value={1}
                      className={`Shoppe__myAccount-login ${
                        signInActive ? "active-tab" : ""
                      }`}
                      onClick={() => userChange(0)}
                    >
                      Sign in
                    </Tab>
                    <Tab
                      value={2}
                      className={`Shoppe__myAccount-register ${
                        registerActive ? "active-tab" : ""
                      }`}
                      onClick={() => userChange(1)}
                    >
                      Register
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
                    <Link to="/reset-password">
                      Have you forgotten your password?
                    </Link>
                  </h5>
                </TabPanel>
                <TabPanel value={2}>
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
        </DefaultLayout>
      </div>
    </>
  );
};

export default UserPage;
