import { createSlice } from "@reduxjs/toolkit";
import { getProductByCategory, getProductToShop } from "./shop.thunk";

const INIT_STATE = {
  list: [],
  listCategory: [],
};
const shopSlice = createSlice({
  name: "shop",
  initialState: INIT_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductToShop.fulfilled, (state, action) => {
      const { payload } = action;
      state.list = payload;
      const categories = payload.map((product) => product.category);
      state.listCategory = [...new Set(categories)].map((category, index) => ({
        id: index + 1,
        name: category,
      }));
    });
    builder.addCase(getProductByCategory.fulfilled, (state, action) => {
      const { payload } = action;
      state.list = payload;
      // console.log(payload);
    });
  },
});
export default shopSlice.reducer;
