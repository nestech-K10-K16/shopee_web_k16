import React from "react";
import { Route, Routes } from "react-router-dom";

import { PATH_NAME } from "../constants/common";

import Header from "../component/header";
import Footer from "../component/footer";

import Home from "../page/home";
import Shop from "../page/shop";
import Product from "../page/product";
import Blog from "../page/blog";
import OurStory from "../page/ourStory";
import MyAccount from "../page/myAccount";
import ResetPassword from "../page/resetPasword";
import Contact from "../page/contact";

const AppRoute = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={PATH_NAME.SHOP} element={<Shop />} />
        <Route path={PATH_NAME.PRODUCT} element={<Product />} />
        <Route path={PATH_NAME.BLOG} element={<Blog />} />
        <Route path={PATH_NAME.OUR_STORY} element={<OurStory />} />
        <Route path={PATH_NAME.MY_ACCOUNT} element={<MyAccount />} />
        <Route path={PATH_NAME.RESET_PASSWORD} element={<ResetPassword />} />
        <Route path={PATH_NAME.CONTACT} element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
};

export default AppRoute;
