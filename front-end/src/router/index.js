import React from "react";
import { Route, Routes } from "react-router-dom";

import { PATH_NAME } from "../constants/common";
import ResetPassword from "../page/resetPasword";
import Contact from "../page/contact";
import Home from "../page/home";
import Shop from "../page/shop";
import MyAccoutLogin from "../page/myAccount/myAccountLogin";
import MyAccoutRegister from "../page/myAccount/myAccountRegister";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path={PATH_NAME.HOME} element={<Home />} />
      <Route path={PATH_NAME.SHOP} element={<Shop />} />

      <Route path={PATH_NAME.MY_ACCOUT_LOGIN} element={<MyAccoutLogin />} />
      <Route path={PATH_NAME.MY_ACCOUT_REGISTER} element={<MyAccoutRegister />} />

      <Route path={PATH_NAME.RESET_PASSWORD} element={<ResetPassword />} />
      <Route path={PATH_NAME.CONTACT} element={<Contact />} />
    </Routes>
  );
};

export default AppRoute;
