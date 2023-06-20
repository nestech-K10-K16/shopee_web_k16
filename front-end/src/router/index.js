import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { PATH_NAME } from '../constants/common';
import MyAccount from '../pages/myAccount';

const AppRoute = () => {
  return (
    <Routes>
      <Route path={PATH_NAME.MY_ACCOUNT} element={<MyAccount />} />
    </Routes>
  );
};

export default AppRoute;
