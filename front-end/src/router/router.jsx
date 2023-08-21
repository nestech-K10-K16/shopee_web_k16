import {
  OrderPage,
  Checkout,
  Privacy,
  Contact,
  Account,
  HomePage,
  Product,
  ResetPassword,
  ShopPage,
  BlogPage,
  OurStoryPage,
  CartPage,
  UserPage,
} from "pages";
import { BlogSingle, ShoppingBag } from "components";

export const ROUTE_ID = {
  HOME: "HomeRoute",
  ORDER: "OrderRoute",
  CHECKOUT: "CheckoutRoute",
  PRiVACY: "PrivacyRoute",
  CONTACT: "ContactRoute",
  ACCOUNT: "AccountRoute",
  BLOG_SINGLE: "BlogSingleRoute",
  PRODUCT: "ProductRoute",
  RESET_PASSWORD: "ResetPasswordRoute",
  SHOP: "ShopRoute",
  BLOG: "BlogRoute",
  OUR_STORY: "Our_StoryRoute",
  SEARCH: "SearchRoute",
  SHOPPING_BAG: "ShoppingBagRoute",
  CART: "CartRoute",
  USER: "UserRoute",
};

const createRoute = (id, path, component) => ({
  id,
  path,
  component,
  layout: null,
});

export const appRoute = [
  createRoute(ROUTE_ID.ORDER, "/order", OrderPage),
  createRoute(ROUTE_ID.CHECKOUT, "/checkout", Checkout),
  createRoute(ROUTE_ID.PRiVACY, "/privacy", Privacy),
  createRoute(ROUTE_ID.CONTACT, "/contact", Contact),
  createRoute(ROUTE_ID.ACCOUNT, "/accounts", Account),
  createRoute(ROUTE_ID.BLOG_SINGLE, "/blog-single", BlogSingle),
  createRoute(ROUTE_ID.HOME, "/", HomePage),
  createRoute(ROUTE_ID.PRODUCT, "/product", Product),
  createRoute(ROUTE_ID.RESET_PASSWORD, "/reset-password", ResetPassword),
  createRoute(ROUTE_ID.SHOP, "/shop", ShopPage),
  createRoute(ROUTE_ID.BLOG, "/blog", BlogPage),
  createRoute(ROUTE_ID.OUR_STORY, "/our-story", OurStoryPage),
  createRoute(ROUTE_ID.SHOPPING_BAG, "/shopping-bag", ShoppingBag),
  createRoute(ROUTE_ID.CART, "/cart", CartPage),
  createRoute(ROUTE_ID.USER, "/user", UserPage),
];
