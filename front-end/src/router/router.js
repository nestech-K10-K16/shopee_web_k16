import MyAccount from "../pages/myAccount";
import ResetPassword from "../pages/resetPasword";

import Home from "../pages/home";
import Shop from "../pages/shop";
import Product from "../pages/product";

import Blog from "../pages/blog";
import OurStory from "../pages/ourStory";

import Contact from "../pages/contact";

export const ROUTE_ID = {
  HOME: "HomeRoute",
  SHOP: "ShopRoute",
  PRODUCT: "ProductRoute",

  MY_ACCOUNT: "MyAccountRoute",
  RESET_PASSWORD: "ResetPasswordRoute",

  BLOG: "BlogRoute",
  OUR_STORY: "OurStoryRoute",

  CONTACT: "ContactRoute",
};

export const PATHNAME_LIST = {
  HOME: "/",
  SHOP: "/shop",
  PRODUCT: "/product",

  MY_ACCOUNT: "/my-account",
  RESET_PASSWORD: "/reset-password",

  BLOG: "/blog",
  OUR_STORY: "/our-story",

  CONTACT: "/contact",
};

export const DEFAULT_PATHNAME = PATHNAME_LIST.HOME;

// Define routes
export const HomeRoute = {
  id: ROUTE_ID.HOME,
  path: PATHNAME_LIST.HOME,
  component: Home,
};

export const ShopRoute = {
  id: ROUTE_ID.SHOP,
  path: PATHNAME_LIST.SHOP,
  component: Shop,
};

export const ProductRoute = {
  id: ROUTE_ID.PRODUCT,
  path: PATHNAME_LIST.PRODUCT,
  component: Product,
};

export const MyAccountRoute = {
  id: ROUTE_ID.MY_ACCOUNT,
  path: PATHNAME_LIST.MY_ACCOUNT,
  component: MyAccount,
};

export const ResetPasswordRoute = {
  id: ROUTE_ID.RESET_PASSWORD,
  path: PATHNAME_LIST.RESET_PASSWORD,
  component: ResetPassword,
};

export const BlogRoute = {
  id: ROUTE_ID.BLOG,
  path: PATHNAME_LIST.BLOG,
  component: Blog,
};

export const OurStoryRoute = {
  id: ROUTE_ID.OUR_STORY,
  path: PATHNAME_LIST.OUR_STORY,
  component: OurStory,
};

export const ContactRoute = {
  id: ROUTE_ID.CONTACT,
  path: PATHNAME_LIST.CONTACT,
  component: Contact,
};

export const appRoute = [
  HomeRoute,
  ShopRoute,
  ProductRoute,
  MyAccountRoute,
  ResetPasswordRoute,
  BlogRoute,
  OurStoryRoute,
  ContactRoute,
];
