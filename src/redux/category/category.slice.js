import { createSlice } from "@reduxjs/toolkit";
import {
  getSubCategoryByCategory,
  getProductsByCategory,
} from "./category.thunk";

const INIT_STATE = {
  loading: false,
  list: [],
  category: [],
};
const categorySlice = createSlice({
  name: "category",
  initialState: INIT_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsByCategory.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProductsByCategory.fulfilled, (state, action) => {
      const { payload } = action;
      state.list = payload;
      state.loading = false;
    });
    builder.addCase(getSubCategoryByCategory.fulfilled, (state, action) => {
      const { payload } = action;
      state.category = payload;
    });
  },
});
export default categorySlice.reducer;
