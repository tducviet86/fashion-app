import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./category/category.slice";
import homeSlice from "./home/home.slice";
import shopSlice from "./shop/shop.slice";

const store = configureStore({
  reducer: {
    home: homeSlice,
    shop: shopSlice,
    category: categorySlice,
  },
});
export default store;
