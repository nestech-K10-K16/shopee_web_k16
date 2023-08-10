import MyAccount from "pages/myAccount";
import ResetPassword from "pages/resetPasword";

import Home from "pages/home";
import Shop from "pages/shop";
import Product from "pages/product";

import Blog from "pages/blog";
import BlogSingle from "pages/blogSingle";
import OurStory from "pages/ourStory";

import Account from "pages/account";
import ViewOrder from "pages/viewOrder";

import Contact from "pages/contact";
import Privacy from "pages/privacy";

import Test from "pages/test";

export const ROUTE_ID = {
  HOME: "HomeRoute",
  SHOP: "ShopRoute",
  PRODUCT: "ProductRoute",

  MY_ACCOUNT: "MyAccountRoute",
  RESET_PASSWORD: "ResetPasswordRoute",

  BLOG: "BlogRoute",
  BLOG_SINGLE: "BlogSingleRoute",
  OUR_STORY: "OurStoryRoute",

  ACCOUNT: "AccountRoute",
  VIEW_ORDER: "ViewOrderRoute",

  CONTACT: "ContactRoute",
  PRIVACY: "PrivacyRoute",

  TEST: "TestRoute",
};

export const PATHNAME_LIST = {
  HOME: "/",
  SHOP: "/shop",
  PRODUCT: "/product",

  MY_ACCOUNT: "/my-account",
  RESET_PASSWORD: "/reset-password",

  BLOG: "/blog",
  BLOG_SINGLE: "/blog-single",
  OUR_STORY: "/our-story",

  ACCOUNT: "/account",
  VIEW_ORDER: "/view-order",

  CONTACT: "/contact",
  PRIVACY: "/privacy",

  TEST: "/test",
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

export const BlogSingleRoute = {
  id: ROUTE_ID.BLOG_SINGLE,
  path: PATHNAME_LIST.BLOG_SINGLE,
  component: BlogSingle,
};

export const OurStoryRoute = {
  id: ROUTE_ID.OUR_STORY,
  path: PATHNAME_LIST.OUR_STORY,
  component: OurStory,
};

export const AccountRoute = {
  id: ROUTE_ID.ACCOUNT,
  path: PATHNAME_LIST.ACCOUNT,
  component: Account,
};

export const ViewOrderRoute = {
  id: ROUTE_ID.VIEW_ORDER,
  path: PATHNAME_LIST.VIEW_ORDER,
  component: ViewOrder,
};

export const ContactRoute = {
  id: ROUTE_ID.CONTACT,
  path: PATHNAME_LIST.CONTACT,
  component: Contact,
};

export const PrivacyRoute = {
  id: ROUTE_ID.PRIVACY,
  path: PATHNAME_LIST.PRIVACY,
  component: Privacy,
};

export const TestRoute = {
  id: ROUTE_ID.TEST,
  path: PATHNAME_LIST.TEST,
  component: Test,
};

export const appRoute = [
  HomeRoute,
  ShopRoute,
  ProductRoute,
  MyAccountRoute,
  ResetPasswordRoute,
  BlogRoute,
  BlogSingleRoute,
  OurStoryRoute,
  AccountRoute,
  ViewOrderRoute,
  ContactRoute,
  PrivacyRoute,
  TestRoute,
];
