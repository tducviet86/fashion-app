import { createAsyncThunk } from "@reduxjs/toolkit";
import { authInstance } from "../../helpers/api";

export const getProductByCategory = createAsyncThunk(
  "products/getProductByCategory",

  async (params) => {
    const response = await authInstance.get("/products-categories");
    console.log(response.data);
    const { products } = response.data;
    return products;
  }
);
export const getProductToShop = createAsyncThunk(
  "products/getProductToShop",

  async (params) => {
    const response = await authInstance.get("/products");
    const { products } = response.data;
    return products;
  }
);
