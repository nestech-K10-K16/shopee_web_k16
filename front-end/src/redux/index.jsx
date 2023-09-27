import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./reducers/productSlice";

const reduxStore = configureStore({ reducer: { productSlice: ProductSlice } });

export default reduxStore;
