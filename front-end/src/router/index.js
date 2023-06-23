import React from "react";
import { Route, Routes } from "react-router-dom";

import MyAccount from "../page/myAccount";
import { PATH_NAME } from "../constants/common";

const AppRoute = () => {
  return (
    <Routes>
      <Route path={PATH_NAME.MY_ACCOUT} element={<MyAccount />}></Route>
    </Routes>
  );
};

export default AppRoute;
