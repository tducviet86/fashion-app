import { createSlice } from "@reduxjs/toolkit";
import { fetchProductThunk, getProductByTagThunk } from "./home.thunk";

const INIT_STATE = {
  list: {},
  // detail: null,
};
const homeSlice = createSlice({
  name: "home",
  initialState: INIT_STATE,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(fetchProductThunk.fulfilled, (state, action) => {
    //   state.detail = action.payload;
    // });
    builder.addCase(getProductByTagThunk.fulfilled, (state, action) => {
      const { tag, products } = action.payload;
      state.list[tag] = products;
    });
  },
});
export default homeSlice.reducer;
