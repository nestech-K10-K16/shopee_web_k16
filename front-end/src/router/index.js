import React from "react";
import { Route, Routes } from "react-router-dom";

import { PATH_NAME } from "../constants/common";

import Navbar from "../component/navbar";
import Footer from "../component/footer";

import ResetPassword from "../page/resetPasword";
import Contact from "../page/contact";
import Home from "../page/home";
import Shop from "../page/shop";
import Product from "../page/product";
import MyAccoutLogin from "../page/myAccount/myAccountLogin";
import MyAccoutRegister from "../page/myAccount/myAccountRegister";

const AppRoute = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={PATH_NAME.HOME} element={<Home />} />
        <Route path={PATH_NAME.SHOP} element={<Shop />} />
        <Route path={PATH_NAME.PRODUCT} element={<Product />} />

        <Route path={PATH_NAME.MY_ACCOUT_LOGIN} element={<MyAccoutLogin />} />
        <Route
          path={PATH_NAME.MY_ACCOUT_REGISTER}
          element={<MyAccoutRegister />}
        />

        <Route path={PATH_NAME.RESET_PASSWORD} element={<ResetPassword />} />
        <Route path={PATH_NAME.CONTACT} element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default AppRoute;
