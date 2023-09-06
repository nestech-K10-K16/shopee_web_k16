import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./reducers/feature/productSlice";

const reduxStore = configureStore({ reducer: { productSlice: ProductSlice } });

export default reduxStore;
