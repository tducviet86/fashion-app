import { createAsyncThunk } from "@reduxjs/toolkit";
import { authInstance } from "../../helpers/api";

export const AddToCart = createAsyncThunk("cart/AddToCart", async (data) => {
  try {
    const response = await authInstance.post(`/cart/add`, {
      productId: data.productId,
      quantity: data.quantity,
    });
    const { cart } = response.data;

    return cart;
  } catch (error) {
    console.log("Error fetching cart:", error);
  }
});
export const getCart = createAsyncThunk("cart/getCart", async () => {
  try {
    const response = await authInstance.get(`/cart`);
    const { cart } = response.data;

    return cart;
  } catch (error) {
    console.log("Error fetching cart:", error);
  }
});
