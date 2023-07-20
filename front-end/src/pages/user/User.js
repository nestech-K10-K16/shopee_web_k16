import React from "react";
import "./index.css";
import { Navbar } from "../../components";
// import { Footer } from "../../components";
import MyAccount from "../../components/myaccount/MyAccount";

const User = () => {
  return (
    <>
      <Navbar />
      <MyAccount />
      {/* <Footer /> */}
    </>
  );
};

export default User;
