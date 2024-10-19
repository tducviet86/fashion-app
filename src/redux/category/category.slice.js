import { createSlice } from "@reduxjs/toolkit";
import {
  getSubCategoryByCategory,
  getProductsByCategory,
  getSubCategory,
} from "./category.thunk";

const INIT_STATE = {
  loading: false,
  list: [],
  category: [],
  filter: {
    range: [0, 1000],
    color: "",
    size: "",
    category: "",
  },
};
const categorySlice = createSlice({
  name: "category",
  initialState: INIT_STATE,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setCatetory: () => {},
  },
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
    builder.addCase(getSubCategory.fulfilled, (state, action) => {
      const { payload } = action;
      state.list = payload;
    });
  },
});
export const { setFilter } = categorySlice.actions;
export default categorySlice.reducer;
