import { PATH_NAME } from "../constants/common";
import HomePage from "pages/home";
import BlogPage from "../pages/blog";
import ContactPage from "../pages/contact";
import MyAccountPage from "../pages/myAccount";
import ProductPage from "../pages/product";
import ResetPasswordPage from "../pages/resetPassword";
import ShopPage from "../pages/shop";

const ROUTE_ID = {
  HOME: "Home",
  SHOP: "Shop",
  PRODUCT: "Product",
  BLOG: "Blog",
  MY_ACCOUNT: "MyAccount",
  RESET_PASSWORD: "ResetPassword",
  CONTACT: "Contact",
};

const HOME_ROUTE = {
  RouteID: ROUTE_ID.HOME,
  Path: PATH_NAME.HOME,
  Component: HomePage,
};

const SHOP_ROUTE = {
  RouteID: ROUTE_ID.SHOP,
  Path: PATH_NAME.SHOP,
  Component: ShopPage,
};

const PRODUCT_ROUTE = {
  RouteID: ROUTE_ID.PRODUCT,
  Path: PATH_NAME.PRODUCT,
  Component: ProductPage,
};

const BLOG_ROUTE = {
  RouteID: ROUTE_ID.BLOG,
  Path: PATH_NAME.BLOG,
  Component: BlogPage,
};

const MY_ACCOUNT_ROUTE = {
  RouteID: ROUTE_ID.MY_ACCOUNT,
  Path: PATH_NAME.MY_ACCOUNT,
  Component: MyAccountPage,
};

const RESET_PASSWORD_ROUTE = {
  RouteID: ROUTE_ID.RESET_PASSWORD,
  Path: PATH_NAME.RESET_PASSWORD,
  Component: ResetPasswordPage,
};

const CONTACT_ROUTE = {
  RouteID: ROUTE_ID.CONTACT,
  Path: PATH_NAME.CONTACT,
  Component: ContactPage,
};

export const APP_ROUTE = [
  HOME_ROUTE,
  SHOP_ROUTE,
  PRODUCT_ROUTE,
  BLOG_ROUTE,
  MY_ACCOUNT_ROUTE,
  RESET_PASSWORD_ROUTE,
  CONTACT_ROUTE,
];
