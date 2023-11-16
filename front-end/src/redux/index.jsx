import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./reducers/productSlice";
import userSlice from "./reducers/userSlice";
import customerSlice from "./reducers/cusomterSlice";
import billSlice from "./reducers/billSlice";
import billDetailSlice from "./reducers/billDetailSlice";
import cartSlice from "./reducers/cartSlice";

const reduxStore = configureStore({
  reducer: {
    userSlice: userSlice,
    productSlice: ProductSlice,
    cartSlice: cartSlice,
    customerSlice: customerSlice,
    billSlice: billSlice,
    billDetailSlice: billDetailSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default reduxStore;
