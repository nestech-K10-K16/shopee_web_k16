import React from "react";
import { Route, Routes } from "react-router-dom";

import { PATH_NAME } from "../constants/common";
import MyAccount from "../page/myAccount";
import ResetPassword from "../page/resetPasword";
import Contact from "../page/contact";

const AppRoute = () => {
  return (
    <Routes>
      <Route path={PATH_NAME.MY_ACCOUT} element={<MyAccount />} />
      <Route path={PATH_NAME.RESET_PASSWORD} element={<ResetPassword />} />
      <Route path={PATH_NAME.CONTACT} element={<Contact />} />
    </Routes>
  );
};

export default AppRoute;
