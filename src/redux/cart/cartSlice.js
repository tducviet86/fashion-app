import { createSlice } from "@reduxjs/toolkit";
import { AddToCart, getCart, updateQuantity } from "./cartThunk";

const INIT_STATE = {
  loading: false,
  list: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState: INIT_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(AddToCart.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(AddToCart.fulfilled, (state, action) => {
      const { payload } = action;
      state.list.push(payload);
      state.loading = false;
    });
    builder.addCase(getCart.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getCart.fulfilled, (state, action) => {
      const { payload } = action;
      state.list = payload;
      state.loading = false;
    });
    builder.addCase(updateQuantity.fulfilled, (state, action) => {
      const { payload } = action;
      state.list = payload;
      state.loading = false;
    });
  },
});

export default cartSlice.reducer;
