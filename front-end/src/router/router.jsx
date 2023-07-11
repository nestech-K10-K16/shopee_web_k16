import ShopPage from "../pages/shop";
import BlogPage from "../pages/blog";
import OurStoryPage from "../pages/ourStory";

export const ROUTE_ID = {
  SHOP: "ShopRoute",
  BLOG: "BlogRoute",
  OUR_STORY: "Our_StoryRoute",
};

export const PATHNAME_LIST = {
  SHOP: "/Shop",
  BLOG: "/Blog",
  OUR_STORY: "/OurStory",
};

export const NAME_LAYOUT = {
  DEFAULT_LAYOUT: "DefaultLayout",
  MAIN_LAYOUT: "MainLayout",
};

export const DEFAULT_PATHNAME = PATHNAME_LIST.HOME;

// Define routes
export const ShopRoute = {
  id: ROUTE_ID.SHOP,
  path: PATHNAME_LIST.SHOP,
  component: ShopPage,
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

export const appRoute = [ShopRoute, BlogRoute, Our_StoryRoute];
