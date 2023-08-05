import ShopPage from "pages/shop/ShopPage";
import BlogPage from "pages/blog/BlogPage";
import OurStoryPage from "pages/ourStory/OurStoryPage";
import SearchPage from "pages/search/SearchPage";
import CartPage from "pages/cart/CartPage";
import UserPage from "pages/user/UserPage";
import ResetPassword from "pages/resetPassword/ResetPassword";
import HomePage from "pages/home/HomePage";
import Product from "pages/product/Product";
import BlogSingle from "components/common/blogSingle/BlogSingle";

export const ROUTE_ID = {
  HOME: "HomeRoute",
  PRODUCT: "ProductRoute",
  BLOG_SINGLE: "BlogSingleRoute",
  RESET_PASSWORD: "ResetPasswordRoute",
  SHOP: "ShopRoute",
  BLOG: "BlogRoute",
  OUR_STORY: "Our_StoryRoute",
  SEARCH: "SearchRoute",
  CART: "CartRoute",
  USER: "UserRoute",
};

export const PATHNAME_LIST = {
  HOME: "/",
  BLOG_SINGLE: "/blog-single",
  PRODUCT: "/product",
  RESET_PASSWORD: "/reset-password",
  SHOP: "/shop",
  BLOG: "/blog",
  OUR_STORY: "/our-story",
  SEARCH: "/search",
  CART: "/cart",
  USER: "/user",
};

export const NAME_LAYOUT = {
  DEFAULT_LAYOUT: "DefaultLayout",
  MAIN_LAYOUT: "MainLayout",
};

export const DEFAULT_PATHNAME = "/";

// Define routes
export const BlogSingleRoute = {
  id: ROUTE_ID.BLOG_SINGLE,
  path: PATHNAME_LIST.BLOG_SINGLE,
  component: BlogSingle,
  layout: null,
};

export const HomeRoute = {
  id: ROUTE_ID.HOME,
  path: PATHNAME_LIST.HOME,
  component: HomePage,
  layout: null,
};

export const ProductRoute = {
  id: ROUTE_ID.PRODUCT,
  path: PATHNAME_LIST.PRODUCT,
  component: Product,
  layout: null,
};

export const ResetPasswordRoute = {
  id: ROUTE_ID.RESET_PASSWORD,
  path: PATHNAME_LIST.RESET_PASSWORD,
  component: ResetPassword,
  layout: null,
};

export const ShopRoute = {
  id: ROUTE_ID.SHOP,
  path: PATHNAME_LIST.SHOP,
  component: ShopPage,
  layout: null,
};

export const BlogRoute = {
  id: ROUTE_ID.BLOG,
  path: PATHNAME_LIST.BLOG,
  component: BlogPage,
  layout: null,
};

export const Our_StoryRoute = {
  id: ROUTE_ID.OUR_STORY,
  path: PATHNAME_LIST.OUR_STORY,
  component: OurStoryPage,
  layout: null,
};

export const UserRoute = {
  id: ROUTE_ID.USER,
  path: PATHNAME_LIST.USER,
  component: UserPage,
  layout: null,
};

export const CartRoute = {
  id: ROUTE_ID.CART,
  path: PATHNAME_LIST.CART,
  component: CartPage,
  layout: null,
};

export const SearchRoute = {
  id: ROUTE_ID.SEARCH,
  path: PATHNAME_LIST.SEARCH,
  component: SearchPage,
  layout: null,
};

export const appRoute = [
  HomeRoute,
  BlogSingleRoute,
  ProductRoute,
  ResetPasswordRoute,
  ShopRoute,
  BlogRoute,
  Our_StoryRoute,
  SearchRoute,
  CartRoute,
  UserRoute,
];