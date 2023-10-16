//Pages
import MyAccount from "pages/myAccount";
import ResetPassword from "pages/resetPasword";
import Home from "pages/home";
import Shop from "pages/shop";
import Product from "pages/product";
import Cart from "pages/cart";
import CheckOut from "pages/checkOut";
import Blog from "pages/blog";
import BlogSingle from "pages/blogSingle";
import OurStory from "pages/ourStory";
import Account from "pages/account";
import Order from "pages/Order";
import Contact from "pages/contact";
import Privacy from "pages/privacy";
import Test from "pages/test";

export const PATHNAME_LIST = {
  HOME: "/",
  SHOP: "/shop",
  PRODUCT: "/product",
  CART: "/cart",
  CHECK_OUT: "/check-out",
  MY_ACCOUNT: "/my-account",
  RESET_PASSWORD: "/reset-password",
  BLOG: "/blog",
  BLOG_SINGLE: "/blog-single",
  OUR_STORY: "/our-story",
  ACCOUNT: "/account",
  ORDER: "/order",
  CONTACT: "/contact",
  PRIVACY: "/privacy",
  TEST: "/test",
};

// Pages
const HomeRoute = {
  path: PATHNAME_LIST.HOME,
  component: Home,
};

const ShopRoute = {
  path: PATHNAME_LIST.SHOP,
  component: Shop,
};

const ProductRoute = {
  path: PATHNAME_LIST.PRODUCT,
  component: Product,
};

const CartRoute = {
  path: PATHNAME_LIST.CART,
  component: Cart,
};

const CheckOutRoute = {
  path: PATHNAME_LIST.CHECK_OUT,
  component: CheckOut,
};

const MyAccountRoute = {
  path: PATHNAME_LIST.MY_ACCOUNT,
  component: MyAccount,
};

export const ResetPasswordRoute = {
  path: PATHNAME_LIST.RESET_PASSWORD,
  component: ResetPassword,
};

const BlogRoute = {
  path: PATHNAME_LIST.BLOG,
  component: Blog,
};

const BlogSingleRoute = {
  path: PATHNAME_LIST.BLOG_SINGLE,
  component: BlogSingle,
};

const OurStoryRoute = {
  path: PATHNAME_LIST.OUR_STORY,
  component: OurStory,
};

const AccountRoute = {
  path: PATHNAME_LIST.ACCOUNT,
  component: Account,
};

const OrderRoute = {
  path: PATHNAME_LIST.ORDER,
  component: Order,
};

const ContactRoute = {
  path: PATHNAME_LIST.CONTACT,
  component: Contact,
};

const PrivacyRoute = {
  path: PATHNAME_LIST.PRIVACY,
  component: Privacy,
};

const TestRoute = {
  path: PATHNAME_LIST.TEST,
  component: Test,
};

export const appRoute = [
  HomeRoute,
  ShopRoute,
  ProductRoute,
  CartRoute,
  CheckOutRoute,
  MyAccountRoute,
  ResetPasswordRoute,
  BlogRoute,
  BlogSingleRoute,
  OurStoryRoute,
  AccountRoute,
  OrderRoute,
  ContactRoute,
  PrivacyRoute,
  TestRoute,
];
