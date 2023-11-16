import { SystemLayout } from "component/utils";
import {
  Account,
  BillManage,
  Blog,
  BlogSingle,
  CheckOut,
  Contact,
  CustomerManage,
  Home,
  MyAccount,
  Order,
  OurStory,
  Privacy,
  Product,
  ProductManage,
  ResetPassword,
  Shop,
  ShoppingCart,
  Test,
  UserManage,
} from "pages";

export const PATHNAME_LIST = {
  HOME: "/",
  SHOP: "/shop",
  PRODUCT: "/product",
  CART: "/cart",
  CHECK_OUT: "/check-out",
  MY_ACCOUNT: "/my-account",
  ACCOUNT: "/account",
  RESET_PASSWORD: "/reset-password",
  BLOG: "/blog",
  BLOG_SINGLE: "/blog-single",
  OUR_STORY: "/our-story",
  ORDER: "/order",
  CONTACT: "/contact",
  PRIVACY: "/privacy",
  TEST: "/test",
  // system
  PRODUCT_MANAGE: "/system/product-manage",
  USER_MANAGE: "/system/user-manage",
  CUSTOMER_MANAGE: "/system/customer-manage",
  BILL_MANAGE: "/system/bill-manage",
};

export const publicRoute = [
  { path: PATHNAME_LIST.HOME, component: Home },
  { path: PATHNAME_LIST.SHOP, component: Shop },
  { path: PATHNAME_LIST.PRODUCT, component: Product },
  { path: PATHNAME_LIST.CART, component: ShoppingCart },
  { path: PATHNAME_LIST.CHECK_OUT, component: CheckOut },
  { path: PATHNAME_LIST.MY_ACCOUNT, component: MyAccount },
  { path: PATHNAME_LIST.RESET_PASSWORD, component: ResetPassword },
  { path: PATHNAME_LIST.BLOG, component: Blog },
  { path: PATHNAME_LIST.BLOG_SINGLE, component: BlogSingle },
  { path: PATHNAME_LIST.OUR_STORY, component: OurStory },
  { path: PATHNAME_LIST.ORDER, component: Order },
  { path: PATHNAME_LIST.CONTACT, component: Contact },
  { path: PATHNAME_LIST.PRIVACY, component: Privacy },
  { path: PATHNAME_LIST.TEST, component: Test },
];

export const privateRoute = [
  { path: PATHNAME_LIST.ACCOUNT, component: Account },
  {
    path: PATHNAME_LIST.USER_MANAGE,
    component: UserManage,
    layout: SystemLayout,
    role: 0,
  },
  {
    path: PATHNAME_LIST.PRODUCT_MANAGE,
    component: ProductManage,
    layout: SystemLayout,
    role: 0,
  },
  {
    path: PATHNAME_LIST.CUSTOMER_MANAGE,
    component: CustomerManage,
    layout: SystemLayout,
    role: 0,
  },
  {
    path: PATHNAME_LIST.BILL_MANAGE,
    component: BillManage,
    layout: SystemLayout,
    role: 0,
  },
];
