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
    setCategory: (state, action) => {
      state.category = action.payload.category;
    },
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
      console.log("pr: ", state.list);
      state.list = payload;
    });
  },
});
export const { setFilter, setCategory } = categorySlice.actions;
export default categorySlice.reducer;
