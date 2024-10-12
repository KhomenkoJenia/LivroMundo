import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/CartSlice";
import productsReducer from "./slice/ProductsSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});

export default store;
