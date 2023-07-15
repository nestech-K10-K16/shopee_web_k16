import React from "react";
import "./myAccount.css";
import Navbar from "../../components/navbar/Navbar";
import { Footer } from "../../components";

const MyAccount = () => {
  return (
    <>
      <Navbar />
      <div className="Shoppe__myAccount section__padding">
        <div className="Shoppe__myAccount-navbar"></div>
      </div>
      <Footer />
    </>
  );
};

export default MyAccount;
