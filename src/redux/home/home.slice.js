import { createSlice } from "@reduxjs/toolkit";
import { getProductBySaleThunk, getProductByNewThunk } from "./home.thunk";

const INIT_STATE = {
  list: {},
  loading: {
    new: true,
    sale: true,
  },

  // detail: null,
};
const homeSlice = createSlice({
  name: "home",
  initialState: INIT_STATE,
  reducers: {},
  extraReducers: (builder) => {
    //New
    builder.addCase(getProductByNewThunk.pending, (state, action) => {
      state.loading.new = true;
    });
    builder.addCase(getProductByNewThunk.fulfilled, (state, action) => {
      const { payload } = action;
      state.list.new = payload;
      state.loading.new = false;
    });
    //sale
    builder.addCase(getProductBySaleThunk.pending, (state, action) => {
      state.loading.sale = true;
    });
    builder.addCase(getProductBySaleThunk.fulfilled, (state, action) => {
      const { payload } = action;
      state.list.sale = payload;
      state.loading.sale = false;
    });
  },
});
export default homeSlice.reducer;
