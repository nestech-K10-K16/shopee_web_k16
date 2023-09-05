import { configureStore } from "@reduxjs/toolkit";
import { ProductSlice } from "./reducers";

const reduxStore = configureStore({ reducer: { productSlice: ProductSlice } });

export default reduxStore;
