import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/auth.slice";
import cartSlice from "./cart/cartSlice";
import categorySlice from "./category/category.slice";
import homeSlice from "./home/home.slice";
import shopSlice from "./shop/shop.slice";

const store = configureStore({
  reducer: {
    home: homeSlice,
    shop: shopSlice,
    category: categorySlice,
    auth: authSlice,
    cart: cartSlice,
  },
});
export default store;
