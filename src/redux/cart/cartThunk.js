import { createAsyncThunk } from "@reduxjs/toolkit";
import { authInstance } from "../../helpers/api";

export const AddToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ productId, quantity }) => {
    try {
      const response = await authInstance.post(`/cart/add`, {
        productId,
        quantity,
      });
      const { cart } = response.data;
      return cart;
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  }
);
export const getCart = createAsyncThunk("cart/getCart", async () => {
  try {
    const response = await authInstance.get(`/cart`);
    const { cart } = response.data;

    return cart;
  } catch (error) {
    console.log("Error fetching cart:", error);
  }
});
export const updateQuantity = createAsyncThunk(
  "cart/updateQuantity",
  async ({ productId, quantityChange }) => {
    try {
      const response = await authInstance.put(`/cart/updateQuantity`, {
        productId,
        quantityChange,
      });
      const { cart } = response.data;
      return cart;
    } catch (error) {
      console.error("Error updating quantity:", error);
      throw error;
    }
  }
);
export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async ({ productId }) => {
    try {
      const response = await authInstance.delete(`/cart/delete/${productId}`);
      const { cart } = response.data;
      return cart;
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  }
);
export const clearCart = createAsyncThunk("cart/clearCart", async () => {
  try {
    const response = await authInstance.delete(`/cart/clearCart`);
    const { cart } = response.data;
    return cart;
  } catch (error) {
    console.error("Error removing from cart:", error);
  }
});
