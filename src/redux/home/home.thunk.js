import { createAsyncThunk } from "@reduxjs/toolkit";
import { authInstance } from "../../helpers/api";

export const fetchProductThunk = createAsyncThunk(
  "products/fetchProductThunk",

  async (params = {}) => {
    const response = await authInstance.get("/products", {
      params: {
        tag: params.tag,
      },
    });
    const { products } = response.data;
    return products;
  }
);
export const getProductBySaleThunk = createAsyncThunk(
  "products/getProductBySaleThunk",
  async () => {
    const response = await authInstance.get("/products-tag", {
      params: { tag: "sale" },
    });
    const { products } = response.data;
    return products;
  }
);
export const getProductByNewThunk = createAsyncThunk(
  "products/getProductByNewThunk",
  async () => {
    const response = await authInstance.get("/products-tag", {
      params: { tag: "new" },
    });
    const { products } = response.data;
    return products;
  }
);
