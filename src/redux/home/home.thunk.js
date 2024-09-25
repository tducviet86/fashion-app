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
export const getProductByTagThunk = createAsyncThunk(
  "products/getProductByTagThunk",
  async (tag) => {
    const response = await authInstance.get("/products-tag", {
      params: { tag },
    });
    const { products } = response.data;
    return { tag, products };
  }
);
