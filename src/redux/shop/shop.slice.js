import { createSlice } from "@reduxjs/toolkit";
import { getCategories, getProductsToCategory } from "./shop.thunk";

const INIT_STATE = {
  category: [],
  loading: false,
  list: [],
};
const shopSlice = createSlice({
  name: "shop",
  initialState: INIT_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      const { payload } = action;
      state.category = payload;
      state.loading = false;
    });
  },
});
export default shopSlice.reducer;
// tao 2 loading or tao them 1 slice
