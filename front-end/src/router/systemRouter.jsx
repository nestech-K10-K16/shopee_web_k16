import ProductManage from "system/productManage";
import UserManage from "system/userManage";

export const PATH_SYSTEM_LIST = {
  PRODUCT_MANAGE: "/system/product-manage",
  USER_MANAGE: "/system/user-manage",
};

const ProductManageRoute = {
  path: PATH_SYSTEM_LIST.PRODUCT_MANAGE,
  component: ProductManage,
};

const UserManageRoute = {
  path: PATH_SYSTEM_LIST.USER_MANAGE,
  component: UserManage,
};

export const systemRoute = [ProductManageRoute, UserManageRoute];
