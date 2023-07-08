import React from "react";
import { Route, Routes } from "react-router-dom";

import { PATH_NAME } from "../constants/common";

import Header from "../component/header";
import Footer from "../component/footer";

import ResetPassword from "../page/resetPasword";
import Contact from "../page/contact";
import Home from "../page/home";
import Shop from "../page/shop";
import Product from "../page/product";
import MyAccount from "../page/myAccount";

const AppRoute = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={PATH_NAME.HOME} element={<Home />} />
        <Route path={PATH_NAME.SHOP} element={<Shop />} />
        <Route path={PATH_NAME.PRODUCT} element={<Product />} />
        <Route path={PATH_NAME.MY_ACCOUNT} element={<MyAccount />} />
        <Route path={PATH_NAME.RESET_PASSWORD} element={<ResetPassword />} />
        <Route path={PATH_NAME.CONTACT} element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default AppRoute;
