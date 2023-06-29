import MyAccount from "../page/myAccount";
import ResetPassword from "../page/resetPasword";
import Contact from "../page/contact";

export const ROUTE_ID = {
  MY_ACCOUNT: "MyAccountRoute",
  RESET_PASSWORD: "ResetPasswordRoute",
  CONTACT: "ContactRoute",
};

export const PATH_NAME_LIST = {
  MY_ACCOUNT: "/my-account",
  RESET_PASSWORD: "/reset-password",
  CONTACT: "/contact",
};

export const DEFAULT_PATH_NAME = PATH_NAME_LIST.MY_ACCOUNT;

// Define routes
export const MyAccountRoute = {
  id: ROUTE_ID.MY_ACCOUNT,
  path: PATH_NAME_LIST.MY_ACCOUNT,
  component: MyAccount,
};

export const ResetPasswordRoute = {
  id: ROUTE_ID.RESET_PASSWORD,
  path: PATH_NAME_LIST.RESET_PASSWORD,
  component: ResetPassword,
};

export const ContactRoute = {
  id: ROUTE_ID.Contact,
  path: PATH_NAME_LIST.RESET_PASSWORD,
  component: Contact,
};

export const appRoute = { MyAccountRoute, ResetPasswordRoute, ContactRoute };
