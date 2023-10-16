import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./reducers/productSlice";
import productManageSlice from "./reducers/productManageSlice";
import userManageSlice from "./reducers/userManageSlice";

const reduxStore = configureStore({
  reducer: {
    productSlice: ProductSlice,
    productManageSlice: productManageSlice,
    userManageSlice: userManageSlice,
  },
});

export default reduxStore;
