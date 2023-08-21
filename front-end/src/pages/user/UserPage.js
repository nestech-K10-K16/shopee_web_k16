import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { DefaultLayout } from "components";
import useAuthForm from "components/common/useAuthForm/UseAuthForm";
import ClipLoader from "react-spinners/ClipLoader";
import "./index.css";

const UserPage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
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
      <div className="Loader">
        {loading ? (
          <div className="loader-wrapper">
            <ClipLoader
              size={80}
              color="#d42d27"
              loading={loading}
              speedMultiplier={0.5}
            />
          </div>
        ) : (
          <div className="hover__navbar">
            <DefaultLayout>
              <div className="flex justify-center border-t border-solid border-color-gray w-[1320px] h-[900px] ml-[96px]">
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

                      <div
                        data-validate="email is required"
                        className="fill-email"
                      >
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
                      <button type="submit" className="btn-black">
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

                      <div
                        data-validate="email is required"
                        className="fill-email"
                      >
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
                      <button type="submit" className="btn-black">
                        Register
                      </button>
                    </TabPanel>
                  </Tabs>
                </form>
              </div>
            </DefaultLayout>
          </div>
        )}
      </div>
    </>
  );
};

export default UserPage;
