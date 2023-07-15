import ShopPage from "../pages/shop/ShopPage";
import BlogPage from "../pages/blog/BlogPage";
import OurStoryPage from "../pages/ourStory/OurStoryPage";
import SearchPage from "../pages/search/SearchPage";
import CartPage from "../pages/cart/CartPage";
import MyAccount from "../pages/myaccount/MyAccount";

export const ROUTE_ID = {
  SHOP: "ShopRoute",
  BLOG: "BlogRoute",
  OUR_STORY: "Our_StoryRoute",
  SEARCH: "SearchRoute",
  CART: "CartRoute",
  USER: "UserRoute",
};

export const PATHNAME_LIST = {
  SHOP: "/Shop",
  BLOG: "/Blog",
  OUR_STORY: "/OurStory",
  SEARCH: "/Search",
  CART: "/Cart",
  USER: "/User",
};

export const NAME_LAYOUT = {
  DEFAULT_LAYOUT: "DefaultLayout",
  MAIN_LAYOUT: "MainLayout",
};

export const DEFAULT_PATHNAME = "/";

// Define routes
export const UserRoute = {
  id: ROUTE_ID.USER,
  path: PATHNAME_LIST.USER,
  component: MyAccount,
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

export const appRoute = [
  ShopRoute,
  BlogRoute,
  Our_StoryRoute,
  SearchRoute,
  CartRoute,
  UserRoute,
];
